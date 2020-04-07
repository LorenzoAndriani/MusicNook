import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RussPage } from './russ.page';

const routes: Routes = [
  {
    path: '',
    component: RussPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RussPageRoutingModule {}
