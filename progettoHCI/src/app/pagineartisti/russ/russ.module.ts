import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RussPageRoutingModule } from './russ-routing.module';

import { RussPage } from './russ.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RussPageRoutingModule
  ],
  declarations: [RussPage]
})
export class RussPageModule {}
