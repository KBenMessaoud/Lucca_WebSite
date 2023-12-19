import { Component, OnInit } from '@angular/core';
import { LuccaApiService } from '../../services/lucca-api.service';
import { SharedService } from 'src/app/services/shared.service';
import { UserBirthday, ApiResponse } from '../../services/interface'; // Update the import path as needed



@Component({
  selector: 'app-anniv',
  templateUrl: './anniv.component.html',
  styleUrls: ['./anniv.component.scss']
})

export class AnnivComponent implements OnInit{
  anniversaires: UserBirthday[] = [];
  currentPage: number = 0;
  //nbPage: number = 0;      //Ligne à décommenter lors de l'utilisation des API
  titre: String;


  constructor(private luccaApiService: LuccaApiService, private sharedService: SharedService) {
    this.titre = new String();
   }

  anniv1 = [
    {photo: "../../../assets/anniv.png",nom: 'Mustafaa X', date: "21/08/1995"},
    {photo: "../../../assets/anniv.png",nom: 'Karim X', date: "03/03/2009"},
    {photo: "../../../assets/anniv.png",nom: 'Albane X', date: "15/12/2007"},
    {photo: "../../../assets/anniv.png",nom: 'Adam X', date: "01/01/2005"},
    {photo: "../../../assets/anniv.png",nom: 'Mouhamed X', date: "01/01/1939"},
    {photo: "../../../assets/anniv.png",nom: 'François X', date: "01/01/1969"},
    {photo: "../../../assets/anniv.png",nom: 'Juliette X', date: "01/01/1999"},
    {photo: "../../../assets/anniv.png",nom: 'Mario et Juliette', date: "11/01/1999"},
    {photo: "../../../assets/anniv.png",nom: 'Lucca Nom', date: "01/01/1999"}
  ];

  nbPage: number = Math.floor(this.anniv1.length/2)+(1*+!(this.anniv1.length%2===0));
  

  


  /*On affiche 2 éléments au plus par page.
  Cette méthode permet de récupérer les éléments de la liste test qui seront afficher sur la page i
  Lors de l'utilisation des API, il faut utiliser la méthode commenté en dessous*/
 
  getItemPage(i: number): any[] {
    const startIndex = i * 2;
    const endIndex = startIndex + 2;
    return this.anniv1.slice(startIndex, endIndex);
  } 

  //Méthode à utiliser lors de l'utilisation des API
  /*
  getItemPage(i: number): UserBirthday[] {
    const startIndex = i * 2;
    const endIndex = startIndex + 2;
    return this.anniversaires.slice(startIndex, endIndex);
  }
  */



  ngOnInit(): void {
    const startDate = '2023-12-18'; // Modify as needed
    const endDate = '2023-12-22';   // Modify as needed
    //this.loadAnniversaires(startDate, endDate);   //Ligne à décommenter lors de l'utilisation des API
    setInterval(() => this.goToNextSlide(), 3000);
   
    this.sharedService.langue$.subscribe((titre) => { // On lit la valeur de lieu grace au service SharedService
      if(`${titre}` == 'Fr'){
        this.titre = `Anniversaires`;
      }
      if(`${titre}` == 'En'){
        this.titre = `Birthdays`;
      }
      if(`${titre}` == 'Es'){
        this.titre = `Cumpleaños`;
      }
      if(`${titre}` == 'De'){
        this.titre = `Geburtstage`;
      }
      
  });
  }

  loadAnniversaires(startDate: string, endDate: string): void {
    this.luccaApiService.getAnniversaires(startDate, endDate).subscribe({
      next: (response: ApiResponse) => {
        console.log('API Response:', response); 
        this.anniversaires = response.data.items;
        this.nbPage = Math.ceil(this.anniversaires.length / 2);
      },
      error: (error) => console.error('Error fetching birthdays:', error)
    });
  }

  goToNextSlide(): void {
    this.currentPage = (this.currentPage + 1) % this.nbPage;

  }

}

