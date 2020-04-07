import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Articolo31PageRoutingModule } from './articolo31-routing.module';

import { Articolo31Page } from './articolo31.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Articolo31PageRoutingModule
  ],
  declarations: [Articolo31Page]
})
export class Articolo31PageModule {}
