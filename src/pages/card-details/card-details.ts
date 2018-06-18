import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TextMaskModule } from 'angular2-text-mask';


@IonicPage()
@Component({
  selector: 'page-card-details',
  templateUrl: 'card-details.html',
})
export class CardDetailsPage {

  masks: any;
 
    phoneNumber: any = "";
    cardNumber: any = "";
    cardExpiry: any = "";
    cvv: any = "";

  constructor(private TextMaskModule: TextMaskModule, public navCtrl: NavController, public navParams: NavParams) {
    this.masks = {
      phoneNumber: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
      cardNumber: [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
      cardExpiry: [/[0-1]/, /\d/, '/', /[1-2]/, /\d/]
  };
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad CardDetailsPage');
  }

  save(){
    let unmaskedData = {
      phoneNumber: this.phoneNumber.replace(/\D+/g, ''),
      cardNumber: this.cardNumber.replace(/\D+/g, ''),
      cardExpiry: this.cardExpiry.replace(/\D+/g, '')
  };

  console.log(unmaskedData);

  }

}
