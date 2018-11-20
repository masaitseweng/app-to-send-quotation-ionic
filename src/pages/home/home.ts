import { Component } from '@angular/core';
import { NavController, NavParams,AlertController } from 'ionic-angular';
import {ApiProvider} from '../../providers/api/api';
import {MenuPage} from '../menu/menu';
import {MenuitemsPage} from '../menuitems/menuitems';
import{LoginPage} from '../login/login';
import {RemembermePage} from '../rememberme/rememberme';
import{Storage} from '@ionic/storage';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  token:any

  storagetoken:any
  cranes:any
  LoginRemeber:any

  constructor(public navCtrl: NavController, public navParams: NavParams,public apiProvider:ApiProvider,public storage:Storage,public alertCtrl:AlertController) {

    this.storage.ready();
    this.storage.get('token-to-send-quote').then((Token) => {

      this.token = Token

      console.log("token login", this.token)

    })


    this.apiProvider.getMenu(this.token).subscribe(DATA =>{
      console.log("menu",DATA.menus)
     
      this.cranes = DATA.menus

      console.log("testing",this.cranes)

    })

  

  }


  Menu(craneDATA){

    console.log("product",craneDATA)
    

  if(craneDATA.childrencount != 0){

     console.log("product",craneDATA.id)

    this.navCtrl.push(MenuPage,{
      prodcut:craneDATA.id
    })

  }


  else{


    console.log("product",craneDATA.id)

    this.navCtrl.push(MenuitemsPage,{
      item:craneDATA.id
    })

  


  }



 
   


        
  }


  lockout(){

 
    this.storage.ready()

    this.storage.get('api_token').then((value) =>{
      console.log("toekn displayed",value)

      const confirm = this.alertCtrl.create({
        title: 'Logout',
        message: 'Are you sure you want to logout',
        buttons: [
          {
            text: 'Yes',
            handler: () => {
              // console.log('Disagree clicked');
              if(value != null){
                this.navCtrl.setRoot(RemembermePage)
              }
              else{
                this.navCtrl.setRoot(LoginPage)
              }
            }
          },
          {
            text: 'No',
            handler: () => {
              console.log('Agree clicked');
            }
          }
        ]
      });
      confirm.present();
 
 

    }) 


  


    


  

  //   console.log("h", this.storagetoken)

  //   if(this.LoginRemeber == "remember-me"){

  //     this.navCtrl.push(RemembermePage,{
  //       token:this.token
  //     })

  //   }
  //   else{

  //       this.storage.clear();

  //     // this.navCtrl.setRoot(LoginPage)
  //     this.navCtrl.push(RemembermePage)

  //   }

  //   console.log("hello",)

  }




}
