import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {TabsPage} from '../tabs/tabs';
import {LoginPage} from '../login/login';
@IonicPage()
@Component({
  selector: 'page-rememberme',
  templateUrl: 'rememberme.html',
})
export class RemembermePage {

  localtoken:any

  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage) {
  

    this.storage.ready();

    this.storage.get('api_token').then((token)=>{
      this.localtoken = token
      console.log("storage token ",this.localtoken)
    })
  
  }


  onlogin(){

    console.log("local-storage",this.localtoken)

    if(this.localtoken != null){
    
      this.navCtrl.setRoot(TabsPage,{
        token:this.localtoken
      })

    }
    else{

      this.navCtrl.setRoot(LoginPage,{
  
      })
    }

    

  }


  logout(){

    this.storage.clear()
   
    this.navCtrl.setRoot(LoginPage)


  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad RemembermePage');
  }

}
