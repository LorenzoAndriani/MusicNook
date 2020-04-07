import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uscite',
  templateUrl: './uscite.page.html',
  styleUrls: ['./uscite.page.scss'],
})
export class UscitePage implements OnInit {

  originalData: any;
  items:any;

  constructor() { }

  ngOnInit() {
  }

  initialize(){
    this.items = this.originalData = [
       {artista: "Drake", titolo: "Fly", tipo: "ALBUM", data: "20 GIUGNO 2020", testo: "Sarà il quinto album in studio dell'artista americano"}
    ];
  }


  doRefresh(event){
    setTimeout(() => {
      event.target.complete();
    }, 1000);
    this.initialize();
  }

}
