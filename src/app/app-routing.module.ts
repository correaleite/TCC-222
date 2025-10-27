import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./Home/tab1.module').then( m => m.Tab1PageModule)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./cadastrar/cadastrar.module').then( m => m.CadastrarPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'porque',
    loadChildren: () => import('./Porque/tab3.module').then( m => m.Tab3PageModule)
  },
  {
    path: 'recursos',
    loadChildren: () => import('./Recursos/tab2.module').then( m => m.Tab2PageModule)
  },
  {
    path: 'comecando',
    loadChildren: () => import('./Comecando/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'precos',
    loadChildren: () => import('./precos/precos.module').then( m => m.PrecosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
