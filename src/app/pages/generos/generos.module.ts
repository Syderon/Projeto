import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';  // Certifique-se de importar o IonicModule

import { GenerosRoutingModule } from './generos-routing.module';
import { GenerosPage } from './generos.page';

@NgModule({
  declarations: [GenerosPage],
  imports: [
    CommonModule,
    IonicModule,  // O IonicModule precisa estar aqui
    GenerosRoutingModule
    
  ]
  
})
export class GenerosPageModule { }
