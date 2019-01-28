import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ConstantService } from 'src/app/services/constant.service';
import { CarouselService } from 'src/app/services/carousel.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public carousel: any;
  public informations: any;

  constructor(
    public router: Router,
    private carouselService: CarouselService,
    private constantService: ConstantService
  ) { }

  ngOnInit() {
    this.carouselService.carousel.subscribe((carousel) => {
      this.carousel = carousel;
    });
    this.loadInformations();
  }

  private loadInformations() {
    this.informations = this.constantService.getInformations();
  }
}
