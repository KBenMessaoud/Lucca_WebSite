import { Component, OnInit } from '@angular/core';
import { LuccaApiService } from '../../../services/lucca-api.service';

@Component({
  selector: 'app-visiteurs',
  templateUrl: './visiteurs.component.html',
  styleUrls: ['./visiteurs.component.scss']
})
export class VisiteursComponent implements OnInit {
  visiteurs: any[] = [];
  liste: any[] = [1, 2];
  currentSlideIndex = 0;

  constructor(private luccaApiService: LuccaApiService) { }

  ngOnInit(): void {
    this.loadVisiteurs();
    // Changez la durée si nécessaires
    setInterval(() => this.goToNextSlide(), 4000);
  }

  loadVisiteurs(): void {
    this.luccaApiService.getUsers().subscribe({
      next: (response) => {
        // On s'assure que 'items' est bien présent dans 'data'
        if (response && response.data && response.data.items) {
          // On extrait le tableau 'items' de la réponse de l'API
          this.visiteurs = response.data.items;
          // On trie la liste par date de visite
          this.visiteurs.sort((a, b) => {
            return a.lastVisitedAt - b.lastVisitedAt;
          });
          // On prend les 10 premiers éléments
          this.visiteurs = this.visiteurs.slice(0,2);
        }
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des visiteurs:', error);
      }
    });
  }

  goToNextSlide(): void {
    // Vérifiez si 'visiteurs' est défini et a des éléments
    if (this.visiteurs && this.visiteurs.length > 0) {
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.visiteurs.length;
    }
  }
}
