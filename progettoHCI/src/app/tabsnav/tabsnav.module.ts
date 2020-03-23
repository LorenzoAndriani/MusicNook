import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';
import { TabsnavPageRoutingModule } from './tabsnav-routing.module';
import { TabsnavPage } from './tabsnav.page';

const routes: Routes = [
  {
    path: 'tabs-nav',
    component: TabsnavPage,
    children: [
      {
        path: 'home',
        loadChildren: '../home/home.module#HomePageModule'
      },
      {
        path: 'uscite',
        loadChildren: '../uscite/uscite.module#UscitePageModule'
      },
      {
        path: 'artisti',
        loadChildren: '../artisti/artisti.module#ArtistiPageModule'
      },
      {
        path: 'articoli',
        loadChildren: '../articoli/articoli.module#ArticoliPageModule'
      },
      {
        path: 'live',
        loadChildren: '../live/live.module#LivePageModule'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs-nav/home'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsnavPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsnavPage]
})

export class TabsnavPageModule { }