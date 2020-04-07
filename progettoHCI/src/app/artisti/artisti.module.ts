import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtistiPageRoutingModule } from './artisti-routing.module';

import { ArtistiPage } from './artisti.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArtistiPageRoutingModule
  ],
  declarations: [ArtistiPage]
})
export class ArtistiPageModule {}
