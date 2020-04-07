import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DavidecalandraPageRoutingModule } from './davidecalandra-routing.module';

import { DavidecalandraPage } from './davidecalandra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DavidecalandraPageRoutingModule
  ],
  declarations: [DavidecalandraPage]
})
export class DavidecalandraPageModule {}
