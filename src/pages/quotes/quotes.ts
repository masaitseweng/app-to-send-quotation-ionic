import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ApiProvider} from '../../providers/api/api';
import{DisplayquotespdfPage} from '../displayquotespdf/displayquotespdf';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {

  displayQuotes:any
  token:any
  quotedetails:any

  constructor(public navCtrl: NavController, public navParams: NavParams, public Api: ApiProvider, public storage: Storage) {
 
  }


  ionViewDidLoad() {

  }

  ionViewDidEnter(){

    //local storage
    console.log("Enter")

    this.storage.ready();

    this.storage.get('token-to-send-quote').then((token) => {

      this.token = token
      this.Api.getownQuotes(this.token).subscribe(DATA => {

        this.displayQuotes = DATA
        console.log("", this.displayQuotes.ownquotes)
        this.quotedetails = this.displayQuotes.ownquotes


      })
    })

    console.log("tokken", this.token)

  



  }

  viewquote(quotedetails) {

    console.log("token", this.token )

    console.log("dis", quotedetails)

    this.navCtrl.push(DisplayquotespdfPage, {
      viewquote: quotedetails,
      token: this.token
    })


  }

}
