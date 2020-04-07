import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmiskillaPage } from './emiskilla.page';

const routes: Routes = [
  {
    path: '',
    component: EmiskillaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmiskillaPageRoutingModule {}
