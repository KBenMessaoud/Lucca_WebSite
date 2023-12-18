import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../../services/calendar.service';
import { CalendarEvent } from '../calendar-event.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-auj',
  templateUrl: './auj.component.html',
  styleUrls: ['./auj.component.scss'],
 
})
export class AujComponent implements OnInit {
 
  
  newEventDescription: string = '';
  date: string;
  showAddEventForm: boolean = false;
  memes: any[] = [];

  constructor(
    private calendarService: CalendarService,
    private datePipe: DatePipe
  ) {
    this.date = this.datePipe.transform(new Date(), 'yyyy-MM-dd') || '';
  }

  ngOnInit() {
    this.loadEvents();
    this.loadMemes();
  }

  loadEvents(): void {
    const today = new Date().toISOString().split('T')[0];
    
  }

  loadMemes(): void {
    this.calendarService.getMemes().subscribe((memes) => {
      this.memes = memes;
      
    });
  }

}
