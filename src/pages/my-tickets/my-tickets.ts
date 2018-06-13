import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//this is from ticket-option page
import { BarcodeScanner} from '@ionic-native/barcode-scanner';

@IonicPage()
@Component({
  selector: 'page-my-tickets',
  templateUrl: 'my-tickets.html',
})
export class MyTicketsPage {
  qrData = null;
	createdCode = null;
	scannedCode = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyTicketsPage');
  }

  createCode(){
  	this.createdCode = this.qrData;

  }

  downloadCode(){

  }

  viewCode(){
  	this.barcodeScanner.scan().then(barcodeData =>{
  		this.scannedCode = barcodeData.text;
  	})
  }

  ticketDetail(){

  }

  goBack(){

  }

}
