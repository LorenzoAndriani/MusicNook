import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrancescamichelinPage } from './francescamichelin.page';

const routes: Routes = [
  {
    path: '',
    component: FrancescamichelinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrancescamichelinPageRoutingModule {}
