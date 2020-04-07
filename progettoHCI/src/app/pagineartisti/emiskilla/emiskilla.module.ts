import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmiskillaPageRoutingModule } from './emiskilla-routing.module';

import { EmiskillaPage } from './emiskilla.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmiskillaPageRoutingModule
  ],
  declarations: [EmiskillaPage]
})
export class EmiskillaPageModule {}
