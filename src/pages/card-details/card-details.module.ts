import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardDetailsPage } from './card-details';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  declarations: [
    CardDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CardDetailsPage),
    TextMaskModule
  ],
})
export class CardDetailsPageModule {}
