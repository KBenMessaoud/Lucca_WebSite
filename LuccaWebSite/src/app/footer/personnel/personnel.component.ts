// Importation des modules nécessaires
import { Component, OnInit } from '@angular/core';
import { CollabService } from '../../services/collab.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.scss']
})
export class PersonnelComponent implements OnInit {
  numPresentToday: number = 23; // Variable pour stocker le nombre de personnes présentes (initialisée à 23)
  titre: string; // Variable pour stocker le titre affiché

  // Constructeur du composant, injecte les services CollabService et SharedService
  constructor(private CollabService: CollabService, private sharedService: SharedService) {
    this.titre = 'Personnel'; // Initialise le titre par défaut
  }

  // Fonction appelée lors de l'initialisation du composant
  ngOnInit() {
    // Planifie l'exécution de la fonction de vérification chaque jour à 8h (en millisecondes)
    const dailyCheckTime = 8 * 60 * 60 * 1000; // 8 heures en millisecondes

    // Configure un intervalle pour appeler la fonction de vérification à intervalles réguliers
    setInterval(() => {
      this.checkStatus(); // Appelle la fonction de vérification
    }, dailyCheckTime);

    // Vérifie immédiatement lors du chargement de la page
    this.checkStatus();

    // Abonne le composant aux changements de langue du service SharedService
    this.sharedService.langue$.subscribe((titre) => {
      // Met à jour le titre en fonction de la langue sélectionnée
      switch (`${titre}`) {
        case 'Fr':
          this.titre = `Personnes sur le site`;
          break;
        case 'En':
          this.titre = `People on site`;
          break;
        case 'Es':
          this.titre = `Personas en el sitio`;
          break;
        case 'De':
          this.titre = `Personen vor Ort`;
          break;
        default:
          this.titre = `Personnel`; // Valeur par défaut si la langue n'est pas reconnue
          break;
      }
    });
  }

  // Fonction pour vérifier le statut des personnes présentes
  checkStatus() {
    const locationId = 4; // Identifiant de l'emplacement
    const today = new Date().toISOString().split('T')[0]; // Date actuelle au format ISO

    // Appel du service pour obtenir le nombre d'occupants
    this.CollabService.getOccupanciesCount(locationId, today, today).subscribe({
      next: (response) => {
        console.log('Réponse de l\'API :', response);

        const present = response.data.items.length; // Nombre de personnes présentes
        console.log('Nombre de personnes présentes aujourd\'hui :', present);

        this.numPresentToday = present; //et enfin, mise à jour de la variable du nombre de personnes présentes
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des données d\'occupation', error);
      }
    });
  }
}
