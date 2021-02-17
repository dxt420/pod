import { ShellModel } from '../../shell/data-store';

export class PlaylistModel{



    playlist_id : string;
    publisher_id : string;
    title :string;
    description : string;
    cover : string;
    
    created_at : string;

    

    // songs: Array<{song_id: string, file_url: string, plays: string}> = [
    //   {
    //     song_id: '',
    //     file_url: '',
    //     plays: ''
    //   }
    // ];
    songs: {};
    // changed this from array to test difference
    
  
}



  export class PlaylistListingModel extends ShellModel {
    items: Array<PlaylistModel> = [
      new PlaylistModel(),
      new PlaylistModel(),
      new PlaylistModel(),
      new PlaylistModel()
    ];
  
    
    constructor() {
      super();
    }
  }
  

