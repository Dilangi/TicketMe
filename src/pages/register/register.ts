import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from "angularfire2/auth";



@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;
  password: any;

  constructor(private alertCtrl: AlertController, private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }


  async register(user: User){
    try {
      if(this.user.password == this.password){
        const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
        console.log(result);
          if (result) {
            this.navCtrl.setRoot('LoginPage',{data: this.user.email});  
          }
      }
      else {
        this.alertCtrl.create({
          title: 'Alert!',
          message: "Passwords do not match!",
          buttons: [{
              text: 'Ok',
              handler: () => {
                console.log('Ok clicked');
                //set the rootpage bcak to LoginPage after clicking OK
                this.navCtrl.setRoot('RegisterPage');
              }
            }]
        }).present();
      }
      
    } catch (error) {
      console.error(error);
      let alert = this.alertCtrl.create({
        title: 'Alert!',
        message: error.message,
        buttons: [{
            text: 'Ok',
            handler: () => {
              console.log('Ok clicked');
              //set the rootpage bcak to LoginPage after clicking OK
              this.navCtrl.setRoot('RegisterPage');
            }
          }]
      });
      alert.present();
    }
    console.log(this.password);
    console.log(this.user.password);
    }
  }


