webpackJsonp([2,4],{

/***/ 140:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 140;


/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(156);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.launchResume = function () {
            console.log("Launch External Resume...");
        };
        this.profile = [{
                firstName: "Elwood",
                middleName: "S.",
                lastName: "Berry III",
                title: "Junior/Mid Level JavaScript Developer",
                summary: "M.E.A.N Stack JavaScript Developer working in NodeJS, Express, Angular 2, MongoDB, Angular Material 2, Karma, Jasmine, StripeJS, etc.",
                address: "Blacklick, OH 43004",
                country: "United States Of America",
                phone: "(469) 609-7444",
                email: "me@elwoodberry.com"
            }];
        this.stackLogos = [
            {
                title: "tech-stack-mongodb",
                url: "https://www.mongodb.com/",
                imgLocation: "assets/img/tech-stack/01-mongo-db.png"
            },
            {
                title: "tech-stack-express",
                url: "http://expressjs.com/",
                imgLocation: "assets/img/tech-stack/02-express.png"
            },
            {
                title: "tech-stack-nodejs",
                url: "https://nodejs.org/en/",
                imgLocation: "assets/img/tech-stack/03-node.png"
            },
            {
                title: "tech-stack-angular",
                url: "https://angular.io/",
                imgLocation: "assets/img/tech-stack/04-angular.png"
            },
            {
                title: "tech-stack-typescript",
                url: "https://www.typescriptlang.org/",
                imgLocation: "assets/img/tech-stack/05-typescript.png"
            },
            {
                title: "tech-stack-jquery",
                url: "https://jquery.com/",
                imgLocation: "assets/img/tech-stack/06-jquery.png"
            },
            {
                title: "tech-stack-sass",
                url: "http://sass-lang.com/",
                imgLocation: "assets/img/tech-stack/07-sass.png"
            },
            {
                title: "tech-stack-google",
                url: "https://cloud.google.com/",
                imgLocation: "assets/img/tech-stack/08-google.png"
            }
        ];
        this.github = [
            {
                title: "ElwoodBerry.com",
                url: "https://github.com/elwoodberry/elwoodberry",
                img: "assets/img/elwoodberry.png",
                description: "A simple solution to the distribution and display of my most current resume and portfolio projects.",
                stack: [
                    {
                        name: "Angular (v4)",
                        url: "https://www.npmjs.com/package/angular"
                    },
                    {
                        name: "Node.js",
                        url: "https://nodejs.org"
                    },
                    {
                        name: "Express.js",
                        url: "https://www.npmjs.com/package/express"
                    }
                ]
            },
            {
                title: "NFXN: Desktop App",
                url: "https://github.com/elwoodberry/elwoodberry",
                img: "https://upload.wikimedia.org/wikipedia/commons/7/71/Forex.jpg",
                description: "Intended to be an independent desktop application that monitors custom price patterns.",
                stack: [
                    {
                        name: "Electron.js",
                        url: "https://www.npmjs.com/package/electron"
                    },
                    {
                        name: "Angular (v4)",
                        url: "https://www.npmjs.com/package/angular"
                    },
                    {
                        name: "Moment.js",
                        url: "https://www.npmjs.com/package/moment"
                    }
                ]
            },
            {
                title: "NFXN: Price Capture",
                url: "https://github.com/elwoodberry/elwoodberry",
                img: "http://www.wikinvest.com/images/0/08/Price_pattern.png",
                description: "Every second this script will scrape currency pair price data for multiple pairs. Every minute this script will evalutate the high, low, open and close price for each pair and log the price in a database.",
                stack: [
                    {
                        name: "Moment.js",
                        url: "https://www.npmjs.com/package/moment"
                    },
                    {
                        name: "Cheerio",
                        url: "https://www.npmjs.com/package/cheerio"
                    },
                    {
                        name: "Request",
                        url: "https://www.npmjs.com/package/request"
                    }
                ]
            },
            {
                title: "SimpleStrips.com Single Page Application(SPA)",
                url: "https://github.com/elwoodberry/elwoodberry",
                img: "https://www.attachmate.com/blogs/legacymodernization/wp-content/uploads/lm/web-form.jpg",
                description: "Diabetic medical supply distribution company simple vendor intake solution. Resposive web based desktop and mobile solution for the management of vendor data, appointments with vendors and sales data.",
                stack: [
                    {
                        name: "Angular (v4)",
                        url: "https://www.npmjs.com/package/angular"
                    },
                    {
                        name: "NG Bootstrap",
                        url: "https://www.npmjs.com/package/ng-bootstrap"
                    },
                    {
                        name: "Moment.js",
                        url: "https://www.npmjs.com/package/moment"
                    }
                ]
            }
        ];
        this.employers = [
            {
                name: "mcdonalds",
                img: "assets/img/employers/01-mcdonalds.png",
                url: "https://www.mcdonalds.com/us/en-us/careers/training-and-education.html"
            },
            {
                name: "mediaGeneral",
                img: "assets/img/employers/02-media-general.png",
                url: "http://www.nexstar.tv"
            },
            {
                name: "ignite",
                img: "assets/img/employers/03-ignite-technologies.png",
                url: "http://www.ignitetech.com"
            },
            {
                name: "jcpenney",
                img: "assets/img/employers/04-jcpenney.png",
                url: "http://www.jcpenney.com"
            },
            {
                name: "globecomm",
                img: "assets/img/employers/05-globecomm.png",
                url: "http://www.globecomm.com"
            },
            {
                name: "verizon",
                img: "assets/img/employers/06-verizon.png",
                url: "http://fios.verizon.com/"
            },
            {
                name: "burgerKing",
                img: "assets/img/employers/07-burger-king.png",
                url: "https://www.bk.com"
            },
            {
                name: "bankofamerica",
                img: "assets/img/employers/08-bank-of-america.png",
                url: "https://www.bankofamerica.com"
            }
        ];
        this.social = [
            {
                url: "https://www.linkedin.com/in/iamelwood/",
                class: "fa-linkedin"
            },
            {
                url: "https://plus.google.com/105777790091945308585",
                class: "fa-google-plus"
            },
            {
                url: "https://www.youtube.com/channel/UCTMTVUJ4UTBNBWZC13Y0wyg",
                class: "fa-youtube"
            },
            {
                url: "https://twitter.com/elwoodberry",
                class: "fa-twitter"
            }
        ];
        // console.log("Title: " + this.stackLogos[0].title);
        // LINK TO RESUME - http://bit.ly/2prschc
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(219),
        styles: [__webpack_require__(212)]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__(155);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// ADDED MANUALLY


var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(220),
        styles: [__webpack_require__(213)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 219:
/***/ (function(module, exports) {

module.exports = "<div id=\"appComponent\" class=\"fluid-container\">\n\n  <!--\n  SPLASHHEAD\n  -->\n  <section id=\"splashHead\" class=\"container-fluid\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n\n          <div class=\"displayPanel\">\n            <img src=\"assets/img/elwoodberry.png\">\n            <h2>{{profile[0].firstName}} {{profile[0].middleName}} {{profile[0].lastName}}</h2>\n            <h4>{{profile[0].title}}</h4>\n            <p>{{profile[0].summary}}</p>\n          </div>\n\n        </div>\n      </div>\n    </div>\n    <div class=\"transparency\"></div>\n  </section>\n\n  <!-- [ STACK LOGOS ] -->\n  <section id=\"stackLogos\" class=\"container-fluid\">\n    <div class=\"container\">\n      <h3>My preferred technology stack.</h3>\n      <div class=\"row\">\n        <div class=\"col-xs-6 col-sm-6 col-md-3\" *ngFor=\"let logo of stackLogos\">\n          <a href=\"{{logo.url}}\" target=\"_blank\">\n            <img id=\"{{logo.title}}\" src=\"{{logo.imgLocation}}\">\n          </a>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- [ GITHUB ] -->\n  <section id=\"github\" class=\"container-fluid\">\n    <div class=\"container\">\n      <h3>My project version control repositories.</h3>\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-6 col-md-3 githubCell\" *ngFor=\"let project of github\">\n          <div class=\"panel\">\n            <div class=\"panel-heading\">\n              <a href=\"{{project.url}}\" target=\"_blank\">\n                <img style=\"width: 100%;\" src=\"{{project.img}}\">\n              </a>\n            </div>\n            <div class=\"panel-body\">\n              <ul>\n                <li>\n                  <a href=\"#\" target=\"_blank\">\n                    <h4>{{project.title}}</h4>\n                  </a>\n                </li>\n                <li style=\"margin-bottom: 10px;\">\n                  <h3>Technology Packages</h3>\n                  <ul>\n                    <li *ngFor=\"let package of project.stack\">\n                      <a href=\"{{package.url}}\" target=\"_blank\">{{package.name}}</a>\n                    </li>\n                  </ul>\n                </li>\n                <li>{{project.description}}</li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- [ EMPLOYERS ] -->\n  <section id=\"employers\" class=\"container-fluid\">\n    <div class=\"container\">\n      <h3>Companies that I have had the pleasure of working with.</h3>\n      <div class=\"row\">\n        <div class=\"col-xs-6 col-sm-6 col-md-3\" *ngFor=\"let employee of employers\">\n          <a target=\"_blank\" href=\"{{employee.url}}\">\n            <img id=\"{{employee.name}}\" alt=\"Verizon\" src=\"{{employee.img}}\">\n          </a>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- [ FOOTER ] -->\n  <section id=\"footer\" class=\"container-fluid\">\n    <div class=\"container\">\n\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n\n          <div class=\"panel\">\n            <h1>Contact Me</h1>\n            {{profile[0].address}}<br/>\n            {{profile[0].country}}<br/>\n            <br/>\n            <strong>Phone</strong>: {{profile[0].phone}}<br/>\n            <strong>Email</strong>: {{profile[0].email}}<br/>\n            <div class=\"social-icons\">\n              <div class=\"row\">\n                <div class=\"col-xs-3 col-sm-3 col-md-3\" *ngFor=\"let icon of social\">\n                  <a href=\"{{icon.url}}\" target=\"_blank\">\n                    <i class=\"fa {{icon.class}}\" aria-hidden=\"true\"></i>\n                  </a>\n                </div>\n              </div>  \n            </div>\n          </div>\n\n        </div>\n        <div class=\"col-md-6\" style=\"text-align: center; margin-top: 60px;\">\n\n          <h2>Learn Why I Am A Great Fit For Your Company.</h2>\n          <button class=\"btn btn-primary btnResume\" type=\"button\" value=\"View My Resume\" (click)=\"launchResume()\">View My Resume</button>\n        </div>\n      </div>\n\n      <div class=\"copywrite\">\n        &copy; 2017 ElwoodBerry.com - Elwood S. Berry III | Full Stack JavaScript Developer\n      </div>\n    </div>\n  </section>\n\n</div>"

/***/ }),

/***/ 220:
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(141);


/***/ })

},[254]);
//# sourceMappingURL=main.bundle.js.map