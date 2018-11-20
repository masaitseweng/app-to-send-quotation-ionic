import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ViewaccessoriesPage} from '../viewaccessories/viewaccessories';

@IonicPage()
@Component({
  selector: 'page-checkoutaccessories',
  templateUrl: 'checkoutaccessories.html',
})
export class CheckoutaccessoriesPage {


  object:any
  Accessories:any
  sumtotal:any
  vat:any
  finalTotal:any
  price :any

  ///
  name:any
  img:any
  imgPath = "http://liftshiftapp.co.za/"

  installation:any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
    this.installation = navParams.get('installation')
    console.log("1",this.installation)

    this.object = navParams.get('object')
    console.log("1",this.object)

    this.name = this.object[0].name
    this.img = this.imgPath+this.object["0"].img

    this.Accessories = navParams.get('Accessories')
    console.log("2", this.Accessories)

    this.sumtotal  = navParams.get('sumtotal')

    console.log("hello",this.sumtotal)

    this.price = Number.parseFloat(this.sumtotal).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")

    console.log("3", this.sumtotal)

    this.vat = navParams.get('vat')
    console.log("4", this.vat)

    this.finalTotal = navParams.get('finalTotal')
    console.log("5", this.finalTotal)

  }

  viewQuote(){

  
    this.navCtrl.push(ViewaccessoriesPage,{
      object:this.object,
      Accessories:this.Accessories,
      installation:this.installation,
      sumtotal:this.sumtotal,
      vat:this.vat,
      finalTotal:this.finalTotal

    })
  
   

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutaccessoriesPage');
  }

}
