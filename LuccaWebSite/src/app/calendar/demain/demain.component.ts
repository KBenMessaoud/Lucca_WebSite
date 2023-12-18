import { Component, OnInit } from '@angular/core';
import { DatePipe, WeekDay } from '@angular/common';
import { addDays, isSaturday, isSunday, startOfDay } from 'date-fns';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-demain',
  templateUrl: './demain.component.html',
  styleUrls: ['./demain.component.scss']
})
export class DemainComponent {
  
@Component({
  selector: 'app-auj',
  templateUrl: './auj.component.html',
  styleUrls: ['./auj.component.scss']
})

  date!: Date;
  formattedDay: string = '';
  jour: string ='';

  constructor(private datePipe: DatePipe,private sharedService: SharedService) {}

  ngOnInit() {
    this.updateDate();
    

    // Utiliser setInterval pour mettre à jour la date toutes les 24 heures
    setInterval(() => {
      this.updateDate();
    }, 24 * 60 * 60 * 1000); // 24 heures * 60 minutes * 60 secondes * 1000 millisecondes
  }

  updateDate() {
    this.date = this.calculateDate(2);
    this.formatDay();
  }

  calculateDate(days: number): Date {
    let currentDate = startOfDay(new Date());

    // Ajout des jours en évitant les samedis et dimanches
    //for (let i = 1; i < days; ) {
     // currentDate = addDays(currentDate, 1);

      //Vérifier si la date actuelle est un week-end
  

    // Si la dernière date calculée est un samedi ou dimanche, ajoutez des jours supplémentaires
    if (isSaturday(addDays(currentDate,1))) {
      currentDate = addDays(currentDate, 3);
    } else if (isSunday(addDays(currentDate,1))) {
      currentDate = addDays(currentDate, 3);
    } else {
      currentDate = addDays(currentDate, 1);
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
