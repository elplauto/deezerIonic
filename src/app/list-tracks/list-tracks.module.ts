import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListTracksPageRoutingModule } from './list-tracks-routing.module';

import { ListTracksPage } from './list-tracks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListTracksPageRoutingModule
  ],
  declarations: [ListTracksPage]
})
export class ListTracksPageModule {}
