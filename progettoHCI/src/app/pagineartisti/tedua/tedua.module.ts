import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeduaPageRoutingModule } from './tedua-routing.module';

import { TeduaPage } from './tedua.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeduaPageRoutingModule
  ],
  declarations: [TeduaPage]
})
export class TeduaPageModule {}
