import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreinscriptionPageRoutingModule } from './preinscription-routing.module';

import { PreinscriptionPage } from './preinscription.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreinscriptionPageRoutingModule, 
    ReactiveFormsModule
  ],
  declarations: [PreinscriptionPage]
})
export class PreinscriptionPageModule {}
