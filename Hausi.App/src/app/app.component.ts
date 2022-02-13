import { Component } from '@angular/core';
import { Calendar } from "./Calendar/Calendar";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hausi.App';

  appointments = [
    {title : "test_ap", fromDate : new Date().setDate(6), toDate: new Date().setDate(7)},
    {title : "popo dr besuchen"},
    {title : "viel zu früh junge"}
  ];
}



