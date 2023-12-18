import {inject, Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from './interface';

@Injectable({
  providedIn: 'root'
})
export class LuccaApiService {
  // TODO: base url in environment file
  private apiUrl = 'http://localhost:3000/api'; // based URL of proxy backend
 
  constructor(private http: HttpClient) {}

  // Méthode existante pour obtenir les visiteurs
  // Méthode pour obtenir la liste des utilisateurs
  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/v3/users`);
  }

  // Méthode pour obtenir les données des anniversaires à partir de l'API Lucca
  getAnniversaires(startDate: string, endDate: string): Observable<ApiResponse> {
    const url = `${this.apiUrl}/users/birthday?fields=id,name,firstname,lastname,picture.href,department.id,department.name,birthDate,dtcontractstart&startson=${startDate}&endson=${endDate}`;
    return this.http.get<ApiResponse>(url);
  }

  // Méthode existante pour obtenir les nouveaux arrivants
  getNouveauxArrivants(): Observable<any> {
    return this.http.get(`${this.apiUrl}/v3/users`);
  }

  // Nouvelle méthode pour obtenir la liste des noms et prénoms des utilisateurs
  getListeNomsEtPrenomsUtilisateurs(): Observable<any> {
    // Utilisation de HttpParams pour ajouter des paramètres de requête
    const params = new HttpParams().set('fields', 'name');

    // Ajout des params à la requête GET
    return this.http.get(`${this.apiUrl}/users`, { params: params });
  }


}
