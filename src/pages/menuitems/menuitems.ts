import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ApiProvider} from '../../providers/api/api';
import {ProductPage} from '../product/product'

@IonicPage()
@Component({
  selector: 'page-menuitems',
  templateUrl: 'menuitems.html',
})
export class MenuitemsPage {

  item:any
  prodcuts:any
  results:any
  attachments:any
  img:any
  price:any = 0.00

  productobject:any
  constructor(public navCtrl: NavController, public navParams: NavParams,public Api:ApiProvider) {
  
    this.item = navParams.get('item')
    console.log("ID",this.item)
    
    this.Api.getproducts(this.item).subscribe(DATA =>{
     this.results = DATA
     this.prodcuts = this.results.data

     console.log("test",this.prodcuts)

    })
   
  }



  products(prodcut){

    console.log("",prodcut.id)
  


    this.Api.getproduct(prodcut.id).subscribe(DATA =>{

      console.log("help",DATA)
      // console.log("",DATA.data['0'].attachments)
      this.attachments = DATA.data['0'].attachments

      console.log("attachments",this.attachments )
      var set=false
      for (var _i = 0; _i < this.attachments.length; _i++) {
       
        if(this.attachments[_i].attachment_description == "img"){

          var img = this.attachments[_i].attachment_description
          console.log("ins",this.attachments[_i])

          this.img = this.attachments[_i].attachment_path
          set=true
          
        }

       
    }
    if(set==false){
      this.img = "/assets/images/default-image.png"

      console.log("help",this.img )
      
    }

if(DATA.data['0'].eur_amount != 0){

  this.productobject = [{"id":DATA.data['0'].id,"img":this.img,"name":DATA.data['0'].name,"currency":"price_EURO","price":DATA.data['0'].eur_amount}]


     this.navCtrl.push(ProductPage,{

      object :this.productobject   
 
    })
   

}
else if(DATA.data['0'].zar_amount != 0){

   this.productobject = [{"id":DATA.data['0'].id,"img":this.img,"name":DATA.data['0'].name,"currency":"price_ZAR","price":DATA.data['0'].zar_amount}]
  
  console.log("object",this.productobject ) 

  this.navCtrl.push(ProductPage,{

    object :this.productobject

  })

}
else{


  this.productobject = [{"id":DATA.data['0'].id,"img":this.img,"name":DATA.data['0'].name,"currency":"price_EMPTY","price":this.price}]
 console.log("object",this.productobject )   

  this.navCtrl.push(ProductPage,{

    object :this.productobject

  })

  

}



    

   

    })

 


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuitemsPage');
  }

}
