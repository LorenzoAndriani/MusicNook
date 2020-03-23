import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalmoPage } from './salmo.page';

const routes: Routes = [
  {
    path: '',
    component: SalmoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalmoPageRoutingModule {}
