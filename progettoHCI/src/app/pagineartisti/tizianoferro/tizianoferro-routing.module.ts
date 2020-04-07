import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TizianoferroPage } from './tizianoferro.page';

const routes: Routes = [
  {
    path: '',
    component: TizianoferroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TizianoferroPageRoutingModule {}
