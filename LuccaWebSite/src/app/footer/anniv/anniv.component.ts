// src/app/footer/anniv/anniv.component.ts
import { Component, OnInit } from '@angular/core';
import { LuccaApiService } from '../../services/lucca-api.service';
import { UserBirthday, ApiResponse } from '../../services/interface'; // Update the import path as needed

@Component({
  selector: 'app-anniv',
  templateUrl: './anniv.component.html',
  styleUrls: ['./anniv.component.scss']
})
export class AnnivComponent implements OnInit {
  anniversaires: UserBirthday[] = [];
  currentPage: number = 0;
  nbPage: number = 0;

  constructor(private luccaApiService: LuccaApiService) { }

  ngOnInit(): void {
    const startDate = '2023-12-18'; // Modify as needed
    const endDate = '2023-12-22';   // Modify as needed
    this.loadAnniversaires(startDate, endDate);
    setInterval(() => this.goToNextSlide(), 3000);
  }

  // loadAnniversaires(startDate: string, endDate: string): void {
  //   this.luccaApiService.getAnniversaires(startDate, endDate).subscribe({
  //     next: (response: ApiResponse) => {
  //       this.anniversaires = response.data.items;
  //       this.nbPage = Math.ceil(this.anniversaires.length / 2);
  //     },
  //     error: (error) => console.error('Error fetching birthdays:', error)
  //   });
  // }

  loadAnniversaires(startDate: string, endDate: string): void {
    this.luccaApiService.getAnniversaires(startDate, endDate).subscribe({
      next: (response: ApiResponse) => {
        console.log('API Response:', response); // Add this line
        this.anniversaires = response.data.items;
        this.nbPage = Math.ceil(this.anniversaires.length / 2);
      },
      error: (error) => console.error('Error fetching birthdays:', error)
    });
  }
  

  getItemPage(i: number): UserBirthday[] {
    const startIndex = i * 2;
    const endIndex = startIndex + 2;
    return this.anniversaires.slice(startIndex, endIndex);
  }

  goToNextSlide(): void {
    this.currentPage = (this.currentPage + 1) % this.nbPage;
  }
}
