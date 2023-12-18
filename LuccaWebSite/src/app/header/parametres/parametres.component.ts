import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-parametres',
  templateUrl: './parametres.component.html',
  styleUrls: ['./parametres.component.scss']
})

export class ParametresComponent {
  showSettingsMenu = false; // le menu est par défaut caché
  selectedSiteLocation = 'Nantes'; // le site par défaut est nantes
  selectedLanguage = 'Fr'; // la langue par défaut est le français

  constructor(private sharedService: SharedService) {
    this.selectedSiteLocation = 'Nantes'; 
    this.selectedLanguage = 'Fr';
  }

  // méthodes lancées quand on change le lieu ou la langue

  onLieuSelected(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    // Réagir à la sélection de l'option ici
    this.handleLieuSelection(selectedValue);
  }

  onLanguageSelected(event: Event) {
    const selectedLanguage = (event.target as HTMLSelectElement).value;
    // Réagir à la sélection de l'option ici
    this.handleLanguageSelection(selectedLanguage);
  }

  // met a jour la valeur des variables dans SharedService pour que les autres composants puissent lire

  handleLieuSelection(selectedValue: string) {
    this.sharedService.setLieu(selectedValue);
  }

  handleLanguageSelection(selectedLanguage: string) {
    this.sharedService.setLangue(selectedLanguage);
  }

  // affiche le menu

  toggleSettingsMenu() {
    this.showSettingsMenu = !this.showSettingsMenu;
  }

  // récupere la langue et le lieu

  public getLocation(){
    return this.selectedSiteLocation;
  }

  public getLangue(){
    return this.selectedLanguage;
  }

}
