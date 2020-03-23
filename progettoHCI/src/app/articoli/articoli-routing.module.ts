import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticoliPage } from './articoli.page';

const routes: Routes = [
  {
    path: '',
    component: ArticoliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticoliPageRoutingModule {}
