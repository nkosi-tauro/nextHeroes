webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "/home/nkosi/Documents/Programming/heroes/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




var Index = function Index(props) {
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    id: "container",
    className: "jsx-3823738191",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    id: "row",
    className: "jsx-3823738191",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3823738191",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Superheros"), __jsx("ul", {
    className: "jsx-3823738191" + " " + "grid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, props.shows.map(function (characters) {
    return __jsx("li", {
      key: characters.id,
      className: "jsx-3823738191",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/p/[id]",
      as: "/p/".concat(characters.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-3823738191",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, characters.name)));
  })), __jsx("table", {
    className: "jsx-3823738191" + " " + "responsive-table",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("thead", {
    className: "jsx-3823738191",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("tr", {
    className: "jsx-3823738191",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("th", {
    className: "jsx-3823738191",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Name"), __jsx("th", {
    className: "jsx-3823738191",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Publisher"), __jsx("th", {
    className: "jsx-3823738191",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Alignment"))), __jsx("tbody", {
    className: "jsx-3823738191",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, props.shows.map(function (characters) {
    return __jsx("tr", {
      key: characters.id,
      className: "jsx-3823738191",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx("td", {
      className: "jsx-3823738191",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/p/[id]",
      as: "/p/".concat(characters.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-3823738191",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, characters.name))), __jsx("td", {
      className: "jsx-3823738191",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, "characters.biography.publisher"), __jsx("td", {
      className: "jsx-3823738191",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "$0.87"));
  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3823738191",
    __self: this
  }, "#container.jsx-3823738191 ul.jsx-3823738191{list-style:none;}#container.jsx-3823738191 .grid.jsx-3823738191 li.jsx-3823738191{float:left;width:20%;height:50px;border-right:1px dotted #CCC;border-bottom:1px dotted #CCC;padding:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25rb3NpL0RvY3VtZW50cy9Qcm9ncmFtbWluZy9oZXJvZXMvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNENrQixBQUVzQyxBQUNDLFdBQVcsS0FEWCxLQUN3QixZQUE4Qiw2QkFBK0IsOEJBQWMsYUFBQyIsImZpbGUiOiIvaG9tZS9ua29zaS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvaGVyb2VzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcblxuY29uc3QgSW5kZXggPSBwcm9wcyA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPGRpdiBpZD1cImNvbnRhaW5lclwiPlxuICAgIDxkaXYgaWQ9XCJyb3dcIj5cbiAgICA8aDE+U3VwZXJoZXJvczwvaDE+XG4gICAgXG4gICAgPHVsIGNsYXNzTmFtZT1cImdyaWRcIj5cbiAgICAgIHtwcm9wcy5zaG93cy5tYXAoY2hhcmFjdGVycyA9PiAoXG4gICAgICAgIDxsaSBrZXk9e2NoYXJhY3RlcnMuaWR9PlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcC9baWRdXCIgYXM9e2AvcC8ke2NoYXJhY3RlcnMuaWR9YH0+XG4gICAgICAgICAgICA8YT57Y2hhcmFjdGVycy5uYW1lfTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICAgICAgXG4gICAgPHRhYmxlIGNsYXNzTmFtZT1cInJlc3BvbnNpdmUtdGFibGVcIj5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIFxuICAgICAgICAgIDx0ciA+XG4gICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cbiAgICAgICAgICAgICAgPHRoPlB1Ymxpc2hlcjwvdGg+XG4gICAgICAgICAgICAgIDx0aD5BbGlnbm1lbnQ8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICB7cHJvcHMuc2hvd3MubWFwKGNoYXJhY3RlcnMgPT4gKFxuICAgICAgICAgIDx0ciBrZXk9e2NoYXJhY3RlcnMuaWR9PlxuICAgICAgICAgICAgPHRkPjxMaW5rIGhyZWY9XCIvcC9baWRdXCIgYXM9e2AvcC8ke2NoYXJhY3RlcnMuaWR9YH0+PGE+e2NoYXJhY3RlcnMubmFtZX08L2E+PC9MaW5rPjwvdGQ+XG4gICAgICAgICAgICA8dGQ+Y2hhcmFjdGVycy5iaW9ncmFwaHkucHVibGlzaGVyPC90ZD5cbiAgICAgICAgICAgIDx0ZD4kMC44NzwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG5cbiAgICBcbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICNjb250YWluZXIgdWwgeyBsaXN0LXN0eWxlOiBub25lOyB9XG4gICAgICAjY29udGFpbmVyIC5ncmlkIGxpIHsgZmxvYXQ6IGxlZnQ7IHdpZHRoOiAyMCU7IGhlaWdodDogNTBweDsgYm9yZGVyLXJpZ2h0OiAxcHggZG90dGVkICNDQ0M7IGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgI0NDQzsgcGFkZGluZzogMjBweDsgfVxuICAgICAgYH08L3N0eWxlPlxuICA8L0xheW91dD5cbik7XG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FrYWJhYi9zdXBlcmhlcm8tYXBpLzAuMi4wL2FwaS9hbGwuanNvbicpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICBjb25zb2xlLmxvZyhgU2hvdyBkYXRhIGZldGNoZWQuIENvdW50OiAke2RhdGEubGVuZ3RofWApO1xuXG4gIHJldHVybiB7XG4gICAgc2hvd3M6IGRhdGEubWFwKGVudHJ5ID0+IGVudHJ5KVxuICAgIFxuICB9O1xuICBcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl19 */\n/*@ sourceURL=/home/nkosi/Documents/Programming/heroes/pages/index.js */"));
};

Index.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()('https://raw.githubusercontent.com/akabab/superhero-api/0.2.0/api/all.json');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;
          console.log("Show data fetched. Count: ".concat(data.length));
          return _context.abrupt("return", {
            shows: data.map(function (entry) {
              return entry;
            })
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.17eb22545737416c841b.hot-update.js.map