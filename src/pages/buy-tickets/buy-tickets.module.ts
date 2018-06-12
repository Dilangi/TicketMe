import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuyTicketsPage } from './buy-tickets';

@NgModule({
  declarations: [
    BuyTicketsPage,
  ],
  imports: [
    IonicPageModule.forChild(BuyTicketsPage),
  ],
})
export class BuyTicketsPageModule {}
