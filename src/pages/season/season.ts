import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-season',
  templateUrl: 'season.html',
})
export class SeasonPage {

  constructor(private app: App, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeasonPage');
  }

  backHome(){
    this.app.getRootNav().setRoot('HomePage');
  }

}
