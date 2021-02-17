import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable } from 'rxjs';
import { PlaylistService } from '../../services/playlist.service';
import { DataStore } from '../../shell/data-store';

import { PlaylistListingModel } from './playlist-listing.model';

@Injectable()
export class PlaylistListingResolver implements Resolve<any> {

  constructor(private playlistService: PlaylistService) { }

  resolve() {
    const dataSource: Observable<PlaylistListingModel> = this.playlistService.getPlaylistDataSource();
    const dataStore: DataStore<PlaylistListingModel> = this.playlistService.getPlaylistStore(dataSource);

    console.log(dataSource);
    

    // const dataSource = this.userService.getPlaylistsDataSource();
    // const dataStore = this.userService.getPlaylistsStore(dataSource);

    return dataStore;
  }
}
