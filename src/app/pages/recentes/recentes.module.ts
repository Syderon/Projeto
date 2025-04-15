import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecentesRoutingModule } from './recentes-routing.module';
import { RecentesComponent } from './recentes.component';


@NgModule({
  declarations: [
    RecentesComponent
  ],
  imports: [
    CommonModule,
    RecentesRoutingModule
  ]
})
export class RecentesModule { }
