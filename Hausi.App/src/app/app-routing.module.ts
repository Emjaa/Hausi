import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LightingComponent } from './lighting/lighting.component';
import {  SettingsComponent } from './settings/settings.component';
import {  ClockComponent } from './clock/clock.component';
import {  AutomationComponent } from './automation/automation.component';



const routes: Routes = [
  { path: 'lighting', component: LightingComponent },
  { path: 'settings', component:  SettingsComponent},
  { path: 'clock', component:  ClockComponent},
  { path: 'automation', component:  AutomationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
