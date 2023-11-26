import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="flex-container">
          <app-j1></app-j1>
          <app-j2></app-j2>
          <app-j3></app-j3>
        <app-auj></app-auj>
        <app-demain></app-demain>
    </div>

    <app-header></app-header>

    <app-footer>
      <app-anniv></app-anniv>
      <app-personnel></app-personnel>
      <app-visiteur-new-arrivant>
        <app-visiteurs></app-visiteurs>
        <app-nouveaux-arrivants></app-nouveaux-arrivants>
      </app-visiteur-new-arrivant>
    </app-footer>
  `,
  styles: [`
    .flex-container {
      display: flex;
      width: 100vw;
    }

    /* Styles spécifiques pour chaque composant flex */
    app-j1, app-j2, app-j3, app-auj, app-demain {
      flex: 1;
      border: 1px white;
    }

    /* Ajout des composants supplémentaires que vous avez mentionnés */
    app-header, app-footer, app-anniv, app-personnel, app-visiteur-new-arrivant, app-visiteurs, app-nouveaux-arrivants {
      /* Styles spécifiques pour d'autres composants en dehors du flexbox */
    }
  `]
})
export class AppComponent {
  title = 'LuccaWebSite';
}
