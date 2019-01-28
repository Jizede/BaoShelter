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
}
