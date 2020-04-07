import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SferaebbastaPageRoutingModule } from './sferaebbasta-routing.module';

import { SferaebbastaPage } from './sferaebbasta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SferaebbastaPageRoutingModule
  ],
  declarations: [SferaebbastaPage]
})
export class SferaebbastaPageModule {}
