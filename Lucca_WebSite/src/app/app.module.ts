import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { CalendarComponent } from './Calendar/calendar.component';
import { FooterComponent } from './Footer/footer.component';
import { LogoComponent } from './Header/logo/logo.component';
import { CenterHeaderComponent } from './Header/center-header/center-header.component';
import { ParamComponent } from './Header/param./param..component';
import { LieuComponent } from './Header/center-header/lieu/lieu.component';
import { HoraComponent } from './Header/center-header/hora/hora.component';
import { AujComponent } from './Calendar/Auj/auj.component';
import { AVenirComponent } from './Calendar/A-venir/a-venir.component';
import { DemainComponent } from './Calendar/Demain/demain.component';
import { J1Component } from './Calendar/A-venir/j1/j1.component';
import { J2Component } from './Calendar/A-venir/j2/j2.component';
import { J3Component } from './Calendar/A-venir/j3/j3.component';
import { AnnivComponent } from './Footer/Anniv/anniv.component';
import { PersonnelComponent } from './Footer/Personnel/personnel.component';
import { VisiteurNewArrivantComponent } from './Footer/Visiteur-new-arrivant/visiteur-new-arrivant.component';
import { VisiteursComponent } from './Footer/Visiteur-new-arrivant/Visiteurs/visiteurs.component';
import { NouveauArrivantComponent } from './Footer/Visiteur-new-arrivant/Nouveau-Arrivant/nouveau-arrivant.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CalendarComponent,
    FooterComponent,
    LogoComponent,
    CenterHeaderComponent,
    ParamComponent,
    LieuComponent,
    HoraComponent,
    AujComponent,
    AVenirComponent,
    DemainComponent,
    J1Component,
    J2Component,
    J3Component,
    AnnivComponent,
    PersonnelComponent,
    VisiteurNewArrivantComponent,
    VisiteursComponent,
    NouveauArrivantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
