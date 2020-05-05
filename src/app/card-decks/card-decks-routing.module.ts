import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardDecksPage } from './card-decks.page';

const routes: Routes = [
  {
    path: '',
    component: CardDecksPage
  },
  {
    path: 'card-listing/:cardDeckGroup/:cardDeck',
    loadChildren: () => import('../card-listing/card-listing.module').then( m => m.CardListingPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class CardDecksPageRoutingModule {}
