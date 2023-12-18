import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  private apiUrl = 'http://localhost:1337/api';

  constructor(private http: HttpClient) { }

  getMemes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/memes`);
  }
}
