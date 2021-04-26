import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListAlbumsPageRoutingModule } from './list-albums-routing.module';

import { ListAlbumsPage } from './list-albums.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListAlbumsPageRoutingModule
  ],
  declarations: [ListAlbumsPage]
})
export class ListAlbumsPageModule {}
