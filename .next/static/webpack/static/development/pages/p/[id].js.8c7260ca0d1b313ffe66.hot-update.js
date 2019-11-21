webpackHotUpdate("static/development/pages/p/[id].js",{

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports["default"] = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = typeof process !== 'undefined' && process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  var _proto = StyleSheet.prototype;

  _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
    invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
    invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
    this.flush();
    this._optimizeForSpeed = bool;
    this.inject();
  };

  _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
    return this._optimizeForSpeed;
  };

  _proto.inject = function inject() {
    var _this = this;

    invariant(!this._injected, 'sheet already injected');
    this._injected = true;

    if (this._isBrowser && this._optimizeForSpeed) {
      this._tags[0] = this.makeStyleTag(this._name);
      this._optimizeForSpeed = 'insertRule' in this.getSheet();

      if (!this._optimizeForSpeed) {
        if (!isProd) {
          console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
        }

        this.flush();
        this._injected = true;
      }

      return;
    }

    this._serverSheet = {
      cssRules: [],
      insertRule: function insertRule(rule, index) {
        if (typeof index === 'number') {
          _this._serverSheet.cssRules[index] = {
            cssText: rule
          };
        } else {
          _this._serverSheet.cssRules.push({
            cssText: rule
          });
        }

        return index;
      },
      deleteRule: function deleteRule(index) {
        _this._serverSheet.cssRules[index] = null;
      }
    };
  };

  _proto.getSheetForTag = function getSheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    } // this weirdness brought to you by firefox


    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        return document.styleSheets[i];
      }
    }
  };

  _proto.getSheet = function getSheet() {
    return this.getSheetForTag(this._tags[this._tags.length - 1]);
  };

  _proto.insertRule = function insertRule(rule, index) {
    invariant(isString(rule), '`insertRule` accepts only strings');

    if (!this._isBrowser) {
      if (typeof index !== 'number') {
        index = this._serverSheet.cssRules.length;
      }

      this._serverSheet.insertRule(rule, index);

      return this._rulesCount++;
    }

    if (this._optimizeForSpeed) {
      var sheet = this.getSheet();

      if (typeof index !== 'number') {
        index = sheet.cssRules.length;
      } // this weirdness for perf, and chrome's weird bug
      // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        }

        return -1;
      }
    } else {
      var insertionPoint = this._tags[index];

      this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
    }

    return this._rulesCount++;
  };

  _proto.replaceRule = function replaceRule(index, rule) {
    if (this._optimizeForSpeed || !this._isBrowser) {
      var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

      if (!rule.trim()) {
        rule = this._deletedRulePlaceholder;
      }

      if (!sheet.cssRules[index]) {
        // @TBD Should we throw an error?
        return index;
      }

      sheet.deleteRule(index);

      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        } // In order to preserve the indices we insert a deleteRulePlaceholder


        sheet.insertRule(this._deletedRulePlaceholder, index);
      }
    } else {
      var tag = this._tags[index];
      invariant(tag, "old rule at index `" + index + "` not found");
      tag.textContent = rule;
    }

    return index;
  };

  _proto.deleteRule = function deleteRule(index) {
    if (!this._isBrowser) {
      this._serverSheet.deleteRule(index);

      return;
    }

    if (this._optimizeForSpeed) {
      this.replaceRule(index, '');
    } else {
      var tag = this._tags[index];
      invariant(tag, "rule at index `" + index + "` not found");
      tag.parentNode.removeChild(tag);
      this._tags[index] = null;
    }
  };

  _proto.flush = function flush() {
    this._injected = false;
    this._rulesCount = 0;

    if (this._isBrowser) {
      this._tags.forEach(function (tag) {
        return tag && tag.parentNode.removeChild(tag);
      });

      this._tags = [];
    } else {
      // simpler on server
      this._serverSheet.cssRules = [];
    }
  };

  _proto.cssRules = function cssRules() {
    var _this2 = this;

    if (!this._isBrowser) {
      return this._serverSheet.cssRules;
    }

    return this._tags.reduce(function (rules, tag) {
      if (tag) {
        rules = rules.concat(Array.prototype.map.call(_this2.getSheetForTag(tag).cssRules, function (rule) {
          return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
        }));
      } else {
        rules.push(null);
      }

      return rules;
    }, []);
  };

  _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
    if (cssString) {
      invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
    }

    var tag = document.createElement('style');
    if (this._nonce) tag.setAttribute('nonce', this._nonce);
    tag.type = 'text/css';
    tag.setAttribute("data-" + name, '');

    if (cssString) {
      tag.appendChild(document.createTextNode(cssString));
    }

    var head = document.head || document.getElementsByTagName('head')[0];

    if (relativeToTag) {
      head.insertBefore(tag, relativeToTag);
    } else {
      head.appendChild(tag);
    }

    return tag;
  };

  _createClass(StyleSheet, [{
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports["default"] = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: " + message + ".");
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.flush = flush;
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var styleSheetRegistry = new _stylesheetRegistry["default"]();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.prevProps = {};
    return _this;
  }

  JSXStyle.dynamic = function dynamic(info) {
    return info.map(function (tagInfo) {
      var baseId = tagInfo[0];
      var props = tagInfo[1];
      return styleSheetRegistry.computeId(baseId, props);
    }).join(' ');
  } // probably faster than PureComponent (shallowEqual)
  ;

  var _proto = JSXStyle.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(otherProps) {
    return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
    // These are the computed values for dynamic styles.
    String(this.props.dynamic) !== String(otherProps.dynamic);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    styleSheetRegistry.remove(this.props);
  };

  _proto.render = function render() {
    // This is a workaround to make the side effect async safe in the "render" phase.
    // See https://github.com/zeit/styled-jsx/pull/484
    if (this.shouldComponentUpdate(this.prevProps)) {
      // Updates
      if (this.prevProps.id) {
        styleSheetRegistry.remove(this.prevProps);
      }

      styleSheetRegistry.add(this.props);
      this.prevProps = this.props;
    }

    return null;
  };

  return JSXStyle;
}(_react.Component);

exports["default"] = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    this._sheet = styleSheet || new _stylesheet["default"]({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  var _proto = StyleSheetRegistry.prototype;

  _proto.add = function add(props) {
    var _this = this;

    if (undefined === this._optimizeForSpeed) {
      this._optimizeForSpeed = Array.isArray(props.children);

      this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    if (this._isBrowser && !this._fromServer) {
      this._fromServer = this.selectFromServer();
      this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
        acc[tagName] = 0;
        return acc;
      }, {});
    }

    var _this$getIdAndRules = this.getIdAndRules(props),
        styleId = _this$getIdAndRules.styleId,
        rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


    if (styleId in this._instancesCounts) {
      this._instancesCounts[styleId] += 1;
      return;
    }

    var indices = rules.map(function (rule) {
      return _this._sheet.insertRule(rule);
    }) // Filter out invalid rules
    .filter(function (index) {
      return index !== -1;
    });
    this._indices[styleId] = indices;
    this._instancesCounts[styleId] = 1;
  };

  _proto.remove = function remove(props) {
    var _this2 = this;

    var _this$getIdAndRules2 = this.getIdAndRules(props),
        styleId = _this$getIdAndRules2.styleId;

    invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
    this._instancesCounts[styleId] -= 1;

    if (this._instancesCounts[styleId] < 1) {
      var tagFromServer = this._fromServer && this._fromServer[styleId];

      if (tagFromServer) {
        tagFromServer.parentNode.removeChild(tagFromServer);
        delete this._fromServer[styleId];
      } else {
        this._indices[styleId].forEach(function (index) {
          return _this2._sheet.deleteRule(index);
        });

        delete this._indices[styleId];
      }

      delete this._instancesCounts[styleId];
    }
  };

  _proto.update = function update(props, nextProps) {
    this.add(nextProps);
    this.remove(props);
  };

  _proto.flush = function flush() {
    this._sheet.flush();

    this._sheet.inject();

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  };

  _proto.cssRules = function cssRules() {
    var _this3 = this;

    var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
      return [styleId, _this3._fromServer[styleId]];
    }) : [];

    var cssRules = this._sheet.cssRules();

    return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
      return [styleId, _this3._indices[styleId].map(function (index) {
        return cssRules[index].cssText;
      }).join(_this3._optimizeForSpeed ? '' : '\n')];
    }) // filter out empty rules
    .filter(function (rule) {
      return Boolean(rule[1]);
    }));
  }
  /**
   * createComputeId
   *
   * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
   */
  ;

  _proto.createComputeId = function createComputeId() {
    var cache = {};
    return function (baseId, props) {
      if (!props) {
        return "jsx-" + baseId;
      }

      var propsToString = String(props);
      var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

      if (!cache[key]) {
        cache[key] = "jsx-" + (0, _stringHash["default"])(baseId + "-" + propsToString);
      }

      return cache[key];
    };
  }
  /**
   * createComputeSelector
   *
   * Creates a function to compute and memoize dynamic selectors.
   */
  ;

  _proto.createComputeSelector = function createComputeSelector(selectoPlaceholderRegexp) {
    if (selectoPlaceholderRegexp === void 0) {
      selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    }

    var cache = {};
    return function (id, css) {
      // Sanitize SSR-ed CSS.
      // Client side code doesn't need to be sanitized since we use
      // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
      if (!this._isBrowser) {
        css = sanitize(css);
      }

      var idcss = id + css;

      if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
      }

      return cache[idcss];
    };
  };

  _proto.getIdAndRules = function getIdAndRules(props) {
    var _this4 = this;

    var css = props.children,
        dynamic = props.dynamic,
        id = props.id;

    if (dynamic) {
      var styleId = this.computeId(id, dynamic);
      return {
        styleId: styleId,
        rules: Array.isArray(css) ? css.map(function (rule) {
          return _this4.computeSelector(styleId, rule);
        }) : [this.computeSelector(styleId, css)]
      };
    }

    return {
      styleId: this.computeId(id),
      rules: Array.isArray(css) ? css : [css]
    };
  }
  /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */
  ;

  _proto.selectFromServer = function selectFromServer() {
    var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
    return elements.reduce(function (acc, element) {
      var id = element.id.slice(2);
      acc[id] = element;
      return acc;
    }, {});
  };

  return StyleSheetRegistry;
}();

exports["default"] = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: " + message + ".");
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/p/[id].js":
/*!*************************!*\
  !*** ./pages/p/[id].js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/home/nkosi/Documents/Programming/heroes/pages/p/[id].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;



var Post = function Post(props) {
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, props.characters.name), __jsx("img", {
    src: props.characters.images.lg,
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), __jsx("h3", {
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Power Stats"), __jsx("ul", {
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Intelligence : ", props.characters.powerstats.intelligence), __jsx("li", {
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, " Strength : ", props.characters.powerstats.strength), __jsx("li", {
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Speed : ", props.characters.powerstats.speed), __jsx("li", {
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Power : ", props.characters.powerstats.power)), __jsx("h3", {
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Biography"), __jsx("ul", {
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Name : ", props.characters.biography.fullName), __jsx("li", {
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Alter Egos: ", props.characters.biography.alterEgos), __jsx("li", {
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Publisher :", props.characters.biography.publisher), __jsx("li", {
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Good or Bad: ", props.characters.biography.alignment)), "HTML CSSResult", __jsx("div", {
    "class": "container",
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("h1", {
    "class": "title",
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "User Profile Cards"), __jsx("div", {
    "class": "row cf",
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("div", {
    id: "card1",
    "class": "card four col",
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    "class": "image-wrapper",
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx("h3", {
    "class": "name",
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Amy Smith"), __jsx("div", {
    "class": "info cf",
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("div", {
    "class": "four col",
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("span", {
    "class": "number",
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "100"), "Posts"), __jsx("div", {
    "class": "four col",
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("span", {
    "class": "number",
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "28"), "Tasks"), __jsx("div", {
    "class": "four col",
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("span", {
    "class": "number",
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "179"), "Likes")), __jsx("div", {
    "class": "options",
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("span", {
    "class": "icon",
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("i", {
    "class": "fa fa-plus",
    "aria-hidden": "true",
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })), "Add to team"), __jsx("li", {
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("span", {
    "class": "icon",
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("i", {
    "class": "fa fa-envelope",
    "aria-hidden": "true",
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })), "Send a message")))), __jsx("div", {
    id: "card2",
    "class": "card four col",
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("div", {
    "class": "header",
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx("div", {
    "class": "wrapper",
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("div", {
    "class": "image-wrapper",
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx("h3", {
    "class": "name",
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Jack Smith"), __jsx("div", {
    "class": "social cf",
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("div", {
    "class": "four col",
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("i", {
    "class": "fa fa-facebook",
    "aria-hidden": "true",
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }))), __jsx("div", {
    "class": "four col",
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("i", {
    "class": "fa fa-twitter",
    "aria-hidden": "true",
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }))), __jsx("div", {
    "class": "four col",
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("i", {
    "class": "fa fa-linkedin",
    "aria-hidden": "true",
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  })))), __jsx("div", {
    "class": "info",
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem aspernatur, mollitia suscipit perspiciatis minima reprehenderit quasi consectetur.")))), __jsx("div", {
    id: "card3",
    "class": "card four col",
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx("div", {
    "class": "header",
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), __jsx("div", {
    "class": "wrapper",
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("h2", {
    "class": "name",
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "John Smith")), __jsx("div", {
    "class": "info cf",
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("div", {
    "class": "four col",
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx("div", {
    "class": "number",
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "17")), __jsx("div", {
    "class": "four col",
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("div", {
    "class": "number",
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "239")), __jsx("div", {
    "class": "four col",
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("div", {
    "class": "number",
    className: "jsx-3949084658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "8")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3949084658",
    __self: this
  }, "html.jsx-3949084658,body.jsx-3949084658{width:100%;height:100%;margin:0;padding:0;background-color:#ddd;font-family:'Arimo',sans-serif;}.title.jsx-3949084658{text-align:center;color:#2c3e50;}.container.jsx-3949084658{max-width:940px;width:100%;margin:0 auto;}.twelve.jsx-3949084658{width:100%;}.eleven.jsx-3949084658{width:91.53%;}.ten.jsx-3949084658{width:83.06%;}.nine.jsx-3949084658{width:74.6%;}.eight.jsx-3949084658{width:66.13%;}.seven.jsx-3949084658{width:57.66%;}.six.jsx-3949084658{width:49.2%;}.five.jsx-3949084658{width:40.73%;}.four.jsx-3949084658{width:32.26%;}.three.jsx-3949084658{width:23.8%;}.two.jsx-3949084658{width:15.33%;}.one.jsx-3949084658{width:6.866%;}.col.jsx-3949084658{display:block;float:left;margin:1% 0 1% 1.6%;}.col.jsx-3949084658:first-of-type{margin-left:0;}.cf.jsx-3949084658:before,.cf.jsx-3949084658:after{content:\" \";display:table;}.cf.jsx-3949084658:after{clear:both;}.cf.jsx-3949084658{*zoom:1;}.card.jsx-3949084658{max-width:100%;height:400px;background-color:#fff;font-family:'Arimo',sans-serif;font-size:14px;}#card1.jsx-3949084658{text-align:center;color:#2c3e50;padding:15px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;}#card1.jsx-3949084658 .image-wrapper.jsx-3949084658{width:100px;height:100px;margin:20px auto;border-radius:100%;background-image:url(\"https://static.pexels.com/photos/7096/people-woman-coffee-meeting.jpg\");background-size:cover;background-repeat:no-repeat;}#card1.jsx-3949084658 .info.jsx-3949084658 .four.jsx-3949084658{text-align:center;border-right:1px solid #2c3e50;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;}#card1.jsx-3949084658 .info.jsx-3949084658 .four.jsx-3949084658:last-of-type{border-right:none;}#card1.jsx-3949084658 .info.jsx-3949084658 .four.jsx-3949084658 .number.jsx-3949084658{display:block;font-size:20px;padding:3px 0;font-weight:700;}#card1.jsx-3949084658 .options.jsx-3949084658{margin-top:30px;text-align:left;}#card1.jsx-3949084658 .options.jsx-3949084658 ul.jsx-3949084658{list-style-type:none;padding:0;margin:0;}#card1.jsx-3949084658 .options.jsx-3949084658 ul.jsx-3949084658 .icon.jsx-3949084658{display:inline-block;width:30px;height:30px;background-color:#3498db;border-radius:100%;margin-right:8px;vertical-align:middle;color:#fff;line-height:30px;text-align:center;}#card1.jsx-3949084658 .options.jsx-3949084658 ul.jsx-3949084658 li.jsx-3949084658{margin:12px 0;}#card2.jsx-3949084658{overflow:hidden;color:#2c3e50;}#card2.jsx-3949084658 a.jsx-3949084658{color:#2c3e50;}#card2.jsx-3949084658 .wrapper.jsx-3949084658{padding:10px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;}#card2.jsx-3949084658 .header.jsx-3949084658{width:100%;height:100px;position:relative;background-color:#3498db;}#card2.jsx-3949084658 .header.jsx-3949084658:after{content:'';background:inherit;bottom:0;display:block;height:inherit;position:absolute;left:0;right:0;-webkit-transform:skewY(-8deg);-ms-transform:skewY(-8deg);transform:skewY(-8deg);-webkit-transform:skewY(-8deg);-webkit-transform-origin:100%;-ms-transform-origin:100%;transform-origin:100%;}#card2.jsx-3949084658 .image-wrapper.jsx-3949084658{width:100px;height:100px;border-radius:100%;background-image:url(\"https://static.pexels.com/photos/7097/people-coffee-tea-meeting.jpg\");background-size:cover;background-repeat:no-repeat;position:absolute;z-index:5;top:130px;left:50%;margin-left:-50px;}#card2.jsx-3949084658 .name.jsx-3949084658{margin-top:70px;text-align:center;}#card2.jsx-3949084658 .social.jsx-3949084658 .four.jsx-3949084658{text-align:center;}#card2.jsx-3949084658 .info.jsx-3949084658{margin:30px 0;text-align:center;}#card3.jsx-3949084658{color:#2c3e50;}#card3.jsx-3949084658 .header.jsx-3949084658{width:100%;height:180px;background-image:url(\"https://static.pexels.com/photos/9692/pexels-photo.jpeg\");background-size:cover;background-repeat:no-repeat;}#card3.jsx-3949084658 .wrapper.jsx-3949084658{padding:0px 15px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;}#card3.jsx-3949084658 .name.jsx-3949084658{font-weight:400;}#card3.jsx-3949084658 .info.jsx-3949084658{margin:20px 0;text-align:center;}#card3.jsx-3949084658 .info.jsx-3949084658 .number.jsx-3949084658{background-color:#3498db;color:#fff;border-radius:100%;width:70px;height:70px;line-height:70px;text-align:center;margin:0 auto;font-size:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25rb3NpL0RvY3VtZW50cy9Qcm9ncmFtbWluZy9oZXJvZXMvcGFnZXMvcC9baWRdLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlGWSxBQUdnQixBQVNLLEFBTU8sQUFDUCxBQUNFLEFBQ0gsQUFDQSxBQUNFLEFBQ0EsQUFDSCxBQUNFLEFBQ0EsQUFDQSxBQUNELEFBQ0QsQUFLQSxBQUtnQixBQUtsQixBQUtELEFBSUgsQUFNTyxBQVVHLEFBU04sQUFVTSxBQVFBLEFBSUosQUFPRSxBQUtLLEFBTUEsQUFhUCxBQU1FLEFBS0YsQUFJRCxBQU9GLEFBT0EsQUFjQyxBQWNJLEFBS0UsQUFJSixBQU9BLEFBSUgsQUFRTSxBQU9ELEFBSUYsQUFLVyxRQWxMNUIsR0FuRGUsQUFlSyxBQWdDckIsQUF3R2lCLEFBT00sQUFnRE4sQ0E1TEcsQUFHRCxBQUdFLEFBa0JILEFBa0NELEFBZ0dBLENBNUpNLEFBQ0gsQUFFRSxBQUNBLEFBRUQsQUFDQSxBQUVELEFBQ0QsQUFzSGUsQ0FoSHBCLEFBSXFCLEFBOERoQixBQStCbkIsQUFXQSxBQXVEc0IsQUFPdEIsQUF1QnNCLENBeEtMLENBM0NzQixBQTJGbkIsQUE4QkYsQUFtREksQUFtQ3RCLENBUGtDLENBN01sQixBQTBERSxBQW1CaUIsQUFRbkMsQUFpR0EsR0FqRmMsQUFNQyxFQW5IRixDQXVKUyxBQXVEOEQsQ0E5SzVELEFBNENILEFBZ0dFLEFBeURSLENBM0xkLENBN0JxRCxDQTRDNUIsQ0F5Q1IsQ0FxQ2xCLEFBdUJhLENBaERBLENBN0dDLEFBUWQsQUEwRGlCLEFBc0NqQixBQVdnQixBQStFaEIsQUE4QkEsRUF2Q0EsRUE0Q3VCLEdBdkVMLENBaERsQixDQWxHdUQsQ0FYN0IsQUEyRUgsQUEyRU0sQ0FyRFQsQUE2Q1csQ0EzQkYsQUF3RG1FLENBNUloRyxBQW1Da0MsRUFrSkgsRUFoSUcsQ0E1QkUsR0FzR2pCLEVBdUVKLElBbklmLEVBdEJrRyxHQTNFaEUsRUFxT2xCLENBL0VoQixDQVFzQixDQTNDQyxDQTJCRyxJQXNFQSxDQWxKSyxHQW9LVixDQWxKVSxFQTVCWixLQXVHUixFQTNDVSxJQTJCckIsQ0FpQlksRUEvSlosQUFzT3NCLENBOUt0QixBQTRKQSxLQXBEMkIsQ0E5RkQsRUF5SUEsQ0F2RkEsQ0FoQ0EsT0FtSlIsV0FwS2xCLEVBeUlnQyxDQXZGakIsQUFtSEksQ0FuSm5CLFFBcUYwQixFQXBETCxJQW1IckIsWUE1QkEsQ0FsSTBCLEFBNENKLEdBb0RVLGVBbkRoQyxJQTVDZ0MsS0FxRkcsSUFXYixrQkFDUixDQWhHZCxRQXFGMEIsQ0FZWixVQUNELFNBQ1Msa0JBQ3RCLHdDQWRBIiwiZmlsZSI6Ii9ob21lL25rb3NpL0RvY3VtZW50cy9Qcm9ncmFtbWluZy9oZXJvZXMvcGFnZXMvcC9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL015TGF5b3V0JztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuXG5jb25zdCBQb3N0ID0gcHJvcHMgPT4gKFxuIFxuICA8TGF5b3V0PlxuXG4gICAgPGgxPntwcm9wcy5jaGFyYWN0ZXJzLm5hbWV9PC9oMT5cbiAgICB7LyogPHA+e3Byb3BzLmNoYXJhY3RlcnMuc3VtbWFyeS5yZXBsYWNlKC88Wy9dP1twYl0+L2csICcnKX08L3A+ICovfVxuXG4gICAgPGltZyBzcmM9e3Byb3BzLmNoYXJhY3RlcnMuaW1hZ2VzLmxnfSAvPlxuICAgIDxoMz5Qb3dlciBTdGF0czwvaDM+XG4gICAgPHVsPlxuICAgICAgICA8bGk+SW50ZWxsaWdlbmNlIDoge3Byb3BzLmNoYXJhY3RlcnMucG93ZXJzdGF0cy5pbnRlbGxpZ2VuY2V9PC9saT5cbiAgICAgICAgPGxpPiBTdHJlbmd0aCA6IHtwcm9wcy5jaGFyYWN0ZXJzLnBvd2Vyc3RhdHMuc3RyZW5ndGh9PC9saT5cbiAgICAgICAgPGxpPlNwZWVkIDoge3Byb3BzLmNoYXJhY3RlcnMucG93ZXJzdGF0cy5zcGVlZH08L2xpPlxuICAgICAgICA8bGk+UG93ZXIgOiB7cHJvcHMuY2hhcmFjdGVycy5wb3dlcnN0YXRzLnBvd2VyfTwvbGk+XG4gICAgPC91bD5cblxuICAgIDxoMz5CaW9ncmFwaHk8L2gzPlxuICAgIDx1bD5cbiAgICAgICAgPGxpPk5hbWUgOiB7cHJvcHMuY2hhcmFjdGVycy5iaW9ncmFwaHkuZnVsbE5hbWV9PC9saT5cbiAgICAgICAgPGxpPkFsdGVyIEVnb3M6IHtwcm9wcy5jaGFyYWN0ZXJzLmJpb2dyYXBoeS5hbHRlckVnb3N9PC9saT5cbiAgICAgICAgPGxpPlB1Ymxpc2hlciA6e3Byb3BzLmNoYXJhY3RlcnMuYmlvZ3JhcGh5LnB1Ymxpc2hlcn08L2xpPlxuICAgICAgICA8bGk+R29vZCBvciBCYWQ6IHtwcm9wcy5jaGFyYWN0ZXJzLmJpb2dyYXBoeS5hbGlnbm1lbnR9PC9saT5cbiAgICA8L3VsPlxuXG4gICAgSFRNTCBDU1NSZXN1bHRcbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgPGgxIGNsYXNzPVwidGl0bGVcIj5Vc2VyIFByb2ZpbGUgQ2FyZHM8L2gxPlxuICA8ZGl2IGNsYXNzPVwicm93IGNmXCI+XG4gICAgPGRpdiBpZD1cImNhcmQxXCIgY2xhc3M9XCJjYXJkIGZvdXIgY29sXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2Utd3JhcHBlclwiPjwvZGl2PlxuICAgICAgPGgzIGNsYXNzPVwibmFtZVwiPkFteSBTbWl0aDwvaDM+XG4gICAgICA8ZGl2IGNsYXNzPVwiaW5mbyBjZlwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm91ciBjb2xcIj48c3BhbiBjbGFzcz1cIm51bWJlclwiPjEwMDwvc3Bhbj5Qb3N0czwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm91ciBjb2xcIj48c3BhbiBjbGFzcz1cIm51bWJlclwiPjI4PC9zcGFuPlRhc2tzPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3VyIGNvbFwiPjxzcGFuIGNsYXNzPVwibnVtYmVyXCI+MTc5PC9zcGFuPkxpa2VzPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJvcHRpb25zXCI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+PHNwYW4gY2xhc3M9XCJpY29uXCI+PGkgY2xhc3M9XCJmYSBmYS1wbHVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvc3Bhbj5BZGQgdG8gdGVhbTwvbGk+XG4gICAgICAgICAgPGxpPjxzcGFuIGNsYXNzPVwiaWNvblwiPjxpIGNsYXNzPVwiZmEgZmEtZW52ZWxvcGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9zcGFuPlNlbmQgYSBtZXNzYWdlPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBpZD1cImNhcmQyXCIgY2xhc3M9XCJjYXJkIGZvdXIgY29sXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwid3JhcHBlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2Utd3JhcHBlclwiPjwvZGl2PlxuICAgICAgICA8aDMgY2xhc3M9XCJuYW1lXCI+SmFjayBTbWl0aDwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzb2NpYWwgY2ZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm91ciBjb2xcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PGkgY2xhc3M9XCJmYSBmYS1mYWNlYm9va1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvdXIgY29sXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPjxpIGNsYXNzPVwiZmEgZmEtdHdpdHRlclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvdXIgY29sXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPjxpIGNsYXNzPVwiZmEgZmEtbGlua2VkaW5cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImluZm9cIj5cbiAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gVm9sdXB0YXRlbSBhc3Blcm5hdHVyLCBtb2xsaXRpYSBzdXNjaXBpdCBwZXJzcGljaWF0aXMgbWluaW1hIHJlcHJlaGVuZGVyaXQgcXVhc2kgY29uc2VjdGV0dXIuPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBpZD1cImNhcmQzXCIgY2xhc3M9XCJjYXJkIGZvdXIgY29sXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwid3JhcHBlclwiPlxuICAgICAgICA8aDIgY2xhc3M9XCJuYW1lXCI+Sm9obiBTbWl0aDwvaDI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbmZvIGNmXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3VyIGNvbFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJudW1iZXJcIj4xNzwvZGl2PlxuICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3VyIGNvbFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJudW1iZXJcIj4yMzk8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3VyIGNvbFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJudW1iZXJcIj44PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG48c3R5bGUganN4PntgXG5odG1sLCBib2R5e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICBmb250LWZhbWlseTogJ0FyaW1vJywgc2Fucy1zZXJpZjtcbn1cblxuLnRpdGxle1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMmMzZTUwO1xufVxuXG4vKiBDT05UQUlORVJTICovIFxuXG4uY29udGFpbmVyIHttYXgtd2lkdGg6IDk0MHB4OyB3aWR0aDogMTAwJTsgbWFyZ2luOiAwIGF1dG87IH0gXG4udHdlbHZlIHsgd2lkdGg6IDEwMCU7IH0gXG4uZWxldmVuIHsgd2lkdGg6IDkxLjUzJTsgfSBcbi50ZW4geyB3aWR0aDogODMuMDYlOyB9IFxuLm5pbmUgeyB3aWR0aDogNzQuNiU7IH0gXG4uZWlnaHQgeyB3aWR0aDogNjYuMTMlOyB9IFxuLnNldmVuIHsgd2lkdGg6IDU3LjY2JTsgfSBcbi5zaXggeyB3aWR0aDogNDkuMiU7IH0gXG4uZml2ZSB7IHdpZHRoOiA0MC43MyU7IH0gXG4uZm91ciB7IHdpZHRoOiAzMi4yNiU7fSBcbi50aHJlZSB7IHdpZHRoOiAyMy44JTsgfSBcbi50d28geyB3aWR0aDogMTUuMzMlOyB9IFxuLm9uZXsgd2lkdGg6IDYuODY2JTt9XG5cbiAvKiBDT0xVTU5TICovIFxuXG4uY29sIHsgXG4gICAgZGlzcGxheTogYmxvY2s7IFxuICAgIGZsb2F0OmxlZnQ7XG4gICAgbWFyZ2luOiAxJSAwIDElIDEuNiU7IFxufSBcblxuLmNvbDpmaXJzdC1vZi10eXBlIHsgbWFyZ2luLWxlZnQ6IDA7IH1cblxuIC8qIENMRUFSRklYICovIFxuXG4gLmNmOmJlZm9yZSwgLmNmOmFmdGVyIHsgXG4gICAgY29udGVudDogXCIgXCI7IFxuICAgIGRpc3BsYXk6IHRhYmxlOyBcbiB9IFxuIFxuIC5jZjphZnRlciB7XG4gICAgY2xlYXI6IGJvdGg7IFxufSBcbiBcbiAuY2YgeyBcbiAgICAqem9vbTogMTsgXG4gfVxuXG4vKiBQUk9GSUxFUyAqL1xuXG4uY2FyZHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGZvbnQtZmFtaWx5OiAnQXJpbW8nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLyogQ0FSRCAhICovXG5cbiNjYXJkMXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICMyYzNlNTA7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbiNjYXJkMSAuaW1hZ2Utd3JhcHBlcntcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vc3RhdGljLnBleGVscy5jb20vcGhvdG9zLzcwOTYvcGVvcGxlLXdvbWFuLWNvZmZlZS1tZWV0aW5nLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbiNjYXJkMSAuaW5mbyAuZm91cntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzJjM2U1MDtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbiNjYXJkMSAuaW5mbyAuZm91cjpsYXN0LW9mLXR5cGV7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG4jY2FyZDEgLmluZm8gLmZvdXIgLm51bWJlcntcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZzogM3B4IDA7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuI2NhcmQxIC5vcHRpb25ze1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuI2NhcmQxIC5vcHRpb25zIHVse1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbn1cblxuI2NhcmQxIC5vcHRpb25zIHVsIC5pY29ue1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0OThkYjtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jY2FyZDEgLm9wdGlvbnMgdWwgbGl7XG4gICAgbWFyZ2luOiAxMnB4IDA7XG59XG5cbi8qIENBUkQgMiAqL1xuXG4jY2FyZDJ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBjb2xvcjogIzJjM2U1MDtcbn1cblxuI2NhcmQyIGF7XG4gICAgY29sb3I6ICMyYzNlNTA7XG59XG5cbiNjYXJkMiAud3JhcHBlcntcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuI2NhcmQyIC5oZWFkZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0OThkYjtcbn1cblxuI2NhcmQyIC5oZWFkZXI6YWZ0ZXJ7XG4gICAgY29udGVudDogJyc7XG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgICBib3R0b206IDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRyYW5zZm9ybTogc2tld1koLThkZWcpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WSgtOGRlZyk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJTtcbn1cblxuI2NhcmQyIC5pbWFnZS13cmFwcGVye1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9zdGF0aWMucGV4ZWxzLmNvbS9waG90b3MvNzA5Ny9wZW9wbGUtY29mZmVlLXRlYS1tZWV0aW5nLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDU7XG4gICAgdG9wOiAxMzBweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC01MHB4O1xufVxuXG4jY2FyZDIgLm5hbWV7XG4gICAgbWFyZ2luLXRvcDogNzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNjYXJkMiAuc29jaWFsIC5mb3Vye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2NhcmQyIC5pbmZve1xuICAgIG1hcmdpbjogMzBweCAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogQ0FSRCAzICovXG5cbiNjYXJkM3tcbiAgICBjb2xvcjogIzJjM2U1MDtcbn1cblxuI2NhcmQzIC5oZWFkZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxODBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3N0YXRpYy5wZXhlbHMuY29tL3Bob3Rvcy85NjkyL3BleGVscy1waG90by5qcGVnXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuI2NhcmQzIC53cmFwcGVye1xuICAgIHBhZGRpbmc6IDBweCAxNXB4O1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuI2NhcmQzIC5uYW1le1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbiNjYXJkMyAuaW5mb3tcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNjYXJkMyAuaW5mbyAubnVtYmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDk4ZGI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDcwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuYH1cblxuXG5cbjwvc3R5bGU+XG5cblxuXG5cbiAgPC9MYXlvdXQ+XG4pO1xuXG5Qb3N0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgY29uc3QgeyBpZCB9ID0gY29udGV4dC5xdWVyeTtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYWthYmFiLmdpdGh1Yi5pby9zdXBlcmhlcm8tYXBpL2FwaS9pZC8ke2lkfS5qc29uYCk7XG4gIGNvbnNvbGUubG9nKHJlcylcbiAgY29uc3QgY2hhcmFjdGVycyA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgY29uc29sZS5sb2coYEZldGNoZWQgY2hhcmFjdGVyczogJHtjaGFyYWN0ZXJzLm5hbWV9YCk7XG5cbiAgcmV0dXJuIHsgY2hhcmFjdGVycyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdDsiXX0= */\n/*@ sourceURL=/home/nkosi/Documents/Programming/heroes/pages/p/[id].js */"));
};

Post.getInitialProps =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var id, res, characters;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = context.query.id;
            _context.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()("https://akabab.github.io/superhero-api/api/id/".concat(id, ".json"));

          case 3:
            res = _context.sent;
            console.log(res);
            _context.next = 7;
            return res.json();

          case 7:
            characters = _context.sent;
            console.log("Fetched characters: ".concat(characters.name));
            return _context.abrupt("return", {
              characters: characters
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=[id].js.8c7260ca0d1b313ffe66.hot-update.js.map