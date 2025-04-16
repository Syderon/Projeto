import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';  // Certifique-se de importar o IonicModule
import { SalvosRoutingModule } from './salvos-routing.module';
import { SalvosComponent } from './salvos.component';

@NgModule({
  declarations: [SalvosComponent],
  imports: [
    CommonModule,
    IonicModule,  // Adicione o IonicModule aqui
    SalvosRoutingModule
  ]
})
export class SalvosModule { }
