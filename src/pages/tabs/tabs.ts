import { Component } from '@angular/core';
import {NavController,App,NavParams} from 'ionic-angular';

import { HomePage } from '../home/home';
import {StockinPage} from '../stockin/stockin';
import {QuotesPage} from '../quotes/quotes';
import {LoginPage} from '../login/login';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {


  tab1Root:any
  tab2Root:any
  tab3Root:any


  constructor(public navParams: NavParams) {

   



  this.tab1Root = HomePage
  this.tab2Root = StockinPage;
  this.tab3Root = QuotesPage;

  }





}
