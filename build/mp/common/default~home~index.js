module.exports = function(window, document) {const App = function(options) {window.appOptions = options};var navigator = window.navigator;var HTMLElement = window.HTMLElement;var localStorage = window.localStorage;var sessionStorage = window.sessionStorage;var location = window.location;(window["webpackJsonpcreateApp"] = window["webpackJsonpcreateApp"] || []).push([[3],{

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(4);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(5);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(6);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(7);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(8);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(14);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./src/components/navigate/index.scss
var components_navigate = __webpack_require__(42);

// CONCATENATED MODULE: ./src/components/navigate/index.js




function navigate_navigate() {
  var _useState = Object(react["useState"])(0),
      _useState2 = slicedToArray_default()(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1];

  var items = [{}, {}, {}, {}, {}, {}, {}, {}];
  return react_default.a.createElement("div", {
    "class": 'navigate'
  }, items.map(function (val, i) {
    return react_default.a.createElement("div", {
      "class": 'item',
      key: i
    }, react_default.a.createElement("div", {
      "class": 'info'
    }));
  }));
}

/* harmony default export */ var src_components_navigate = (navigate_navigate);
// EXTERNAL MODULE: ./src/components/banner/index.scss
var banner = __webpack_require__(43);

// CONCATENATED MODULE: ./src/components/banner/index.js



function banner_banner(props) {
  var items = ['http://img.59iwh.com/rc/060ff530b1dc70909b219856a5325b77.jpg?t=20160914'];
  return react_default.a.createElement("div", {
    "class": 'banner'
  }, "undefined" != typeof wx && wx.getSystemInfoSync ? react_default.a.createElement("wx-swiper", null, react_default.a.createElement("wx-swiper-item", null, "\u8F6E\u64AD"), react_default.a.createElement("wx-swiper-item", null, "\u8F6E\u64AD")) //<wx-switch></wx-switch>
  : items.map(function (val, i) {
    return react_default.a.createElement("div", {
      "class": 'item',
      key: i
    }, react_default.a.createElement("img", {
      src: val,
      "class": 'info'
    }));
  }));
}

/* harmony default export */ var components_banner = (banner_banner);
// EXTERNAL MODULE: ./src/components/broadcast/index.scss
var broadcast = __webpack_require__(44);

// CONCATENATED MODULE: ./src/components/broadcast/index.js




function broadcast_broadcast() {
  var _useState = Object(react["useState"])(0),
      _useState2 = slicedToArray_default()(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1];

  var items = [{
    title: '这是个公告'
  }];
  return react_default.a.createElement("div", {
    "class": 'broadcast'
  }, items.map(function (val) {
    return react_default.a.createElement("div", {
      "class": 'item',
      key: val
    }, react_default.a.createElement("div", {
      "class": 'info'
    }, val.title));
  }));
}

/* harmony default export */ var components_broadcast = (broadcast_broadcast);
// EXTERNAL MODULE: ./src/components/goods/index.js
var goods = __webpack_require__(15);

// EXTERNAL MODULE: ./src/components/search/index.js
var search = __webpack_require__(16);

// EXTERNAL MODULE: ./src/utils/indexData.js
var indexData = __webpack_require__(17);

// CONCATENATED MODULE: ./src/pages/home/home.js













var home_App =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(App, _React$Component);

  function App() {
    classCallCheck_default()(this, App);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(App).apply(this, arguments));
  }

  createClass_default()(App, [{
    key: "render",
    value: function render() {
      return react_default.a.createElement("div", null, react_default.a.createElement(search["a" /* default */], null), react_default.a.createElement(components_banner, null), react_default.a.createElement(src_components_navigate, null), react_default.a.createElement(components_broadcast, null), react_default.a.createElement(goods["a" /* default */], {
        goodslist: indexData["a" /* indexData */]
      }));
    }
  }]);

  return App;
}(react_default.a.Component);

/* harmony default export */ var home = __webpack_exports__["default"] = (home_App);

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);}