import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-buy-tickets',
  templateUrl: 'buy-tickets.html',
})


export class BuyTicketsPage {

  public date: string = new Date().toISOString();
  public dateYear= new Date().getFullYear().toString();
  public dateMonth= new Date().getMonth()+1
  public dateMonth2= this.dateMonth.toString();
  public datemonth3 = ("0" + this.dateMonth2).slice(-2);
  public dateDay= new Date().getDate().toString();
  public dateDay2 = ("0" + this.dateDay).slice(-2);

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyTicketsPage');
  }

}
