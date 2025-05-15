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
      import('./pages/generos/generos.module').then((m) => m.GenerosPageModule),
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
    redirectTo: '/login',
    pathMatch: 'full',  // Rota inicial para login
  },
  {
    path: 'login',
    component: LoginPage,  // Rota para a página de login
  },
  // Rota para os gêneros
  {
    path: 'generos/fantasia',
    loadChildren: () => import('./pages/generos/fantasia/fantasia.module').then(m => m.FantasiaPageModule)
  },
  {
    path: 'generos/romance',
    loadChildren: () => import('./pages/generos/romance/romance.module').then(m => m.RomancePageModule)
  },  
  {
    path: 'generos/terror',
    loadChildren: () => import('./pages/generos/terror/terror.module').then(m => m.TerrorPageModule)
  },
  {
    path: 'generos/aventura',
    loadChildren: () => import('./pages/generos/aventura/aventura.module').then(m => m.AventuraPageModule)
  },
  {
    path: 'generos/suspense',
    loadChildren: () => import('./pages/generos/suspense/suspense.module').then(m => m.SuspensePageModule)
  },
  {
    path: 'generos/ficcao',
    loadChildren: () => import('./pages/generos/ficcao/ficcao.module').then(m => m.FiccaoPageModule)
  },
  {
    path: 'generos/acao',
    loadChildren: () => import('./pages/generos/acao/acao.module').then(m => m.AcaoPageModule)
  },
  {
  path: 'recuperar-senha',
  loadChildren: () => import('./pages/recuperar-senha/recuperar-senha.module').then(m => m.RecuperarSenhaPageModule)
}

  

];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
