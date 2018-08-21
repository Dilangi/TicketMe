import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeasonPage } from './season';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  declarations: [
    SeasonPage,
  ],
  imports: [
    IonicPageModule.forChild(SeasonPage),
    NgxQRCodeModule
  ],
})
export class SeasonPageModule {}
