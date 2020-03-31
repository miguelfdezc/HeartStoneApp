import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardDecksPageRoutingModule } from './card-decks-routing.module';

import { CardDecksPage } from './card-decks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardDecksPageRoutingModule
  ],
  declarations: [CardDecksPage]
})
export class CardDecksPageModule {}
