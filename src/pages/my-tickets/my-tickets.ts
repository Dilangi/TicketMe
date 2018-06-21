import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, App } from 'ionic-angular';
import { Qr } from '../../models/qr';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from 'angularfire2/database';
import { Ticket } from '../../models/ticket';



@IonicPage()
@Component({
  selector: 'page-my-tickets',
  templateUrl: 'my-tickets.html',
})
export class MyTicketsPage {

  createdCode = null;
  results: any;
  array2 = [];
  ticket = {} as Ticket;

  constructor(private app: App, private alertCtrl: AlertController, private afDatabase: AngularFireDatabase, private afAuth:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad MyTicketsPage');
    this.getTickets();
  }

  getTickets(){   

    var user = this.afAuth.auth.currentUser;

    if(user){
      this.afDatabase.app.database().ref(`ticket/${user.uid}`).once('value', (snapshot)=>{
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
            this.afDatabase.app.database().ref(`ticket/${user.uid}/${i.uid}`).remove();
            this.navCtrl.popToRoot();
            this.app.getRootNav().setRoot('TabsPage');
          }
        }
      }]
    }).present();

    
  }

  backHome(){
    this.app.getRootNav().setRoot('HomePage');
  }

}
