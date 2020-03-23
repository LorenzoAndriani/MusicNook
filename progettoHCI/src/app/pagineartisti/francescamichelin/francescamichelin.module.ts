import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrancescamichelinPageRoutingModule } from './francescamichelin-routing.module';

import { FrancescamichelinPage } from './francescamichelin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrancescamichelinPageRoutingModule
  ],
  declarations: [FrancescamichelinPage]
})
export class FrancescamichelinPageModule {}
