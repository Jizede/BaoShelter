import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  constructor() { }

  public getNavigationLinks() {
    return [{
      label: 'Accueil',
      link: ''
    }, {
      label: 'Menu',
      link: 'menu'
    }, {
      label: 'Réservation',
      link: 'reservation'
    }, {
      label: 'À propos',
      link: 'about-us'
    }, {
      label: 'Contact',
      link: 'contact'
    }];
  }

  public getInformations() {
    return {
      adress: '3 Rue Saint Marc, 75002 Paris',
      openDays: 'Lundi - Samedi',
      openHoraries: '12h00 - 14h30 / 18h30 - 22h00',
      phone: '+33 (0)1 73 75 10 87',
      email: 'contact.baoshelterparis@gmail.com'
    };
  }

  public getHomepageCarousel() {
    return [{
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

  public getMenuCarousel() {
    return [{
      title: 'Book a table here in our site',
      content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      class: 'img-bg-4'
    }];
  }
}
