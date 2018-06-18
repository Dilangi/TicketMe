import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuyTicketsPage } from './buy-tickets';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  declarations: [
    BuyTicketsPage,
  ],
  imports: [
    IonicPageModule.forChild(BuyTicketsPage),
    NgxQRCodeModule
  ],
})
export class BuyTicketsPageModule {}
