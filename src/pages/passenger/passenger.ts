import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

import { BuyTicketPage} from '../buy-ticket/buy-ticket';

/**
 * Generated class for the Passenger page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-passenger',
  templateUrl: 'passenger.html',
})
export class PassengerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PassengerPage');
  }


  openMenu(){
    this.menuCtrl.open();
    
  }

  buyPassengerTicket(){
    this.navCtrl.push(BuyTicketPage);
  }

  buyPassengerSeason(){

  }

  showTrainSchedule(){

  }

  backTo(){

  }

}