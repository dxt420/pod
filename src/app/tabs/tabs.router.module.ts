import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'categories',
        children: [
          {
            path: '',
            // loadChildren: () => import('../categories/categories.module').then(m => m.CategoriesPageModule)
          },
          
          // {
          //   path: 'fashion/:productId',
          //   loadChildren: () => import('../fashion/details/fashion-details.module').then(m => m.FashionDetailsPageModule)
          // },
          {
            path: 'food',
            loadChildren: () => import('../food/listing/food-listing.module').then(m => m.FoodListingPageModule)
          },
          {
            path: 'food/:productId',
            loadChildren: () => import('../food/details/food-details.module').then(m => m.FoodDetailsPageModule)
          },
          {
            path: 'travel',
            loadChildren: () => import('../travel/listing/travel-listing.module').then(m => m.TravelListingPageModule)
          },
          {
            path: 'travel/:productId',
            loadChildren: () => import('../travel/details/travel-details.module').then(m => m.TravelDetailsPageModule)
          },
          {
            path: 'deals',
            loadChildren: () => import('../deals/listing/deals-listing.module').then(m => m.DealsListingPageModule)
          },
          {
            path: 'deals/:productId',
            loadChildren: () => import('../deals/details/deals-details.module').then(m => m.DealsDetailsPageModule)
          },
          {
            path: 'real-state',
            loadChildren: () => import('../real-state/listing/real-state-listing.module').then(m => m.RealStateListingPageModule)
          },
          {
            path: 'real-state/:productId',
            loadChildren: () => import('../real-state/details/real-state-details.module').then(m => m.RealStateDetailsPageModule)
          }
        ]
      },
      {
        path: 'pages',
        children: [
          {
            path: 'playlist',
            loadChildren: () => import('../playlist/listing/playlist-listing.module').then(m => m.PlaylistListingPageModule)
          },
          {
            path: 'playlist/:productId',
            loadChildren: () => import('../playlist/details/playlist-detail.module').then(m => m.PlaylistDetailsPageModule)
          },


        ]
      },
      // {
      //   path: 'user',
      //   children: [
      //     {
      //       path: '',
      //       // loadChildren: () => import('../user/profile/user-profile.module').then(m => m.UserProfilePageModule)
      //       loadChildren: () => import('../profile/playlist.module').then(m => m.PlaylistPageModule)
      //     },
      //     {
      //       path: 'artists',
      //       loadChildren: () => import('../artists/notifications.module').then(m => m.NotificationsPageModule)
      //     },
      //     {
      //       path: 'album',
      //       loadChildren: () => import('../album/profile/user-profile.module').then(m => m.UserProfilePageModule)
      //     }

      //   ]
      // },
      {
        path: 'search',
        children: [
         
          {
            path: '',
            loadChildren: () => import('../search/user-friends.module').then(m => m.UserFriendsPageModule)
          }
        ]
      },
      {
        path: 'library',
        children: [
         
          {
            path: '',
            loadChildren: () => import('../library/profile/user-profile.module').then(m => m.UserProfilePageModule)
          }
        ]
      },
      {
        path: 'notifications',
        children: [
          {
            path: '',
            loadChildren: () => import('../notifications/notifications.module').then(m => m.NotificationsPageModule)
          }
        ]
      },
      {
        path: 'artist',
        children: [
          {
            path: '',
            loadChildren: () => import('../artist/details/places-details.module').then(m => m.PlacesDetailsPageModule)
          }
        ]
      },
      
      {
        path: 'musicplayer',
        children: [
          {
            path: '',
            loadChildren: () => import('../musicplayer/musicplayer.module').then(m => m.MusicplayerPageModule)
          }
        ]
      },
    ]
  },
  // /app/ redirect
  {
    path: '',
    redirectTo: 'app/categories',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule],
  providers: [ ]
})
export class TabsPageRoutingModule {}
