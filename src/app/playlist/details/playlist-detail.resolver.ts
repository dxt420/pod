import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import {  PlaylistDetailListingModel } from './playlist-detail.model';
import { DataStore } from '../../shell/data-store';
import { Observable } from 'rxjs';
import { PlaylistService } from '../../services/playlist.service';


@Injectable()
export class PlaylistDetailsResolver implements Resolve<any> {

  
  constructor(private playlistService: PlaylistService) {}

  resolve(route: ActivatedRouteSnapshot) {
    const itemSlug = route.paramMap.get('productId');
    const dataSource: Observable<PlaylistDetailListingModel> = this.playlistService.getPlaylistDetailsDataSource(itemSlug);
    const dataStore: DataStore<PlaylistDetailListingModel> = this.playlistService.getPlaylistDetailsStore(dataSource);

    return dataStore;
  }
}
