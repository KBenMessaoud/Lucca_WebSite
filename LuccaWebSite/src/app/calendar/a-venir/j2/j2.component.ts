// j2.component.ts
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { addDays, isSaturday, isSunday, startOfDay } from 'date-fns';

@Component({
  selector: 'app-j2',
  templateUrl: './j2.component.html',
  styleUrls: ['./j2.component.scss']
})
export class J2Component implements OnInit {
  date!: Date;
  formattedDay: string = '';

  constructor(private datePipe: DatePipe) {}

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

    // Ajout des jours en évitant les samedis et dimanches
    for (let i = 1; i < days; ) {
      currentDate = addDays(currentDate, 1);

      // Vérifier si la date actuelle est un week-end
      if (!isSaturday(currentDate) && !isSunday(currentDate)) {
        i++;
      }
    }

    // Si la dernière date calculée est un samedi ou dimanche, ajoutez des jours supplémentaires
    while (isSaturday(currentDate) || isSunday(currentDate)) {
      currentDate = addDays(currentDate, 1);
    }

    return currentDate;
  }

  formatDay() {
    const dayString = this.datePipe.transform(this.date, 'EEEE', 'fr') || '';
    this.formattedDay = dayString.charAt(0).toUpperCase() + dayString.slice(1);
  }
}
