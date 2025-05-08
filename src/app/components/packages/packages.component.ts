import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-packages',
  imports: [CommonModule, FormsModule], // Add CommonModule here
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent {
  fullName: string = '';
  emailAddress: string = '';
  mobileNumber: string = '';

  travelPackages = [
    {
      id: 1,
      name: 'Adventure Package',
      
      destinations: 'Mountains, Rivers',
      price: '500 USD',
      status: 'Available',
      duration: 3 // in days
    },
    {
      id: 2,
      name: 'Beach Package',
      
      destinations: 'Beaches, Islands',
      price: '700 USD',
      status: 'Available',
      duration: 5
    },
    {
      id: 3,
      name: 'City Tour Package',
      
      destinations: 'Cities, Museums',
      price: '300 USD',
      status: 'Available',
      duration: 10
    },
    {
      id: 4,
      name: 'Wildlife Package',
      duration:5,
      destinations: 'Forests, Safari',
      price: '800 USD',
      status: 'Available',
    },
    {
      id: 5,
      name: 'Cultural Package',
      destinations: 'Temples, Heritage Sites',
      price: '600 USD',
      status: 'Available',
      duration: 3
    }
  ];

  constructor(private router: Router) {}

  bookPackage(packageId: number): void {
    const selectedPackage = this.travelPackages.find(pkg => pkg.id === packageId);
    if (selectedPackage) {
      this.router.navigate(['/app-booking'], {
        queryParams: {
          packageId: selectedPackage.id,
          duration: selectedPackage.duration
        }
      });
    }
  }
}
