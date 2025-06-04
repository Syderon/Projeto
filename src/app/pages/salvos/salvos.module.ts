import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SalvosPage } from './salvos.page';  // Certifique-se de que o caminho está correto
import { SalvosPageRoutingModule } from './salvos-routing.module';
import { BookDetailsModalComponent } from '../../components/book-details-modal/book-details-modal.component'; // Ajuste o caminho conforme necessário

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalvosPageRoutingModule
  ],
  declarations: [SalvosPage]
})
export class SalvosPageModule {}
