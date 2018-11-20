import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ApiProvider} from '../../providers/api/api';
import {DisplaysendquotationpdfPage} from '../displaysendquotationpdf/displaysendquotationpdf';

@IonicPage()
@Component({
  selector: 'page-displayquotespdf',
  templateUrl: 'displayquotespdf.html',
})
export class DisplayquotespdfPage {

  viewquote:any
  viewQuoteDATA:any
  token:any
  conditiondiscount:any
  discount:any


  constructor(public navCtrl: NavController, public navParams: NavParams,public Api:ApiProvider) {
    
    this.token = navParams.get('token') 
    console.log("token", this.token)

    //view quote ID
    this.viewquote = navParams.get('viewquote')
    console.log('g',this.viewquote.id)

    // //view quote API
    this.Api.getviewquote(this.viewquote.id,this.token).subscribe(DATA =>{
      this.viewQuoteDATA = DATA
      console.log("",this.viewQuoteDATA.quote)



     this.conditiondiscount = this.viewQuoteDATA.quote
     console.log("con",this.conditiondiscount)

     //condition from the view
     this.discount = this.conditiondiscount.discount_path


        

    })

  }


  Quotation(){

    console.log(this.conditiondiscount.quote_path )
    console.log("display pdf")
    this.navCtrl.push(DisplaysendquotationpdfPage,{

      displaypdf:this.conditiondiscount.quote_path
      
    })
  }

  dealerdiscount(){

  

    console.log(this.conditiondiscount.discount_path )
    console.log("display pdf")
    this.navCtrl.push(DisplaysendquotationpdfPage,{

      displaypdf:this.conditiondiscount.discount_path
      
    })

  }

  Brochure(){

    console.log(this.conditiondiscount.bronchure_path
    )
    console.log("display pdf")

    this.navCtrl.push(DisplaysendquotationpdfPage,{
      displaypdf:this.conditiondiscount.bronchure_path

      
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DisplayquotespdfPage');
  }

}
