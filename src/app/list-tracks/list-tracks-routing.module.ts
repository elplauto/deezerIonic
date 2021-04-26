import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListTracksPage } from './list-tracks.page';

const routes: Routes = [
  {
    path: '',
    component: ListTracksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListTracksPageRoutingModule {}
