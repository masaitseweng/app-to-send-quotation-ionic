webpackJsonp([26],{

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stockin_stockin__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__quotes_quotes__ = __webpack_require__(172);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage(navParams) {
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__stockin_stockin__["a" /* StockinPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__quotes_quotes__["a" /* QuotesPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/rcm15/Documents/applord project/liftandshiftapp/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  \n    <ion-tab [root]="tab1Root" tabTitle="Home"   tabIcon="home"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="Stock In" tabIcon="checkmark-circle-outline"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Quotes"  tabIcon="pricetags"></ion-tab>\n  \n  </ion-tabs>\n  '/*ion-inline-end:"/Users/rcm15/Documents/applord project/liftandshiftapp/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubaccessoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checkoutaccessories_checkoutaccessories__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__viewaccessories_viewaccessories__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__accessories_accessories__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SubaccessoriesPage = /** @class */ (function () {
    function SubaccessoriesPage(navCtrl, navParams, Api, alertCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Api = Api;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.newprice = 0;
        this.shipping = 1.12;
        this.landed = 1.45;
        this.calculatevat = 0;
        this.vatamount = 0;
        ////function variables
        this.varobject = [];
        this.Zar_amount = 0;
        this.newzar_amount = 0;
        this.subaccessories = navParams.get('subaccessories');
        console.log(this.subaccessories);
        this.object = navParams.get('object');
        console.log(this.object);
        this.installation = navParams.get('installation');
        console.log(this.installation);
        this.new_price = navParams.get('new_price');
        console.log(this.new_price);
        this.Accessories = navParams.get('Accessories');
        console.log("sec accessories been added", this.Accessories);
        console.log("this.subaccessories.order", this.subaccessories.id);
        this.Api.getproducts(this.subaccessories.id).subscribe(function (DATA) {
            _this.displayaccessories = DATA;
            console.log("display", _this.displayaccessories);
            _this.displaysubaccessories = _this.displayaccessories.data;
            console.log("this.subaccessories", _this.displaysubaccessories);
            _this.new_price_formated =
                Number.parseFloat(_this.new_price).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
        });
    }
    SubaccessoriesPage.prototype.checkedAccessories = function (subaccessory, index) {
        var _this = this;
        console.log("clicked object", subaccessory);
        if (subaccessory.checked === true) {
            if (subaccessory.eur_amount !== 0) {
                console.log("euro convert");
                // llkhj
                this.Api.getEuro().subscribe(function (EuroDATA) {
                    _this.EuroVar = EuroDATA;
                    console.log("euro currency", _this.EuroVar);
                    console.log("south africa", _this.EuroVar.rates.ZAR);
                    subaccessory.zar_amount = Number.parseFloat(subaccessory.eur_amount)
                        * _this.EuroVar.rates.ZAR;
                    console.log("crane price==>", subaccessory.zar_amount);
                    subaccessory.zar_amount = subaccessory.zar_amount * _this.shipping;
                    subaccessory.zar_amount = subaccessory.zar_amount * _this.landed;
                    _this.newprice = _this.newprice +
                        Number.parseFloat(subaccessory.zar_amount);
                    console.log("testing==>", _this.newprice);
                    _this.accesso_price = Number.parseFloat(_this.new_price) +
                        Number.parseFloat(_this.newprice);
                    console.log("new price total", _this.accesso_price);
                    _this.new_price_formated =
                        Number.parseFloat(_this.accesso_price).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
                    console.log("what is this", _this.new_price_formated);
                    _this.calculatevat = _this.accesso_price * 1.14;
                    console.log(_this.calculatevat);
                    _this.vatamount = _this.calculatevat - _this.accesso_price;
                    console.log(_this.vatamount);
                    var results = _this.vatamount + _this.new_price_formated;
                    console.log("total", results);
                    _this.totalpricewithvat = _this.accesso_price + results;
                    console.log("total price with vat", _this.totalpricewithvat);
                    console.log("original object", _this.varobject);
                    if (_this.Accessories != undefined) {
                        _this.Accessories.push(subaccessory);
                        console.log("another accessories added==>", _this.Accessories);
                    }
                    else {
                        _this.varobject.push(subaccessory);
                        console.log("checked===>", _this.varobject);
                    }
                    _this.storage.set('accessories', _this.varobject).then(function () {
                        console.log("accessories set");
                    });
                });
            }
            else if (subaccessory.zar_amount !== 0) {
                console.log("zar convert");
                this.newprice = this.newprice +
                    Number.parseFloat(subaccessory.zar_amount);
                console.log("testing==>", this.newprice);
                this.accesso_price = Number.parseFloat(this.new_price) +
                    Number.parseFloat(this.newprice);
                console.log("new price total", this.accesso_price);
                this.new_price_formated =
                    Number.parseFloat(this.accesso_price).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
                console.log("what is this", this.new_price_formated);
                this.calculatevat = this.accesso_price * 1.14;
                console.log(this.calculatevat);
                this.vatamount = this.calculatevat - this.accesso_price;
                console.log(this.vatamount);
                var results = this.vatamount + this.new_price_formated;
                console.log("total", results);
                this.totalpricewithvat = this.accesso_price + results;
                console.log("total price", this.totalpricewithvat);
                //added item
                if (this.Accessories != undefined) {
                    this.Accessories.push(subaccessory);
                    console.log("another accessories added", this.Accessories);
                }
                else {
                    this.varobject.push(subaccessory);
                    console.log("checked===>", this.varobject);
                }
            }
            else {
                console.log("error");
            }
        }
        else {
            console.log("total before removing", this.accesso_price);
            console.log("total before removing", this.newprice);
            console.log("what is this price raw crane price", this.new_price);
            console.log("price crane", subaccessory.zar_amount);
            console.log("original array", this.varobject);
            console.log("another array with objects", this.Accessories);
            if (this.varobject.length != 0) {
                this.varobject.forEach(function (item, indexer) {
                    console.log("inside remove items=====2");
                    console.log("item", item);
                    console.log("index", indexer);
                    if (item.id == subaccessory.id) {
                        console.log("original", _this.varobject);
                        _this.varobject.splice(indexer, 1);
                        console.log("removed", _this.varobject);
                        _this.accesso_price = _this.accesso_price - subaccessory.zar_amount;
                        _this.newprice = _this.newprice - Number.parseFloat(subaccessory.zar_amount);
                        _this.new_price_formated = Number.parseFloat(_this.accesso_price).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
                    }
                });
            }
            else {
                this.Accessories.forEach(function (item, indexer) {
                    console.log("inside remove items=====2");
                    console.log("item", item);
                    console.log("index", indexer);
                    if (item.id == subaccessory.id) {
                        console.log("added array", _this.Accessories);
                        _this.Accessories.splice(indexer, 1);
                        console.log("removed =1", _this.Accessories);
                        _this.accesso_price = _this.accesso_price - subaccessory.zar_amount;
                        _this.newprice = _this.newprice - Number.parseFloat(subaccessory.zar_amount);
                        _this.new_price_formated = Number.parseFloat(_this.accesso_price).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
                    }
                });
            }
        }
    };
    SubaccessoriesPage.prototype.showConfirm = function () {
        var _this = this;
        if (this.Accessories != undefined) {
            console.log("display", this.accesso_price);
            var confirm_1 = this.alertCtrl.create({
                title: 'Proceed To View Quote',
                message: '',
                buttons: [
                    {
                        text: 'ok',
                        handler: function () {
                            if (_this.installation.length == 0) {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__viewaccessories_viewaccessories__["a" /* ViewaccessoriesPage */], {
                                    object: _this.object,
                                    Accessories: _this.Accessories,
                                    installation: _this.installation,
                                    ////sum total
                                    sumtotal: _this.accesso_price,
                                    vat: _this.vatamount,
                                    finalTotal: _this.calculatevat,
                                });
                            }
                            else {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__checkoutaccessories_checkoutaccessories__["a" /* CheckoutaccessoriesPage */], {
                                    object: _this.object,
                                    Accessories: _this.Accessories,
                                    installation: _this.installation,
                                    ////sum total
                                    sumtotal: _this.accesso_price,
                                    vat: _this.vatamount,
                                    finalTotal: _this.calculatevat,
                                });
                            }
                            console.log('Agree clicked');
                        }
                    }
                ]
            });
            confirm_1.present();
        }
        else {
            console.log("display", this.accesso_price);
            var confirm_2 = this.alertCtrl.create({
                title: 'Proceed To View Quote',
                message: '',
                buttons: [
                    {
                        text: 'ok',
                        handler: function () {
                            if (_this.installation.length == 0) {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__viewaccessories_viewaccessories__["a" /* ViewaccessoriesPage */], {
                                    object: _this.object,
                                    Accessories: _this.varobject,
                                    installation: _this.installation,
                                    ////sum total
                                    sumtotal: _this.accesso_price,
                                    vat: _this.vatamount,
                                    finalTotal: _this.calculatevat,
                                });
                            }
                            else {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__checkoutaccessories_checkoutaccessories__["a" /* CheckoutaccessoriesPage */], {
                                    object: _this.object,
                                    Accessories: _this.varobject,
                                    installation: _this.installation,
                                    ////sum total
                                    sumtotal: _this.accesso_price,
                                    vat: _this.vatamount,
                                    finalTotal: _this.calculatevat,
                                });
                            }
                            console.log('Agree clicked');
                        }
                    }
                ]
            });
            confirm_2.present();
        }
    };
    SubaccessoriesPage.prototype.addanotheraccessories = function () {
        if (this.Accessories != undefined) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__accessories_accessories__["a" /* AccessoriesPage */], {
                object: this.object,
                installation: this.installation,
                ////sum total
                new_price: this.accesso_price,
                Accessories: this.Accessories,
            });
            console.log("not undefined", this.Accessories);
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__accessories_accessories__["a" /* AccessoriesPage */], {
                object: this.object,
                installation: this.installation,
                ////sum total
                new_price: this.accesso_price,
                Accessories: this.varobject,
            });
            console.log("undefined", this.varobject);
        }
        console.log();
        // this.storage.get('accessories').then((name) => {
        //   console.log('Name: ' + name);
        // });
        // console.log("hello",this.varobject)
        // this.navCtrl.push(AccessoriesPage,{
        //   object:this.object,
        //   installation:this.installation,
        //   ////sum total
        //   new_price:this.accesso_price,
        //   Accessories:this.Accessories,
        // })
    };
    SubaccessoriesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SubaccessoriesPage');
    };
    SubaccessoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-subaccessories',template:/*ion-inline-start:"/Users/rcm15/Documents/applord project/liftandshiftapp/src/pages/subaccessories/subaccessories.html"*/'\n<ion-header style="background-color:#d1d1d1">\n\n  <ion-navbar >\n    <ion-title></ion-title>\n  </ion-navbar>\n\n  <button ion-button block color="danger" style="font-size: bold;font-size:30px;color:white" clear >\n       <!-- <ion-icon name=\'send\'></ion-icon> -->\n      R {{new_price_formated}}\n  </button>\n\n</ion-header>\n\n\n<ion-content >\n\n  <ion-list text-wrap>\n\n     <ion-item  *ngFor="let subaccessory of displaysubaccessories;let i = index" >\n        <ion-label>{{subaccessory.name}} </ion-label>\n        <ion-checkbox color="danger" checked="false" [(ngModel)]="subaccessory.checked" (ionChange)="checkedAccessories(subaccessory,i)"></ion-checkbox>\n      </ion-item>\n\n        <button ion-button block color="danger" (click)="showConfirm()"> Add To Quote</button>\n        <button ion-button block color="danger" (click)="addanotheraccessories()">Add another accessories</button>\n\n\n   </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/rcm15/Documents/applord project/liftandshiftapp/src/pages/subaccessories/subaccessories.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
    ], SubaccessoriesPage);
    return SubaccessoriesPage;
}());

//# sourceMappingURL=subaccessories.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutaccessoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewaccessories_viewaccessories__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CheckoutaccessoriesPage = /** @class */ (function () {
    function CheckoutaccessoriesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imgPath = "http://liftshiftapp.co.za/";
        this.installation = navParams.get('installation');
        console.log("1", this.installation);
        this.object = navParams.get('object');
        console.log("1", this.object);
        this.name = this.object[0].name;
        this.img = this.imgPath + this.object["0"].img;
        this.Accessories = navParams.get('Accessories');
        console.log("2", this.Accessories);
        this.sumtotal = navParams.get('sumtotal');
        console.log("hello", this.sumtotal);
        this.price = Number.parseFloat(this.sumtotal).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
        console.log("3", this.sumtotal);
        this.vat = navParams.get('vat');
        console.log("4", this.vat);
        this.finalTotal = navParams.get('finalTotal');
        console.log("5", this.finalTotal);
    }
    CheckoutaccessoriesPage.prototype.viewQuote = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__viewaccessories_viewaccessories__["a" /* ViewaccessoriesPage */], {
            object: this.object,
            Accessories: this.Accessories,
            installation: this.installation,
            sumtotal: this.sumtotal,
            vat: this.vat,
            finalTotal: this.finalTotal
        });
    };
    CheckoutaccessoriesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CheckoutaccessoriesPage');
    };
    CheckoutaccessoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-checkoutaccessories',template:/*ion-inline-start:"/Users/rcm15/Documents/applord project/liftandshiftapp/src/pages/checkoutaccessories/checkoutaccessories.html"*/'\n<ion-header  style="background-color:#d1d1d1">\n\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n  <button  ion-button block color="danger" style="font-size: bold;font-size:30px;color:white" clear (click)="search()">\n       <!-- <ion-icon name=\'send\'></ion-icon> -->\n      R {{price}}\n  </button>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <h1  style="text-align:center">{{name}}</h1>\n\n  <!-- <h1 style="text-align:center">R{{sum}}</h1> -->\n\n  <img  src="{{img}}">\n\n\n\n  <button ion-button block (click)="viewQuote()">\n      <ion-icon name=\'eye\'></ion-icon> \n     View Quote   \n  </button>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/rcm15/Documents/applord project/liftandshiftapp/src/pages/checkoutaccessories/checkoutaccessories.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CheckoutaccessoriesPage);
    return CheckoutaccessoriesPage;
}());

//# sourceMappingURL=checkoutaccessories.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menuitems_menuitems__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__accessories_accessories__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, navParams, Api) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Api = Api;
        this.installation = [];
        this.new_price = 0;
        this.object = [];
        this.prodcut = navParams.get('prodcut');
        console.log("ID", this.prodcut);
        this.Api.getmenuItems(this.prodcut).subscribe(function (DATA) {
            _this.test = DATA;
            console.log("menu items", _this.test.menus);
            _this.items = _this.test.menus;
        });
    }
    MenuPage.prototype.menuitems = function (item) {
        var _this = this;
        console.log("navigate same page", item.id);
        if (item.description == "quote_type") {
            this.object = [{ "CranepriceFormated": "", "Quote_type": "", "RawCranePrice": "", "discount_percentage": "", "id": "", "img": "", "name": "", "quote_type": item.name }];
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__accessories_accessories__["a" /* AccessoriesPage */], {
                object: this.object,
                installation: this.installation,
                new_price: this.new_price
            });
            console.log("accessories", item);
            console.log("accessories", item.name);
        }
        else if (item.childrencount != 0 && item.description != "quote_type") {
            console.log("navigate same page", item.id);
            this.Api.getmenuItems(item.id).subscribe(function (DATA) {
                _this.test = DATA;
                console.log("menu items", _this.test.menus);
                _this.items = _this.test.menus;
            });
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__menuitems_menuitems__["a" /* MenuitemsPage */], {
                item: item.id
            });
        }
    };
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPage');
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"/Users/rcm15/Documents/applord project/liftandshiftapp/src/pages/menu/menu.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="card-background-page">\n\n\n\n\n  <img   src="assets/imgs/logo.jpg">\n\n\n  <ion-searchbar  style="background-color:red" placeholder="search by name" [(ngModel)]="searchTerm" (ionInput)="setFilteredItems()"></ion-searchbar>\n\n<br>\n  <div>\n\n  </div>\n  <ion-card class="ion-card" *ngFor="let item of items" (click)="menuitems(item)">\n    <div class="card-title">{{item.name}}</div>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/rcm15/Documents/applord project/liftandshiftapp/src/pages/menu/menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__productdescription_productdescription__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductPage = /** @class */ (function () {
    function ProductPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imgPath = "http://liftshiftapp.co.za/";
        //object from menuitems page
        this.object = navParams.get('object');
        console.log("inside", this.object);
        //display this variables to the view
        this.name = this.object["0"].name;
        this.picture = this.imgPath + this.object["0"].img;
    }
    ProductPage.prototype.LiftandShift = function () {
        console.log("inside", this.object);
        this.productobject = [{ "id": this.object["0"].id, "img": this.object["0"].img, "name": this.object["0"].name, "currency": this.object["0"].currency, "price": this.object["0"].price, "quote_type": "LiftandShift" }];
        console.log("lift");
        //navigate to another page with this productobject
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__productdescription_productdescription__["a" /* ProductdescriptionPage */], {
            object: this.productobject
        });
    };
    ProductPage.prototype.Multicranes = function () {
        this.productobject = [{ "id": this.object["0"].id, "img": this.object["0"].img, "name": this.object["0"].name, "currency": this.object["0"].currency, "price": this.object["0"].price, "quote_type": "Multicranes" }];
        //navigate to another page with this productobject
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__productdescription_productdescription__["a" /* ProductdescriptionPage */], {
            object: this.productobject
        });
    };
    ProductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductPage');
    };
    ProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product',template:/*ion-inline-start:"/Users/rcm15/Documents/applord project/liftandshiftapp/src/pages/product/product.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <h1 style="text-align:center">{{name}}</h1>\n\n  <img src="{{picture}}">\n  <br>\n\n  <button ion-button block color="danger" (click)="LiftandShift()">Lift and Shift Quote</button>\n\n  <button ion-button block color="danger" (click)="Multicranes()">Multicranes Quote</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/rcm15/Documents/applord project/liftandshiftapp/src/pages/product/product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ProductPage);
    return ProductPage;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductdescriptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calculateproduct_calculateproduct__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductdescriptionPage = /** @class */ (function () {
    function ProductdescriptionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imgPath = "http://liftshiftapp.co.za/";
        this.object = navParams.get('object');
        console.log("in", this.object);
        this.name = this.object["0"].name;
        this.picture = this.imgPath + this.object["0"].img;
    }
    //Client quotation without discount
    ProductdescriptionPage.prototype.quote = function () {
        console.log("object", this.object);
        this.productobject = [{ "id": this.object["0"].id, "img": this.object["0"].img, "name": this.object["0"].name, "currency": this.object["0"].currency, "price": this.object["0"].price, "quote_type": this.object["0"].quote_type, "discount_percentage": null }];
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__calculateproduct_calculateproduct__["a" /* CalculateproductPage */], {
            object: this.productobject
        });
    };
    ProductdescriptionPage.prototype.twopointfivepercentDealer = function () {
        console.log("object", this.object);
        this.productobject = [{ "id": this.object["0"].id, "img": this.object["0"].img, "name": this.object["0"].name, "currency": this.object["0"].currency, "price": this.object["0"].price, "quote_type": this.object["0"].quote_type, "discount_percentage": 0.025 }];
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__calculateproduct_calculateproduct__["a" /* CalculateproductPage */], {
            object: this.productobject
        });
    };
    ProductdescriptionPage.prototype.fivepercentDealer = function () {
        console.log("object", this.object);
        this.productobject = [{ "id": this.object["0"].id, "img": this.object["0"].img, "name": this.object["0"].name, "currency": this.object["0"].currency, "price": this.object["0"].price, "quote_type": this.object["0"].quote_type, "discount_percentage": 0.05 }];
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__calculateproduct_calculateproduct__["a" /* CalculateproductPage */], {
            object: this.productobject
        });
    };
    ProductdescriptionPage.prototype.sevenpointfivepercentDealer = function () {
        console.log("object", this.object);
        this.productobject = [{ "id": this.object["0"].id, "img": this.object["0"].img, "name": this.object["0"].name, "currency": this.object["0"].currency, "price": this.object["0"].price, "quote_type": this.object["0"], "discount_percentage": 0.075 }];
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__calculateproduct_calculateproduct__["a" /* CalculateproductPage */], {
            object: this.productobject
        });
    };
    ProductdescriptionPage.prototype.tenpercentDealer = function () {
        console.log("object", this.object);
        this.productobject = [{ "id": this.object["0"].id, "img": this.object["0"].img, "name": this.object["0"].name, "currency": this.object["0"].currency, "price": this.object["0"].price, "quote_type": this.object["0"], "discount_percentage": 0.1 }];
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__calculateproduct_calculateproduct__["a" /* CalculateproductPage */], {
            object: this.productobject
        });
    };
    ProductdescriptionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductdescriptionPage');
    };
    ProductdescriptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-productdescription',template:/*ion-inline-start:"/Users/rcm15/Documents/applord project/liftandshiftapp/src/pages/productdescription/productdescription.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <h1 style="text-align:center">{{name}}</h1>\n\n  <img src="{{picture}}">\n  <br>\n\n\n\n\n  <button ion-button block color="danger" (click)="quote()">Client quotation</button>\n  <button ion-button block color="danger" (click)="twopointfivepercentDealer()">2.5% Dealer Discount</button>\n\n  <button ion-button block color="danger" (click)="fivepercentDealer()">5% Dealer Discount</button>\n\n  <button ion-button block color="danger" (click)="sevenpointfivepercentDealer()">7.5% Dealer Discount</button>\n    <button ion-button block color="danger" (click)="tenpercentDealer()">10% Dealer Discount</button>\n\n\n</ion-content>'/*ion-inline-end:"/Users/rcm15/Documents/applord project/liftandshiftapp/src/pages/productdescription/productdescription.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ProductdescriptionPage);
    return ProductdescriptionPage;
}());

//# sourceMappingURL=productdescription.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculateproductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__installation_installation__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__view_view__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CalculateproductPage = /** @class */ (function () {
    function CalculateproductPage(navCtrl, navParams, Api, alertCtrl, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Api = Api;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        // Global Variables
        this.imgPath = "http://liftshiftapp.co.za";
        this.total = 0;
        this.sum = 0;
        this.sumraw = 0;
        this.sumtotal = {};
        this.sto = {};
        this.sumt = {};
        this.client_quotation = 0;
        this.Fivepercent = 0.05;
        this.sevenpointfive = 0.075;
        this.ten = 0.1;
        this.FivepercentSum = 0;
        this.percentage = 0;
        this.shipping = 1.12;
        this.landed = 1.34;
        this.discount = 0;
        this.remove_discount_from_zar = 0;
        this.vat = 0.15;
        this.Total = 0;
        this.calculatevat = 0;
        this.object = navParams.get('object');
        console.log("in", this.object);
        this.name = this.object["0"].name;
        this.picture = this.imgPath + this.object["0"].img;
        console.log("image ", this.imgPath + this.object["0"].img);
        //default price if price Empty
        this.sum = 0;
        ///currency API
        this.Api.getEuro().subscribe(function (EuroDATA) {
            _this.EuroVar = EuroDATA;
            if (_this.object["0"].price === 0) {
                console.log("ok cool");
                var alert_1 = _this.alertCtrl.create({
                    title: 'Error',
                    subTitle: 'No price for this Crane',
                    message: '' + _this.name,
                    buttons: ['OK']
                });
                alert_1.present();
            }
            // else{
            //   console.log("ok")
            // }
            console.log("euro currency", _this.object["0"].price);
            //calculation of currency
            if (_this.object["0"].currency == "price_EURO" && _this.object["0"].discount_percentage == null) {
                console.log("ZAR", _this.EuroVar.rates.ZAR);
                _this.client_quotation = Number.parseFloat(_this.object["0"].price) * Number.parseFloat(_this.EuroVar.rates.ZAR);
                console.log("hee here--->", _this.client_quotation);
                _this.buffer = _this.client_quotation * _this.Fivepercent;
                console.log("add this to total", _this.buffer);
                console.log("hee here total--->", _this.client_quotation);
                _this.client_quotation = _this.client_quotation + _this.buffer;
                _this.client_quotation = _this.client_quotation * _this.shipping;
                _this.client_quotation = _this.client_quotation * _this.landed;
                console.log("total price", _this.client_quotation);
                _this.total = _this.client_quotation;
                _this.sum = Number.parseFloat(_this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
                console.log("total", Number.parseFloat(_this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"));
                console.log("convert price to ZAR", Number.parseFloat(_this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"));
                //format the price
                _this.ZarPrice = Number.parseFloat(_this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
                _this.sumtotal = Number.parseFloat(_this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
                _this.sumraw = Number.parseFloat(_this.total);
                console.log("price one sum", _this.sumtotal);
                console.log("price one raw price", _this.sumraw);
                _this.sumtotal = Number.parseFloat(_this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
                console.log("price one", _this.sumtotal);
            }
            else if (_this.object["0"].currency == "price_ZAR" && _this.object["0"].discount_percentage == null) {
                console.log("south africa inside if", _this.object["0"].price);
                _this.total = _this.object["0"].price;
                _this.sum = Number.parseFloat(_this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
                console.log("total", Number.parseFloat(_this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"));
                console.log("convert price to ZAR", Number.parseFloat(_this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"));
                _this.sumtotal = Number.parseFloat(_this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
                _this.sumraw = Number.parseFloat(_this.total);
                console.log("price one sum", _this.sumtotal);
                console.log("price one raw price", _this.sumraw);
                _this.sumtotal = Number.parseFloat(_this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
                console.log("price one", _this.sumtotal);
                // this.sto = this.sumtotal
                console.log("stop", _this.sumtotal);
                console.log("ZAR", _this.object["0"].price);
            }
            else if (_this.object["0"].currency == "price_EMPTY" && _this.object["0"].discount_percentage == null) {
            }
            else {
                ////////////////////////////////
                ///////////////////////////////
                //Calculation with discount////
                ///////////////////////////////
                console.log("hello discount");
                if (_this.object["0"].currency == "price_EURO") {
                    console.log("south africa inside if", _this.EuroVar.rates.ZAR);
                    //convert euro to rand
                    _this.total = Number.parseFloat(_this.object["0"].price) * Number.parseFloat(_this.EuroVar.rates.ZAR);
                    //this do the samething as the first line
                    _this.convertCurrencytozar = Number.parseFloat(_this.object["0"].price) * Number.parseFloat(_this.EuroVar.rates.ZAR);
                    //convert to zar
                    console.log("zar price", _this.convertCurrencytozar);
                    //this line added five percent buffer to euro
                    _this.buffervalue = _this.Fivepercent * _this.convertCurrencytozar;
                    //this is the buffer price
                    console.log("buffor 22 7.5", _this.buffervalue);
                    //add the buffer price to zar price
                    _this.zarprice = _this.convertCurrencytozar + _this.buffervalue;
                    //total price with buffer values
                    console.log("zar price", _this.zarprice);
                    _this.zarprice = _this.zarprice * _this.shipping;
                    _this.zarprice = _this.zarprice * _this.landed;
                    console.log("total price", _this.zarprice);
                    //discount 
                    _this.discount = _this.zarprice * _this.object["0"].discount_percentage;
                    console.log("discount amount", _this.discount);
                    //discount
                    _this.buffer = _this.discount;
                    console.log("buffer", _this.buffer);
                    //remove discount from crane
                    _this.remove_discount_from_zar = _this.zarprice - _this.discount;
                    console.log("remove discount from crane", _this.remove_discount_from_zar);
                    console.log("total price", _this.zarprice);
                    //total discount crane
                    _this.total = _this.zarprice;
                    _this.sum = Number.parseFloat(_this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
                    console.log("total", Number.parseFloat(_this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"));
                    console.log("convert price to ZAR", Number.parseFloat(_this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"));
                    _this.sumtotal = Number.parseFloat(_this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
                    _this.sumraw = Number.parseFloat(_this.total);
                    // this.PRICE = Number.parseFloat(this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
                    console.log("price one sum", _this.sumtotal);
                    //format the price
                    _this.ZarPrice = _this.sumtotal;
                    console.log("price one raw price", _this.sumraw);
                    _this.sumtotal = Number.parseFloat(_this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
                    console.log("price one", _this.sumtotal);
                    // this.sto = this.sumtotal
                    console.log("stop", _this.sumtotal);
                    console.log("cash in Euro convert", _this.object["0"].price);
                    console.log("display to another page", _this.ZarPrice);
                }
                else if (_this.object["0"].currency == "price_ZAR") {
                    //discount 
                    _this.discount = _this.object["0"].price * _this.object["0"].discount_percentage;
                    console.log("discount amount", _this.discount);
                    //discount
                    _this.buffer = _this.discount;
                    console.log("buffer", _this.buffer);
                    //remove discount from crane
                    _this.remove_discount_from_zar = _this.object["0"].price - _this.discount;
                    console.log("remove discount from crane", _this.remove_discount_from_zar);
                    console.log("total price", _this.object["0"].price);
                    //total discount crane
                    _this.total = _this.object["0"].price;
                    _this.sum = Number.parseFloat(_this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
                    console.log("total", Number.parseFloat(_this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"));
                    console.log("convert price to ZAR", Number.parseFloat(_this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"));
                    _this.sumtotal = Number.parseFloat(_this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
                    _this.sumraw = Number.parseFloat(_this.total);
                    // this.PRICE = Number.parseFloat(this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
                    console.log("price one sum", _this.sumtotal);
                    //format the price
                    _this.ZarPrice = _this.sumtotal;
                    console.log("price one raw price", _this.sumraw);
                    _this.sumtotal = Number.parseFloat(_this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
                    console.log("price one", _this.sumtotal);
                    // this.sto = this.sumtotal
                    console.log("stop", _this.sumtotal);
                    console.log("cash in Euro convert", _this.object["0"].price);
                }
                else {
                }
            }
        });
        //commet
    }
    CalculateproductPage.prototype.showFullPrice = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            // title: 'Lift and Shift',
            message: 'Would you like to add an installation?',
            buttons: [
                {
                    text: 'Yes',
                    handler: function () {
                        console.log("in", _this.object);
                        _this.newobject = [{ "id": _this.object["0"].id, "name": _this.object["0"].name, "img": _this.object["0"].img, "discount_percentage": _this.discount, "quote_type": _this.object["0"].quote_type, "CranepriceFormated": _this.ZarPrice, "RawCranePrice": _this.sumraw, "Quote_type": "Full Price" }];
                        console.log("object to another page", _this.newobject);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__installation_installation__["a" /* InstallationPage */], {
                            object: _this.newobject
                        });
                    }
                },
                {
                    text: 'No',
                    handler: function () {
                        var loading = _this.loadingCtrl.create({
                            content: 'Please wait...',
                        });
                        _this.calculatevat = _this.sumraw * 1.15;
                        _this.vat = _this.calculatevat - _this.sumraw;
                        console.log("vat", _this.vat);
                        _this.Total = _this.vat + _this.sumraw;
                        console.log("Total", _this.Total);
                        loading.present();
                        if (_this.vat != 0 && _this.Total != 0) {
                            _this.newobject = [{ "id": _this.object["0"].id, "name": _this.object["0"].name, "img": _this.object["0"].img, "discount_percentage": _this.discount, "quote_type": _this.object["0"].quote_type, "CranepriceFormated": _this.ZarPrice, "RawCranePrice": _this.sumraw, "Quote_type": "Full Price" }];
                            console.log("object to another page", _this.newobject);
                            // checkout
                            loading.dismiss();
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__view_view__["a" /* ViewPage */], {
                                object: _this.newobject,
                                totalamount: _this.Total,
                                originalpriceraw: _this.sumraw,
                                viewQuote: _this.newobject,
                                craneprice: Number.parseFloat(_this.sumraw).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"),
                                crane: _this.newobject,
                                viewquoteTotal: _this.Total,
                                // invoice:this.newobject,
                                craneprice2: _this.newobject,
                                vat: _this.vat,
                            });
                        }
                        else {
                        }
                    }
                }
            ]
        });
        confirm.present();
        // console.log("newobject",this.newobject)
    };
    CalculateproductPage.prototype.ShowHiddenPrice = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            // title: 'Lift and Shift',
            message: 'Yes to add installation or not to send quote',
            buttons: [
                {
                    text: 'Yes',
                    handler: function () {
                        console.log("in", _this.object);
                        _this.newobject = [{ "id": _this.object["0"].id, "name": _this.object["0"].name, "img": _this.object["0"].img, "discount_percentage": _this.discount, "quote_type": _this.object["0"].quote_type, "CranepriceFormated": _this.ZarPrice, "RawCranePrice": _this.sumraw, "Quote_type": "Hidden Price" }];
                        console.log("object to another page", _this.newobject);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__installation_installation__["a" /* InstallationPage */], {
                            object: _this.newobject
                        });
                    }
                },
                {
                    text: 'No',
                    handler: function () {
                        var loading = _this.loadingCtrl.create({
                            content: 'Please wait...',
                            duration: 5000
                        });
                        _this.calculatevat = _this.sumraw * 1.15;
                        _this.vat = _this.calculatevat - _this.sumraw;
                        console.log("vat", _this.vat);
                        _this.Total = _this.vat + _this.sumraw;
                        console.log("Total", _this.Total);
                        loading.present();
                        if (_this.vat != 0 && _this.Total != 0) {
                            _this.newobject = [{ "id": _this.object["0"].id, "name": _this.object["0"].name, "img": _this.object["0"].img, "discount_percentage": _this.discount, "quote_type": _this.object["0"].quote_type, "CranepriceFormated": _this.ZarPrice, "RawCranePrice": _this.sumraw, "Quote_type": "Hidden Price" }];
                            console.log("object to another page", _this.newobject);
                            // checkout
                            loading.dismiss();
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__view_view__["a" /* ViewPage */], {
                                object: _this.newobject,
                                totalamount: _this.Total,
                                originalpriceraw: _this.sumraw,
                                viewQuote: _this.newobject,
                                craneprice: Number.parseFloat(_this.sumraw).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"),
                                crane: _this.newobject,
                                viewquoteTotal: _this.Total,
                                // invoice:this.newobject,
                                craneprice2: _this.newobject,
                                vat: _this.vat,
                            });
                        }
                        else {
                            console.log("error");
                        }
                    }
                }
            ]
        });
        confirm.present();
    };
    CalculateproductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CalculateproductPage');
    };
    CalculateproductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-calculateproduct',template:/*ion-inline-start:"/Users/rcm15/Documents/applord project/liftandshiftapp/src/pages/calculateproduct/calculateproduct.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <h1 style="text-align:center">{{name}}</h1>\n\n  <h1 style="text-align:center">R{{sum}}</h1>\n\n  <img src="{{picture}}">\n  <br>\n\n\n  <button ion-button block color="danger" (click)="showFullPrice()">Full price breakdown</button>\n\n <button ion-button block color="danger" (click)="ShowHiddenPrice()">Hidden Prices (only totals)</button>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/rcm15/Documents/applord project/liftandshiftapp/src/pages/calculateproduct/calculateproduct.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], CalculateproductPage);
    return CalculateproductPage;
}());

//# sourceMappingURL=calculateproduct.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstallationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checkout_checkout__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addaccessories_addaccessories__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InstallationPage = /** @class */ (function () {
    function InstallationPage(navCtrl, navParams, Api, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Api = Api;
        this.alertCtrl = alertCtrl;
        this.totalone = 0;
        this.total = 0;
        this.Texttotaltovat = 0;
        this.pricedesc = [];
        this.calculatevat = 0;
        this.vatamount = 0;
        this.displayprice = 0;
        this.totalpriceunchecked = 0;
        this.sumcrane = [];
        ///not pushed yet
        this.date = "22/06/2018";
        this.ref = "06/07/2019/mm";
        //
        this.vatcranes = [];
        this.totalcranes = [];
        ///
        this.cranepriceobject = [];
        this.inputuser = {};
        this.newobject = [];
        /////
        this.logindetails = [{ "Initials": "MM", "Password": "1", "Sales_Email": "1", "Sales_name": "MASA", "contact_No": "082 317 2935", "login_id": "1", "ref": "0" },];
        this.lastrecordVar = [];
        this.object = navParams.get('object');
        console.log("installation", this.object);
        this.price = Number.parseFloat(this.object["0"].RawCranePrice).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
        this.Api.getinstallation(this.object["0"].id).subscribe(function (DATA) {
            console.log("installation", DATA);
            _this.installations = DATA.data;
        });
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    InstallationPage.prototype.select = function (installation, position, price, RawCranePrice, installationprice, InstallationItem, index) {
        var _this = this;
        console.log("objects", installation);
        if (installation.checked === true) {
            this.totalone = this.totalone + Number.parseFloat(installation.zar_amount);
            console.log("passed to object see results", installation.zar_amount);
            console.log("passed to object see results", this.object["0"].RawCranePrice);
            console.log("passed to object see results", this.totalone);
            // var rawprice =  this.object["0"].RawCranePrice
            // console.log("p",this.price)
            this.total = this.object["0"].RawCranePrice + this.totalone;
            this.Texttotaltovat = this.total;
            console.log("hee", this.total);
            console.log(this.Texttotaltovat);
            this.pricedesc.push(installation);
            console.log("hello", this.pricedesc);
            console.log("row price please work", this.object["0"].RawCranePrice);
            console.log("after remove price what is the total now", this.total);
            this.price = Number.parseFloat(this.Texttotaltovat).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
            this.calculatevat = this.Texttotaltovat * 1.15;
            this.vatamount = this.calculatevat - this.Texttotaltovat;
            this.displayprice = 100.00 + Number.parseFloat(this.Texttotaltovat).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
        }
        else {
            console.log("object===>", this.pricedesc);
            this.pricedesc.forEach(function (item, indexer) {
                console.log("price", item.price);
                console.log("origial price now", _this.total);
                if (item.id == installation.id) {
                    _this.price = Number.parseFloat(_this.object["0"].RawCranePrice).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
                    console.log(installation.zar_amount);
                    console.log(item.price);
                    _this.total = _this.total - installation.zar_amount;
                    //you dont have a value here 
                    _this.totalone = _this.totalone - Number.parseFloat(installation.zar_amount);
                    _this.price = Number.parseFloat(_this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
                    console.log(_this.total);
                    console.log("Items", item);
                    console.log("Index", indexer);
                    console.log("removed item===>1111", _this.pricedesc);
                    _this.pricedesc.splice(indexer, 1);
                    console.log("removed item===>", _this.pricedesc);
                    _this.totalpriceunchecked = _this.total - item.price - _this.price;
                    console.log("====>new", _this.totalpriceunchecked);
                }
            });
        }
    };
    InstallationPage.prototype.AddInstallation = function (InstallationItem) {
        var _this = this;
        console.log("vat Total amount", Number.parseFloat(this.calculatevat).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"));
        console.log("vat", Number.parseFloat(this.vatamount).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"));
        console.log("crane price quote", this.price);
        console.log("objects", this.InstallationItem);
        console.log("raw price crane push to Quote", this.object["0"].RawCranePrice);
        // let inputuser:any={};
        console.log("hello price", Number.parseFloat(this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"));
        // console.log("total price quote",this.calculatevat)
        console.log("date is", this.date);
        console.log("ref", this.ref);
        console.log("total price quote", this.calculatevat);
        this.sumcrane.push(Number.parseFloat(this.calculatevat).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"));
        console.log("total price", this.sumcrane);
        console.log("vat", this.vatamount);
        this.vatcranes.push(Number.parseFloat(this.vatamount).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"));
        console.log("vat 2", this.vatcranes);
        console.log("total crane price checked ", this.total);
        //new raw price accessories
        this.new_raw_price = this.total;
        this.totalcranes.push(Number.parseFloat(this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"));
        console.log("array total checked", this.totalcranes);
        console.log("installation price raw 2 quote", this.object["0"].RawCranePrice);
        console.log("crane object", this.InstallationItem);
        console.log("check items", this.pricedesc);
        console.log("pushed object", this.pricedesc);
        Number.parseFloat(this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
        console.log("access values outside storage", this.view);
        //
        // console.log("accessories objects",this.accessoriesobjects)
        //
        // this.storage.set('accessories',this.accessoriesobjects)
        var confirm = this.alertCtrl.create({
            message: 'Would you like to add accessories to this quote?',
            buttons: [
                {
                    text: 'Yes',
                    handler: function () {
                        if (_this.pricedesc.length === 0) {
                            console.log("ok", _this.object[0].RawCranePrice);
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__addaccessories_addaccessories__["a" /* AddaccessoriesPage */], {
                                ////viewquote send to quote this object working////
                                condition: "accessories",
                                vatview: _this.vatamount,
                                totalamountview: _this.calculatevat,
                                originalpricerawview: _this.object["0"].RawCranePrice,
                                viewQuoteview: _this.pricedesc,
                                cranepriceview: _this.price,
                                craneview: _this.InstallationItem,
                                viewquoteTotalview: _this.calculatevat,
                                logindetails: _this.logindetails,
                                lastrecordVar: _this.lastrecordVar,
                                //////////////////////////////send quote  send quote///////
                                object: _this.object,
                                ref: _this.ref,
                                date: _this.date,
                                pricedescription: _this.InstallationItem,
                                invoice: _this.pricedesc,
                                emaildetails: _this.inputuser,
                                cranepricsend: _this.cranepriceobject,
                                totalcranechecked: _this.totalcranes,
                                vatsend: _this.vatcranes,
                                Totalpriceafter: _this.sumcrane,
                                newobject: _this.newobject,
                                new_price: _this.object[0].RawCranePrice,
                                ///accessories new raw pricedesc
                                newrawpriceaccessories: _this.new_raw_price
                            });
                        }
                        else {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__addaccessories_addaccessories__["a" /* AddaccessoriesPage */], {
                                ////viewquote send to quote this object working////
                                condition: "accessories",
                                vatview: _this.vatamount,
                                totalamountview: _this.calculatevat,
                                originalpricerawview: _this.object["0"].RawCranePrice,
                                viewQuoteview: _this.pricedesc,
                                cranepriceview: _this.price,
                                craneview: _this.InstallationItem,
                                viewquoteTotalview: _this.calculatevat,
                                logindetails: _this.logindetails,
                                lastrecordVar: _this.lastrecordVar,
                                //////////////////////////////send quote  send quote///////
                                object: _this.object,
                                ref: _this.ref,
                                date: _this.date,
                                pricedescription: _this.InstallationItem,
                                invoice: _this.pricedesc,
                                emaildetails: _this.inputuser,
                                cranepricsend: _this.cranepriceobject,
                                totalcranechecked: _this.totalcranes,
                                vatsend: _this.vatcranes,
                                Totalpriceafter: _this.sumcrane,
                                newobject: _this.newobject,
                                new_price: _this.total,
                                ///accessories new raw pricedesc
                                newrawpriceaccessories: _this.new_raw_price
                            });
                        }
                        // console.log('Disagree clicked');
                    }
                },
                {
                    text: 'No',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__checkout_checkout__["a" /* CheckoutPage */], {
                            ///////////////////////////////////////view quote ia m not sure about this object/////////
                            // craneprice:this.rawCurrency,
                            condition: "installation",
                            vat: _this.vatamount,
                            totalamount: _this.calculatevat,
                            originalpriceraw: _this.object["0"].RawCranePrice,
                            viewQuote: _this.pricedesc,
                            craneprice: _this.object["0"].RawCranePrice,
                            crane: _this.InstallationItem,
                            viewquoteTotal: _this.total,
                            logindetails: _this.logindetails,
                            lastrecordVar: _this.lastrecordVar,
                            //////////////////////////////send quote  send quote///////
                            object: _this.object,
                            ref: _this.ref,
                            date: _this.date,
                            pricedescription: _this.InstallationItem,
                            invoice: _this.pricedesc,
                            emaildetails: _this.inputuser,
                            cranepricsend: _this.cranepriceobject,
                            totalcranechecked: _this.totalcranes,
                            vatsend: _this.vatcranes,
                            Totalpriceafter: _this.sumcrane,
                            newobject: _this.newobject,
                            new_price: _this.total,
                            ////viewquote send to quote this object working////
                            vatview: _this.vatamount,
                            totalamountview: _this.calculatevat,
                            originalpricerawview: _this.object["0"].RawCranePrice,
                            viewQuoteview: _this.pricedesc,
                            cranepriceview: _this.price,
                            craneview: _this.InstallationItem,
                            viewquoteTotalview: _this.calculatevat,
                        });
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    InstallationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InstallationPage');
    };
    InstallationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-installation',template:/*ion-inline-start:"/Users/rcm15/Documents/applord project/liftandshiftapp/src/pages/installation/installation.html"*/'\n<ion-header style="background-color:#d1d1d1">\n\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n\n  <button ion-button block color="danger" style="font-size: bold;font-size:30px;color:white" clear (click)="search()">\n       <!-- <ion-icon name=\'send\'></ion-icon> -->\n      R {{ price }}\n  </button>\n\n\n\n\n</ion-header>\n\n\n<ion-content >\n\n\n  <ion-list text-wrap >\n\n     <ion-item  block *ngFor="let installation of installations;let i = index;" >\n        <ion-label>{{installation.name}}</ion-label>\n        <ion-checkbox   color="danger" checked="false" [(ngModel)]="installation.checked" (ionChange)="select(installation,\'top\',price,RawCranePrice,installationprice,InstallationItem,i)"></ion-checkbox>\n      </ion-item>\n\n   </ion-list>\n\n\n\n\n   <button ion-button block color="danger" (click)="AddInstallation()">\n      Add \n    </button>\n\n\n\n\n<!-- <button ion-button block color="danger" (click)="emailQuote()"> -->\n   <!-- <ion-icon name=\'send\'></ion-icon> -->\n   <!-- Email Quote -->\n <!-- </button> -->\n\n<!-- <button ion-button block (click)="viewQuote(pricedescripti)"> -->\n   <!-- <ion-icon name=\'eye\'></ion-icon> -->\n   <!-- View Quote -->\n<!-- </button> -->\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/rcm15/Documents/applord project/liftandshiftapp/src/pages/installation/installation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], InstallationPage);
    return InstallationPage;
}());

//# sourceMappingURL=installation.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_view__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CheckoutPage = /** @class */ (function () {
    function CheckoutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imgPath = "http://liftshiftapp.co.za/";
        this.new_pricepiped = 0;
        this.condition = navParams.get('condition');
        console.log("check", this.condition);
        // this.craneprice =navParams.get('craneprice')
        // console.log("raw price",this.craneprice)
        if (this.condition == "installation") {
            this.object = navParams.get('object');
            console.log("", this.object);
            this.name = this.object["0"].name;
            this.img = this.imgPath + this.object["0"].img;
            this.price = this.object["0"].CranepriceFormated;
            //Vat
            this.vatview = navParams.get('vatview');
            console.log(this.vatview);
            //total items
            this.totalamountview = navParams.get('totalamountview');
            console.log(this.totalamountview);
            this.originalpricerawview = navParams.get('originalpricerawview');
            console.log(this.originalpricerawview);
            this.viewQuoteview = navParams.get('viewQuoteview');
            console.log(this.viewQuoteview);
            this.cranepriceview = navParams.get('cranepriceview');
            console.log(this.cranepriceview);
            this.craneview = navParams.get('craneview');
            console.log(this.craneview);
            this.viewquoteTotalview = navParams.get('viewquoteTotalview');
            console.log(this.viewquoteTotalview);
            this.invoice = navParams.get('invoice');
            console.log("invoice", this.invoice);
            this.new_price = navParams.get('new_price');
            console.log("new crane price", this.new_price);
            this.new_pricepiped = Number.parseFloat(this.new_price).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
        }
        else {
            this.object = navParams.get('object');
            console.log("", this.object);
            this.name = this.object["0"].name;
            this.img = this.imgPath + this.object["0"].img;
            this.price = this.object["0"].CranepriceFormated;
            //Vat
            this.vatview = navParams.get('vatview');
            console.log(this.vatview);
            //total items
            this.totalamountview = navParams.get('totalamountview');
            console.log(this.totalamountview);
            this.originalpricerawview = navParams.get('originalpricerawview');
            console.log(this.originalpricerawview);
            this.viewQuoteview = navParams.get('viewQuoteview');
            console.log(this.viewQuoteview);
            this.cranepriceview = navParams.get('cranepriceview');
            console.log(this.cranepriceview);
            this.craneview = navParams.get('craneview');
            console.log(this.craneview);
            this.viewquoteTotalview = navParams.get('viewquoteTotalview');
            console.log(this.viewquoteTotalview);
            this.invoice = navParams.get('invoice');
            console.log("invoice", this.invoice);
            this.new_price = navParams.get('new_price');
            console.log("new crane price", this.new_price);
            this.new_pricepiped = Number.parseFloat(this.new_price).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
        }
    }
    ///function to view quote and also sne that quote to an email
    CheckoutPage.prototype.viewQuote = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__view_view__["a" /* ViewPage */], {
            totalamount: this.totalamountview,
            originalpriceraw: this.originalpricerawview,
            viewQuote: this.viewQuoteview,
            craneprice: this.cranepriceview,
            crane: this.craneview,
            viewquoteTotal: this.viewquoteTotalview,
            invoice: this.invoice,
            craneprice2: this.originalpricerawview,
            object: this.object,
            vat: this.vatview,
        });
    };
    CheckoutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CheckoutPage');
    };
    CheckoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-checkout',template:/*ion-inline-start:"/Users/rcm15/Documents/applord project/liftandshiftapp/src/pages/checkout/checkout.html"*/'\n<ion-header style="background-color:#d1d1d1">\n\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n    <button ion-button block color="danger" style="font-size: bold;font-size:30px;color:white" clear (click)="search()">\n         <!-- <ion-icon name=\'send\'></ion-icon> -->\n        R {{price}}\n    </button>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <h1 style="text-align:center">{{name}}</h1>\n\n  <!-- <h1 style="text-align:center">R{{sum}}</h1> -->\n\n  <img src="{{img}}">\n\n\n  <!-- <button ion-button block color="danger" (click)="emailQuote()"> -->\n     <!-- <ion-icon name=\'send\'></ion-icon> -->\n     <!-- Email Quote -->\n   <!-- </button> -->\n\n  <button ion-button block (click)="viewQuote(pricedescripti)">\n     <!-- <ion-icon name=\'eye\'></ion-icon> -->\n     View Quote\n  </button>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/rcm15/Documents/applord project/liftandshiftapp/src/pages/checkout/checkout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CheckoutPage);
    return CheckoutPage;
}());

//# sourceMappingURL=checkout.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddaccessoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accessories_accessories__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddaccessoriesPage = /** @class */ (function () {
    function AddaccessoriesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imgPath = "http://liftshiftapp.co.za/";
        this.object = navParams.get('object');
        console.log("object 1", this.object);
        this.name = this.object[0].name;
        this.picture = this.imgPath + this.object[0].img;
        this.installation = navParams.get('invoice');
        console.log("object 2", this.installation);
        this.new_price = navParams.get('new_price');
        console.log("object 3", this.new_price);
        this.new_price_formated = Number.parseFloat(this.new_price).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
    }
    AddaccessoriesPage.prototype.accessories = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__accessories_accessories__["a" /* AccessoriesPage */], {
            object: this.object,
            installation: this.installation,
            new_price: this.new_price
        });
    };
    AddaccessoriesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddaccessoriesPage');
    };
    AddaccessoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addaccessories',template:/*ion-inline-start:"/Users/rcm15/Documents/applord project/liftandshiftapp/src/pages/addaccessories/addaccessories.html"*/'<ion-header style="background-color:#d1d1d1">\n\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n  <button ion-button block color="danger" style="font-size: bold;font-size:30px;color:white" clear (click)="search()">\n       <!-- <ion-icon name=\'send\'></ion-icon> -->\n      R {{new_price_formated}}\n  </button>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n<h1 style="text-align:center">{{name}}</h1>\n  <img src="{{picture}}"> \n\n<!-- buttons -->\n    <button ion-button block color="danger" (click)="accessories()">Add Accessories</button>\n    <!-- <button ion-button block color="danger" (click)="quoteinstal()">Installation</button> -->\n\n</ion-content>\n'/*ion-inline-end:"/Users/rcm15/Documents/applord project/liftandshiftapp/src/pages/addaccessories/addaccessories.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AddaccessoriesPage);
    return AddaccessoriesPage;
}());

//# sourceMappingURL=addaccessories.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockinPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StockinPage = /** @class */ (function () {
    function StockinPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    StockinPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StockinPage');
    };
    StockinPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-stockin',template:/*ion-inline-start:"/Users/rcm15/Documents/applord project/liftandshiftapp/src/pages/stockin/stockin.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="card-background-page">\n\n    <!-- <img src="assets/imgs/logo.jpg"> -->\n  <!-- <div class="center-img"> -->\n    <img   src="assets/imgs/logo.jpg">\n  <!-- </div> -->\n  \n  <ion-card class="ion-card" >\n    <div class="card-title">In Stock</div>\n  </ion-card>\n  \n  <ion-card class="ion-card" >\n    <div class="card-title">On water</div>\n  </ion-card>\n  \n  <ion-card class="ion-card" >\n    <div class="card-title">In build</div>\n  </ion-card>\n  \n  </ion-content>\n'/*ion-inline-end:"/Users/rcm15/Documents/applord project/liftandshiftapp/src/pages/stockin/stockin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], StockinPage);
    return StockinPage;
}());

//# sourceMappingURL=stockin.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__displayquotespdf_displayquotespdf__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuotesPage = /** @class */ (function () {
    function QuotesPage(navCtrl, navParams, Api, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Api = Api;
        this.storage = storage;
    }
    QuotesPage.prototype.ionViewDidLoad = function () {
    };
    QuotesPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        //local storage
        console.log("Enter");
        this.storage.ready();
        this.storage.get('token-to-send-quote').then(function (token) {
            _this.token = token;
            _this.Api.getownQuotes(_this.token).subscribe(function (DATA) {
                _this.displayQuotes = DATA;
                console.log("", _this.displayQuotes.ownquotes);
                _this.quotedetails = _this.displayQuotes.ownquotes;
            });
        });
        console.log("tokken", this.token);
    };
    QuotesPage.prototype.viewquote = function (quotedetails) {
        console.log("token", this.token);
        console.log("dis", quotedetails);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__displayquotespdf_displayquotespdf__["a" /* DisplayquotespdfPage */], {
            viewquote: quotedetails,
            token: this.token
        });
    };
    QuotesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-quotes',template:/*ion-inline-start:"/Users/rcm15/Documents/applord project/liftandshiftapp/src/pages/quotes/quotes.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      \n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content  class="card-background-page">\n\n\n    <img   src="assets/imgs/logo.jpg">\n\n    <ion-searchbar  style="background-color:red" placeholder="search by name" [(ngModel)]="searchTerm" (ionInput)="setFilteredItems()"></ion-searchbar>\n  \n  <br>\n    <div>\n  \n    </div>\n    <ion-card class="ion-card" *ngFor="let quotedetails of quotedetails" (click)="viewquote(quotedetails)">\n      <div class="card-title">{{quotedetails.ref}}</div>\n    </ion-card>\n    \n\n</ion-content>\n'/*ion-inline-end:"/Users/rcm15/Documents/applord project/liftandshiftapp/src/pages/quotes/quotes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], QuotesPage);
    return QuotesPage;
}());

//# sourceMappingURL=quotes.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayquotespdfPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__displaysendquotationpdf_displaysendquotationpdf__ = __webpack_require__(174);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DisplayquotespdfPage = /** @class */ (function () {
    function DisplayquotespdfPage(navCtrl, navParams, Api) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Api = Api;
        this.token = navParams.get('token');
        console.log("token", this.token);
        //view quote ID
        this.viewquote = navParams.get('viewquote');
        console.log('g', this.viewquote.id);
        // //view quote API
        this.Api.getviewquote(this.viewquote.id, this.token).subscribe(function (DATA) {
            _this.viewQuoteDATA = DATA;
            console.log("", _this.viewQuoteDATA.quote);
            _this.conditiondiscount = _this.viewQuoteDATA.quote;
            console.log("con", _this.conditiondiscount);
            //condition from the view
            _this.discount = _this.conditiondiscount.discount_path;
        });
    }
    DisplayquotespdfPage.prototype.Quotation = function () {
        console.log(this.conditiondiscount.quote_path);
        console.log("display pdf");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__displaysendquotationpdf_displaysendquotationpdf__["a" /* DisplaysendquotationpdfPage */], {
            displaypdf: this.conditiondiscount.quote_path
        });
    };
    DisplayquotespdfPage.prototype.dealerdiscount = function () {
        console.log(this.conditiondiscount.discount_path);
        console.log("display pdf");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__displaysendquotationpdf_displaysendquotationpdf__["a" /* DisplaysendquotationpdfPage */], {
            displaypdf: this.conditiondiscount.discount_path
        });
    };
    DisplayquotespdfPage.prototype.Brochure = function () {
        console.log(this.conditiondiscount.bronchure_path);
        console.log("display pdf");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__displaysendquotationpdf_displaysendquotationpdf__["a" /* DisplaysendquotationpdfPage */], {
            displaypdf: this.conditiondiscount.bronchure_path
        });
    };
    DisplayquotespdfPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DisplayquotespdfPage');
    };
    DisplayquotespdfPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-displayquotespdf',template:/*ion-inline-start:"/Users/rcm15/Documents/applord project/liftandshiftapp/src/pages/displayquotespdf/displayquotespdf.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="card-background-page "  padding>\n  <!-- /Users/masa/lift/src/pages/viewquote/logo.jpg -->\n    <img src="assets/imgs/liftshiftlogo.png">\n    <button ion-button block color="danger" (click)="Quotation()">Quotation</button>\n    <button ion-button *ngIf="discount != \'\'  "  block color="danger" (click)="dealerdiscount()">dealerdiscount</button>\n    <button ion-button block color="danger" (click)="Brochure()">Brochure</button> \n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/rcm15/Documents/applord project/liftandshiftapp/src/pages/displayquotespdf/displayquotespdf.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], DisplayquotespdfPage);
    return DisplayquotespdfPage;
}());

//# sourceMappingURL=displayquotespdf.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplaysendquotationpdfPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {DomSanitizer} from '@angular/platform-browser';
// import {DomSanitizationService} from '@angular/platform-browser';

var DisplaysendquotationpdfPage = /** @class */ (function () {
    function DisplaysendquotationpdfPage(navCtrl, navParams, sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sanitizer = sanitizer;
        this.displaypdf = navParams.get('displaypdf');
        console.log(this.displaypdf);
        this.trustedURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.displaypdf);
        this.display = this.displaypdf;
        console.log("see", this.trustedURL.changingThisBreaksApplicationSecurity);
        this.check = this.trustedURL.changingThisBreaksApplicationSecurity;
    }
    // photoURL() {
    //   return this.sanitizer.bypassSecurityTrustUrl(this.displaypdf);
    // }
    //   public getSafeContent() {
    //     return this.sanitizer.bypassSecurityTrustHtml(this.displaypdf);
    // }
    DisplaysendquotationpdfPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DisplaysendquotationpdfPage');
    };
    DisplaysendquotationpdfPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-displaysendquotationpdf',template:/*ion-inline-start:"/Users/rcm15/Documents/applord project/liftandshiftapp/src/pages/displaysendquotationpdf/displaysendquotationpdf.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n    <a button href="{{ display }}" clear item-right><ion-icon name="document"></ion-icon>Open PDF</a>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/rcm15/Documents/applord project/liftandshiftapp/src/pages/displaysendquotationpdf/displaysendquotationpdf.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], DisplaysendquotationpdfPage);
    return DisplaysendquotationpdfPage;
}());

//# sourceMappingURL=displaysendquotationpdf.js.map

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 185;

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiProvider = /** @class */ (function () {
    function ApiProvider(http) {
        // this.items = [
        this.http = http;
        this.defaultUrl = "http://liftshiftapp.co.za/api/";
        //api
        this.apiLoginUrl = this.defaultUrl + "authenticate";
        this.apimenuUrl = this.defaultUrl + "allmenus";
        this.apimenuitemsUrl = this.defaultUrl + "allmenus/";
        this.apiproductsUrl = this.defaultUrl + "products/";
        this.apiproductUrl = this.defaultUrl + "product/";
        this.apiaccessoriesUrl = this.defaultUrl + "allmenus/Accessories";
        this.apiownquotesUrl = this.defaultUrl + "ownquotes";
        this.apiviewquote = this.defaultUrl + "quote/";
        this.apiUsersDetails = this.defaultUrl + "users_details/";
        this.apiInstallationUrl = this.defaultUrl + "installations/";
        this.apisendemailUrl = this.defaultUrl + "sendqoute";
        // apiEuro ="https://api.fixer.io/latest?base=EUR";
        this.apiEuro = "http://data.fixer.io/api/latest?access_key=b64a16264e5b3b36f3a8434bd1a230ce";
        this.apiclients = this.defaultUrl + "getClientData";
        //   { "Name": 'A O Matels', "ContactPerson": "Abel", "CONTACTCELLNUMBER": "0825569898", "CONTACTEMAIL": "info@ao.co.za", "OfficeNumber": "0125678000", "PhysicalAddress": "80A Tom St Brits"},
        //   { "Name": 'AB Brickworks Head Office', "ContactPerson": "Roland Dam", "CONTACTCELLNUMBER": "083 375 5084", "CONTACTEMAIL": "sales@abbrick.co.za", "OfficeNumber": "0119731228", "PhysicalAddress": "Rd5 Brent woodpark Benoni" },
        // ]
        console.log('Hello ApiProvider Provider');
        //local storage
        //  this.token=localStorage.getItem("token");
        //  console.log("token",this.token)
    }
    ApiProvider.prototype.getapiclients = function (token) {
        var _this = this;
        console.log("token", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Authorization', 'Bearer ' + token);
        this.http.get(this.apiclients, { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.items = res;
        });
    };
    ApiProvider.prototype.filterItems = function (searchTerm) {
        // console.log("serach", searchTerm);
        // console.log("items", this.items.quote);
        return this.items.quote.filter(function (item) {
            // console.log("itme", item)
            return item.Name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    // login 
    ApiProvider.prototype.postapiLoginUrl = function (Login) {
        var respond = this.http.post(this.apiLoginUrl, Login).map(function (res) { return res.json(); });
        this.logindetails = respond;
        return this.logindetails;
    };
    ApiProvider.prototype.getMenu = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Authorization', 'Bearer ' + token);
        var res = this.http.get(this.apimenuUrl, { headers: headers }).map(function (res) { return res.json(); });
        this.menuData = res;
        return res;
    };
    ApiProvider.prototype.getmenuItems = function (ID) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Authorization', 'bearer ');
        var respond = this.http.get(this.apimenuitemsUrl + ID, { headers: headers }).map(function (res) { return res.json(); });
        return respond;
    };
    ApiProvider.prototype.getproducts = function (ID) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Authorization', 'bearer ');
        var respond = this.http.get(this.apiproductsUrl + ID, { headers: headers }).map(function (res) { return res.json(); });
        return respond;
    };
    ApiProvider.prototype.getproduct = function (ID) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Authorization', 'bearer ');
        var respond = this.http.get(this.apiproductUrl + ID, { headers: headers }).map(function (res) { return res.json(); });
        return respond;
    };
    ApiProvider.prototype.getEuro = function () {
        var reponse = this.http.get(this.apiEuro).map(function (res) { return res.json(); });
        this.Euro = reponse;
        return this.Euro;
    };
    ApiProvider.prototype.getinstallation = function (ID) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Authorization', 'bearer ');
        var respond = this.http.get(this.apiInstallationUrl + ID, { headers: headers }).map(function (res) { return res.json(); });
        return respond;
    };
    ApiProvider.prototype.postsendemailquote = function (QuoteDATA, token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Authorization', 'bearer ' + token);
        console.log("provider token", token);
        var respond = this.http.post(this.apisendemailUrl, QuoteDATA, { headers: headers }).map(function (res) { return res.json(); });
        return respond;
    };
    ApiProvider.prototype.getaccessories = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Authorization', 'bearer');
        var respond = this.http.get(this.apiaccessoriesUrl, { headers: headers }).map(function (res) { return res.json(); });
        return respond;
    };
    ApiProvider.prototype.getownQuotes = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Authorization', 'bearer ' + token);
        var respond = this.http.get(this.apiownquotesUrl, { headers: headers }).map(function (res) { return res.json(); });
        return respond;
    };
    ApiProvider.prototype.getviewquote = function (ID, token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Authorization', 'bearer ' + token);
        var respond = this.http.get(this.apiviewquote + ID, { headers: headers }).map(function (res) { return res.json(); });
        return respond;
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], ApiProvider);
    return ApiProvider;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/acccessoriesonly/acccessoriesonly.module": [
		704,
		1
	],
	"../pages/accessories/accessories.module": [
		705,
		25
	],
	"../pages/addaccessories/addaccessories.module": [
		706,
		24
	],
	"../pages/auto/auto.module": [
		707,
		23
	],
	"../pages/autofill/autofill.module": [
		708,
		0
	],
	"../pages/calculateproduct/calculateproduct.module": [
		709,
		22
	],
	"../pages/checkout/checkout.module": [
		710,
		21
	],
	"../pages/checkoutaccessories/checkoutaccessories.module": [
		711,
		20
	],
	"../pages/cranebrand/cranebrand.module": [
		712,
		19
	],
	"../pages/displayquotespdf/displayquotespdf.module": [
		713,
		18
	],
	"../pages/displaysendquotationpdf/displaysendquotationpdf.module": [
		714,
		17
	],
	"../pages/installation/installation.module": [
		715,
		16
	],
	"../pages/login/login.module": [
		716,
		15
	],
	"../pages/menu/menu.module": [
		717,
		14
	],
	"../pages/menuitems/menuitems.module": [
		718,
		13
	],
	"../pages/product/product.module": [
		719,
		12
	],
	"../pages/productdescription/productdescription.module": [
		720,
		11
	],
	"../pages/quotes/quotes.module": [
		721,
		10
	],
	"../pages/rememberme/rememberme.module": [
		722,
		9
	],
	"../pages/sendemail/sendemail.module": [
		723,
		8
	],
	"../pages/sendemailaccessories/sendemailaccessories.module": [
		724,
		7
	],
	"../pages/sendemailwithquote/sendemailwithquote.module": [
		725,
		6
	],
	"../pages/stockin/stockin.module": [
		726,
		5
	],
	"../pages/subaccessories/subaccessories.module": [
		727,
		4
	],
	"../pages/view/view.module": [
		728,
		3
	],
	"../pages/viewaccessories/viewaccessories.module": [
		729,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 229;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CranebrandPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CranebrandPage = /** @class */ (function () {
    function CranebrandPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.results = [
            {
                "category": "PC",
                "subs": [
                    {
                        "subcategory": "Processor",
                        "manufactures": [
                            {
                                "manufacture": "Intel"
                            },
                            {
                                "manufacture": "AMD"
                            }
                        ]
                    },
                    {
                        "subcategory": "Motherboard",
                        "manufactures": [
                            {
                                "manufacture": "Asus"
                            },
                            {
                                "manufacture": "AMD"
                            },
                            {
                                "manufacture": "GigaByte"
                            },
                            {
                                "manufacture": "Intel"
                            }
                        ]
                    },
                    {
                        "subcategory": "Memory",
                        "manufactures": [
                            {
                                "manufacture": "Visipro"
                            },
                            {
                                "manufacture": "Crucial"
                            },
                            {
                                "manufacture": "VenomRX"
                            }
                        ]
                    }
                ]
            },
            {
                "category": "Laptop",
                "subs": [
                    {
                        "subcategory": "Notebook",
                        "manufactures": [
                            {
                                "manufacture": "Lenovo"
                            },
                            {
                                "manufacture": "Dell"
                            }
                        ]
                    },
                    {
                        "subcategory": "Netbook",
                        "manufactures": [
                            {
                                "manufacture": "Lenovo"
                            },
                            {
                                "manufacture": "Dell"
                            },
                            {
                                "manufacture": "Acer"
                            },
                            {
                                "manufacture": "HP"
                            }
                        ]
                    }
                ]
            },
            {
                "category": "Printer",
                "subs": [
                    {
                        "subcategory": "Laserjet",
                        "manufactures": [
                            {
                                "manufacture": "HP"
                            },
                            {
                                "manufacture": "Brother"
                            },
                            {
                                "manufacture": "Canon"
                            },
                            {
                                "manufacture": "Samsung"
                            }
                        ]
                    },
                    {
                        "subcategory": "Deskjet",
                        "manufactures": [
                            {
                                "manufacture": "HP"
                            },
                            {
                                "manufacture": "Canon"
                            },
                            {
                                "manufacture": "Epson"
                            }
                        ]
                    }
                ]
            }
        ];
        this.showLevel1 = null;
        this.showLevel2 = null;
        console.log("testing", this.results);
    }
    CranebrandPage.prototype.toggleLevel1 = function (idx) {
        if (this.isLevel1Shown(idx)) {
            this.showLevel1 = null;
        }
        else {
            this.showLevel1 = idx;
        }
    };
    ;
    CranebrandPage.prototype.toggleLevel2 = function (idx) {
        if (this.isLevel2Shown(idx)) {
            this.showLevel1 = null;
            this.showLevel2 = null;
        }
        else {
            this.showLevel1 = idx;
            this.showLevel2 = idx;
        }
    };
    ;
    //check
    CranebrandPage.prototype.isLevel1Shown = function (idx) {
        return this.showLevel1 === idx;
    };
    ;
    CranebrandPage.prototype.isLevel2Shown = function (idx) {
        return this.showLevel2 === idx;
    };
    ;
    CranebrandPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CranebrandPage');
    };
    CranebrandPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cranebrand',template:/*ion-inline-start:"/Users/rcm15/Documents/applord project/liftandshiftapp/src/pages/cranebrand/cranebrand.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let p of results; let i=index" text-wrap (click)="toggleLevel1(\'idx\'+i)" [ngClass]="{active: isLevel1Shown(\'idx\'+i)}">\n      <h4>\n        {{p.category}}\n        <ion-icon color="success" item-right [name]="isLevel1Shown(\'idx\'+i) ? \'arrow-dropdown\' : \'arrow-dropright\'"></ion-icon>\n      </h4>\n      <ion-list *ngIf="isLevel1Shown(\'idx\'+i)">\n        <ion-item *ngFor="let s of p.subs; let i2=index" text-wrap (click)="toggleLevel2(\'idx\'+i+\'idx\'+i2)" [ngClass]="{active: isLevel2Shown(\'idx\'+i+\'idx\'+i2)}">\n          <h4>\n            {{s.subcategory}}\n            <ion-icon color="success" item-right [name]="isLevel2Shown(\'idx\'+i+\'idx\'+i2) ? \'arrow-dropdown\' : \'arrow-dropright\'"></ion-icon>\n          </h4>\n          <ion-list *ngIf="isLevel2Shown(\'idx\'+i+\'idx\'+i2)">\n            <ion-item *ngFor="let m of s.manufactures" text-wrap>\n              {{m.manufacture}}\n            </ion-item>\n          </ion-list>\n        </ion-item>\n      </ion-list>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/rcm15/Documents/applord project/liftandshiftapp/src/pages/cranebrand/cranebrand.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CranebrandPage);
    return CranebrandPage;
}());

//# sourceMappingURL=cranebrand.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendemailwithquotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SendemailwithquotePage = /** @class */ (function () {
    function SendemailwithquotePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SendemailwithquotePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SendemailwithquotePage');
    };
    SendemailwithquotePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sendemailwithquote',template:/*ion-inline-start:"/Users/rcm15/Documents/applord project/liftandshiftapp/src/pages/sendemailwithquote/sendemailwithquote.html"*/'<!--\n  Generated template for the SendemailwithquotePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>sendemailwithquote</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/rcm15/Documents/applord project/liftandshiftapp/src/pages/sendemailwithquote/sendemailwithquote.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SendemailwithquotePage);
    return SendemailwithquotePage;
}());

//# sourceMappingURL=sendemailwithquote.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(377);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_api_api__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_menu_menu__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_menuitems_menuitems__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_product_product__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_productdescription_productdescription__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_calculateproduct_calculateproduct__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_installation_installation__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_checkout_checkout__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_accessories_accessories__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_sendemail_sendemail__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_view_view__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_sendemailwithquote_sendemailwithquote__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_addaccessories_addaccessories__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_subaccessories_subaccessories__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_viewaccessories_viewaccessories__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_sendemailaccessories_sendemailaccessories__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_checkoutaccessories_checkoutaccessories__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_tabs_tabs__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_stockin_stockin__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_quotes_quotes__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_displayquotespdf_displayquotespdf__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_displaysendquotationpdf_displaysendquotationpdf__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_cranebrand_cranebrand__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_storage__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_rememberme_rememberme__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_auto_auto__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_ionic2_auto_complete__ = __webpack_require__(428);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_menuitems_menuitems__["a" /* MenuitemsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_product_product__["a" /* ProductPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_productdescription_productdescription__["a" /* ProductdescriptionPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_calculateproduct_calculateproduct__["a" /* CalculateproductPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_installation_installation__["a" /* InstallationPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_checkout_checkout__["a" /* CheckoutPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_accessories_accessories__["a" /* AccessoriesPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_sendemail_sendemail__["a" /* SendemailPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_view_view__["a" /* ViewPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_sendemailwithquote_sendemailwithquote__["a" /* SendemailwithquotePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_addaccessories_addaccessories__["a" /* AddaccessoriesPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_subaccessories_subaccessories__["a" /* SubaccessoriesPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_viewaccessories_viewaccessories__["a" /* ViewaccessoriesPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_sendemailaccessories_sendemailaccessories__["a" /* SendemailaccessoriesPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_checkoutaccessories_checkoutaccessories__["a" /* CheckoutaccessoriesPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_stockin_stockin__["a" /* StockinPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_quotes_quotes__["a" /* QuotesPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_displayquotespdf_displayquotespdf__["a" /* DisplayquotespdfPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_displaysendquotationpdf_displaysendquotationpdf__["a" /* DisplaysendquotationpdfPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_cranebrand_cranebrand__["a" /* CranebrandPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_rememberme_rememberme__["a" /* RemembermePage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_auto_auto__["a" /* AutoPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_36_ionic2_auto_complete__["a" /* AutoCompleteModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/acccessoriesonly/acccessoriesonly.module#AcccessoriesonlyPageModule', name: 'AcccessoriesonlyPage', segment: 'acccessoriesonly', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/accessories/accessories.module#AccessoriesPageModule', name: 'AccessoriesPage', segment: 'accessories', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addaccessories/addaccessories.module#AddaccessoriesPageModule', name: 'AddaccessoriesPage', segment: 'addaccessories', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/auto/auto.module#AutoPageModule', name: 'AutoPage', segment: 'auto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/autofill/autofill.module#AutofillPageModule', name: 'AutofillPage', segment: 'autofill', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calculateproduct/calculateproduct.module#CalculateproductPageModule', name: 'CalculateproductPage', segment: 'calculateproduct', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checkout/checkout.module#CheckoutPageModule', name: 'CheckoutPage', segment: 'checkout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checkoutaccessories/checkoutaccessories.module#CheckoutaccessoriesPageModule', name: 'CheckoutaccessoriesPage', segment: 'checkoutaccessories', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cranebrand/cranebrand.module#CranebrandPageModule', name: 'CranebrandPage', segment: 'cranebrand', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/displayquotespdf/displayquotespdf.module#DisplayquotespdfPageModule', name: 'DisplayquotespdfPage', segment: 'displayquotespdf', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/displaysendquotationpdf/displaysendquotationpdf.module#DisplaysendquotationpdfPageModule', name: 'DisplaysendquotationpdfPage', segment: 'displaysendquotationpdf', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/installation/installation.module#InstallationPageModule', name: 'InstallationPage', segment: 'installation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menuitems/menuitems.module#MenuitemsPageModule', name: 'MenuitemsPage', segment: 'menuitems', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product/product.module#ProductPageModule', name: 'ProductPage', segment: 'product', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/productdescription/productdescription.module#ProductdescriptionPageModule', name: 'ProductdescriptionPage', segment: 'productdescription', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/quotes/quotes.module#QuotesPageModule', name: 'QuotesPage', segment: 'quotes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rememberme/rememberme.module#RemembermePageModule', name: 'RemembermePage', segment: 'rememberme', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sendemail/sendemail.module#SendemailPageModule', name: 'SendemailPage', segment: 'sendemail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sendemailaccessories/sendemailaccessories.module#SendemailaccessoriesPageModule', name: 'SendemailaccessoriesPage', segment: 'sendemailaccessories', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sendemailwithquote/sendemailwithquote.module#SendemailwithquotePageModule', name: 'SendemailwithquotePage', segment: 'sendemailwithquote', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/stockin/stockin.module#StockinPageModule', name: 'StockinPage', segment: 'stockin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/subaccessories/subaccessories.module#SubaccessoriesPageModule', name: 'SubaccessoriesPage', segment: 'subaccessories', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view/view.module#ViewPageModule', name: 'ViewPage', segment: 'view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viewaccessories/viewaccessories.module#ViewaccessoriesPageModule', name: 'ViewaccessoriesPage', segment: 'viewaccessories', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_33__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_menuitems_menuitems__["a" /* MenuitemsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_product_product__["a" /* ProductPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_productdescription_productdescription__["a" /* ProductdescriptionPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_calculateproduct_calculateproduct__["a" /* CalculateproductPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_installation_installation__["a" /* InstallationPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_checkout_checkout__["a" /* CheckoutPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_accessories_accessories__["a" /* AccessoriesPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_sendemail_sendemail__["a" /* SendemailPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_view_view__["a" /* ViewPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_sendemailwithquote_sendemailwithquote__["a" /* SendemailwithquotePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_addaccessories_addaccessories__["a" /* AddaccessoriesPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_subaccessories_subaccessories__["a" /* SubaccessoriesPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_viewaccessories_viewaccessories__["a" /* ViewaccessoriesPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_sendemailaccessories_sendemailaccessories__["a" /* SendemailaccessoriesPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_checkoutaccessories_checkoutaccessories__["a" /* CheckoutaccessoriesPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_stockin_stockin__["a" /* StockinPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_quotes_quotes__["a" /* QuotesPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_displayquotespdf_displayquotespdf__["a" /* DisplayquotespdfPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_displaysendquotationpdf_displaysendquotationpdf__["a" /* DisplaysendquotationpdfPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_cranebrand_cranebrand__["a" /* CranebrandPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_rememberme_rememberme__["a" /* RemembermePage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_auto_auto__["a" /* AutoPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_api_api__["a" /* ApiProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_rememberme_rememberme__ = __webpack_require__(97);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { HomePage } from '../pages/home/home';



var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, storage) {
        var _this = this;
        this.storage = storage;
        this.storage.ready();
        this.storage.get('api_token').then(function (token) {
            _this.storagetoken = token;
            console.log('token storage', _this.storagetoken);
            if (_this.storagetoken != null) {
                console.log("token is set", _this.storagetoken);
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_rememberme_rememberme__["a" /* RemembermePage */];
            }
            else {
                console.log("token is empty", _this.storagetoken);
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
            }
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/rcm15/Documents/applord project/liftandshiftapp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/rcm15/Documents/applord project/liftandshiftapp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccessoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__subaccessories_subaccessories__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccessoriesPage = /** @class */ (function () {
    function AccessoriesPage(navCtrl, navParams, Api) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Api = Api;
        this.object = navParams.get('object');
        console.log("ob", this.object);
        this.installation = navParams.get('installation');
        console.log("in", this.installation);
        this.new_price = navParams.get('new_price');
        console.log("price", this.new_price);
        this.Accessories = navParams.get('Accessories');
        console.log("another accessories added", this.Accessories);
        this.Api.getaccessories().subscribe(function (DATA) {
            _this.accessories = DATA;
            console.log(_this.accessories.menus);
            _this.accessories = _this.accessories.menus;
        });
    }
    AccessoriesPage.prototype.subaccessories = function (accessory) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__subaccessories_subaccessories__["a" /* SubaccessoriesPage */], {
            subaccessories: accessory,
            object: this.object,
            installation: this.installation,
            new_price: this.new_price,
            Accessories: this.Accessories
        });
    };
    AccessoriesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccessoriesPage');
    };
    AccessoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-accessories',template:/*ion-inline-start:"/Users/rcm15/Documents/applord project/liftandshiftapp/src/pages/accessories/accessories.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content  class="card-background-page">\n\n    <img   src="assets/imgs/logo.jpg">\n\n    <ion-searchbar  style="background-color:red" placeholder="search by name" [(ngModel)]="searchTerm" (ionInput)="setModelItems()"></ion-searchbar>\n\n  <br>\n\n\n  <ion-card class="ion-card" *ngFor="let accessory of accessories" (click)="subaccessories(accessory)">\n    <div class="card-title">{{accessory.name}}</div>\n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/rcm15/Documents/applord project/liftandshiftapp/src/pages/accessories/accessories.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], AccessoriesPage);
    return AccessoriesPage;
}());

//# sourceMappingURL=accessories.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {HomePage} from '../home/home';


var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, apiProvider, alertCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiProvider = apiProvider;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.userData = [{ "email": "", "password": "" }];
        console.log("login details", this.userData);
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    //function to login 
    LoginPage.prototype.onlogin = function (userData) {
        var _this = this;
        this.remember = "remember";
        this.form_data = new FormData();
        this.form_data.append("email", userData.email);
        this.form_data.append("password", userData.password);
        console.log("login", this.form_data);
        this.apiProvider.postapiLoginUrl(this.form_data).subscribe(function (DATA) {
            _this.storage.set('token-to-send-quote', DATA.token);
            if (DATA.token == DATA.token) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */], {});
                console.log("success");
                _this.storage.ready();
                _this.storage.get('token-to-send-quote').then(function (Token) {
                    _this.token = Token;
                    console.log("token login", _this.token);
                });
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Error',
                    subTitle: 'Wrong email or password',
                    buttons: ['OK']
                });
                alert_1.present();
            }
        }, function (err) {
            console.log(err);
            var alert = _this.alertCtrl.create({
                title: 'Error',
                subTitle: 'login failed please try again',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    LoginPage.prototype.Remember = function (userData) {
        var _this = this;
        this.form_data = new FormData();
        this.form_data.append("email", userData.email);
        this.form_data.append("password", userData.password);
        console.log("login", this.form_data);
        this.apiProvider.postapiLoginUrl(this.form_data).subscribe(function (DATA) {
            // localStorage.setItem('token',DATA.token);
            console.log("token ", DATA.token);
            ///token to send quote
            _this.storage.set('token-to-send-quote', DATA.token);
            ///token to remember page         
            _this.storage.set('api_token', DATA.token);
            if (DATA.token == DATA.token) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */], {
                    token: DATA.token,
                });
                console.log("success");
            }
            else {
                var alert_2 = _this.alertCtrl.create({
                    title: 'Error',
                    subTitle: 'Wrong email or password',
                    buttons: ['OK']
                });
                alert_2.present();
            }
        }, function (err) {
            console.log(err);
            var alert = _this.alertCtrl.create({
                title: 'Error',
                subTitle: 'login failed please try again',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/rcm15/Documents/applord project/liftandshiftapp/src/pages/login/login.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Login <div float-right class="version">version 4.9</div></ion-title>\n  </ion-navbar>\n\n\n</ion-header>\n\n\n\n\n<ion-content padding>\n\n\n\n<div class="login-image-style" >\n\n<img src="assets/imgs/liftshiftlogo.png">\n</div>\n\n\n\n<ion-list>\n\n  <ion-item class="style-item">\n    <ion-input class="style-input" [(ngModel)]="userData.email"   type="text" placeholder="Email Address"></ion-input>\n  </ion-item>\n\n  <ion-item class="style-item">\n    <ion-input class="style-input" [(ngModel)]="userData.password"    type="password" placeholder="Password"></ion-input>\n  </ion-item>\n\n</ion-list>\n\n\n\n\n\n<ion-buttons start class="btn-wrapper1" >\n  <button ion-button icon-only block (click)="onlogin(userData)">\n    <ion-icon name="log-in"  ios="ios-log-in" md="md-log-in"  color="nav1"></ion-icon>\n    Login\n  </button>\n</ion-buttons>\n\n\n<ion-buttons start class="btn-wrapper1" >\n  <button ion-button color="danger" icon-only block (click)="Remember(userData)">\n    <ion-icon name="log-in"  ios="ios-log-in" md="md-log-in"  ></ion-icon>\n    Remember Me\n  </button>\n</ion-buttons>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/rcm15/Documents/applord project/liftandshiftapp/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menuitems_menuitems__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rememberme_rememberme__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, apiProvider, storage, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiProvider = apiProvider;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.storage.ready();
        this.storage.get('token-to-send-quote').then(function (Token) {
            _this.token = Token;
            console.log("token login", _this.token);
        });
        this.apiProvider.getMenu(this.token).subscribe(function (DATA) {
            console.log("menu", DATA.menus);
            _this.cranes = DATA.menus;
            console.log("testing", _this.cranes);
        });
    }
    HomePage.prototype.Menu = function (craneDATA) {
        console.log("product", craneDATA);
        if (craneDATA.childrencount != 0) {
            console.log("product", craneDATA.id);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__menu_menu__["a" /* MenuPage */], {
                prodcut: craneDATA.id
            });
        }
        else {
            console.log("product", craneDATA.id);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__menuitems_menuitems__["a" /* MenuitemsPage */], {
                item: craneDATA.id
            });
        }
    };
    HomePage.prototype.lockout = function () {
        var _this = this;
        this.storage.ready();
        this.storage.get('api_token').then(function (value) {
            console.log("toekn displayed", value);
            var confirm = _this.alertCtrl.create({
                title: 'Logout',
                message: 'Are you sure you want to logout',
                buttons: [
                    {
                        text: 'Yes',
                        handler: function () {
                            // console.log('Disagree clicked');
                            if (value != null) {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__rememberme_rememberme__["a" /* RemembermePage */]);
                            }
                            else {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
                            }
                        }
                    },
                    {
                        text: 'No',
                        handler: function () {
                            console.log('Agree clicked');
                        }
                    }
                ]
            });
            confirm.present();
        });
        //   console.log("h", this.storagetoken)
        //   if(this.LoginRemeber == "remember-me"){
        //     this.navCtrl.push(RemembermePage,{
        //       token:this.token
        //     })
        //   }
        //   else{
        //       this.storage.clear();
        //     // this.navCtrl.setRoot(LoginPage)
        //     this.navCtrl.push(RemembermePage)
        //   }
        //   console.log("hello",)
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/rcm15/Documents/applord project/liftandshiftapp/src/pages/home/home.html"*/'<ion-header >\n\n  <ion-navbar >\n    <ion-title>Home<div float-right class="version">version 4.9</div></ion-title>\n\n    <ion-buttons end>\n      <button ion-button  color="danger" tappable (click)="lockout()">\n        <ion-icon name="lock"></ion-icon>\n      </button>\n\n    </ion-buttons>\n  \n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n<ion-content class="card-background-page " >\n\n\n\n<img src="assets/imgs/liftshiftlogo.png">\n\n\n <ion-card class="ion-card" *ngFor="let craneDATA of cranes" (click)="Menu(craneDATA)">\n    <div class="card-title">{{craneDATA.name}}</div>\n  </ion-card>\n\n  <div >\n\n\n  </div>\n\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/rcm15/Documents/applord project/liftandshiftapp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewaccessoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sendemailaccessories_sendemailaccessories__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auto_auto__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ViewaccessoriesPage = /** @class */ (function () {
    function ViewaccessoriesPage(navCtrl, navParams, alertCtrl, Api, loadingCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.Api = Api;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.storage.ready();
        this.storage.get('token-to-send-quote').then(function (Token) {
            _this.token = Token;
            console.log("token login", _this.token);
        });
        this.installations = navParams.get('installation');
        console.log("inst", this.installations);
        this.object = navParams.get('object');
        console.log("1", this.object);
        this.name = this.object[0].name;
        this.price = Number.parseFloat(this.object[0].RawCranePrice).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
        this.Accessories = navParams.get('Accessories');
        console.log("2", this.Accessories);
        this.sumtotal = navParams.get('sumtotal');
        console.log("3", this.sumtotal);
        this.sumtotal = Number.parseFloat(this.sumtotal).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
        this.subTotal = Number.parseFloat(this.subTotal).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
        this.vat = navParams.get('vat');
        this.vat = Number.parseFloat(this.vat).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
        console.log("4", this.vat);
        this.finalTotal = navParams.get('finalTotal');
        this.finalTotal = Number.parseFloat(this.finalTotal).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
        console.log("5", this.finalTotal);
    }
    ViewaccessoriesPage.prototype.emailQuote = function () {
        var _this = this;
        var test = this.Api.getapiclients(this.token);
        console.log("token", test);
        var alert = this.alertCtrl.create({
            title: 'Send Quote',
            message: 'Please select to send quote',
            buttons: [
                {
                    text: 'Manual',
                    handler: function () {
                        // console.log('Cancel clicked');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__sendemailaccessories_sendemailaccessories__["a" /* SendemailaccessoriesPage */], {
                            object: _this.object,
                            Accessories: _this.Accessories,
                            installations: _this.installations,
                            sumtotal: _this.sumtotal,
                            vat: _this.vat,
                            subTotal: _this.subTotal,
                            finalTotal: _this.finalTotal
                        });
                    }
                },
                {
                    text: 'Autofill',
                    handler: function () {
                        var loading = _this.loadingCtrl.create({
                            content: 'Please wait...'
                        });
                        loading.present();
                        setTimeout(function () {
                            loading.dismiss();
                            console.log('Buy clicked');
                            var accessoriesCondion = "true";
                            console.log("acc1", _this.object);
                            console.log("acc2", _this.installations);
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__auto_auto__["a" /* AutoPage */], {
                                object: _this.object,
                                Accessories: _this.Accessories,
                                installations: _this.installations,
                                sumtotal: _this.sumtotal,
                                vat: _this.vat,
                                subTotal: _this.subTotal,
                                finalTotal: _this.finalTotal,
                                accessoriesCondion: accessoriesCondion
                            });
                        }, 3000);
                    }
                }
            ]
        });
        alert.present();
    };
    ViewaccessoriesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewaccessoriesPage');
    };
    ViewaccessoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-viewaccessories',template:/*ion-inline-start:"/Users/rcm15/Documents/applord project/liftandshiftapp/src/pages/viewaccessories/viewaccessories.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="grid-basic-page" padding>\n\n  <img  src="assets/imgs/logo.jpg">\n\n    <ion-grid>\n\n      <ion-row>\n        <ion-col col-8>\n        <strong>Description</strong>\n        </ion-col>\n        <ion-col col-4>\n        <strong>Amount</strong>\n        </ion-col>\n      </ion-row>\n\n\n      <ion-row *ngIf="name !=\'\' ">\n        <ion-col col-8>\n          {{name}}\n        </ion-col>\n        <ion-col col-4>\n        R{{price}}\n        </ion-col>\n      </ion-row>\n\n      <ion-row  *ngFor="let installation of installations" >\n        <ion-col col-8>\n          {{installation.name}}\n        </ion-col>\n        <ion-col col-4>\n          R{{installation.zar_amount | number : \'1.2\'}}\n        </ion-col>\n      </ion-row>\n\n      <ion-row  *ngFor="let accessories of Accessories" >\n        <ion-col col-8>\n          {{accessories.name}}\n        </ion-col>\n        <ion-col col-4>\n          R{{accessories.zar_amount | number : \'1.2\'}}\n        </ion-col>\n      </ion-row>\n\n\n      <ion-row>\n        <ion-col offset-4>\n          Sub Total\n        </ion-col>\n        <ion-col col-4>\n          R{{sumtotal}}\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col offset-4>\n           15% VAT\n        </ion-col>\n        <ion-col col-4>\n          R {{vat}}\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col offset-4>\n        Total\n        </ion-col>\n        <ion-col col-4>\n          R{{finalTotal}}\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n\n      <button ion-button block color="danger" (click)="emailQuote()">\n         <!-- <ion-icon name=\'send\'></ion-icon> -->\n         Email Quote\n       </button>\n\n\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/rcm15/Documents/applord project/liftandshiftapp/src/pages/viewaccessories/viewaccessories.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], ViewaccessoriesPage);
    return ViewaccessoriesPage;
}());

//# sourceMappingURL=viewaccessories.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendemailaccessoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SendemailaccessoriesPage = /** @class */ (function () {
    function SendemailaccessoriesPage(navCtrl, navParams, Api, loadingCtrl, alertCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Api = Api;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.auto = navParams.get('auto');
        console.log("", this.auto);
        if (this.auto == "true") {
            this.sendemailData = { "cc": "", "deliverytime": "", "notes": "" };
            this.business = navParams.get('business');
            console.log("bu", this.business);
            this.sendemailData = { "BusinessName": this.business.Name, "Address": this.business.PhysicalAddress, "ContactPerson": this.business.ContactPerson, "ContactNo": this.business.CONTACTCELLNUMBER, "to": this.business.CONTACTEMAIL, "cc": this.sendemailData.cc, "deliverytime": this.sendemailData.deliverytime, "notes": this.sendemailData.notes };
            // this.sendemailData = { "BusinessName": "", "Address": "", "ContactPerson": "", "ContactNo": "", "to": "", "cc": "", "deliverytime": "", "notes": "" }
            this.object = navParams.get('object');
            console.log("", this.object);
            console.log("id is empty", this.object[0].id);
            this.Accessories = navParams.get('Accessories');
            console.log("", this.Accessories);
            this.installations = navParams.get('installations');
            console.log("", this.installations);
            this.sumtotal = navParams.get('sumtotal');
            console.log("", this.sumtotal);
            this.vat = navParams.get('vat');
            console.log("", this.vat);
            this.finalTotal = navParams.get('finalTotal');
            console.log("", this.finalTotal);
            if (this.object[0].id == "") {
                console.log("one");
                // this.sendobject = { "main_product_id": this.object[0].id, "main_product_info": this.object, "bussiness_name": this.sendemailData, "fifteen_percent_vat": this.vat, "zar_total": this.finalTotal, "hidendetails": this.object[0].Quote_type, "quote_type": this.object[0].quote_type, "discount_percentage": "0.025", "discount_amount": this.object[0].discount_percentage, "Instalation": this.installations, "Accessories": this.Accessories, "zar_sub_total": this.sumtotal }
                this.sendobject = { "main_product_id": '327', "main_product_info": this.Accessories, "bussiness_name": this.sendemailData, "fifteen_percent_vat": this.vat, "zar_total": this.finalTotal, "hidendetails": this.object[0].Quote_type, "quote_type": this.object[0].quote_type, "discount_percentage": "0.025", "discount_amount": this.object[0].discount_percentage, "Instalation": this.installations, "Accessories": this.Accessories, "zar_sub_total": this.sumtotal };
            }
            else {
                this.sendobject = { "main_product_id": this.object[0].id, "main_product_info": this.object, "bussiness_name": this.sendemailData, "fifteen_percent_vat": this.vat, "zar_total": this.finalTotal, "hidendetails": this.object[0].Quote_type, "quote_type": this.object[0].quote_type, "discount_percentage": "0.025", "discount_amount": this.object[0].discount_percentage, "Instalation": this.installations, "Accessories": this.Accessories, "zar_sub_total": this.sumtotal };
            }
            console.log("id is empty", this.object[0].id);
            this.Accessories = navParams.get('Accessories');
            console.log("", this.Accessories);
            this.installations = navParams.get('installations');
            console.log("", this.installations);
            this.sumtotal = navParams.get('sumtotal');
            console.log("", this.sumtotal);
            this.vat = navParams.get('vat');
            console.log("", this.vat);
            this.finalTotal = navParams.get('finalTotal');
            console.log("", this.finalTotal);
            this.storage.ready();
            this.storage.get('token-to-send-quote').then(function (token) {
                _this.token = token;
            });
        }
        else {
            this.object = navParams.get('object');
            console.log("", this.object);
            console.log("id is empty", this.object[0].id);
            this.Accessories = navParams.get('Accessories');
            console.log("", this.Accessories);
            this.installations = navParams.get('installations');
            console.log("", this.installations);
            this.sumtotal = navParams.get('sumtotal');
            console.log("", this.sumtotal);
            this.vat = navParams.get('vat');
            console.log("", this.vat);
            this.finalTotal = navParams.get('finalTotal');
            console.log("", this.finalTotal);
            this.sendemailData = { "BusinessName": "", "Address": "", "ContactPerson": "", "ContactNo": "", "to": "", "cc": "", "deliverytime": "", "notes": "" };
            if (this.object[0].id == "") {
                this.sendobject = { "main_product_id": '327', "main_product_info": this.Accessories, "bussiness_name": this.sendemailData, "fifteen_percent_vat": this.vat, "zar_total": this.finalTotal, "hidendetails": this.object[0].Quote_type, "quote_type": this.object[0].quote_type, "discount_percentage": "0.025", "discount_amount": this.object[0].discount_percentage, "Instalation": this.installations, "Accessories": this.Accessories, "zar_sub_total": this.sumtotal };
            }
            else {
                this.sendobject = { "main_product_id": this.object[0].id, "main_product_info": this.object, "bussiness_name": this.sendemailData, "fifteen_percent_vat": this.vat, "zar_total": this.finalTotal, "hidendetails": this.object[0].Quote_type, "quote_type": this.object[0].quote_type, "discount_percentage": "0.025", "discount_amount": this.object[0].discount_percentage, "Instalation": this.installations, "Accessories": this.Accessories, "zar_sub_total": this.sumtotal };
            }
            this.storage.ready();
            this.storage.get('token-to-send-quote').then(function (token) {
                _this.token = token;
            });
        }
    }
    SendemailaccessoriesPage.prototype.sendaccessories = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
        });
        loader.dismiss();
        loader.present().then(function () {
            console.log("view", _this.sendobject);
            _this.Api.postsendemailquote(JSON.stringify(_this.sendobject), _this.token).subscribe(function (QuoteData) {
                _this.sendDATA = QuoteData;
                console.log("view", _this.sendDATA);
                if (_this.sendDATA.message == "Quote sent successifully") {
                    loader.dismiss();
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Your quote has been sent successfully to the email address you entered ',
                        buttons: [
                            {
                                text: 'Yes',
                                handler: function (data) {
                                    console.log('Cancel clicked');
                                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                                }
                            }
                        ]
                    });
                    alert_1.present();
                }
                else {
                    loader.dismiss();
                    var alert_2 = _this.alertCtrl.create({
                        title: 'Error',
                        message: '' + _this.sendDATA.error,
                        buttons: ['OK']
                    });
                    alert_2.present();
                }
            }, function (err) {
                loader.dismiss();
                console.log("error message", err);
                var alert = _this.alertCtrl.create({
                    title: 'Error',
                    subTitle: err,
                    buttons: ['OK']
                });
                alert.present();
            });
        });
    };
    SendemailaccessoriesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SendemailaccessoriesPage');
    };
    SendemailaccessoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sendemailaccessories',template:/*ion-inline-start:"/Users/rcm15/Documents/applord project/liftandshiftapp/src/pages/sendemailaccessories/sendemailaccessories.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n<div *ngIf="auto">\n  <ion-list>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <ion-icon name="ios-home-outline" item-start></ion-icon>\n      </ion-avatar>\n      <h2>Business Name</h2>\n      <h3>{{business.Name}}</h3>\n\n    </ion-item>\n\n\n    <ion-item>\n      <ion-avatar item-start>\n        <ion-icon name="ios-locate-outline" item-start></ion-icon>\n      </ion-avatar>\n      <h2>Address</h2>\n      <h3>{{business.PhysicalAddress}}</h3>\n\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <ion-icon name="ios-contact-outline" item-start></ion-icon>\n      </ion-avatar>\n      <h2>Contact Person</h2>\n      <h3>{{business.ContactPerson}}</h3>\n\n    </ion-item>\n\n\n    <ion-item>\n      <ion-avatar item-start>\n        <ion-icon name="ios-call-outline" item-start></ion-icon>\n      </ion-avatar>\n      <h2>Contact No</h2>\n      <h3>{{business.CONTACTCELLNUMBER}}</h3>\n\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <ion-icon name="ios-mail-outline" item-start></ion-icon>\n      </ion-avatar>\n      <h2>E-mail</h2>\n      <h3>{{business.CONTACTEMAIL}}</h3>\n\n    </ion-item>\n\n\n\n    <ion-item class="style-item">\n      <ion-label color="danger">cc</ion-label>\n      <ion-input class="style-input" [(ngModel)]="sendemailData.cc"></ion-input>\n    </ion-item>\n    <ion-item class="style-item">\n      <ion-label color="danger">Delivery Time</ion-label>\n      <ion-input class="style-input" [(ngModel)]="sendemailData.deliverytime"></ion-input>\n    </ion-item>\n    <ion-item class="style-item">\n      <ion-label color="danger">Notes</ion-label>\n      <ion-input class="style-input" [(ngModel)]="sendemailData.notes"></ion-input>\n    </ion-item>\n\n\n  </ion-list>\n</div>\n\n\n<div *ngIf="!auto">\n  <ion-list>\n    <ion-item class="style-item">\n      <ion-label color="danger">Business Name</ion-label>\n      <ion-input class="style-input" [(ngModel)]="sendemailData.BusinessName"></ion-input>\n    </ion-item>\n\n\n    <ion-item class="style-item">\n      <ion-label color="danger">Address</ion-label>\n      <ion-input class="style-input" [(ngModel)]="sendemailData.Address"></ion-input>\n    </ion-item>\n\n\n\n    <ion-item class="style-item">\n      <ion-label color="danger">Contact Person</ion-label>\n      <ion-input class="style-input" [(ngModel)]="sendemailData.ContactPerson"></ion-input>\n    </ion-item>\n\n\n    <ion-item class="style-item">\n      <ion-label color="danger">Contact No</ion-label>\n      <ion-input class="style-input" [(ngModel)]="sendemailData.ContactNo"></ion-input>\n    </ion-item>\n\n\n\n    <ion-item class="style-item">\n      <ion-label color="danger">E-Mail</ion-label>\n      <ion-input class="style-input" type="email" [(ngModel)]="sendemailData.to"></ion-input>\n    </ion-item>\n\n    <ion-item class="style-item">\n      <ion-label color="danger">cc</ion-label>\n      <ion-input class="style-input" [(ngModel)]="sendemailData.cc"></ion-input>\n    </ion-item>\n    <ion-item class="style-item">\n      <ion-label color="danger">Delivery Time</ion-label>\n      <ion-input class="style-input" [(ngModel)]="sendemailData.deliverytime"></ion-input>\n    </ion-item>\n    <ion-item class="style-item">\n      <ion-label color="danger">Notes</ion-label>\n      <ion-input class="style-input" [(ngModel)]="sendemailData.notes"></ion-input>\n    </ion-item>\n\n\n  </ion-list>\n</div>\n\n\n\n  <button ion-button block color="danger" (click)="sendaccessories()">\n\n      Send\n     </button>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/rcm15/Documents/applord project/liftandshiftapp/src/pages/sendemailaccessories/sendemailaccessories.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], SendemailaccessoriesPage);
    return SendemailaccessoriesPage;
}());

//# sourceMappingURL=sendemailaccessories.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuitemsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_product__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuitemsPage = /** @class */ (function () {
    function MenuitemsPage(navCtrl, navParams, Api) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Api = Api;
        this.price = 0.00;
        this.item = navParams.get('item');
        console.log("ID", this.item);
        this.Api.getproducts(this.item).subscribe(function (DATA) {
            _this.results = DATA;
            _this.prodcuts = _this.results.data;
            console.log("test", _this.prodcuts);
        });
    }
    MenuitemsPage.prototype.products = function (prodcut) {
        var _this = this;
        console.log("", prodcut.id);
        this.Api.getproduct(prodcut.id).subscribe(function (DATA) {
            console.log("help", DATA);
            // console.log("",DATA.data['0'].attachments)
            _this.attachments = DATA.data['0'].attachments;
            console.log("attachments", _this.attachments);
            var set = false;
            for (var _i = 0; _i < _this.attachments.length; _i++) {
                if (_this.attachments[_i].attachment_description == "img") {
                    var img = _this.attachments[_i].attachment_description;
                    console.log("ins", _this.attachments[_i]);
                    _this.img = _this.attachments[_i].attachment_path;
                    set = true;
                }
            }
            if (set == false) {
                _this.img = "/assets/images/default-image.png";
                console.log("help", _this.img);
            }
            if (DATA.data['0'].eur_amount != 0) {
                _this.productobject = [{ "id": DATA.data['0'].id, "img": _this.img, "name": DATA.data['0'].name, "currency": "price_EURO", "price": DATA.data['0'].eur_amount }];
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__product_product__["a" /* ProductPage */], {
                    object: _this.productobject
                });
            }
            else if (DATA.data['0'].zar_amount != 0) {
                _this.productobject = [{ "id": DATA.data['0'].id, "img": _this.img, "name": DATA.data['0'].name, "currency": "price_ZAR", "price": DATA.data['0'].zar_amount }];
                console.log("object", _this.productobject);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__product_product__["a" /* ProductPage */], {
                    object: _this.productobject
                });
            }
            else {
                _this.productobject = [{ "id": DATA.data['0'].id, "img": _this.img, "name": DATA.data['0'].name, "currency": "price_EMPTY", "price": _this.price }];
                console.log("object", _this.productobject);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__product_product__["a" /* ProductPage */], {
                    object: _this.productobject
                });
            }
        });
    };
    MenuitemsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuitemsPage');
    };
    MenuitemsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menuitems',template:/*ion-inline-start:"/Users/rcm15/Documents/applord project/liftandshiftapp/src/pages/menuitems/menuitems.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="card-background-page">\n\n\n  <img   src="assets/imgs/logo.jpg">\n\n\n  <ion-searchbar  style="background-color:red" placeholder="search by name" [(ngModel)]="searchTerm" (ionInput)="setFilteredItems()"></ion-searchbar>\n\n<br>\n  <div>\n\n  </div>\n  <ion-card class="ion-card" *ngFor="let prodcut of prodcuts" (click)="products(prodcut)">\n    <div class="card-title">{{prodcut.name}}</div>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/rcm15/Documents/applord project/liftandshiftapp/src/pages/menuitems/menuitems.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], MenuitemsPage);
    return MenuitemsPage;
}());

//# sourceMappingURL=menuitems.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sendemail_sendemail__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auto_auto__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ViewPage = /** @class */ (function () {
    function ViewPage(navCtrl, navParams, alertCtrl, Api, storage, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.Api = Api;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.total = 0;
        this.pricedesc = [];
        this.craneobjectpdf = [];
        this.new_pricepiped = 0;
        this.storage.ready();
        this.storage.get('token-to-send-quote').then(function (Token) {
            _this.token = Token;
            console.log("token login", _this.token);
        });
        this.logindetails = navParams.get('logindetails');
        console.log(this.logindetails);
        this.lastrecordVar = navParams.get('lastrecordVar');
        console.log(this.lastrecordVar);
        this.installations = navParams.get('invoice');
        console.log("objects", this.installations);
        this.object = navParams.get('object');
        console.log("object", this.object);
        this.CraneName = this.object["0"].name;
        this.viewcranePrice = this.object["0"].CranepriceFormated;
        this.originalpriceraw = navParams.get("originalpriceraw");
        this.formatoriginalpriceraw = Number.parseFloat(this.originalpriceraw).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
        console.log("format price ", this.formatoriginalpriceraw);
        this.vat = navParams.get("vat");
        this.vat = Number.parseFloat(this.vat).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
        this.vatdisplay = Number.parseFloat(this.vat).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
        console.log("format vat", Number.parseFloat(this.vatdisplay).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"));
        console.log("vat", Number.parseFloat(this.vat).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"));
        this.totalamount = navParams.get("totalamount");
        this.totalamount = Number.parseFloat(this.totalamount).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
        this.totalpricedisplay = Number.parseFloat(this.totalamount).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
        console.log("total price", Number.parseFloat(this.totalamount).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"));
        this.craneprice = navParams.get("craneprice");
        this.SubTotal = this.craneprice;
        console.log("price", this.craneprice);
        this.cran = navParams.get("crane");
        console.log("crane", this.cran);
        this.viewQuot = navParams.get("viewQuote");
        this.objectformatprice = this.viewQuot.price;
        this.priceobjects = [{ "subTotal": this.SubTotal, "Vat": this.vat, "Total": this.totalamount }];
        console.log("inside constructor view quote", this.viewQuot);
        this.description = this.viewQuot.description;
        this.total = this.total + this.viewQuot.price;
        this.viewquoteTota = navParams.get("viewquoteTotal");
        console.log("whats happening ===>", Number.parseFloat(this.viewquoteTota).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"));
        console.log("====>", this.craneprice);
        this.sum = this.craneprice;
        /////send email////
        this.pricedescription = navParams.get('pricedescription');
        console.log("crane object", this.pricedescription);
        this.date = navParams.get('date');
        console.log("date", this.date);
        this.ref = navParams.get('ref');
        console.log("ref", this.ref);
        this.emaildetails = navParams.get('emaildetails');
        console.log("invoice", this.emaildetails);
        this.totalcranechecked = navParams.get('totalcranechecked');
        console.log("invoice", this.totalcranechecked);
        this.newobject = navParams.get('newobject');
        console.log("invoice", this.newobject);
        this.new_price = navParams.get('new_price');
        console.log("new crane price", this.new_price);
        this.new_pricepiped = Number.parseFloat(this.new_price).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
        // this.convertedcurrenc =  Number.parseFloat(this.new_price).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
    }
    ViewPage.prototype.emailQuote = function () {
        var _this = this;
        console.log("token view", this.token);
        var test = this.Api.getapiclients(this.token);
        console.log("token", test);
        // this.pricedescription = navParams.get('pricedescription')
        console.log("crane object", this.pricedescription);
        // this.date = navParams.get('date')
        console.log("date", this.date);
        // this.ref = navParams.get('ref')
        console.log("ref", this.ref);
        // this.invoice = navParams.get('invoice')
        console.log("invoice", this.invoice);
        // this.emaildetails = navParams.get('emaildetails')
        console.log("invoice", this.emaildetails);
        // this.totalcranechecked = navParams.get('totalcranechecked')
        console.log("invoice", this.totalcranechecked);
        // this.newobject = navParams.get('newobject')
        console.log("invoice", this.newobject);
        // this.new_price = navParams.get('new_price')
        console.log("new crane price", this.new_price);
        console.log("old crane price", this.formatoriginalpriceraw);
        var confirm = this.alertCtrl.create({
            title: 'Send Quote',
            message: 'Please select to send quote',
            buttons: [
                {
                    text: 'Manual',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__sendemail_sendemail__["a" /* SendemailPage */], {
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
                            userlogindetails: _this.logindetails,
                            object: _this.object,
                            installations: _this.installations,
                            Amount: _this.priceobjects
                        });
                    }
                },
                {
                    text: 'Autofill',
                    handler: function () {
                        var loading = _this.loadingCtrl.create({
                            content: 'Please wait...'
                        });
                        loading.present();
                        setTimeout(function () {
                            loading.dismiss();
                            console.log('Agree clicked');
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__auto_auto__["a" /* AutoPage */], {
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
                                ice2: _this.originalpriceraw,
                                // totalprice: this.totalamount,
                                // logindetails: this.logindetails,
                                // lastrecordVar: this.lastrecordVar,
                                //objects to be send 
                                userlogindetails: _this.logindetails,
                                object: _this.object,
                                installations: _this.installations,
                                Amount: _this.priceobjects
                            });
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
    };
    ViewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewPage');
    };
    ViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-view',template:/*ion-inline-start:"/Users/rcm15/Documents/applord project/liftandshiftapp/src/pages/view/view.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="grid-basic-page" padding>\n\n  <img  src="assets/imgs/logo.jpg">\n\n    <ion-grid>\n\n      <ion-row>\n        <ion-col col-8>\n        <strong>Description</strong>\n        </ion-col>\n        <ion-col col-4>\n        <strong>Amount</strong>\n        </ion-col>\n      </ion-row>\n\n\n      <ion-row>\n        <ion-col col-8>\n          {{CraneName}}\n        </ion-col>\n        <ion-col col-4>\n        R{{formatoriginalpriceraw}}\n        </ion-col>\n      </ion-row>\n\n      <ion-row  *ngFor="let installation of installations" >\n        <ion-col col-8>\n          {{installation.name}}\n        </ion-col>\n        <ion-col col-4>\n          R{{installation.zar_amount}}\n        </ion-col>\n      </ion-row>\n\n\n      <ion-row>\n        <ion-col offset-4>\n          Sub Total\n        </ion-col>\n        <ion-col col-4>\n          R{{SubTotal}}\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col offset-4>\n           15% VAT\n        </ion-col>\n        <ion-col col-4>\n          R {{vat}}\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col offset-4>\n        Total\n        </ion-col>\n        <ion-col col-4>\n          R{{totalamount}}\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n\n\n    <button ion-button block color="danger" (click)="emailQuote()">\n       <!-- <ion-icon name=\'send\'></ion-icon> -->\n       Email Quote\n     </button>\n\n\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/rcm15/Documents/applord project/liftandshiftapp/src/pages/view/view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], ViewPage);
    return ViewPage;
}());

//# sourceMappingURL=view.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendemailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SendemailPage = /** @class */ (function () {
    function SendemailPage(navCtrl, navParams, Api, loadingCtrl, alertCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Api = Api;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.SendQuote = [];
        this.auto = navParams.get('auto');
        console.log("", this.auto);
        if (this.auto == "true") {
            this.sendemailData = { "cc": "", "deliverytime": "", "notes": "" };
            this.business = navParams.get('business');
            console.log("bu", this.business);
            this.sendemailData = { "BusinessName": this.business.Name, "Address": this.business.PhysicalAddress, "ContactPerson": this.business.ContactPerson, "ContactNo": this.business.CONTACTCELLNUMBER, "to": this.business.CONTACTEMAIL, "cc": this.sendemailData.cc, "deliverytime": this.sendemailData.deliverytime, "notes": this.sendemailData.notes };
            console.log("auto fill");
            this.userlogindetails = navParams.get('userlogindetails');
            console.log("1", this.userlogindetails);
            this.object = navParams.get('object');
            console.log("2", this.object);
            this.installations = navParams.get('installations');
            console.log("3", this.installations);
            this.item = navParams.get('item');
            console.log("this.item", this.item);
            this.Amount = navParams.get('Amount');
            console.log("4", this.Amount);
            //localstorage 
            this.storage.ready();
            this.storage.get('token-to-send-quote').then(function (Token) {
                _this.token = Token;
                console.log("token is available", _this.token);
                console.log("main ID", _this.object["0"].id);
                console.log("main ID 2", _this.object[0].id);
                _this.sendobject = { "main_product_id": _this.object[0].id, "main_product_info": _this.object, "bussiness_name": _this.sendemailData, "fifteen_percent_vat": _this.Amount["0"].Vat, "zar_total": _this.Amount["0"].Total, "hidendetails": _this.object[0].Quote_type, "quote_type": _this.object[0].quote_type, "discount_percentage": "0.025", "discount_amount": _this.object[0].discount_percentage, "Instalation": _this.installations, "zar_sub_total": _this.Amount["0"].subTotal };
            });
        }
        else {
            console.log("no auto fill");
            this.userlogindetails = navParams.get('userlogindetails');
            console.log("1", this.userlogindetails);
            this.object = navParams.get('object');
            console.log("2", this.object);
            this.installations = navParams.get('installations');
            console.log("3", this.installations);
            this.Amount = navParams.get('Amount');
            console.log("4", this.Amount);
            this.SendQuote.push(this.object);
            //localstorage 
            this.storage.ready();
            this.storage.get('token-to-send-quote').then(function (Token) {
                _this.token = Token;
                console.log("token is available", _this.token);
            });
            console.log("see results", this.SendQuote);
            this.sendemailData = { "BusinessName": "", "Address": "", "ContactPerson": "", "ContactNo": "", "to": "", "cc": "", "deliverytime": "", "notes": "" };
            console.log("main ID", this.object["0"].id);
            console.log("main ID 2", this.object[0].id);
            this.sendobject = { "main_product_id": this.object[0].id, "main_product_info": this.object, "bussiness_name": this.sendemailData, "fifteen_percent_vat": this.Amount["0"].Vat, "zar_total": this.Amount["0"].Total, "hidendetails": this.object[0].Quote_type, "quote_type": this.object[0].quote_type, "discount_percentage": "0.025", "discount_amount": this.object[0].discount_percentage, "Instalation": this.installations, "zar_sub_total": this.Amount["0"].subTotal };
            this.emaildetails = navParams.get("emaildetails");
            console.log("", this.emaildetails);
        }
    }
    SendemailPage.prototype.send = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
        });
        loader.dismiss();
        loader.present().then(function () {
            console.log("view", _this.sendobject);
            _this.Api.postsendemailquote(JSON.stringify(_this.sendobject), _this.token).subscribe(function (QuoteData) {
                _this.sendDATA = QuoteData;
                console.log("view", _this.sendDATA);
                if (_this.sendDATA.message == "Quote sent successifully") {
                    loader.dismiss();
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Your quote has been sent successfully to the email address you entered ',
                        buttons: [
                            {
                                text: 'Ok',
                                handler: function (data) {
                                    console.log('Cancel clicked');
                                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                                }
                            }
                        ]
                    });
                    alert_1.present();
                }
                else {
                    console.log("", _this.sendDATA.error);
                    loader.dismiss();
                    var alert_2 = _this.alertCtrl.create({
                        title: 'Error',
                        message: '' + _this.sendDATA.error,
                        buttons: ['OK']
                    });
                    alert_2.present();
                }
            }, function (err) {
                loader.dismiss();
                console.log(err);
                var alert = _this.alertCtrl.create({
                    title: 'Error',
                    subTitle: 'Make sure that this PDF has the quotation template',
                    buttons: ['OK']
                });
                alert.present();
            });
        });
    };
    SendemailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SendemailPage');
    };
    SendemailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sendemail',template:/*ion-inline-start:"/Users/rcm15/Documents/applord project/liftandshiftapp/src/pages/sendemail/sendemail.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n  \n<div *ngIf="auto">\n<ion-list>\n\n<ion-item>\n  <ion-avatar item-start>\n    <ion-icon name="ios-home-outline" item-start></ion-icon>\n  </ion-avatar>\n  <h2>Business Name</h2>\n  <h3>{{business.Name}}</h3>\n\n</ion-item>\n\n\n<ion-item>\n  <ion-avatar item-start>\n    <ion-icon name="ios-locate-outline" item-start></ion-icon>\n  </ion-avatar>\n  <h2>Address</h2>\n  <h3>{{business.PhysicalAddress}}</h3>\n\n</ion-item>\n\n<ion-item>\n  <ion-avatar item-start>\n    <ion-icon name="ios-contact-outline" item-start></ion-icon>\n  </ion-avatar>\n  <h2>Contact Person</h2>\n  <h3>{{business.ContactPerson}}</h3>\n\n</ion-item>\n\n\n<ion-item>\n  <ion-avatar item-start>\n    <ion-icon name="ios-call-outline" item-start></ion-icon>\n  </ion-avatar>\n  <h2>Contact No</h2>\n  <h3>{{business.CONTACTCELLNUMBER}}</h3>\n\n</ion-item>\n\n<ion-item>\n  <ion-avatar item-start>\n    <ion-icon name="ios-mail-outline" item-start></ion-icon>\n  </ion-avatar>\n  <h2>E-mail</h2>\n  <h3>{{business.CONTACTEMAIL}}</h3>\n\n</ion-item>\n\n\n\n  <ion-item class="style-item">\n    <ion-label color="danger">cc</ion-label>\n    <ion-input class="style-input" [(ngModel)]="sendemailData.cc"></ion-input>\n  </ion-item>\n  <ion-item class="style-item">\n    <ion-label color="danger">Delivery Time</ion-label>\n    <ion-input class="style-input" [(ngModel)]="sendemailData.deliverytime"></ion-input>\n  </ion-item>\n  <ion-item class="style-item">\n    <ion-label color="danger">Notes</ion-label>\n    <ion-input class="style-input" [(ngModel)]="sendemailData.notes"></ion-input>\n  </ion-item>\n\n\n</ion-list>\n</div>\n\n\n<div *ngIf="!auto">\n<ion-list>\n  <ion-item class="style-item">\n    <ion-label color="danger">Business Name</ion-label>\n    <ion-input class="style-input" [(ngModel)]="sendemailData.BusinessName"></ion-input>\n  </ion-item>\n\n\n  <ion-item class="style-item">\n    <ion-label color="danger">Address</ion-label>\n    <ion-input class="style-input" [(ngModel)]="sendemailData.Address"></ion-input>\n  </ion-item>\n\n\n\n  <ion-item class="style-item">\n    <ion-label color="danger">Contact Person</ion-label>\n    <ion-input class="style-input" [(ngModel)]="sendemailData.ContactPerson"></ion-input>\n  </ion-item>\n\n\n  <ion-item class="style-item">\n    <ion-label color="danger">Contact No</ion-label>\n    <ion-input class="style-input" [(ngModel)]="sendemailData.ContactNo"></ion-input>\n  </ion-item>\n\n\n\n  <ion-item class="style-item">\n    <ion-label color="danger">E-Mail</ion-label>\n    <ion-input class="style-input" type="email" [(ngModel)]="sendemailData.to"></ion-input>\n  </ion-item>\n\n  <ion-item class="style-item">\n    <ion-label color="danger">cc</ion-label>\n    <ion-input class="style-input" [(ngModel)]="sendemailData.cc"></ion-input>\n  </ion-item>\n  <ion-item class="style-item">\n    <ion-label color="danger">Delivery Time</ion-label>\n    <ion-input class="style-input" [(ngModel)]="sendemailData.deliverytime"></ion-input>\n  </ion-item>\n  <ion-item class="style-item">\n    <ion-label color="danger">Notes</ion-label>\n    <ion-input class="style-input" [(ngModel)]="sendemailData.notes"></ion-input>\n  </ion-item>\n\n\n</ion-list>\n</div>\n  \n\n\n\n\n\n\n\n  <button ion-button block color="danger" (click)="send()">\n\n      Send\n     </button>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/rcm15/Documents/applord project/liftandshiftapp/src/pages/sendemail/sendemail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], SendemailPage);
    return SendemailPage;
}());

//# sourceMappingURL=sendemail.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sendemail_sendemail__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sendemailaccessories_sendemailaccessories__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AutoPage = /** @class */ (function () {
    function AutoPage(navCtrl, navParams, dataService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.searchTerm = '';
        this.accessoriesCondion = navParams.get('accessoriesCondion');
        console.log("ac", this.accessoriesCondion);
        if (this.accessoriesCondion === "true") {
            this.object = navParams.get('object');
            this.Accessories = navParams.get('Accessories');
            this.installations = navParams.get('installations');
            this.sumtotal = navParams.get('sumtotal');
            this.vat = navParams.get('vat');
            this.subTotal = navParams.get('subTotal');
            this.finalTotal = navParams.get('finalTotal');
            this.accessoriesCondion = navParams.get('accessoriesCondion');
        }
        else {
            console.log("accessories error");
            this.userlogindetails = navParams.get('userlogindetails');
            console.log("1", this.userlogindetails);
            this.object = navParams.get('object');
            console.log("2", this.object);
            this.installations = navParams.get('installations');
            console.log("3", this.installations);
            this.Amount = navParams.get('Amount');
            console.log("4", this.Amount);
        }
    }
    AutoPage.prototype.ionViewDidLoad = function () {
        this.setFilteredItems();
    };
    AutoPage.prototype.setFilteredItems = function () {
        this.items = this.dataService.filterItems(this.searchTerm);
        console.log("", this.items);
    };
    AutoPage.prototype.add = function (item) {
        var auto = "true";
        if (this.accessoriesCondion === "true") {
            console.log("acc1", this.object);
            console.log("acc2", this.Accessories);
            console.log("acc2", this.installations);
            console.log("send with accessories");
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__sendemailaccessories_sendemailaccessories__["a" /* SendemailaccessoriesPage */], {
                object: this.object,
                Accessories: this.Accessories,
                installations: this.installations,
                sumtotal: this.sumtotal,
                vat: this.vat,
                subTotal: this.subTotal,
                finalTotal: this.finalTotal,
                auto: auto,
                business: item,
            });
        }
        else {
            console.log("send");
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__sendemail_sendemail__["a" /* SendemailPage */], {
                //objects to be send 
                // userlogindetails: this.logindetails,
                object: this.object,
                installations: this.installations,
                Amount: this.Amount,
                auto: auto,
                business: item
            });
        }
        console.log("ff", item);
    };
    AutoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-auto',template:/*ion-inline-start:"/Users/rcm15/Documents/applord project/liftandshiftapp/src/pages/auto/auto.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>auto</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n    <ion-searchbar [(ngModel)]="searchTerm" (ionInput)="setFilteredItems()"></ion-searchbar>\n\n\n\n    <ion-list inset >\n      <button detail-none color="danger" ion-item *ngFor="let item of items" (click)="add(item)">\n        <ion-icon item-right  name="ios-arrow-forward-outline"></ion-icon>\n        {{item.Name }}\n      </button>\n    </ion-list>\n\n\n\n\n        <!-- <ion-card *ngFor="let item of items">\n          <ion-card-header style="background-color: #F53D3D" text-center >\n          {{item.ContactPerson}}\n          </ion-card-header>\n        \n          <ion-list>\n            <button ion-item>\n \n           {{item.ContactPerson}}\n            </button>\n        \n            <button ion-item>\n  \n            {{item.Name}}\n            </button>\n        \n            <button ion-item>\n            {{item.CONTACTCELLNUMBER}}\n            </button> \n\n          </ion-list>\n\n              <ion-item color="danger" class="compact">\n\n                <ion-row no-padding>\n                  <ion-col col-8 no-padding text-wrap>\n\n                    <ion-icon name="locate" ></ion-icon>\n                  {{item.PhysicalAddress}}\n                   \n\n                  </ion-col>\n                  <ion-col col-4 style="text-align: right;">\n                    <button ion-button small outline (click)="add(item)" style="width: 64px;" color="gray">add</button>\n                  </ion-col>\n                </ion-row>\n\n              </ion-item>\n\n\n        </ion-card> -->\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/rcm15/Documents/applord project/liftandshiftapp/src/pages/auto/auto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], AutoPage);
    return AutoPage;
}());

//# sourceMappingURL=auto.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemembermePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RemembermePage = /** @class */ (function () {
    function RemembermePage(navCtrl, navParams, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.storage.ready();
        this.storage.get('api_token').then(function (token) {
            _this.localtoken = token;
            console.log("storage token ", _this.localtoken);
        });
    }
    RemembermePage.prototype.onlogin = function () {
        console.log("local-storage", this.localtoken);
        if (this.localtoken != null) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */], {
                token: this.localtoken
            });
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */], {});
        }
    };
    RemembermePage.prototype.logout = function () {
        this.storage.clear();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    RemembermePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RemembermePage');
    };
    RemembermePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rememberme',template:/*ion-inline-start:"/Users/rcm15/Documents/applord project/liftandshiftapp/src/pages/rememberme/rememberme.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Remember Me</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <div class="login-image-style" >\n    \n    <img src="assets/imgs/liftshiftlogo.png">\n    </div>\n    \n    \n    \n\n    \n    \n    \n    \n    \n    <ion-buttons start class="btn-wrapper1" >\n      <button ion-button icon-only block (click)="onlogin(userData)">\n        <ion-icon name="log-in"  ios="ios-log-in" md="md-log-in"  color="nav1"></ion-icon>\n        Login\n      </button>\n    </ion-buttons>\n    \n    \n    <ion-buttons start class="btn-wrapper1" >\n      <button ion-button icon-only block (click)="logout()">\n        <ion-icon name="log-in"  ios="ios-log-in" md="md-log-in"  color="nav1"></ion-icon>\n        Logout\n      </button>\n    </ion-buttons>\n    \n    \n    </ion-content>'/*ion-inline-end:"/Users/rcm15/Documents/applord project/liftandshiftapp/src/pages/rememberme/rememberme.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], RemembermePage);
    return RemembermePage;
}());

//# sourceMappingURL=rememberme.js.map

/***/ })

},[372]);
//# sourceMappingURL=main.js.map