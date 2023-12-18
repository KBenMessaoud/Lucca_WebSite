// j1.component.ts

import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { addDays, isSaturday, isSunday, isMonday, startOfDay } from 'date-fns';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-j1', 
  templateUrl: './j1.component.html', 
  styleUrls: ['./j1.component.scss'] 
})
export class J1Component implements OnInit { 

  // Déclaration des variables du composant
  date!: Date; // Variable pour stocker la date actuelle
  formattedDay: string = ''; // Variable pour stocker le jour de la semaine formaté

  // Constructeur du composant, injecte les services DatePipe et SharedService
  constructor(private datePipe: DatePipe, private sharedService: SharedService) {}

  // Fonction appelée lors de l'initialisation du composant
  ngOnInit() {
    this.updateDate(); // Appelle la fonction pour mettre à jour la date immédiatement

    // Utiliser setInterval pour mettre à jour la date toutes les 24 heures
    setInterval(() => {
      this.updateDate();
    }, 24 * 60 * 60 * 1000); // 24 heures * 60 minutes * 60 secondes * 1000 millisecondes
  }

  // Fonction pour mettre à jour la date
  updateDate() {
    this.date = this.calculateDate(2); // Appelle la fonction pour calculer la date dans deux jours
    this.formatDay(); // Appelle la fonction pour formater le jour de la semaine
  }

  // Fonction pour calculer une nouvelle date en ajoutant des jours, en évitant les samedis et dimanches
  calculateDate(days: number): Date {
    let currentDate = startOfDay(new Date());

    // Ajout des jours en évitant les samedis et dimanches
    if (days > 0) {
      for (let i = 1; i <= days; i++) {
        if (isSaturday(addDays(currentDate, 2))) {
          currentDate = addDays(currentDate, 4); // Si samedi, on ajoute 4 jours pour passer à mercredi
        } else if (isSunday(addDays(currentDate, 2)) || isMonday(addDays(currentDate, 2))) {
          currentDate = addDays(currentDate, 4); // Si dimanche ou lundi, on ajoute 4 jours pour passer à mercredi
        } else {
          currentDate = addDays(currentDate, 2); // Ajoute deux jours
        }
      }
    }

    return currentDate;
  }

  // Fonction pour formater le jour de la semaine
  formatDay() {
    // On lit la valeur de langue grâce au service SharedService et on adapte le jour en fonction
    this.sharedService.langue$.subscribe((langue) => { 
      // Utilisation du service DatePipe pour formater le jour de la semaine en fonction de la langue
      switch (`${langue}`) {
        case 'Fr':
          const dayStringFr = this.date.toLocaleDateString('fr-FR', { weekday: 'long' });
          this.formattedDay = dayStringFr.charAt(0).toUpperCase() + dayStringFr.slice(1);
          break;
        case 'En':
          const dayStringEn = this.date.toLocaleDateString('en-EN', { weekday: 'long' });
          this.formattedDay = dayStringEn.charAt(0).toUpperCase() + dayStringEn.slice(1);
          break;
        case 'Es':
          const dayStringEs = this.date.toLocaleDateString('es-ES', { weekday: 'long' });
          this.formattedDay = dayStringEs.charAt(0).toUpperCase() + dayStringEs.slice(1);
          break;
        case 'De':
          const dayStringDe = this.date.toLocaleDateString('de-DE', { weekday: 'long' });
          this.formattedDay = dayStringDe.charAt(0).toUpperCase() + dayStringDe.slice(1);
          break;
        default:
          // Utilise la langue par défaut (français) si la langue n'est pas reconnue
          const dayStringDefault = this.date.toLocaleDateString('fr-FR', { weekday: 'long' });
          this.formattedDay = dayStringDefault.charAt(0).toUpperCase() + dayStringDefault.slice(1);
          break;
      }
    });
  }
}
