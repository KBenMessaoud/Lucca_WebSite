import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.scss']
})
export class PersonnelComponent implements OnInit {
  personnes: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const apiKey = '92ce5b56-2f13-4c8a-ade8-f6a3fc2fb70d';
    const apiUrl = 'https://example.ilucca.net';

    this.http.get(apiUrl, {
      headers: { 'Authorization': `Bearer ${apiKey}` }
    }).subscribe((data: any) => {
      this.personnes = data; // En supposant que les données sont dans un tableau 'personnes'
    });
  }
}
