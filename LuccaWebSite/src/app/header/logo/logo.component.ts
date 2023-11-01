import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  showSettingsMenu = false;
  selectedSiteLocation = 'Nantes';
  selectedLanguage = 'Fr';

  toggleSettingsMenu() {
    this.showSettingsMenu = !this.showSettingsMenu;
  }
}
