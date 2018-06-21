import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Ticket } from '../../models/ticket';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Qr } from '../../models/qr';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from 'angularfire2/database';
import { UUID } from 'angular2-uuid';
import * as moment from "moment";


@IonicPage()
@Component({
  selector: 'page-buy-tickets',
  templateUrl: 'buy-tickets.html',
})


export class BuyTicketsPage {

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

  constructor(private alertCtrl: AlertController, private afDatabase: AngularFireDatabase, private afAuth:AngularFireAuth, private barcodeScanner: BarcodeScanner, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyTicketsPage');
    console.log(this.dateComplete);
    this.ticket.date = new Date().toISOString();
  }

  buyTicket(){

    if(this.ticket.from == null || this.ticket.to == null || this.ticket.number == null || this.ticket.class == null){

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
  
      const date = new Date()
      const formatedDate = date.toISOString().substring(0, 10);
      this.ticket.date = formatedDate;
  
      this.afDatabase.object(`ticket/${user.uid}/${newUUID}`).set(this.ticket)
      
      this.createdCode = this.ticket.from + " " +this.ticket.to + " " + this.ticket.number + " " + this.ticket.class + " " + this.ticket.date + " " + this.ticket.passenger;
  
      this.alertCtrl.create({
        message: 'Purchase successful! Check My Tickets.',
        buttons: [{
          text: 'OK'
        }]
      }).present();
  
      this.ticket.from = "";
      this.ticket.to = "";
      this.ticket.number = null;
      this.ticket.class = null;
    }
  }

}
