import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../Home/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../Recursos/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../Porque/tab3.module').then(m => m.Tab3PageModule)
      },
       {
        path: 'tab4',
        loadChildren: () => import('../Comecando/tab4.module').then(m => m.Tab4PageModule)
      },
       {
        path: 'login',
        loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
      },
       {
        path: 'cadastrar',
        loadChildren: () => import('../cadastrar/cadastrar.module').then(m => m.CadastrarPageModule)
      },
       {
        path: 'precos',
        loadChildren: () => import('../precos/precos.module').then(m => m.PrecosPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
