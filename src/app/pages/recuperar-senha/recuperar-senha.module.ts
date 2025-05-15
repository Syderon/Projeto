import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RecuperarSenhaPageRoutingModule } from './recuperar-senha-routing.module';
import { RecuperarSenhaPage } from './recuperar-senha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RecuperarSenhaPageRoutingModule
  ],
  declarations: [RecuperarSenhaPage]
})
export class RecuperarSenhaPageModule {}
