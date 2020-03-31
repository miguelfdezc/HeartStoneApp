import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardDecksPage } from './card-decks.page';

const routes: Routes = [
  {
    path: '',
    component: CardDecksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardDecksPageRoutingModule {}
