import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataSearchAlbum } from '../model/DataSearchAlbum';
import { DataSearchArtist } from '../model/DataSearchArtist';
import { DataSearchTrack } from '../model/DataSearchTrack';

@Injectable({
  providedIn: 'root'
})
export class DeezerService {

  TAG: string = "DeezerService"

  constructor(private http: HttpClient) {}

  getAuthors(artist:string):Promise<DataSearchArtist> {
    console.log(`${this.TAG} getAuthors ${artist}`);
    const url: string = 'https://api.deezer.com/search/artist?q=' + encodeURI(artist);
    console.log(`${this.TAG} url: ${url}`);
    return new Promise(resolve => {
      this.http.get(url).subscribe(data => {
        let json: DataSearchArtist = data as DataSearchArtist;
        resolve(json);
      }, err => {
        console.log(err);
      });
    });
  }

  getAlbums(artistId:string):Promise<DataSearchAlbum> {
    console.log(`${this.TAG} getAuthors ${artistId}`);
    const url: string = 'https://api.deezer.com/artist/' + encodeURI(artistId) + "/albums";
    console.log(`${this.TAG} url: ${url}`);
    return new Promise(resolve => {
      this.http.get(url).subscribe(data => {
        let json: DataSearchAlbum = data as DataSearchAlbum;
        resolve(json);
      }, err => {
        console.log(err);
      });
    });
  }

  getTracks(albumId:string):Promise<DataSearchTrack> {
    console.log(`${this.TAG} getAuthors ${albumId}`);
    const url: string = 'https://api.deezer.com/album/' + encodeURI(albumId) + '/tracks';
    console.log(`${this.TAG} url: ${url}`);
    return new Promise(resolve => {
      this.http.get(url).subscribe(data => {
        let json: DataSearchTrack = data as DataSearchTrack;
        resolve(json);
      }, err => {
        console.log(err);
      });
    });
  }

}
