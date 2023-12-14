import { Component, OnInit } from '@angular/core';
import { CollabService } from '../../services/collab.service';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.scss']
})
export class PersonnelComponent implements OnInit {
  numPresentToday: number = 0; // Initialise la variable pour afficher le nombre de personnes présentes

  constructor(private CollabService: CollabService) {}

  ngOnInit() {
    // Planifie l'exécution de la fonction de vérification chaque jour à 8h (en millisecondes)
    const dailyCheckTime = 8 * 60 * 60 * 1000; // 8 heures en millisecondes

    setInterval(() => {
      this.checkStatus(); // Appelle la fonction de vérification à intervalles réguliers
    }, dailyCheckTime);

    // C'est pour vérifier immédiatement lors du chargement de la page
    this.checkStatus();
  }

  checkStatus() {
    const locationId = 4;
    const today = new Date().toISOString().split('T')[0];
  
    this.CollabService.getOccupanciesCount(locationId, today, today).subscribe({
      next: (response) => {
        console.log('Réponse de l\'API :', response);
  
        const Present= response.data.items.length;
        console.log('Nombre de personnes présentes aujourd\'hui :', Present);
  
        this.numPresentToday = Present;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des données d\'occupation', error);
      }
    });
  }
    
}