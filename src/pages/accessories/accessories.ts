import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ApiProvider} from '../../providers/api/api';
import {SubaccessoriesPage} from '../subaccessories/subaccessories';

@IonicPage()
@Component({
  selector: 'page-accessories',
  templateUrl: 'accessories.html',
})
export class AccessoriesPage {

  object:any
  installation:any
  new_price:any
  accessories:any
  Accessories:any


  constructor(public navCtrl: NavController, public navParams: NavParams,public Api:ApiProvider) {
  
      this.object = navParams.get('object')
      console.log("ob",this.object)
      this.installation = navParams.get('installation')
      console.log("in",this.installation)
      this.new_price = navParams.get('new_price')
      console.log("price",this.new_price)
     
      this.Accessories = navParams.get('Accessories')
      console.log("another accessories added",this.Accessories)

    
      this.Api.getaccessories().subscribe(DATA =>{
        this.accessories = DATA
        console.log(this.accessories.menus)

        this.accessories = this.accessories.menus

        
      })
 
  }

  

  subaccessories(accessory){

    this.navCtrl.push(SubaccessoriesPage,{
    subaccessories:accessory,
    object:this.object,
    installation :this.installation,
    new_price :this.new_price,
    Accessories:this.Accessories      
      
    })
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad AccessoriesPage');
  }

}
