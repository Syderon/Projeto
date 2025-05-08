import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuspensePage } from './suspense.page';

const routes: Routes = [
  {
    path: '',
    component: SuspensePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuspensePageRoutingModule {}
