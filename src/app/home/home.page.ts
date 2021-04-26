import { Component } from '@angular/core';
import { Artist } from '../model/Artist';
import { DataSearchArtist } from '../model/DataSearchArtist';
import { DeezerService } from '../service/deezer.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  artists: Artist[];
  nbArtists: number = 0;

  constructor(public deezerService: DeezerService) {}

  async onSearchArtist(event) {
    try {
      const dataSearchArtist: DataSearchArtist = await this.deezerService.getAuthors(event.target.value);
      this.artists = dataSearchArtist.data;
      this.nbArtists = dataSearchArtist.total;
    } catch(err) {
      console.log(err)
    }
    
  }


}
