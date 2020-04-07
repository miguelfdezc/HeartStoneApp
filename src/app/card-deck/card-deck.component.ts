import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CardDeck } from '../models/card-deck';

@Component({
  selector: 'app-card-deck',
  templateUrl: './card-deck.component.html',
  styleUrls: ['./card-deck.component.scss'],
})
export class CardDeckComponent implements OnInit {

  @Input() myCardDeck: CardDeck;

  @Output() clicked = new EventEmitter<string>();

  clicado: boolean = false;

  constructor() { }

  ngOnInit() {}

  click() {
    this.clicado=!this.clicado;

    this.clicked.emit(this.myCardDeck.name);
  }

}
