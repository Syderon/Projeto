import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecuperarSenhaPage } from './recuperar-senha.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperarSenhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperarSenhaPageRoutingModule {}
