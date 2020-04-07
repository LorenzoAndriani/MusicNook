import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TizianoferroPageRoutingModule } from './tizianoferro-routing.module';

import { TizianoferroPage } from './tizianoferro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TizianoferroPageRoutingModule
  ],
  declarations: [TizianoferroPage]
})
export class TizianoferroPageModule {}
