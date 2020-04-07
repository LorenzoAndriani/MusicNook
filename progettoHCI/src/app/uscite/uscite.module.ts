import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UscitePageRoutingModule } from './uscite-routing.module';

import { UscitePage } from './uscite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UscitePageRoutingModule
  ],
  declarations: [UscitePage]
})
export class UscitePageModule {}
