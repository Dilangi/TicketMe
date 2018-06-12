import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TicketOptionPage } from './ticket-option';

@NgModule({
  declarations: [
    TicketOptionPage,
  ],
  imports: [
    IonicPageModule.forChild(TicketOptionPage),
  ],
})
export class TicketOptionPageModule {}
