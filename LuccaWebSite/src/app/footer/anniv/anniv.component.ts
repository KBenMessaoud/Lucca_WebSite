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
    {photo: "../../../assets/anniv.png",nom: 'A', date: "01/01/1999"},
 
  ];

  nbPage: number = Math.floor(this.anniv1.length/4)+(1*+!(this.anniv1.length%4===0));
  

  photo1 = [

  ];

  constructor(){}


  getItemPage(i: number): any[] {
    let anniv : any[] = [];
    if(3+4*i>=this.anniv1.length){
      for(let j=0;j<this.anniv1.length%4;j++){
        anniv[j] = {nom: this.anniv1[j+4*i].nom, date: this.anniv1[j+4*i].date};
      }
    }
    else{
      for(let j=0;j<4;j++){
        anniv[j] = {nom: this.anniv1[j+4*i].nom, date: this.anniv1[j+4*i].date};
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
