import { Qr } from './../../models/qr';
import { Ticket } from './../../models/ticket';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from 'angularfire2/database';
import { UUID } from 'angular2-uuid';


@IonicPage()
@Component({
  selector: 'page-card-details',
  templateUrl: 'card-details.html',
})
export class CardDetailsPage {

  qr = {} as Qr

  createdCode = null;

  public dateYear= new Date().getFullYear().toString();
  public dateMonth= new Date().getMonth()+1
  public dateMonth2= this.dateMonth.toString();
  public datemonth3 = ("0" + this.dateMonth2).slice(-2);
  public dateDay= new Date().getDate().toString();
  public dateDay2 = ("0" + this.dateDay).slice(-2);
  public dateComplete = this.dateYear+"-"+this.datemonth3+"-"+this.dateDay2;

  ticket = {} as Ticket;

  payment: any;

  cardnumber: number;
  expiredate: number;
  ccv: number;

  constructor(private loading: LoadingController, private afDatabase: AngularFireDatabase, private afAuth:AngularFireAuth, private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad CardDetailsPage');
    this.ticket.date = new Date().toISOString();
    this.ticket.from = this.navParams.get('from');
    this.ticket.to = this.navParams.get('to');
    this.ticket.number = this.navParams.get('number');
    this.ticket.class = this.navParams.get('class');
  }
  
  presentLoading() {
    const loader = this.loading.create({
      content: "Please wait...",
      duration: 1000
    });
    loader.present();
  }

  pay(){

    if(this.cardnumber == null || this.expiredate == null || this.ccv == null){

      this.alertCtrl.create({
        message: "Input all the details to buy a ticket",
        buttons: [{
          text: "Ok"
        }]
      }).present();
    }
    else{

      let newUUID = UUID.UUID();
      this.ticket.uid = newUUID;
      var user = this.afAuth.auth.currentUser;
      this.ticket.passenger = user.email;
      this.ticket.userUid = user.uid;
  
      const date = new Date()
      const formatedDate = date.toISOString().substring(0, 10);
      this.ticket.date = formatedDate;
      this.ticket.expired = false;
  
      this.afDatabase.object(`ticket/${user.uid}/${newUUID}`).set(this.ticket)
      
      this.presentLoading();

      this.createdCode = this.ticket.from + " " +this.ticket.to + " " + this.ticket.number + " " + this.ticket.class + " " + this.ticket.date + " " + this.ticket.passenger + " " + this.ticket.paymentmethod;
      
      setTimeout(()=>{

        this.alertCtrl.create({
          message: 'Purchase successful! Check My Tickets.',
          buttons: [{
            text: 'OK'
          }]
        }).present();

        this.navCtrl.setRoot('HomePage');

      }, 1500);

      
    }
  }

}
