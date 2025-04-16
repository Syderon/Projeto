import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';  // Certifique-se de importar o IonicModule

import { GenerosRoutingModule } from './generos-routing.module';
import { GenerosComponent } from './generos.component';

@NgModule({
  declarations: [GenerosComponent],
  imports: [
    CommonModule,
    IonicModule,  // O IonicModule precisa estar aqui
    GenerosRoutingModule
    
  ]
  
})
export class GenerosModule { }
