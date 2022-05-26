import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperature',
  template: '<p>{{rng}}</p>',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent {
  rng = Math.random();

  constructor() {
    setInterval(() => this.rng = Math.random(),500)
  }

}
