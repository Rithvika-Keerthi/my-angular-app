import { Routes } from '@angular/router';
import { BookingComponent } from './components/booking/booking.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DetailsComponent } from './components/details/details.component';
import { EditComponent } from './components/edit/edit.component';
import { PackagesComponent } from './components/packages/packages.component';
export const routes: Routes = [
    {
        path: 'app-booking',
        component: BookingComponent
    },
    {
        path: 'app-packages',
        component: PackagesComponent
    },

    {
        path: 'app-sidebar',
        component: SidebarComponent
    }, 
    
    {
        path: 'app-details',
        component: DetailsComponent
    },

    {
        path: 'app-edit',
        component: EditComponent
    }
];
