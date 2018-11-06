import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejeventbinding',
  templateUrl: './ejeventbinding.component.html',
  styleUrls: ['./ejeventbinding.component.css']
})
export class EjeventbindingComponent implements OnInit {

  texto = 'Texto original';
  constructor() { }


  modTexto() {
    this.texto = 'texto modificado';
  }

  ngOnInit() {
  }

}
