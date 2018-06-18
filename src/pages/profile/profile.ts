import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
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

  constructor(private loading: LoadingController, private toast: ToastController, private afDatabase: AngularFireDatabase, private afAuth:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  ionViewWillEnter(){
    this.presentLoading();
    this.checkProfile();
  }

  presentLoading() {
    const loader = this.loading.create({
      content: "Please wait...",
      duration: 1000
    });
    loader.present();
  }

  checkProfile(){
    this.afAuth.authState.subscribe(data=>{
      if(data && data.email && data.uid){
        this.afDatabase.app.database().ref(`profile/`+data.uid).on('value',(snapshot)=>{
          if(snapshot.val()){
            this.navCtrl.setRoot('HomePage');
            console.log(snapshot.val());
            console.log(this);
          }
        });
      }
      else{
        this.navCtrl.setRoot('ProfilePage');
      }
    });
  }


  createProfile(){
    this.afAuth.authState.take(1).subscribe(auth => {
      this.afDatabase.object(`profile/${auth.uid}`).set(this.profile)
        // .then(() => this.navCtrl.setRoot('HomePage'))
    })
  }

}
