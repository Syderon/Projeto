import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecentesComponent } from './recentes.component';

const routes: Routes = [
  {
    path: '',
    component: RecentesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecentesRoutingModule { }
