import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JadenSmithPageRoutingModule } from './jaden-smith-routing.module';

import { JadenSmithPage } from './jaden-smith.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JadenSmithPageRoutingModule
  ],
  declarations: [JadenSmithPage]
})
export class JadenSmithPageModule {}
