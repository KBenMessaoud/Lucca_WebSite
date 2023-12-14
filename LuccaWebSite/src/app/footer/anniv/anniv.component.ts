import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anniv',
  templateUrl: './anniv.component.html',
  styleUrls: ['./anniv.component.scss']
})
export class AnnivComponent implements OnInit{
  anniversaires: any[] = [];
  photos: any[] = [];
  currentPage: number = 0;
  inter = 0;

  

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
  

  photo1 = [

  ];

  constructor(){}


  /*On affiche 2 éléments au plus par page.
  Cette méthode permet de récupérer les éléments qui seront afficher sur la page i*/
  getItemPage(i: number): any[] {
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

  ngOnInit(): void {
    setInterval(() => this.goToNextSlide(), 3000);
   
  }

  goToNextSlide(): void {
    this.currentPage = (this.currentPage + 1) % this.nbPage;

  }

  


}
