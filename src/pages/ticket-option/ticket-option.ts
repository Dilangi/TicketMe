import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner} from '@ionic-native/barcode-scanner';

/**
 * Generated class for the TicketOptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ticket-option',
  templateUrl: 'ticket-option.html',
})
export class TicketOptionPage {
	qrData = null;
	createdCode = null;
	scannedCode = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketOptionPage');
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
