import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LightingComponent } from './modules/lighting/lighting.component';
import {  SettingsComponent } from './modules/settings/settings.component';
import {  ClockComponent } from './shared/components/clock/clock.component';
import {  AutomationComponent } from './modules/automation/automation.component';



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
