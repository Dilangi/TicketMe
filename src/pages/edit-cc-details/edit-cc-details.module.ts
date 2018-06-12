import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditCcDetailsPage } from './edit-cc-details';

@NgModule({
  declarations: [
    EditCcDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(EditCcDetailsPage),
  ],
})
export class EditCcDetailsPageModule {}
