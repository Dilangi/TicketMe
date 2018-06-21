import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {

  constructor(private afDatabase: AngularFireDatabase, private afAuth:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
    var user = this.afAuth.auth.currentUser;
    console.log(user);
    if(user){
      this.navCtrl.setRoot('ProfilePage')
    }
  }

  login(){
    this.navCtrl.push('LoginPage');
  }

  register(){
    this.navCtrl.push('RegisterPage');
  }

}
