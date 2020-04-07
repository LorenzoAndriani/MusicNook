import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Articolo31Page } from './articolo31.page';

const routes: Routes = [
  {
    path: '',
    component: Articolo31Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Articolo31PageRoutingModule {}
