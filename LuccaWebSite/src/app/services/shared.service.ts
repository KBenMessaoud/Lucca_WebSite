import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  // les variables lieuSubject et langueSubject sont initalement définies sur Nantes et Fr et peuvent etre changées
  // Dans le composant parametres

  private lieuSubject = new BehaviorSubject<string>('Nantes');
  private langueSubject = new BehaviorSubject<string>('Fr');
  
  lieu$ = this.lieuSubject.asObservable();
  langue$ = this.langueSubject.asObservable();

  // Méthodes permettant de changer lieu et langue

  setLieu(lieu: string) {
    this.lieuSubject.next(lieu);
  }

  setLangue(langue: string) { 
    this.langueSubject.next(langue);
  }

}
