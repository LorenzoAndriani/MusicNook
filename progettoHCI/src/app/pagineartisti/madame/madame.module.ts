import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MadamePageRoutingModule } from './madame-routing.module';

import { MadamePage } from './madame.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MadamePageRoutingModule
  ],
  declarations: [MadamePage]
})
export class MadamePageModule {}
