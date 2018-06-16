import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Qr } from '../../models/qr';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from 'angularfire2/database';



@IonicPage()
@Component({
  selector: 'page-my-tickets',
  templateUrl: 'my-tickets.html',
})
export class MyTicketsPage {

  createdCode = null;
  results: any;


  constructor(private alertCtrl: AlertController, private afDatabase: AngularFireDatabase, private afAuth:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    this.results = this.getResults();

    console.log('ionViewDidLoad MyTicketsPage');

    var user = this.afAuth.auth.currentUser;

    if(user){
      this.afDatabase.app.database().ref(`ticket/${user.uid}`).on('value', (snapshot)=>{
        let user = snapshot.val();
        console.log(user);
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

  getResults() {
    var user = this.afAuth.auth.currentUser;

    if(user){
      this.afDatabase.app.database().ref(`ticket/${user.uid}`).on('value', (snapshot)=>{
        let user = snapshot.val();
        console.log(user);
        return user.uid;
      });
    }
  }

}
