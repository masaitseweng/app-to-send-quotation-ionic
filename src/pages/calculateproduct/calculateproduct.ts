import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController  } from 'ionic-angular';
import {ApiProvider} from '../../providers/api/api'
import {InstallationPage} from '../installation/installation';
import {ViewPage} from '../view/view';
@IonicPage()
@Component({
  selector: 'page-calculateproduct',
  templateUrl: 'calculateproduct.html',
})
export class CalculateproductPage {

  // Global Variables
    imgPath:any = "http://liftshiftapp.co.za"
    object:any
    name:any
    picture:any
    EuroVar:any
    total:any =0
    sum:any =0
    sumraw :any =0;
    sumtotal : any={};
    sto = {}
    sumt :any ={};
    totaldesc: any [];
    hyvabutton:any
    client_quotation : any = 0 
    Fivepercent : any = 0.05
    sevenpointfive : any =  0.075
    buffer:any
    buffertotal:any
    ten :any = 0.1
    FivepercentSum : any = 0;
    percentage : any = 0
    shipping :any = 1.12
    landed :any = 1.34
    convertCurrencytozar:any 
    buffervalue:any
    zarprice:any
    discount :any = 0
    remove_discount_from_zar:any = 0
    newobject:any
    ZarPrice:any

    vat:any= 0.15
    Total:any = 0

    calculatevat:any = 0

    



  constructor(public navCtrl: NavController, public navParams: NavParams, public Api: ApiProvider, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {


    this.object = navParams.get('object')   
    console.log("in",this.object )

    this.name = this.object["0"].name
    this.picture = this.imgPath + this.object["0"].img
    console.log("image ", this.imgPath  +this.object["0"].img)
    //default price if price Empty
    this.sum = 0
    ///currency API


    this.Api.getEuro().subscribe(EuroDATA =>{
    this.EuroVar = EuroDATA

      if (this.object["0"].price === 0){
       console.log("ok cool")

        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'No price for this Crane',
          message: '' + this.name,
          buttons: ['OK']
        });
        alert.present();

      }
      // else{
      //   console.log("ok")
      // }
    console.log("euro currency",this.object["0"].price )


   //calculation of currency

   if(this.object["0"].currency == "price_EURO" && this.object["0"].discount_percentage == null ){


    console.log("ZAR",this.EuroVar.rates.ZAR )
    this.client_quotation = Number.parseFloat(this.object["0"].price  ) * Number.parseFloat(this.EuroVar.rates.ZAR)
    console.log("hee here--->",this.client_quotation)
    this.buffer = this.client_quotation * this.Fivepercent
    console.log("add this to total",this.buffer)
    console.log("hee here total--->",this.client_quotation)
    this.client_quotation = this.client_quotation + this.buffer
    this.client_quotation = this.client_quotation * this.shipping
    this.client_quotation =this.client_quotation * this.landed
    console.log("total price",this.client_quotation)
    this.total = this.client_quotation
    this.sum = Number.parseFloat(this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
    console.log("total", Number.parseFloat(this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"))
    console.log("convert price to ZAR",  Number.parseFloat(this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"))
    //format the price
    this.ZarPrice = Number.parseFloat(this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
    this.sumtotal= Number.parseFloat(this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
    this.sumraw = Number.parseFloat(this.total)
    console.log("price one sum",this.sumtotal)
    console.log("price one raw price",this.sumraw)
    this.sumtotal = Number.parseFloat(this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
    console.log("price one",this.sumtotal)

   }

   else if(this.object["0"].currency == "price_ZAR" && this.object["0"].discount_percentage == null){



      console.log("south africa inside if",this.object["0"].price )
      this.total = this.object["0"].price

       this.sum = Number.parseFloat(this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
       console.log("total", Number.parseFloat(this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"))
       console.log("convert price to ZAR", Number.parseFloat(this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"))
       this.sumtotal = Number.parseFloat(this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
       this.sumraw = Number.parseFloat(this.total)
       console.log("price one sum", this.sumtotal)
       console.log("price one raw price", this.sumraw)
       this.sumtotal = Number.parseFloat(this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
       console.log("price one", this.sumtotal)
       // this.sto = this.sumtotal
       console.log("stop", this.sumtotal)
       console.log("ZAR", this.object["0"].price);



   }
   else if(this.object["0"].currency == "price_EMPTY" && this.object["0"].discount_percentage == null){


   }

   else{

    ////////////////////////////////
    ///////////////////////////////
    //Calculation with discount////
    ///////////////////////////////

    console.log("hello discount")


    if(this.object["0"].currency == "price_EURO"){

        console.log("south africa inside if", this.EuroVar.rates.ZAR)
        //convert euro to rand
        this.total = Number.parseFloat(this.object["0"].price) * Number.parseFloat(this.EuroVar.rates.ZAR)
        //this do the samething as the first line
        this.convertCurrencytozar = Number.parseFloat(this.object["0"].price) * Number.parseFloat(this.EuroVar.rates.ZAR)
        //convert to zar
        console.log("zar price",this.convertCurrencytozar)
        //this line added five percent buffer to euro
        this.buffervalue =   this.Fivepercent * this.convertCurrencytozar
        //this is the buffer price
        console.log("buffor 22 7.5",this.buffervalue)
        //add the buffer price to zar price
        this.zarprice = this.convertCurrencytozar +  this.buffervalue
        //total price with buffer values
        console.log("zar price",this.zarprice)
        this.zarprice = this.zarprice * this.shipping
        this.zarprice = this.zarprice * this.landed
        console.log("total price", this.zarprice)
        //discount 
        this.discount = this.zarprice * this.object["0"].discount_percentage
        console.log("discount amount",this.discount) 
        //discount
        this.buffer  = this.discount
        console.log("buffer",this.buffer )
        //remove discount from crane
        this.remove_discount_from_zar = this.zarprice -  this.discount
        console.log("remove discount from crane",this.remove_discount_from_zar)
        console.log("total price", this.zarprice)
        //total discount crane
        this.total = this.zarprice
        this.sum = Number.parseFloat(this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
        console.log("total", Number.parseFloat(this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"))
        console.log("convert price to ZAR", Number.parseFloat(this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"))
        this.sumtotal = Number.parseFloat(this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
        this.sumraw = Number.parseFloat(this.total)
        // this.PRICE = Number.parseFloat(this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
        console.log("price one sum", this.sumtotal)
          //format the price
        this.ZarPrice = this.sumtotal
        console.log("price one raw price", this.sumraw)
        this.sumtotal = Number.parseFloat(this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
        console.log("price one", this.sumtotal)
        // this.sto = this.sumtotal
        console.log("stop", this.sumtotal)
        console.log("cash in Euro convert", this.object["0"].price);

        console.log("display to another page",this.ZarPrice)

    }
    else if(this.object["0"].currency == "price_ZAR"){
     

      //discount 
      this.discount = this.object["0"].price * this.object["0"].discount_percentage
      console.log("discount amount",this.discount) 
      //discount
      this.buffer  = this.discount
      console.log("buffer",this.buffer )
      //remove discount from crane
      this.remove_discount_from_zar = this.object["0"].price -  this.discount
      console.log("remove discount from crane",this.remove_discount_from_zar)
      console.log("total price", this.object["0"].price)
      //total discount crane
      this.total = this.object["0"].price
      this.sum = Number.parseFloat(this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
      console.log("total", Number.parseFloat(this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"))
      console.log("convert price to ZAR", Number.parseFloat(this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"))
      this.sumtotal = Number.parseFloat(this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
      this.sumraw = Number.parseFloat(this.total)
      // this.PRICE = Number.parseFloat(this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
      console.log("price one sum", this.sumtotal)
        //format the price
      this.ZarPrice = this.sumtotal
      console.log("price one raw price", this.sumraw)
      this.sumtotal = Number.parseFloat(this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
      console.log("price one", this.sumtotal)
      // this.sto = this.sumtotal
      console.log("stop", this.sumtotal)
      console.log("cash in Euro convert", this.object["0"].price);

    }
    
    else{

    }

   }


 })
 //commet

  }

  showFullPrice(){



    let confirm = this.alertCtrl.create({
      // title: 'Lift and Shift',
      message: 'Would you like to add an installation?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {

            console.log("in",this.object )

            this.newobject = [{"id":this.object["0"].id,"name":this.object["0"].name,"img":this.object["0"].img,"discount_percentage":this.discount,"quote_type":this.object["0"].quote_type,"CranepriceFormated":this.ZarPrice,"RawCranePrice":this.sumraw,"Quote_type":"Full Price"}]
        
            console.log("object to another page",this.newobject )
            this.navCtrl.push(InstallationPage,{
            object:this.newobject
            })


          }
        },
        {
          text: 'No',
          handler: () => {


            let loading = this.loadingCtrl.create({
              content: 'Please wait...',
              // duration: 9000
            });



            this.calculatevat = this.sumraw * 1.15
            this.vat = this.calculatevat - this.sumraw
            console.log("vat", this.vat)
            this.Total = this.vat + this.sumraw
            console.log("Total", this.Total)


            loading.present();

           

            if (this.vat != 0 && this.Total != 0){

              this.newobject = [{ "id": this.object["0"].id, "name": this.object["0"].name, "img": this.object["0"].img, "discount_percentage": this.discount, "quote_type": this.object["0"].quote_type, "CranepriceFormated": this.ZarPrice, "RawCranePrice": this.sumraw, "Quote_type": "Full Price" }]

              console.log("object to another page", this.newobject)
              // checkout
            
              loading.dismiss();   
              this.navCtrl.push(ViewPage, {


                object: this.newobject,
                totalamount: this.Total,
                originalpriceraw: this.sumraw,
                viewQuote: this.newobject,
                craneprice: Number.parseFloat(this.sumraw).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"),
                crane: this.newobject,
                viewquoteTotal: this.Total,
                // invoice:this.newobject,
                craneprice2: this.newobject,
                vat: this.vat,
              })


            }
            else{

              

            }

   





            

          }
        }
      ]
    });
    confirm.present();



    // console.log("newobject",this.newobject)

 

  }


  ShowHiddenPrice(){

    let confirm = this.alertCtrl.create({
      // title: 'Lift and Shift',
      message: 'Yes to add installation or not to send quote',
      buttons: [
        {
          text: 'Yes',
          handler: () => {

            console.log("in",this.object )

            this.newobject = [{"id":this.object["0"].id,"name":this.object["0"].name,"img":this.object["0"].img,"discount_percentage":this.discount,"quote_type":this.object["0"].quote_type,"CranepriceFormated":this.ZarPrice,"RawCranePrice":this.sumraw,"Quote_type":"Hidden Price"}]
        
            console.log("object to another page",this.newobject )
            this.navCtrl.push(InstallationPage,{
            object:this.newobject
            })


          }
        },
        {
          text: 'No',
          handler: () => {

          
            let loading = this.loadingCtrl.create({
              content: 'Please wait...',
              duration: 5000
            });



            this.calculatevat = this.sumraw * 1.15
            this.vat = this.calculatevat - this.sumraw
            console.log("vat", this.vat)
            this.Total = this.vat + this.sumraw
            console.log("Total", this.Total)


            loading.present();



            if (this.vat != 0 && this.Total != 0) {


              this.newobject = [{ "id": this.object["0"].id, "name": this.object["0"].name, "img": this.object["0"].img, "discount_percentage": this.discount, "quote_type": this.object["0"].quote_type, "CranepriceFormated": this.ZarPrice, "RawCranePrice": this.sumraw, "Quote_type": "Hidden Price" }]

              console.log("object to another page", this.newobject)
              // checkout
              loading.dismiss();   
              this.navCtrl.push(ViewPage, {
                object: this.newobject,
                totalamount: this.Total,
                originalpriceraw: this.sumraw,
                viewQuote: this.newobject,
                craneprice: Number.parseFloat(this.sumraw).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"),
                crane: this.newobject,
                viewquoteTotal: this.Total,
                // invoice:this.newobject,
                craneprice2: this.newobject,
                vat: this.vat,
              })

            }else{

              console.log("error")

            }

      

            

          }
        }
      ]
    });
    confirm.present();

  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculateproductPage');
  }

}
