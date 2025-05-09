import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { BookingComponent } from './components/booking/booking.component'; // Import BookingComponent

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    FormsModule, // Ensure FormsModule is imported here
    BookingComponent, // Import BookingComponent as it is standalone
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
