import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { HomePage } from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
// import { TabsPage } from '../pages/tabs/tabs';
// import {CranebrandPage} from '../pages/cranebrand/cranebrand';
import{AccessoriesPage} from '../pages/accessories/accessories';
import {Storage} from '@ionic/storage';
import{RemembermePage} from '../pages/rememberme/rememberme';
import { AutoPage} from '../pages/auto/auto';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

 

 rootPage:any
 
  // rootPage:any = HomePage;
  //  rootPage:any =LoginPage; 
  // rootPage:any =TabsPage;
  //  rootPage:any =  CranebrandPage;
  // rootPage:any = AccessoriesPage;

  storagetoken:any

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public storage:Storage) {
  
    this.storage.ready()

    this.storage.get('api_token').then((token) => {
          this.storagetoken = token
      console.log('token storage', this.storagetoken);


      if(this.storagetoken != null){

        console.log("token is set",this.storagetoken)
  
        this.rootPage = RemembermePage;
  
      }
      else{
  
        console.log("token is empty",this.storagetoken)
        this.rootPage = LoginPage;
      }
  



    });



   
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

