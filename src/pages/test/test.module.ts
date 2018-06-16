import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestPage } from './test';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  declarations: [
    TestPage,
  ],
  imports: [
    IonicPageModule.forChild(TestPage),
    NgxQRCodeModule
  ],
})
export class TestPageModule {}
