// Importation des modules nécessaires 
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { addDays, isSaturday, isSunday, startOfDay } from 'date-fns';
import { SharedService } from 'src/app/services/shared.service';


@Component({
  selector: 'app-auj',
  templateUrl: './auj.component.html',
  styleUrls: ['./auj.component.scss']
})
export class AujComponent implements OnInit {
  date!: Date; // Variable pour stocker la date actuelle
  formattedDay: string = ''; // Variable pour stocker le jour de la semaine formaté
  titre: string = "Aujourd'hui"; // Variable pour stocker le titre par défaut

  // Constructeur du composant, injecte les services DatePipe et SharedService
  constructor(private datePipe: DatePipe, private sharedService: SharedService) {}

  // Fonction appelée lors de l'initialisation du composant
  ngOnInit() {
    this.updateDate(); // Mettre à jour la date immédiatement

    // Abonne le composant aux changements de langue du service SharedService
    this.sharedService.langue$.subscribe((titre) => {
      // Met à jour le titre en fonction de la langue sélectionnée
      switch (`${titre}`) {
        case 'Fr':
          this.titre = `Aujourd'hui`;
          break;
        case 'En':
          this.titre = `Today`;
          break;
        case 'Es':
          this.titre = `Hoy`;
          break;
        case 'De':
          this.titre = `Heute`;
          break;
        default:
          this.titre = `Aujourd'hui`; 
          break;
      }
    });

    // Utiliser setInterval pour mettre à jour la date toutes les 24 heures
    setInterval(() => {
      this.updateDate();
    }, 24 * 60 * 60 * 1000); // 24 heures * 60 minutes * 60 secondes * 1000 millisecondes
  }

  // Fonction pour mettre à jour la date
  updateDate() {
    this.date = this.calculateDate(1);
    this.formatDay();
  }

  // Fonction pour calculer une nouvelle date en ajoutant des jours, en évitant les samedis et dimanches
  calculateDate(days: number): Date {
    let currentDate = startOfDay(new Date());

    // Ajout des jours en évitant les samedis et dimanches
    if (days > 0) {
      for (let i = 1; i <= days; i++) {
        if (isSaturday(addDays(currentDate, 0))) {
          currentDate = addDays(currentDate, 2);
        } else if (isSunday(addDays(currentDate, 0))) {
          currentDate = addDays(currentDate, 1);
        } else {
          currentDate = addDays(currentDate, 1);
        }
      }
    }

    return currentDate;
  }

  // Fonction pour formater le jour de la semaine
  formatDay() {
    const dayString = this.datePipe.transform(this.date, 'EEEE', 'en') || '';
    this.formattedDay = dayString.charAt(0).toUpperCase() + dayString.slice(1);
  }
}
