import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListAlbumsPage } from './list-albums.page';

const routes: Routes = [
  {
    path: '',
    component: ListAlbumsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListAlbumsPageRoutingModule {}
