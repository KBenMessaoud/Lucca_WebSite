import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { addDays, isSaturday, isSunday, startOfDay } from 'date-fns';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-auj',
  templateUrl: './auj.component.html',
  styleUrls: ['./auj.component.scss']
})
export class AujComponent  implements OnInit{
  date!: Date;
  formattedDay: string = '';
  titre : string = "Aujourd'hui";

  constructor(private datePipe: DatePipe, private sharedService: SharedService) {}

  ngOnInit() {
    this.updateDate(); // Mettre à jour la date immédiatement

    this.sharedService.langue$.subscribe((titre) => { // On lit la valeur de langue grace au service SharedService
      if(`${titre}` == 'Fr'){
        this.titre = `Aujourd'hui`;
      }
      if(`${titre}` == 'En'){
        this.titre = `Today`;
      }
      if(`${titre}` == 'Es'){
        this.titre = `Hoy`;
      }
      if(`${titre}` == 'De'){
        this.titre = `Heute`;
      }  
  });

    // Utiliser setInterval pour mettre à jour la date toutes les 24 heures
    setInterval(() => {
      this.updateDate();
    }, 24 * 60 * 60 * 1000); // 24 heures * 60 minutes * 60 secondes * 1000 millisecondes
  }

  updateDate() {
    this.date = this.calculateDate(1);
    this.formatDay();
  }

  calculateDate(days: number): Date {
    let currentDate = startOfDay(new Date());

    // Ajout des jours en évitant les samedis et dimanches
    //for (let i = 1; i < days; i=1) {
      //currentDate = addDays(currentDate, 1);

      //Vérifier si la date actuelle est un week-end
      if (isSaturday(addDays(currentDate,0))) {
        currentDate = addDays(currentDate, 2);
      } else if (isSunday(addDays(currentDate,0))) {
        currentDate = addDays(currentDate, 1);
      } else {
        currentDate = addDays(currentDate, 0);
      }
      
   // }

    // Si la dernière date calculée est un samedi ou dimanche, ajoutez des jours supplémentaires
   // while (isSaturday(currentDate) || isSunday(currentDate)) {
    //  currentDate = addDays(currentDate, 1);
   // }

    return currentDate;
  }

  formatDay() {
      const dayString = this.datePipe.transform(this.date, 'EEEE', 'en') || '';
      this.formattedDay = dayString.charAt(0).toUpperCase() + dayString.slice(1);

    
  }
}
