// Importations des modules et services nécessaires
import { Component, OnInit } from '@angular/core';
import { LuccaApiService } from '../../../services/lucca-api.service';
import { SharedService } from 'src/app/services/shared.service';

// Déclaration du composant avec son sélecteur, son template HTML et ses styles
@Component({
  selector: 'app-nouveaux-arrivants',
  templateUrl: './nouveaux-arrivants.component.html',
  styleUrls: ['./nouveaux-arrivants.component.scss']
})

// Définition de la classe du composant
export class NouveauxArrivantsComponent implements OnInit {
  // Déclaration des variables
  nouveauxArrivants: any[] = []; // Stocke les informations des nouveaux arrivants
  currentSlideIndex = 0; // Indice pour la navigation dans les slides
  titre: string; // contient le titre du composant

  // Constructeur du composant
  constructor(private luccaApiService: LuccaApiService, private sharedService: SharedService) { 
    this.titre = 'personnel'; // Initialisation du titre
  }

  // Méthode s'exécutant à l'initialisation du composant
  ngOnInit(): void {
    this.loadNouveauxArrivants(); // Chargement des nouveaux arrivants
    setInterval(() => this.goToNextSlide(), 5000); // Mise en place d'un intervalle pour changer de slide

    // Abonnement au service SharedService pour gérer le changement de langue
    this.sharedService.langue$.subscribe((titre) => { 
      // Mise à jour du titre selon la langue choisie
      this.titre = titre === 'Fr' ? 'Personnel' : 
                   titre === 'En' ? 'Staff' :
                   titre === 'Es' ? 'Personal' :
                   titre === 'De' ? 'Personal' : this.titre;
    });
  }

  // Méthode pour charger les données des nouveaux arrivants
  loadNouveauxArrivants(): void {
    this.luccaApiService.getUsers().subscribe({
      next: (response) => {
        if (response && response.data && response.data.items) {
          this.nouveauxArrivants = response.data.items.slice(0, 2); // Limite le nombre de nouveaux arrivants affichés
        }
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des visiteurs:', error);
      }
    });
  }

  // Méthode pour naviguer entre les slides des nouveaux arrivants
  goToNextSlide(): void {
    if (this.nouveauxArrivants && this.nouveauxArrivants.length > 0) {
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.nouveauxArrivants.length;
    }
  }
}
