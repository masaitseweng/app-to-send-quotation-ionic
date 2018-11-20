import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from
'ionic-angular';
import {ApiProvider} from '../../providers/api/api';
import {CheckoutaccessoriesPage} from
'../checkoutaccessories/checkoutaccessories';
import {ViewaccessoriesPage} from '../viewaccessories/viewaccessories';
import{AccessoriesPage} from '../accessories/accessories';
import {Storage} from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-subaccessories',
  templateUrl: 'subaccessories.html',
})
export class SubaccessoriesPage {

  subaccessories:any
  object:any
  installation:any
  new_price:any
  displayaccessories:any
  new_price_formated:any
  displaysubaccessories:any

  EuroVar:any
  newprice:any = 0;
  shipping :any = 1.12
  landed :any = 1.45
  accesso_price:any
  calculatevat :any =0;
  vatamount: any =0;
  ////function variables
  varobject = [];
  item:any
  Zar_amount:any =0;
  newzar_amount:any =0;
  totalpricewithvat
  Accessories:any

  constructor(public navCtrl: NavController, public navParams:
NavParams,public Api:ApiProvider,public alertCtrl:
AlertController,public storage: Storage) {

    this.subaccessories = navParams.get('subaccessories')
    console.log( this.subaccessories)

    this.object = navParams.get('object')
    console.log(this.object )

    this.installation=  navParams.get('installation')
    console.log(this.installation)
    this.new_price =  navParams.get('new_price')
    console.log(this.new_price)




      this.Accessories =  navParams.get('Accessories')
      console.log("sec accessories been added",this.Accessories)





    console.log("this.subaccessories.order",this.subaccessories.id)




    this.Api.getproducts(this.subaccessories.id).subscribe(DATA =>{


      this.displayaccessories = DATA
      console.log("display",this.displayaccessories)

     this.displaysubaccessories =  this.displayaccessories.data

     console.log("this.subaccessories",this.displaysubaccessories)

     this.new_price_formated =  
Number.parseFloat(this.new_price).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,
"$1,")

    })



  }

  checkedAccessories(subaccessory,index){




    console.log("clicked object",subaccessory)



    if(subaccessory.checked === true ){

      if(subaccessory.eur_amount !== 0){
        console.log("euro convert")

        // llkhj

  this.Api.getEuro().subscribe(EuroDATA =>{
    this.EuroVar = EuroDATA
    console.log("euro currency",this.EuroVar )
    console.log("south africa",this.EuroVar.rates.ZAR )

    subaccessory.zar_amount =   Number.parseFloat(subaccessory.eur_amount)
* this.EuroVar.rates.ZAR

    console.log("crane price==>",subaccessory.zar_amount)


    subaccessory.zar_amount = subaccessory.zar_amount * this.shipping

    subaccessory.zar_amount = subaccessory.zar_amount * this.landed


    this.newprice = this.newprice +
Number.parseFloat(subaccessory.zar_amount)

    console.log("testing==>",this.newprice)

    this.accesso_price =  Number.parseFloat(this.new_price) +
Number.parseFloat(this.newprice)
    console.log("new price total",this.accesso_price)

    this.new_price_formated =
Number.parseFloat(this.accesso_price).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,
"$1,")
    console.log("what is this",this.new_price_formated)
    this.calculatevat =  this.accesso_price * 1.14;
    console.log(this.calculatevat)

    this.vatamount = this.calculatevat - this.accesso_price

    console.log(this.vatamount)
    var results = this.vatamount + this.new_price_formated
    console.log("total",results )

    this.totalpricewithvat = this.accesso_price +  results

    console.log("total price with vat", this.totalpricewithvat)

    console.log("original object",this.varobject);


    if(this.Accessories != undefined){

      this.Accessories.push(subaccessory)

      console.log("another accessories added==>",this.Accessories)



    }
    else{

      this.varobject.push(subaccessory)
      console.log("checked===>",  this.varobject);

    }


    this.storage.set('accessories',this.varobject).then(() =>{
      console.log("accessories set")
    })


  })


      }

      else if(subaccessory.zar_amount !== 0){
        console.log("zar convert")

            this.newprice = this.newprice +
Number.parseFloat(subaccessory.zar_amount)

            console.log("testing==>",this.newprice)

            this.accesso_price =  Number.parseFloat(this.new_price) +
Number.parseFloat(this.newprice)
            console.log("new price total",this.accesso_price)

            this.new_price_formated =
Number.parseFloat(this.accesso_price).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,
"$1,")
            console.log("what is this",this.new_price_formated)
            this.calculatevat =  this.accesso_price * 1.14;
            console.log(this.calculatevat)

            this.vatamount = this.calculatevat - this.accesso_price

            console.log(this.vatamount)
            var results = this.vatamount + this.new_price_formated
            console.log("total",results )

            this.totalpricewithvat = this.accesso_price +  results
            console.log("total price", this.totalpricewithvat)

            //added item

            if(this.Accessories != undefined){

            this.Accessories.push(subaccessory)
            console.log("another accessories added",this.Accessories)

            }
            else{
              this.varobject.push(subaccessory)
              console.log("checked===>",  this.varobject)

            }
            
             

       


      }
      else{
        console.log("error")
      }







     }

     else{



      console.log("total before removing",this.accesso_price)
      console.log("total before removing",this.newprice)
      console.log("what is this price raw crane price",this.new_price)
      console.log("price crane",subaccessory.zar_amount)
      
      console.log("original array",this.varobject)
      console.log("another array with objects",this.Accessories)


      if(this.varobject.length != 0){

      
        
        this.varobject.forEach((item, indexer) => {
        console.log("inside remove items=====2")
        console.log("item",item)
        console.log("index",indexer)

        if(item.id == subaccessory.id  ){

           console.log("original",this.varobject)
           this.varobject.splice(indexer,1)
           console.log("removed",this.varobject)

           this.accesso_price = this.accesso_price - subaccessory.zar_amount
           this.newprice = this.newprice -Number.parseFloat(subaccessory.zar_amount)
           this.new_price_formated =Number.parseFloat(this.accesso_price).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1,")

        }
        

      })


      }

      else{
        this.Accessories.forEach((item, indexer) => {

          console.log("inside remove items=====2")
          console.log("item",item)
          console.log("index",indexer)
  
          if(item.id == subaccessory.id  ){
  
             console.log("added array",this.Accessories)
             this.Accessories.splice(indexer,1)
             console.log("removed =1",this.Accessories)
  
             this.accesso_price = this.accesso_price - subaccessory.zar_amount
             this.newprice = this.newprice -Number.parseFloat(subaccessory.zar_amount)
             this.new_price_formated =Number.parseFloat(this.accesso_price).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1,")
  
          }
          
  
  
  
        })


      }

    
     
    




     }


  }



  showConfirm() {



    if(this.Accessories != undefined){

      console.log("display",this.accesso_price)

      let confirm = this.alertCtrl.create({
        title: 'Proceed To View Quote',
        message: '',
        buttons: [

          {
            text: 'ok',
            handler: () => {


             if(this.installation.length == 0 ){

              this.navCtrl.push(ViewaccessoriesPage,{
                object:this.object,
                Accessories:this.Accessories,
                installation:this.installation,
                ////sum total
                sumtotal:this.accesso_price,
                vat:this.vatamount,
                finalTotal:this.calculatevat,
              })

             }
             else{

              this.navCtrl.push(CheckoutaccessoriesPage,{
                object:this.object,
                Accessories:this.Accessories,
                installation:this.installation,
                ////sum total
                sumtotal:this.accesso_price,
                vat:this.vatamount,
                finalTotal:this.calculatevat,



              })

             }




              console.log('Agree clicked');
            }
          }
        ]
      });
      confirm.present();

    }
    else{

      console.log("display",this.accesso_price)

      let confirm = this.alertCtrl.create({
        title: 'Proceed To View Quote',
        message: '',
        buttons: [

          {
            text: 'ok',
            handler: () => {


             if(this.installation.length == 0 ){

              this.navCtrl.push(ViewaccessoriesPage,{
                
                object:this.object,
                Accessories:this.varobject,
                installation:this.installation,
                ////sum total
                sumtotal:this.accesso_price,
                vat:this.vatamount,
                finalTotal:this.calculatevat,
              })

             }
             else{

              this.navCtrl.push(CheckoutaccessoriesPage,{
                object:this.object,
                Accessories:this.varobject,
                installation:this.installation,
                ////sum total
                sumtotal:this.accesso_price,
                vat:this.vatamount,
                finalTotal:this.calculatevat,



              })

             }




              console.log('Agree clicked');
            }
          }
        ]
      });
      confirm.present();

    }






}


addanotheraccessories(){


  if(this.Accessories != undefined){

    this.navCtrl.push(AccessoriesPage,{

      object:this.object,

      installation:this.installation,
      ////sum total
      new_price:this.accesso_price,
      Accessories:this.Accessories,


    })


    console.log("not undefined",this.Accessories)

  }
  else{

      this.navCtrl.push(AccessoriesPage,{

    object:this.object,

    installation:this.installation,
    ////sum total
    new_price:this.accesso_price,
    Accessories:this.varobject,


  })

    console.log("undefined",this.varobject)

  }


  console.log()




  // this.storage.get('accessories').then((name) => {
  //   console.log('Name: ' + name);
  // });

  // console.log("hello",this.varobject)


  // this.navCtrl.push(AccessoriesPage,{

  //   object:this.object,

  //   installation:this.installation,
  //   ////sum total
  //   new_price:this.accesso_price,
  //   Accessories:this.Accessories,


  // })

}


  ionViewDidLoad() {
    console.log('ionViewDidLoad SubaccessoriesPage');
  }

}