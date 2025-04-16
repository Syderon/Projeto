import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerosComponent } from './generos.component';

const routes: Routes = [
  {
    path: '',
    component: GenerosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenerosRoutingModule { }
