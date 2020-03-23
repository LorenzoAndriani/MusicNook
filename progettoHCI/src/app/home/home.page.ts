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
    this.initialize();
  }

  initialize(){
    this.items = this.originalData = [
      { artista: 'HIPHOPTENDER', titolo: 'Nuova Wave', tipo: 'PLAYLIST (Spotify)', testo: 'Genere: Hip Hop, Rap (Italiano)', link: "https://open.spotify.com/playlist/3lfTZzfGKJpgHznnjQaCVV?si=GZL7alpcQTOZdKrTXXPJsg"},
      {ID: 1, IDartista: 'francescamichelin', artista: 'Francesca Michelin', titolo: 'Feat (stato di natura)', tipo: 'ALBUM', testo: 'Francesca Michelin sorprende con un disco fuori dai suoi canoni'},
      {ID: 2, IDartista: 'achillelauro', artista: 'Achille Lauro', titolo: 'Rolls Royce', tipo: 'SINGOLO', testo: 'Fuori ora il nuovo singolo di Achille Lauro che si intitola "Rolls Royce"'},
      {ID: 3, IDartista: 'davidecalandra', artista: 'Davide Calandra', titolo: "Nient'altro", tipo: 'SINGOLO', testo: '   Il rapper toscano è fuori con il terzo singolo del suo "Preludio"'},
      {ID: 4, IDartista: 'marracash', artista: 'Marracash', titolo: 'Neon: Le ali (feat. Elisa)', tipo: 'SINGOLO', testo: 'Un nuovo singolo che vede collaborare per la prima volta Marracash e Elisa'},
      {ID: 5, IDartista: 'ghali', artista: 'Ghali', titolo: 'DNA', tipo: 'ALBUM', testo: "È il secondo album in studio dell'artista di Baggio"},
      {ID: 6, IDartista: 'nitro', artista: 'Nitro', titolo: 'GarbAge', tipo: 'ALBUM', testo: 'È fuori ora il nuovo album di Nitro'}
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
    })
  }

}
