import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarracashPage } from './marracash.page';

const routes: Routes = [
  {
    path: '',
    component: MarracashPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarracashPageRoutingModule {}
