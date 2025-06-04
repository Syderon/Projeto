import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BookDetailsModalComponent } from './book-details-modal.component';

@NgModule({
  declarations: [BookDetailsModalComponent],
  imports: [CommonModule, IonicModule],
  exports: [BookDetailsModalComponent]
})
export class BookDetailsModalModule {}

