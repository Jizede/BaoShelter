import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public pictures: any;

  constructor() { }

  ngOnInit() {
    this.loadCarousel();
  }

  private loadCarousel() {
    this.pictures = [{
      title: 'Special & Fresh Food',
      content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      class: 'img-bg-1'
    }, {
      title: 'Exquisite Dishes From Chef',
      content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      class: 'img-bg-2'
    }, {
      title: 'We are Delicious Restaurant',
      content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      class: 'img-bg-3'
    }, {
      title: 'Book a table here in our site',
      content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      class: 'img-bg-4'
    }];
  }

}
