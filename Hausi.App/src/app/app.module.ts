import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSliderModule} from "@angular/material/slider";
import {MatButtonModule} from "@angular/material/button";
import { LightingComponent } from './lighting/lighting.component';
import {MatCardModule} from "@angular/material/card";
import {MatRadioModule} from "@angular/material/radio";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {FormsModule} from "@angular/forms";
import { LampComponent } from './lamp/lamp.component';
import { TemperatureComponent } from './temperature/temperature.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatExpansionModule} from "@angular/material/expansion";
import { ClockComponent } from './clock/clock.component';
import { LedStripComponent } from './led-strip/led-strip.component';
import { SettingsComponent } from './settings/settings.component';
import { RelaysComponent } from './relays/relays.component';

import { AutomationComponent } from './automation/automation.component';

@NgModule({
  declarations: [
    AppComponent,
    LightingComponent,
    LampComponent,
    TemperatureComponent,
    ClockComponent,
    LedStripComponent,
    SettingsComponent,
    RelaysComponent,
    AutomationComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatSliderModule,
        MatButtonModule,
        MatCardModule,
        MatRadioModule,
        MatCheckboxModule,
        MatSlideToggleModule,
        FormsModule,
        MatGridListModule,
        MatExpansionModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
