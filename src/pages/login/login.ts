import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  //create user object as User
  user = {} as User;
  gotEmail: string;

  public type = 'password';
  public showPass = false;

  constructor(private toast: ToastController, private afDatabase: AngularFireDatabase, private alertCtrl: AlertController, private afAuth:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
    this.gotEmail = navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    console.log(this.gotEmail);
  }

  async login(user: User){
    try{
      //try to authenticate using firebase
    const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    console.log(result);
    if (result) {
      //if login is successful, check whether there is a profile for the email
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

  showPassword() {
    this.showPass = !this.showPass;
 
    if(this.showPass){
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }

  register(){
    //push the RegisterPage to the stack
    this.navCtrl.push('RegisterPage');
  }

  ionViewWillLeave(){
    // this.checkProfile();
  }

  // checkProfile(){
  //   this.afAuth.authState.subscribe(data=>{
  //     if(data && data.email && data.uid){
  //       this.afDatabase.app.database().ref(`profile/`+data.uid).on('value',(snapshot)=>{
  //         if(snapshot.val()){
  //           this.navCtrl.setRoot('HomePage');
  //           console.log(snapshot.val());
  //           console.log(this);
  //         }
  //       });
  //     }
  //     else{
  //       this.navCtrl.setRoot('ProfilePage');
  //     }
  //   });
  // }

}
