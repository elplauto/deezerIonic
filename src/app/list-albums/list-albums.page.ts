import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Album } from '../model/Album';
import { DataSearchAlbum } from '../model/DataSearchAlbum';
import { DeezerService } from '../service/deezer.service';

@Component({
  selector: 'app-list-albums',
  templateUrl: './list-albums.page.html',
  styleUrls: ['./list-albums.page.scss'],
})
export class ListAlbumsPage implements OnInit {

  artistId: string
  albums: Album[]
  nbAlbums: number;

  constructor(private route: Router, private activatedRoute: ActivatedRoute, public deezerService: DeezerService) {}

  async ionViewWillEnter() {
    this.artistId = this.activatedRoute.snapshot.paramMap.get('id');
    this.loadAlbums();
  }

  async ngOnInit() {

  }

  async loadAlbums() {
    try {
      const dataSearchAlbum: DataSearchAlbum = await this.deezerService.getAlbums(this.artistId);
      this.albums = dataSearchAlbum.data;
      this.nbAlbums = dataSearchAlbum.total;
    } catch(err) {
      console.log(err)
    }
  }

}
