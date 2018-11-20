import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,LoadingController } from 'ionic-angular';
import {HomePage} from '../home/home';
import {ApiProvider} from '../../providers/api/api'
import {Storage} from '@ionic/storage'
@IonicPage()
@Component({
  selector: 'page-sendemail',
  templateUrl: 'sendemail.html',
})
export class SendemailPage {


  


  sendemailData :any

  emaildetails:any


    //objects to be send 
    userlogindetails:any
    object:any
    installations:any
    Amount:any
    sendDATA:any
    SendQuote:any = []

    sendobject:any
    
    installation_id:any
    installation_name:any
    installation_zar_amount:any

    token:any
    validations_form:any
    myGroup:any
    email:any

   auto :any
  item:any
  business:any

  autobusiness:any

  constructor(public navCtrl: NavController, public navParams: NavParams,public Api:ApiProvider,public loadingCtrl: LoadingController,public alertCtrl: AlertController,public storage:Storage) {


    this.auto = navParams.get('auto') 
    console.log("", this.auto ) 

    if (this.auto == "true"){




      this.sendemailData = { "cc": "", "deliverytime": "", "notes": "" }

           
       

      this.business = navParams.get('business')
      console.log("bu", this.business)



      this.sendemailData = { "BusinessName": this.business.Name, "Address": this.business.PhysicalAddress, "ContactPerson": this.business.ContactPerson, "ContactNo": this.business.CONTACTCELLNUMBER, "to": this.business.CONTACTEMAIL, "cc": this.sendemailData.cc, "deliverytime": this.sendemailData.deliverytime, "notes": this.sendemailData.notes }


    
 
  


   
      console.log("auto fill")

      this.userlogindetails = navParams.get('userlogindetails')
      console.log("1", this.userlogindetails)

      this.object = navParams.get('object')
      console.log("2", this.object)

      this.installations = navParams.get('installations')
      console.log("3", this.installations)

      this.item = navParams.get('item')
      console.log("this.item", this.item)

      this.Amount = navParams.get('Amount')
      console.log("4", this.Amount)
  

      //localstorage 

      this.storage.ready();

      this.storage.get('token-to-send-quote').then((Token) => {

        this.token = Token

        console.log("token is available", this.token)

        console.log("main ID", this.object["0"].id)
        console.log("main ID 2", this.object[0].id)


         this.sendobject = { "main_product_id": this.object[0].id, "main_product_info": this.object, "bussiness_name": this.sendemailData, "fifteen_percent_vat": this.Amount["0"].Vat, "zar_total": this.Amount["0"].Total, "hidendetails": this.object[0].Quote_type, "quote_type": this.object[0].quote_type, "discount_percentage": "0.025", "discount_amount": this.object[0].discount_percentage, "Instalation": this.installations, "zar_sub_total": this.Amount["0"].subTotal }


      })


   
    
  }else{
    console.log("no auto fill")


    this.userlogindetails = navParams.get('userlogindetails')
    console.log("1", this.userlogindetails)

    this.object = navParams.get('object')
    console.log("2", this.object)

    this.installations = navParams.get('installations')
    console.log("3", this.installations)



    this.Amount = navParams.get('Amount')
    console.log("4", this.Amount)


    this.SendQuote.push(this.object)




    //localstorage 

    this.storage.ready();

    this.storage.get('token-to-send-quote').then((Token) => {

      this.token = Token

      console.log("token is available", this.token)

    })


    console.log("see results", this.SendQuote)

    this.sendemailData = { "BusinessName": "", "Address": "", "ContactPerson": "", "ContactNo": "", "to": "", "cc": "", "deliverytime": "", "notes": "" }


    console.log("main ID", this.object["0"].id)
    console.log("main ID 2", this.object[0].id)



    this.sendobject = { "main_product_id": this.object[0].id, "main_product_info": this.object, "bussiness_name": this.sendemailData, "fifteen_percent_vat": this.Amount["0"].Vat, "zar_total": this.Amount["0"].Total, "hidendetails": this.object[0].Quote_type, "quote_type": this.object[0].quote_type, "discount_percentage": "0.025", "discount_amount": this.object[0].discount_percentage, "Instalation": this.installations, "zar_sub_total": this.Amount["0"].subTotal }

    this.emaildetails = navParams.get("emaildetails")

    console.log("", this.emaildetails)


  }


  
  }



  send(){
 



    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      // duration: 2000
    });

    loader.dismiss();


    loader.present().then(()=>{

      console.log("view",this.sendobject)



      this.Api.postsendemailquote(JSON.stringify(this.sendobject),this.token).subscribe(QuoteData=>{

          this.sendDATA =QuoteData
          console.log("view",this.sendDATA)

          if(this.sendDATA.message == "Quote sent successifully"){
            loader.dismiss();
            let alert = this.alertCtrl.create({
              title: 'Your quote has been sent successfully to the email address you entered ',
              buttons: [
   {
     text: 'Ok',
     handler: data => {
       console.log('Cancel clicked');
       this.navCtrl.push(HomePage)
     }
   }
 ]

            });

               alert.present();


          }
          else{


            console.log("", this.sendDATA.error)

            loader.dismiss();

            let alert = this.alertCtrl.create({
              
              title: 'Error' ,
              message: '' + this.sendDATA.error,
              buttons: ['OK']
            });

            alert.present();
          
          }


      },(err)=>{

        loader.dismiss();

        console.log(err)
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'Make sure that this PDF has the quotation template',
          buttons: ['OK']
        });
        alert.present();


      })




    })


  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SendemailPage');
  }

}
