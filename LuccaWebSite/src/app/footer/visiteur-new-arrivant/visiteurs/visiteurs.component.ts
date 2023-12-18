import { Component, OnInit } from '@angular/core';
import { LuccaApiService } from '../../../services/lucca-api.service';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-visiteurs',
  templateUrl: './visiteurs.component.html',
  styleUrls: ['./visiteurs.component.scss']
})
export class VisiteursComponent implements OnInit {
  visiteurs: any[] = [];
  liste: any[] = [1, 2];
  currentSlideIndex = 0;
  titre: string;

  constructor(private luccaApiService: LuccaApiService, private sharedService: SharedService) { this.titre = 'Visiteurs';}

  ngOnInit(): void {
    this.loadVisiteurs();
    // Changez la durée si nécessaires
    setInterval(() => this.goToNextSlide(), 4000);

    this.sharedService.langue$.subscribe((titre) => { 
      if(`${titre}` == 'Fr'){
        this.titre = `Visiteurs`;
      }
      if(`${titre}` == 'En'){
        this.titre = `Visitors`;
      }
      if(`${titre}` == 'Es'){
        this.titre = `Personalos`;
      }
      if(`${titre}` == 'De'){
        this.titre = `ich bin`;
      }
      
  });
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
