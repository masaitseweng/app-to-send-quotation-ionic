import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {ViewPage} from '../view/view';
@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {



// ///////send quote/////
// pricedescription:any




// cranepricsend:any
// totalcranechecked:any

// Totalpriceafter:any
// newobject:any


// convertedcurrenc:any


// ////viewquote////









//send to email
vatsend:any
// emaildetails:any



//installation
object:any
name:any
price:any
img:any
imgPath = "http://liftshiftapp.co.za/"
vatview:any
totalamountview:any
originalpricerawview:any
viewQuoteview:any
cranepriceview:any
craneview :any
viewquoteTotalview:any
invoice:any
new_price:any
new_pricepiped:any =0


// craneprice:any




//accessories
Accessories:any
sumtotal:any
vat:any
finalTotal:any
condition:any


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  

  this.condition = navParams.get('condition') 
  console.log("check",this.condition)


      // this.craneprice =navParams.get('craneprice')
    // console.log("raw price",this.craneprice)


  if(this.condition == "installation"){



    this.object = navParams.get('object')
    console.log("",this.object)

    this.name =this.object["0"].name
    this.img = this.imgPath+this.object["0"].img
    this.price = this.object["0"].CranepriceFormated

    //Vat
    this.vatview = navParams.get('vatview')
     console.log(this.vatview)

     //total items
     this.totalamountview = navParams.get('totalamountview')
     console.log(this.totalamountview)

     this.originalpricerawview = navParams.get('originalpricerawview')
     console.log(this.originalpricerawview)

     this.viewQuoteview = navParams.get('viewQuoteview')
     console.log(this.viewQuoteview)

     this.cranepriceview = navParams.get('cranepriceview')
     console.log(this.cranepriceview)

     this.craneview = navParams.get('craneview')
     console.log(this.craneview)

     this.viewquoteTotalview = navParams.get('viewquoteTotalview')
     console.log(this.viewquoteTotalview)

    this.invoice = navParams.get('invoice')
    console.log("invoice",this.invoice)

    this.new_price = navParams.get('new_price')
    console.log("new crane price",this.new_price)

    this.new_pricepiped =   Number.parseFloat(this.new_price).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")


  


  }
  else{



    this.object = navParams.get('object')
    console.log("",this.object)

    this.name =this.object["0"].name
    this.img = this.imgPath+this.object["0"].img
    this.price = this.object["0"].CranepriceFormated

    //Vat
    this.vatview = navParams.get('vatview')
     console.log(this.vatview)

     //total items
     this.totalamountview = navParams.get('totalamountview')
     console.log(this.totalamountview)

     this.originalpricerawview = navParams.get('originalpricerawview')
     console.log(this.originalpricerawview)

     this.viewQuoteview = navParams.get('viewQuoteview')
     console.log(this.viewQuoteview)

     this.cranepriceview = navParams.get('cranepriceview')
     console.log(this.cranepriceview)

     this.craneview = navParams.get('craneview')
     console.log(this.craneview)

     this.viewquoteTotalview = navParams.get('viewquoteTotalview')
     console.log(this.viewquoteTotalview)

    this.invoice = navParams.get('invoice')
    console.log("invoice",this.invoice)

    this.new_price = navParams.get('new_price')
    console.log("new crane price",this.new_price)

    this.new_pricepiped =   Number.parseFloat(this.new_price).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")



  }




  
  }




///function to view quote and also sne that quote to an email
viewQuote(){


  this.navCtrl.push(ViewPage,{

  
 
  
  totalamount:this.totalamountview,
  originalpriceraw:this.originalpricerawview,
  viewQuote:this.viewQuoteview,
  craneprice:this.cranepriceview,
  crane :this.craneview,
  viewquoteTotal:this.viewquoteTotalview,
  invoice:this.invoice,
  craneprice2 :this.originalpricerawview,
  object :this.object,
  vat:this.vatview, 



});

}



  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPage');
  }

}
