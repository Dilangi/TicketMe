import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Season } from '../../models/season';
import { DatePipe } from '@angular/common';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Qr } from '../../models/qr';
import { UUID } from 'angular2-uuid';



@IonicPage()
@Component({
  selector: 'page-buy-season',
  templateUrl: 'buy-season.html',
})
export class BuySeasonPage {

  public seasonnumber;

  season = {} as Season;

  public dateYear= new Date().getFullYear().toString();
  public dateMonth= new Date().getMonth()+1
  public dateMonth2= this.dateMonth.toString();
  public datemonth3 = ("0" + this.dateMonth2).slice(-2);
  public dateDay= new Date().getDate().toString();
  public dateDay2 = ("0" + this.dateDay).slice(-2);
  public dateComplete = this.dateYear+"-"+this.datemonth3+"-"+this.dateDay2;

  public t= new Date();
  public y = new Date(this.t.getFullYear(), this.t.getMonth() + 1, 0, 23, 59, 59);
  public latest_date =this.datepipe.transform(this.y, 'yyyy-MM-dd');

  constructor(private alertCtrl: AlertController, private afDatabase: AngularFireDatabase, private afAuth: AngularFireAuth, private datepipe: DatePipe, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.getUserData();
    this.checkSeason();

  }

  getUserData() {
    let scope = this;
    var user = this.afAuth.auth.currentUser;
    if(user){
      this.afDatabase.app.database().ref(`profile/`+user.uid).on('value', function(snapshot){
        let user = snapshot.val();
        console.log(this,user.season);
        scope.seasonnumber = user.season;
      });
    }
  }

  buySeason(){
    
    if(this.season.from == null || this.season.to == null || this.season.class == null || !this.season.paymentmethod){

      this.alertCtrl.create({
        message: "Input all the details to buy a ticket",
        buttons: [{
          text: "Ok"
        }]
      }).present();
      console.log(this.season.from);
      console.log(this.season.to);
      console.log(this.season.seasonno);
      console.log(this.season.class);
      console.log(this.season.paymentmethod);

      if(this.season.from == this.season.to && this.season.from != null && this.season.to != null){
        this.alertCtrl.create({
          message: "Starting station and end station cannot be the same!",
          buttons: [{
            text: "Ok"
          }]
        }).present();
      }
    }
    else{

      let newUUID = UUID.UUID();
      this.season.uid = newUUID;
      var user = this.afAuth.auth.currentUser;
      this.season.passenger = user.email;
  
      this.season.expire = this.latest_date;
      this.season.expired = false;
  
      this.afDatabase.object(`season/${user.uid}/${newUUID}`).set(this.season)

      this.alertCtrl.create({
        message: 'Purchase successful! Check My Tickets.',
        buttons: [{
          text: 'OK'
        }]
      }).present();
  
      this.season.from = "";
      this.season.to = "";
      this.season.class = null;

    }
  }

  
  checkSeason(){
    
    var user = this.afAuth.auth.currentUser;

    if(user){
      this.afDatabase.app.database().ref(`season/${user.uid}`).once('value', (snapshot)=>{
        var obj = snapshot.val();
        if(obj != null){
          this.alertCtrl.create({
            message: "You can't buy more than one season a month!",
            buttons: [{
              text: "Ok",
              handler: () => {
                this.navCtrl.setRoot('HomePage');
              }
            }]
          }).present();
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

}
