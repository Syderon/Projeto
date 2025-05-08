import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TerrorPage } from './terror.page';

const routes: Routes = [
  {
    path: '',
    component: TerrorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TerrorPageRoutingModule {}
