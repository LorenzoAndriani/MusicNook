import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SferaebbastaPage } from './sferaebbasta.page';

const routes: Routes = [
  {
    path: '',
    component: SferaebbastaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SferaebbastaPageRoutingModule {}
