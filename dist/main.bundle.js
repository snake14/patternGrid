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
exports.push([module.i, "@include mat-core();\n\ntd {\n\twidth: 40px;\n\theight: 40px;\n}\n\n.size-input {\n\tmax-width: 42px;\n}\n\n.cell-size-input {\n\tmax-width: 60px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n\t<md-card-content>\n\t\tSelected Color:\n\t\t<input type=\"color\" (change)=\"colorSelected()\"  [(ngModel)]=\"selectedColor\" style=\"width:60px;\">\n\t\t<br>\n\t\tRecent Colors:\n\t\t<table>\n\t\t\t<tr>\n\t\t\t\t<td [style.background]=\"recentColor1\" (click)=\"recentSelected(recentColor1)\"></td>\n\t\t\t\t<td [style.background]=\"recentColor2\" (click)=\"recentSelected(recentColor2)\"></td>\n\t\t\t\t<td [style.background]=\"recentColor3\" (click)=\"recentSelected(recentColor3)\"></td>\n\t\t\t</tr>\n\t\t</table>\n\t\t<br>\n\t\t<md-input-container class=\"cell-size-input\">\n\t\t\t<input mdInput placeholder=\"Cell Size\" [(ngModel)]=\"cellSize\" />\n\t\t</md-input-container>\n\t\t<br>\n\t\t<md-input-container class=\"size-input\">\n\t\t\t<input mdInput placeholder=\"Width\" [(ngModel)]=\"width\" />\n\t\t</md-input-container>\n\t\t<md-input-container class=\"size-input\">\n\t\t\t<input mdInput placeholder=\"Height\" [(ngModel)]=\"height\" />\n\t\t</md-input-container>\n\t\t<button md-button (click)=\"changeSize()\" >Update</button>\n\t<!-- It might be a good idea to use a material 2 table once one exists -->\n\t\t<table>\n        \t<tr *ngFor=\"let cellRow of cellGrid\">\n        \t\t<td \n        \t\t\t*ngFor=\"let cell of cellRow\" \n        \t\t\t[style.width]=\"cellSize + 'px'\" \n        \t\t\t[style.height]=\"cellSize + 'px'\" \n        \t\t\t[style.background]=\"cell.selected ? cell.color : '#ffffff'\" \n        \t\t\t(click)=\"selectCell(cell)\"\n        \t\t>\n        \t\t</td>\n        \t</tr>\n        </table>\n    </md-card-content>\n</md-card>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* unused harmony export cell */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.cellGrid = new Array();
        this.width = 5;
        this.height = 5;
        this.cellSize = 50;
        this.selectedColor = "#ff0000";
        this.recentColor1 = "#ff0000";
        this.recentColor2 = "#00ffffff";
        this.recentColor3 = "#00ffffff";
    }
    AppComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < this.height; i++) {
            var row = new Array();
            for (var j = 0; j < this.width; j++) {
                row.push(new cell(false));
            }
            this.cellGrid.push(row);
        }
    };
    AppComponent.prototype.selectCell = function (selectedCell) {
        selectedCell.selected = !selectedCell.selected;
        selectedCell.color = this.selectedColor;
    };
    AppComponent.prototype.colorSelected = function () {
        this.recentColor3 = this.recentColor2;
        this.recentColor2 = this.recentColor1;
        this.recentColor1 = this.selectedColor;
    };
    AppComponent.prototype.recentSelected = function (recentColor) {
        if (this.recentColor1 != recentColor) {
            this.selectedColor = recentColor;
            this.colorSelected();
        }
    };
    AppComponent.prototype.changeSize = function () {
        var heightDiff = this.height - this.cellGrid.length;
        for (var i = 0; i < this.cellGrid.length; i++) {
            var row = this.cellGrid[i];
            var diff = this.width - row.length;
            if (diff > 0) {
                for (var j_1 = 0; j_1 < diff; j_1++) {
                    row.push(new cell(false));
                }
            }
            else {
                for (var k = diff; k < 0; k++) {
                    row.pop();
                }
            }
        }
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
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    })
], AppComponent);

var cell = (function () {
    function cell(selected) {
        this.selected = selected;
    }
    return cell;
}());

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

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