(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _hot_weather_widget_hot_weather_widget_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hot-weather-widget/hot-weather-widget.component */ "./src/app/hot-weather-widget/hot-weather-widget.component.ts");



class AppComponent {
    constructor() {
        this.title = 'ng030320';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-hot-weather-widget");
    } }, directives: [_hot_weather_widget_hot_weather_widget_component__WEBPACK_IMPORTED_MODULE_1__["HotWeatherWidgetComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _hot_weather_widget_hot_weather_widget_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hot-weather-widget/hot-weather-widget.component */ "./src/app/hot-weather-widget/hot-weather-widget.component.ts");
/* harmony import */ var _hot_weather_widget_places_info_widget_places_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hot-weather-widget/places-info-widget/places-list.component */ "./src/app/hot-weather-widget/places-info-widget/places-list.component.ts");
/* harmony import */ var _hot_weather_widget_places_info_widget_weather_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hot-weather-widget/places-info-widget/weather-details.component */ "./src/app/hot-weather-widget/places-info-widget/weather-details.component.ts");
/* harmony import */ var _hot_weather_widget_places_info_widget_social_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hot-weather-widget/places-info-widget/social-info.component */ "./src/app/hot-weather-widget/places-info-widget/social-info.component.ts");
/* harmony import */ var _hot_weather_widget_places_info_widget_place_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hot-weather-widget/places-info-widget/place-item.component */ "./src/app/hot-weather-widget/places-info-widget/place-item.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _hot_weather_widget_places_info_widget_states_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hot-weather-widget/places-info-widget/states.pipe */ "./src/app/hot-weather-widget/places-info-widget/states.pipe.ts");
/* harmony import */ var _hot_weather_widget_places_info_widget_place_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hot-weather-widget/places-info-widget/place.pipe */ "./src/app/hot-weather-widget/places-info-widget/place.pipe.ts");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _hot_weather_widget_hot_weather_widget_component__WEBPACK_IMPORTED_MODULE_4__["HotWeatherWidgetComponent"],
        _hot_weather_widget_places_info_widget_places_list_component__WEBPACK_IMPORTED_MODULE_5__["PlacesListComponent"],
        _hot_weather_widget_places_info_widget_weather_details_component__WEBPACK_IMPORTED_MODULE_6__["WeatherDetailsComponent"],
        _hot_weather_widget_places_info_widget_social_info_component__WEBPACK_IMPORTED_MODULE_7__["SocialInfoComponent"],
        _hot_weather_widget_places_info_widget_place_item_component__WEBPACK_IMPORTED_MODULE_8__["PlaceItemComponent"],
        _hot_weather_widget_places_info_widget_states_pipe__WEBPACK_IMPORTED_MODULE_10__["StatesPipe"],
        _hot_weather_widget_places_info_widget_place_pipe__WEBPACK_IMPORTED_MODULE_11__["PlacePipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _hot_weather_widget_hot_weather_widget_component__WEBPACK_IMPORTED_MODULE_4__["HotWeatherWidgetComponent"],
                    _hot_weather_widget_places_info_widget_places_list_component__WEBPACK_IMPORTED_MODULE_5__["PlacesListComponent"],
                    _hot_weather_widget_places_info_widget_weather_details_component__WEBPACK_IMPORTED_MODULE_6__["WeatherDetailsComponent"],
                    _hot_weather_widget_places_info_widget_social_info_component__WEBPACK_IMPORTED_MODULE_7__["SocialInfoComponent"],
                    _hot_weather_widget_places_info_widget_place_item_component__WEBPACK_IMPORTED_MODULE_8__["PlaceItemComponent"],
                    _hot_weather_widget_places_info_widget_states_pipe__WEBPACK_IMPORTED_MODULE_10__["StatesPipe"],
                    _hot_weather_widget_places_info_widget_place_pipe__WEBPACK_IMPORTED_MODULE_11__["PlacePipe"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/hot-weather-widget/hot-weather-widget.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/hot-weather-widget/hot-weather-widget.component.ts ***!
  \********************************************************************/
/*! exports provided: HotWeatherWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotWeatherWidgetComponent", function() { return HotWeatherWidgetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _place_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./place-state.service */ "./src/app/hot-weather-widget/place-state.service.ts");
/* harmony import */ var _places_info_widget_places_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./places-info-widget/places-list.component */ "./src/app/hot-weather-widget/places-info-widget/places-list.component.ts");
/* harmony import */ var _places_info_widget_weather_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./places-info-widget/weather-details.component */ "./src/app/hot-weather-widget/places-info-widget/weather-details.component.ts");
/* harmony import */ var _places_info_widget_social_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./places-info-widget/social-info.component */ "./src/app/hot-weather-widget/places-info-widget/social-info.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








class HotWeatherWidgetComponent {
    constructor(placeState) {
        this.placeState = placeState;
    }
    ngOnInit() {
        this.list$ = this.placeState.getPlacesData();
    }
    selectPlace(event) {
        this.social = event;
    }
}
HotWeatherWidgetComponent.ɵfac = function HotWeatherWidgetComponent_Factory(t) { return new (t || HotWeatherWidgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_place_state_service__WEBPACK_IMPORTED_MODULE_1__["PlaceStateService"])); };
HotWeatherWidgetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HotWeatherWidgetComponent, selectors: [["app-hot-weather-widget"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_place_state_service__WEBPACK_IMPORTED_MODULE_1__["PlaceStateService"]])], decls: 8, vars: 5, consts: [[1, "flex-container"], [1, "flex-container__row"], [1, "flex-container__row-left"], [3, "list", "selectPlaces"], [1, "flex-container__row-right"], [3, "weather"], [3, "social"]], template: function HotWeatherWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-places-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectPlaces", function HotWeatherWidgetComponent_Template_app_places_list_selectPlaces_3_listener($event) { return ctx.selectPlace($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-weather-details", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-social-info", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("list", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, ctx.list$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("weather", ctx.social == null ? null : ctx.social.weather);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("social", ctx.social == null ? null : ctx.social.social_info);
    } }, directives: [_places_info_widget_places_list_component__WEBPACK_IMPORTED_MODULE_2__["PlacesListComponent"], _places_info_widget_weather_details_component__WEBPACK_IMPORTED_MODULE_3__["WeatherDetailsComponent"], _places_info_widget_social_info_component__WEBPACK_IMPORTED_MODULE_4__["SocialInfoComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".flex-container[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin: 100px auto;\n}\n.flex-container__row[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: start;\n          align-items: start;\n}\n.flex-container__row-left[_ngcontent-%COMP%] {\n  max-width: 350px;\n  margin-right: 30px;\n}\n.flex-container__row-right[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\napp-weather-details[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG90LXdlYXRoZXItd2lkZ2V0L0U6XFxBbmd1bGFyIERldlxcTmV3IGZvbGRlclxcaG90LXdlYXRoZXIvc3JjXFxhcHBcXGhvdC13ZWF0aGVyLXdpZGdldFxcaG90LXdlYXRoZXItd2lkZ2V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob3Qtd2VhdGhlci13aWRnZXQvaG90LXdlYXRoZXItd2lkZ2V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGtCQUFBO0FDQ0Y7QURDRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx3QkFBQTtVQUFBLGtCQUFBO0FDQ0o7QURHRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNESjtBRElFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ0ZKO0FETUE7RUFDRSxtQkFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvaG90LXdlYXRoZXItd2lkZ2V0L2hvdC13ZWF0aGVyLXdpZGdldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46IDEwMHB4IGF1dG87XHJcblxyXG4gICZfX3JvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG5cclxuICB9XHJcblxyXG4gICZfX3Jvdy1sZWZ0IHtcclxuICAgIG1heC13aWR0aDogMzUwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgfVxyXG5cclxuICAmX19yb3ctcmlnaHQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gO1xyXG4gIH1cclxufVxyXG5cclxuYXBwLXdlYXRoZXItZGV0YWlscyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4iLCIuZmxleC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAxMDBweCBhdXRvO1xufVxuLmZsZXgtY29udGFpbmVyX19yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xufVxuLmZsZXgtY29udGFpbmVyX19yb3ctbGVmdCB7XG4gIG1heC13aWR0aDogMzUwcHg7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbn1cbi5mbGV4LWNvbnRhaW5lcl9fcm93LXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5hcHAtd2VhdGhlci1kZXRhaWxzIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HotWeatherWidgetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hot-weather-widget',
                templateUrl: './hot-weather-widget.component.html',
                styleUrls: ['./hot-weather-widget.component.scss'],
                providers: [_place_state_service__WEBPACK_IMPORTED_MODULE_1__["PlaceStateService"]]
            }]
    }], function () { return [{ type: _place_state_service__WEBPACK_IMPORTED_MODULE_1__["PlaceStateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/hot-weather-widget/place-state.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/hot-weather-widget/place-state.service.ts ***!
  \***********************************************************/
/*! exports provided: PlaceStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceStateService", function() { return PlaceStateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class PlaceStateService {
    constructor(http) {
        this.http = http;
        this.urlPrefix = 'assets';
    }
    getPlacesData() {
        const url = `${this.urlPrefix}/data.json`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(2000));
    }
}
PlaceStateService.ɵfac = function PlaceStateService_Factory(t) { return new (t || PlaceStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PlaceStateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PlaceStateService, factory: PlaceStateService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlaceStateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/hot-weather-widget/places-info-widget/place-item.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/hot-weather-widget/places-info-widget/place-item.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PlaceItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceItemComponent", function() { return PlaceItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PlaceItemComponent {
    constructor() {
        this.selectStatePlace = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnChanges(changes) {
        if (changes.place) {
            console.log(this.place);
        }
    }
    ngOnInit() {
    }
    selectPlace(value) {
        this.selectStatePlace.emit(value);
    }
}
PlaceItemComponent.ɵfac = function PlaceItemComponent_Factory(t) { return new (t || PlaceItemComponent)(); };
PlaceItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlaceItemComponent, selectors: [["app-place-item"]], inputs: { place: "place" }, outputs: { selectStatePlace: "selectStatePlace" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]()], decls: 13, vars: 6, consts: [[1, "conteiner"], [1, "activity-desc"], [1, "images", 3, "click"], [3, "src", "alt"]], template: function PlaceItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Address:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlaceItemComponent_Template_ul_click_8_listener() { return ctx.selectPlace(ctx.place); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.place.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.place.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.place.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.place.img);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.place.social_info.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.place.social_info.img);
    } }, styles: [".images[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: -webkit-box;\n  display: flex;\n}\n.images[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 62px;\n}\n.images[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.conteiner[_ngcontent-%COMP%] {\n  padding: 1em 0;\n  scroll-snap-align: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n  background: #ffffff;\n}\n.activity-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #999;\n  font-size: 0.94em;\n  line-height: 1.7em;\n}\n.activity-desc[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 1em;\n  font-weight: 500;\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG90LXdlYXRoZXItd2lkZ2V0L3BsYWNlcy1pbmZvLXdpZGdldC9FOlxcQW5ndWxhciBEZXZcXE5ldyBmb2xkZXJcXGhvdC13ZWF0aGVyL3NyY1xcYXBwXFxob3Qtd2VhdGhlci13aWRnZXRcXHBsYWNlcy1pbmZvLXdpZGdldFxccGxhY2UtaXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG90LXdlYXRoZXItd2lkZ2V0L3BsYWNlcy1pbmZvLXdpZGdldC9wbGFjZS1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ0NGO0FEQUE7RUFDRSxXQUFBO0FDRUY7QURERTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDR0o7QURFQTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNDRjtBREVBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDRjtBRENBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9ob3Qtd2VhdGhlci13aWRnZXQvcGxhY2VzLWluZm8td2lkZ2V0L3BsYWNlLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2VzIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbmxpIHtcclxuICB3aWR0aDogNjJweDtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxufVxyXG59XHJcblxyXG4uY29udGVpbmVyIHtcclxuICBwYWRkaW5nOiAxZW0gMDtcclxuICBzY3JvbGwtc25hcC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5hY3Rpdml0eS1kZXNjIHAge1xyXG4gIGNvbG9yOiAjOTk5O1xyXG4gIGZvbnQtc2l6ZTogLjk0ZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuN2VtO1xyXG59XHJcbi5hY3Rpdml0eS1kZXNjIGg1IHtcclxuICBjb2xvcjogIzAwMDtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuXHJcbiIsIi5pbWFnZXMge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uaW1hZ2VzIGxpIHtcbiAgd2lkdGg6IDYycHg7XG59XG4uaW1hZ2VzIGxpIGltZyB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmNvbnRlaW5lciB7XG4gIHBhZGRpbmc6IDFlbSAwO1xuICBzY3JvbGwtc25hcC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuXG4uYWN0aXZpdHktZGVzYyBwIHtcbiAgY29sb3I6ICM5OTk7XG4gIGZvbnQtc2l6ZTogMC45NGVtO1xuICBsaW5lLWhlaWdodDogMS43ZW07XG59XG5cbi5hY3Rpdml0eS1kZXNjIGg1IHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlaceItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-place-item',
                templateUrl: './place-item.component.html',
                styleUrls: ['./place-item.component.scss']
            }]
    }], function () { return []; }, { place: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectStatePlace: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/hot-weather-widget/places-info-widget/place.pipe.ts":
/*!*********************************************************************!*\
  !*** ./src/app/hot-weather-widget/places-info-widget/place.pipe.ts ***!
  \*********************************************************************/
/*! exports provided: PlacePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacePipe", function() { return PlacePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PlacePipe {
    transform(value, type) {
        return value.filter(v => v.type.includes(type));
    }
}
PlacePipe.ɵfac = function PlacePipe_Factory(t) { return new (t || PlacePipe)(); };
PlacePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "placeFilter", type: PlacePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlacePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'placeFilter'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/hot-weather-widget/places-info-widget/places-list.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/hot-weather-widget/places-info-widget/places-list.component.ts ***!
  \********************************************************************************/
/*! exports provided: PlacesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesListComponent", function() { return PlacesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _place_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./place-item.component */ "./src/app/hot-weather-widget/places-info-widget/place-item.component.ts");
/* harmony import */ var _states_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./states.pipe */ "./src/app/hot-weather-widget/places-info-widget/states.pipe.ts");
/* harmony import */ var _place_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./place.pipe */ "./src/app/hot-weather-widget/places-info-widget/place.pipe.ts");






function PlacesListComponent_div_0_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlacesListComponent_div_0_li_4_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const state_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.selectState(state_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](state_r3 == null ? null : state_r3.type);
} }
function PlacesListComponent_div_0_app_place_item_11_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-place-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectStatePlace", function PlacesListComponent_div_0_app_place_item_11_Template_app_place_item_selectStatePlace_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.selectAddress($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("place", item_r6);
} }
function PlacesListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PlacesListComponent_div_0_li_4_Template, 3, 1, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "states");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Righteous indignation & like");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PlacesListComponent_div_0_app_place_item_11_Template, 1, 1, "app-place-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "placeFilter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.selectedItem == null ? null : ctx_r0.selectedItem.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r0.selectedItem == null ? null : ctx_r0.selectedItem.img);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, ctx_r0.list));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 6, ctx_r0.list, ctx_r0.selectedItem == null ? null : ctx_r0.selectedItem.type));
} }
class PlacesListComponent {
    constructor() {
        this.list = [];
        this.selectPlaces = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    set setList(value) {
        if (!value) {
            return;
        }
        this.list = value;
        this.selectedItem = value[0];
        this.selectPlaces.emit(this.selectedItem);
    }
    ngOnInit() {
        if (this.list) {
            this.selectedItem = this.list[0];
        }
    }
    selectState(event) {
        this.selectedItem = event;
    }
    selectAddress(social) {
        this.selectedItem = social;
        this.selectPlaces.emit(social);
    }
}
PlacesListComponent.ɵfac = function PlacesListComponent_Factory(t) { return new (t || PlacesListComponent)(); };
PlacesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlacesListComponent, selectors: [["app-places-list"]], inputs: { setList: ["list", "setList"] }, outputs: { selectPlaces: "selectPlaces" }, decls: 1, vars: 1, consts: [["class", "conteiner", 4, "ngIf"], [1, "conteiner"], [3, "src", "alt"], [1, "places"], ["class", "v-line", 4, "ngFor", "ngForOf"], [1, "village"], [1, "line"], [1, "list"], [3, "place", "selectStatePlace", 4, "ngFor", "ngForOf"], [1, "v-line"], ["href", "#", 3, "click"], [3, "place", "selectStatePlace"]], template: function PlacesListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PlacesListComponent_div_0_Template, 13, 9, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedItem);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _place_item_component__WEBPACK_IMPORTED_MODULE_2__["PlaceItemComponent"]], pipes: [_states_pipe__WEBPACK_IMPORTED_MODULE_3__["StatesPipe"], _place_pipe__WEBPACK_IMPORTED_MODULE_4__["PlacePipe"]], styles: ["img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  border-radius: 6px 6px 0 0;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  text-align: center;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 1em;\n  color: #fff;\n}\n\n.v-line[_ngcontent-%COMP%] {\n  border-right: 1px solid #ffffff;\n  height: 17px;\n}\n\nul[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  list-style: none;\n}\n\nli[_ngcontent-%COMP%] {\n  padding: 0 0.5em;\n}\n\n.places[_ngcontent-%COMP%] {\n  background: #fda660;\n}\n\n.list[_ngcontent-%COMP%] {\n  height: 140px;\n  overflow-y: scroll;\n  padding: 0 1em;\n  background: #ffffff;\n}\n\n.list[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background-color: #f0f0f0;\n}\n\n.list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n  background-color: #f5f5f5;\n}\n\n.list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #fda660;\n}\n\n.conteiner[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.village[_ngcontent-%COMP%] {\n  background: #ffffff;\n}\n\n.village[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.95em;\n  color: #000;\n  font-weight: 700;\n  font-family: Roboto, sans-serif;\n}\n\nspan.line[_ngcontent-%COMP%] {\n  background: url(https://potre.github.io/hot-weather-widget/line.2d5e8a4f80b2e94ac8c5.png) no-repeat;\n  width: 103px;\n  height: 2px;\n  display: block;\n  margin: 0.6em auto 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG90LXdlYXRoZXItd2lkZ2V0L3BsYWNlcy1pbmZvLXdpZGdldC9FOlxcQW5ndWxhciBEZXZcXE5ldyBmb2xkZXJcXGhvdC13ZWF0aGVyL3NyY1xcYXBwXFxob3Qtd2VhdGhlci13aWRnZXRcXHBsYWNlcy1pbmZvLXdpZGdldFxccGxhY2VzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvdC13ZWF0aGVyLXdpZGdldC9wbGFjZXMtaW5mby13aWRnZXQvcGxhY2VzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSwrQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURDQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGdCQUFBO0FDRUY7O0FEQ0E7RUFDRSxnQkFBQTtBQ0VGOztBRENBO0VBQ0UsbUJBQUE7QUNFRjs7QURFQTtFQUNBLGFBQUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0NGOztBRENFO0VBQ0UseUJBQUE7QUNDSjs7QURFRTtFQUNFLFVBQUE7RUFDQSx5QkFBQTtBQ0FKOztBREdFO0VBQ0UseUJBQUE7QUNESjs7QURNQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0hGOztBRE1BO0VBRUUsbUJBQUE7QUNKRjs7QURLRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtBQ0hKOztBRE9BO0VBQ0UsbUdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQ0pGIiwiZmlsZSI6InNyYy9hcHAvaG90LXdlYXRoZXItd2lkZ2V0L3BsYWNlcy1pbmZvLXdpZGdldC9wbGFjZXMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweCA2cHggMCAwO1xyXG59XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4udi1saW5lIHtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZmZmZmO1xyXG4gIGhlaWdodDogMTdweDtcclxufVxyXG51bCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG5saSB7XHJcbiAgcGFkZGluZzogMCAuNWVtO1xyXG59XHJcblxyXG4ucGxhY2VzIHtcclxuICBiYWNrZ3JvdW5kOiAjZmRhNjYwO1xyXG59XHJcblxyXG5cclxuLmxpc3Qge1xyXG5oZWlnaHQ6IDE0MHB4O1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBwYWRkaW5nOiAwIDFlbTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG5cclxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4gIH1cclxuXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgfVxyXG5cclxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRhNjYwO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5jb250ZWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnZpbGxhZ2Uge1xyXG5cclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICYgaDMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAuOTVlbTtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG59XHJcblxyXG5zcGFuLmxpbmUge1xyXG4gIGJhY2tncm91bmQ6IHVybChodHRwczovL3BvdHJlLmdpdGh1Yi5pby9ob3Qtd2VhdGhlci13aWRnZXQvbGluZS4yZDVlOGE0ZjgwYjJlOTRhYzhjNS5wbmcpIG5vLXJlcGVhdDtcclxuICB3aWR0aDogMTAzcHg7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAuNmVtIGF1dG8gMDtcclxufVxyXG4iLCJpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDZweCA2cHggMCAwO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDFlbTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi52LWxpbmUge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZmZmZmO1xuICBoZWlnaHQ6IDE3cHg7XG59XG5cbnVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxubGkge1xuICBwYWRkaW5nOiAwIDAuNWVtO1xufVxuXG4ucGxhY2VzIHtcbiAgYmFja2dyb3VuZDogI2ZkYTY2MDtcbn1cblxuLmxpc3Qge1xuICBoZWlnaHQ6IDE0MHB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHBhZGRpbmc6IDAgMWVtO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuLmxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbn1cbi5saXN0Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG4ubGlzdDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRhNjYwO1xufVxuXG4uY29udGVpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnZpbGxhZ2Uge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuLnZpbGxhZ2UgaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC45NWVtO1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcbn1cblxuc3Bhbi5saW5lIHtcbiAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vcG90cmUuZ2l0aHViLmlvL2hvdC13ZWF0aGVyLXdpZGdldC9saW5lLjJkNWU4YTRmODBiMmU5NGFjOGM1LnBuZykgbm8tcmVwZWF0O1xuICB3aWR0aDogMTAzcHg7XG4gIGhlaWdodDogMnB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwLjZlbSBhdXRvIDA7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlacesListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-places-list',
                templateUrl: './places-list.component.html',
                styleUrls: ['./places-list.component.scss']
            }]
    }], function () { return []; }, { setList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['list']
        }], selectPlaces: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/hot-weather-widget/places-info-widget/social-info.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/hot-weather-widget/places-info-widget/social-info.component.ts ***!
  \********************************************************************************/
/*! exports provided: SocialInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialInfoComponent", function() { return SocialInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function SocialInfoComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Followers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Following");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.social == null ? null : ctx_r10.social.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r10.social == null ? null : ctx_r10.social.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.social == null ? null : ctx_r10.social.followers);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.social == null ? null : ctx_r10.social.following);
} }
class SocialInfoComponent {
    constructor() {
    }
    set Social(value) {
        if (!value) {
            return;
        }
        console.log(value);
        this.social = value;
    }
    ngOnInit() {
    }
}
SocialInfoComponent.ɵfac = function SocialInfoComponent_Factory(t) { return new (t || SocialInfoComponent)(); };
SocialInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SocialInfoComponent, selectors: [["app-social-info"]], inputs: { Social: ["social", "Social"] }, decls: 1, vars: 1, consts: [["class", "social", 4, "ngIf"], [1, "social"], [1, "title"], [1, "w-line"], ["alt", "Social image", 1, "img-responsive", 3, "src"], [1, "stats"]], template: function SocialInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SocialInfoComponent_div_0_Template, 18, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.social);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".social[_ngcontent-%COMP%] {\n  background: #fd7b87;\n  border-radius: 5px;\n  overflow: hidden;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: 100%;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.social[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 1em;\n}\n.social[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: white;\n  margin: 0;\n}\n.social[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .w-line[_ngcontent-%COMP%] {\n  width: 100px;\n  margin: 0.7em auto;\n  border-bottom: 2px solid white;\n}\n.social[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 100px;\n  border: 3px solid white;\n  width: 100px;\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin: 0 auto;\n}\n.social[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%] {\n  background: white;\n  padding: 0.7em 0;\n}\n.social[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.social[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0 1em;\n  text-align: center;\n}\n.social[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.95em;\n  color: black;\n  font-weight: 700;\n  margin: 0;\n}\n.social[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  color: gray;\n  margin: 0;\n}\n.social[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child) {\n  border-right: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG90LXdlYXRoZXItd2lkZ2V0L3BsYWNlcy1pbmZvLXdpZGdldC9FOlxcQW5ndWxhciBEZXZcXE5ldyBmb2xkZXJcXGhvdC13ZWF0aGVyL3NyY1xcYXBwXFxob3Qtd2VhdGhlci13aWRnZXRcXHBsYWNlcy1pbmZvLXdpZGdldFxcc29jaWFsLWluZm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvdC13ZWF0aGVyLXdpZGdldC9wbGFjZXMtaW5mby13aWRnZXQvc29jaWFsLWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ0NGO0FEQ0U7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUNDSjtBRENJO0VBQ0UsWUFBQTtFQUNBLFNBQUE7QUNDTjtBREVJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUNBTjtBREdJO0VBQ0Usb0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGNBQUE7QUNETjtBREtFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQ0hKO0FES0k7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNITjtBREtNO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FDSFI7QURLUTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQ0hWO0FETVE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDSlY7QURPUTtFQUNFLDZCQUFBO0FDTFYiLCJmaWxlIjoic3JjL2FwcC9ob3Qtd2VhdGhlci13aWRnZXQvcGxhY2VzLWluZm8td2lkZ2V0L3NvY2lhbC1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNvY2lhbCB7XHJcbiAgYmFja2dyb3VuZDogI2ZkN2I4NztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgLnRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuXHJcbiAgICBoNCB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC53LWxpbmUge1xyXG4gICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgIG1hcmdpbjogLjdlbSBhdXRvO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICAgIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xyXG4gICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zdGF0cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IC43ZW0gMDtcclxuXHJcbiAgICB1bCB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICBsaSB7XHJcbiAgICAgICAgcGFkZGluZzogMCAxZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICBmb250LXNpemU6IC45NWVtO1xyXG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAuOGVtO1xyXG4gICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5zb2NpYWwge1xuICBiYWNrZ3JvdW5kOiAjZmQ3Yjg3O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnNvY2lhbCAudGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFlbTtcbn1cbi5zb2NpYWwgLnRpdGxlIGg0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDA7XG59XG4uc29jaWFsIC50aXRsZSAudy1saW5lIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW46IDAuN2VtIGF1dG87XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcbn1cbi5zb2NpYWwgLnRpdGxlIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uc29jaWFsIC5zdGF0cyB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAwLjdlbSAwO1xufVxuLnNvY2lhbCAuc3RhdHMgdWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNvY2lhbCAuc3RhdHMgdWwgbGkge1xuICBwYWRkaW5nOiAwIDFlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNvY2lhbCAuc3RhdHMgdWwgbGkgaDMge1xuICBmb250LXNpemU6IDAuOTVlbTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW46IDA7XG59XG4uc29jaWFsIC5zdGF0cyB1bCBsaSBwIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbjogMDtcbn1cbi5zb2NpYWwgLnN0YXRzIHVsIGxpOm5vdCg6bGFzdC1jaGlsZCkge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-social-info',
                templateUrl: './social-info.component.html',
                styleUrls: ['./social-info.component.scss']
            }]
    }], function () { return []; }, { Social: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['social']
        }] }); })();


/***/ }),

/***/ "./src/app/hot-weather-widget/places-info-widget/states.pipe.ts":
/*!**********************************************************************!*\
  !*** ./src/app/hot-weather-widget/places-info-widget/states.pipe.ts ***!
  \**********************************************************************/
/*! exports provided: StatesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatesPipe", function() { return StatesPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);



class StatesPipe {
    transform(value) {
        return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["uniqBy"])(value, 'type');
    }
}
StatesPipe.ɵfac = function StatesPipe_Factory(t) { return new (t || StatesPipe)(); };
StatesPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "states", type: StatesPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatesPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'states'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/hot-weather-widget/places-info-widget/weather-details.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/hot-weather-widget/places-info-widget/weather-details.component.ts ***!
  \************************************************************************************/
/*! exports provided: WeatherDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherDetailsComponent", function() { return WeatherDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function WeatherDetailsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "use");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "sup", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00B0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "sup", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u00B0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.weather == null ? null : ctx_r9.weather.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r9.weather == null ? null : ctx_r9.weather.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", "./assets/hot-weather-widget/icons.svg#" + ctx_r9.weather.icon, null, "xlink");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.weather == null ? null : ctx_r9.weather.temperature);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Water ", ctx_r9.weather == null ? null : ctx_r9.weather.water, "");
} }
class WeatherDetailsComponent {
    constructor() {
    }
    set SetWeather(value) {
        if (!value) {
            return;
        }
        this.weather = value;
    }
    ngOnInit() {
    }
}
WeatherDetailsComponent.ɵfac = function WeatherDetailsComponent_Factory(t) { return new (t || WeatherDetailsComponent)(); };
WeatherDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WeatherDetailsComponent, selectors: [["app-weather-details"]], inputs: { SetWeather: ["weather", "SetWeather"] }, decls: 1, vars: 1, consts: [["class", "weather-widget", 4, "ngIf"], [1, "weather-widget"], [1, "w-line"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 64 64", 1, "icon"], [1, "degree"]], template: function WeatherDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WeatherDetailsComponent_div_0_Template, 14, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.weather);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".weather-widget[_ngcontent-%COMP%] {\n  padding: 1em;\n  background: #5fb3f9;\n  text-align: center;\n  border-radius: 5px;\n}\n.weather-widget[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 1em;\n  color: white;\n  margin: 1em 0 0;\n  font-weight: 400;\n}\n.weather-widget[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1em;\n  margin: 0;\n}\n.weather-widget[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 3.2em;\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0;\n  font-weight: 400;\n}\n.weather-widget[_ngcontent-%COMP%]   .degree[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n.weather-widget[_ngcontent-%COMP%]   .w-line[_ngcontent-%COMP%] {\n  width: 100px;\n  margin: 0.7em auto;\n  border-bottom: 2px solid white;\n}\n.weather-widget[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 3.2em;\n  height: 3.2em;\n  display: inline-block;\n  vertical-align: middle;\n  background-repeat: no-repeat;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG90LXdlYXRoZXItd2lkZ2V0L3BsYWNlcy1pbmZvLXdpZGdldC9FOlxcQW5ndWxhciBEZXZcXE5ldyBmb2xkZXJcXGhvdC13ZWF0aGVyL3NyY1xcYXBwXFxob3Qtd2VhdGhlci13aWRnZXRcXHBsYWNlcy1pbmZvLXdpZGdldFxcd2VhdGhlci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob3Qtd2VhdGhlci13aWRnZXQvcGxhY2VzLWluZm8td2lkZ2V0L3dlYXRoZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDRjtBRENFO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBREVFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FDQUo7QURHRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUNESjtBRElFO0VBQ0UsbUJBQUE7QUNGSjtBREtFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUNISjtBRE1FO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9ob3Qtd2VhdGhlci13aWRnZXQvcGxhY2VzLWluZm8td2lkZ2V0L3dlYXRoZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWF0aGVyLXdpZGdldCB7XHJcbiAgcGFkZGluZzogMWVtO1xyXG4gIGJhY2tncm91bmQ6ICM1ZmIzZjk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgaDYge1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDFlbSAwIDA7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxuXHJcbiAgaDUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICBoMiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDMuMmVtO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG5cclxuICAuZGVncmVlIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgfVxyXG5cclxuICAudy1saW5lIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIG1hcmdpbjogLjdlbSBhdXRvO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLmljb24ge1xyXG4gICAgd2lkdGg6IDMuMmVtO1xyXG4gICAgaGVpZ2h0OiAzLjJlbTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxufVxyXG4iLCIud2VhdGhlci13aWRnZXQge1xuICBwYWRkaW5nOiAxZW07XG4gIGJhY2tncm91bmQ6ICM1ZmIzZjk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLndlYXRoZXItd2lkZ2V0IGg2IHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAxZW0gMCAwO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLndlYXRoZXItd2lkZ2V0IGg1IHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDFlbTtcbiAgbWFyZ2luOiAwO1xufVxuLndlYXRoZXItd2lkZ2V0IGgyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDMuMmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi53ZWF0aGVyLXdpZGdldCAuZGVncmVlIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cbi53ZWF0aGVyLXdpZGdldCAudy1saW5lIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW46IDAuN2VtIGF1dG87XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcbn1cbi53ZWF0aGVyLXdpZGdldCAuaWNvbiB7XG4gIHdpZHRoOiAzLjJlbTtcbiAgaGVpZ2h0OiAzLjJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBjb2xvcjogd2hpdGU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeatherDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-weather-details',
                templateUrl: './weather-details.component.html',
                styleUrls: ['./weather-details.component.scss']
            }]
    }], function () { return []; }, { SetWeather: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['weather']
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Angular Dev\New folder\hot-weather\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map