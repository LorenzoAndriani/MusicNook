import { Component, OnInit, APP_INITIALIZER } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-articoli',
  templateUrl: './articoli.page.html',
  styleUrls: ['./articoli.page.scss'],
})
export class ArticoliPage implements OnInit {


  originalData: any;
  modifierData: any;
  items:any;
  public isSearchBarOpened = false;

  constructor(public navCtrl: NavController) { 
    this.initialize();
  }

  initialize(){
    this.items = this.originalData = [
      {titolo: 'Il film sulla vita (e la morte) di Lil Peep è fatto male', didascalia: "La morte di Lil Peep si sarebbe potuta evitare, e il problema di questo film è che non ha il coraggio e la forza di dirlo chiaramente.", by: 'vice.com', data: '16/03/2020', link: 'https://www.vice.com/it/article/9398gv/lil-peep-film-everybodys-everything'},
      {titolo: 'Francesca Michielin ha messo se stessa, senza nessuna riserva', didascalia: "Se dovessi descrivere il nuovo progetto di Francesca Michielin con una sola parola, utilizzerei “natura”...", by: 'essemagazine.it', data: '13/03/2020', link: 'https://essemagazine.it/2020/03/13/francesca-michielin-ha-messo-se-stessa-senza-nessuna-riserva/'},
      {titolo: 'Kina è il musicista campano più famoso del mondo, anche se non lo conosci', didascalia: "Le sue canzoni hanno centinaia di milioni di ascolti in tutto il mondo, ha un disco d'oro negli USA e un contratto con Columbia—ma è partito dalla sua cameretta nella Terra dei Fuochi.", by: 'vice.com', data: '12/03/2020', link: 'https://www.vice.com/it/article/akw49j/kina-get-you-moon-intervista'},
      {titolo: 'Il video di “Godzilla” di Eminem e Juice WRLD è incredibile', didascalia: "C'è Eminem che sputa fuoco, vomita pezzi di Lego e taglia dei manzi con una motosega—fate un po' voi.", by: 'vice.com', data: '10/03/2020', link: 'https://www.vice.com/it/article/3a8jgw/eminem-godzilla-video-juice-wrld'},
      {titolo: 'Tutti i concerti annullati o rimandati a causa dell’emergenza Coronavirus', didascalia: "È con un grande sospiro che la scena musicale si è adeguata alle comunicazioni giunte dal Governo per limitare i contagi da Coronavirus...", by: 'outpump.com', data: '10/03/2020', link: 'https://www.outpump.com/tutti-concerti-annullati-rimandati-causa-coronavirus/'},
      {titolo: 'Come dovrebbero evolversi gli in-store per sopravvivere?', didascalia: "Per anni è stata una pratica diffusa e redditizia fondata su una sorta di do ut des tra artista e fan, ora l’in-store è in forte declino e va ripensato.", by: 'essemagazine.it', data: '28/02/2020', link: 'https://essemagazine.it/2020/02/28/come-dovrebbero-evolversi-gli-in-store-per-sopravvivere/'},
      {titolo: '“DNA” è il nuovo album di Ghali: ecco tutto quello che devi sapere', didascalia: "Sarà la sua consacrazione europea?", by: 'hiphoptender.com', data: '18/02/2020', link: 'https://hiphoptender.com/2020/02/18/dna-nuovo-album-ghali-quello-devi-sapere/'},
      {titolo: 'Young Kofla: da Verona in arrivo aria di novità', didascalia: "Ecco chi è il rapper veronese che si sta affacciando sulla scena rap.", by: 'hiphoptender.com', data: '10/02/2020', link: 'https://hiphoptender.com/2020/03/10/young-kofla-da-verona-in-arrivo-aria-di-novita/'},
      {titolo: 'Musica più venduta nel 2019? parola alla Fimi', didascalia: "La Fimi, anche quest’anno, stila la sua classifica della musica più venduta. A dominare la scena non ci sono sorprese.", by: 'hiphoptender.com', data: '10/01/2020', link: 'https://hiphoptender.com/2020/01/10/musica-piu-venduta-nel-2019-parola-alla-fimi/'}
    ];
    this.modifierData = JSON.parse(JSON.stringify(this.originalData));
  }

  getItems(ev: any){
    this.initialize();
    let val = ev.target.value;

    if(val && val.trim() != ''){
      this.items = this.items.filter((item) => {
        return (item.titolo.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  ngOnInit() {
    
  }

/*onSearch(event){
  this.originalData.titolo = String;
   this.modifierData.filter((titolo) => {
     return titolo == console.log(event.target.value);
   });
  }*/
}
