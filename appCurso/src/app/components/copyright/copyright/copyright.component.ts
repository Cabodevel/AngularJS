import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.css']
})
export class CopyrightComponent implements OnInit {

  copyright: String = '© Carlos Bolorino';
  hoy: any = new Date();

  constructor() { }

  ngOnInit() {
  }

}
