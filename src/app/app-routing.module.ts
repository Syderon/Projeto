import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from './pages/login/login.page';  // Importe a página

const routes: Routes = [
  {
    path: 'cadastro',
    loadChildren: () => import('./pages/cadastro/cadastro.module').then(m => m.CadastroPageModule)
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
      import('./pages/recentes/recentes.module').then((m) => m.recentes),
  },
  {
    path: '',
    component: LoginPage,  // Rota inicial
  },
  {
    path: 'login',
    component: LoginPage,  // Rota para a página de login
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
