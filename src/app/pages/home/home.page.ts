import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  private url: string = "http://localhost:4200/status";
  status: boolean;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.verificarStatus();
  }

  acionar() {
    var acionarBomba = { ligada: true }
    this.http.post(this.url, acionarBomba).subscribe(
      resultado => {
        console.log(resultado);
        this.status = resultado['ligada'];
      },
      erro => {
        if (erro.status == 400) {
          console.log(erro);
        }
      }
    )
  }

  desligar() {

    var desligarBomba = { ligada: false }
    this.http.post(this.url, desligarBomba).subscribe(
      resultado => {
        console.log(resultado);
        this.status = resultado['ligada'];
      },
      erro => {
        if (erro.status == 400) {
          console.log(erro);
        }
      }
    )
  }

  verificarStatus() {
    this.http.get(this.url).subscribe(
      resultado => {
        console.log(resultado)
        this.status = resultado['ligada'];
      },
      erro => {
        if (erro.status == 400) {
          console.log(erro);
        }
      }
    )
  }

}
