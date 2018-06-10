import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from "angularfire2/auth";


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(private alertCtrl: AlertController, private afAuth:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async login(user: User){
    try{
    const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    console.log(result);
    if (result) {
      this.navCtrl.setRoot('ProfilePage');
    }
    }
    catch (e){
      // console.error(e);
      let alert = this.alertCtrl.create({
        title: 'Alert!',
        message: 'Invalid Email or Password, please try again!',
        buttons: [{
            text: 'Ok',
            handler: () => {
              console.log('Ok clicked');
              this.navCtrl.setRoot('LoginPage');
            }
          }]
      });
      alert.present();
    }
  }

  register(){
    this.navCtrl.push('RegisterPage');
  }

}
