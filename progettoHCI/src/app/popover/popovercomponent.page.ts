import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popovercomponent',
  templateUrl: './popovercomponent.page.html',
  styleUrls: ['./popovercomponent.page.scss'],
})
export class PopovercomponentPage implements OnInit {
  originalDataLink: any;
  items:any;
  constructor(private popover : PopoverController) { 

  }
  
  ngOnInit() {
  }

  initialize(){

    this.items = this.originalDataLink = [
      {titolo:'Feat (stato di natura)', Artista: 'francescamichelin', AppleMusic: 'https://music.apple.com/it/album/feat-stato-di-natura/1501834922', Spotify: 'https://open.spotify.com/album/28UKO6wlegGpOiMgOeOgOp?si=sVTNW24sQDeEartR5CUjdQ'},
      {titolo:'Rolls Royce', Artista: 'achillelauro', AppleMusic: 'https://music.apple.com/it/album/rolls-royce-feat-boss-doms-frenetik-orang3/1456786755?i=1456786757', Spotify: 'https://open.spotify.com/track/68IBz8C8oFUIVC4Xgf0f0g?si=eBMC8D_tS3O7ybrkZvD83w'},
      {titolo:"Nient'altro", Artista: 'davidecalandra', AppleMusic: 'https://music.apple.com/it/album/nientaltro-single/1502527517', Spotify: 'https://open.spotify.com/track/1DPSTMZeAGhibCJJVondC6?si=TjTQlf6YR9S4N_S86O_vug'},
      {titolo:'Neon: Le ali (feat. Elisa)', Artista: 'marracash', AppleMusic: 'https://music.apple.com/it/album/neon-le-ali-single/1501341556', Spotify: 'https://open.spotify.com/track/1eUQzE6z4GUgA0byOPeCJF?si=tUmA1ovERYmmJj1826QzaA'},
      {titolo:"DNA", Artista: 'ghali', AppleMusic: 'https://music.apple.com/it/album/dna/1493948866', Spotify: 'https://open.spotify.com/album/0Cm3SGEHCjn9RAQrzuHX9I?si=XbP4k5I9SzK_yU8dDGypAw'},
      {titolo:"GarbAge", Artista: 'nitro', AppleMusic: 'https://music.apple.com/it/album/garbage/1499313932', Spotify: 'https://open.spotify.com/album/1PzWwe1L2ijXoIbkL3PemV?si=cjq7lkQHSsu-38FC71zITQ'}
    ];
  }

  ClosePopover(){
    this.popover.dismiss();
  }
}
