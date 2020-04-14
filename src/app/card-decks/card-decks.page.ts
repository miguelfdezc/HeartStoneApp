import { Component, OnInit } from '@angular/core';

import { CardDeck } from '../card/shared/card.model';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card-decks',
  templateUrl: './card-decks.page.html',
  styleUrls: ['./card-decks.page.scss'],
})
export class CardDecksPage /*implements OnInit*/ {

  private readonly ALLOWED_DECKS = ['classes', 'factions', 'qualities', 'types', 'races'];

  public cardDecks: CardDeck []=[];

  constructor(private cardSrv: CardService) {
    this.getCardDecks();
  }

  private extractAllowedDecks (cardDecks: CardDeck[]) {
    this.ALLOWED_DECKS.forEach((deckName:string) => {
      this.cardDecks.push({name:deckName, types:cardDecks[deckName]})
    })
  }

  private getCardDecks() {
    this.cardSrv.getAllCardDecks().subscribe(
      (cdSrv:CardDeck[]) => {
        this.extractAllowedDecks(cdSrv);
      }
    )
  }
}
