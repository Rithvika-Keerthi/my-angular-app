import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
          // Set start date
          this.travelPackageDetails.startDate = selectedDate;
          
          // Calculate end date by adding duration days
          const endDate = new Date(startDate);
          const durationInDays = this.travelPackageDetails.duration;
          endDate.setDate(startDate.getDate() + durationInDays);
          
          // Format end date as YYYY-MM-DD
          const formattedEndDate = endDate.toISOString().split('T')[0];
          this.travelPackageDetails.endDate = formattedEndDate;
          
          console.log('Start Date:', this.travelPackageDetails.startDate);
          console.log('Duration:', durationInDays, 'days');
          console.log('End Date:', this.travelPackageDetails.endDate);
    }
}
}