import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

/* COMPONENTS */
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { InformationBarComponent } from './components/information-bar/information-bar.component';
import { OrderMenuComponent } from './components/order-menu/order-menu.component';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';

/* CONTAINERS */
import { HomeComponent } from './containers/home/home.component';
import { HeaderComponent } from './containers/layout/header/header.component';
import { FooterComponent } from './containers/layout/footer/footer.component';
import { CustomerReviewComponent } from './customer-review/customer-review.component';


@NgModule({
  declarations: [
    /* COMPONENTS */
    AppComponent,
    MenuComponent,
    NavbarComponent,
    CarouselComponent,
    InformationBarComponent,
    OrderMenuComponent,
    ReservationFormComponent,

    /* CONTAINERS */
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CustomerReviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
