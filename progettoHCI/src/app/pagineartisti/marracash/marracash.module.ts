import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarracashPageRoutingModule } from './marracash-routing.module';

import { MarracashPage } from './marracash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarracashPageRoutingModule
  ],
  declarations: [MarracashPage]
})
export class MarracashPageModule {}
