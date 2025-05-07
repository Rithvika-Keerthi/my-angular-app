import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RouterModule, Router, ActivatedRoute } from '@angular/router'; // Import Router, RouterModule, and ActivatedRoute for navigation

@Component({
  selector: 'app-details',
  standalone: true, // Mark as standalone component
  imports: [CommonModule, RouterModule], // Add CommonModule and RouterModule
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  bookings = [
    {
      name: 'John Deo',
      checkIn: '15-08-2025',
      checkOut: '16-08-2025',
      status: 'Paid',
      phone: '(123)123456',
      roomCategories: 'Delux',
      actions: 'View'
    },
    {
      name: 'Tom Deo',
      checkIn: '12-08-2025',
      checkOut: '19-08-2025',
      status: 'Paid',
      phone: '(123)121356',
      roomCategories: 'Delux',
      actions: 'View'
    },
    {
      name: 'Tom John',
      checkIn: '3-08-2025',
      checkOut: '7-08-2025',
      status: 'Unpaid',
      phone: '(123)120356',
      roomCategories: 'Delux',
      actions: 'View'
    },
    {
      name: 'Jens Brincker',
      checkIn: '15-08-2025',
      checkOut: '16-08-2025',
      status: 'Unpaid',
      phone: '(123)123456',
      roomCategories: 'Super Delux',
      actions: 'View'
    }
  ];

  bookingToDelete: number | null = null;
  isConfirmationDialogVisible = false;

  constructor(private router: Router, private route: ActivatedRoute) {
    // Retrieve updated check-in date from query parameters
    this.route.queryParams.subscribe(params => {
      const bookingIndex = params['bookingIndex'] ? +params['bookingIndex'] : null;
      const checkInDate = params['checkInDate'] ? new Date(params['checkInDate']) : null;

      if (bookingIndex !== null && checkInDate) {
        // Update only the specific booking's check-in date immutably
        this.updateBookingCheckInDate(bookingIndex, checkInDate);
      }
    });
  }

  editBooking(index: number): void {
    this.router.navigate(['/app-edit'], { queryParams: { bookingIndex: index } });
  }

  updateBookingCheckInDate(index: number, checkInDate: Date): void {
    this.bookings[index] = {
      ...this.bookings[index],
      checkIn: checkInDate.toLocaleDateString()
    };
  }

  showConfirmationDialog(index: number): void {
    this.bookingToDelete = index;
    this.isConfirmationDialogVisible = true;
  }

  cancelDelete(): void {
    this.isConfirmationDialogVisible = false;
    this.bookingToDelete = null;
  }

  confirmDelete(): void {
    if (this.bookingToDelete !== null) {
      this.bookings.splice(this.bookingToDelete, 1);
      this.bookingToDelete = null;
    }
    this.isConfirmationDialogVisible = false;
  }
}
