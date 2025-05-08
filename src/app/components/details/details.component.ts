import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  travelPackages = [
    {
      packageID: 1,
      name: 'Adventure Package',
      startDate: '2025-08-15',
      endDate: '2025-08-16',
      status: 'Paid',
      contact: '(123)123456',
      destinations: 'Mountains, Rivers'
    },
    {
      packageID: 2,
      name: 'Beach Package',
      startDate: '2025-08-12',
      endDate: '2025-08-19',
      status: 'Paid',
      contact: '(123)121356',
      destinations: 'Beaches, Islands'
    }
  ];

  packageToDelete: number | null = null;
  isConfirmationDialogVisible = false;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      const packageID = params['packageID'] ? +params['packageID'] : null;
      const startDate = params['startDate'] ? this.parseDate(params['startDate']) : null;

      if (packageID !== null && startDate) {
        this.updateBookingCheckInDate(packageID, startDate);
      }
    });
  }

  editPackage(packageID: number): void {
    this.router.navigate(['/app-edit'], { queryParams: { packageID } });
  }

  updateBookingCheckInDate(packageID: number, startDate: Date): void {
    if (startDate.getDate()) {
      alert('Invalid date. Please select a valid date.');
      return;
    }

    const packageIndex = this.travelPackages.findIndex(pkg => pkg.packageID === packageID);
    if (packageIndex !== -1) {
      this.travelPackages[packageIndex] = {
        ...this.travelPackages[packageIndex],
        startDate: startDate.toLocaleDateString()
      };
    } else {
      alert('Package not found. Please try again.');
    }
  }

  parseDate(dateString: string): Date {
    const [year, month, day] = dateString.split('-').map(Number);
    return new Date(year, month - 1, day);
  }

  showConfirmationDialog(packageID: number): void {
    this.packageToDelete = packageID;
    this.isConfirmationDialogVisible = true;
  }

  cancelDelete(): void {
    this.isConfirmationDialogVisible = false;
    this.packageToDelete = null;
  }

  confirmDelete(): void {
    if (this.packageToDelete !== null) {
      this.travelPackages = this.travelPackages.filter(pkg => pkg.packageID !== this.packageToDelete);
      this.packageToDelete = null;
    }
    this.isConfirmationDialogVisible = false;
  }
}
