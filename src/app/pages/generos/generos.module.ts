import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenerosRoutingModule } from './generos-routing.module';
import { GenerosComponent } from './generos.component';


@NgModule({
  declarations: [
    GenerosComponent
  ],
  imports: [
    CommonModule,
    GenerosRoutingModule
  ]
})
export class GenerosModule { }
