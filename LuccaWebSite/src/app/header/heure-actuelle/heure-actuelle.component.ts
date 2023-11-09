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
    this.lieu = new String();
    this.lieu = "Nantes";

    setInterval(() => {
      this.heure = new Date();
    }, 1000); // Mettez à jour l'heure chaque seconde
  }
    ngOnInit() {
      this.sharedService.lieu$.subscribe((lieu) => {
        this.lieu = `${lieu}`;
    });
    }

}
