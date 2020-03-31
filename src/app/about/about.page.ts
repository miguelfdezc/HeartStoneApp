import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  nombre: String = "HeartStoneApp";
  fecha: String = "31/03/2020 18:12";
  version: String = "v0.2";
  autor: String = "Miguel Fernandez Carratala";

  constructor() { }

  ngOnInit() {
  }

}
