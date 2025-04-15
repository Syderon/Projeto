import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalvosRoutingModule } from './salvos-routing.module';
import { SalvosComponent } from './salvos.component';


@NgModule({
  declarations: [
    SalvosComponent
  ],
  imports: [
    CommonModule,
    SalvosRoutingModule
  ]
})
export class SalvosModule { }
