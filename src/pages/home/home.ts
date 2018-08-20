import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, App } from 'ionic-angular';
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

  constructor(private app: App, private afDatabase: AngularFireDatabase, private afAuth:AngularFireAuth, private toast: ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.getUserData();
  }

  getUserData() {
    let scope = this;

    var user = this.afAuth.auth.currentUser;
    if(user){
      this.toast.create({
        message: `Signed in as, ${user.email}`,
        duration: 3000
      }).present();

      this.afDatabase.app.database().ref(`profile/`+user.uid).on('value', function(snapshot){
        let user = snapshot.val();
        console.log(this,user.username);
        scope.username = user.username;
      });
    }
  }

  goToMyTicketsPage(): void{
    this.navCtrl.push('TabsPage');
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

  goToBuySeasonPage(){
    this,this.navCtrl.push('BuySeasonPage');
  }

  goToSchedulePage(){
    this.navCtrl.push('SchedulePage');
  }

  logout(){
    this.app.getRootNav().setRoot('LandingPage');
    this.afAuth.auth.signOut();
  }

  async testPage(){
    var user = this.afAuth.auth.currentUser;
    const reset = await this.afAuth.auth.sendPasswordResetEmail(user.email)
    .then((reset)=>{
      if(reset){
        this.navCtrl.push('TestPage');     
        this.toast.create({  
          'message':"Password reset email has been sent to your mail",          
          duration:5000,   
        }).present();
      }else{
        console.log('Error while sending Reset link email'); 
      } 
      },function(error){
         console.log("Error Message:",error);
       });
  }

}
