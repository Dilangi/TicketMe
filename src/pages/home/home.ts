import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Profile } from '../../models/profile';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  profileData: AngularFireList<Profile>;
  email: any;
  public username;
  public name;

  constructor(private afDatabase: AngularFireDatabase, private afAuth:AngularFireAuth, private toast: ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.getUserData();
    console.log(this.username);
  }

  getUserData() {
    let scope = this;
    this.afAuth.authState.subscribe(data=> {
      if (data && data.email && data.uid) {
        this.toast.create({
          message: `Signed in as, ${data.email}`,
          duration: 3000
        }).present();

        // this.profileData = this.afDatabase.list(`profile/${data.uid}`);
        this.afDatabase.app.database().ref(`profile/`+data.uid).on('value', function(snapshot){
          let user = snapshot.val();
          console.log(this,user.username);
          scope.username = user.username;
        });
      }
      else{
        this.toast.create({
          message: 'could not find details',
          duration: 3000
        }).present();
      }
    });
  }

  goToMyTicketsPage(): void{
    this.navCtrl.push('MyTicketsPage');
  }

  goToEditProfilePgae(){
    this.navCtrl.push('EditprofilePage');
  }

  goToRatingPage(){
    this.navCtrl.push('RatingPage');
  }

  goToHelpPgae(){
    this.navCtrl.push('HelpPage');
  }

  goToBuyTicketPage(){
    this.navCtrl.push('BuyTicketsPage');
  }

  goToSchedulePage(){
    this.navCtrl.push('SchedulePage');
  }

  logout(){
    this.navCtrl.setRoot('LandingPage');
  }

}
