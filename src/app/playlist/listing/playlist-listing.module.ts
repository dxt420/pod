import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';

import { PlaylistListingPage } from './playlist-listing.page';
import { PlaylistListingResolver } from './playlist-listing.resolver';
import { PlaylistService } from '../../services/playlist.service';




const routes: Routes = [
  {
    path: '',
    component: PlaylistListingPage,
    resolve: {
      data: PlaylistListingResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    HttpClientModule
  ],
  declarations: [PlaylistListingPage],
  providers: [
    PlaylistListingResolver,
    PlaylistService
  ]
})
export class PlaylistListingPageModule {}
