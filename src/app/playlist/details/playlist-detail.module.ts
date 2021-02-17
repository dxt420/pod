import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';

import { PlaylistDetailsPage } from './playlist-detail.page';
import { PlaylistDetailsResolver } from './playlist-detail.resolver';
import { PlaylistService } from '../../services/playlist.service';


const routes: Routes = [
  {
    path: '',
    component: PlaylistDetailsPage,
    resolve: {
      data: PlaylistDetailsResolver
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
  declarations: [
    PlaylistDetailsPage
  ],
  providers: [
    PlaylistDetailsResolver,
    
    PlaylistService
  ]
})
export class PlaylistDetailsPageModule {}
