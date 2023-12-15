// Importez les modules nécessaires
import {Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CollabService {
  private apiUrl = 'http://localhost:3000/work-locations/api/schedule/available-work-locations';
  //private baseUrl = 'https://imt-nantes.ilucca-demo.net/work-locations/api/schedule/available-work-locations/4/occupancies?start=2023-12-14&end=2023-12-14 '; // get API Collab

  constructor(private http: HttpClient) {}
 

  // Fonction pour récupérer le nombre de collaborateurs présents dans un lieu de travail spécifique pour une plage de dates donnée (Nantes)
  getOccupanciesCount(locationId: number, startDate: string, endDate: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${locationId}/occupancies?start=${startDate}&end=${endDate}`);
   
  }

}
