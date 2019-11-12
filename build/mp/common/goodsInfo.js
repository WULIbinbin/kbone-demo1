module.exports = function(window, document) {const App = function(options) {window.appOptions = options};var navigator = window.navigator;var HTMLElement = window.HTMLElement;var localStorage = window.localStorage;var sessionStorage = window.sessionStorage;var location = window.location;window["createApp"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		3: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonpcreateApp"] = window["webpackJsonpcreateApp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([33,0,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 12:
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(6);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(1);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(2);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(3);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(4);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(5);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(10);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(12);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./src/components/tabs/index.scss
var tabs = __webpack_require__(21);

// CONCATENATED MODULE: ./src/components/tabs/index.js










var tabs_Tabs =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(Tabs, _React$Component);

  function Tabs() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Tabs);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Tabs)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      translateX: 0,
      current: 0,
      windowHeight: 0,
      windowWidth: 0
    });

    return _this;
  }

  createClass_default()(Tabs, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (true) {
        this.setState({
          windowHeight: wx.getSystemInfoSync().windowHeight,
          windowWidth: wx.getSystemInfoSync().windowWidth
        });
      }
    }
  }, {
    key: "handleTabbarTap",
    value: function handleTabbarTap(current, event) {
      var windowWidth = this.state.windowWidth;
      this.setState({
        current: current,
        translateX: windowWidth * current
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;
      var tabbar = [];
      children.length > 0 && children.map(function (val) {
        if (val.props && val.props.title) {
          tabbar.push(val.props.title);
        }
      });
      var _this$state = this.state,
          translateX = _this$state.translateX,
          current = _this$state.current,
          windowHeight = _this$state.windowHeight,
          windowWidth = _this$state.windowWidth;
      return react_default.a.createElement("div", {
        "class": 'tabs'
      }, react_default.a.createElement("div", {
        "class": 'tabs-bar'
      }, tabbar.length > 0 && tabbar.map(function (val, i) {
        return react_default.a.createElement("div", {
          "class": ['tabs-bar--item', current === i ? 'tabs-bar--oncheck' : ''],
          onClick: _this2.handleTabbarTap.bind(_this2, i)
        }, react_default.a.createElement("div", {
          "class": 'tabs-bar--item-text'
        }, val));
      })), react_default.a.createElement("div", {
        "class": 'tabs-container'
      }, react_default.a.createElement("div", {
        "class": 'tabs-scroll-view',
        style: {
          transform: "translateX(-".concat(translateX, "px)"),
          width: windowWidth * (children.length || 1)
        }
      }, children.length > 0 && children.map(function (val) {
        val.props['windowHeight'] = windowHeight;
        return val;
      }))));
    }
  }]);

  return Tabs;
}(react_default.a.Component);


// EXTERNAL MODULE: ./src/components/tabs/panel/index.scss
var panel = __webpack_require__(22);

// CONCATENATED MODULE: ./src/components/tabs/panel/index.js








var panel_Panel =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(Panel, _React$Component);

  function Panel() {
    classCallCheck_default()(this, Panel);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(Panel).apply(this, arguments));
  }

  createClass_default()(Panel, [{
    key: "render",
    value: function render() {
      console.log(this);
      var _this$props = this.props,
          children = _this$props.children,
          windowHeight = _this$props.windowHeight,
          windowWidth = _this$props.windowWidth;
      var height = windowHeight - 44;
      return react_default.a.createElement("div", {
        "class": 'panel',
        style: {
          height: height,
          width: windowWidth
        }
      }, react_default.a.createElement("wx-scroll-view", {
        "scroll-y": true,
        "class": 'panel-scroll-view',
        style: {
          height: height
        }
      }, children));
    }
  }]);

  return Panel;
}(react_default.a.Component);


// EXTERNAL MODULE: ./src/utils/indexData.js
var indexData = __webpack_require__(7);

// EXTERNAL MODULE: ./src/pages/goodsInfo/goodsInfo.scss
var goodsInfo_goodsInfo = __webpack_require__(23);

// CONCATENATED MODULE: ./src/pages/goodsInfo/goodsInfo.js











var goodsInfo_App =
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
      var goodsInfo = indexData["a" /* indexData */][0];
      console.log(goodsInfo);
      return react_default.a.createElement("div", {
        "class": 'goodsInfo'
      }, react_default.a.createElement(tabs_Tabs, null, react_default.a.createElement(panel_Panel, {
        title: "详情"
      }, "\u8BE6\u60C5..."), react_default.a.createElement(panel_Panel, {
        title: "评论"
      }, "\u8BC4\u8BBA...")));
    }
  }]);

  return App;
}(react_default.a.Component);

/* harmony default export */ var pages_goodsInfo_goodsInfo = (goodsInfo_App);
// CONCATENATED MODULE: ./src/pages/goodsInfo/goodsInfo.mp.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createApp; });



function createApp() {
  var container = document.createElement('div');
  container.id = 'app';
  document.body.appendChild(container);
  react_dom_default.a.render(react_default.a.createElement(pages_goodsInfo_goodsInfo, null), container);
}
"undefined" != typeof wx && wx.getSystemInfoSync || createApp();

/***/ })

/******/ })["default"];}