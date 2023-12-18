import { Component, OnInit } from '@angular/core';
import { LuccaApiService } from '../../services/lucca-api.service';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-anniv',
  templateUrl: './anniv.component.html',
  styleUrls: ['./anniv.component.scss']
})
export class AnnivComponent implements OnInit{
  anniversaires: any[] = [];
  photos: any[] = [];
  currentPage: number = 0;
  nbPage: number = Math.floor(this.anniversaires.length/2)+(1*+!(this.anniversaires.length%2===0));
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

  nbPage1: number = Math.floor(this.anniv1.length/2)+(1*+!(this.anniv1.length%2===0));
  

  


  /*On affiche 2 éléments au plus par page.
  Cette méthode permet de récupérer les éléments qui seront afficher sur la page i*/
  getItemPage1(i: number): any[] {
    let anniv : any[] = [];
    if(1+2*i>=this.anniv1.length){
      for(let j=0;j<this.anniv1.length%2;j++){
        anniv[j] = {nom: this.anniv1[j+2*i].nom, date: this.anniv1[j+2*i].date};
      }
    }
    else{
      for(let j=0;j<2;j++){
        anniv[j] = {nom: this.anniv1[j+2*i].nom, date: this.anniv1[j+2*i].date};
      }
    }
    return anniv;

  }

  getItemPage(i: number): any[] {
    let anniv : any[] = [];
    if(1+2*i>=this.anniversaires.length){
      for(let j=0;j<this.anniversaires.length%2;j++){
        anniv[j] = {nom: this.anniversaires[j+2*i].nom, date: this.anniversaires[j+2*i].date};
      }
    }
    else{
      for(let j=0;j<2;j++){
        anniv[j] = {nom: this.anniversaires[j+2*i].nom, date: this.anniversaires[j+2*i].date};
      }
    }
    return anniv;

  }



  loadAnniversaires(): void {
    this.luccaApiService.getUsers().subscribe({
      next: (response) => {
        // On s'assure que 'items' est bien présent dans 'data'
        if (response && response.data && response.data.items) {
          // On extrait le tableau 'items' de la réponse de l'API
          this.anniversaires = response.data.items;
          // On trie la liste par date de visite
          this.anniversaires.sort((a, b) => {
            return a.lastVisitedAt - b.lastVisitedAt;
          });
          // On prend les 10 premiers éléments
          this.anniversaires = this.anniversaires.slice(6, 10);
        }
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des visiteurs:', error);
      }
    });
  }

  ngOnInit(): void {
    //this.loadAnniversaires();
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

  goToNextSlide(): void {
    this.currentPage = (this.currentPage + 1) % this.nbPage1;

  }

  


}
