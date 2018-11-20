import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import {SendemailPage} from '../sendemail/sendemail';
import { AutoPage} from '../auto/auto';
import { ApiProvider} from '../../providers/api/api'
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
})
export class ViewPage {
  

viewQuot :any
total:any =0
viewquoteTota:any;
description: string;
sum :any
fs: any;
// storage = [];
QuoteDatavar:any;
pdfdata:any;
cran:any;
craneprice:any;
vat:any;
totalamount:any;
vatdisplay : any;
totalpricedisplay : any;
pricedesc = [];
objectformatprice :any
originalpriceraw:any;
formatoriginalpriceraw :any;
pdfcraneDATAVar:any;
craneobjectpdf :any = [];


///////send quote/////
pricedescription:any

ref:any
date:any
invoice:any
emaildetails:any
cranepricsend:any
totalcranechecked:any
vatsend:any
Totalpriceafter:any
newobject:any
new_price:any
new_pricepiped:any =0
convertedcurrenc:any


logindetails:any
lastrecordVar:any
object:any

CraneName:any
viewcranePrice:any

installations:any


SubTotal:any

priceobjects:any

  token:any



  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public Api: ApiProvider, public storage: Storage, public loadingCtrl: LoadingController ) {
  

    this.storage.ready();
    this.storage.get('token-to-send-quote').then((Token) => {

      this.token = Token

      console.log("token login", this.token)

    })



    


    this.logindetails = navParams.get('logindetails')
    console.log(this.logindetails )
    this.lastrecordVar = navParams.get('lastrecordVar') 
    console.log(this.lastrecordVar)

    this.installations = navParams.get('invoice')
    console.log("objects",this.installations)

        this.object = navParams.get('object')
        console.log("object",this.object)
   
        this.CraneName = this.object["0"].name

        this.viewcranePrice = this.object["0"].CranepriceFormated

          this.originalpriceraw = navParams.get("originalpriceraw")

          this.formatoriginalpriceraw = Number.parseFloat(this.originalpriceraw).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")

          console.log("format price ",this.formatoriginalpriceraw)

          this.vat = navParams.get("vat")

          this.vat = Number.parseFloat(this.vat).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")

          this.vatdisplay =  Number.parseFloat(this.vat).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")

          console.log("format vat",  Number.parseFloat(this.vatdisplay).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"))

          console.log("vat", Number.parseFloat(this.vat).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"))
         




          this.totalamount = navParams.get("totalamount")

          this.totalamount = Number.parseFloat(this.totalamount).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")

          this.totalpricedisplay = Number.parseFloat(this.totalamount).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")

          console.log("total price", Number.parseFloat(this.totalamount).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"))

          this.craneprice = navParams.get("craneprice")
     
          this.SubTotal = this.craneprice

          console.log("price",this.craneprice)

          this.cran = navParams.get("crane")
          console.log("crane",this.cran)

          this.viewQuot = navParams.get("viewQuote")

          this.objectformatprice =  this.viewQuot.price


        
          this.priceobjects = [{"subTotal": this.SubTotal,"Vat":this.vat,"Total":this.totalamount}]






          console.log("inside constructor view quote",this.viewQuot)

          this.description = this.viewQuot.description;
          this.total = this.total +this.viewQuot.price

          this.viewquoteTota = navParams.get("viewquoteTotal")
          console.log("whats happening ===>",Number.parseFloat(this.viewquoteTota).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"));

        console.log("====>",this.craneprice)

          this.sum =this.craneprice


          /////send email////
             this.pricedescription = navParams.get('pricedescription')
             console.log("crane object",this.pricedescription)

             this.date = navParams.get('date')
             console.log("date",this.date)


             this.ref = navParams.get('ref')
             console.log("ref",this.ref)

            

             this.emaildetails = navParams.get('emaildetails')
             console.log("invoice",this.emaildetails)


             this.totalcranechecked = navParams.get('totalcranechecked')
             console.log("invoice",this.totalcranechecked)

             this.newobject = navParams.get('newobject')
             console.log("invoice",this.newobject)

             this.new_price = navParams.get('new_price')
             console.log("new crane price",this.new_price)

             this.new_pricepiped =   Number.parseFloat(this.new_price).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")

               // this.convertedcurrenc =  Number.parseFloat(this.new_price).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")

 
  
  
  }



  emailQuote(){


    console.log("token view", this.token)

    var test = this.Api.getapiclients(this.token)
    console.log("token", test)


    // this.pricedescription = navParams.get('pricedescription')
    console.log("crane object",this.pricedescription)

    // this.date = navParams.get('date')
    console.log("date",this.date)


    // this.ref = navParams.get('ref')
    console.log("ref",this.ref)

    // this.invoice = navParams.get('invoice')
    console.log("invoice",this.invoice)

    // this.emaildetails = navParams.get('emaildetails')
    console.log("invoice",this.emaildetails)


    // this.totalcranechecked = navParams.get('totalcranechecked')
    console.log("invoice",this.totalcranechecked)

    // this.newobject = navParams.get('newobject')
    console.log("invoice",this.newobject)

    // this.new_price = navParams.get('new_price')
    console.log("new crane price",this.new_price)

    console.log("old crane price",this.formatoriginalpriceraw)

  


    const confirm = this.alertCtrl.create({
      title: 'Send Quote',
      message: 'Please select to send quote',
      buttons: [
        {
          text: 'Manual',
          handler: () => {

            this.navCtrl.push(SendemailPage, {

              // ref: this.ref,
              // date: this.date,
              // pricedescription: this.pricedescription,
              // invoice: this.invoice,
              // emaildetails: this.emaildetails,
              // craneprice: this.cranepricsend,
              // totalcranechecked: this.totalcranechecked,
              // vat: this.vat,
              // Totalpriceafter: this.Totalpriceafter,
              // newobject: this.newobject,
              // craneprice2: this.originalpriceraw,
              // totalprice: this.totalamount,
              // logindetails: this.logindetails,
              // lastrecordVar: this.lastrecordVar,


              //objects to be send 
              userlogindetails: this.logindetails,
              object: this.object,
              installations: this.installations,
              Amount: this.priceobjects


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



              console.log('Agree clicked');
              this.navCtrl.push(AutoPage, {

                // ref: this.ref,
                // date: this.date,
                // pricedescription: this.pricedescription,
                // invoice: this.invoice,
                // emaildetails: this.emaildetails,
                // craneprice: this.cranepricsend,
                // totalcranechecked: this.totalcranechecked,
                // vat: this.vat,
                // Totalpriceafter: this.Totalpriceafter,
                // newobject: this.newobject,
                // cranepr
                ice2: this.originalpriceraw,
                // totalprice: this.totalamount,
                // logindetails: this.logindetails,
                // lastrecordVar: this.lastrecordVar,

                //objects to be send 
                userlogindetails: this.logindetails,
                object: this.object,
                installations: this.installations,
                Amount: this.priceobjects

              })
              
            }, 3000);
          
        
 

            // console.log('Agree clicked');
            // this.navCtrl.push(AutoPage,{
              
            //   // ref: this.ref,
            //   // date: this.date,
            //   // pricedescription: this.pricedescription,
            //   // invoice: this.invoice,
            //   // emaildetails: this.emaildetails,
            //   // craneprice: this.cranepricsend,
            //   // totalcranechecked: this.totalcranechecked,
            //   // vat: this.vat,
            //   // Totalpriceafter: this.Totalpriceafter,
            //   // newobject: this.newobject,
            //   // craneprice2: this.originalpriceraw,
            //   // totalprice: this.totalamount,
            //   // logindetails: this.logindetails,
            //   // lastrecordVar: this.lastrecordVar,

            //   //objects to be send 
            //   userlogindetails: this.logindetails,
            //   object: this.object,
            //   installations: this.installations,
            //   Amount: this.priceobjects

            // })
          }
        }
      ]
    });
    confirm.present();
  





  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPage');
  }

}
