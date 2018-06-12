import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import { MyTicketsPage} from '../pages/my-tickets/my-tickets';
import { EditProfilePage} from '../pages/edit-profile/edit-profile';
import { RatingPage} from '../pages/rating/rating';
import { HelpPage} from '../pages/help/help';
import { LogOutPage} from '../pages/log-out/log-out';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = HomePage;
  activePage: any;

  pages: Array<{icon:string, title: string, component:any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen){
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    //used for ngFor and navigation
    this.pages = [
      {icon:'cart', title: 'my tickets', component: MyTicketsPage},
      {icon:'create', title: 'edit profile', component: EditProfilePage},
      {icon:'star-half', title: 'rating', component: RatingPage},
      {icon:'help-circle', title: 'help', component: HelpPage},
      {icon:'exit', title: 'logout', component: LogOutPage}
    ];

    this.activePage = this.pages[0];
  }

    openPage(page){
      //reset the content nav to ahve just ths page
      //we wouldn't want the back button to show in this scenario
      this.nav.setRoot(page.component);
      this.activePage = page;
    }

    checkActive(page){
      return page == this.activePage;
    }
    
  }
