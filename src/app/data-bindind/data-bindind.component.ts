import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-bindind',
  templateUrl: './data-bindind.component.html',
  styleUrls: ['./data-bindind.component.css']
})
export class DataBindindComponent implements OnInit {

  url: string = 'https://sites.google.com/site/fabriciolelis/home';
  cursoAngular: boolean = true;
  urlImagem: string = 'http://lorempixel.com/400/200/sports/';
  valorAtual: string = '';
  valorSalvo: string = '';

  isMouseOver: boolean = false;

  nome: string = 'abc';

  pessoa: any = {
    nome: 'def',
    idade: 20
  };

  getCurtirCurso() {
    return true;
  }

  getValor() {
    return 1;
  }

  botaoClicado(){
    alert('Botão clicado!');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;

  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  constructor() { }

  ngOnInit() {
  }

}
