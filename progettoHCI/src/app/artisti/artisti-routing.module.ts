import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtistiPage } from './artisti.page';

const routes: Routes = [
  {
    path: '',
    component: ArtistiPage
  },
  {
    path: 'achillelauro',
    loadChildren: () => import('../pagineartisti/achillelauro/achillelauro.module').then( m => m.AchillelauroPageModule)
  },
  {
    path: 'articolo31',
    loadChildren: () => import('../pagineartisti/articolo31/articolo31.module').then( m => m.Articolo31PageModule)
  },
  {
    path: 'davidecalandra',
    loadChildren: () => import('../pagineartisti/davidecalandra/davidecalandra.module').then( m => m.DavidecalandraPageModule)
  },
  {
    path: 'elodie',
    loadChildren: () => import('../pagineartisti/elodie/elodie.module').then( m => m.ElodiePageModule)
  },
  {
    path: 'francescamichelin',
    loadChildren: () => import('../pagineartisti/francescamichelin/francescamichelin.module').then( m => m.FrancescamichelinPageModule)
  }, 
  {
    path: 'emiskilla',
    loadChildren: () => import('../pagineartisti/emiskilla/emiskilla.module').then( m => m.EmiskillaPageModule)
  },
  {
    path: 'fedez',
    loadChildren: () => import('../pagineartisti/fedez/fedez.module').then( m => m.FedezPageModule)
  },
  {
    path: 'ghali',
    loadChildren: () => import('../pagineartisti/ghali/ghali.module').then( m => m.GhaliPageModule)
  },
  {
    path: 'jaden-smith',
    loadChildren: () => import('../pagineartisti/jaden-smith/jaden-smith.module').then( m => m.JadenSmithPageModule)
  },
  {
    path: 'madame',
    loadChildren: () => import('../pagineartisti/madame/madame.module').then( m => m.MadamePageModule)
  },
  {
    path: 'marracash',
    loadChildren: () => import('../pagineartisti/marracash/marracash.module').then( m => m.MarracashPageModule)
  },
  {
    path: 'nek',
    loadChildren: () => import('../pagineartisti/nek/nek.module').then( m => m.NekPageModule)
  },
  {
    path: 'nitro',
    loadChildren: () => import('../pagineartisti/nitro/nitro.module').then( m => m.NitroPageModule)
  },
  {
    path: 'russ',
    loadChildren: () => import('../pagineartisti/russ/russ.module').then( m => m.RussPageModule)
  },
  {
    path: 'salmo',
    loadChildren: () => import('../pagineartisti/salmo/salmo.module').then( m => m.SalmoPageModule)
  },
  {
    path: 'sferaebbasta',
    loadChildren: () => import('../pagineartisti/sferaebbasta/sferaebbasta.module').then( m => m.SferaebbastaPageModule)
  },
  {
    path: 'tedua',
    loadChildren: () => import('../pagineartisti/tedua/tedua.module').then( m => m.TeduaPageModule)
  },
  {
    path: 'tizianoferro',
    loadChildren: () => import('../pagineartisti/tizianoferro/tizianoferro.module').then( m => m.TizianoferroPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtistiPageRoutingModule {}
