import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  status: string
  programacao: string

  resultado: any = {status:'', programacao: ''};

  constructor(private requisicao: RequestsService) { 
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

  verificarStatus() {
    this.requisicao.consultarStatus()
    .then((json) => {
      this.resultado= json;
    })
    console.log(this.resultado);
    };
}
