import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreinscriptionPage } from './preinscription.page';

const routes: Routes = [
  {
    path: '',
    component: PreinscriptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreinscriptionPageRoutingModule {}
