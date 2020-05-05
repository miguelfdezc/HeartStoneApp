import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardListingPage } from './card-listing.page';

const routes: Routes = [
  {
    path: '',
    component: CardListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardListingPageRoutingModule {}
