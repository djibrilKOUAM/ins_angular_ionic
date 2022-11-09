import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Inscription1PageRoutingModule } from './inscription1-routing.module';

import { Inscription1Page } from './inscription1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Inscription1PageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [Inscription1Page]
})
export class Inscription1PageModule {}
