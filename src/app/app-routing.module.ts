import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'generos',
    loadChildren: () =>
      import('./pages/generos/generos.module').then((m) => m.GenerosModule),
  },
  {
    path: 'salvos',
    loadChildren: () =>
      import('./pages/salvos/salvos.module').then((m) => m.SalvosModule),
  },

  {
    path: 'recentes',
    loadChildren: () =>
      import('./pages/recentes/recentes.module').then((m) => m.RecentesModule),
  },
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
