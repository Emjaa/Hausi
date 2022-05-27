import {Component, OnInit, ViewChild} from '@angular/core';
import {Lamp} from "../Models/lamp";
import {MatAccordion} from "@angular/material/expansion";
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

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
  constructor(private http: HttpClient) {
    http.get(this.url).toPromise().then(data => {
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
  }

  removeLamp(index: number): void {
    this.lamps.splice(index);
  }

  createLamp(): void {
    this.lamps.push(new Lamp(this.lampIndex))
    this.lampIndex++;
  }

  deletaAll(): void {
    this.lamps = [];
  }

  turnAllOn(): void {
    for (let lamp of this.lamps) {
      lamp.On();
    }
  }

  turnAllOff(): void {
    for (let lamp of this.lamps) {
      lamp.Off();
    }
  }

  getOn(): number {
    return this.lamps.filter(lamp => lamp.state == true).length;
  }

  getOff(): number {
    return this.lamps.filter(lamp => lamp.state == false).length;
  }

}
