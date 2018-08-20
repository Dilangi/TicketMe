import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Season } from '../../models/season';


@IonicPage()
@Component({
  selector: 'page-buy-season',
  templateUrl: 'buy-season.html',
})
export class BuySeasonPage {

  season = {} as Season;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuySeasonPage');
  }

  buySeason(){
    
  }

}
