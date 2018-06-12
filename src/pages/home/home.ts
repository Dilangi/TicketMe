import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { PassengerPage} from '../passenger/passenger';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	@ViewChild('username') uname;
	@ViewChild('password') password;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  signIn(){
  	/*if(this.uname.value=="admin" && this.password.value=="123") {// stupid authentication
	  	let alert = this.alertCtrl.create({
	      title: 'Login succeed!',
	      subTitle: 'Logged in',
	      buttons: ['OK']
	    });
	    alert.present();*/

	    this.navCtrl.push(PassengerPage)

	}
  	//console.log(this.uname.value, this.password.value);

  }
