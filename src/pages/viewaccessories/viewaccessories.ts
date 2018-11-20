import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import {SendemailaccessoriesPage} from '../sendemailaccessories/sendemailaccessories';
import { AutoPage } from '../auto/auto';
import { ApiProvider } from '../../providers/api/api'
import { Storage } from '@ionic/storage';
@IonicPage()
@Component({
  selector: 'page-viewaccessories',
  templateUrl: 'viewaccessories.html',
})
export class ViewaccessoriesPage {

  object:any
  Accessories:any
  sumtotal:any
  vat:any
  finalTotal:any

  name:any
  subTotal:any
  price:any
  installations:any

  token:any

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public Api: ApiProvider, public loadingCtrl: LoadingController, public storage: Storage) {
  
    this.storage.ready();
    this.storage.get('token-to-send-quote').then((Token) => {

      this.token = Token

      console.log("token login", this.token)

    })



    this.installations =  navParams.get('installation')  
    console.log("inst",this.installations)

    this.object = navParams.get('object')
    console.log("1",this.object)

    this.name = this.object[0].name
    this.price =  Number.parseFloat(this.object[0].RawCranePrice).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")



   

    this.Accessories = navParams.get('Accessories')
    console.log("2", this.Accessories)

    this.sumtotal  = navParams.get('sumtotal')
   
    console.log("3", this.sumtotal)
    this.sumtotal = Number.parseFloat(this.sumtotal).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
       


    this.subTotal = Number.parseFloat(this.subTotal).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
        
 

    this.vat = navParams.get('vat')
    this.vat = Number.parseFloat(this.vat).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
        
    console.log("4", this.vat)

    this.finalTotal = navParams.get('finalTotal')
    this.finalTotal = Number.parseFloat(this.finalTotal).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
        
    console.log("5", this.finalTotal)
 
  }

  emailQuote(){


    var test = this.Api.getapiclients(this.token)
    console.log("token", test)


    let alert = this.alertCtrl.create({
      title: 'Send Quote',
      message: 'Please select to send quote',
      buttons: [
        {
          text: 'Manual',
          handler: () => {
            // console.log('Cancel clicked');

            this.navCtrl.push(SendemailaccessoriesPage, {

              object: this.object,
              Accessories: this.Accessories,
              installations: this.installations,
              sumtotal: this.sumtotal,
              vat: this.vat,
              subTotal: this.subTotal,
              finalTotal: this.finalTotal
            })
          }
        },
        {
          text: 'Autofill',
          handler: () => {
    
         
              let loading = this.loadingCtrl.create({
                content: 'Please wait...'
              });

              loading.present();

            setTimeout(() => {
              loading.dismiss();

              console.log('Buy clicked');

              var accessoriesCondion = "true"

              console.log("acc1", this.object)
              console.log("acc2", this.installations)

              this.navCtrl.push(AutoPage, {

                object: this.object,
                Accessories: this.Accessories,
                installations: this.installations,
                sumtotal: this.sumtotal,
                vat: this.vat,
                subTotal: this.subTotal,


                finalTotal: this.finalTotal,
                accessoriesCondion: accessoriesCondion

              })

            }, 3000);

          



          }

        


        }
      ]
    });
    alert.present();




   
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewaccessoriesPage');
  }

}
