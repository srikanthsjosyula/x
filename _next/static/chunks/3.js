(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[3],{

/***/ "./components/System/WindowManager/ProcessWindow.tsx":
/*!***********************************************************!*\
  !*** ./components/System/WindowManager/ProcessWindow.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/System/WindowManager/WindowManager.module.scss */ \"./styles/System/WindowManager/WindowManager.module.scss\");\n/* harmony import */ var _styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/constants */ \"./utils/constants.ts\");\n/* harmony import */ var _utils_windowmanager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/windowmanager */ \"./utils/windowmanager.ts\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var _contexts_ProcessManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/contexts/ProcessManager */ \"./contexts/ProcessManager.tsx\");\n/* harmony import */ var _contexts_SessionManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/contexts/SessionManager */ \"./contexts/SessionManager.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _utils_motions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utils/motions */ \"./utils/motions.ts\");\n\n\n\nvar _jsxFileName = \"/Users/dustin/Git/x/components/System/WindowManager/ProcessWindow.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\nvar Window = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! @/components/System/WindowManager/Window */ \"./components/System/WindowManager/Window.tsx\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! @/components/System/WindowManager/Window */ \"./components/System/WindowManager/Window.tsx\")];\n    },\n    modules: ['@/components/System/WindowManager/Window']\n  }\n});\n_c2 = Window;\nvar windowZindex = _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"baseZindex\"] + _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"windowsZindexLevel\"] * _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"zindexLevelSize\"];\n\nvar ProcessWindow = function ProcessWindow(_ref) {\n  _s();\n\n  var _ref$loader = _ref.loader,\n      App = _ref$loader.loader,\n      loadedAppOptions = _ref$loader.loadedAppOptions,\n      _ref$loader$loaderOpt = _ref$loader.loaderOptions,\n      defaultWidth = _ref$loader$loaderOpt.width,\n      defaultHeight = _ref$loader$loaderOpt.height,\n      bgColor = _ref.bgColor,\n      initialHeight = _ref.height,\n      icon = _ref.icon,\n      id = _ref.id,\n      launchElement = _ref.launchElement,\n      lockAspectRatio = _ref.lockAspectRatio,\n      maximized = _ref.maximized,\n      minimized = _ref.minimized,\n      name = _ref.name,\n      taskbarElement = _ref.taskbarElement,\n      initialWidth = _ref.width,\n      windowed = _ref.windowed,\n      x = _ref.x,\n      y = _ref.y;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useContext\"])(_contexts_SessionManager__WEBPACK_IMPORTED_MODULE_8__[\"SessionContext\"]),\n      foreground = _useContext.foreground,\n      getState = _useContext.getState,\n      saveState = _useContext.saveState,\n      _useContext$session = _useContext.session,\n      foregroundId = _useContext$session.foregroundId,\n      stackOrder = _useContext$session.stackOrder;\n\n  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useContext\"])(_contexts_ProcessManager__WEBPACK_IMPORTED_MODULE_7__[\"ProcessContext\"]),\n      processes = _useContext2.processes,\n      close = _useContext2.close,\n      maximize = _useContext2.maximize,\n      minimize = _useContext2.minimize,\n      position = _useContext2.position,\n      restore = _useContext2.restore,\n      size = _useContext2.size;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useState\"])(false),\n      maximizeWindow = _useState[0],\n      setMaximizeWindow = _useState[1];\n\n  var _getState = getState({\n    id: id\n  }),\n      previousX = _getState.x,\n      previousY = _getState.y;\n\n  var _getMaxDimensions = Object(_utils_windowmanager__WEBPACK_IMPORTED_MODULE_5__[\"getMaxDimensions\"])(initialWidth, initialHeight, defaultWidth, defaultHeight, lockAspectRatio),\n      height = _getMaxDimensions.height,\n      width = _getMaxDimensions.width;\n\n  var _useMemo = Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useMemo\"])(function () {\n    return {\n      x: Math.floor((window.innerWidth - width) / 2),\n      y: Math.floor((window.innerHeight - _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"TASKBAR_HEIGHT\"] - height) / 2)\n    };\n  }, []),\n      defaultX = _useMemo.x,\n      defaultY = _useMemo.y;\n\n  var windowOptions = {\n    onMinimize: function onMinimize() {\n      return minimize(id);\n    },\n    onMaximize: function onMaximize() {\n      return maximized ? restore(id, 'maximized') : maximize(id);\n    },\n    onClose: function onClose() {\n      saveState({\n        height: height,\n        id: id,\n        width: width,\n        x: !previousX ? defaultX + x : x,\n        y: !previousY ? defaultY + y : y\n      });\n      close(id);\n    },\n    onFocus: function onFocus() {\n      return foreground(id);\n    },\n    onBlur: function onBlur(event) {\n      if (event.relatedTarget !== taskbarElement) {\n        foreground('');\n      }\n    },\n    updatePosition: position(id),\n    zIndex: windowZindex + stackOrder.slice().reverse().indexOf(id),\n    maximized: maximizeWindow,\n    minimized: minimized,\n    id: id,\n    height: height,\n    width: width\n  };\n  Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useEffect\"])(function () {\n    if (foregroundId === id && minimized) {\n      foreground(Object(_utils_windowmanager__WEBPACK_IMPORTED_MODULE_5__[\"getNextVisibleWindow\"])(processes, stackOrder.filter(function (stackId) {\n        return stackId !== id;\n      })));\n    } else if (!stackOrder.includes(id)) {\n      foreground(Object(_utils_windowmanager__WEBPACK_IMPORTED_MODULE_5__[\"getNextVisibleWindow\"])(processes, stackOrder));\n    }\n  }, [foregroundId, id, minimized, processes, stackOrder]);\n  Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useEffect\"])(function () {\n    if (maximized) {\n      setMaximizeWindow(true);\n    } else if (maximizeWindow) {\n      setTimeout(function () {\n        return setMaximizeWindow(false);\n      }, _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"MAXIMIZE_ANIMATION_SPEED_IN_SECONDS\"] * _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"MILLISECONDS_IN_SECOND\"]);\n    }\n  }, [maximized]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_6__[\"motion\"].article, _objectSpread(_objectSpread({\n    className: _styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.animatedWindows,\n    style: {\n      zIndex: foregroundId === id ? _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"foregroundZindex\"] : windowOptions.zIndex,\n      height: height,\n      width: width\n    }\n  }, Object(_utils_motions__WEBPACK_IMPORTED_MODULE_10__[\"windowMotionSettings\"])({\n    initialX: previousX || defaultX,\n    initialY: previousY || defaultY,\n    animation: maximized && minimized && 'maxmin' || maximized && 'maximized' || minimized && 'minimized' || 'start',\n    height: height,\n    width: width,\n    x: x,\n    y: y,\n    taskbarElement: taskbarElement,\n    launchElement: launchElement,\n    zIndex: windowOptions.zIndex\n  })), {}, {\n    children: windowed ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Window, _objectSpread(_objectSpread({\n      icon: icon,\n      name: name,\n      bgColor: bgColor,\n      lockAspectRatio: lockAspectRatio,\n      updateSize: size(id)\n    }, windowOptions), {}, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(App, _objectSpread(_objectSpread({}, loadedAppOptions), windowOptions), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 167,\n        columnNumber: 11\n      }, _this)\n    }), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 159,\n      columnNumber: 9\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(App, _objectSpread(_objectSpread({}, loadedAppOptions), windowOptions), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 170,\n      columnNumber: 9\n    }, _this)\n  }), id, false, {\n    fileName: _jsxFileName,\n    lineNumber: 133,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ProcessWindow, \"7/dVr8p6VaMad/a1eqBeHszT6Xo=\");\n\n_c3 = ProcessWindow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProcessWindow);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Window$dynamic\");\n$RefreshReg$(_c2, \"Window\");\n$RefreshReg$(_c3, \"ProcessWindow\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vV2luZG93TWFuYWdlci9Qcm9jZXNzV2luZG93LnRzeD82Y2MwIl0sIm5hbWVzIjpbIldpbmRvdyIsImR5bmFtaWMiLCJ3aW5kb3daaW5kZXgiLCJiYXNlWmluZGV4Iiwid2luZG93c1ppbmRleExldmVsIiwiemluZGV4TGV2ZWxTaXplIiwiUHJvY2Vzc1dpbmRvdyIsImxvYWRlciIsIkFwcCIsImxvYWRlZEFwcE9wdGlvbnMiLCJsb2FkZXJPcHRpb25zIiwiZGVmYXVsdFdpZHRoIiwid2lkdGgiLCJkZWZhdWx0SGVpZ2h0IiwiaGVpZ2h0IiwiYmdDb2xvciIsImluaXRpYWxIZWlnaHQiLCJpY29uIiwiaWQiLCJsYXVuY2hFbGVtZW50IiwibG9ja0FzcGVjdFJhdGlvIiwibWF4aW1pemVkIiwibWluaW1pemVkIiwibmFtZSIsInRhc2tiYXJFbGVtZW50IiwiaW5pdGlhbFdpZHRoIiwid2luZG93ZWQiLCJ4IiwieSIsInVzZUNvbnRleHQiLCJTZXNzaW9uQ29udGV4dCIsImZvcmVncm91bmQiLCJnZXRTdGF0ZSIsInNhdmVTdGF0ZSIsInNlc3Npb24iLCJmb3JlZ3JvdW5kSWQiLCJzdGFja09yZGVyIiwiUHJvY2Vzc0NvbnRleHQiLCJwcm9jZXNzZXMiLCJjbG9zZSIsIm1heGltaXplIiwibWluaW1pemUiLCJwb3NpdGlvbiIsInJlc3RvcmUiLCJzaXplIiwidXNlU3RhdGUiLCJtYXhpbWl6ZVdpbmRvdyIsInNldE1heGltaXplV2luZG93IiwicHJldmlvdXNYIiwicHJldmlvdXNZIiwiZ2V0TWF4RGltZW5zaW9ucyIsInVzZU1lbW8iLCJNYXRoIiwiZmxvb3IiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJUQVNLQkFSX0hFSUdIVCIsImRlZmF1bHRYIiwiZGVmYXVsdFkiLCJ3aW5kb3dPcHRpb25zIiwib25NaW5pbWl6ZSIsIm9uTWF4aW1pemUiLCJvbkNsb3NlIiwib25Gb2N1cyIsIm9uQmx1ciIsImV2ZW50IiwicmVsYXRlZFRhcmdldCIsInVwZGF0ZVBvc2l0aW9uIiwiekluZGV4Iiwic2xpY2UiLCJyZXZlcnNlIiwiaW5kZXhPZiIsInVzZUVmZmVjdCIsImdldE5leHRWaXNpYmxlV2luZG93IiwiZmlsdGVyIiwic3RhY2tJZCIsImluY2x1ZGVzIiwic2V0VGltZW91dCIsIk1BWElNSVpFX0FOSU1BVElPTl9TUEVFRF9JTl9TRUNPTkRTIiwiTUlMTElTRUNPTkRTX0lOX1NFQ09ORCIsInN0eWxlcyIsImFuaW1hdGVkV2luZG93cyIsImZvcmVncm91bmRaaW5kZXgiLCJ3aW5kb3dNb3Rpb25TZXR0aW5ncyIsImluaXRpYWxYIiwiaW5pdGlhbFkiLCJhbmltYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBSUE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBR0MsbURBQU87QUFBQSxTQUFDLDZLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBQVEsOEZBQVI7QUFBQTtBQUFBLGNBQVEsMENBQVI7QUFBQTtBQUFBLEVBQXRCO01BQU1ELE07QUFFTixJQUFNRSxZQUFZLEdBQUdDLDJEQUFVLEdBQUdDLG1FQUFrQixHQUFHQyxnRUFBdkQ7O0FBRUEsSUFBTUMsYUFBZ0MsR0FBRyxTQUFuQ0EsYUFBbUMsT0FvQm5DO0FBQUE7O0FBQUEseUJBbkJKQyxNQW1CSTtBQUFBLE1BbEJNQyxHQWtCTixlQWxCRkQsTUFrQkU7QUFBQSxNQWpCRkUsZ0JBaUJFLGVBakJGQSxnQkFpQkU7QUFBQSwwQ0FoQkZDLGFBZ0JFO0FBQUEsTUFoQnNCQyxZQWdCdEIseUJBaEJlQyxLQWdCZjtBQUFBLE1BaEI0Q0MsYUFnQjVDLHlCQWhCb0NDLE1BZ0JwQztBQUFBLE1BZEpDLE9BY0ksUUFkSkEsT0FjSTtBQUFBLE1BYklDLGFBYUosUUFiSkYsTUFhSTtBQUFBLE1BWkpHLElBWUksUUFaSkEsSUFZSTtB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YSxFQUFiQSxhQWJ1QjtBQWN2QmtELFVBQU0sRUFBRVQsYUFBYSxDQUFDUztBQWRDLEdBQUQsQ0FSMUI7QUFBQSxjQXlCRzNDLFFBQVEsZ0JBQ1AscUVBQUMsTUFBRDtBQUNFLFVBQUksRUFBRVQsSUFEUjtBQUVFLFVBQUksRUFBRU0sSUFGUjtBQUdFLGFBQU8sRUFBRVIsT0FIWDtBQUlFLHFCQUFlLEVBQUVLLGVBSm5CO0FBS0UsZ0JBQVUsRUFBRXdCLElBQUksQ0FBQzFCLEVBQUQ7QUFMbEIsT0FNTTBDLGFBTk47QUFBQSw2QkFRRSxxRUFBQyxHQUFELGtDQUFTbkQsZ0JBQVQsR0FBK0JtRCxhQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURPLGdCQVlQLHFFQUFDLEdBQUQsa0NBQVNuRCxnQkFBVCxHQUErQm1ELGFBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFyQ0osTUFDTzFDLEVBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMENELENBcEpEOztHQUFNWixhOztNQUFBQSxhO0FBc0pTQSw0RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU3lzdGVtL1dpbmRvd01hbmFnZXIvUHJvY2Vzc1dpbmRvdy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL1N5c3RlbS9XaW5kb3dNYW5hZ2VyL1dpbmRvd01hbmFnZXIubW9kdWxlLnNjc3MnO1xuXG5pbXBvcnQgdHlwZSB7IFByb2Nlc3MgfSBmcm9tICdAL3V0aWxzL3Byb2Nlc3MnO1xuXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuaW1wb3J0IHtcbiAgYmFzZVppbmRleCxcbiAgZm9yZWdyb3VuZFppbmRleCxcbiAgTUFYSU1JWkVfQU5JTUFUSU9OX1NQRUVEX0lOX1NFQ09ORFMsXG4gIE1JTExJU0VDT05EU19JTl9TRUNPTkQsXG4gIFRBU0tCQVJfSEVJR0hULFxuICB3aW5kb3dzWmluZGV4TGV2ZWwsXG4gIHppbmRleExldmVsU2l6ZVxufSBmcm9tICdAL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBnZXROZXh0VmlzaWJsZVdpbmRvdywgZ2V0TWF4RGltZW5zaW9ucyB9IGZyb20gJ0AvdXRpbHMvd2luZG93bWFuYWdlcic7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IFByb2Nlc3NDb250ZXh0IH0gZnJvbSAnQC9jb250ZXh0cy9Qcm9jZXNzTWFuYWdlcic7XG5pbXBvcnQgeyBTZXNzaW9uQ29udGV4dCB9IGZyb20gJ0AvY29udGV4dHMvU2Vzc2lvbk1hbmFnZXInO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHdpbmRvd01vdGlvblNldHRpbmdzIH0gZnJvbSAnQC91dGlscy9tb3Rpb25zJztcblxuY29uc3QgV2luZG93ID0gZHluYW1pYyhpbXBvcnQoJ0AvY29tcG9uZW50cy9TeXN0ZW0vV2luZG93TWFuYWdlci9XaW5kb3cnKSk7XG5cbmNvbnN0IHdpbmRvd1ppbmRleCA9IGJhc2VaaW5kZXggKyB3aW5kb3dzWmluZGV4TGV2ZWwgKiB6aW5kZXhMZXZlbFNpemU7XG5cbmNvbnN0IFByb2Nlc3NXaW5kb3c6IFJlYWN0LkZDPFByb2Nlc3M+ID0gKHtcbiAgbG9hZGVyOiB7XG4gICAgbG9hZGVyOiBBcHAsXG4gICAgbG9hZGVkQXBwT3B0aW9ucyxcbiAgICBsb2FkZXJPcHRpb25zOiB7IHdpZHRoOiBkZWZhdWx0V2lkdGgsIGhlaWdodDogZGVmYXVsdEhlaWdodCB9XG4gIH0sXG4gIGJnQ29sb3IsXG4gIGhlaWdodDogaW5pdGlhbEhlaWdodCxcbiAgaWNvbixcbiAgaWQsXG4gIGxhdW5jaEVsZW1lbnQsXG4gIGxvY2tBc3BlY3RSYXRpbyxcbiAgbWF4aW1pemVkLFxuICBtaW5pbWl6ZWQsXG4gIG5hbWUsXG4gIHRhc2tiYXJFbGVtZW50LFxuICB3aWR0aDogaW5pdGlhbFdpZHRoLFxuICB3aW5kb3dlZCxcbiAgeCxcbiAgeVxufSkgPT4ge1xuICBjb25zdCB7XG4gICAgZm9yZWdyb3VuZCxcbiAgICBnZXRTdGF0ZSxcbiAgICBzYXZlU3RhdGUsXG4gICAgc2Vzc2lvbjogeyBmb3JlZ3JvdW5kSWQsIHN0YWNrT3JkZXIgfVxuICB9ID0gdXNlQ29udGV4dChTZXNzaW9uQ29udGV4dCk7XG4gIGNvbnN0IHtcbiAgICBwcm9jZXNzZXMsXG4gICAgY2xvc2UsXG4gICAgbWF4aW1pemUsXG4gICAgbWluaW1pemUsXG4gICAgcG9zaXRpb24sXG4gICAgcmVzdG9yZSxcbiAgICBzaXplXG4gIH0gPSB1c2VDb250ZXh0KFByb2Nlc3NDb250ZXh0KTtcbiAgY29uc3QgW21heGltaXplV2luZG93LCBzZXRNYXhpbWl6ZVdpbmRvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHsgeDogcHJldmlvdXNYLCB5OiBwcmV2aW91c1kgfSA9IGdldFN0YXRlKHtcbiAgICBpZFxuICB9KTtcbiAgY29uc3QgeyBoZWlnaHQsIHdpZHRoIH0gPSBnZXRNYXhEaW1lbnNpb25zKFxuICAgIGluaXRpYWxXaWR0aCxcbiAgICBpbml0aWFsSGVpZ2h0LFxuICAgIGRlZmF1bHRXaWR0aCxcbiAgICBkZWZhdWx0SGVpZ2h0LFxuICAgIGxvY2tBc3BlY3RSYXRpb1xuICApO1xuICBjb25zdCB7IHg6IGRlZmF1bHRYLCB5OiBkZWZhdWx0WSB9ID0gdXNlTWVtbyhcbiAgICAoKSA9PiAoe1xuICAgICAgeDogTWF0aC5mbG9vcigod2luZG93LmlubmVyV2lkdGggLSB3aWR0aCkgLyAyKSxcbiAgICAgIHk6IE1hdGguZmxvb3IoKCh3aW5kb3cuaW5uZXJIZWlnaHQgLSBUQVNLQkFSX0hFSUdIVCkgLSBoZWlnaHQpIC8gMilcbiAgICB9KSxcbiAgICBbXVxuICApO1xuICBjb25zdCB3aW5kb3dPcHRpb25zID0ge1xuICAgIG9uTWluaW1pemU6ICgpID0+IG1pbmltaXplKGlkKSxcbiAgICBvbk1heGltaXplOiAoKSA9PiAobWF4aW1pemVkID8gcmVzdG9yZShpZCwgJ21heGltaXplZCcpIDogbWF4aW1pemUoaWQpKSxcbiAgICBvbkNsb3NlOiAoKSA9PiB7XG4gICAgICBzYXZlU3RhdGUoe1xuICAgICAgICBoZWlnaHQsXG4gICAgICAgIGlkLFxuICAgICAgICB3aWR0aCxcbiAgICAgICAgeDogIXByZXZpb3VzWCA/IGRlZmF1bHRYICsgeCA6IHgsXG4gICAgICAgIHk6ICFwcmV2aW91c1kgPyBkZWZhdWx0WSArIHkgOiB5XG4gICAgICB9KTtcbiAgICAgIGNsb3NlKGlkKTtcbiAgICB9LFxuICAgIG9uRm9jdXM6ICgpID0+IGZvcmVncm91bmQoaWQpLFxuICAgIG9uQmx1cjogKGV2ZW50OiBSZWFjdC5Gb2N1c0V2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQucmVsYXRlZFRhcmdldCAhPT0gdGFza2JhckVsZW1lbnQpIHtcbiAgICAgICAgZm9yZWdyb3VuZCgnJyk7XG4gICAgICB9XG4gICAgfSxcbiAgICB1cGRhdGVQb3NpdGlvbjogcG9zaXRpb24oaWQpLFxuICAgIHpJbmRleDogd2luZG93WmluZGV4ICsgc3RhY2tPcmRlci5zbGljZSgpLnJldmVyc2UoKS5pbmRleE9mKGlkKSxcbiAgICBtYXhpbWl6ZWQ6IG1heGltaXplV2luZG93LFxuICAgIG1pbmltaXplZCxcbiAgICBpZCxcbiAgICBoZWlnaHQsXG4gICAgd2lkdGhcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChmb3JlZ3JvdW5kSWQgPT09IGlkICYmIG1pbmltaXplZCkge1xuICAgICAgZm9yZWdyb3VuZChcbiAgICAgICAgZ2V0TmV4dFZpc2libGVXaW5kb3coXG4gICAgICAgICAgcHJvY2Vzc2VzLFxuICAgICAgICAgIHN0YWNrT3JkZXIuZmlsdGVyKChzdGFja0lkKSA9PiBzdGFja0lkICE9PSBpZClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKCFzdGFja09yZGVyLmluY2x1ZGVzKGlkKSkge1xuICAgICAgZm9yZWdyb3VuZChnZXROZXh0VmlzaWJsZVdpbmRvdyhwcm9jZXNzZXMsIHN0YWNrT3JkZXIpKTtcbiAgICB9XG4gIH0sIFtmb3JlZ3JvdW5kSWQsIGlkLCBtaW5pbWl6ZWQsIHByb2Nlc3Nlcywgc3RhY2tPcmRlcl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG1heGltaXplZCkge1xuICAgICAgc2V0TWF4aW1pemVXaW5kb3codHJ1ZSk7XG4gICAgfSBlbHNlIGlmIChtYXhpbWl6ZVdpbmRvdykge1xuICAgICAgc2V0VGltZW91dChcbiAgICAgICAgKCkgPT4gc2V0TWF4aW1pemVXaW5kb3coZmFsc2UpLFxuICAgICAgICBNQVhJTUlaRV9BTklNQVRJT05fU1BFRURfSU5fU0VDT05EUyAqIE1JTExJU0VDT05EU19JTl9TRUNPTkRcbiAgICAgICk7XG4gICAgfVxuICB9LCBbbWF4aW1pemVkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmFydGljbGVcbiAgICAgIGtleT17aWR9XG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5hbmltYXRlZFdpbmRvd3N9XG4gICAgICBzdHlsZT17e1xuICAgICAgICB6SW5kZXg6IGZvcmVncm91bmRJZCA9PT0gaWQgPyBmb3JlZ3JvdW5kWmluZGV4IDogd2luZG93T3B0aW9ucy56SW5kZXgsXG4gICAgICAgIGhlaWdodCxcbiAgICAgICAgd2lkdGhcbiAgICAgIH19XG4gICAgICB7Li4ud2luZG93TW90aW9uU2V0dGluZ3Moe1xuICAgICAgICBpbml0aWFsWDogcHJldmlvdXNYIHx8IGRlZmF1bHRYLFxuICAgICAgICBpbml0aWFsWTogcHJldmlvdXNZIHx8IGRlZmF1bHRZLFxuICAgICAgICBhbmltYXRpb246XG4gICAgICAgICAgKG1heGltaXplZCAmJiBtaW5pbWl6ZWQgJiYgJ21heG1pbicpIHx8XG4gICAgICAgICAgKG1heGltaXplZCAmJiAnbWF4aW1pemVkJykgfHxcbiAgICAgICAgICAobWluaW1pemVkICYmICdtaW5pbWl6ZWQnKSB8fFxuICAgICAgICAgICdzdGFydCcsXG4gICAgICAgIGhlaWdodCxcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIHgsXG4gICAgICAgIHksXG4gICAgICAgIHRhc2tiYXJFbGVtZW50LFxuICAgICAgICBsYXVuY2hFbGVtZW50LFxuICAgICAgICB6SW5kZXg6IHdpbmRvd09wdGlvbnMuekluZGV4XG4gICAgICB9KX1cbiAgICA+XG4gICAgICB7d2luZG93ZWQgPyAoXG4gICAgICAgIDxXaW5kb3dcbiAgICAgICAgICBpY29uPXtpY29ufVxuICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgYmdDb2xvcj17YmdDb2xvcn1cbiAgICAgICAgICBsb2NrQXNwZWN0UmF0aW89e2xvY2tBc3BlY3RSYXRpb31cbiAgICAgICAgICB1cGRhdGVTaXplPXtzaXplKGlkKX1cbiAgICAgICAgICB7Li4ud2luZG93T3B0aW9uc31cbiAgICAgICAgPlxuICAgICAgICAgIDxBcHAgey4uLmxvYWRlZEFwcE9wdGlvbnN9IHsuLi53aW5kb3dPcHRpb25zfSAvPlxuICAgICAgICA8L1dpbmRvdz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxBcHAgey4uLmxvYWRlZEFwcE9wdGlvbnN9IHsuLi53aW5kb3dPcHRpb25zfSAvPlxuICAgICAgKX1cbiAgICA8L21vdGlvbi5hcnRpY2xlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvY2Vzc1dpbmRvdztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/System/WindowManager/ProcessWindow.tsx\n");

/***/ }),

/***/ "./utils/windowmanager.ts":
/*!********************************!*\
  !*** ./utils/windowmanager.ts ***!
  \********************************/
/*! exports provided: getMaxDimensions, getNextVisibleWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMaxDimensions\", function() { return getMaxDimensions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNextVisibleWindow\", function() { return getNextVisibleWindow; });\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/constants */ \"./utils/constants.ts\");\n\nvar getMaxDimensions = function getMaxDimensions(width, height) {\n  var defaultWidth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n  var defaultHeight = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;\n  var lockAspectRatio = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;\n\n  if (width === defaultWidth && height === defaultHeight) {\n    var PADDING = _utils_constants__WEBPACK_IMPORTED_MODULE_0__[\"WINDOW_PADDING\"] * 2;\n    var maxWidth = window.innerWidth - PADDING;\n    var maxHeight = window.innerHeight - _utils_constants__WEBPACK_IMPORTED_MODULE_0__[\"TASKBAR_HEIGHT\"] - PADDING;\n\n    if (lockAspectRatio) {\n      var aspectLockedHeight = height / width * Math.min(maxWidth, width);\n\n      if (aspectLockedHeight > maxHeight) {\n        maxWidth = maxHeight / (height / width);\n      } else {\n        maxHeight = aspectLockedHeight;\n      }\n    }\n\n    return {\n      height: Math.ceil(Math.min(maxHeight, height)),\n      width: Math.ceil(Math.min(maxWidth, width))\n    };\n  }\n\n  return {\n    height: height,\n    width: width\n  };\n};\nvar getNextVisibleWindow = function getNextVisibleWindow(processes, stackOrder) {\n  var visibleProcessId = stackOrder.find(function (stackId) {\n    return processes.find(function (process) {\n      return process.id === stackId && !process.minimized;\n    });\n  });\n  return visibleProcessId || '';\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvd2luZG93bWFuYWdlci50cz8xNDRiIl0sIm5hbWVzIjpbImdldE1heERpbWVuc2lvbnMiLCJ3aWR0aCIsImhlaWdodCIsImRlZmF1bHRXaWR0aCIsImRlZmF1bHRIZWlnaHQiLCJsb2NrQXNwZWN0UmF0aW8iLCJQQURESU5HIiwiV0lORE9XX1BBRERJTkciLCJtYXhXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJtYXhIZWlnaHQiLCJpbm5lckhlaWdodCIsIlRBU0tCQVJfSEVJR0hUIiwiYXNwZWN0TG9ja2VkSGVpZ2h0IiwiTWF0aCIsIm1pbiIsImNlaWwiLCJnZXROZXh0VmlzaWJsZVdpbmRvdyIsInByb2Nlc3NlcyIsInN0YWNrT3JkZXIiLCJ2aXNpYmxlUHJvY2Vzc0lkIiwiZmluZCIsInN0YWNrSWQiLCJwcm9jZXNzIiwiaWQiLCJtaW5pbWl6ZWQiXSwibWFwcGluZ3MiOiJBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQzlCQyxLQUQ4QixFQUU5QkMsTUFGOEIsRUFNUTtBQUFBLE1BSHRDQyxZQUdzQyx1RUFIdkIsQ0FHdUI7QUFBQSxNQUZ0Q0MsYUFFc0MsdUVBRnRCLENBRXNCO0FBQUEsTUFEdENDLGVBQ3NDLHVFQURwQixLQUNvQjs7QUFDdEMsTUFBSUosS0FBSyxLQUFLRSxZQUFWLElBQTBCRCxNQUFNLEtBQUtFLGFBQXpDLEVBQXdEO0FBQ3RELFFBQU1FLE9BQU8sR0FBR0MsK0RBQWMsR0FBRyxDQUFqQztBQUNBLFFBQUlDLFFBQVEsR0FBR0MsTUFBTSxDQUFDQyxVQUFQLEdBQW9CSixPQUFuQztBQUNBLFFBQUlLLFNBQVMsR0FBR0YsTUFBTSxDQUFDRyxXQUFQLEdBQXFCQywrREFBckIsR0FBc0NQLE9BQXREOztBQUVBLFFBQUlELGVBQUosRUFBcUI7QUFDbkIsVUFBTVMsa0JBQWtCLEdBQUlaLE1BQU0sR0FBR0QsS0FBVixHQUFtQmMsSUFBSSxDQUFDQyxHQUFMLENBQVNSLFFBQVQsRUFBbUJQLEtBQW5CLENBQTlDOztBQUVBLFVBQUlhLGtCQUFrQixHQUFHSCxTQUF6QixFQUFvQztBQUNsQ0gsZ0JBQVEsR0FBR0csU0FBUyxJQUFJVCxNQUFNLEdBQUdELEtBQWIsQ0FBcEI7QUFDRCxPQUZELE1BRU87QUFDTFUsaUJBQVMsR0FBR0csa0JBQVo7QUFDRDtBQUNGOztBQUVELFdBQU87QUFDTFosWUFBTSxFQUFFYSxJQUFJLENBQUNFLElBQUwsQ0FBVUYsSUFBSSxDQUFDQyxHQUFMLENBQVNMLFNBQVQsRUFBb0JULE1BQXBCLENBQVYsQ0FESDtBQUVMRCxXQUFLLEVBQUVjLElBQUksQ0FBQ0UsSUFBTCxDQUFVRixJQUFJLENBQUNDLEdBQUwsQ0FBU1IsUUFBVCxFQUFtQlAsS0FBbkIsQ0FBVjtBQUZGLEtBQVA7QUFJRDs7QUFFRCxTQUFPO0FBQUVDLFVBQU0sRUFBTkEsTUFBRjtBQUFVRCxTQUFLLEVBQUxBO0FBQVYsR0FBUDtBQUNELENBN0JNO0FBK0JBLElBQU1pQixvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQ2xDQyxTQURrQyxFQUVsQ0MsVUFGa0MsRUFHdkI7QUFDWCxNQUFNQyxnQkFBZ0IsR0FBR0QsVUFBVSxDQUFDRSxJQUFYLENBQWdCLFVBQUNDLE9BQUQ7QUFBQSxXQUN2Q0osU0FBUyxDQUFDRyxJQUFWLENBQWUsVUFBQ0UsT0FBRDtBQUFBLGFBQWFBLE9BQU8sQ0FBQ0MsRUFBUixLQUFlRixPQUFmLElBQTBCLENBQUNDLE9BQU8sQ0FBQ0UsU0FBaEQ7QUFBQSxLQUFmLENBRHVDO0FBQUEsR0FBaEIsQ0FBekI7QUFJQSxTQUFPTCxnQkFBZ0IsSUFBSSxFQUEzQjtBQUNELENBVE0iLCJmaWxlIjoiLi91dGlscy93aW5kb3dtYW5hZ2VyLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBQcm9jZXNzZXMgfSBmcm9tICdAL3R5cGVzL3V0aWxzL3Byb2Nlc3NtYW5hZ2VyJztcblxuaW1wb3J0IHsgVEFTS0JBUl9IRUlHSFQsIFdJTkRPV19QQURESU5HIH0gZnJvbSAnQC91dGlscy9jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgZ2V0TWF4RGltZW5zaW9ucyA9IChcbiAgd2lkdGg6IG51bWJlcixcbiAgaGVpZ2h0OiBudW1iZXIsXG4gIGRlZmF1bHRXaWR0aCA9IDAsXG4gIGRlZmF1bHRIZWlnaHQgPSAwLFxuICBsb2NrQXNwZWN0UmF0aW8gPSBmYWxzZVxuKTogeyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9ID0+IHtcbiAgaWYgKHdpZHRoID09PSBkZWZhdWx0V2lkdGggJiYgaGVpZ2h0ID09PSBkZWZhdWx0SGVpZ2h0KSB7XG4gICAgY29uc3QgUEFERElORyA9IFdJTkRPV19QQURESU5HICogMjtcbiAgICBsZXQgbWF4V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAtIFBBRERJTkc7XG4gICAgbGV0IG1heEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIFRBU0tCQVJfSEVJR0hUIC0gUEFERElORztcblxuICAgIGlmIChsb2NrQXNwZWN0UmF0aW8pIHtcbiAgICAgIGNvbnN0IGFzcGVjdExvY2tlZEhlaWdodCA9IChoZWlnaHQgLyB3aWR0aCkgKiBNYXRoLm1pbihtYXhXaWR0aCwgd2lkdGgpO1xuXG4gICAgICBpZiAoYXNwZWN0TG9ja2VkSGVpZ2h0ID4gbWF4SGVpZ2h0KSB7XG4gICAgICAgIG1heFdpZHRoID0gbWF4SGVpZ2h0IC8gKGhlaWdodCAvIHdpZHRoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1heEhlaWdodCA9IGFzcGVjdExvY2tlZEhlaWdodDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgaGVpZ2h0OiBNYXRoLmNlaWwoTWF0aC5taW4obWF4SGVpZ2h0LCBoZWlnaHQpKSxcbiAgICAgIHdpZHRoOiBNYXRoLmNlaWwoTWF0aC5taW4obWF4V2lkdGgsIHdpZHRoKSlcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHsgaGVpZ2h0LCB3aWR0aCB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldE5leHRWaXNpYmxlV2luZG93ID0gKFxuICBwcm9jZXNzZXM6IFByb2Nlc3NlcyxcbiAgc3RhY2tPcmRlcjogc3RyaW5nW11cbik6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHZpc2libGVQcm9jZXNzSWQgPSBzdGFja09yZGVyLmZpbmQoKHN0YWNrSWQpID0+XG4gICAgcHJvY2Vzc2VzLmZpbmQoKHByb2Nlc3MpID0+IHByb2Nlc3MuaWQgPT09IHN0YWNrSWQgJiYgIXByb2Nlc3MubWluaW1pemVkKVxuICApO1xuXG4gIHJldHVybiB2aXNpYmxlUHJvY2Vzc0lkIHx8ICcnO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/windowmanager.ts\n");

/***/ })

}]);