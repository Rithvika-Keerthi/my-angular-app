import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
interface PackageDetails {
  id: number;
  startDate: string;
  endDate: string;
  duration: number;
}

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']  
})
export class BookingComponent implements OnInit {
  travelPackageDetails: PackageDetails = {
    id: 0,
    startDate: '',
    endDate: '',
    duration: 0
  };

  includeInsurance: boolean = false; // Add this property

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.travelPackageDetails.id = params['packageId'];
      this.travelPackageDetails.duration = params['duration'];
    });
  }

  onStartDateChange(event: any): void {
    const selectedDate = event.target.value;
    const startDate = new Date(selectedDate);
    
    if (startDate && this.travelPackageDetails.duration) {
      this.travelPackageDetails.startDate = selectedDate;
      const endDate = new Date(startDate);
      const durationInDays = this.travelPackageDetails.duration;
      endDate.setDate(startDate.getDate() + durationInDays);
      const formattedEndDate = endDate.toISOString().split('T')[0];
      this.travelPackageDetails.endDate = formattedEndDate;
      
      console.log('Start Date:', this.travelPackageDetails.startDate);
      console.log('Duration:', durationInDays, 'days');
      console.log('End Date:', this.travelPackageDetails.endDate);
    }
  }

  onSubmit(): void { // Add this method
    console.log('Booking Details:', this.travelPackageDetails);
    console.log('Include Insurance:', this.includeInsurance);
    // Add logic to handle booking submission
  }
}