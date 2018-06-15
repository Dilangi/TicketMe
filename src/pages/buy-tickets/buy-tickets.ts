import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Ticket } from '../../models/ticket';


@IonicPage()
@Component({
  selector: 'page-buy-tickets',
  templateUrl: 'buy-tickets.html',
})


export class BuyTicketsPage {

  public dateYear= new Date().getFullYear().toString();
  public dateMonth= new Date().getMonth()+1
  public dateMonth2= this.dateMonth.toString();
  public datemonth3 = ("0" + this.dateMonth2).slice(-2);
  public dateDay= new Date().getDate().toString();
  public dateDay2 = ("0" + this.dateDay).slice(-2);

  ticket = {} as Ticket;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyTicketsPage');
    console.log(this.dateYear+"-"+this.datemonth3+"-"+this.dateDay2);
    this.ticket.date = new Date().toISOString();
  }

  buyTicket(){
    console.log(this.ticket.from);
    console.log(this.ticket.to);
    console.log(this.ticket.number);
    console.log(this.ticket.class);
    console.log(this.ticket.date);
  }

}
