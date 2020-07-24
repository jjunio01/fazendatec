import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  status: string
  programacao: string

  constructor() { 
    this.status = 'ligada'
    this.programacao = 'manual'

  }

  ngOnInit() {
  }

  acionarBomba(){
    this.status = 'ligada'
  }

  desligarBomba() {
    this.status = 'desligada'
  }

}
