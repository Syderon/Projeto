import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SalvosPage } from './salvos.page';  // Certifique-se de que o caminho está correto
import { SalvosPageRoutingModule } from './salvos-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalvosPageRoutingModule
  ],
  declarations: [SalvosPage]  // O componente deve ser listado aqui
})
export class SalvosPageModule {}
