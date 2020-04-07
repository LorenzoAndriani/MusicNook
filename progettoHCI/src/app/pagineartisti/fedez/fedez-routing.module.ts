import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FedezPage } from './fedez.page';

const routes: Routes = [
  {
    path: '',
    component: FedezPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FedezPageRoutingModule {}
