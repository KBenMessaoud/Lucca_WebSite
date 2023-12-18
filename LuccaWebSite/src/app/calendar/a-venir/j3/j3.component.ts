// j3.component.ts
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { addDays, isSaturday, isMonday, isTuesday, isSunday, startOfDay, isWednesday } from 'date-fns';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-j3',
  templateUrl: './j3.component.html',
  styleUrls: ['./j3.component.scss']
})
export class J3Component implements OnInit {
  date!: Date;
  formattedDay: string = '';

  constructor(private datePipe: DatePipe, private sharedService: SharedService) {}

  ngOnInit() {
    this.updateDate(); // Mettre à jour la date immédiatement

    // Utiliser setInterval pour mettre à jour la date toutes les 24 heures
    setInterval(() => {
      this.updateDate();
    }, 24 * 60 * 60 * 1000); // 24 heures * 60 minutes * 60 secondes * 1000 millisecondes
  }

  updateDate() {
    this.date = this.calculateDate(4);
    this.formatDay();
  }

  calculateDate(days: number): Date {
    let currentDate = startOfDay(new Date());
  // Si la date actuelle est un week-end
    // Si la dernière date calculée est un samedi ou dimanche, ajoutez des jours supplémentaires
    if (isSaturday(addDays(currentDate,4))) {
      currentDate = addDays(currentDate, 6);
    } else if (isSunday(addDays(currentDate,4))) {
      currentDate = addDays(currentDate, 6);
    } else if (isMonday(addDays(currentDate,4))) {
      currentDate = addDays(currentDate, 6);
    }else if (isTuesday(addDays(currentDate,4))) {
      currentDate = addDays(currentDate, 6);
    }  else if (isWednesday(addDays(currentDate,4))) {
      currentDate = addDays(currentDate, 6);
    }else {
      currentDate = addDays(currentDate, 4);
    }

    return currentDate;
  }

  formatDay() {
    // On lit la valeur de langue grace au service SharedService et on adapte le jour en fonction
    this.sharedService.langue$.subscribe((langue) => { 
      if(`${langue}` == 'Fr'){
        const dayString = this.date.toLocaleDateString('fr-FR',{ weekday: 'long' });
        this.formattedDay = dayString.charAt(0).toUpperCase() + dayString.slice(1);
      }
      if(`${langue}` == 'En'){
        const dayString = this.date.toLocaleDateString('en-EN',{ weekday: 'long' });
        this.formattedDay = dayString.charAt(0).toUpperCase() + dayString.slice(1);
      }
      if(`${langue}` == 'Es'){
        const dayString = this.date.toLocaleDateString('es-ES',{ weekday: 'long' });
        this.formattedDay = dayString.charAt(0).toUpperCase() + dayString.slice(1);
      }
      if(`${langue}` == 'De'){
        const dayString = this.date.toLocaleDateString('de-DE',{ weekday: 'long' });
        this.formattedDay = dayString.charAt(0).toUpperCase() + dayString.slice(1);
      }  
  });
  }
}
