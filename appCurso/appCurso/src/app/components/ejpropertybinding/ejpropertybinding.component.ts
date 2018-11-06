import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejpropertybinding',
  templateUrl: './ejpropertybinding.component.html',
  styleUrls: ['./ejpropertybinding.component.css']
})
export class EjpropertybindingComponent implements OnInit {

  texto = 'Escribe ...';

  constructor() {
    setTimeout(() => {
        this.texto = 'por favor';
    }, 3000);
  }

  ngOnInit() {
  }

}
