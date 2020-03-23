import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElodiePage } from './elodie.page';

const routes: Routes = [
  {
    path: '',
    component: ElodiePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElodiePageRoutingModule {}
