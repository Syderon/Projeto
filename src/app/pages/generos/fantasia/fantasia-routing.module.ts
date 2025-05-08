import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FantasiaPage } from './fantasia.page';

const routes: Routes = [
  {
    path: '',
    component: FantasiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FantasiaPageRoutingModule {}
