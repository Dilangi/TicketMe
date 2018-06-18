import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from 'angularfire2/database';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Qr } from '../../models/qr';


@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  constructor(private barcodeScanner: BarcodeScanner, private afDatabase: AngularFireDatabase, private afAuth:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

  testButton(){ 
  }

  getUser(){
  }

}
  



