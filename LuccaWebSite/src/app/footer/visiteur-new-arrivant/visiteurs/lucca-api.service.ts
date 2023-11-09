import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LuccaApiService {
  private apiUrl = 'https://imt-nantes.ilucca-demo.net/api/v3/'; // URL de base de l'API Lucca pour l'instance de démonstration
  private apiKey = '4f92437e-4b4a-4bf7-9855-5ed73f3fe7ff'; // Clé API générée pour l'instance de démo

  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Authorization': `lucca application=${this.apiKey}` // Format correct pour l'authentification à l'API Lucca
    })
  };

  constructor(private http: HttpClient) { }

  // Méthode existante pour obtenir les visiteurs
  // Méthode pour obtenir la liste des utilisateurs
  getUsers(): Observable<any> {
  return this.http.get(`${this.apiUrl}users`, this.httpOptions);
}


  // Méthode existante pour obtenir les nouveaux arrivants
  getNouveauxArrivants(): Observable<any> {
    return this.http.get(`${this.apiUrl}path_to_nouveaux_arrivants`, this.httpOptions);
  }

  // Nouvelle méthode pour obtenir la liste des noms et prénoms des utilisateurs
  getListeNomsEtPrenomsUtilisateurs(): Observable<any> {
    // Utilisation de HttpParams pour ajouter des paramètres de requête
    const params = new HttpParams().set('fields', 'name');

    // Ajout des params à la requête GET
    return this.http.get(`${this.apiUrl}users`, { headers: this.httpOptions.headers, params: params });
  }


}
