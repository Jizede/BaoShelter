import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { MouseWheelComponent } from 'src/app/components/shared/mouse-wheel/mouse-wheel.component';

const LayoutComponents: any = [
  HeaderComponent,
  FooterComponent,

  MouseWheelComponent
];

@NgModule({
  imports: [ CommonModule ],
  declarations: LayoutComponents,
  exports: LayoutComponents,
})
export class LayoutModule { }
