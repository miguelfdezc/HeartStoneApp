import { Component, OnInit } from '@angular/core';
import { ToastComponent } from '../toast/toast.component';
import { ToastController } from '@ionic/angular';
import { CardDeck } from '../models/card-deck';

@Component({
  selector: 'app-card-decks',
  templateUrl: './card-decks.page.html',
  styleUrls: ['./card-decks.page.scss'],
})
export class CardDecksPage implements OnInit {
  //readonly cardDecks:string [] = ['Druid', 'Mage', 'Warrior', 'Rogue', 'Shaman'];
  readonly mockupFile:string = './assets/data/carddecks.json';

  cardDecks: CardDeck [];

  toast: ToastComponent;

  constructor() { }

  ngOnInit() {
    this.getData();
    this.toast = new ToastComponent(new ToastController());
    this.toast.presentToast("¡Bienvenido a HeartStoneApp!");
  }

  public getData() {
    fetch(this.mockupFile).then(res => res.json())
      .then(json => {
        this.cardDecks = json;
    })
  }

  selectedCDs: string[]=[];

  select(name: string) {
    var esta = this.selectedCDs.indexOf(name);
    if (esta===-1) {
      this.selectedCDs.push(name);
    } else {
      this.selectedCDs.splice(esta,1);
    }
  }

}
