import { Component, OnInit } from '@angular/core';
import { LuccaApiService } from '../../services/lucca-api.service';

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


  constructor(private luccaApiService: LuccaApiService) { }


  anniv1 = [
    {photo: "../../../assets/anniv.png",nom: 'A', date: "01/01/1999"},
    {photo: "../../../assets/anniv.png",nom: 'B', date: "01/01/1999"},
    {photo: "../../../assets/anniv.png",nom: 'C', date: "01/01/1999"}
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
   
  }

  goToNextSlide(): void {
    this.currentPage = (this.currentPage + 1) % this.nbPage1;

  }

  


}
