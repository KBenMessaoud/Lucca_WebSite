import { Component, OnInit } from '@angular/core';
import { LuccaApiService } from '../../../services/lucca-api.service';

@Component({
  selector: 'app-nouveaux-arrivants',
  templateUrl: './nouveaux-arrivants.component.html',
  styleUrls: ['./nouveaux-arrivants.component.scss']
})
export class NouveauxArrivantsComponent implements OnInit {
  nouveauxArrivants: any[] = [];
  currentSlideIndex = 0;

  constructor(private luccaApiService: LuccaApiService) { }

  ngOnInit(): void {
    this.loadNouveauxArrivants();
    // Changez la durée si nécessaire
    setInterval(() => this.goToNextSlide(), 5000);
  }

  loadNouveauxArrivants(): void {
    this.luccaApiService.getUsers().subscribe({
      next: (response) => {
        // On s'assure que 'items' est bien présent dans 'data'
        if (response && response.data && response.data.items) {
          // On extrait le tableau 'items' de la réponse de l'API
          this.nouveauxArrivants = response.data.items;
          // On limite le tableau à 5 élémentss
          this.nouveauxArrivants = this.nouveauxArrivants.slice(0, 4);
        }
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des visiteurs:', error);
      }
    });
  }
  goToNextSlide(): void {
    if (this.nouveauxArrivants && this.nouveauxArrivants.length > 0) {
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.nouveauxArrivants.length;
    }
  }
}
