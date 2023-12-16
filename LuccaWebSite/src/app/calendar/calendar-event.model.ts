export interface CalendarEvent {
    id: string;
    title: string;
    date: string; // YYYY-MM-DD
    time?: string; // HH:mm (format 24 heures)
    description?: string;
    isVisible?: boolean; // Nouveau champ pour gérer la visibilité
  }
  