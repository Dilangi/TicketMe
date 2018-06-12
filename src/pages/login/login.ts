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
  //create user object as User
  user = {} as User;

  constructor(private alertCtrl: AlertController, private afAuth:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async login(user: User){
    try{
      //try to authenticate using firebase
    const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    console.log(result);
    if (result) {
      //if login is successful, set the rootpage to CreateProfilePage
      this.navCtrl.setRoot('ProfilePage');
    }
    }
    catch (e){
      // create and present an alert if there is an error
      let alert = this.alertCtrl.create({
        title: 'Alert!',
        message: 'Invalid Email or Password, please try again!',
        buttons: [{
            text: 'Ok',
            handler: () => {
              console.log('Ok clicked');
              //set the rootpage bcak to LoginPage after clicking OK
              this.navCtrl.setRoot('LoginPage');
            }
          }]
      });
      alert.present();
    }
  }

  register(){
    //push the RegisterPage to the stack
    this.navCtrl.push('RegisterPage');
  }

}
