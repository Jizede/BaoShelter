import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from 'src/app/containers/home/home.component';
import { MenuComponent } from './containers/menu/menu.component';
import { ReservationComponent } from './containers/reservation/reservation.component';
import { AboutUsComponent } from './containers/about-us/about-us.component';
import { ContactComponent } from './containers/contact/contact.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'reservation', component: ReservationComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'contact', component: ContactComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
