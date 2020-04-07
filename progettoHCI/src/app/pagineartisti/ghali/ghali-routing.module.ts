import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GhaliPage } from './ghali.page';

const routes: Routes = [
  {
    path: '',
    component: GhaliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GhaliPageRoutingModule {}
