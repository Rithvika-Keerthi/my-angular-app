import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for DatePipe
import { Router, ActivatedRoute } from '@angular/router'; // Import Router and ActivatedRoute for navigation

@Component({
  selector: 'app-edit',
  standalone: true, // Mark as standalone component
  imports: [CommonModule], // Add CommonModule to enable DatePipe
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  bookingId: number = Math.floor(Math.random() * 10000); // Random booking ID
  checkOutDate: Date = new Date(new Date().setDate(new Date().getDate() + 7)); // Random check-out date (7 days from now)
  checkInDate: Date | null = null;
  bookingIndex: number | null = null;

  constructor(private router: Router, private route: ActivatedRoute) {
    // Retrieve the booking index from query parameters
    this.route.queryParams.subscribe(params => {
      this.bookingIndex = params['bookingIndex'] ? +params['bookingIndex'] : null;
    });
  }

  onCheckInDateChange(event: any): void {
    const selectedDate = new Date(event.target.value);
    if (selectedDate >= this.checkOutDate) {
      alert('Check-in date must be before the check-out date.');
      this.checkInDate = null;
    } else {
      this.checkInDate = selectedDate;
    }
  }

  onSubmit(): void {
    if (this.bookingIndex !== null && this.checkInDate) {
      // Navigate back to the details component with updated check-in date
      this.router.navigate(['/app-details'], {
        queryParams: { bookingIndex: this.bookingIndex, checkInDate: this.checkInDate.toISOString() }
      });
    } else {
      alert('Please select a valid check-in date before submitting.');
    }
  }
}
