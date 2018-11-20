import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AccessoriesPage} from '../accessories/accessories';


@IonicPage()
@Component({
  selector: 'page-addaccessories',
  templateUrl: 'addaccessories.html',
})
export class AddaccessoriesPage {

  object:any
  installation:any
  new_price:any
  name:any
  picture:any
  new_price_formated:any

  imgPath = "http://liftshiftapp.co.za/"

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
    this.object = navParams.get('object')
    console.log("object 1",this.object)

    this.name = this.object[0].name
    this.picture = this.imgPath + this.object[0].img

    this.installation = navParams.get('invoice')
    console.log("object 2",this.installation)
    this.new_price = navParams.get('new_price')

    console.log("object 3",this.new_price)

    this.new_price_formated =   Number.parseFloat (this.new_price).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")

   

  
  }

  accessories(){

    this.navCtrl.push(AccessoriesPage,{
      object:this.object,
      installation:this.installation,
      new_price:this.new_price

    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddaccessoriesPage');
  }

}
