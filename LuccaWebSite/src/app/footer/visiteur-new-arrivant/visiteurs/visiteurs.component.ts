import { Component, OnInit } from '@angular/core';
import { LuccaApiService } from '../../../services/lucca-api.service';
import { SharedService } from 'src/app/services/shared.service';

// Décorateur pour définir les métadonnées du composant Angular
@Component({
  selector: 'app-visiteurs', // Nom de la balise HTML pour ce composant
  templateUrl: './visiteurs.component.html', // Chemin vers le fichier HTML du composant
  styleUrls: ['./visiteurs.component.scss'] // Chemin vers le fichier de style CSS/SCSS
})
export class VisiteursComponent implements OnInit {
  // Déclaration des propriétés du composant
  visiteurs: any[] = []; // Tableau pour stocker les données des visiteurs
  liste: any[] = [1, 2]; // Tableau simple pour un usage non spécifié
  currentSlideIndex = 0; // Indice pour la navigation de diapositives
  titre: string; // Titre du composant

  // Constructeur pour injecter des services
  constructor(private luccaApiService: LuccaApiService, private sharedService: SharedService) {
    this.titre = 'Visiteurs'; // Initialisation du titre
  }

  ngOnInit(): void {
    this.loadVisiteurs(); // Chargement des données des visiteurs

    // Configuration d'un intervalle pour changer de diapositive toutes les 4 secondes
    setInterval(() => this.goToNextSlide(), 4000);

    // Abonnement au service de langue pour mettre à jour le titre en fonction de la langue
    this.sharedService.langue$.subscribe((titre) => { 
      if(`${titre}` == 'Fr'){
        this.titre = `Visiteurs`;
      }
      if(`${titre}` == 'En'){
        this.titre = `Visitors`;
      }
      if(`${titre}` == 'Es'){
        this.titre = `Visitantes`;
      }
      if(`${titre}` == 'De'){
        this.titre = `Besucher`;
      }
    });
  }

  // Fonction pour charger les visiteurs
  loadVisiteurs(): void {
    this.luccaApiService.getUsers().subscribe({
      next: (response) => {
        // Vérification et traitement de la réponse de l'API
        if (response && response.data && response.data.items) {
          this.visiteurs = response.data.items; // Extraction des visiteurs
          this.visiteurs.sort((a, b) => a.lastVisitedAt - b.lastVisitedAt); // Tri par date de visite
          this.visiteurs = this.visiteurs.slice(0, 10); // Limite à 10 visiteurs
        }
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des visiteurs:', error);
      }
    });
  }

  // Fonction pour naviguer à la diapositive suivante
  goToNextSlide(): void {
    if (this.visiteurs && this.visiteurs.length > 0) {
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.visiteurs.length;
    }
  }
}
