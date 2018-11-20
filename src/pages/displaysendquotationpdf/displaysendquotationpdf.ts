import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import {DomSanitizer} from '@angular/platform-browser';
// import {DomSanitizationService} from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';



@IonicPage()
@Component({
  selector: 'page-displaysendquotationpdf',
  templateUrl: 'displaysendquotationpdf.html',
})
export class DisplaysendquotationpdfPage {


  trustedURL:any;
  // static get parameters() {
  //          return [NavController, 
  //         DomSanitizationService];
  //   }

  displaypdf:any



  safeUrl:any

  display:any
  check:any

  constructor(public navCtrl: NavController, public navParams: NavParams, public sanitizer: DomSanitizer) {
 
    this.displaypdf = navParams.get('displaypdf')
    console.log(this.displaypdf )

    this.trustedURL  = this.sanitizer.bypassSecurityTrustResourceUrl(this.displaypdf)

    
  this.display  = this.displaypdf

  console.log("see", this.trustedURL.changingThisBreaksApplicationSecurity)


  this.check = this.trustedURL.changingThisBreaksApplicationSecurity


 
  }


  // photoURL() {
  //   return this.sanitizer.bypassSecurityTrustUrl(this.displaypdf);
  // }


//   public getSafeContent() {
  
//     return this.sanitizer.bypassSecurityTrustHtml(this.displaypdf);
// }


  ionViewDidLoad() {
    console.log('ionViewDidLoad DisplaysendquotationpdfPage');
  }

}
