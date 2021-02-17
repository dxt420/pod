import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PlaylistDetailListingModel } from './playlist-detail.model';



@Component({
  selector: 'app-playlist-details',
  templateUrl: './playlist-detail.page.html',
  styleUrls: [
    './styles/playlist-detail.page.scss',
    './styles/playlist-detail.shell.scss',
    './styles/playlist-detail.ios.scss',
    './styles/playlist-detail.md.scss'
  ]
})
export class PlaylistDetailsPage implements OnInit {
  details: PlaylistDetailListingModel;
  colorVariants = [];
  sizeVariants = [];
  slidesOptions: any = {
    zoom: {
      toggle: false // Disable zooming to prevent weird double tap zomming on slide images
    }
  };

  @HostBinding('class.is-shell') get isShell() {
    return (this.details && this.details.isShell) ? true : false;
  }

  constructor(
    private route: ActivatedRoute,
    public alertController: AlertController
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe((resolvedRouteData) => {
      const detailsDataStore = resolvedRouteData['data'];

      detailsDataStore.state.subscribe(
        (state) => {
          this.details = state;

       
        },
        (error) => {}
      );
    },
    (error) => {});
  }


}
