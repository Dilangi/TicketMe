import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(private afDatabase: AngularFireDatabase, private afAuth:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
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
    this.afAuth.authState.subscribe(data=> {
      if (data && data.email && data.uid) {
        this.afDatabase.app.database().ref(`profile/`+data.uid).on('value', (snapshot)=>{
          let user = snapshot.val();
          console.log(user.name, user.username);
          this.username = user.username;
          this.name = user.name;
          this.mobile = user.mobile;
        });
      }
    });
  }

  updateProfile(){
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
