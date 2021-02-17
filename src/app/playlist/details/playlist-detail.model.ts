import { ShellModel } from '../../shell/data-store';

export class PlaylistDetailModel{




    track_id: string;
    title: string;
    year: string;
    duration: string;
    cover: string;
    description: string;
    artist_name: string;
    features:string;
    status: string;
    created_at: string;
    uploaded_by:{};
    track_file: {};
    
  
}



  export class PlaylistDetailListingModel extends ShellModel {
    items: Array<PlaylistDetailModel> = [
      new PlaylistDetailModel(),
      new PlaylistDetailModel(),
      new PlaylistDetailModel(),
      new PlaylistDetailModel()
    ];
  
    
    constructor() {
      super();
    }
  }
  

