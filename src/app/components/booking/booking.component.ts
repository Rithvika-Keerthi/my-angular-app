import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-booking',
  imports: [FormsModule],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  fullName: string = '';
  emailAddress: string = '';
  mobileNumber: string = '';

  hotelDetails = {
    name: 'Super Hotel @ ECR Stays Near Nemmeli Beach Formerly OVS Homes',
    rating: '4.5',
    reviewsCount: '1.2K ratings - Excellent',
    stayDates: 'Mon, 28 Apr - Tue, 29 Apr',
    roomTypeAndGuests: '1 Room | Guest | Classic',
    roomPricePerNightForGuest: '',
    instantDiscountAmountSavedOnBooking: '',
    couponDiscount: '',
    wizardBlueMembershipCharge: '',
    payableAmount: ''
  };
}
