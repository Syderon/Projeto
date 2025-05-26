import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComediaPage } from './comedia.page';

const routes: Routes = [
  {
    path: '',
    component: ComediaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComediaPageRoutingModule {}
