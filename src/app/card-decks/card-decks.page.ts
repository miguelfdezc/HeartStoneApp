import { Component, OnInit } from '@angular/core';
import { ToastComponent } from '../toast/toast.component';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-card-decks',
  templateUrl: './card-decks.page.html',
  styleUrls: ['./card-decks.page.scss'],
})
export class CardDecksPage implements OnInit {
  readonly cardDecks:string [] = ['Druid', 'Mage', 'Warrior', 'Rogue', 'Shaman'];
  toast: ToastComponent;

  constructor() { }

  ngOnInit() {
    this.toast = new ToastComponent(new ToastController());
    this.toast.presentToast("¡Bienvenido a HeartStoneApp!");
  }

}
