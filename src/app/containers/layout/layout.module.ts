import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { MouseWheelComponent } from 'src/app/components/shared/mouse-wheel/mouse-wheel.component';

import { FooterComponent } from './footer/footer.component';

const LayoutComponents: any = [
  HeaderComponent,
  MouseWheelComponent,

  FooterComponent
];

@NgModule({
  imports: [ CommonModule ],
  declarations: LayoutComponents,
  exports: LayoutComponents,
})
export class LayoutModule { }
