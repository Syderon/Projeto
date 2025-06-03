import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalvosPage } from './salvos.page';  // Caminho correto

const routes: Routes = [
  {
    path: '',
    component: SalvosPage  // O componente correto para esta página
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalvosPageRoutingModule {}
