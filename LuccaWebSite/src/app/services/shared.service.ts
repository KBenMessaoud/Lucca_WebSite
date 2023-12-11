import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private lieuSubject = new BehaviorSubject<string>('Nantes');
  lieu$ = this.lieuSubject.asObservable();

  setLieu(lieu: string) {
    this.lieuSubject.next(lieu);
  }

}
