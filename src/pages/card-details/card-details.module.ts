import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardDetailsPage } from './card-details';
import { BrMaskerModule } from 'brmasker-ionic-3';


@NgModule({
  declarations: [
    CardDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CardDetailsPage),
    BrMaskerModule
  ],
})
export class CardDetailsPageModule {}
