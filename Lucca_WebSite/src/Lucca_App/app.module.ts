import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './Header/logo/logo.component';
import { CenterHeaderComponent } from './Header/center-header/center-header.component';
import { ParamComponent } from './Header/param./param..component';
import { LieuComponent } from './Header/center-header/lieu/lieu.component';
import { HoraComponent } from './Header/center-header/hora/hora.component';
import { AujComponent } from './Calendar/auj./auj..component';
import { AVenirComponent } from './Calendar/a-venir/a-venir.component';
import { DemainComponent } from './Calendar/demain/demain.component';
import { J1Component } from './Calendar/a-venir/j1/j1.component';
import { J2Component } from './Calendar/a-venir/j2/j2.component';
import { J3Component } from './Calendar/a-venir/j3/j3.component';
import { AnnivComponent } from './Footer/anniv./anniv..component';
import { PersonnelComponent } from './Footer/personnel/personnel.component';
import { VisiteurNewArrivantComponent } from './Footer/visiteur-new-arrivant/visiteur-new-arrivant.component';
import { VisiteursComponent } from './Footer/visiteur-new-arrivant/visiteurs/visiteurs.component';
import { NouveauArrivantComponent } from './Footer/visiteur-new-arrivant/nouveau-arrivant/nouveau-arrivant.component';

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
