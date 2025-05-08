import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TerrorPage } from './terror.page';  // Importando a página de Terror
import { TerrorPageRoutingModule } from './terror-routing.module';  // Módulo de rotas da página de Terror

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TerrorPageRoutingModule  // Importando o módulo de rotas
  ],
  declarations: [TerrorPage]  // Declarando a página de Terror
})
export class TerrorPageModule {}

