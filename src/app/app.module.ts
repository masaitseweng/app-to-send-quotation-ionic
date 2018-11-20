import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import { ApiProvider } from '../providers/api/api';


import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import {MenuPage} from '../pages/menu/menu';
import {MenuitemsPage} from '../pages/menuitems/menuitems';
import {ProductPage} from '../pages/product/product';
import {ProductdescriptionPage} from '../pages/productdescription/productdescription';
import {CalculateproductPage} from '../pages/calculateproduct/calculateproduct';
import {InstallationPage} from '../pages/installation/installation';
import {CheckoutPage} from '../pages/checkout/checkout';
import {AccessoriesPage} from '../pages/accessories/accessories';
import {SendemailPage} from '../pages/sendemail/sendemail';
import {ViewPage} from '../pages/view/view';
import {SendemailwithquotePage} from '../pages/sendemailwithquote/sendemailwithquote';
import {AddaccessoriesPage} from '../pages/addaccessories/addaccessories';
import {SubaccessoriesPage} from '../pages/subaccessories/subaccessories';
import {ViewaccessoriesPage} from '../pages/viewaccessories/viewaccessories';
import {SendemailaccessoriesPage} from '../pages/sendemailaccessories/sendemailaccessories';
import {CheckoutaccessoriesPage} from '../pages/checkoutaccessories/checkoutaccessories'
import {TabsPage} from '../pages/tabs/tabs';
import {StockinPage} from '../pages/stockin/stockin';
import {QuotesPage} from '../pages/quotes/quotes';
import {DisplayquotespdfPage} from '../pages/displayquotespdf/displayquotespdf';
import {DisplaysendquotationpdfPage} from '../pages/displaysendquotationpdf/displaysendquotationpdf';
import {CranebrandPage} from '../pages/cranebrand/cranebrand';
import { IonicStorageModule} from '@ionic/storage';
import {RemembermePage} from '../pages/rememberme/rememberme';
import { AutoPage} from '../pages/auto/auto';
import { AutoCompleteModule } from 'ionic2-auto-complete';
import { Storage } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    MenuPage,
    MenuitemsPage,
    ProductPage,
    ProductdescriptionPage,
    CalculateproductPage,
    InstallationPage,
    CheckoutPage,
    AccessoriesPage,
    SendemailPage,
    ViewPage,
    SendemailwithquotePage,
    AddaccessoriesPage,
    SubaccessoriesPage,
    ViewaccessoriesPage,
    SendemailaccessoriesPage,
    CheckoutaccessoriesPage,
    StockinPage,
    QuotesPage,
    DisplayquotespdfPage,
    DisplaysendquotationpdfPage,
    CranebrandPage,
    RemembermePage,
    AutoPage,    




    TabsPage
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AutoCompleteModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    MenuPage,
    MenuitemsPage,
    ProductPage,
    ProductdescriptionPage,
    CalculateproductPage,
    InstallationPage,
    CheckoutPage,
    AccessoriesPage,
    SendemailPage,
    ViewPage,
    SendemailwithquotePage,
    AddaccessoriesPage,
    SubaccessoriesPage,
    ViewaccessoriesPage,
    SendemailaccessoriesPage,
    CheckoutaccessoriesPage,
    StockinPage,
    QuotesPage,
    DisplayquotespdfPage,
    DisplaysendquotationpdfPage,
    CranebrandPage,
    RemembermePage,
    AutoPage,


    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    
   

    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider
  ]
})
export class AppModule {}
