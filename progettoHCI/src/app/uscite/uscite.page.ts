import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uscite',
  templateUrl: './uscite.page.html',
  styleUrls: ['./uscite.page.scss'],
})
export class UscitePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  doRefresh(event){
    setTimeout(() => {
      event.target.complete();
    })
  }

}
