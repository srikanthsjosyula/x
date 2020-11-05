webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/motions.ts":
/*!**************************!*\
  !*** ./utils/motions.ts ***!
  \**************************/
/*! exports provided: desktopIconDragSettings, desktopIconMotionSettings, taskbarEntriesMotionSettings, windowMotionSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"desktopIconDragSettings\", function() { return desktopIconDragSettings; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"desktopIconMotionSettings\", function() { return desktopIconMotionSettings; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"taskbarEntriesMotionSettings\", function() { return taskbarEntriesMotionSettings; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"windowMotionSettings\", function() { return windowMotionSettings; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/constants */ \"./utils/constants.ts\");\n/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/elements */ \"./utils/elements.ts\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar desktopIconDragSettings = {\n  dragElastic: 0.25,\n  dragTransition: {\n    bounceStiffness: 500,\n    bounceDamping: 15\n  },\n  dragMomentum: false\n};\nvar desktopIconMotionSettings = {\n  initial: {\n    opacity: 0,\n    y: -100\n  },\n  animate: {\n    opacity: 1,\n    y: 0\n  },\n  transition: {\n    y: {\n      type: 'spring'\n    }\n  }\n};\nvar taskbarEntriesMotionSettings = {\n  initial: {\n    opacity: 0,\n    x: -100\n  },\n  animate: {\n    opacity: 1,\n    x: 0\n  },\n  transition: {\n    x: {\n      type: 'spring'\n    }\n  },\n  exit: {\n    opacity: 0,\n    width: 0,\n    transition: {\n      duration: 0.3\n    },\n    x: -100\n  }\n};\nvar windowMotionSettings = function windowMotionSettings(_ref) {\n  var _ref$initialX = _ref.initialX,\n      initialX = _ref$initialX === void 0 ? 0 : _ref$initialX,\n      _ref$initialY = _ref.initialY,\n      initialY = _ref$initialY === void 0 ? 0 : _ref$initialY,\n      _ref$animation = _ref.animation,\n      animation = _ref$animation === void 0 ? 'start' : _ref$animation,\n      height = _ref.height,\n      width = _ref.width,\n      x = _ref.x,\n      y = _ref.y,\n      taskbarElement = _ref.taskbarElement,\n      launchElement = _ref.launchElement,\n      zIndex = _ref.zIndex;\n  var exitZIndex = _utils_constants__WEBPACK_IMPORTED_MODULE_1__[\"foregroundZindex\"] + 1;\n  var widthOffset = -Math.floor(width / 2);\n  var heightOffset = -Math.floor(height / 2);\n\n  var _getTargetCenterPosit = Object(_utils_elements__WEBPACK_IMPORTED_MODULE_2__[\"getTargetCenterPosition\"])(taskbarElement),\n      _getTargetCenterPosit2 = _getTargetCenterPosit.x,\n      taskbarElementX = _getTargetCenterPosit2 === void 0 ? 0 : _getTargetCenterPosit2,\n      _getTargetCenterPosit3 = _getTargetCenterPosit.y,\n      taskbarElementY = _getTargetCenterPosit3 === void 0 ? 0 : _getTargetCenterPosit3;\n\n  var _getTargetCenterImage = Object(_utils_elements__WEBPACK_IMPORTED_MODULE_2__[\"getTargetCenterImagePosition\"])(launchElement),\n      _getTargetCenterImage2 = _getTargetCenterImage.x,\n      launchElementX = _getTargetCenterImage2 === void 0 ? 0 : _getTargetCenterImage2,\n      _getTargetCenterImage3 = _getTargetCenterImage.y,\n      launchElementY = _getTargetCenterImage3 === void 0 ? 0 : _getTargetCenterImage3;\n\n  if (launchElementX === 0) {\n    launchElementX = window.innerWidth / 2;\n  }\n\n  if (launchElementY === 0) {\n    launchElementY = window.innerHeight / 2;\n  }\n\n  var baseTransform = {\n    scale: 0,\n    x: widthOffset + launchElementX,\n    y: heightOffset + launchElementY\n  };\n  var maximizedExitTransform = {\n    scale: 0,\n    x: -(window.innerWidth / 2) + launchElementX,\n    y: -(window.innerHeight / 2) + launchElementY\n  };\n  var animationVariants = {\n    start: {\n      scale: 1,\n      x: initialX,\n      y: initialY,\n      height: height,\n      width: width,\n      zIndex: zIndex\n    },\n    maximized: {\n      scale: 1,\n      x: initialX === x ? 0 : -x,\n      y: initialY === y ? 0 : -y,\n      height: window.innerHeight - _utils_constants__WEBPACK_IMPORTED_MODULE_1__[\"TASKBAR_HEIGHT\"],\n      width: '100vw',\n      zIndex: zIndex\n    },\n    minimized: {\n      scale: 0,\n      x: widthOffset + taskbarElementX,\n      y: heightOffset + taskbarElementY,\n      zIndex: exitZIndex\n    },\n    maxmin: {\n      scale: 0,\n      x: -(window.innerWidth / 2) + taskbarElementX,\n      y: -(window.innerHeight / 2) + taskbarElementY,\n      zIndex: exitZIndex\n    }\n  };\n  return {\n    initial: baseTransform,\n    exit: _objectSpread(_objectSpread({}, animation === 'maximized' ? maximizedExitTransform : baseTransform), {}, {\n      zIndex: exitZIndex\n    }),\n    animate: animationVariants[animation],\n    transition: {\n      duration: _utils_constants__WEBPACK_IMPORTED_MODULE_1__[\"MAXIMIZE_ANIMATION_SPEED_IN_SECONDS\"]\n    }\n  };\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvbW90aW9ucy50cz84MTUwIl0sIm5hbWVzIjpbImRlc2t0b3BJY29uRHJhZ1NldHRpbmdzIiwiZHJhZ0VsYXN0aWMiLCJkcmFnVHJhbnNpdGlvbiIsImJvdW5jZVN0aWZmbmVzcyIsImJvdW5jZURhbXBpbmciLCJkcmFnTW9tZW50dW0iLCJkZXNrdG9wSWNvbk1vdGlvblNldHRpbmdzIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJ0eXBlIiwidGFza2JhckVudHJpZXNNb3Rpb25TZXR0aW5ncyIsIngiLCJleGl0Iiwid2lkdGgiLCJkdXJhdGlvbiIsIndpbmRvd01vdGlvblNldHRpbmdzIiwiaW5pdGlhbFgiLCJpbml0aWFsWSIsImFuaW1hdGlvbiIsImhlaWdodCIsInRhc2tiYXJFbGVtZW50IiwibGF1bmNoRWxlbWVudCIsInpJbmRleCIsImV4aXRaSW5kZXgiLCJmb3JlZ3JvdW5kWmluZGV4Iiwid2lkdGhPZmZzZXQiLCJNYXRoIiwiZmxvb3IiLCJoZWlnaHRPZmZzZXQiLCJnZXRUYXJnZXRDZW50ZXJQb3NpdGlvbiIsInRhc2tiYXJFbGVtZW50WCIsInRhc2tiYXJFbGVtZW50WSIsImdldFRhcmdldENlbnRlckltYWdlUG9zaXRpb24iLCJsYXVuY2hFbGVtZW50WCIsImxhdW5jaEVsZW1lbnRZIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiYmFzZVRyYW5zZm9ybSIsInNjYWxlIiwibWF4aW1pemVkRXhpdFRyYW5zZm9ybSIsImFuaW1hdGlvblZhcmlhbnRzIiwic3RhcnQiLCJtYXhpbWl6ZWQiLCJUQVNLQkFSX0hFSUdIVCIsIm1pbmltaXplZCIsIm1heG1pbiIsIk1BWElNSVpFX0FOSU1BVElPTl9TUEVFRF9JTl9TRUNPTkRTIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQU9BO0FBS0E7QUFLTyxJQUFNQSx1QkFBdUIsR0FBRztBQUNy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QUV3QixNQUFNLENBQUNDLFVBQVAsR0FBb0IsQ0FBdEIsSUFBMkJOLGVBRnhCO0FBR054QixPQUFDLEVBQUUsRUFBRTZCLE1BQU0sQ0FBQ0UsV0FBUCxHQUFxQixDQUF2QixJQUE0Qk4sZUFIekI7QUFJTlQsWUFBTSxFQUFFQztBQUpGO0FBdkJOLEdBRko7QUFpQ0EsU0FBTztBQUNMbkIsV0FBTyxFQUFFa0MsYUFESjtBQUVMMUIsUUFBSSxrQ0FDRU0sU0FBUyxLQUFLLFdBQWQsR0FBNEJzQixzQkFBNUIsR0FBcURGLGFBRHZEO0FBRUZoQixZQUFNLEVBQUVDO0FBRk4sTUFGQztBQU1MaEIsV0FBTyxFQUFFa0MsaUJBQWlCLENBQUN2QixTQUFELENBTnJCO0FBT0xWLGNBQVUsRUFBRTtBQUNWTSxjQUFRLEVBQUVpQyxvRkFBbUNBO0FBRG5DO0FBUFAsR0FBUDtBQVdELENBbkZNIiwiZmlsZSI6Ii4vdXRpbHMvbW90aW9ucy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtcbiAgQW5pbWF0aW9uUHJvcHMsXG4gIFRyYW5zZm9ybVByb3BlcnRpZXNcbn0gZnJvbSAnZnJhbWVyLW1vdGlvbi90eXBlcy9tb3Rpb24vdHlwZXMnO1xuaW1wb3J0IHR5cGUgeyBNb3Rpb25Qcm9wcywgVGFyZ2V0QW5kVHJhbnNpdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHR5cGUgeyBXaW5kb3dNb3Rpb25TZXR0aW5ncyB9IGZyb20gJ0AvdHlwZXMvdXRpbHMvbW90aW9uJztcblxuaW1wb3J0IHtcbiAgZm9yZWdyb3VuZFppbmRleCxcbiAgTUFYSU1JWkVfQU5JTUFUSU9OX1NQRUVEX0lOX1NFQ09ORFMsXG4gIFRBU0tCQVJfSEVJR0hUXG59IGZyb20gJ0AvdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCB7XG4gIGdldFRhcmdldENlbnRlclBvc2l0aW9uLFxuICBnZXRUYXJnZXRDZW50ZXJJbWFnZVBvc2l0aW9uXG59IGZyb20gJ0AvdXRpbHMvZWxlbWVudHMnO1xuXG5leHBvcnQgY29uc3QgZGVza3RvcEljb25EcmFnU2V0dGluZ3MgPSB7XG4gIGRyYWdFbGFzdGljOiAwLjI1LFxuICBkcmFnVHJhbnNpdGlvbjogeyBib3VuY2VTdGlmZm5lc3M6IDUwMCwgYm91bmNlRGFtcGluZzogMTUgfSxcbiAgZHJhZ01vbWVudHVtOiBmYWxzZVxufTtcblxuZXhwb3J0IGNvbnN0IGRlc2t0b3BJY29uTW90aW9uU2V0dGluZ3M6IE1vdGlvblByb3BzID0ge1xuICBpbml0aWFsOiB7IG9wYWNpdHk6IDAsIHk6IC0xMDAgfSxcbiAgYW5pbWF0ZTogeyBvcGFjaXR5OiAxLCB5OiAwIH0sXG4gIHRyYW5zaXRpb246IHsgeTogeyB0eXBlOiAnc3ByaW5nJyB9IH1cbn07XG5cbmV4cG9ydCBjb25zdCB0YXNrYmFyRW50cmllc01vdGlvblNldHRpbmdzOiBNb3Rpb25Qcm9wcyA9IHtcbiAgaW5pdGlhbDogeyBvcGFjaXR5OiAwLCB4OiAtMTAwIH0sXG4gIGFuaW1hdGU6IHsgb3BhY2l0eTogMSwgeDogMCB9LFxuICB0cmFuc2l0aW9uOiB7IHg6IHsgdHlwZTogJ3NwcmluZycgfSB9LFxuICBleGl0OiB7XG4gICAgb3BhY2l0eTogMCxcbiAgICB3aWR0aDogMCxcbiAgICB0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiAwLjMgfSxcbiAgICB4OiAtMTAwXG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCB3aW5kb3dNb3Rpb25TZXR0aW5ncyA9ICh7XG4gIGluaXRpYWxYID0gMCxcbiAgaW5pdGlhbFkgPSAwLFxuICBhbmltYXRpb24gPSAnc3RhcnQnLFxuICBoZWlnaHQsXG4gIHdpZHRoLFxuICB4LFxuICB5LFxuICB0YXNrYmFyRWxlbWVudCxcbiAgbGF1bmNoRWxlbWVudCxcbiAgekluZGV4XG59OiBXaW5kb3dNb3Rpb25TZXR0aW5ncyk6IE1vdGlvblByb3BzID0+IHtcbiAgY29uc3QgZXhpdFpJbmRleCA9IGZvcmVncm91bmRaaW5kZXggKyAxO1xuICBjb25zdCB3aWR0aE9mZnNldCA9IC1NYXRoLmZsb29yKHdpZHRoIC8gMik7XG4gIGNvbnN0IGhlaWdodE9mZnNldCA9IC1NYXRoLmZsb29yKGhlaWdodCAvIDIpO1xuICBjb25zdCB7XG4gICAgeDogdGFza2JhckVsZW1lbnRYID0gMCxcbiAgICB5OiB0YXNrYmFyRWxlbWVudFkgPSAwXG4gIH0gPSBnZXRUYXJnZXRDZW50ZXJQb3NpdGlvbih0YXNrYmFyRWxlbWVudCk7XG4gIGxldCB7XG4gICAgeDogbGF1bmNoRWxlbWVudFggPSAwLFxuICAgIHk6IGxhdW5jaEVsZW1lbnRZID0gMFxuICB9ID0gZ2V0VGFyZ2V0Q2VudGVySW1hZ2VQb3NpdGlvbihsYXVuY2hFbGVtZW50KTtcbiAgaWYgKGxhdW5jaEVsZW1lbnRYID09PSAwKSB7XG4gICAgbGF1bmNoRWxlbWVudFggPSB3aW5kb3cuaW5uZXJXaWR0aCAvIDI7XG4gIH1cbiAgaWYgKGxhdW5jaEVsZW1lbnRZID09PSAwKSB7XG4gICAgbGF1bmNoRWxlbWVudFkgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyO1xuICB9XG4gIGNvbnN0IGJhc2VUcmFuc2Zvcm06IFRyYW5zZm9ybVByb3BlcnRpZXMgPSB7XG4gICAgc2NhbGU6IDAsXG4gICAgeDogd2lkdGhPZmZzZXQgKyBsYXVuY2hFbGVtZW50WCxcbiAgICB5OiBoZWlnaHRPZmZzZXQgKyBsYXVuY2hFbGVtZW50WVxuICB9O1xuICBjb25zdCBtYXhpbWl6ZWRFeGl0VHJhbnNmb3JtOiBUcmFuc2Zvcm1Qcm9wZXJ0aWVzID0ge1xuICAgIHNjYWxlOiAwLFxuICAgIHg6IC0od2luZG93LmlubmVyV2lkdGggLyAyKSArIGxhdW5jaEVsZW1lbnRYLFxuICAgIHk6IC0od2luZG93LmlubmVySGVpZ2h0IC8gMikgKyBsYXVuY2hFbGVtZW50WVxuICB9O1xuICBjb25zdCBhbmltYXRpb25WYXJpYW50czoge1xuICAgIFtrZXk6IHN0cmluZ106IEFuaW1hdGlvblByb3BzICYgVGFyZ2V0QW5kVHJhbnNpdGlvbjtcbiAgfSA9IHtcbiAgICBzdGFydDoge1xuICAgICAgc2NhbGU6IDEsXG4gICAgICB4OiBpbml0aWFsWCxcbiAgICAgIHk6IGluaXRpYWxZLFxuICAgICAgaGVpZ2h0LFxuICAgICAgd2lkdGgsXG4gICAgICB6SW5kZXhcbiAgICB9LFxuICAgIG1heGltaXplZDoge1xuICAgICAgc2NhbGU6IDEsXG4gICAgICB4OiBpbml0aWFsWCA9PT0geCA/IDAgOiAteCxcbiAgICAgIHk6IGluaXRpYWxZID09PSB5ID8gMCA6IC15LFxuICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSBUQVNLQkFSX0hFSUdIVCxcbiAgICAgIHdpZHRoOiAnMTAwdncnLFxuICAgICAgekluZGV4XG4gICAgfSxcbiAgICBtaW5pbWl6ZWQ6IHtcbiAgICAgIHNjYWxlOiAwLFxuICAgICAgeDogd2lkdGhPZmZzZXQgKyB0YXNrYmFyRWxlbWVudFgsXG4gICAgICB5OiBoZWlnaHRPZmZzZXQgKyB0YXNrYmFyRWxlbWVudFksXG4gICAgICB6SW5kZXg6IGV4aXRaSW5kZXhcbiAgICB9LFxuICAgIG1heG1pbjoge1xuICAgICAgc2NhbGU6IDAsXG4gICAgICB4OiAtKHdpbmRvdy5pbm5lcldpZHRoIC8gMikgKyB0YXNrYmFyRWxlbWVudFgsXG4gICAgICB5OiAtKHdpbmRvdy5pbm5lckhlaWdodCAvIDIpICsgdGFza2JhckVsZW1lbnRZLFxuICAgICAgekluZGV4OiBleGl0WkluZGV4XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgaW5pdGlhbDogYmFzZVRyYW5zZm9ybSxcbiAgICBleGl0OiB7XG4gICAgICAuLi4oYW5pbWF0aW9uID09PSAnbWF4aW1pemVkJyA/IG1heGltaXplZEV4aXRUcmFuc2Zvcm0gOiBiYXNlVHJhbnNmb3JtKSxcbiAgICAgIHpJbmRleDogZXhpdFpJbmRleFxuICAgIH0sXG4gICAgYW5pbWF0ZTogYW5pbWF0aW9uVmFyaWFudHNbYW5pbWF0aW9uXSxcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICBkdXJhdGlvbjogTUFYSU1JWkVfQU5JTUFUSU9OX1NQRUVEX0lOX1NFQ09ORFNcbiAgICB9XG4gIH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/motions.ts\n");

/***/ })

})