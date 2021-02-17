import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, from, defer } from 'rxjs';
import { map, mergeMap } from "rxjs/operators";

import { HTTP } from '@ionic-native/http/ngx';
// import { UserProfileModel } from './profile/user-profile.model';
// import { UserFriendsModel } from './friends/user-friends.model';



import { DataStore } from '../shell/data-store';
import { PlaylistListingModel } from '../playlist/listing/playlist-listing.model';
import { PlaylistDetailListingModel } from '../playlist/details/playlist-detail.model';


@Injectable()
export class PlaylistService {
  private playlistDataStore: DataStore<PlaylistListingModel>;
  private detailsDataStore: DataStore<PlaylistDetailListingModel>;
 
  constructor(private http: HttpClient, private nativeHttp: HTTP) { }


  public getPlaylistDataSource(): Observable<PlaylistListingModel> {
    // return this.http.get<PlaylistListingModel>('https://pod.pythonanywhere.com/api/playlists/?format=json');
    return this.http.get<PlaylistListingModel>('http://localhost:8000/api/playlists/');


    
  }

  public getPlaylistStore(dataSource: Observable<PlaylistListingModel>): DataStore<PlaylistListingModel> {
    // Use cache if available
    if (!this.playlistDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: PlaylistListingModel = new PlaylistListingModel();
      this.playlistDataStore = new DataStore(shellModel);
      // Trigger the loading mechanism (with shell) in the dataStore
      this.playlistDataStore.load(dataSource);
    }
    return this.playlistDataStore;
  }

  public getPlaylistDetailsDataSource(playlist_id: any): Observable<PlaylistDetailListingModel> {
    return this.http.get<PlaylistDetailListingModel>('http://localhost:8000/api/playlists/'+playlist_id+'/');

  }

  public getPlaylistDetailsStore(dataSource: Observable<PlaylistDetailListingModel>): DataStore<PlaylistDetailListingModel> {
    // Use cache if available
    if (!this.detailsDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: PlaylistDetailListingModel = new PlaylistDetailListingModel();
      this.detailsDataStore = new DataStore(shellModel);
      // Trigger the loading mechanism (with shell) in the dataStore
      this.detailsDataStore.load(dataSource);
    }
    return this.detailsDataStore;
  }

}
