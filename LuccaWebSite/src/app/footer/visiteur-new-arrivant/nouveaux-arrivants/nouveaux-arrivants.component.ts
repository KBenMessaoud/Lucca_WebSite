import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nouveaux-arrivants',
  templateUrl: './nouveaux-arrivants.component.html',
  styleUrls: ['./nouveaux-arrivants.component.scss']
})
export class NouveauxArrivantsComponent implements OnInit {
  liste : any[] = [1,2];
  nouveauxArrivants = [
    { nom: 'Nouvelle Personne A' },
    { nom: 'Nouvelle Personne B' },
    
    // Ajoutez d'autres nouveaux arrivants ici
  ];
  currentSlideIndex = 1;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => this.goToNextSlide(), 3000);
  }

  goToNextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.nouveauxArrivants.length;
  }
}
