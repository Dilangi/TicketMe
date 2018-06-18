import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from 'angularfire2/database';
import { Profile } from '../../models/profile';



@IonicPage()
@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html',
})
export class EditprofilePage {

  profile = {} as Profile

  public username;
  public name;
  public mobile;
  mySub: any;

  constructor(private alertCtrl: AlertController, private afDatabase: AngularFireDatabase, private afAuth:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditprofilePage');
    try {
      this.getUserData();
    } catch (error) {
      console.error(error);
    }
    
    
  }

  getUserData() {
    let scope = this;

    var user = this.afAuth.auth.currentUser;

    if(user){
      this.afDatabase.app.database().ref(`profile/`+user.uid).on('value', (snapshot)=>{
        let user = snapshot.val();
        console.log(user.name, user.username);
        scope.username = user.username;
        scope.name = user.name;
        scope.mobile = user.mobile;
      });
    }
    else{
      this.alertCtrl.create({
        message: 'No user found!, please login',
        buttons: [{
          text: 'Ok',
            handler: () => {
              console.log('Ok clicked');
            }
        }]
      }).present();
    }
  }

  updateProfile(){

    // this.afDatabase.database.ref('profile/'+user.uid)

    // this.afAuth.authState.take(1).subscribe(auth => {
    //   this.afDatabase.object(`profile/${auth.uid}`).update(this.profile)
    // });
    // this.alertCtrl.create({
    //   title: 'Successfull',
    //   message: 'Profile Updated Successfully!',
    //   buttons: [{
    //     text: 'OK'
    //   }]
    // }).present();
  }

}
