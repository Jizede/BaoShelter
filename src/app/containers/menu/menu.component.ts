import { Component, OnInit } from '@angular/core';
import { CarouselService } from 'src/app/services/carousel.service';
import { ConstantService } from 'src/app/services/constant.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private carouselService: CarouselService,
    private constantService: ConstantService
  ) { }

  ngOnInit() {
    this.carouselService.setCarousel(this.loadCarousel());
  }

  private loadCarousel() {
    return this.constantService.getMenuCarousel();
  }
}
