import { Component } from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {PopovercomponentPage} from '../popover/popovercomponent.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  originalData: any;
  items:any;
  ID:any;

  constructor(private popover : PopoverController) { 
    
  }

  initialize(){
    this.items = this.originalData = [
       {nome: "Madame", titolo: "Baby", tipo: "SINGOLO", testo: "La nuova promessa è fuori con Baby", artista: '/madame', spotify: "https://open.spotify.com/album/099sJp9g5meHizPWFAEWIg", applemusic:"https://music.apple.com/it/album/baby-single/1498806667"},
       {nome: "Achille Lauro", titolo: "Me ne frego", tipo: "SINGOLO", testo: "Il brano di Sanremo sta conquistando l'Italia", artista: '/achillelauro', spotify: "https://open.spotify.com/track/1MF3gav7PNaNkv7ohlBKBD", applemusic:"https://music.apple.com/it/album/me-ne-frego-single/1496350281"},
    ];
  }

  CreatePopOver(){
    this.popover.create({component:PopovercomponentPage, showBackdrop:false}).then((popoverElement)=>{
      popoverElement.present();
    });
  }

  doRefresh(event){
    setTimeout(() => {
      event.target.complete();
    }, 1000);
    this.initialize();
  }

}
