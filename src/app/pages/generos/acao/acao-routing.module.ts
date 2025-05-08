import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcaoPage } from './acao.page';

const routes: Routes = [
  {
    path: '',
    component: AcaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcaoPageRoutingModule {}
