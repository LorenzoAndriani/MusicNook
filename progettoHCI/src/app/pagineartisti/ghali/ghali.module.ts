import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GhaliPageRoutingModule } from './ghali-routing.module';

import { GhaliPage } from './ghali.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GhaliPageRoutingModule
  ],
  declarations: [GhaliPage]
})
export class GhaliPageModule {}
