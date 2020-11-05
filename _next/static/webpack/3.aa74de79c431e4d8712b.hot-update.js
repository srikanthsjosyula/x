webpackHotUpdate_N_E(3,{

/***/ "./utils/windowmanager.ts":
/*!********************************!*\
  !*** ./utils/windowmanager.ts ***!
  \********************************/
/*! exports provided: getMaxDimensions, getNextVisibleWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMaxDimensions\", function() { return getMaxDimensions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNextVisibleWindow\", function() { return getNextVisibleWindow; });\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/constants */ \"./utils/constants.ts\");\n // TODO: If not locked ratio and height/width is > screen, start maximized, initially\n\nvar getMaxDimensions = function getMaxDimensions(width, height) {\n  var defaultWidth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n  var defaultHeight = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;\n  var lockAspectRatio = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;\n\n  if (width === defaultWidth && height === defaultHeight) {\n    var PADDING = _utils_constants__WEBPACK_IMPORTED_MODULE_0__[\"WINDOW_PADDING\"] * 2;\n    var maxWidth = window.innerWidth - PADDING;\n    var maxHeight = window.innerHeight - _utils_constants__WEBPACK_IMPORTED_MODULE_0__[\"TASKBAR_HEIGHT\"] - PADDING;\n\n    if (lockAspectRatio) {\n      var aspectLockedHeight = height / width * Math.min(maxWidth, width);\n\n      if (aspectLockedHeight > maxHeight) {\n        maxWidth = maxHeight / (height / width);\n      } else {\n        maxHeight = aspectLockedHeight;\n      }\n    }\n\n    return {\n      height: Math.ceil(Math.min(maxHeight, height)),\n      width: Math.ceil(Math.min(maxWidth, width))\n    };\n  }\n\n  return {\n    height: height,\n    width: width\n  };\n};\nvar getNextVisibleWindow = function getNextVisibleWindow(processes, stackOrder) {\n  var visibleProcessId = stackOrder.find(function (stackId) {\n    return processes.find(function (process) {\n      return process.id === stackId && !process.minimized;\n    });\n  });\n  return visibleProcessId || '';\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvd2luZG93bWFuYWdlci50cz8xNDRiIl0sIm5hbWVzIjpbImdldE1heERpbWVuc2lvbnMiLCJ3aWR0aCIsImhlaWdodCIsImRlZmF1bHRXaWR0aCIsImRlZmF1bHRIZWlnaHQiLCJsb2NrQXNwZWN0UmF0aW8iLCJQQURESU5HIiwiV0lORE9XX1BBRERJTkciLCJtYXhXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJtYXhIZWlnaHQiLCJpbm5lckhlaWdodCIsIlRBU0tCQVJfSEVJR0hUIiwiYXNwZWN0TG9ja2VkSGVpZ2h0IiwiTWF0aCIsIm1pbiIsImNlaWwiLCJnZXROZXh0VmlzaWJsZVdpbmRvdyIsInByb2Nlc3NlcyIsInN0YWNrT3JkZXIiLCJ2aXNpYmxlUHJvY2Vzc0lkIiwiZmluZCIsInN0YWNrSWQiLCJwcm9jZXNzIiwiaWQiLCJtaW5pbWl6ZWQiXSwibWFwcGluZ3MiOiJBQUVBO0FBQUE7QUFBQTtBQUFBO0NBRUE7O0FBQ08sSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUM5QkMsS0FEOEIsRUFFOUJDLE1BRjhCLEVBTVE7QUFBQSxNQUh0Q0MsWUFHc0MsdUVBSHZCLENBR3VCO0FBQUEsTUFGdENDLGFBRXNDLHVFQUZ0QixDQUVzQjtBQUFBLE1BRHRDQyxlQUNzQyx1RUFEcEIsS0FDb0I7O0FBQ3RDLE1BQUlKLEtBQUssS0FBS0UsWUFBVixJQUEwQkQsTUFBTSxLQUFLRSxhQUF6QyxFQUF3RDtBQUN0RCxRQUFNRSxPQUFPLEdBQUdDLCtEQUFjLEdBQUcsQ0FBakM7QUFDQSxRQUFJQyxRQUFRLEdBQUdDLE1BQU0sQ0FBQ0MsVUFBUCxHQUFvQkosT0FBbkM7QUFDQSxRQUFJSyxTQUFTLEdBQUdGLE1BQU0sQ0FBQ0csV0FBUCxHQUFxQkMsK0RBQXJCLEdBQXNDUCxPQUF0RDs7QUFFQSxRQUFJRCxlQUFKLEVBQXFCO0FBQ25CLFVBQU1TLGtCQUFrQixHQUFJWixNQUFNLEdBQUdELEtBQVYsR0FBbUJjLElBQUksQ0FBQ0MsR0FBTCxDQUFTUixRQUFULEVBQW1CUCxLQUFuQixDQUE5Qzs7QUFFQSxVQUFJYSxrQkFBa0IsR0FBR0gsU0FBekIsRUFBb0M7QUFDbENILGdCQUFRLEdBQUdHLFNBQVMsSUFBSVQsTUFBTSxHQUFHRCxLQUFiLENBQXBCO0FBQ0QsT0FGRCxNQUVPO0FBQ0xVLGlCQUFTLEdBQUdHLGtCQUFaO0FBQ0Q7QUFDRjs7QUFFRCxXQUFPO0FBQ0xaLFlBQU0sRUFBRWEsSUFBSSxDQUFDRSxJQUFMLENBQVVGLElBQUksQ0FBQ0MsR0FBTCxDQUFTTCxTQUFULEVBQW9CVCxNQUFwQixDQUFWLENBREg7QUFFTEQsV0FBSyxFQUFFYyxJQUFJLENBQUNFLElBQUwsQ0FBVUYsSUFBSSxDQUFDQyxHQUFMLENBQVNSLFFBQVQsRUFBbUJQLEtBQW5CLENBQVY7QUFGRixLQUFQO0FBSUQ7O0FBRUQsU0FBTztBQUFFQyxVQUFNLEVBQU5BLE1BQUY7QUFBVUQsU0FBSyxFQUFMQTtBQUFWLEdBQVA7QUFDRCxDQTdCTTtBQStCQSxJQUFNaUIsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUNsQ0MsU0FEa0MsRUFFbENDLFVBRmtDLEVBR3ZCO0FBQ1gsTUFBTUMsZ0JBQWdCLEdBQUdELFVBQVUsQ0FBQ0UsSUFBWCxDQUFnQixVQUFDQyxPQUFEO0FBQUEsV0FDdkNKLFNBQVMsQ0FBQ0csSUFBVixDQUFlLFVBQUNFLE9BQUQ7QUFBQSxhQUFhQSxPQUFPLENBQUNDLEVBQVIsS0FBZUYsT0FBZixJQUEwQixDQUFDQyxPQUFPLENBQUNFLFNBQWhEO0FBQUEsS0FBZixDQUR1QztBQUFBLEdBQWhCLENBQXpCO0FBSUEsU0FBT0wsZ0JBQWdCLElBQUksRUFBM0I7QUFDRCxDQVRNIiwiZmlsZSI6Ii4vdXRpbHMvd2luZG93bWFuYWdlci50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgUHJvY2Vzc2VzIH0gZnJvbSAnQC90eXBlcy91dGlscy9wcm9jZXNzbWFuYWdlcic7XG5cbmltcG9ydCB7IFRBU0tCQVJfSEVJR0hULCBXSU5ET1dfUEFERElORyB9IGZyb20gJ0AvdXRpbHMvY29uc3RhbnRzJztcblxuLy8gVE9ETzogSWYgbm90IGxvY2tlZCByYXRpbyBhbmQgaGVpZ2h0L3dpZHRoIGlzID4gc2NyZWVuLCBzdGFydCBtYXhpbWl6ZWQsIGluaXRpYWxseVxuZXhwb3J0IGNvbnN0IGdldE1heERpbWVuc2lvbnMgPSAoXG4gIHdpZHRoOiBudW1iZXIsXG4gIGhlaWdodDogbnVtYmVyLFxuICBkZWZhdWx0V2lkdGggPSAwLFxuICBkZWZhdWx0SGVpZ2h0ID0gMCxcbiAgbG9ja0FzcGVjdFJhdGlvID0gZmFsc2Vcbik6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSA9PiB7XG4gIGlmICh3aWR0aCA9PT0gZGVmYXVsdFdpZHRoICYmIGhlaWdodCA9PT0gZGVmYXVsdEhlaWdodCkge1xuICAgIGNvbnN0IFBBRERJTkcgPSBXSU5ET1dfUEFERElORyAqIDI7XG4gICAgbGV0IG1heFdpZHRoID0gd2luZG93LmlubmVyV2lkdGggLSBQQURESU5HO1xuICAgIGxldCBtYXhIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSBUQVNLQkFSX0hFSUdIVCAtIFBBRERJTkc7XG5cbiAgICBpZiAobG9ja0FzcGVjdFJhdGlvKSB7XG4gICAgICBjb25zdCBhc3BlY3RMb2NrZWRIZWlnaHQgPSAoaGVpZ2h0IC8gd2lkdGgpICogTWF0aC5taW4obWF4V2lkdGgsIHdpZHRoKTtcblxuICAgICAgaWYgKGFzcGVjdExvY2tlZEhlaWdodCA+IG1heEhlaWdodCkge1xuICAgICAgICBtYXhXaWR0aCA9IG1heEhlaWdodCAvIChoZWlnaHQgLyB3aWR0aCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYXhIZWlnaHQgPSBhc3BlY3RMb2NrZWRIZWlnaHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGhlaWdodDogTWF0aC5jZWlsKE1hdGgubWluKG1heEhlaWdodCwgaGVpZ2h0KSksXG4gICAgICB3aWR0aDogTWF0aC5jZWlsKE1hdGgubWluKG1heFdpZHRoLCB3aWR0aCkpXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7IGhlaWdodCwgd2lkdGggfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXROZXh0VmlzaWJsZVdpbmRvdyA9IChcbiAgcHJvY2Vzc2VzOiBQcm9jZXNzZXMsXG4gIHN0YWNrT3JkZXI6IHN0cmluZ1tdXG4pOiBzdHJpbmcgPT4ge1xuICBjb25zdCB2aXNpYmxlUHJvY2Vzc0lkID0gc3RhY2tPcmRlci5maW5kKChzdGFja0lkKSA9PlxuICAgIHByb2Nlc3Nlcy5maW5kKChwcm9jZXNzKSA9PiBwcm9jZXNzLmlkID09PSBzdGFja0lkICYmICFwcm9jZXNzLm1pbmltaXplZClcbiAgKTtcblxuICByZXR1cm4gdmlzaWJsZVByb2Nlc3NJZCB8fCAnJztcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/windowmanager.ts\n");

/***/ })

})