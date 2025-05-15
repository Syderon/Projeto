import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { GenerosPage } from './generos.page';
import { GenerosRoutingModule } from './generos-routing.module';  // Importando o módulo de rotas

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    GenerosRoutingModule  // Aqui, estamos importando o módulo de rotas
  ],
  declarations: [GenerosPage]
})
export class GenerosPageModule {}
