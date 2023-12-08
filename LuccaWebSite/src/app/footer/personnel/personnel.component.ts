import { Component, OnInit } from '@angular/core';
import { LuccaApiService } from '../../services/lucca-api.service';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.scss']
})
export class PersonnelComponent implements OnInit {
  numPresentToday: number = 15; // Initialise la variable pour afficher le nombre de personnes présentes

  constructor(private luccaApiService: LuccaApiService) {}

  ngOnInit() {
    // Planifie l'exécution de la fonction de vérification chaque jour à 8h (en millisecondes)
    const dailyCheckTime = 8 * 60 * 60 * 1000; // 8 heures en millisecondes

    setInterval(() => {
      this.checkStatus(); // Appelle la fonction de vérification à intervalles réguliers
    }, dailyCheckTime);

    // Appelle la vérification immédiatement lors du chargement de la page
    this.checkStatus();
  }

  checkStatus() {
    this.getUsersCount(); // Fonction pour obtenir le nombre total d'utilisateurs
  }

  getUsersCount() {
    this.luccaApiService.getUsers().subscribe({
      next: (response: any) => {
        // Vérifiez si 'data' est défini et a des éléments (assurance en cas de changement de structure)
        const totalUsers = response.data.items.length; // obtenir le nombre total d'utilisateurs

        this.luccaApiService.getAbsentsCount().subscribe({
          next: (absent: any) => {
            const AbsentsNbr = absent.data.items.length;

            // Mettez à jour le nombre de personnes présentes
            this.numPresentToday = totalUsers ;
          },
          error: (error) => {
            console.error('Erreur lors de la récupération des absences', error);
          }
        });
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des utilisateurs', error);
      }
    });
  }
}
