import { Component, OnInit } from '@angular/core';
import { CarouselService } from 'src/app/services/carousel.service';
import { ConstantService } from 'src/app/services/constant.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private carouselService: CarouselService,
    private constantService: ConstantService
  ) { }

  ngOnInit() {
    this.carouselService.setCarousel(this.loadCarousel());
  }

  private loadCarousel() {
    return this.constantService.getHomepageCarousel();
  }

}
