import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavMenuComponent } from './main-nav-menu/main-nav-menu.component';
import { KlantenComponent } from './klanten/klanten.component';
import { AangiftenComponent } from './aangiften/aangiften.component';
import { ServiceberichtenComponent } from './serviceberichten/serviceberichten.component';
import { DossierComponent } from './dossier/dossier.component';
import { AdviessignalenComponent } from './adviessignalen/adviessignalen.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainNavMenuComponent,
    KlantenComponent,
    AangiftenComponent,
    ServiceberichtenComponent,
    DossierComponent,
    AdviessignalenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
