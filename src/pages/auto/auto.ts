import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider} from '../../providers/api/api';
import { SendemailPage } from '../sendemail/sendemail';
import 'rxjs/add/operator/debounceTime';
import { SendemailaccessoriesPage } from '../sendemailaccessories/sendemailaccessories';

@IonicPage()
@Component({
  selector: 'page-auto',
  templateUrl: 'auto.html',
})
export class AutoPage {

  searchTerm: string = '';
  items: any;




  sendemailData: any

  emaildetails: any


  //objects to be send 
  userlogindetails: any
  object: any
  installations: any
  Amount: any


  // object:any
    Accessories:any
  // installations: any
  sumtotal: any
  vat: any
  subTotal: any
  finalTotal: any
  accessoriesCondion: any



  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: ApiProvider) {

    this.accessoriesCondion = navParams.get('accessoriesCondion')

    console.log("ac", this.accessoriesCondion)
    if (this.accessoriesCondion === "true"){
 


    this.object = navParams.get('object')
    this.Accessories = navParams.get('Accessories')
    this.installations = navParams.get('installations')
    this.sumtotal = navParams.get('sumtotal')
    this.vat = navParams.get('vat')
    this.subTotal = navParams.get('subTotal')
    this.finalTotal = navParams.get('finalTotal')

      this.accessoriesCondion = navParams.get('accessoriesCondion')

  }
  else{

      console.log("accessories error")

      this.userlogindetails = navParams.get('userlogindetails')
      console.log("1", this.userlogindetails)

      this.object = navParams.get('object')
      console.log("2", this.object)

      this.installations = navParams.get('installations')
      console.log("3", this.installations)

      this.Amount = navParams.get('Amount')
      console.log("4", this.Amount)

  }
 



  }


  ionViewDidLoad() {

    this.setFilteredItems();

  }


  setFilteredItems() {

    this.items = this.dataService.filterItems(this.searchTerm);

    console.log("", this.items)

  }



  add(item){

    var auto = "true"  

    if (this.accessoriesCondion === "true"){

      console.log("acc1", this.object)

      console.log("acc2", this.Accessories)

      console.log("acc2", this.installations)

      console.log("send with accessories")

      this.navCtrl.push(SendemailaccessoriesPage, {

        object: this.object,
        Accessories: this.Accessories,
        installations: this.installations,
        sumtotal: this.sumtotal,
        vat: this.vat,
        subTotal: this.subTotal,
        finalTotal: this.finalTotal,
        auto: auto,
        business: item,

      })
   

    }else{


      console.log("send")

      this.navCtrl.push(SendemailPage, {

        //objects to be send 
        // userlogindetails: this.logindetails,
        object: this.object,
        installations: this.installations,
        Amount: this.Amount,
        auto: auto,
        business: item



      })


    }


   


   

   



    console.log("ff", item)


  }






}
