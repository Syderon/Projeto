import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SuspensePageRoutingModule } from './suspense-routing.module';
import { SuspensePage } from './suspense.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuspensePageRoutingModule
  ],
  declarations: [SuspensePage]
})
export class SuspensePageModule {}
