import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AventuraPageRoutingModule } from './aventura-routing.module';
import { AventuraPage } from './aventura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AventuraPageRoutingModule
  ],
  declarations: [AventuraPage]
})
export class AventuraPageModule {}
