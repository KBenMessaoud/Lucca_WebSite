import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-heure-actuelle',
  templateUrl: './heure-actuelle.component.html',
  styleUrls: ['./heure-actuelle.component.scss']
})
export class HeureActuelleComponent {
  heure: Date;
  lieu: String;

  constructor(private sharedService: SharedService) {
    this.heure = new Date();
    this.lieu = new String(); // La valeur par défaut de lieu est définie par le service SharedService

  setInterval(() => {
      this.heure = new Date();
    }, 1000); 
  }
    ngOnInit() {
      this.sharedService.lieu$.subscribe((lieu) => { // On lit la valeur de lieu grace au service SharedService
        this.lieu = `${lieu}`;
    });
    }

}
