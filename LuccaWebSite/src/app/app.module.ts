import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FooterComponent } from './footer/footer.component';

import { LogoComponent } from './header/logo/logo.component';

import { AnnivComponent } from './footer/anniv/anniv.component';
import { PersonnelComponent } from './footer/personnel/personnel.component';
import { AVenirComponent } from './calendar/a-venir/a-venir.component';
import { AujComponent } from './calendar/auj/auj.component';
import { DemainComponent } from './calendar/demain/demain.component';
import { VisiteurNewArrivantComponent } from './footer/visiteur-new-arrivant/visiteur-new-arrivant.component';
import { NouveauxArrivantsComponent } from './footer/visiteur-new-arrivant/nouveaux-arrivants/nouveaux-arrivants.component';
import { VisiteursComponent } from './footer/visiteur-new-arrivant/visiteurs/visiteurs.component';

import { J1Component } from './calendar/a-venir/j1/j1.component';
import { J2Component } from './calendar/a-venir/j2/j2.component';
import { J3Component } from './calendar/a-venir/j3/j3.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CalendarComponent,
    FooterComponent,
    LogoComponent,
    AnnivComponent,
    PersonnelComponent,
    AVenirComponent,
    AujComponent,
    DemainComponent,
    VisiteurNewArrivantComponent,
    NouveauxArrivantsComponent,
    VisiteursComponent,
  
   
    J1Component,
    J2Component,
    J3Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }