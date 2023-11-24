import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.scss']
})
export class PersonnelComponent implements OnInit {
  numPresentToday: number = 27; // Initialise la variable pour afficher le nombre de personnes présentes

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
    // Requête API pour récupérer le nombre total d'utilisateurs
    // TODO: use lucca api service (or an other service based on lucca api service: users.service.ts/leaves.service.ts/...)
    // fetch(usersApiUrl, { method: 'GET', headers })
    //   .then(response => {
    //     if (response.status === 200) {
    //       return response.json();
    //     } else {
    //       throw new Error('Erreur lors de la récupération des utilisateurs');
    //     }
    //   })
    //   .then(data => {
    //     const totalUsers = data.data.length;
    //
    //     // Une fois que nous avons le nombre total d'utilisateurs, nous pouvons maintenant vérifier le nombre d'absents
    //     this.getAbsentsCount(totalUsers);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
  }

  getAbsentsCount(totalUsers: number) {
    // Requête API pour récupérer le nombre d'absents
    const absencesApiUrl = 'https://example.ilucca.net/api/v3/leaves';
    const date = 'today'; // 'today' pour vérifier les absences de la journée

    const params = new URLSearchParams();
    params.append('leavePeriod.ownerId', 'all');
    params.append('date', date);

    const url = new URL(absencesApiUrl);
    url.search = params.toString();

    // TODO: use lucca api service (or an other service based on lucca api service: users.service.ts/leaves.service.ts/...)
    // fetch(url, { method: 'GET', headers })
    //   .then(response => {
    //     if (response.status === 200) {
    //       return response.json();
    //     } else {
    //       throw new Error('Erreur lors de la récupération des absences');
    //     }
    //   })
    //   .then(data => {
    //     const absents = data.data.length;//obtenir le nombre d'absents
    //
    //     // Nous avons maintenant le nombre total d'utilisateurs et le nombre d'absents
    //     // Nous pouvons calculer le nombre de personnes présentes
    //     this.numPresentToday = totalUsers - absents;
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
  }
}
