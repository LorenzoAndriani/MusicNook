import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalmoPageRoutingModule } from './salmo-routing.module';

import { SalmoPage } from './salmo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalmoPageRoutingModule
  ],
  declarations: [SalmoPage]
})
export class SalmoPageModule {}
