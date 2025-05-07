import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-sidebar',
  imports: [FormsModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
 
 
  price: number = 25000;
    displayedPrice: number = 25000;
    locations = {
      chennai: false,
      hyderabad: false,
      bangalore: false,
      pune: false
    };
    roomCategories = {
      superSaver: false,
      delux: false,
      superDelux: false
    };
    accommodationType = {
      resorts: false,
      hotels: false,
      privateVillas: false
    };
    hotelFacilities = {
      pool: false,
      gym: false,
      spa: false
    };
 
    updatePriceDisplay() {
      this.displayedPrice = this.price;
    }
  }
 
 