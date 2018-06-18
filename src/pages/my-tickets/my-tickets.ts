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
  array2 = [];

  constructor(private alertCtrl: AlertController, private afDatabase: AngularFireDatabase, private afAuth:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad MyTicketsPage');

    var user = this.afAuth.auth.currentUser;

    if(user){
      this.afDatabase.app.database().ref(`ticket/${user.uid}`).on('value', (snapshot)=>{
        var obj = snapshot.val();
        var array = Object.keys(obj).map(function(key) {
          return [obj[key]];
        });
        this.results = array;
        for (let i = 0; i < array.length; i++) {
          this.array2.push(array[i][0]);
        }
        console.log(this.array2);
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
  }

  testClick(){
  }

}
