import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Profile } from '../../models/profile';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  profile = {} as Profile

  constructor(private toast: ToastController, private afDatabase: AngularFireDatabase, private afAuth:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    // console.log(this);
  }

  ionViewWillEnter(){
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
  //       this.toast.create({
  //         message: 'Please fill your profile data.',
  //         duration: 4000
  //       }).present();
  //     }
  //   });
  // }

  createProfile(){
    this.afAuth.authState.take(1).subscribe(auth => {
      this.afDatabase.object(`profile/${auth.uid}`).set(this.profile)
        .then(() => this.navCtrl.setRoot('HomePage'))
    })
  }

}
