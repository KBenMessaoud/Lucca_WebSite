import { Injectable } from '@angular/core';
import { CalendarEvent } from './calendar-event.model';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  private eventsKey = 'calendarEvents';

  getEventsForDate(date: string): CalendarEvent[] {
    const events = this.loadEvents();
    return events.filter(event => event.date === date);
  }

  updateEventVisibility(eventId: string, isVisible: boolean): void {
    const events = this.loadEvents();
    const eventIndex = events.findIndex(event => event.id === eventId);
    if (eventIndex !== -1) {
      events[eventIndex].isVisible = isVisible;
      this.saveEvents(events);
    }
  }

  updateEvent(event: CalendarEvent): void {
    let events = this.loadEvents();
    const index = events.findIndex(e => e.id === event.id);
    if (index !== -1) {
      events[index] = event;
      this.saveEvents(events);
    }
  }

  private saveEvents(events: CalendarEvent[]): void {
    localStorage.setItem('events', JSON.stringify(events));
  }
  addEvent(event: CalendarEvent): void {
    const events = this.loadEvents();
    event.isVisible = true; // Initialisez tous les nouveaux événements comme visibles
    events.push(event);
    this.saveEvents(events);
  }
  deleteEvent(eventId: string): void {
    let events = this.loadEvents();
    events = events.filter(event => event.id !== eventId);
    this.saveEvents(events);
  }

  private loadEvents(): CalendarEvent[] {
    const data = localStorage.getItem(this.eventsKey);
    return data ? JSON.parse(data) : [];
  }

  
}
