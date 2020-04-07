import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NitroPage } from './nitro.page';

const routes: Routes = [
  {
    path: '',
    component: NitroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NitroPageRoutingModule {}
