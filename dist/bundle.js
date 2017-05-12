/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (() => 'hi');

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_hi__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_main_sass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_main_sass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_main_sass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_scrollspy_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_scrollspy_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__modules_scrollspy_js__);



console.log('WEbpackloaded');
console.log(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__modules_hi__["a" /* default */])());

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

// This module will emulate a scrollspy feature, by attaching itself to trigger dom nodes and animating the scroll of the page appropriately

//TODO: Select All Dom Nodes that will Trigger ScrollSpy

//TODO: Add Speed feature
//TODO: Add registration feature that appends the trigger's target node's height to a data element on the node to allow for less compute time

const selectTriggers = () => {
	document.querySelectorAll('.scroll-spy-trigger').forEach(ele => {
		let worked = appendScrollEffect(ele);
		if (!worked) console.log('Element was not an anchor');
	});
};

const appendScrollEffect = element => {
	const isAnchor = element.hasAttribute('href');
	if (!isAnchor) return false;
	element.onclick = () => {
		// Abstract this out in registration feature
		let currentTop = window.scrollY;
		let targetPos = document.querySelector(`${element.getAttribute('href')}`).getBoundingClientRect();
		console.log(targetPos);

		console.log(currentTop);
	};
	let targetPos = document.querySelector(`${element.getAttribute('href')}`).getBoundingClientRect();
	console.log(targetPos);
};

selectTriggers();

/***/ })
/******/ ]);