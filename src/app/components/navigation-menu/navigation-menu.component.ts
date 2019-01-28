import { Component, OnInit } from '@angular/core';
import { ConstantService } from 'src/app/services/constant.service';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent implements OnInit {
  public navigationLinks: any;

  constructor(
    private constantService: ConstantService
  ) { }

  ngOnInit() {
    this.navigationLinks = this.constantService.getNavigationLinks();
  }

}
