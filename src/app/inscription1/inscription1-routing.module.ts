import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Inscription1Page } from './inscription1.page';

const routes: Routes = [
  {
    path: '',
    component: Inscription1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Inscription1PageRoutingModule {}
