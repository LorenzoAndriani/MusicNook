import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArticoliPageRoutingModule } from './articoli-routing.module';

import { ArticoliPage } from './articoli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArticoliPageRoutingModule
  ],
  declarations: [ArticoliPage]
})
export class ArticoliPageModule {}
