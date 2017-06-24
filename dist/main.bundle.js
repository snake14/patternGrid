webpackJsonp([1],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!./node_modules/postcss-loader/index.js?{\"ident\":\"postcss\"}!./node_modules/@angular/material/prebuilt-themes/purple-green.css"), "");
exports.push([module.i, "@import url(https://fonts.googleapis.com/icon?family=Material+Icons);", ""]);

// module
exports.push([module.i, "@include mat-core();", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pattern_grid_service__ = __webpack_require__("./src/app/pattern-grid.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__pattern_grid_service__["a" /* PatternGridService */]]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pattern_grid_pattern_grid_component__ = __webpack_require__("./src/app/pattern-grid/pattern-grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pattern_list_pattern_list_component__ = __webpack_require__("./src/app/pattern-list/pattern-list.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__pattern_list_pattern_list_component__["a" /* PatternListComponent */] },
    { path: 'patterngrid', component: __WEBPACK_IMPORTED_MODULE_8__pattern_grid_pattern_grid_component__["a" /* PatternGridComponent */] },
    { path: 'patterngrid/:patternID', component: __WEBPACK_IMPORTED_MODULE_8__pattern_grid_pattern_grid_component__["a" /* PatternGridComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__pattern_grid_pattern_grid_component__["a" /* PatternGridComponent */],
            __WEBPACK_IMPORTED_MODULE_9__pattern_list_pattern_list_component__["a" /* PatternListComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/pattern-grid.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatternGridService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PatternGridService = (function () {
    function PatternGridService(http) {
        this.http = http;
    }
    // Get the list of pattern grids from the database
    PatternGridService.prototype.getPatternGrids = function () {
        var url = "/api/patterngrids";
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // Get a pattern grid by ID
    PatternGridService.prototype.getPatternGrid = function (patternID) {
        var url = "/api/patterngrid/" + patternID;
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // Post a new pattern grid
    PatternGridService.prototype.postVendor = function (patterngrid) {
        var url = "/api/patterngrid";
        return this.http.post(url, patterngrid)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    //    putVendor(updatedVendorConfig) {
    //        let url = this.custId + "/vendoraccount/" + updatedVendorConfig.pvAccountConfigID;
    //
    //        return this.http.put(url, updatedVendorConfig)
    //            .map(res => res.json())
    //            .catch(this.handleError);
    //    }
    // Delete pattern grid from database
    PatternGridService.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(JSON.stringify(error));
    };
    return PatternGridService;
}());
PatternGridService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], PatternGridService);

var _a;
//# sourceMappingURL=pattern-grid.service.js.map

/***/ }),

/***/ "./src/app/pattern-grid/pattern-grid.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!./node_modules/postcss-loader/index.js?{\"ident\":\"postcss\"}!./node_modules/@angular/material/prebuilt-themes/purple-green.css"), "");
exports.push([module.i, "@import url(https://fonts.googleapis.com/icon?family=Material+Icons);", ""]);

// module
exports.push([module.i, "@include mat-core();\n\ntd {\n\twidth: 40px;\n\theight: 40px;\n}\n\n.size-input {\n\tmax-width: 42px;\n}\n\n.cell-size-input {\n\tmax-width: 60px;\n\tmargin-right: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/pattern-grid/pattern-grid.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n\t<md-card-content>\n\t\tSelected Color:\n\t\t<input type=\"color\" (change)=\"colorSelected()\"  [(ngModel)]=\"selectedColor\" style=\"width:60px;\">\n\t\t<br>\n\t\tRecent Colors:\n\t\t<table>\n\t\t\t<tr>\n\t\t\t\t<td *ngFor=\"let recentColor of recentColors\" [style.background]=\"recentColor\" (click)=\"recentSelected(recentColor)\"></td>\n\t\t\t</tr>\n\t\t</table>\n\t\t<br>\n\t\t<md-input-container class=\"cell-size-input\">\n\t\t\t<input mdInput type=\"number\" placeholder=\"Cell Size\" min=\"1\" [(ngModel)]=\"cellSize\" />\n\t\t</md-input-container>\n\t\t<md-input-container class=\"size-input\">\n\t\t\t<input mdInput type=\"number\" placeholder=\"Width\" min=\"1\" [(ngModel)]=\"width\" (input)=\"widthChange()\" />\n\t\t</md-input-container>\n\t\t<md-input-container class=\"size-input\">\n\t\t\t<input mdInput type=\"number\" placeholder=\"Height\" min=\"1\" [(ngModel)]=\"height\" (input)=\"heightChange()\" />\n\t\t</md-input-container>\n\t<!-- It might be a good idea to use a material 2 table once one exists -->\n\t\t<table>\n        \t<tr *ngFor=\"let cellRow of cellGrid\">\n        \t\t<td \n        \t\t\t*ngFor=\"let cell of cellRow\" \n        \t\t\t[style.width]=\"cellSize + 'px'\" \n        \t\t\t[style.height]=\"cellSize + 'px'\" \n        \t\t\t[style.background]=\"cell.selected ? cell.color : '#ffffff'\" \n        \t\t\t(click)=\"selectCell(cell)\"\n        \t\t>\n        \t\t</td>\n        \t</tr>\n        </table>\n    </md-card-content>\n</md-card>\n"

/***/ }),

/***/ "./src/app/pattern-grid/pattern-grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatternGridComponent; });
/* unused harmony export cell */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PatternGridComponent = (function () {
    //Constructor
    function PatternGridComponent(route) {
        this.route = route;
        this.cellGrid = new Array();
        this.width = 5;
        this.height = 5;
        this.cellSize = 50;
        this.selectedColor = "#ff0000";
        this.recentColors = new Array();
    }
    PatternGridComponent.prototype.ngOnInit = function () {
        this.recentColors.push(this.selectedColor);
        this.patternID = this.route.snapshot.params['patternID'];
        if (this.patternID) {
            // Get the patternGrid from database and populate the values
        }
        else {
            // Since this is a new patternGrid, create an empty grid
            for (var i = 0; i < this.height; i++) {
                var row = new Array();
                for (var j = 0; j < this.width; j++) {
                    row.push(new cell(false));
                }
                this.cellGrid.push(row);
            }
        }
    };
    PatternGridComponent.prototype.selectCell = function (selectedCell) {
        selectedCell.selected = !selectedCell.selected;
        selectedCell.color = this.selectedColor;
    };
    PatternGridComponent.prototype.colorSelected = function () {
        if (this.recentColors.includes(this.selectedColor, 0)) {
            this.recentColors.splice(this.recentColors.indexOf(this.selectedColor, 0), 1);
        }
        this.recentColors.unshift(this.selectedColor);
    };
    PatternGridComponent.prototype.recentSelected = function (recentColor) {
        if (this.selectedColor != recentColor) {
            this.selectedColor = recentColor;
            this.colorSelected();
        }
    };
    PatternGridComponent.prototype.widthChange = function () {
        for (var i = 0; i < this.cellGrid.length; i++) {
            var row = this.cellGrid[i];
            var diff = this.width - row.length;
            if (diff > 0) {
                for (var j = 0; j < diff; j++) {
                    row.push(new cell(false));
                }
            }
            else {
                for (var k = diff; k < 0; k++) {
                    row.pop();
                }
            }
        }
    };
    PatternGridComponent.prototype.heightChange = function () {
        var heightDiff = this.height - this.cellGrid.length;
        if (heightDiff > 0) {
            for (var i = 0; i < heightDiff; i++) {
                var row = new Array();
                for (var j = 0; j < this.width; j++) {
                    row.push(new cell(false));
                }
                this.cellGrid.push(row);
            }
        }
        else {
            for (var j = heightDiff; j < 0; j++) {
                this.cellGrid.pop();
            }
        }
    };
    return PatternGridComponent;
}());
PatternGridComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-pattern-grid',
        template: __webpack_require__("./src/app/pattern-grid/pattern-grid.component.html"),
        styles: [__webpack_require__("./src/app/pattern-grid/pattern-grid.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object])
], PatternGridComponent);

var cell = (function () {
    function cell(selected) {
        this.selected = selected;
    }
    return cell;
}());

var _a;
//# sourceMappingURL=pattern-grid.component.js.map

/***/ }),

/***/ "./src/app/pattern-list/pattern-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!./node_modules/postcss-loader/index.js?{\"ident\":\"postcss\"}!./node_modules/@angular/material/prebuilt-themes/purple-green.css"), "");
exports.push([module.i, "@import url(https://fonts.googleapis.com/icon?family=Material+Icons);", ""]);

// module
exports.push([module.i, "@include mat-core();\n\ntd, th {\n\tpadding-right: 20px;\n\tmin-width: 40px;\n\ttext-align: left;\n}\n\n.id {\n\tmin-width: 10px;\n}\n\n.mat-card-header .mat-card-title {\n    font-size: 40px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/pattern-list/pattern-list.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card class=\"mat-card-table\">\n\t<md-card-header class=\"no-card-subtitle\">\n\t\t<md-card-title>Saved Pattern Grids</md-card-title>\n\t</md-card-header>\n\t<md-card-content> <!-- @todo once material 2 has a data table use it -->\n\t\t<table>\n\t\t\t<tr>\n\t\t\t\t<th class=\"id\">ID</th>\n\t\t\t\t<th>Name</th>\n\t\t\t\t<th>Dimensions</th>\n\t\t\t</tr>\n\t\t\t<tr *ngFor=\"let pattern of allPatterns\">\n\t\t\t\t<td class=\"id\">{{pattern.id}}</td>\n\t\t\t\t<td><a (click)=\"selectPattern(pattern.patternID)\">{{pattern.name}}</a></td>\n\t\t\t\t<td>{{pattern.grid_width}} x {{pattern.grid_height}}</td>\n\t\t\t</tr>\n\t\t</table>\n\t\t<div *ngIf=\"!allPatterns || allPatterns.length == 0\">No patterns to display. Please create a new one...</div>\n\t\t<button md-button routerLink=\"patterngrid\">\n\t\t\t<md-icon>add_circle</md-icon>\n\t\t\t<span>New pattern grid</span>\n\t\t</button>\n\t</md-card-content>\n</md-card>"

/***/ }),

/***/ "./src/app/pattern-list/pattern-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pattern_grid_service__ = __webpack_require__("./src/app/pattern-grid.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatternListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PatternListComponent = (function () {
    function PatternListComponent(patternService) {
        this.patternService = patternService;
        this.allPatterns = null;
    }
    PatternListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.patternService.getPatternGrids()
            .subscribe(function (allPatterns) { _this.allPatterns = allPatterns; });
    };
    return PatternListComponent;
}());
PatternListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-pattern-list',
        template: __webpack_require__("./src/app/pattern-list/pattern-list.component.html"),
        styles: [__webpack_require__("./src/app/pattern-list/pattern-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__pattern_grid_service__["a" /* PatternGridService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__pattern_grid_service__["a" /* PatternGridService */]) === "function" && _a || Object])
], PatternListComponent);

var _a;
//# sourceMappingURL=pattern-list.component.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map