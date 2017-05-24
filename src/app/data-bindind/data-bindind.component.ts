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

  getCurtirCurso() {
    return true;
  }

  getValor() {
    return 1;
  }

  constructor() { }

  ngOnInit() {
  }

}
