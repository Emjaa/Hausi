import {Component, OnInit, ViewChild} from '@angular/core';
import {Lamp} from "./models/lamp";
import {MatAccordion} from "@angular/material/expansion";
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Room} from "./models/room";

@Component({
  selector: 'app-lighting',
  templateUrl: './lighting.component.html',
  styleUrls: ['./lighting.component.css'],
})

@Injectable()
export class LightingComponent implements OnInit {
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  lamps: Lamp[] = [];
  lampIndex = 0;

  items = [];
  url = 'http://echo.jsontest.com/key/testkes/value/testvalue'
  serverurl = 'https://localhost:7083/Lighting';
  lighturl = 'http://192.168.178.56/off';
  constructor(private http: HttpClient) {
    http.get(this.serverurl).toPromise().then(data => {
      console.log(data);
      console.log('test');
      for (let key in data)
        if (data.hasOwnProperty(key))
          if (data) {
            // @ts-ignore

            this.items.push(data[key])
          }
    })
  }


  ngOnInit(): void {
    // for (let i = 0; i < 10; i++){
    //   //this.lamps.fill(new Lamp(i));
    //   this.lamps.push(new Lamp(i))
    //   this.lampIndex++;
    // }
    let ip = "192.168.178.56";
    let lamp = new Lamp(1);
    lamp.ipAddress = ip;
    lamp.name = "Bed Light";
    lamp.turnOnUrl = ip + '/on';
    lamp.turnOffUrl = ip + '/off';
    let room = new Room(1);
    room.name = "Bedroom";
    lamp.room = room;
    this.lamps.push(lamp);
  }

  removeLamp(index: number): void {
    this.lamps.splice(index);
  }

  createLamp(): void {
    let lamp = new Lamp(this.lampIndex);
    let ip = "ip address";
    lamp.ipAddress = ip;
    lamp.name = "Name";
    lamp.turnOnUrl = ip + '/on';
    lamp.turnOffUrl = ip + '/off';
    let room = new Room(1);
    room.name = "TestRoom";
    lamp.room = room;
    Math.random() > 0.5 ? lamp.On() : lamp.Off();
    this.lamps.push(lamp);
    this.lampIndex++;
  }

  deletaAll(): void {
    this.lamps = [];
  }

  turnAllOn(): void {
    for (let lamp of this.lamps) {
      lamp.On();
    }
    this.http.get('http://192.168.178.56/on').toPromise().then();
    console.log('turned On');
  }

  turnAllOff(): void {
    for (let lamp of this.lamps) {
      lamp.Off();
    }
    this.http.get('http://192.168.178.56/off').toPromise().then();
    console.log('turned Off');
  }

  getOn(): number {
    return this.lamps.filter(lamp => lamp.state).length;
  }

  getOff(): number {
    return this.lamps.filter(lamp => !lamp.state).length;
  }

}
