import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataSearchTrack } from '../model/DataSearchTrack';
import { Track } from '../model/Track';
import { DeezerService } from '../service/deezer.service';

@Component({
  selector: 'app-list-tracks',
  templateUrl: './list-tracks.page.html',
  styleUrls: ['./list-tracks.page.scss'],
})
export class ListTracksPage implements OnInit {

  albumId: string
  tracks: Track[]
  nbTracks: number

  constructor(private route: Router, private activatedRoute: ActivatedRoute, public deezerService: DeezerService) {}

  async ionViewWillEnter() {
    this.albumId = this.activatedRoute.snapshot.paramMap.get('id');
    this.loadTracks();
  }

  async ngOnInit() {

  }

  async loadTracks() {
    try {
      const dataSearchTrack: DataSearchTrack = await this.deezerService.getTracks(this.albumId);
      this.tracks = dataSearchTrack.data;
      this.nbTracks = dataSearchTrack.total;
    } catch(err) {
      console.log(err)
    }
  }

}
