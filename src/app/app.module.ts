import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NgxQRCodeModule} from 'ngx-qrcode2';
import { BarcodeScanner} from '@ionic-native/barcode-scanner';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';



import { PassengerPage} from '../pages/passenger/passenger';
import { BuyTicketPage} from '../pages/buy-ticket/buy-ticket';

import { MyTicketsPage} from '../pages/my-tickets/my-tickets';
import { EditProfilePage} from '../pages/edit-profile/edit-profile';
import { RatingPage} from '../pages/rating/rating';
import { HelpPage} from '../pages/help/help';
import { LogOutPage} from '../pages/log-out/log-out';
import { TicketOptionPage} from '../pages/ticket-option/ticket-option';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PassengerPage,
    BuyTicketPage,
    MyTicketsPage,
    EditProfilePage,
    RatingPage,
    HelpPage,
    LogOutPage,
    TicketOptionPage 
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgxQRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PassengerPage,
    BuyTicketPage,
    MyTicketsPage,
    EditProfilePage,
    RatingPage,
    HelpPage,
    LogOutPage,
    TicketOptionPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner
  ]
})
export class AppModule {}
