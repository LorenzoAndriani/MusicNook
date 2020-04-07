import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeduaPage } from './tedua.page';

const routes: Routes = [
  {
    path: '',
    component: TeduaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeduaPageRoutingModule {}
