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
  }, "Superheros"), __jsx("table", {
    className: "jsx-3823738191" + " " + "responsive-table highlight",
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
    }, characters.biography.publisher), __jsx("td", {
      className: "jsx-3823738191",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, characters.biography.alignment));
  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3823738191",
    __self: this
  }, "#container.jsx-3823738191 ul.jsx-3823738191{list-style:none;}#container.jsx-3823738191 .grid.jsx-3823738191 li.jsx-3823738191{float:left;width:20%;height:50px;border-right:1px dotted #CCC;border-bottom:1px dotted #CCC;padding:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25rb3NpL0RvY3VtZW50cy9Qcm9ncmFtbWluZy9oZXJvZXMvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNENnQixBQUVzQyxBQUNDLFdBQVcsS0FEWCxLQUN3QixZQUE4Qiw2QkFBK0IsOEJBQWMsYUFBQyIsImZpbGUiOiIvaG9tZS9ua29zaS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvaGVyb2VzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcblxuY29uc3QgSW5kZXggPSBwcm9wcyA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPGRpdiBpZD1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBpZD1cInJvd1wiPlxuICAgICAgICA8aDE+U3VwZXJoZXJvczwvaDE+XG5cbiAgICAgICAgey8qIDx1bCBjbGFzc05hbWU9XCJncmlkXCI+XG4gICAgICB7cHJvcHMuc2hvd3MubWFwKGNoYXJhY3RlcnMgPT4gKFxuICAgICAgICA8bGkga2V5PXtjaGFyYWN0ZXJzLmlkfT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3AvW2lkXVwiIGFzPXtgL3AvJHtjaGFyYWN0ZXJzLmlkfWB9PlxuICAgICAgICAgICAgPGE+e2NoYXJhY3RlcnMubmFtZX08L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgPC91bD4gKi99XG5cbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInJlc3BvbnNpdmUtdGFibGUgaGlnaGxpZ2h0XCI+XG4gICAgICAgICAgPHRoZWFkPlxuXG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cbiAgICAgICAgICAgICAgPHRoPlB1Ymxpc2hlcjwvdGg+XG4gICAgICAgICAgICAgIDx0aD5BbGlnbm1lbnQ8L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3RoZWFkPlxuXG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAge3Byb3BzLnNob3dzLm1hcChjaGFyYWN0ZXJzID0+IChcbiAgICAgICAgICAgICAgPHRyIGtleT17Y2hhcmFjdGVycy5pZH0+XG4gICAgICAgICAgICAgICAgPHRkPjxMaW5rIGhyZWY9XCIvcC9baWRdXCIgYXM9e2AvcC8ke2NoYXJhY3RlcnMuaWR9YH0+PGE+e2NoYXJhY3RlcnMubmFtZX08L2E+PC9MaW5rPjwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntjaGFyYWN0ZXJzLmJpb2dyYXBoeS5wdWJsaXNoZXJ9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e2NoYXJhY3RlcnMuYmlvZ3JhcGh5LmFsaWdubWVudH08L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cblxuXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAjY29udGFpbmVyIHVsIHsgbGlzdC1zdHlsZTogbm9uZTsgfVxuICAgICAgI2NvbnRhaW5lciAuZ3JpZCBsaSB7IGZsb2F0OiBsZWZ0OyB3aWR0aDogMjAlOyBoZWlnaHQ6IDUwcHg7IGJvcmRlci1yaWdodDogMXB4IGRvdHRlZCAjQ0NDOyBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICNDQ0M7IHBhZGRpbmc6IDIwcHg7IH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgPC9MYXlvdXQ+XG4pO1xuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYWthYmFiL3N1cGVyaGVyby1hcGkvMC4yLjAvYXBpL2FsbC5qc29uJyk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIGNvbnNvbGUubG9nKGBTaG93IGRhdGEgZmV0Y2hlZC4gQ291bnQ6ICR7ZGF0YS5sZW5ndGh9YCk7XG5cbiAgcmV0dXJuIHtcbiAgICBzaG93czogZGF0YS5tYXAoZW50cnkgPT4gZW50cnkpXG5cbiAgfTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=/home/nkosi/Documents/Programming/heroes/pages/index.js */"));
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
//# sourceMappingURL=index.js.ae7abd0c0da18e84f34a.hot-update.js.map