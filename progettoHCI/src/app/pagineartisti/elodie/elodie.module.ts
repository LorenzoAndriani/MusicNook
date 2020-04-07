import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElodiePageRoutingModule } from './elodie-routing.module';

import { ElodiePage } from './elodie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElodiePageRoutingModule
  ],
  declarations: [ElodiePage]
})
export class ElodiePageModule {}
