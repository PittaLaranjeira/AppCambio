import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

  cambio = {}

  buscar() {
    fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL")
      .then(function (dados) {
        return dados.json()
      }).then((dadosRetornados) => {
        console.log(dadosRetornados)
        this.cambio = { ...dadosRetornados };
        console.log(this.cambio);
      })
  }
}
