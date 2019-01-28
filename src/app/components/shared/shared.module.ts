import { NgModule } from '@angular/core';

import { MouseWheelComponent } from './mouse-wheel/mouse-wheel.component';
import { InputComponent } from './input/input.component';

const SharedComponents: any = [
    MouseWheelComponent,
    InputComponent
];

@NgModule({
  declarations: SharedComponents,
  exports: SharedComponents,
})
export class SharedModule { }
