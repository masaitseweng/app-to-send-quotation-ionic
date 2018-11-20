import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProductdescriptionPage} from '../productdescription/productdescription';

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {


 //global variables

  img:any
  name:any
  price:any
  imgPath = "http://liftshiftapp.co.za/"
  picture :any
  object:any
  productobject:any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
 
  //object from menuitems page
    this.object = navParams.get('object')
    console.log("inside",this.object)

    //display this variables to the view
    this.name = this.object["0"].name
    this.picture = this.imgPath+ this.object["0"].img


  
  }


  LiftandShift(){

    console.log("inside",this.object)

    this.productobject = [{"id":this.object["0"].id,"img":this.object["0"].img,"name":this.object["0"].name,"currency":this.object["0"].currency,"price":this.object["0"].price,"quote_type":"LiftandShift"}]


    console.log("lift")
 
    //navigate to another page with this productobject
    this.navCtrl.push(ProductdescriptionPage,{
      object: this.productobject
    })

  }

  Multicranes(){

  this.productobject = [{"id":this.object["0"].id,"img":this.object["0"].img,"name":this.object["0"].name,"currency":this.object["0"].currency,"price":this.object["0"].price,"quote_type":"Multicranes"}]

  //navigate to another page with this productobject
  this.navCtrl.push(ProductdescriptionPage,{
    object: this.productobject
  })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }

}
