import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalvosComponent } from './salvos.component';

const routes: Routes = [
  {
    path: '',
    component: SalvosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalvosRoutingModule { }
