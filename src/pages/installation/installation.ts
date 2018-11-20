import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {ApiProvider} from '../../providers/api/api';
import {CheckoutPage} from '../checkout/checkout';
import {AddaccessoriesPage} from '../addaccessories/addaccessories';



@IonicPage()
@Component({
  selector: 'page-installation',
  templateUrl: 'installation.html',
})
export class InstallationPage {

  object:any

 installations:any
 totalone:any = 0
 total:any =0
 Texttotaltovat:any = 0
 pricedesc = [];
 price :any;
 calculatevat : any =0;
 vatamount :any = 0;
 displayprice : any = 0;
 totalpriceunchecked :any =0
 InstallationItem:any;
 sumcrane :any =[]


 ///not pushed yet

 date:any = "22/06/2018"
 ref:any = "06/07/2019/mm"


 //

 vatcranes :any = []
 new_raw_price:any
 totalcranes : any = []


 //check this view variables
 view:any


 ///
 cranepriceobject : any =[]
 inputuser ={};
 newobject :any =[];
 /////

 logindetails = [{"Initials":"MM","Password":"1","Sales_Email":"1","Sales_name":"MASA","contact_No":"082 317 2935","login_id":"1","ref":"0"},]

 lastrecordVar = []
  

  constructor(public navCtrl: NavController, public navParams: NavParams,public Api:ApiProvider,private alertCtrl: AlertController) {
 
    this.object = navParams.get('object')
    console.log("installation",this.object)

    this.price =     Number.parseFloat(this.object["0"].RawCranePrice).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")





    this.Api.getinstallation(this.object["0"].id).subscribe(DATA =>{

      console.log("installation",DATA)
      this.installations = DATA.data
    })

  }



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


select(installation,position: string,price:any,RawCranePrice :any,installationprice:any,InstallationItem:any,index){



console.log("objects",installation)



  if(installation.checked === true){



   this.totalone = this.totalone + Number.parseFloat(installation.zar_amount)



  console.log("passed to object see results",installation.zar_amount)
  console.log("passed to object see results",  this.object["0"].RawCranePrice)
  console.log("passed to object see results",this.totalone)
  // var rawprice =  this.object["0"].RawCranePrice

  // console.log("p",this.price)

    this.total  =  this.object["0"].RawCranePrice +  this.totalone



    this.Texttotaltovat = this.total

    console.log( "hee", this.total)
    console.log(this.Texttotaltovat)



      this.pricedesc.push(installation);

      console.log("hello",this.pricedesc)
   
      console.log("row price please work", this.object["0"].RawCranePrice)



    console.log("after remove price what is the total now", this.total)





      this.price  =   Number.parseFloat(this.Texttotaltovat).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")







      this.calculatevat =  this.Texttotaltovat * 1.15;

      this.vatamount  =   this.calculatevat - this.Texttotaltovat


   this.displayprice = 100.00+ Number.parseFloat(this.Texttotaltovat).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");



  }
  else{



        console.log("object===>",this.pricedesc)



    this.pricedesc.forEach((item, indexer) => {

      console.log("price",item.price)

          console.log("origial price now",this.total)

      if(item.id == installation.id){

        
          this.price =   Number.parseFloat( this.object["0"].RawCranePrice  ).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
          console.log(installation.zar_amount)
          console.log(item.price)


          this.total  = this.total- installation.zar_amount
      
          //you dont have a value here 
          this.totalone = this.totalone - Number.parseFloat(installation.zar_amount)
          this.price  =   Number.parseFloat(this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
          console.log(this.total)
          console.log("Items",item);
          console.log("Index",indexer);
          console.log("removed item===>1111",this.pricedesc)
          this.pricedesc.splice(indexer,1)
          console.log("removed item===>",this.pricedesc)

          this.totalpriceunchecked = this.total - item.price -  this.price

          console.log("====>new",this.totalpriceunchecked)



      }


});



  }
}


AddInstallation(InstallationItem:any){




  console.log("vat Total amount", Number.parseFloat(this.calculatevat).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"));
  console.log("vat",  Number.parseFloat(this.vatamount).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"))
  console.log("crane price quote",this.price)
  console.log("objects",this.InstallationItem)
  console.log("raw price crane push to Quote",this.object["0"].RawCranePrice);
  // let inputuser:any={};
  console.log("hello price",Number.parseFloat(this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"))


      // console.log("total price quote",this.calculatevat)

      console.log("date is",this.date)

      console.log("ref",this.ref)
      console.log("total price quote",this.calculatevat)
      this.sumcrane.push(Number.parseFloat(this.calculatevat ).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"))
      console.log("total price",this.sumcrane)
      console.log("vat",this.vatamount)
      this.vatcranes.push(Number.parseFloat(this.vatamount).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"))
      console.log("vat 2",this.vatcranes)
      console.log("total crane price checked ", this.total)
      //new raw price accessories
      this.new_raw_price =this.total

      this.totalcranes.push(Number.parseFloat(this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"))
      console.log("array total checked",  this.totalcranes)
      console.log("installation price raw 2 quote",this.object["0"].RawCranePrice )
      console.log("crane object",this.InstallationItem)
      console.log("check items",this.pricedesc)
      console.log("pushed object",this.pricedesc)

      Number.parseFloat(this.total ).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")






  console.log("access values outside storage",this.view)

  //
  // console.log("accessories objects",this.accessoriesobjects)
  //
  // this.storage.set('accessories',this.accessoriesobjects)




  let confirm = this.alertCtrl.create({
    message: 'Would you like to add accessories to this quote?',
    buttons: [
      {
        text: 'Yes',



        handler: () => {

          if (this.pricedesc.length === 0){
            console.log("ok", this.object[0].RawCranePrice)

        this.navCtrl.push(AddaccessoriesPage,{

        ////viewquote send to quote this object working////
        condition:"accessories",
          vatview:this.vatamount,
          totalamountview:this.calculatevat,
          originalpricerawview:this.object["0"].RawCranePrice,
          viewQuoteview:this.pricedesc,
          cranepriceview:this.price,
          craneview :this.InstallationItem,
          viewquoteTotalview:this.calculatevat,
          logindetails:this.logindetails,     
          lastrecordVar:this.lastrecordVar,

          //////////////////////////////send quote  send quote///////
              object:this.object,
              ref:this.ref,
              date:this.date,
              pricedescription:this.InstallationItem,
              invoice:this.pricedesc,
              emaildetails:this.inputuser,
              cranepricsend:this.cranepriceobject,
              totalcranechecked:this.totalcranes,
              vatsend:this.vatcranes,
              Totalpriceafter:this.sumcrane,
              newobject:this.newobject,
             new_price: this.object[0].RawCranePrice,
              ///accessories new raw pricedesc
              newrawpriceaccessories:this.new_raw_price



        })
          }
          else{


        this.navCtrl.push(AddaccessoriesPage,{

        ////viewquote send to quote this object working////
        condition:"accessories",
          vatview:this.vatamount,
          totalamountview:this.calculatevat,
          originalpricerawview:this.object["0"].RawCranePrice,
          viewQuoteview:this.pricedesc,
          cranepriceview:this.price,
          craneview :this.InstallationItem,
          viewquoteTotalview:this.calculatevat,
          logindetails:this.logindetails,     
          lastrecordVar:this.lastrecordVar,

          //////////////////////////////send quote  send quote///////
              object:this.object,
              ref:this.ref,
              date:this.date,
              pricedescription:this.InstallationItem,
              invoice:this.pricedesc,
              emaildetails:this.inputuser,
              cranepricsend:this.cranepriceobject,
              totalcranechecked:this.totalcranes,
              vatsend:this.vatcranes,
              Totalpriceafter:this.sumcrane,
              newobject:this.newobject,
              new_price:this.total,
              ///accessories new raw pricedesc
              newrawpriceaccessories:this.new_raw_price



        })

          }


          // console.log('Disagree clicked');

        }
      },
      {
        text: 'No',
        handler: () => {

        this.navCtrl.push(CheckoutPage,{


///////////////////////////////////////view quote ia m not sure about this object/////////
          // craneprice:this.rawCurrency,
          condition:"installation",
          vat:this.vatamount,
          totalamount:this.calculatevat,
          originalpriceraw:this.object["0"].RawCranePrice,
          viewQuote:this.pricedesc,
          craneprice:this.object["0"].RawCranePrice,
          crane :this.InstallationItem,
          viewquoteTotal:this.total,
          logindetails:this.logindetails,     
          lastrecordVar:this.lastrecordVar,

//////////////////////////////send quote  send quote///////
          object:this.object,
          ref:this.ref,
          date:this.date,
          pricedescription:this.InstallationItem,
          invoice:this.pricedesc,
          emaildetails:this.inputuser,
          cranepricsend:this.cranepriceobject,
          totalcranechecked:this.totalcranes,
          vatsend:this.vatcranes,
          Totalpriceafter:this.sumcrane,
          newobject:this.newobject,
          new_price:this.total,

          ////viewquote send to quote this object working////

          vatview:this.vatamount,
          totalamountview:this.calculatevat,
          originalpricerawview:this.object["0"].RawCranePrice,
          viewQuoteview:this.pricedesc,
          cranepriceview:this.price,
          craneview :this.InstallationItem,
          viewquoteTotalview:this.calculatevat,



        })

          console.log('Agree clicked');
        }
      }
    ]
  });
  confirm.present();

}
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad InstallationPage');
  }

}
