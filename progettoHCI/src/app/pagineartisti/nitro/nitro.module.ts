import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NitroPageRoutingModule } from './nitro-routing.module';

import { NitroPage } from './nitro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NitroPageRoutingModule
  ],
  declarations: [NitroPage]
})
export class NitroPageModule {}
