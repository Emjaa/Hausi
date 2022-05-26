import {Component, Input, OnInit} from '@angular/core';
import {Lamp} from "../Models/lamp";
import {ThemePalette} from "@angular/material/core";
import {colors} from "ng-packagr/lib/utils/color";

@Component({
  selector: 'app-lamp',
  styleUrls: ['./lamp.component.css'],
  templateUrl:'lamp.component.html'
})
export class LampComponent implements OnInit{

  @Input() lamp!: Lamp;
  color: ThemePalette = 'accent';
  isChecked = false;
  disabled = false;
  ngOnInit(): void {
    this.isChecked = this.lamp.GetState();
  }
  GetColor(): ThemePalette{
    let ThemePalette;
    if (this.lamp.GetState()) {
      this.color = 'warn';
      return this.color;
    } else {
      this.color = 'primary';
      return this.color;
    }
  }
}
