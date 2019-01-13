import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {
  public horariesChoices;
  public personNumberChoices;

  constructor() { }

  ngOnInit() {
    this.horariesChoices = [
      '12h00', '12h30', '13h00', '13h30', '14h00', '14h30',
      '18h30', '19h00', '19h30', '20h00', '20h30', '21h00', '21h30', '22h00'
    ];
    this.personNumberChoices = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'];
  }

}
