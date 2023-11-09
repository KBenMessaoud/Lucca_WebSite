import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-visiteur-new-arrivant',
  templateUrl: './visiteur-new-arrivant.component.html',
  styleUrls: ['./visiteur-new-arrivant.component.scss']
})
export class VisiteurNewArrivantComponent implements OnInit, OnDestroy {
  public showVisiteurs: boolean = true; // Assurez-vous que cette ligne est bien présente
  private intervalId: number | null = null;

  ngOnInit(): void {
    this.intervalId = window.setInterval(() => {
      this.showVisiteurs = !this.showVisiteurs;
    }, 3000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
