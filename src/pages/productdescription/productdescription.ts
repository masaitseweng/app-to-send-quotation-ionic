import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CalculateproductPage} from '../calculateproduct/calculateproduct';


@IonicPage()
@Component({
  selector: 'page-productdescription',
  templateUrl: 'productdescription.html',
})
export class ProductdescriptionPage {

  imgPath = "http://liftshiftapp.co.za/"

  object:any
  name:any
  img:any
  picture:any
  productobject:any
 


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
    this.object =  navParams.get('object')
    console.log("in",this.object)

    this.name = this.object["0"].name
    this.picture = this.imgPath + this.object["0"].img

   
    
  }


  //Client quotation without discount
  quote(){

  console.log("object", this.object)
  this.productobject = [{"id":this.object["0"].id,"img":this.object["0"].img,"name":this.object["0"].name,"currency":this.object["0"].currency,"price":this.object["0"].price,"quote_type":this.object["0"].quote_type,"discount_percentage": null}]
  this.navCtrl.push(CalculateproductPage,{
    object: this.productobject

  })
  }

  twopointfivepercentDealer(){

    console.log("object", this.object)
    this.productobject = [{"id":this.object["0"].id,"img":this.object["0"].img,"name":this.object["0"].name,"currency":this.object["0"].currency,"price":this.object["0"].price,"quote_type":this.object["0"].quote_type,"discount_percentage": 0.025}]
    this.navCtrl.push(CalculateproductPage,{
      object: this.productobject
  
    })
  }

  fivepercentDealer(){

    console.log("object", this.object)
    this.productobject = [{"id":this.object["0"].id,"img":this.object["0"].img,"name":this.object["0"].name,"currency":this.object["0"].currency,"price":this.object["0"].price,"quote_type":this.object["0"].quote_type,"discount_percentage":0.05}]
    this.navCtrl.push(CalculateproductPage,{
      object: this.productobject
  
    })

  }

  sevenpointfivepercentDealer(){

    console.log("object", this.object)
    this.productobject = [{"id":this.object["0"].id,"img":this.object["0"].img,"name":this.object["0"].name,"currency":this.object["0"].currency,"price":this.object["0"].price,"quote_type":this.object["0"],"discount_percentage":0.075}]
    this.navCtrl.push(CalculateproductPage,{
      object: this.productobject
  
    })

  }

  tenpercentDealer(){

    console.log("object", this.object)
    this.productobject = [{"id":this.object["0"].id,"img":this.object["0"].img,"name":this.object["0"].name,"currency":this.object["0"].currency,"price":this.object["0"].price,"quote_type":this.object["0"],"discount_percentage": 0.1}]
    this.navCtrl.push(CalculateproductPage,{
      object: this.productobject
  
    })

  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductdescriptionPage');
  }

}
