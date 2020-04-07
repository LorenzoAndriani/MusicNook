import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NekPageRoutingModule } from './nek-routing.module';

import { NekPage } from './nek.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NekPageRoutingModule
  ],
  declarations: [NekPage]
})
export class NekPageModule {}
