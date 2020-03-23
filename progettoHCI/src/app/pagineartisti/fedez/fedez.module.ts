import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FedezPageRoutingModule } from './fedez-routing.module';

import { FedezPage } from './fedez.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FedezPageRoutingModule
  ],
  declarations: [FedezPage]
})
export class FedezPageModule {}
