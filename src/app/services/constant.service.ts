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
}
