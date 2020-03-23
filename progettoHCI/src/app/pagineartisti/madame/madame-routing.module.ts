import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MadamePage } from './madame.page';

const routes: Routes = [
  {
    path: '',
    component: MadamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MadamePageRoutingModule {}
