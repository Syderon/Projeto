import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FiccaoPageRoutingModule } from './ficcao-routing.module';
import { FiccaoPage } from './ficcao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiccaoPageRoutingModule
  ],
  declarations: [FiccaoPage]
})
export class FiccaoPageModule {}

