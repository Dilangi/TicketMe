import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController } from 'ionic-angular';
import { Season } from '../../models/season';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from 'angularfire2/database';
import { Qr } from '../../models/qr';

@IonicPage()
@Component({
  selector: 'page-season',
  templateUrl: 'season.html',
})
export class SeasonPage {

  createdCode = null;
  results: any;
  array2 = [];
  season = {} as Season;

  constructor(private alertCtrl: AlertController, private afDatabase: AngularFireDatabase, private afAuth:AngularFireAuth, private app: App, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeasonPage');
    this.getSeason();
  }

  backHome(){
    this.app.getRootNav().setRoot('HomePage');
  }

  
  getSeason(){

    var user = this.afAuth.auth.currentUser;

    if(user){
      this.afDatabase.app.database().ref(`season/${user.uid}`).once('value', (snapshot)=>{
        var obj = snapshot.val();
        if(obj == null){
          this.alertCtrl.create({
            message: "You don't have any tickets!",
            buttons: [{
              text: "Ok"
            }]
          }).present();
        }else{
          var array = Object.keys(obj).map(function(key) {
            return [obj[key]];
          });
          this.results = array;
          for (let i = 0; i < array.length; i++) {
            this.array2.push(array[i][0]);
          }
          console.log(this.array2);
        }
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

  
  deleteTicket(i){

    this.alertCtrl.create({
      message: "Are you sure you want to delete this ticket? You want be refunded.",
      buttons: [{
        text: "ok",
        handler: () => {
          var user = this.afAuth.auth.currentUser;
          if(user){
            this.afDatabase.app.database().ref(`season/${user.uid}/${i.uid}`).remove();
            this.navCtrl.popToRoot();
            this.app.getRootNav().setRoot('TabsPage');
          }
        }
      }]
    }).present();

    
  }

}
