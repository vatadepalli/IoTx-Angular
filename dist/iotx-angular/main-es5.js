(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div id=\"root\">\n  <div class=\"\" id=\"navbar\">\n    <app-navbar></app-navbar>\n  </div>\n  <div class=\"row wrapper\" id=\"body\">\n    <div id=\"sidenav\" class=\"sidebar\">\n      <app-sidenav></app-sidenav>\n    </div>\n    <div id=\"router\" class=\"content\">\n      <router-outlet> </router-outlet>\n    </div>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/core/dashboards/dashboards.component.html": 
        /*!************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/core/dashboards/dashboards.component.html ***!
          \************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>dashboards works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/core/devices/add-device/add-device.component.html": 
        /*!********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/core/devices/add-device/add-device.component.html ***!
          \********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h3 style=\"text-align: center;\">Add a New Device</h3>\n<form action=\"\">\n  <!-- Device Type  -->\n  <div class=\"form-group\">\n    <label>Device Type</label>\n    <input type=\"text\" class=\"form-control\" />\n  </div>\n\n  <!-- Device Type  -->\n  <div class=\"form-group\">\n    <label>Device Id</label>\n    <input\n      type=\"text\"\n      class=\"form-control\"\n      placeholder=\"Enter a unique device identification\"\n    />\n    <!-- Try to get a dropdown here with a list of supported devices  -->\n  </div>\n\n  <!-- Device Type  -->\n  <div class=\"form-group\">\n    <label>Device Description</label>\n    <input\n      type=\"text\"\n      class=\"form-control\"\n      placeholder=\"Enter device description\"\n    />\n  </div>\n\n  <!-- Device Type  -->\n  <div class=\"form-group\">\n    <label>Device Token</label>\n    <input\n      type=\"text\"\n      class=\"form-control\"\n      placeholder=\"Enter a device token or generate one\"\n    />\n    <button id=\"credit-gen\" class=\"btn btn-success mt-2\">\n      Generate a Random Token\n    </button>\n  </div>\n\n  <!-- Add Device Button  -->\n  <button class=\"btn btn-dark btn-block\">\n    Add Device\n  </button>\n</form>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/core/devices/device/device.component.html": 
        /*!************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/core/devices/device/device.component.html ***!
          \************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>device works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/core/devices/devices.component.html": 
        /*!******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/core/devices/devices.component.html ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-list-devices></app-list-devices>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/core/devices/list-devices/list-devices.component.html": 
        /*!************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/core/devices/list-devices/list-devices.component.html ***!
          \************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h3 style=\"text-align: center;\">Available Devices</h3>\n\n<div class=\"container\" id=\"device-list\">\n  <button\n    class=\"btn btn-success\"\n    [routerLink]=\"['/add-device']\"\n    routerLinkActive=\"router-link-active\"\n  >\n    Add Device\n  </button>\n\n  <div class=\"mt-2\"><p>Showing 3 Devices</p></div>\n\n  <table class=\"table mt-3\">\n    <tr>\n      <th>Device</th>\n      <th>Description</th>\n      <th>Last Connection</th>\n    </tr>\n    <tr *ngFor=\"let device of devices\">\n      <td [routerLink]=\"['/device']\" routerLinkActive=\"router-link-active\">\n        {{ device.deviceId }}\n      </td>\n      <td>{{ device.deviceDescription }}</td>\n      <td>Never</td>\n    </tr>\n  </table>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- Body  -->\n<h1>Welcome</h1>\n<p>This is the FrontEnd Application for the IoTx project</p>\n<button\n  class=\"btn btn-secondary\"\n  [routerLink]=\"['/users']\"\n  routerLinkActive=\"router-link-active\"\n>\n  Placeholder\n</button>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nav\n  class=\"navbar navbar-dark bg-primary navbar-expand shadow disable-selection\"\n>\n  <div class=\"container\">\n    <a\n      [routerLink]=\"['/']\"\n      routerLinkActive=\"router-link-active\"\n      class=\"navbar-brand\"\n      >IoTx</a\n    >\n    <!-- Nav Items  -->\n    <div>\n      <ul class=\"navbar-nav ml-auto\">\n        <!-- User  -->\n        <li class=\"nav-item dropdown\">\n          <a\n            class=\"nav-link dropdown-toggle\"\n            href=\"#\"\n            id=\"navbarDropdown\"\n            role=\"button\"\n            data-toggle=\"dropdown\"\n            aria-haspopup=\"true\"\n            aria-expanded=\"false\"\n          >\n            <img\n              src=\"../../../assets/yoda.png\"\n              alt=\"Master Yoda\"\n              class=\".img-rounded logo\"\n            />\n          </a>\n          <div\n            class=\"dropdown-menu dropdown-menu-right\"\n            aria-labelledby=\"navbarDropdown\"\n          >\n            <a class=\"dropdown-item\" href=\"#\">Logout</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\">Login</a>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/not-found/not-found.component.html": 
        /*!*****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/not-found/not-found.component.html ***!
          \*****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h3>404 Page Not Found</h3>\n<p>Sorry, there is nothing to see here...</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidenav/sidenav.component.html": 
        /*!*************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidenav/sidenav.component.html ***!
          \*************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div\n  @fade\n  id=\"sidenav\"\n  [class.sidenav-expand]=\"!isCollapsed\"\n  [class.sidenav-collapse]=\"isCollapsed\"\n  class=\"disable-selection\"\n>\n  <!-- close sidebar menu -->\n  <div id=\"icons\">\n    <i\n      *ngIf=\"!isCollapsed\"\n      (click)=\"toggleCollapse()\"\n      class=\"fa fa-arrow-left float-right pr-3 pt-2\"\n    ></i>\n    <i\n      *ngIf=\"isCollapsed\"\n      (click)=\"toggleCollapse()\"\n      class=\"fa fa-arrow-right float-right pr-3 pt-2\"\n    ></i>\n  </div>\n\n  <!-- NavBar  -->\n  <nav class=\"navbar navbar-light bg-light shadow\" [class.d-none]=\"isCollapsed\">\n    <div class=\"navbar-collapse col\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <!-- Divider  -->\n        <div class=\"dropdown-divider\"></div>\n        <!-- DEVICE RELATED STUFF  -->\n        <!-- Home  -->\n        <li\n          class=\"nav-item active\"\n          [routerLink]=\"['/']\"\n          [routerLinkActive]=\"['active']\"\n          [routerLinkActiveOptions]=\"{ exact: true }\"\n        >\n          <a class=\"nav-link\">\n            <h5>Home</h5>\n          </a>\n        </li>\n\n        <!-- Dashboards  -->\n        <li class=\"nav-item dropdown\">\n          <a\n            class=\"nav-link dropdown-toggle\"\n            href=\"#\"\n            id=\"navbarDropdown\"\n            role=\"button\"\n            data-toggle=\"dropdown\"\n            aria-haspopup=\"true\"\n            aria-expanded=\"false\"\n          >\n            Dashboards\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n            <a class=\"dropdown-item\" href=\"#\">Dashboard 1</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\">Dashboard 2</a>\n          </div>\n        </li>\n\n        <!-- Devices  -->\n        <li\n          class=\"nav-item\"\n          [routerLink]=\"['/devices']\"\n          [routerLinkActive]=\"['active']\"\n          [routerLinkActiveOptions]=\"{ exact: true }\"\n        >\n          <a class=\"nav-link\">Devices</a>\n        </li>\n\n        <!-- Data  -->\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Data</a>\n        </li>\n\n        <!-- Access  -->\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Access</a>\n        </li>\n\n        <!-- Divider  -->\n        <div class=\"dropdown-divider\"></div>\n        <!-- ACCOUNT RELATED STUFF  -->\n        <h5>Account</h5>\n        <!-- Profile  -->\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Profile</a>\n        </li>\n        <!-- Settings  -->\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Settings</a>\n        </li>\n        <!-- Users  -->\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Users</a>\n        </li>\n\n        <!-- Divider  -->\n        <div class=\"dropdown-divider\"></div>\n        <!-- RESOURCES RELATED STUFF  -->\n        <h5>Resources</h5>\n        <!-- Widgets  -->\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Widgets</a>\n        </li>\n        <!-- Marketplace  -->\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Marketplace</a>\n        </li>\n        <!-- GitHub  -->\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">GitHub</a>\n        </li>\n        <!-- Documentation  -->\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Documentation</a>\n        </li>\n        <!-- Divider  -->\n        <div class=\"dropdown-divider\"></div>\n        <!-- RESOURCES RELATED STUFF  -->\n        <h5>Contact</h5>\n        <!-- Email  -->\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Email</a>\n        </li>\n        <!-- Twitter  -->\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Twitter</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n\n  <!-- LEDs  -->\n\n  <!-- <div class=\"leds\">\n    <p id=\"led1\">L</p>\n  </div> -->\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
            /* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
            /* harmony import */ var _components_core_devices_devices_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/core/devices/devices.component */ "./src/app/components/core/devices/devices.component.ts");
            /* harmony import */ var _components_core_devices_add_device_add_device_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/core/devices/add-device/add-device.component */ "./src/app/components/core/devices/add-device/add-device.component.ts");
            /* harmony import */ var _components_core_devices_device_device_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/core/devices/device/device.component */ "./src/app/components/core/devices/device/device.component.ts");
            // Components
            var routes = [
                { path: "", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
                { path: "devices", component: _components_core_devices_devices_component__WEBPACK_IMPORTED_MODULE_5__["DevicesComponent"] },
                { path: "add-device", component: _components_core_devices_add_device_add_device_component__WEBPACK_IMPORTED_MODULE_6__["AddDeviceComponent"] },
                { path: "device", component: _components_core_devices_device_device_component__WEBPACK_IMPORTED_MODULE_7__["DeviceComponent"] },
                { path: "**", component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"] }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#root {\n  /* border: 1px solid black; */\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: 100vh;\n}\n\n#navbar {\n  /* border: 1px solid black; */\n}\n\n#body {\n  /* border: 1px solid black; */\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n\n  display: -webkit-box;\n\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n\n#sidenav {\n  /* border: 1px solid black; */\n}\n\n#router {\n  /* border: 1px solid black; */\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  background-color: rgb(255, 255, 255);\n  padding: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBNkI7RUFDN0Isb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLG1CQUFZO1VBQVosWUFBWTs7RUFFWixvQkFBYTs7RUFBYixhQUFhO0VBQ2IsOEJBQW1CO0VBQW5CLDZCQUFtQjtVQUFuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsbUJBQVk7VUFBWixZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Jvb3Qge1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuI25hdmJhciB7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xufVxuXG4jYm9keSB7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xuICBmbGV4LWdyb3c6IDE7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuI3NpZGVuYXYge1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cbn1cblxuI3JvdXRlciB7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xuICBmbGV4LWdyb3c6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgcGFkZGluZzogMjBweDtcbn1cbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.name = "Vijaya Aditya";
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-root",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_Forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/Forms */ "./node_modules/@angular/Forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
            /* harmony import */ var _services_device_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/device.service */ "./src/app/services/device.service.ts");
            /* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
            /* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
            /* harmony import */ var _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/sidenav/sidenav.component */ "./src/app/components/sidenav/sidenav.component.ts");
            /* harmony import */ var _components_core_devices_devices_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/core/devices/devices.component */ "./src/app/components/core/devices/devices.component.ts");
            /* harmony import */ var _components_core_dashboards_dashboards_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/core/dashboards/dashboards.component */ "./src/app/components/core/dashboards/dashboards.component.ts");
            /* harmony import */ var _components_core_devices_add_device_add_device_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/core/devices/add-device/add-device.component */ "./src/app/components/core/devices/add-device/add-device.component.ts");
            /* harmony import */ var _components_core_devices_list_devices_list_devices_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/core/devices/list-devices/list-devices.component */ "./src/app/components/core/devices/list-devices/list-devices.component.ts");
            /* harmony import */ var _components_core_devices_device_device_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/core/devices/device/device.component */ "./src/app/components/core/devices/device/device.component.ts");
            // Services
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                        _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                        _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"],
                        _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_12__["SidenavComponent"],
                        _components_core_devices_devices_component__WEBPACK_IMPORTED_MODULE_13__["DevicesComponent"],
                        _components_core_dashboards_dashboards_component__WEBPACK_IMPORTED_MODULE_14__["DashboardsComponent"],
                        _components_core_devices_add_device_add_device_component__WEBPACK_IMPORTED_MODULE_15__["AddDeviceComponent"],
                        _components_core_devices_list_devices_list_devices_component__WEBPACK_IMPORTED_MODULE_16__["ListDevicesComponent"],
                        _components_core_devices_device_device_component__WEBPACK_IMPORTED_MODULE_17__["DeviceComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                        _angular_Forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]
                    ],
                    providers: [_services_device_service__WEBPACK_IMPORTED_MODULE_9__["DeviceService"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/components/core/dashboards/dashboards.component.css": 
        /*!*********************************************************************!*\
          !*** ./src/app/components/core/dashboards/dashboards.component.css ***!
          \*********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29yZS9kYXNoYm9hcmRzL2Rhc2hib2FyZHMuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/components/core/dashboards/dashboards.component.ts": 
        /*!********************************************************************!*\
          !*** ./src/app/components/core/dashboards/dashboards.component.ts ***!
          \********************************************************************/
        /*! exports provided: DashboardsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardsComponent", function () { return DashboardsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var DashboardsComponent = /** @class */ (function () {
                function DashboardsComponent() {
                }
                DashboardsComponent.prototype.ngOnInit = function () {
                };
                return DashboardsComponent;
            }());
            DashboardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-dashboards',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboards.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/core/dashboards/dashboards.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboards.component.css */ "./src/app/components/core/dashboards/dashboards.component.css")).default]
                })
            ], DashboardsComponent);
            /***/ 
        }),
        /***/ "./src/app/components/core/devices/add-device/add-device.component.css": 
        /*!*****************************************************************************!*\
          !*** ./src/app/components/core/devices/add-device/add-device.component.css ***!
          \*****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29yZS9kZXZpY2VzL2FkZC1kZXZpY2UvYWRkLWRldmljZS5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/components/core/devices/add-device/add-device.component.ts": 
        /*!****************************************************************************!*\
          !*** ./src/app/components/core/devices/add-device/add-device.component.ts ***!
          \****************************************************************************/
        /*! exports provided: AddDeviceComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDeviceComponent", function () { return AddDeviceComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AddDeviceComponent = /** @class */ (function () {
                function AddDeviceComponent() {
                }
                AddDeviceComponent.prototype.ngOnInit = function () { };
                return AddDeviceComponent;
            }());
            AddDeviceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-add-device",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-device.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/core/devices/add-device/add-device.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-device.component.css */ "./src/app/components/core/devices/add-device/add-device.component.css")).default]
                })
            ], AddDeviceComponent);
            /***/ 
        }),
        /***/ "./src/app/components/core/devices/device/device.component.css": 
        /*!*********************************************************************!*\
          !*** ./src/app/components/core/devices/device/device.component.css ***!
          \*********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29yZS9kZXZpY2VzL2RldmljZS9kZXZpY2UuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/components/core/devices/device/device.component.ts": 
        /*!********************************************************************!*\
          !*** ./src/app/components/core/devices/device/device.component.ts ***!
          \********************************************************************/
        /*! exports provided: DeviceComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceComponent", function () { return DeviceComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var DeviceComponent = /** @class */ (function () {
                function DeviceComponent() {
                }
                DeviceComponent.prototype.ngOnInit = function () { };
                return DeviceComponent;
            }());
            DeviceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-device",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./device.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/core/devices/device/device.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./device.component.css */ "./src/app/components/core/devices/device/device.component.css")).default]
                })
            ], DeviceComponent);
            /***/ 
        }),
        /***/ "./src/app/components/core/devices/devices.component.css": 
        /*!***************************************************************!*\
          !*** ./src/app/components/core/devices/devices.component.css ***!
          \***************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29yZS9kZXZpY2VzL2RldmljZXMuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/components/core/devices/devices.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/components/core/devices/devices.component.ts ***!
          \**************************************************************/
        /*! exports provided: DevicesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicesComponent", function () { return DevicesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var DevicesComponent = /** @class */ (function () {
                function DevicesComponent() {
                }
                DevicesComponent.prototype.ngOnInit = function () { };
                return DevicesComponent;
            }());
            DevicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-devices",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./devices.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/core/devices/devices.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./devices.component.css */ "./src/app/components/core/devices/devices.component.css")).default]
                })
            ], DevicesComponent);
            /***/ 
        }),
        /***/ "./src/app/components/core/devices/list-devices/list-devices.component.css": 
        /*!*********************************************************************************!*\
          !*** ./src/app/components/core/devices/list-devices/list-devices.component.css ***!
          \*********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".table {\n  border: 1px solid lightgrey;\n  width: 100%;\n  text-align: center;\n  border-collapse: collapse;\n  padding: 8px;\n}\n\n.table > tr > th {\n  background-color: teal;\n  color: white;\n}\n\n.table > tr:nth-child(even) {\n  background-color: rgb(250, 251, 252);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3JlL2RldmljZXMvbGlzdC1kZXZpY2VzL2xpc3QtZGV2aWNlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvcmUvZGV2aWNlcy9saXN0LWRldmljZXMvbGlzdC1kZXZpY2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUge1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLnRhYmxlID4gdHIgPiB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRhYmxlID4gdHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgMjUxLCAyNTIpO1xufVxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/components/core/devices/list-devices/list-devices.component.ts": 
        /*!********************************************************************************!*\
          !*** ./src/app/components/core/devices/list-devices/list-devices.component.ts ***!
          \********************************************************************************/
        /*! exports provided: ListDevicesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListDevicesComponent", function () { return ListDevicesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_device_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/device.service */ "./src/app/services/device.service.ts");
            var ListDevicesComponent = /** @class */ (function () {
                function ListDevicesComponent(deviceService) {
                    this.deviceService = deviceService;
                }
                ListDevicesComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.deviceService.getDeviceList().subscribe(function (devices) {
                        console.log(devices);
                        _this.devices = devices;
                    });
                };
                return ListDevicesComponent;
            }());
            ListDevicesComponent.ctorParameters = function () { return [
                { type: _services_device_service__WEBPACK_IMPORTED_MODULE_2__["DeviceService"] }
            ]; };
            ListDevicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-list-devices",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-devices.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/core/devices/list-devices/list-devices.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-devices.component.css */ "./src/app/components/core/devices/list-devices/list-devices.component.css")).default]
                })
            ], ListDevicesComponent);
            /***/ 
        }),
        /***/ "./src/app/components/home/home.component.css": 
        /*!****************************************************!*\
          !*** ./src/app/components/home/home.component.css ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/home/home.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/components/home/home.component.ts ***!
          \***************************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent() {
                }
                HomeComponent.prototype.ngOnInit = function () { };
                return HomeComponent;
            }());
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-home",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/components/navbar/navbar.component.css": 
        /*!********************************************************!*\
          !*** ./src/app/components/navbar/navbar.component.css ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".navbar {\n  /* background-color: teal !important; */\n  background-image: -webkit-gradient(linear, left top, left bottom, from(teal), to(teal));\n  background-image: linear-gradient(teal, teal);\n}\n\n.navbar-brand {\n  font-family: \"Alfa Slab One\" !important;\n  font-size: 24px;\n}\n\n.logo {\n  height: 41px;\n  background-size: 50px 41px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1Q0FBdUM7RUFDdkMsdUZBQTZDO0VBQTdDLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLHVDQUF1QztFQUN2QyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHRlYWwgIWltcG9ydGFudDsgKi9cbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRlYWwsIHRlYWwpO1xufVxuXG4ubmF2YmFyLWJyYW5kIHtcbiAgZm9udC1mYW1pbHk6IFwiQWxmYSBTbGFiIE9uZVwiICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLmxvZ28ge1xuICBoZWlnaHQ6IDQxcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogNTBweCA0MXB4O1xufVxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/components/navbar/navbar.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/components/navbar/navbar.component.ts ***!
          \*******************************************************/
        /*! exports provided: NavbarComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () { return NavbarComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var NavbarComponent = /** @class */ (function () {
                function NavbarComponent() {
                }
                NavbarComponent.prototype.ngOnInit = function () { };
                return NavbarComponent;
            }());
            NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-navbar",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")).default]
                })
            ], NavbarComponent);
            /***/ 
        }),
        /***/ "./src/app/components/not-found/not-found.component.css": 
        /*!**************************************************************!*\
          !*** ./src/app/components/not-found/not-found.component.css ***!
          \**************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/components/not-found/not-found.component.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/components/not-found/not-found.component.ts ***!
          \*************************************************************/
        /*! exports provided: NotFoundComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () { return NotFoundComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var NotFoundComponent = /** @class */ (function () {
                function NotFoundComponent() {
                }
                NotFoundComponent.prototype.ngOnInit = function () {
                };
                return NotFoundComponent;
            }());
            NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-not-found',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/not-found/not-found.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./not-found.component.css */ "./src/app/components/not-found/not-found.component.css")).default]
                })
            ], NotFoundComponent);
            /***/ 
        }),
        /***/ "./src/app/components/sidenav/sidenav.component.css": 
        /*!**********************************************************!*\
          !*** ./src/app/components/sidenav/sidenav.component.css ***!
          \**********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#sidenav {\n  /* width: 250px; */\n  background-color: rgb(226, 226, 226);\n\n  padding-left: 20px;\n  padding-top: 5px;\n  height: 100%;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n\n.sidenav-expand {\n  width: 250px;\n}\n\n.sidenav-collapse {\n  width: 60px;\n}\n\ni {\n  width: 100%;\n  text-align: right;\n  /* background-color: pink; */\n  padding: 10px;\n}\n\n.leds {\n  align-content: center;\n  margin: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixvQ0FBb0M7O0VBRXBDLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHdCQUFnQjtFQUFoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzaWRlbmF2IHtcbiAgLyogd2lkdGg6IDI1MHB4OyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2LCAyMjYsIDIyNik7XG5cbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5zaWRlbmF2LWV4cGFuZCB7XG4gIHdpZHRoOiAyNTBweDtcbn1cblxuLnNpZGVuYXYtY29sbGFwc2Uge1xuICB3aWR0aDogNjBweDtcbn1cblxuaSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcGluazsgKi9cbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmxlZHMge1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0bztcbn1cbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/sidenav/sidenav.component.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/components/sidenav/sidenav.component.ts ***!
          \*********************************************************/
        /*! exports provided: SidenavComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function () { return SidenavComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
            var SidenavComponent = /** @class */ (function () {
                function SidenavComponent() {
                    this.isCollapsed = false;
                }
                SidenavComponent.prototype.ngOnInit = function () { };
                SidenavComponent.prototype.toggleCollapse = function () {
                    this.isCollapsed = !this.isCollapsed;
                };
                return SidenavComponent;
            }());
            SidenavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-sidenav",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidenav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidenav/sidenav.component.html")).default,
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("fade", [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("void => *", [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                                    width: 0
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                                    width: "250px"
                                }))
                            ])
                        ])
                    ],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidenav.component.css */ "./src/app/components/sidenav/sidenav.component.css")).default]
                })
            ], SidenavComponent);
            /***/ 
        }),
        /***/ "./src/app/services/device.service.ts": 
        /*!********************************************!*\
          !*** ./src/app/services/device.service.ts ***!
          \********************************************/
        /*! exports provided: DeviceService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceService", function () { return DeviceService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    "Content-Type": "application/json"
                })
            };
            var DeviceService = /** @class */ (function () {
                function DeviceService(http) {
                    this.http = http;
                    this.deviceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backendurl;
                }
                DeviceService.prototype.getDeviceList = function () {
                    return this.http.get(this.deviceUrl);
                };
                return DeviceService;
            }());
            DeviceService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            DeviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: "root"
                })
            ], DeviceService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false,
                backendurl: "http://localhost:8080"
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /Users/vatadepalli/Desktop/IoTx-Angular/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map