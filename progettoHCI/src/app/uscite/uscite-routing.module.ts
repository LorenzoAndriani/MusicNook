import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UscitePage } from './uscite.page';

const routes: Routes = [
  {
    path: '',
    component: UscitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UscitePageRoutingModule {}
