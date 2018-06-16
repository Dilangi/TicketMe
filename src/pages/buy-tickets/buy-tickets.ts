import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Ticket } from '../../models/ticket';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Qr } from '../../models/qr';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from 'angularfire2/database';
import { UUID } from 'angular2-uuid';


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
    this.createdCode = this.ticket.from + " " +this.ticket.to + " " + this.ticket.number + " " + this.ticket.class + " " + this.ticket.date + " " + this.ticket.passenger;

    let newUUID = UUID.UUID();
    var user = this.afAuth.auth.currentUser;
    this.ticket.passenger = user.email;
    this.afDatabase.object(`ticket/${user.uid}/${newUUID}`).set(this.ticket)

    this.alertCtrl.create({
      message: 'Purchase successful! Check My Tickets.',
      buttons: [{
        text: 'OK'
      }]
    }).present();
    
    console.log(this.ticket.from);
    console.log(this.ticket.to);
    console.log(this.ticket.number);
    console.log(this.ticket.class);
    console.log(this.ticket.date);
  }

}
