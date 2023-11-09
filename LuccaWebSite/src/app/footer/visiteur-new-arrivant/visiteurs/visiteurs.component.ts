import { Component, OnInit } from '@angular/core';
import { LuccaApiService } from './lucca-api.service'; // Assurez-vous que le chemin d'accès est correct

@Component({
  selector: 'app-visiteurs',
  templateUrl: './visiteurs.component.html',
  styleUrls: ['./visiteurs.component.scss']
})
export class VisiteursComponent implements OnInit {
  visiteurs: any[] = [];
  currentSlideIndex = 0;


  visiteurs1 = [
    { nom: ' A' },
    { nom: ' B' }
    // Ajoutez d'autres nouveaux arrivants ici
  ];
  constructor(private luccaApiService: LuccaApiService) { }

  ngOnInit(): void {
    this.loadVisiteurs();
    // Changez la durée si nécessaire
    setInterval(() => this.goToNextSlide(), 3000);
  }
// Dans visiteurs.component.ts
loadVisiteurs(): void {
  this.luccaApiService.getUsers().subscribe({
    next: (response) => {
      // Nous extrayons le tableau 'items' de la réponse de l'API
      this.visiteurs = response.items;
    },
    error: (error) => {
      console.error('Erreur lors de la récupération des visiteurs:', error);
    }
  });
}



  goToNextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.visiteurs.length;
  }
}
