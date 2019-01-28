import { NgModule } from '@angular/core';

import { MouseWheelComponent } from './mouse-wheel/mouse-wheel.component';
import { InputComponent } from './input/input.component';
import { CarouselComponent } from './carousel/carousel.component';
import { InfoBarComponent } from './info-bar/info-bar.component';

const SharedComponents: any = [
    MouseWheelComponent,
    InputComponent,
    CarouselComponent,
    InfoBarComponent
];

@NgModule({
  declarations: SharedComponents,
  exports: SharedComponents,
})
export class SharedModule { }
