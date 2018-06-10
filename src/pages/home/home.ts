import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Profile } from '../../models/profile';
import { FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  profileData: AngularFireList<Profile>;
  email: any;

  constructor(private afDatabase: AngularFireDatabase, private afAuth:AngularFireAuth, private toast: ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.afAuth.authState.subscribe(data=> {
      if (data && data.email && data.uid) {
        this.toast.create({
          message: `Signed in as, ${data.email}`,
          duration: 3000
        }).present();

        this.profileData = this.afDatabase.list(`profile/${data.uid}`)
        this.email = Object("ahbaj");
        // app.database().ref(`profile/$(data.uid)`);
        // object(`profile/${data.uid}`)
      }
      else{
        this.toast.create({
          message: 'could not find details',
          duration: 3000
        }).present();
      }
    });
  }

}
