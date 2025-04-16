import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';  // Certifique-se de importar o IonicModule
import { RecentesComponent } from './recentes.component';
import { RecentesRoutingModule } from './recentes-routing.module';

@NgModule({
  declarations: [RecentesComponent],
  imports: [
    CommonModule,
    IonicModule,  // Adicione o IonicModule aqui
    RecentesRoutingModule
  ]
})
export class recentes { }
