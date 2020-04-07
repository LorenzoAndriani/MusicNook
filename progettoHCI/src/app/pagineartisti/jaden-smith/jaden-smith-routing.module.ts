import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JadenSmithPage } from './jaden-smith.page';

const routes: Routes = [
  {
    path: '',
    component: JadenSmithPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JadenSmithPageRoutingModule {}
