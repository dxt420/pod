import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PlaylistListingModel } from './playlist-listing.model';

@Component({
  selector: 'app-playlist-listing',
  templateUrl: './playlist-listing.page.html',
  styleUrls: [
    './styles/playlist-listing.page.scss',
    './styles/playlist-listing.shell.scss', 
    './styles/playlist-listing.ios.scss',
    './styles/playlist-listing.md.scss'
  ]
})
export class PlaylistListingPage implements OnInit {
  
  playlists: PlaylistListingModel;

  @HostBinding('class.is-shell') get isShell() {
    return (this.playlists && this.playlists.isShell) ? true : false;
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((resolvedRouteData) => {
      const listingDataStore = resolvedRouteData['data'];

      listingDataStore.state.subscribe(
        (state) => {
          this.playlists = state;
        },
        (error) => {}
      );
    },
    (error) => {});
  }
}
