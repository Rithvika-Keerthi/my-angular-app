import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router'; // Remove RouterLinkActive
import { PackageserviceService } from '../../services/packageservice.service';

@Component({
  selector: 'app-packages',
  imports: [CommonModule, FormsModule, RouterLink], // Remove RouterLinkActive
  standalone: true, // Add CommonModule here
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {
  packages: any[] = []; // Ensure this is explicitly typed as an array

  constructor(private packageService: PackageserviceService) {}

  ngOnInit(): void {
    this.packageService.getPackages().subscribe({
      next: (data: any[]) => this.packages = data, // Explicitly type `data` as an array
      error: err => console.error('Error fetching packages', err)
    });
  }
}
