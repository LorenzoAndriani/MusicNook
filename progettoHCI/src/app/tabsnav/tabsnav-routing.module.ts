import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsnavPage } from './tabsnav.page';

const routes: Routes = [
  {
    path: './home',
    component: TabsnavPage
  },
  {
    path: 'achillelauro',
    loadChildren: () => import('../pagineartisti/achillelauro/achillelauro.module').then( m => m.AchillelauroPageModule)
  },
  {
    path: 'francescamichelin',
    loadChildren: () => import('../pagineartisti/francescamichelin/francescamichelin.module').then( m => m.FrancescamichelinPageModule)
  },
  {
    path: 'ghali',
    loadChildren: () => import('../pagineartisti/ghali/ghali.module').then( m => m.GhaliPageModule)
  },
  {
    path: 'marracash',
    loadChildren: () => import('../pagineartisti/marracash/marracash.module').then( m => m.MarracashPageModule)
  },
  {
    path: 'nitro',
    loadChildren: () => import('../pagineartisti/nitro/nitro.module').then( m => m.NitroPageModule)
  },
  {
    path: 'davidecalandra',
    loadChildren: () => import('../pagineartisti/davidecalandra/davidecalandra.module').then( m => m.DavidecalandraPageModule)
  },
  {
    path: 'tizianoferro',
    loadChildren: () => import('../pagineartisti/tizianoferro/tizianoferro.module').then( m => m.TizianoferroPageModule)
  },
  {
    path: 'fedez',
    loadChildren: () => import('../pagineartisti/fedez/fedez.module').then( m => m.FedezPageModule)
  },
  {
    path: 'salmo',
    loadChildren: () => import('../pagineartisti/salmo/salmo.module').then( m => m.SalmoPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsnavPageRoutingModule {}
