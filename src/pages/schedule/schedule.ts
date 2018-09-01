import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Ticket } from '../../models/ticket';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';


@IonicPage()
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {

  ticket = {} as Ticket;

  public dateYear= new Date().getFullYear().toString();
  public dateMonth= new Date().getMonth()+1
  public dateMonth2= this.dateMonth.toString();
  public datemonth3 = ("0" + this.dateMonth2).slice(-2);
  public dateDay= new Date().getDate().toString();
  public dateDay2 = ("0" + this.dateDay).slice(-2);
  public dateComplete = this.dateYear+"-"+this.datemonth3+"-"+this.dateDay2;


  constructor(private alertCtrl: AlertController, private iab: InAppBrowser, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchedulePage');
  }

  getShedule(){

    if(this.ticket.from == null || this.ticket.to == null){
      this.alertCtrl.create({
        message: 'Please select stations to get the schedule.',
        buttons: [{
          text: 'Ok'
        }]
      }).present();
    }
    else{

      if(this.ticket.from == this.ticket.to){
        this.alertCtrl.create({
          message: 'Two stations can not be the same.',
          buttons: [{
            text: 'Ok'
          }]
        }).present();
      }

      else{
        const options: InAppBrowserOptions = {
          zoom: 'no',
          location: 'no'
        }
    
        const browser = this.iab.create("http://slr.malindaprasad.com/?from="+this.ticket.from+"&to="+this.ticket.to+"&date="+this.dateComplete+"&singlebutton=", '_self', options);
      }
      
    }

    
  }


}
