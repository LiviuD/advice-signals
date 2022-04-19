import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AangiftenComponent } from './aangiften/aangiften.component';
import { AdviessignalenComponent } from './adviessignalen/adviessignalen.component';
import { KlantenComponent } from './klanten/klanten.component';
import { ServiceberichtenComponent } from './serviceberichten/serviceberichten.component';

const routes: Routes = [
  { path: 'aangiften', component: AangiftenComponent },
  { path: 'klanten', component: KlantenComponent, children : [
    { path: 'adviessignalenComponent', component: AdviessignalenComponent},
    { path: 'serviceberichtenComponent', component: ServiceberichtenComponent} 
  ] },
  { path: 'serviceberichten', component: ServiceberichtenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
