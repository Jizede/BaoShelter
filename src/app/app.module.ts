import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

/* MODULES */
import { LayoutModule } from './containers/layout/layout.module';

/* COMPONENTS */
import { AppComponent } from './app.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { OrderMenuComponent } from './components/order-menu/order-menu.component';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';

import { CustomerReviewComponent } from './components/customer-review/customer-review.component';

/* CONTAINERS */
import { HomeComponent } from './containers/home/home.component';
import { MenuComponent } from './containers/menu/menu.component';
import { ReservationComponent } from './containers/reservation/reservation.component';
import { AboutUsComponent } from './containers/about-us/about-us.component';
import { ContactComponent } from './containers/contact/contact.component';

@NgModule({
  declarations: [
    /* COMPONENTS */
    AppComponent,
    HomeComponent,
    NavigationMenuComponent,
    OrderMenuComponent,
    ReservationFormComponent,
    CustomerReviewComponent,

    /* CONTAINERS */
    MenuComponent,
    ReservationComponent,
    AboutUsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
