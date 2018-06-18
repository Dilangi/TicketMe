import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyTicketsPage } from './my-tickets';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  declarations: [
    MyTicketsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyTicketsPage),
    NgxQRCodeModule
  ],
})
export class MyTicketsPageModule {}
