import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live',
  templateUrl: './live.page.html',
  styleUrls: ['./live.page.scss'],
})
export class LivePage implements OnInit {

  originalData: any;
  modifierData: any;

  constructor() { 

    this.originalData = [
      {artista: 'Dardust', data: 'mer, 08/04/20, 22.00', luogo: 'Hiroshima Mon Amour (Torino)', prezzo: '€25', link:'https://www.ticketone.it/dardust-torino-biglietti.html?affiliate=ITT&doc=artistPages%2Ftickets&fun=artist&action=tickets&key=2639449%2412532121&jumpIn=yTix&kuid=538876&from=erdetaila'},
      {artista: 'Annalisa', data: 'lun, 04/05/20, 21.00', luogo: 'Fabrique (Milano)', prezzo: '€35', link:'https://www.ticketone.it/annalisa-milano-biglietti.html?affiliate=ITT&doc=artistPages%2Ftickets&fun=artist&action=tickets&key=2630192%2412493999&jumpIn=yTix&kuid=472144&from=erdetaila'},
      {artista: 'Ultimo', data: 'mer, 03/06/20, 21.00', luogo: 'Stadio Olimpico Grande (Torino)', prezzo: '€30 - €75', link:'https://www.ticketone.it/ultimo-torino-biglietti.html?affiliate=ITT&doc=artistPages%2Ftickets&fun=artist&action=tickets&key=2529255%2412087461&jumpIn=yTix&kuid=547237&from=erdetaila'},
      {artista: 'Tiziano Ferro', data: 'sab, 06/06/20, 20.45', luogo: 'Stadio San Siro (Milano)', prezzo: '€40-€80', link:'https://www.ticketone.it/tiziano-ferro-milano-biglietti.html?affiliate=ITT&doc=artistPages%2Ftickets&fun=artist&action=tickets&key=1918864%2412159769&jumpIn=yTix&kuid=463860&from=erdetaila'},
      {artista: 'Machine Gun Kelly', data: 'mer, 01/07/20, 21.00', luogo: 'Sequoie Music Park (Bologna)', prezzo: '€35', link:'https://www.ticketone.it/machine-gun-kelly-biglietti.html?affiliate=ITT&doc=artistPages%2Ftickets&fun=artist&action=tickets&erid=2449700&includeOnlybookable=true'},
      {artista: 'Kendrick Lamar', data: 'mar, 07/07/20, 18.00', luogo: 'Rock in Roma (Roma)', prezzo: '€70', link: 'https://www.ticketone.it/kendrick-lamar-biglietti.html?affiliate=ITT&doc=artistPages%2Ftickets&fun=artist&action=tickets&erid=2642033'},
      {artista: 'Anderson .Paak', data: 'mar, 07/07/20, 21.00', luogo: 'Piazza Napoleone (Lucca)', prezzo: '€35-€250', link:'https://www.ticketone.it/biglietti.html?affiliate=ITT&doc=artistPages%2Ftickets&fun=artist&action=tickets&erid=2712815&includeOnlybookable=false&x10=1&x11=anderson'},
      {artista: 'Post Malone', data: 'sab, 10/10/20, 21.00', luogo: 'Mediolanum Forum (Milano)', prezzo: '€40', link:'https://www.ticketone.it/post-malone-milano-biglietti.html?affiliate=ITT&doc=artistPages%2Ftickets&fun=artist&action=tickets&key=2693111%2412730689&jumpIn=yTix&kuid=552323&from=erdetaila'},
      {artista: 'Marracash', data: 'lun, 26/10/20, 21.00', luogo: 'Nelson Mandela Forum (Firenze)', prezzo: '€25-€40', link:'https://www.ticketone.it/marracash-firenze-biglietti.html?affiliate=ITT&doc=artistPages%2Ftickets&fun=artist&action=tickets&key=2620248%2412503618&jumpIn=yTix&kuid=464447&from=erdetaila'},
    ];

    this.modifierData = JSON.parse(JSON.stringify(this.originalData));
  }

  resetData(){
    this.modifierData = JSON.parse(JSON.stringify(this.originalData));
  }

  filterData(){
      this.modifierData = this.modifierData.filter((live) => {
        return live.artista == "Ultimo";
      });
  }

  ngOnInit() {
  }

}
