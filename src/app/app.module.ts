import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { NgxQRCodeModule} from 'ngx-qrcode2';
import { BarcodeScanner} from '@ionic-native/barcode-scanner';

import { MyApp } from './app.component';

const config = {
  apiKey: "AIzaSyDASEFzIjRaQtwjr3tAMgaXh6A-qF4Bxh4",
  authDomain: "test-project-e3774.firebaseapp.com",
  databaseURL: "https://test-project-e3774.firebaseio.com",
  projectId: "test-project-e3774",
  storageBucket: "test-project-e3774.appspot.com",
  messagingSenderId: "180813094292"
};

@NgModule({
  declarations: [
    MyApp

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),

    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NgxQRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp

  ],
  providers: [
    StatusBar,
    SplashScreen,

    {provide: ErrorHandler, useClass: IonicErrorHandler}, BarcodeScanner

  ]
})
export class AppModule {}
