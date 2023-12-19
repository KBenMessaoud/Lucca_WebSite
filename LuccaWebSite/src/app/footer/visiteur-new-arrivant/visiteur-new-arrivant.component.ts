// Importations nécessaires pour définir un composant Angular
import { Component, OnInit, OnDestroy } from '@angular/core';

// Décoration du composant avec les métadonnées nécessaires
@Component({
  selector: 'app-visiteur-new-arrivant',
  templateUrl: './visiteur-new-arrivant.component.html',
  styleUrls: ['./visiteur-new-arrivant.component.scss']
})

// Classe du composant qui implémente les interfaces OnInit et OnDestroy
export class VisiteurNewArrivantComponent implements OnInit, OnDestroy {
  public showVisiteurs: boolean = true; // Variable pour contrôler l'affichage des visiteurs
  private intervalId: number | null = null; // Identifiant pour le gestionnaire d'intervalle

  ngOnInit(): void {
    // Méthode appelée lors de l'initialisation du composant
    this.intervalId = window.setInterval(() => {
      this.showVisiteurs = !this.showVisiteurs; // Bascule l'affichage des visiteurs toutes les 3 secondes
    }, 3000);
  }

  ngOnDestroy(): void {
    // Méthode appelée lors de la destruction du composant
    if (this.intervalId) {
      clearInterval(this.intervalId); // Nettoie l'intervalle pour éviter des fuites de mémoire
    }
  }
}
