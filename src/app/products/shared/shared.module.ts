import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomSharedDirective } from './directives/custom-label.directive';



@NgModule({
  declarations: [
    CustomSharedDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomSharedDirective
  ]
})
export class SharedModule { }
