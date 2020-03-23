import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NekPage } from './nek.page';

const routes: Routes = [
  {
    path: '',
    component: NekPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NekPageRoutingModule {}
