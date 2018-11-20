import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {ApiProvider} from '../../providers/api/api';
// import {HomePage} from '../home/home';
import {TabsPage} from '../tabs/tabs';
import {Storage} from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  userData :any =[{"email":"","password":""}]

  form_data:any

 remember:any
  token:any



  constructor(public navCtrl: NavController, public navParams: NavParams,public apiProvider:ApiProvider,public alertCtrl: AlertController,public storage:Storage) {

  

    console.log("login details",this.userData)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }



  //function to login 
  onlogin(userData){

    this.remember =  "remember"


     this.form_data = new FormData();


 
    this.form_data.append("email",userData.email);
    this.form_data.append("password",userData.password);


    console.log("login",this.form_data)



    this.apiProvider.postapiLoginUrl(this.form_data).subscribe(DATA =>{



       this.storage.set('token-to-send-quote',DATA.token)

      if(DATA.token== DATA.token){

        this.navCtrl.setRoot(TabsPage,{
          
        })

        console.log("success")
        this.storage.ready();
        this.storage.get('token-to-send-quote').then((Token) => {

          this.token = Token

          console.log("token login", this.token)

        })

       
      }else{
     
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'Wrong email or password',
          buttons: ['OK']
        });
        alert.present();
        
      }
      
      
    },  (err) => {
      console.log(err)
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'login failed please try again',
        buttons: ['OK']
      });
      alert.present();
    
    
    });
    
  

}





Remember(userData){



  this.form_data = new FormData();


 
  this.form_data.append("email",userData.email);
  this.form_data.append("password",userData.password);


  console.log("login",this.form_data)



  this.apiProvider.postapiLoginUrl(this.form_data).subscribe(DATA =>{


    // localStorage.setItem('token',DATA.token);

    console.log("token ",DATA.token)


  ///token to send quote
    this.storage.set('token-to-send-quote',DATA.token)

 ///token to remember page         
    this.storage.set('api_token',DATA.token)

    if(DATA.token== DATA.token){

      this.navCtrl.setRoot(TabsPage,{
        token:DATA.token,
        // LoginRemeber: this.remember
      })

      console.log("success")

    }else{
   
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Wrong email or password',
        buttons: ['OK']
      });
      alert.present();
      
    }
    
    
  },  (err) => {
    console.log(err)
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'login failed please try again',
      buttons: ['OK']
    });
    alert.present();
  
  
  });



}





}

