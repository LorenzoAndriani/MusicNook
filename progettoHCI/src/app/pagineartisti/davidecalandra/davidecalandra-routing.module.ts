import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DavidecalandraPage } from './davidecalandra.page';

const routes: Routes = [
  {
    path: '',
    component: DavidecalandraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DavidecalandraPageRoutingModule {}
