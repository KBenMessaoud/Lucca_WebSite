import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-parametres',
  templateUrl: './parametres.component.html',
  styleUrls: ['./parametres.component.scss']
})
export class ParametresComponent {
  showSettingsMenu = false;
  selectedSiteLocation = 'Nantes';
  miseajour = 0;
  selectedLanguage = 'Fr';

  constructor(private sharedService: SharedService) {
    this.selectedSiteLocation = 'Nantes';
  }

  onOptionSelected(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    // Réagir à la sélection de l'option ici
    this.handleOptionSelection(selectedValue);
  }

  handleOptionSelection(selectedValue: string) {
    this.miseajour+=1;
    this.sharedService.setLieu(selectedValue);
  }

  toggleSettingsMenu() {
    this.showSettingsMenu = !this.showSettingsMenu;
  }

  public getLocation(){
    return this.selectedSiteLocation;
  }

}
