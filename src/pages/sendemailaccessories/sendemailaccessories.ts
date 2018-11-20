import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController, } from 'ionic-angular';
import {ApiProvider} from '../../providers/api/api';
import {HomePage} from '../home/home';
import {Storage} from '@ionic/storage';
@IonicPage()
@Component({
  selector: 'page-sendemailaccessories',
  templateUrl: 'sendemailaccessories.html',
})
export class SendemailaccessoriesPage {


  object:any
  Accessories:any
  installations:any
  sumtotal:any
  vat:any
  finalTotal:any 


  sendobject:any
  sendDATA:any
  token:any
  sendemailData :any

  auto: any
  business: any

  constructor(public navCtrl: NavController, public navParams: NavParams,public Api:ApiProvider,public loadingCtrl: LoadingController,public alertCtrl: AlertController,public storage:Storage) {
  
    this.auto = navParams.get('auto')
    console.log("", this.auto) 

    if (this.auto == "true") {


    




      this.sendemailData = { "cc": "", "deliverytime": "", "notes": "" }


      this.business = navParams.get('business')
      console.log("bu", this.business)

      this.sendemailData = { "BusinessName": this.business.Name, "Address": this.business.PhysicalAddress, "ContactPerson": this.business.ContactPerson, "ContactNo": this.business.CONTACTCELLNUMBER, "to": this.business.CONTACTEMAIL, "cc": this.sendemailData.cc, "deliverytime": this.sendemailData.deliverytime, "notes": this.sendemailData.notes }


      // this.sendemailData = { "BusinessName": "", "Address": "", "ContactPerson": "", "ContactNo": "", "to": "", "cc": "", "deliverytime": "", "notes": "" }





      this.object = navParams.get('object')
      console.log("", this.object)


      console.log("id is empty", this.object[0].id)
      this.Accessories = navParams.get('Accessories')
      console.log("", this.Accessories)


      this.installations = navParams.get('installations')
      console.log("", this.installations)
      this.sumtotal = navParams.get('sumtotal')
      console.log("", this.sumtotal)
      this.vat = navParams.get('vat')
      console.log("", this.vat)
      this.finalTotal = navParams.get('finalTotal')
      console.log("", this.finalTotal)


      if (this.object[0].id == "") {

        console.log("one")

        // this.sendobject = { "main_product_id": this.object[0].id, "main_product_info": this.object, "bussiness_name": this.sendemailData, "fifteen_percent_vat": this.vat, "zar_total": this.finalTotal, "hidendetails": this.object[0].Quote_type, "quote_type": this.object[0].quote_type, "discount_percentage": "0.025", "discount_amount": this.object[0].discount_percentage, "Instalation": this.installations, "Accessories": this.Accessories, "zar_sub_total": this.sumtotal }


         this.sendobject = { "main_product_id": '327', "main_product_info": this.Accessories, "bussiness_name": this.sendemailData, "fifteen_percent_vat": this.vat, "zar_total": this.finalTotal, "hidendetails": this.object[0].Quote_type, "quote_type": this.object[0].quote_type, "discount_percentage": "0.025", "discount_amount": this.object[0].discount_percentage, "Instalation": this.installations, "Accessories": this.Accessories, "zar_sub_total": this.sumtotal }

      } else {

        this.sendobject = { "main_product_id": this.object[0].id, "main_product_info": this.object, "bussiness_name": this.sendemailData, "fifteen_percent_vat": this.vat, "zar_total": this.finalTotal, "hidendetails": this.object[0].Quote_type, "quote_type": this.object[0].quote_type, "discount_percentage": "0.025", "discount_amount": this.object[0].discount_percentage, "Instalation": this.installations, "Accessories": this.Accessories, "zar_sub_total": this.sumtotal }


      }





      console.log("id is empty", this.object[0].id)
      this.Accessories = navParams.get('Accessories')
      console.log("", this.Accessories)


      this.installations = navParams.get('installations')
      console.log("", this.installations)
      this.sumtotal = navParams.get('sumtotal')
      console.log("", this.sumtotal)
      this.vat = navParams.get('vat')
      console.log("", this.vat)
      this.finalTotal = navParams.get('finalTotal')
      console.log("", this.finalTotal)

 
    


      this.storage.ready();

      this.storage.get('token-to-send-quote').then((token) => {
        this.token = token
      })




    }
    else{


      this.object = navParams.get('object')
      console.log("", this.object)
      console.log("id is empty", this.object[0].id)
      this.Accessories = navParams.get('Accessories')
      console.log("", this.Accessories)


      this.installations = navParams.get('installations')
      console.log("", this.installations)
      this.sumtotal = navParams.get('sumtotal')
      console.log("", this.sumtotal)
      this.vat = navParams.get('vat')
      console.log("", this.vat)
      this.finalTotal = navParams.get('finalTotal')
      console.log("", this.finalTotal)

      this.sendemailData = { "BusinessName": "", "Address": "", "ContactPerson": "", "ContactNo": "", "to": "", "cc": "", "deliverytime": "", "notes": "" }


      if (this.object[0].id == "") {



        this.sendobject = { "main_product_id": '327', "main_product_info": this.Accessories, "bussiness_name": this.sendemailData, "fifteen_percent_vat": this.vat, "zar_total": this.finalTotal, "hidendetails": this.object[0].Quote_type, "quote_type": this.object[0].quote_type, "discount_percentage": "0.025", "discount_amount": this.object[0].discount_percentage, "Instalation": this.installations, "Accessories": this.Accessories, "zar_sub_total": this.sumtotal }

      } else {

        this.sendobject = { "main_product_id": this.object[0].id, "main_product_info": this.object, "bussiness_name": this.sendemailData, "fifteen_percent_vat": this.vat, "zar_total": this.finalTotal, "hidendetails": this.object[0].Quote_type, "quote_type": this.object[0].quote_type, "discount_percentage": "0.025", "discount_amount": this.object[0].discount_percentage, "Instalation": this.installations, "Accessories": this.Accessories, "zar_sub_total": this.sumtotal }


      }


      this.storage.ready();

      this.storage.get('token-to-send-quote').then((token) => {
        this.token = token
      })



    }
  




  }

  

  sendaccessories(){




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
     text: 'Yes',
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

            loader.dismiss();

            let alert = this.alertCtrl.create({
              title:'Error',
              message: '' + this.sendDATA.error,
              buttons: ['OK']
            });

            alert.present();
          
          }


      },(err)=>{

        loader.dismiss();

        console.log("error message",err)
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: err,
          buttons: ['OK']
        });
        alert.present();


      })




    })



  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SendemailaccessoriesPage');
  }

}
