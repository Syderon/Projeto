import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RomancePageRoutingModule } from './romance-routing.module';
import { RomancePage } from './romance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RomancePageRoutingModule
  ],
  declarations: [RomancePage]
})
export class RomancePageModule {}
