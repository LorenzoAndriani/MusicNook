import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AchillelauroPageRoutingModule } from './achillelauro-routing.module';

import { AchillelauroPage } from './achillelauro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AchillelauroPageRoutingModule
  ],
  declarations: [AchillelauroPage]
})
export class AchillelauroPageModule {}
