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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/burger-menu.js":
/*!*******************************!*\
  !*** ./src/js/burger-menu.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

var burgerIcon = document.querySelector('.header__burger-icon');
var dekstopMenu = document.querySelector('.header__list');
burgerIcon.addEventListener('click', function () {
  dekstopMenu.classList.toggle('header__list_open');
  burgerIcon.classList.toggle('header__list_open');
});

/***/ }),

/***/ "./src/js/entry.js":
/*!*************************!*\
  !*** ./src/js/entry.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!*
 * ВНИМАНИЕ! Этот файл генерируется автоматически.
 * Любые изменения этого файла будут потеряны при следующей компиляции.
 * Любое изменение проекта без возможности компиляции ДОЛЬШЕ И ДОРОЖЕ в 2-5 раз.
 */

/* global require */
__webpack_require__(/*! ./script.js */ "./src/js/script.js");
/*!*
 * ВНИМАНИЕ! Этот файл генерируется автоматически.
 * Любые изменения этого файла будут потеряны при следующей компиляции.
 * Любое изменение проекта без возможности компиляции ДОЛЬШЕ И ДОРОЖЕ в 2-5 раз.
 */

/***/ }),

/***/ "./src/js/fetch.js":
/*!*************************!*\
  !*** ./src/js/fetch.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

var APIurl = "https://private-anon-c67320a3c6-lampshop.apiary-mock.com/lamps";
var productCardPic = document.querySelector('.product-card__pic');
var productSelectionPicsNodelist = document.querySelectorAll('.product-selection__product-pic');
var productSelectionProductsNodelist = document.querySelectorAll('.product-selection__product');
var productSelectionProducts = document.querySelector('.product-selection__products');
var roomDemoLamp = document.querySelector('.room-demo__lamp');
var roomDemoPic = document.querySelector('.room-demo__pic');
var featuresMaterial = document.querySelector('#material');
var featuresDimensions = document.querySelector('#dimensions');
var featuresWeight = document.querySelector('#weight');
var featuresElectrification = document.querySelector('#electrification');
var loaderNodeList = document.querySelectorAll('.loader');
var productSelectionModes = document.querySelector('.product-selection__modes');
window.addEventListener('DOMContentLoaded', fetchHandler());

function fetchHandler() {
  try {
    var response = fetch(APIurl);
    response.then(function (res) {
      return res.json();
    }).then(function (data) {
      hideLoader();
      setProductSelectionPics(data);
      setProductCardPic(data);
      togglePicMode(data);
    });
  } catch (error) {
    console.log(error);
  }
}

function setProductSelectionPics(data) {
  productSelectionPicsNodelist.forEach(function (el, i) {
    el.src = data[i].image;
    el.id = data[i].id;
    el.alt = data[i].name;
  });
}

function setProductCardPic(data) {
  productSelectionProducts.addEventListener('click', function (e) {
    productSelectionPicsNodelist.forEach(function (el) {
      el.classList.remove('product-selection__product-pic_active');
    });
    e.target.classList.add('product-selection__product-pic_active');
    var el = data[e.target.id - 1];
    roomDemoPic.src = "img/room-photo.png";

    if (e.target.id != "2") {
      roomDemoLamp.style.top = "-2%";
    } else {
      roomDemoLamp.style.top = "-16%";
    }

    productCardPic.src = el.image;
    productCardPic.alt = el.name;
    roomDemoLamp.src = el.image;
    roomDemoLamp.alt = el.name;
    roomDemoLamp.id = el.id;
    setFeaturesTextContent(el);
  });
}

function togglePicMode(data) {
  productSelectionModes.addEventListener('click', function (e) {
    var activeLampId = roomDemoLamp.id;

    if (e.target.classList.contains('product-selection__mode_night')) {
      if (data[activeLampId - 1].isDarkMode) {
        roomDemoPic.src = "img/room-demo__night.png";
      }
    } else if (e.target.classList.contains('product-selection__mode_day')) {
      roomDemoPic.src = "img/room-photo.png";
    }
  });
}

function setFeaturesTextContent(el) {
  featuresMaterial.textContent = el.material;
  featuresDimensions.textContent = "H ".concat(el.height, " X W ").concat(el.width, " X D 12");
  featuresWeight.textContent = "".concat(el.weight, " kg");
  featuresElectrification.textContent = el.electrification.replaceAll(',', ' |');
}

function hideLoader() {
  productSelectionPicsNodelist.forEach(function (el) {
    el.style.display = "block";
  });
  loaderNodeList.forEach(function (el) {
    el.style.display = "none";
  });
}

/***/ }),

/***/ "./src/js/mobile-product-selection.js":
/*!********************************************!*\
  !*** ./src/js/mobile-product-selection.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var roomDemoArrow = document.querySelector('.room-demo__mobile-arrow');
var productSelection = document.querySelector('.product-selection');
var roomDemo = document.querySelector('.room-demo');
var header = document.querySelector('.header');
var main = document.querySelector('.main');
roomDemoArrow.addEventListener('click', function () {
  productSelection.classList.toggle('product-selection_active');
  roomDemoArrow.classList.toggle('room-demo__mobile-arrow_active');
  setPosition();
  window.addEventListener('resize', function () {
    setPosition();
  });
});

function setPosition() {
  productSelection.style.top = "".concat(roomDemo.clientHeight, "px");
  productSelection.style.left = "".concat(main.clientWidth / 2 - productSelection.clientWidth / 2, "px");
}

/***/ }),

/***/ "./src/js/resize.js":
/*!**************************!*\
  !*** ./src/js/resize.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

var productSelection = document.querySelector('.product-selection');
var productCard = document.querySelector('.product-card');
var main = document.querySelector('.main');
var introText = document.querySelector('.intro-text');
var roomDemo = document.querySelector('.room-demo');
var productSelectionModes = document.querySelector('.product-selection__modes');
var productSelectionModeDay = document.querySelector('.product-selection__mode_day');
var productSelectionModeNight = document.querySelector('.product-selection__mode_night');
var productSelectionProducts = document.querySelector('.product-selection__products');
var roomDemoPic = document.querySelector('.room-demo__pic');
var roomDemoLamp = document.querySelector('.room-demo__lamp');
var k = 1.3;

function resizeProductSelection() {
  if (document.body.clientWidth / document.body.clientHeight <= k) {
    productSelection.classList.add('product-selection__horizontal');
    main.append(productSelection);
    productSelectionModes.classList.add('product-selection__modes_vertical');
    productSelectionModeDay.classList.add('product-selection__mode_vertical');
    productSelectionModeNight.classList.add('product-selection__mode_vertical');
    productSelectionProducts.classList.add('product-selection__products_horizontal');
  }
}

window.addEventListener('DOMContentLoaded', function () {
  resizeRoomDemoLamp();
  resizeProductSelection();
});
window.addEventListener('load', function () {
  resizeRoomDemoLamp();
  resizeProductSelection();
});
window.addEventListener('resize', function () {
  resizeRoomDemoLamp();

  if (document.body.clientWidth / document.body.clientHeight <= k) {
    resizeProductSelection();
  } else if (document.body.clientWidth / document.body.clientHeight >= k) {
    productSelection.classList.remove('product-selection__horizontal');
    productCard.append(productSelection);
    productSelectionModes.classList.remove('product-selection__modes_vertical');
    productSelectionModeDay.classList.remove('product-selection__mode_vertical');
    productSelectionModeNight.classList.remove('product-selection__mode_vertical');
    productSelectionProducts.classList.remove('product-selection__products_horizontal');
  }
});

function resizeRoomDemoLamp() {
  roomDemoLamp.style.left = roomDemoPic.clientWidth * 0.23 + 'px';
}

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resize */ "./src/js/resize.js");
/* harmony import */ var _resize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_resize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _burger_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./burger-menu */ "./src/js/burger-menu.js");
/* harmony import */ var _burger_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_burger_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mobile_product_selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mobile-product-selection */ "./src/js/mobile-product-selection.js");
/* harmony import */ var _mobile_product_selection__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mobile_product_selection__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fetch_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fetch.js */ "./src/js/fetch.js");
/* harmony import */ var _fetch_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fetch_js__WEBPACK_IMPORTED_MODULE_3__);





/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1cmdlci1tZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZmV0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vYmlsZS1wcm9kdWN0LXNlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcmVzaXplLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zY3JpcHQuanMiXSwibmFtZXMiOlsiYnVyZ2VySWNvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImRla3N0b3BNZW51IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInJlcXVpcmUiLCJBUEl1cmwiLCJwcm9kdWN0Q2FyZFBpYyIsInByb2R1Y3RTZWxlY3Rpb25QaWNzTm9kZWxpc3QiLCJxdWVyeVNlbGVjdG9yQWxsIiwicHJvZHVjdFNlbGVjdGlvblByb2R1Y3RzTm9kZWxpc3QiLCJwcm9kdWN0U2VsZWN0aW9uUHJvZHVjdHMiLCJyb29tRGVtb0xhbXAiLCJyb29tRGVtb1BpYyIsImZlYXR1cmVzTWF0ZXJpYWwiLCJmZWF0dXJlc0RpbWVuc2lvbnMiLCJmZWF0dXJlc1dlaWdodCIsImZlYXR1cmVzRWxlY3RyaWZpY2F0aW9uIiwibG9hZGVyTm9kZUxpc3QiLCJwcm9kdWN0U2VsZWN0aW9uTW9kZXMiLCJ3aW5kb3ciLCJmZXRjaEhhbmRsZXIiLCJyZXNwb25zZSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiaGlkZUxvYWRlciIsInNldFByb2R1Y3RTZWxlY3Rpb25QaWNzIiwic2V0UHJvZHVjdENhcmRQaWMiLCJ0b2dnbGVQaWNNb2RlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZm9yRWFjaCIsImVsIiwiaSIsInNyYyIsImltYWdlIiwiaWQiLCJhbHQiLCJuYW1lIiwiZSIsInJlbW92ZSIsInRhcmdldCIsImFkZCIsInN0eWxlIiwidG9wIiwic2V0RmVhdHVyZXNUZXh0Q29udGVudCIsImFjdGl2ZUxhbXBJZCIsImNvbnRhaW5zIiwiaXNEYXJrTW9kZSIsInRleHRDb250ZW50IiwibWF0ZXJpYWwiLCJoZWlnaHQiLCJ3aWR0aCIsIndlaWdodCIsImVsZWN0cmlmaWNhdGlvbiIsInJlcGxhY2VBbGwiLCJkaXNwbGF5Iiwicm9vbURlbW9BcnJvdyIsInByb2R1Y3RTZWxlY3Rpb24iLCJyb29tRGVtbyIsImhlYWRlciIsIm1haW4iLCJzZXRQb3NpdGlvbiIsImNsaWVudEhlaWdodCIsImxlZnQiLCJjbGllbnRXaWR0aCIsInByb2R1Y3RDYXJkIiwiaW50cm9UZXh0IiwicHJvZHVjdFNlbGVjdGlvbk1vZGVEYXkiLCJwcm9kdWN0U2VsZWN0aW9uTW9kZU5pZ2h0IiwiayIsInJlc2l6ZVByb2R1Y3RTZWxlY3Rpb24iLCJib2R5IiwiYXBwZW5kIiwicmVzaXplUm9vbURlbW9MYW1wIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFD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a0NBQXpDO0FBQ0E2Qiw2QkFBeUIsQ0FBQ3RFLFNBQTFCLENBQW9DeUMsTUFBcEMsQ0FBMkMsa0NBQTNDO0FBQ0FqQyw0QkFBd0IsQ0FBQ1IsU0FBekIsQ0FBbUN5QyxNQUFuQyxDQUEwQyx3Q0FBMUM7QUFDSDtBQUNKLENBYkQ7O0FBY0EsU0FBU2tDLGtCQUFULEdBQThCO0FBQzFCbEUsY0FBWSxDQUFDbUMsS0FBYixDQUFtQnFCLElBQW5CLEdBQTBCdkQsV0FBVyxDQUFDd0QsV0FBWixHQUEwQixJQUExQixHQUFpQyxJQUEzRDtBQUNILEM7Ozs7Ozs7Ozs7OztBQ2hERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvZW50cnkuanNcIik7XG4iLCJjb25zdCBidXJnZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fYnVyZ2VyLWljb24nKTtcclxuY29uc3QgZGVrc3RvcE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19saXN0Jyk7XHJcbmJ1cmdlckljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkZWtzdG9wTWVudS5jbGFzc0xpc3QudG9nZ2xlKCdoZWFkZXJfX2xpc3Rfb3BlbicpO1xyXG4gICAgYnVyZ2VySWNvbi5jbGFzc0xpc3QudG9nZ2xlKCdoZWFkZXJfX2xpc3Rfb3BlbicpO1xyXG59KTtcclxuXHJcbiIsIlxuLyohKlxuICog0JLQndCY0JzQkNCd0JjQlSEg0K3RgtC+0YIg0YTQsNC50Lsg0LPQtdC90LXRgNC40YDRg9C10YLRgdGPINCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC4LlxuICog0JvRjtCx0YvQtSDQuNC30LzQtdC90LXQvdC40Y8g0Y3RgtC+0LPQviDRhNCw0LnQu9CwINCx0YPQtNGD0YIg0L/QvtGC0LXRgNGP0L3RiyDQv9GA0Lgg0YHQu9C10LTRg9GO0YnQtdC5INC60L7QvNC/0LjQu9GP0YbQuNC4LlxuICog0JvRjtCx0L7QtSDQuNC30LzQtdC90LXQvdC40LUg0L/RgNC+0LXQutGC0LAg0LHQtdC3INCy0L7Qt9C80L7QttC90L7RgdGC0Lgg0LrQvtC80L/QuNC70Y/RhtC40Lgg0JTQntCb0KzQqNCVINCYINCU0J7QoNCe0JbQlSDQsiAyLTUg0YDQsNC3LlxuICovXG5cbi8qIGdsb2JhbCByZXF1aXJlICovXG5cbnJlcXVpcmUoJy4vc2NyaXB0LmpzJyk7XG5cbi8qISpcbiAqINCS0J3QmNCc0JDQndCY0JUhINCt0YLQvtGCINGE0LDQudC7INCz0LXQvdC10YDQuNGA0YPQtdGC0YHRjyDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuC5cbiAqINCb0Y7QsdGL0LUg0LjQt9C80LXQvdC10L3QuNGPINGN0YLQvtCz0L4g0YTQsNC50LvQsCDQsdGD0LTRg9GCINC/0L7RgtC10YDRj9C90Ysg0L/RgNC4INGB0LvQtdC00YPRjtGJ0LXQuSDQutC+0LzQv9C40LvRj9GG0LjQuC5cbiAqINCb0Y7QsdC+0LUg0LjQt9C80LXQvdC10L3QuNC1INC/0YDQvtC10LrRgtCwINCx0LXQtyDQstC+0LfQvNC+0LbQvdC+0YHRgtC4INC60L7QvNC/0LjQu9GP0YbQuNC4INCU0J7Qm9Cs0KjQlSDQmCDQlNCe0KDQntCW0JUg0LIgMi01INGA0LDQty5cbiAqL1xuXG4iLCJjb25zdCBBUEl1cmwgPSBcImh0dHBzOi8vcHJpdmF0ZS1hbm9uLWM2NzMyMGEzYzYtbGFtcHNob3AuYXBpYXJ5LW1vY2suY29tL2xhbXBzXCI7XHJcblxyXG5jb25zdCBwcm9kdWN0Q2FyZFBpYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWNhcmRfX3BpYycpO1xyXG5jb25zdCBwcm9kdWN0U2VsZWN0aW9uUGljc05vZGVsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3Qtc2VsZWN0aW9uX19wcm9kdWN0LXBpYycpO1xyXG5jb25zdCBwcm9kdWN0U2VsZWN0aW9uUHJvZHVjdHNOb2RlbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWN0LXNlbGVjdGlvbl9fcHJvZHVjdCcpO1xyXG5jb25zdCBwcm9kdWN0U2VsZWN0aW9uUHJvZHVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1zZWxlY3Rpb25fX3Byb2R1Y3RzJyk7XHJcbmNvbnN0IHJvb21EZW1vTGFtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb29tLWRlbW9fX2xhbXAnKTtcclxuY29uc3Qgcm9vbURlbW9QaWMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm9vbS1kZW1vX19waWMnKTtcclxuY29uc3QgZmVhdHVyZXNNYXRlcmlhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXRlcmlhbCcpO1xyXG5jb25zdCBmZWF0dXJlc0RpbWVuc2lvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGltZW5zaW9ucycpO1xyXG5jb25zdCBmZWF0dXJlc1dlaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWlnaHQnKTtcclxuY29uc3QgZmVhdHVyZXNFbGVjdHJpZmljYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWxlY3RyaWZpY2F0aW9uJyk7XHJcbmNvbnN0IGxvYWRlck5vZGVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxvYWRlcicpO1xyXG5jb25zdCBwcm9kdWN0U2VsZWN0aW9uTW9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1zZWxlY3Rpb25fX21vZGVzJyk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZldGNoSGFuZGxlcigpKTtcclxuXHJcbmZ1bmN0aW9uIGZldGNoSGFuZGxlcigpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBmZXRjaChBUEl1cmwpO1xyXG4gICAgICAgIHJlc3BvbnNlLlxyXG4gICAgICAgICAgICB0aGVuKHJlcyA9PiByZXMuanNvbigpKS5cclxuICAgICAgICAgICAgICAgIHRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZUxvYWRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFByb2R1Y3RTZWxlY3Rpb25QaWNzKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFByb2R1Y3RDYXJkUGljKGRhdGEpOyAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZVBpY01vZGUoZGF0YSk7ICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9KTsgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICBjYXRjaChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRQcm9kdWN0U2VsZWN0aW9uUGljcyhkYXRhKSB7XHJcbiAgICBwcm9kdWN0U2VsZWN0aW9uUGljc05vZGVsaXN0LmZvckVhY2goKGVsLCBpKSA9PiB7XHJcbiAgICAgICAgZWwuc3JjID0gZGF0YVtpXS5pbWFnZTtcclxuICAgICAgICBlbC5pZCA9IGRhdGFbaV0uaWQ7XHJcbiAgICAgICAgZWwuYWx0ID0gZGF0YVtpXS5uYW1lO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFByb2R1Y3RDYXJkUGljKGRhdGEpIHtcclxuICAgIHByb2R1Y3RTZWxlY3Rpb25Qcm9kdWN0cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgcHJvZHVjdFNlbGVjdGlvblBpY3NOb2RlbGlzdC5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdwcm9kdWN0LXNlbGVjdGlvbl9fcHJvZHVjdC1waWNfYWN0aXZlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgncHJvZHVjdC1zZWxlY3Rpb25fX3Byb2R1Y3QtcGljX2FjdGl2ZScpO1xyXG4gICAgICAgIGNvbnN0IGVsID0gZGF0YVtlLnRhcmdldC5pZC0xXTtcclxuICAgICAgICByb29tRGVtb1BpYy5zcmMgPSBcImltZy9yb29tLXBob3RvLnBuZ1wiO1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5pZCAhPSBcIjJcIikge1xyXG4gICAgICAgICAgICByb29tRGVtb0xhbXAuc3R5bGUudG9wID1cIi0yJVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlICB7XHJcbiAgICAgICAgICAgIHJvb21EZW1vTGFtcC5zdHlsZS50b3AgPVwiLTE2JVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm9kdWN0Q2FyZFBpYy5zcmMgPSBlbC5pbWFnZTtcclxuICAgICAgICBwcm9kdWN0Q2FyZFBpYy5hbHQgPSBlbC5uYW1lO1xyXG4gICAgICAgIHJvb21EZW1vTGFtcC5zcmMgPSBlbC5pbWFnZTtcclxuICAgICAgICByb29tRGVtb0xhbXAuYWx0ID0gZWwubmFtZTtcclxuICAgICAgICByb29tRGVtb0xhbXAuaWQgPSBlbC5pZDtcclxuICAgICAgICBzZXRGZWF0dXJlc1RleHRDb250ZW50KGVsKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVQaWNNb2RlKGRhdGEpIHtcclxuICAgIHByb2R1Y3RTZWxlY3Rpb25Nb2Rlcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgbGV0IGFjdGl2ZUxhbXBJZCA9IHJvb21EZW1vTGFtcC5pZDtcclxuICAgICAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2R1Y3Qtc2VsZWN0aW9uX19tb2RlX25pZ2h0JykpIHtcclxuICAgICAgICAgICAgaWYoZGF0YVthY3RpdmVMYW1wSWQtMV0uaXNEYXJrTW9kZSkge1xyXG4gICAgICAgICAgICAgICAgcm9vbURlbW9QaWMuc3JjID0gXCJpbWcvcm9vbS1kZW1vX19uaWdodC5wbmdcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncHJvZHVjdC1zZWxlY3Rpb25fX21vZGVfZGF5JykpIHtcclxuICAgICAgICAgICAgcm9vbURlbW9QaWMuc3JjID0gXCJpbWcvcm9vbS1waG90by5wbmdcIjtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0RmVhdHVyZXNUZXh0Q29udGVudChlbCkge1xyXG4gICAgZmVhdHVyZXNNYXRlcmlhbC50ZXh0Q29udGVudCA9IGVsLm1hdGVyaWFsO1xyXG4gICAgZmVhdHVyZXNEaW1lbnNpb25zLnRleHRDb250ZW50ID0gYEggJHtlbC5oZWlnaHR9IFggVyAke2VsLndpZHRofSBYIEQgMTJgXHJcbiAgICBmZWF0dXJlc1dlaWdodC50ZXh0Q29udGVudCA9IGAke2VsLndlaWdodH0ga2dgO1xyXG4gICAgZmVhdHVyZXNFbGVjdHJpZmljYXRpb24udGV4dENvbnRlbnQgPSBlbC5lbGVjdHJpZmljYXRpb24ucmVwbGFjZUFsbCgnLCcsICcgfCcpO1xyXG59XHJcbmZ1bmN0aW9uIGhpZGVMb2FkZXIoKSB7XHJcbiAgICBwcm9kdWN0U2VsZWN0aW9uUGljc05vZGVsaXN0LmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIH0pO1xyXG4gICAgbG9hZGVyTm9kZUxpc3QuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9KTtcclxufVxyXG5cclxuIiwiY29uc3Qgcm9vbURlbW9BcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb29tLWRlbW9fX21vYmlsZS1hcnJvdycpO1xyXG5jb25zdCBwcm9kdWN0U2VsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3Qtc2VsZWN0aW9uJyk7XHJcbmNvbnN0IHJvb21EZW1vID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvb20tZGVtbycpO1xyXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XHJcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xyXG5cclxuXHJcbnJvb21EZW1vQXJyb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBwcm9kdWN0U2VsZWN0aW9uLmNsYXNzTGlzdC50b2dnbGUoJ3Byb2R1Y3Qtc2VsZWN0aW9uX2FjdGl2ZScpO1xyXG4gICAgcm9vbURlbW9BcnJvdy5jbGFzc0xpc3QudG9nZ2xlKCdyb29tLWRlbW9fX21vYmlsZS1hcnJvd19hY3RpdmUnKTtcclxuICAgIHNldFBvc2l0aW9uKCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xyXG4gICAgICAgIHNldFBvc2l0aW9uKCk7XHJcbiAgICB9KVxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHNldFBvc2l0aW9uKCkge1xyXG4gICAgcHJvZHVjdFNlbGVjdGlvbi5zdHlsZS50b3AgPSBgJHtyb29tRGVtby5jbGllbnRIZWlnaHR9cHhgO1xyXG4gICAgcHJvZHVjdFNlbGVjdGlvbi5zdHlsZS5sZWZ0ID0gYCR7bWFpbi5jbGllbnRXaWR0aC8yIC0gcHJvZHVjdFNlbGVjdGlvbi5jbGllbnRXaWR0aC8yfXB4YDtcclxufVxyXG5cclxuIiwiY29uc3QgcHJvZHVjdFNlbGVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LXNlbGVjdGlvbicpO1xyXG5jb25zdCBwcm9kdWN0Q2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWNhcmQnKTtcclxuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XHJcbmNvbnN0IGludHJvVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnRyby10ZXh0Jyk7XHJcbmNvbnN0IHJvb21EZW1vID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvb20tZGVtbycpO1xyXG5jb25zdCBwcm9kdWN0U2VsZWN0aW9uTW9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1zZWxlY3Rpb25fX21vZGVzJyk7XHJcbmNvbnN0IHByb2R1Y3RTZWxlY3Rpb25Nb2RlRGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3Qtc2VsZWN0aW9uX19tb2RlX2RheScpO1xyXG5jb25zdCBwcm9kdWN0U2VsZWN0aW9uTW9kZU5pZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3Qtc2VsZWN0aW9uX19tb2RlX25pZ2h0Jyk7XHJcbmNvbnN0IHByb2R1Y3RTZWxlY3Rpb25Qcm9kdWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LXNlbGVjdGlvbl9fcHJvZHVjdHMnKTtcclxuY29uc3Qgcm9vbURlbW9QaWMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm9vbS1kZW1vX19waWMnKTtcclxuY29uc3Qgcm9vbURlbW9MYW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvb20tZGVtb19fbGFtcCcpO1xyXG5jb25zdCBrID0gMS4zO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHJlc2l6ZVByb2R1Y3RTZWxlY3Rpb24gKCkge1xyXG4gICAgaWYgKChkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIC8gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQgPD0gaykpIHtcclxuICAgICAgICBwcm9kdWN0U2VsZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3Byb2R1Y3Qtc2VsZWN0aW9uX19ob3Jpem9udGFsJyk7XHJcbiAgICAgICAgbWFpbi5hcHBlbmQocHJvZHVjdFNlbGVjdGlvbik7XHJcbiAgICAgICAgcHJvZHVjdFNlbGVjdGlvbk1vZGVzLmNsYXNzTGlzdC5hZGQoJ3Byb2R1Y3Qtc2VsZWN0aW9uX19tb2Rlc192ZXJ0aWNhbCcpO1xyXG4gICAgICAgIHByb2R1Y3RTZWxlY3Rpb25Nb2RlRGF5LmNsYXNzTGlzdC5hZGQoJ3Byb2R1Y3Qtc2VsZWN0aW9uX19tb2RlX3ZlcnRpY2FsJyk7XHJcbiAgICAgICAgcHJvZHVjdFNlbGVjdGlvbk1vZGVOaWdodC5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0LXNlbGVjdGlvbl9fbW9kZV92ZXJ0aWNhbCcpO1xyXG4gICAgICAgIHByb2R1Y3RTZWxlY3Rpb25Qcm9kdWN0cy5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0LXNlbGVjdGlvbl9fcHJvZHVjdHNfaG9yaXpvbnRhbCcpO1xyXG4gICAgfVxyXG59XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgcmVzaXplUm9vbURlbW9MYW1wKCk7XHJcbiAgICByZXNpemVQcm9kdWN0U2VsZWN0aW9uKCk7XHJcbn0pO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgIHJlc2l6ZVJvb21EZW1vTGFtcCgpO1xyXG4gICAgcmVzaXplUHJvZHVjdFNlbGVjdGlvbigpO1xyXG59KTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcclxuICAgIHJlc2l6ZVJvb21EZW1vTGFtcCgpO1xyXG4gICAgaWYgKGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggLyBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCA8PSBrKSB7XHJcbiAgICAgICAgcmVzaXplUHJvZHVjdFNlbGVjdGlvbigpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCAvIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0ID49IGspICB7XHJcbiAgICAgICAgcHJvZHVjdFNlbGVjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdwcm9kdWN0LXNlbGVjdGlvbl9faG9yaXpvbnRhbCcpO1xyXG4gICAgICAgIHByb2R1Y3RDYXJkLmFwcGVuZChwcm9kdWN0U2VsZWN0aW9uKTtcclxuICAgICAgICBwcm9kdWN0U2VsZWN0aW9uTW9kZXMuY2xhc3NMaXN0LnJlbW92ZSgncHJvZHVjdC1zZWxlY3Rpb25fX21vZGVzX3ZlcnRpY2FsJyk7XHJcbiAgICAgICAgcHJvZHVjdFNlbGVjdGlvbk1vZGVEYXkuY2xhc3NMaXN0LnJlbW92ZSgncHJvZHVjdC1zZWxlY3Rpb25fX21vZGVfdmVydGljYWwnKTtcclxuICAgICAgICBwcm9kdWN0U2VsZWN0aW9uTW9kZU5pZ2h0LmNsYXNzTGlzdC5yZW1vdmUoJ3Byb2R1Y3Qtc2VsZWN0aW9uX19tb2RlX3ZlcnRpY2FsJyk7XHJcbiAgICAgICAgcHJvZHVjdFNlbGVjdGlvblByb2R1Y3RzLmNsYXNzTGlzdC5yZW1vdmUoJ3Byb2R1Y3Qtc2VsZWN0aW9uX19wcm9kdWN0c19ob3Jpem9udGFsJyk7XHJcbiAgICB9XHJcbn0pXHJcbmZ1bmN0aW9uIHJlc2l6ZVJvb21EZW1vTGFtcCgpIHtcclxuICAgIHJvb21EZW1vTGFtcC5zdHlsZS5sZWZ0ID0gcm9vbURlbW9QaWMuY2xpZW50V2lkdGggKiAwLjIzICsgJ3B4JztcclxufVxyXG4iLCJpbXBvcnQgXCIuL3Jlc2l6ZVwiO1xyXG5pbXBvcnQgXCIuL2J1cmdlci1tZW51XCI7XHJcbmltcG9ydCBcIi4vbW9iaWxlLXByb2R1Y3Qtc2VsZWN0aW9uXCI7XHJcbmltcG9ydCBcIi4vZmV0Y2guanNcIjsiXSwic291cmNlUm9vdCI6IiJ9