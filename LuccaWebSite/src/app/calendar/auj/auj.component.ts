import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../Calendar_service';
import { CalendarEvent } from '../calendar-event.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-auj',
  templateUrl: './auj.component.html',
  styleUrls: ['./auj.component.scss'],
  providers: [DatePipe]
})
export class AujComponent implements OnInit {
  events: CalendarEvent[] = [];
  newEventTitle: string = '';
  newEventTime: string = '';
  newEventDescription: string = '';
  date: string;
  showAddEventForm: boolean = false;

  constructor(
    private calendarService: CalendarService,
    private datePipe: DatePipe
  ) {
    this.date = this.datePipe.transform(new Date(), 'yyyy-MM-dd') || '';
  }

  ngOnInit() {
    this.loadEvents();
  }

  loadEvents(): void {
    const today = new Date().toISOString().split('T')[0];
    this.events = this.calendarService.getEventsForDate(today);
  }

  addEvent(): void {
    const newEvent: CalendarEvent = {
      id: Math.random().toString(36).substring(2, 9),
      title: this.newEventTitle,
      date: new Date().toISOString().split('T')[0],
      time: this.newEventTime,
      description: this.newEventDescription,
      isVisible: true
    };
    this.calendarService.addEvent(newEvent);
    this.events.push(newEvent);

    // Réinitialiser les champs de formulaire
    this.newEventTitle = '';
    this.newEventTime = '';
    this.newEventDescription = '';
  }

  

  toggleAddEventForm(): void {
    this.showAddEventForm = !this.showAddEventForm;
  }

  deleteEvent(eventId: string): void {
    this.calendarService.deleteEvent(eventId);
    this.events = this.events.filter(event => event.id !== eventId);
  }
}
