import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RomancePage } from './romance.page';

const routes: Routes = [
  {
    path: '',
    component: RomancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RomancePageRoutingModule {}
