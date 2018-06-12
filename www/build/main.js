webpackJsonp([12],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyTicketPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the BuyTicketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BuyTicketPage = /** @class */ (function () {
    function BuyTicketPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BuyTicketPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BuyTicketPage');
    };
    BuyTicketPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-buy-ticket',template:/*ion-inline-start:"C:\Users\User\Desktop\TicketMe-dilangi\src\pages\buy-ticket\buy-ticket.html"*/'<!--\n  Generated template for the BuyTicketPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n  <ion-header>\n\n    <ion-navbar>\n      <!--ion-content padding class="pass">\n  <ion-menu  type="overlay" [content]="mycontent">\n  <ion-content>\n    <ion-list>\n      <p>some menu content, could be list items</p>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav #mycontent [root]="rootPage"></ion-nav>\n\n  <ion-buttons start>\n    <div class=container id="menuToggle">\n      <button ion-button ion-only menuToggle>\n        <ion-icon name="menu">  Menu</ion-icon> \n      </button>\n    </div>  \n  </ion-buttons-->\n      <ion-title>buyTicket</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n      <ion-list>\n      \n        <ion-item>\n          <ion-label floating>From:</ion-label>\n          <ion-input type="text" #startStation></ion-input>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label floating>To:</ion-label>\n          <ion-input type="text" #endStation></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label floating>Number of passengers:</ion-label>\n            <ion-input type="number" #passengerCount></ion-input>\n          </ion-item>\n\n        <ion-item>\n          <ion-label floating>Class:</ion-label>\n          <ion-select [(ngModel)]="class">\n              <ion-option value="nes">First</ion-option>\n              <ion-option value="n64">Second</ion-option>\n              <ion-option value="ps">Thrid</ion-option>\n            </ion-select>\n                \n              \n          <!--ion-input[type=number]::-webkit-inner-spin-button, \n          ion-input[type=number]::-webkit-outer-spin-button {{ \n              -webkit-appearance: none;\n              -moz-appearance: none;\n              appearance: none;\n              margin: 0; \n          }}-->\n          \n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>Total payment:</ion-label>\n          <ion-input type="number" #payment></ion-input>\n          //get the calculated value into this\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>Date:</ion-label>\n          <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="myDate"></ion-datetime>\n          //get current date\n        </ion-item>\n\n        <!--ion-item>\n          //this is for the season forms\n            <ion-label>Date</ion-label>\n            <ion-datetime displayFormat="MM/YYYY" pickerFormat="MMMM YYYY" [(ngModel)]="myDate"></ion-datetime>\n          </ion-item-->\n      \n      </ion-list>\n      \n      <div padding class=container id="btn1">\n        <button block ion-button (click)="buyNow()">Buy Ticket</button>\n      </div>\n      </ion-content>\n'/*ion-inline-end:"C:\Users\User\Desktop\TicketMe-dilangi\src\pages\buy-ticket\buy-ticket.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], BuyTicketPage);
    return BuyTicketPage;
}());

//# sourceMappingURL=buy-ticket.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditProfilePage = /** @class */ (function () {
    function EditProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EditProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditProfilePage');
    };
    EditProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-profile',template:/*ion-inline-start:"C:\Users\User\Desktop\TicketMe-dilangi\src\pages\edit-profile\edit-profile.html"*/'<!--\n  Generated template for the EditProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>editProfile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\User\Desktop\TicketMe-dilangi\src\pages\edit-profile\edit-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], EditProfilePage);
    return EditProfilePage;
}());

//# sourceMappingURL=edit-profile.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HelpPage = /** @class */ (function () {
    function HelpPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HelpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HelpPage');
    };
    HelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-help',template:/*ion-inline-start:"C:\Users\User\Desktop\TicketMe-dilangi\src\pages\help\help.html"*/'<!--\n  Generated template for the HelpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>help</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\User\Desktop\TicketMe-dilangi\src\pages\help\help.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogOutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LogOutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LogOutPage = /** @class */ (function () {
    function LogOutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LogOutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LogOutPage');
    };
    LogOutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-log-out',template:/*ion-inline-start:"C:\Users\User\Desktop\TicketMe-dilangi\src\pages\log-out\log-out.html"*/'<!--\n  Generated template for the LogOutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>logOut</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\User\Desktop\TicketMe-dilangi\src\pages\log-out\log-out.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], LogOutPage);
    return LogOutPage;
}());

//# sourceMappingURL=log-out.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyTicketsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//this is from ticket-option page

//end copy
/**
 * Generated class for the MyTicketsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyTicketsPage = /** @class */ (function () {
    function MyTicketsPage(navCtrl, navParams, barcodeScanner) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.barcodeScanner = barcodeScanner;
        this.qrData = null;
        this.createdCode = null;
        this.scannedCode = null;
    }
    MyTicketsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyTicketsPage');
    };
    MyTicketsPage.prototype.createCode = function () {
        this.createdCode = this.qrData;
    };
    MyTicketsPage.prototype.downloadCode = function () {
    };
    MyTicketsPage.prototype.viewCode = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            _this.scannedCode = barcodeData.text;
        });
    };
    MyTicketsPage.prototype.ticketDetail = function () {
    };
    MyTicketsPage.prototype.goBack = function () {
    };
    MyTicketsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-tickets',template:/*ion-inline-start:"C:\Users\User\Desktop\TicketMe-dilangi\src\pages\my-tickets\my-tickets.html"*/'<!--\n  Generated template for the MyTicketsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>myTickets</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card *ngIf="createdCode">\n      <ngx-qrcode [qrc-value]="createdCode"></ngx-qrcode>\n      <ion-card-content><p>Value: {{ createdCode }}</p></ion-card-content>\n    </ion-card> \n  \n    <ion-item>\n      <ion-input type="text" placeholder="My QR data" [(ngModel)]="qrData">\n  \n      </ion-input>\n    </ion-item>\n    <button ion-button full icon-left (click)="createCode()"> <ion-icon name="barcode"></ion-icon>Create Code</button>\n    <button ion-button full icon-left (click)="downloadCode()"> <ion-icon name="barcode"></ion-icon>Download</button>\n    <button ion-button full icon-left (click)="viewCode()"><ion-icon name="batcode"></ion-icon>View QR Code</button>\n    <button ion-button full icon-left (click)="ticketDetail()"><ion-icon name="barcode"></ion-icon>Ticket Details</button>\n  \n    \n  \n    <!--ion-card *ngIf="downloadCode">\n      <ion-card-content>\n        Result from scan: {{ scannedCode}}\n      </ion-card-content>\n    </ion-card-->\n  </ion-content>\n'/*ion-inline-end:"C:\Users\User\Desktop\TicketMe-dilangi\src\pages\my-tickets\my-tickets.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]) === "function" && _c || Object])
    ], MyTicketsPage);
    return MyTicketsPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=my-tickets.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PassengerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buy_ticket_buy_ticket__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the Passenger page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PassengerPage = /** @class */ (function () {
    function PassengerPage(navCtrl, navParams, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
    }
    PassengerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PassengerPage');
    };
    PassengerPage.prototype.openMenu = function () {
        this.menuCtrl.open();
    };
    PassengerPage.prototype.buyPassengerTicket = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__buy_ticket_buy_ticket__["a" /* BuyTicketPage */]);
    };
    PassengerPage.prototype.buyPassengerSeason = function () {
    };
    PassengerPage.prototype.showTrainSchedule = function () {
    };
    PassengerPage.prototype.backTo = function () {
    };
    PassengerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-passenger',template:/*ion-inline-start:"C:\Users\User\Desktop\TicketMe-dilangi\src\pages\passenger\passenger.html"*/'<ion-content padding class="pass">\n  <ion-menu  type="overlay" [content]="mycontent">\n  <ion-content>\n    <ion-list>\n      <p>some menu content, could be list items</p>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav #mycontent [root]="rootPage"></ion-nav>\n\n  <ion-buttons start>\n    <div class=container id="menuToggle">\n      <button ion-button ion-only menuToggle>\n        <ion-icon name="menu">  Menu</ion-icon> \n      </button>\n    </div>  \n  </ion-buttons>\n\n<div class=container id="btn1">\n  <button  ion-button (click)="buyPassengerTicket()" item-left>Buy Ticket</button>\n  <button ion-button (click)="buyPassengerSeason()" item-left>Buy Season</button>\n  <button ion-button (click)="showTrainSchedule()" item-left>Train Schedule</button>\n</div>\n\n\n  <!--button block ion-buttton (click)="backTo()" item-left>Back</button-->\n\n</ion-content>'/*ion-inline-end:"C:\Users\User\Desktop\TicketMe-dilangi\src\pages\passenger\passenger.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], PassengerPage);
    return PassengerPage;
}());

//# sourceMappingURL=passenger.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RatingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RatingPage = /** @class */ (function () {
    function RatingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RatingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RatingPage');
    };
    RatingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rating',template:/*ion-inline-start:"C:\Users\User\Desktop\TicketMe-dilangi\src\pages\rating\rating.html"*/'<!--\n  Generated template for the RatingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>rating</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\User\Desktop\TicketMe-dilangi\src\pages\rating\rating.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], RatingPage);
    return RatingPage;
}());

//# sourceMappingURL=rating.js.map

/***/ }),

/***/ 121:
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
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/buy-ticket/buy-ticket.module": [
		307,
		11
	],
	"../pages/edit-cc-details/edit-cc-details.module": [
		308,
		3
	],
	"../pages/edit-password/edit-password.module": [
		309,
		2
	],
	"../pages/edit-profile/edit-profile.module": [
		310,
		10
	],
	"../pages/help/help.module": [
		311,
		9
	],
	"../pages/log-out/log-out.module": [
		312,
		8
	],
	"../pages/my-tickets/my-tickets.module": [
		313,
		7
	],
	"../pages/passenger/passenger.module": [
		314,
		6
	],
	"../pages/payment/payment.module": [
		315,
		1
	],
	"../pages/rate/rate.module": [
		316,
		0
	],
	"../pages/rating/rating.module": [
		317,
		5
	],
	"../pages/ticket-option/ticket-option.module": [
		318,
		4
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
webpackAsyncContext.id = 162;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__passenger_passenger__ = __webpack_require__(110);
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
    function HomePage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    HomePage.prototype.signIn = function () {
        /*if(this.uname.value=="admin" && this.password.value=="123") {// stupid authentication
            let alert = this.alertCtrl.create({
              title: 'Login succeed!',
              subTitle: 'Logged in',
              buttons: ['OK']
            });
            alert.present();*/
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__passenger_passenger__["a" /* PassengerPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('username'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "uname", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('password'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "password", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\User\Desktop\TicketMe-dilangi\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Example Login\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<ion-list>\n\n  <ion-item>\n    <ion-label floating>Username</ion-label>\n    <ion-input type="text" #username></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Password</ion-label>\n    <ion-input type="password" #password></ion-input>\n  </ion-item>\n\n</ion-list>\n\n<div padding>\n  <button block ion-button (click)="signIn()">Sign In</button>\n</div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\User\Desktop\TicketMe-dilangi\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketOptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TicketOptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TicketOptionPage = /** @class */ (function () {
    function TicketOptionPage(navCtrl, navParams, barcodeScanner) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.barcodeScanner = barcodeScanner;
        this.qrData = null;
        this.createdCode = null;
        this.scannedCode = null;
    }
    TicketOptionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TicketOptionPage');
    };
    TicketOptionPage.prototype.createCode = function () {
        this.createdCode = this.qrData;
    };
    TicketOptionPage.prototype.downloadCode = function () {
    };
    TicketOptionPage.prototype.viewCode = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            _this.scannedCode = barcodeData.text;
        });
    };
    TicketOptionPage.prototype.ticketDetail = function () {
    };
    TicketOptionPage.prototype.goBack = function () {
    };
    TicketOptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ticket-option',template:/*ion-inline-start:"C:\Users\User\Desktop\TicketMe-dilangi\src\pages\ticket-option\ticket-option.html"*/'<!--\n  Generated template for the TicketOptionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ticketOption</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-card *ngIf="createdCode">\n		<ngx-qrcode [qrc-value]="createdCode"></ngx-qrcode>\n		<ion-card-content><p>Value: {{ createdCode }}</p></ion-card-content>\n	</ion-card> \n\n	<ion-item>\n		<ion-input type="text" placeholder="My QR data" [(ngModel)]="qrData">\n\n		</ion-input>\n	</ion-item>\n	<button ion-button full icon-left (click)="createCode()"> <ion-icon name="barcode"></ion-icon>Create Code</button>\n	<button ion-button full icon-left (click)="downloadCode()"> <ion-icon name="barcode"></ion-icon>Download</button>\n	<button ion-button full icon-left (click)="viewCode()"><ion-icon name="batcode"></ion-icon>View QR Code</button>\n	<button ion-button full icon-left (click)="ticketDetail()"><ion-icon name="barcode"></ion-icon>Ticket Details</button>\n\n	\n\n	<!--ion-card *ngIf="downloadCode">\n		<ion-card-content>\n			Result from scan: {{ scannedCode}}\n		</ion-card-content>\n	</ion-card-->\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\User\Desktop\TicketMe-dilangi\src\pages\ticket-option\ticket-option.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], TicketOptionPage);
    return TicketOptionPage;
}());

//# sourceMappingURL=ticket-option.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_qrcode2__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_passenger_passenger__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_buy_ticket_buy_ticket__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_my_tickets_my_tickets__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_edit_profile_edit_profile__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_rating_rating__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_help_help__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_log_out_log_out__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_ticket_option_ticket_option__ = __webpack_require__(211);
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
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_passenger_passenger__["a" /* PassengerPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_buy_ticket_buy_ticket__["a" /* BuyTicketPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_my_tickets_my_tickets__["a" /* MyTicketsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_edit_profile_edit_profile__["a" /* EditProfilePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_rating_rating__["a" /* RatingPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_log_out_log_out__["a" /* LogOutPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_ticket_option_ticket_option__["a" /* TicketOptionPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/buy-ticket/buy-ticket.module#BuyTicketPageModule', name: 'BuyTicketPage', segment: 'buy-ticket', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-cc-details/edit-cc-details.module#EditCcDetailsPageModule', name: 'EditCcDetailsPage', segment: 'edit-cc-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-password/edit-password.module#EditPasswordPageModule', name: 'EditPasswordPage', segment: 'edit-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-profile/edit-profile.module#EditProfilePageModule', name: 'EditProfilePage', segment: 'edit-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/log-out/log-out.module#LogOutPageModule', name: 'LogOutPage', segment: 'log-out', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-tickets/my-tickets.module#MyTicketsPageModule', name: 'MyTicketsPage', segment: 'my-tickets', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/passenger/passenger.module#PassengerPageModule', name: 'PassengerPage', segment: 'passenger', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment/payment.module#PaymentPageModule', name: 'PaymentPage', segment: 'payment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rate/rate.module#RatePageModule', name: 'RatePage', segment: 'rate', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rating/rating.module#RatingPageModule', name: 'RatingPage', segment: 'rating', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ticket-option/ticket-option.module#TicketOptionPageModule', name: 'TicketOptionPage', segment: 'ticket-option', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5_ngx_qrcode2__["a" /* NgxQRCodeModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_passenger_passenger__["a" /* PassengerPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_buy_ticket_buy_ticket__["a" /* BuyTicketPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_my_tickets_my_tickets__["a" /* MyTicketsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_edit_profile_edit_profile__["a" /* EditProfilePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_rating_rating__["a" /* RatingPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_log_out_log_out__["a" /* LogOutPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_ticket_option_ticket_option__["a" /* TicketOptionPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_my_tickets_my_tickets__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_edit_profile_edit_profile__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_rating_rating__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_help_help__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_log_out_log_out__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        //used for ngFor and navigation
        this.pages = [
            { icon: 'cart', title: 'my tickets', component: __WEBPACK_IMPORTED_MODULE_5__pages_my_tickets_my_tickets__["a" /* MyTicketsPage */] },
            { icon: 'create', title: 'edit profile', component: __WEBPACK_IMPORTED_MODULE_6__pages_edit_profile_edit_profile__["a" /* EditProfilePage */] },
            { icon: 'star-half', title: 'rating', component: __WEBPACK_IMPORTED_MODULE_7__pages_rating_rating__["a" /* RatingPage */] },
            { icon: 'help-circle', title: 'help', component: __WEBPACK_IMPORTED_MODULE_8__pages_help_help__["a" /* HelpPage */] },
            { icon: 'exit', title: 'logout', component: __WEBPACK_IMPORTED_MODULE_9__pages_log_out_log_out__["a" /* LogOutPage */] }
        ];
        this.activePage = this.pages[0];
    }
    MyApp.prototype.openPage = function (page) {
        //reset the content nav to ahve just ths page
        //we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
        this.activePage = page;
    };
    MyApp.prototype.checkActive = function (page) {
        return page == this.activePage;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\User\Desktop\TicketMe-dilangi\src\app\app.html"*/'<ion-menu [content]="content">\n\n	<ion-header>\n\n		<ion-toolbar>\n\n			<ion-title>Username</ion-title>\n\n		</ion-toolbar>\n\n	</ion-header>\n\n\n\n	<ion-content>\n\n		<ion-list>\n\n			<button menuClose ion-item *ngFor = "let p of pages" [class.activeHighlight]="checkActive(p)" (click)="openPage(p)">\n\n				<ion-icon [name]="p.icon" item-left></ion-icon>\n\n				{{p.title}}\n\n			</button>\n\n		</ion-list>\n\n	</ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!--disable swipeToGoBack because it\'e poor UX to combine STGB with side menus-->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n\n\n'/*ion-inline-end:"C:\Users\User\Desktop\TicketMe-dilangi\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[212]);
//# sourceMappingURL=main.js.map