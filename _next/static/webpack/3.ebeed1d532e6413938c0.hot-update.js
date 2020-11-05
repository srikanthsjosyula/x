webpackHotUpdate_N_E(3,{

/***/ "./components/System/WindowManager/ProcessWindow.tsx":
/*!***********************************************************!*\
  !*** ./components/System/WindowManager/ProcessWindow.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/System/WindowManager/WindowManager.module.scss */ \"./styles/System/WindowManager/WindowManager.module.scss\");\n/* harmony import */ var _styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/constants */ \"./utils/constants.ts\");\n/* harmony import */ var _utils_windowmanager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/windowmanager */ \"./utils/windowmanager.ts\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var _contexts_ProcessManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/contexts/ProcessManager */ \"./contexts/ProcessManager.tsx\");\n/* harmony import */ var _contexts_SessionManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/contexts/SessionManager */ \"./contexts/SessionManager.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _utils_motions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utils/motions */ \"./utils/motions.ts\");\n\n\n\nvar _jsxFileName = \"/Users/dustin/Git/x/components/System/WindowManager/ProcessWindow.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\nvar Window = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! @/components/System/WindowManager/Window */ \"./components/System/WindowManager/Window.tsx\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! @/components/System/WindowManager/Window */ \"./components/System/WindowManager/Window.tsx\")];\n    },\n    modules: ['@/components/System/WindowManager/Window']\n  }\n});\n_c2 = Window;\nvar windowZindex = _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"baseZindex\"] + _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"windowsZindexLevel\"] * _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"zindexLevelSize\"];\n\nvar ProcessWindow = function ProcessWindow(_ref) {\n  _s();\n\n  var _ref$loader = _ref.loader,\n      App = _ref$loader.loader,\n      loadedAppOptions = _ref$loader.loadedAppOptions,\n      _ref$loader$loaderOpt = _ref$loader.loaderOptions,\n      defaultWidth = _ref$loader$loaderOpt.width,\n      defaultHeight = _ref$loader$loaderOpt.height,\n      bgColor = _ref.bgColor,\n      initialHeight = _ref.height,\n      icon = _ref.icon,\n      id = _ref.id,\n      launchElement = _ref.launchElement,\n      lockAspectRatio = _ref.lockAspectRatio,\n      maximized = _ref.maximized,\n      minimized = _ref.minimized,\n      name = _ref.name,\n      taskbarElement = _ref.taskbarElement,\n      initialWidth = _ref.width,\n      windowed = _ref.windowed,\n      x = _ref.x,\n      y = _ref.y;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useContext\"])(_contexts_SessionManager__WEBPACK_IMPORTED_MODULE_8__[\"SessionContext\"]),\n      foreground = _useContext.foreground,\n      getState = _useContext.getState,\n      saveState = _useContext.saveState,\n      _useContext$session = _useContext.session,\n      foregroundId = _useContext$session.foregroundId,\n      stackOrder = _useContext$session.stackOrder;\n\n  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useContext\"])(_contexts_ProcessManager__WEBPACK_IMPORTED_MODULE_7__[\"ProcessContext\"]),\n      processes = _useContext2.processes,\n      close = _useContext2.close,\n      maximize = _useContext2.maximize,\n      minimize = _useContext2.minimize,\n      position = _useContext2.position,\n      restore = _useContext2.restore,\n      size = _useContext2.size;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useState\"])(false),\n      maximizeWindow = _useState[0],\n      setMaximizeWindow = _useState[1];\n\n  var _getState = getState({\n    id: id\n  }),\n      previousX = _getState.x,\n      previousY = _getState.y;\n\n  var _getMaxDimensions = Object(_utils_windowmanager__WEBPACK_IMPORTED_MODULE_5__[\"getMaxDimensions\"])(initialWidth, initialHeight, defaultWidth, defaultHeight, lockAspectRatio),\n      height = _getMaxDimensions.height,\n      width = _getMaxDimensions.width;\n\n  var _useMemo = Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useMemo\"])(function () {\n    return {\n      x: Math.floor(-(width / 2) + window.innerWidth * 0.5),\n      y: (window.innerHeight - _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"TASKBAR_HEIGHT\"] - height) / 2\n    };\n  }, []),\n      defaultX = _useMemo.x,\n      defaultY = _useMemo.y; // ((window.innerHeight - TASKBAR_HEIGHT) - height) / 2\n\n\n  console.log(defaultX, defaultY);\n  var windowOptions = {\n    onMinimize: function onMinimize() {\n      return minimize(id);\n    },\n    onMaximize: function onMaximize() {\n      return maximized ? restore(id, 'maximized') : maximize(id);\n    },\n    onClose: function onClose() {\n      saveState({\n        height: height,\n        id: id,\n        width: width,\n        x: !previousX ? defaultX + x : x,\n        y: !previousY ? defaultY + y : y\n      });\n      close(id);\n    },\n    onFocus: function onFocus() {\n      return foreground(id);\n    },\n    onBlur: function onBlur(event) {\n      if (event.relatedTarget !== taskbarElement) {\n        foreground('');\n      }\n    },\n    updatePosition: position(id),\n    zIndex: windowZindex + stackOrder.slice().reverse().indexOf(id),\n    maximized: maximizeWindow,\n    minimized: minimized,\n    id: id,\n    height: height,\n    width: width\n  };\n  Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useEffect\"])(function () {\n    if (foregroundId === id && minimized) {\n      foreground(Object(_utils_windowmanager__WEBPACK_IMPORTED_MODULE_5__[\"getNextVisibleWindow\"])(processes, stackOrder.filter(function (stackId) {\n        return stackId !== id;\n      })));\n    } else if (!stackOrder.includes(id)) {\n      foreground(Object(_utils_windowmanager__WEBPACK_IMPORTED_MODULE_5__[\"getNextVisibleWindow\"])(processes, stackOrder));\n    }\n  }, [foregroundId, id, minimized, processes, stackOrder]);\n  Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useEffect\"])(function () {\n    if (maximized) {\n      setMaximizeWindow(true);\n    } else if (maximizeWindow) {\n      setTimeout(function () {\n        return setMaximizeWindow(false);\n      }, _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"MAXIMIZE_ANIMATION_SPEED_IN_SECONDS\"] * _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"MILLISECONDS_IN_SECOND\"]);\n    }\n  }, [maximized]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_6__[\"motion\"].article, _objectSpread(_objectSpread({\n    className: _styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.animatedWindows,\n    style: {\n      zIndex: foregroundId === id ? _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"foregroundZindex\"] : windowOptions.zIndex,\n      height: height,\n      width: width\n    }\n  }, Object(_utils_motions__WEBPACK_IMPORTED_MODULE_10__[\"windowMotionSettings\"])({\n    initialX: previousX || defaultX,\n    initialY: previousY || defaultY,\n    animation: maximized && minimized && 'maxmin' || maximized && 'maximized' || minimized && 'minimized' || 'start',\n    height: height,\n    width: width,\n    x: x,\n    y: y,\n    taskbarElement: taskbarElement,\n    launchElement: launchElement,\n    zIndex: windowOptions.zIndex\n  })), {}, {\n    children: windowed ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Window, _objectSpread(_objectSpread({\n      icon: icon,\n      name: name,\n      bgColor: bgColor,\n      lockAspectRatio: lockAspectRatio,\n      updateSize: size(id)\n    }, windowOptions), {}, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(App, _objectSpread(_objectSpread({}, loadedAppOptions), windowOptions), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 169,\n        columnNumber: 11\n      }, _this)\n    }), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 161,\n      columnNumber: 9\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(App, _objectSpread(_objectSpread({}, loadedAppOptions), windowOptions), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 172,\n      columnNumber: 9\n    }, _this)\n  }), id, false, {\n    fileName: _jsxFileName,\n    lineNumber: 135,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ProcessWindow, \"7/dVr8p6VaMad/a1eqBeHszT6Xo=\");\n\n_c3 = ProcessWindow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProcessWindow);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Window$dynamic\");\n$RefreshReg$(_c2, \"Window\");\n$RefreshReg$(_c3, \"ProcessWindow\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vV2luZG93TWFuYWdlci9Qcm9jZXNzV2luZG93LnRzeD82Y2MwIl0sIm5hbWVzIjpbIldpbmRvdyIsImR5bmFtaWMiLCJ3aW5kb3daaW5kZXgiLCJiYXNlWmluZGV4Iiwid2luZG93c1ppbmRleExldmVsIiwiemluZGV4TGV2ZWxTaXplIiwiUHJvY2Vzc1dpbmRvdyIsImxvYWRlciIsIkFwcCIsImxvYWRlZEFwcE9wdGlvbnMiLCJsb2FkZXJPcHRpb25zIiwiZGVmYXVsdFdpZHRoIiwid2lkdGgiLCJkZWZhdWx0SGVpZ2h0IiwiaGVpZ2h0IiwiYmdDb2xvciIsImluaXRpYWxIZWlnaHQiLCJpY29uIiwiaWQiLCJsYXVuY2hFbGVtZW50IiwibG9ja0FzcGVjdFJhdGlvIiwibWF4aW1pemVkIiwibWluaW1pemVkIiwibmFtZSIsInRhc2tiYXJFbGVtZW50IiwiaW5pdGlhbFdpZHRoIiwid2luZG93ZWQiLCJ4IiwieSIsInVzZUNvbnRleHQiLCJTZXNzaW9uQ29udGV4dCIsImZvcmVncm91bmQiLCJnZXRTdGF0ZSIsInNhdmVTdGF0ZSIsInNlc3Npb24iLCJmb3JlZ3JvdW5kSWQiLCJzdGFja09yZGVyIiwiUHJvY2Vzc0NvbnRleHQiLCJwcm9jZXNzZXMiLCJjbG9zZSIsIm1heGltaXplIiwibWluaW1pemUiLCJwb3NpdGlvbiIsInJlc3RvcmUiLCJzaXplIiwidXNlU3RhdGUiLCJtYXhpbWl6ZVdpbmRvdyIsInNldE1heGltaXplV2luZG93IiwicHJldmlvdXNYIiwicHJldmlvdXNZIiwiZ2V0TWF4RGltZW5zaW9ucyIsInVzZU1lbW8iLCJNYXRoIiwiZmxvb3IiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJUQVNLQkFSX0hFSUdIVCIsImRlZmF1bHRYIiwiZGVmYXVsdFkiLCJjb25zb2xlIiwibG9nIiwid2luZG93T3B0aW9ucyIsIm9uTWluaW1pemUiLCJvbk1heGltaXplIiwib25DbG9zZSIsIm9uRm9jdXMiLCJvbkJsdXIiLCJldmVudCIsInJlbGF0ZWRUYXJnZXQiLCJ1cGRhdGVQb3NpdGlvbiIsInpJbmRleCIsInNsaWNlIiwicmV2ZXJzZSIsImluZGV4T2YiLCJ1c2VFZmZlY3QiLCJnZXROZXh0VmlzaWJsZVdpbmRvdyIsImZpbHRlciIsInN0YWNrSWQiLCJpbmNsdWRlcyIsInNldFRpbWVvdXQiLCJNQVhJTUlaRV9BTklNQVRJT05fU1BFRURfSU5fU0VDT05EUyIsIk1JTExJU0VDT05EU19JTl9TRUNPTkQiLCJzdHlsZXMiLCJhbmltYXRlZFdpbmRvd3MiLCJmb3JlZ3JvdW5kWmluZGV4Iiwid2luZG93TW90aW9uU2V0dGluZ3MiLCJpbml0aWFsWCIsImluaXRpYWxZIiwiYW5pbWF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUlBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLG1EQUFPO0FBQUEsU0FBQyw2S0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQUFRLDhGQUFSO0FBQUE7QUFBQSxjQUFRLDBDQUFSO0FBQUE7QUFBQSxFQUF0QjtNQUFNRCxNO0FBRU4sSUFBTUUsWUFBWSxHQUFHQywyREFBVSxHQUFHQyxtRUFBa0IsR0FBR0MsZ0VBQXZEOztBQUVBLElBQU1DLGFBQWdDLEdBQUcsU0FBbkNBLGFBQW1DLE9Bb0JuQztBQUFBOztBQUFBLHlCQW5CSkMsTUFtQkk7QUFBQSxNQWxCTUMsR0FrQk4sZUFsQkZELE1Ba0JFO0FBQUEsTUFqQkZFLGdCQWlCRSxlQWpCRkEsZ0JBaUJFO0FBQUEsMENBaEJGQyxhQWdCRTtBQUFBLE1BaEJzQkMsWUFnQnRCLHlCQWhCZUMsS0FnQmY7QUFBQSxNQWhCNENDLGFBZ0I1Qyx5QkFoQm9DQyxNQWdCcEM7QUFBQSxNQWRKQyxPQWNJLFFBZEpBLE9BY0k7QUFBQSxNQWJJQyxhQWFKLFFBYkpGLE1BYUk7QUFBQSxNQVpKRyxJ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QyxFQUFEQSxDQVh1QjtBQVl2Qkosa0JBQWMsRUFBZEEsY0FadUI7QUFhdkJMLGlCQUFhLEVBQWJBLGFBYnVCO0FBY3ZCb0QsVUFBTSxFQUFFVCxhQUFhLENBQUNTO0FBZEMsR0FBRCxDQVIxQjtBQUFBLGNBeUJHN0MsUUFBUSxnQkFDUCxxRUFBQyxNQUFEO0FBQ0UsVUFBSSxFQUFFVCxJQURSO0FBRUUsVUFBSSxFQUFFTSxJQUZSO0FBR0UsYUFBTyxFQUFFUixPQUhYO0FBSUUscUJBQWUsRUFBRUssZUFKbkI7QUFLRSxnQkFBVSxFQUFFd0IsSUFBSSxDQUFDMUIsRUFBRDtBQUxsQixPQU1NNEMsYUFOTjtBQUFBLDZCQVFFLHFFQUFDLEdBQUQsa0NBQVNyRCxnQkFBVCxHQUErQnFELGFBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRE8sZ0JBWVAscUVBQUMsR0FBRCxrQ0FBU3JELGdCQUFULEdBQStCcUQsYUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXJDSixNQUNPNUMsRUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEwQ0QsQ0F0SkQ7O0dBQU1aLGE7O01BQUFBLGE7QUF3SlNBLDRFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TeXN0ZW0vV2luZG93TWFuYWdlci9Qcm9jZXNzV2luZG93LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvU3lzdGVtL1dpbmRvd01hbmFnZXIvV2luZG93TWFuYWdlci5tb2R1bGUuc2Nzcyc7XG5cbmltcG9ydCB0eXBlIHsgUHJvY2VzcyB9IGZyb20gJ0AvdXRpbHMvcHJvY2Vzcyc7XG5cbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XG5pbXBvcnQge1xuICBiYXNlWmluZGV4LFxuICBmb3JlZ3JvdW5kWmluZGV4LFxuICBNQVhJTUlaRV9BTklNQVRJT05fU1BFRURfSU5fU0VDT05EUyxcbiAgTUlMTElTRUNPTkRTX0lOX1NFQ09ORCxcbiAgVEFTS0JBUl9IRUlHSFQsXG4gIHdpbmRvd3NaaW5kZXhMZXZlbCxcbiAgemluZGV4TGV2ZWxTaXplXG59IGZyb20gJ0AvdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCB7IGdldE5leHRWaXNpYmxlV2luZG93LCBnZXRNYXhEaW1lbnNpb25zIH0gZnJvbSAnQC91dGlscy93aW5kb3dtYW5hZ2VyJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgUHJvY2Vzc0NvbnRleHQgfSBmcm9tICdAL2NvbnRleHRzL1Byb2Nlc3NNYW5hZ2VyJztcbmltcG9ydCB7IFNlc3Npb25Db250ZXh0IH0gZnJvbSAnQC9jb250ZXh0cy9TZXNzaW9uTWFuYWdlcic7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2luZG93TW90aW9uU2V0dGluZ3MgfSBmcm9tICdAL3V0aWxzL21vdGlvbnMnO1xuXG5jb25zdCBXaW5kb3cgPSBkeW5hbWljKGltcG9ydCgnQC9jb21wb25lbnRzL1N5c3RlbS9XaW5kb3dNYW5hZ2VyL1dpbmRvdycpKTtcblxuY29uc3Qgd2luZG93WmluZGV4ID0gYmFzZVppbmRleCArIHdpbmRvd3NaaW5kZXhMZXZlbCAqIHppbmRleExldmVsU2l6ZTtcblxuY29uc3QgUHJvY2Vzc1dpbmRvdzogUmVhY3QuRkM8UHJvY2Vzcz4gPSAoe1xuICBsb2FkZXI6IHtcbiAgICBsb2FkZXI6IEFwcCxcbiAgICBsb2FkZWRBcHBPcHRpb25zLFxuICAgIGxvYWRlck9wdGlvbnM6IHsgd2lkdGg6IGRlZmF1bHRXaWR0aCwgaGVpZ2h0OiBkZWZhdWx0SGVpZ2h0IH1cbiAgfSxcbiAgYmdDb2xvcixcbiAgaGVpZ2h0OiBpbml0aWFsSGVpZ2h0LFxuICBpY29uLFxuICBpZCxcbiAgbGF1bmNoRWxlbWVudCxcbiAgbG9ja0FzcGVjdFJhdGlvLFxuICBtYXhpbWl6ZWQsXG4gIG1pbmltaXplZCxcbiAgbmFtZSxcbiAgdGFza2JhckVsZW1lbnQsXG4gIHdpZHRoOiBpbml0aWFsV2lkdGgsXG4gIHdpbmRvd2VkLFxuICB4LFxuICB5XG59KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBmb3JlZ3JvdW5kLFxuICAgIGdldFN0YXRlLFxuICAgIHNhdmVTdGF0ZSxcbiAgICBzZXNzaW9uOiB7IGZvcmVncm91bmRJZCwgc3RhY2tPcmRlciB9XG4gIH0gPSB1c2VDb250ZXh0KFNlc3Npb25Db250ZXh0KTtcbiAgY29uc3Qge1xuICAgIHByb2Nlc3NlcyxcbiAgICBjbG9zZSxcbiAgICBtYXhpbWl6ZSxcbiAgICBtaW5pbWl6ZSxcbiAgICBwb3NpdGlvbixcbiAgICByZXN0b3JlLFxuICAgIHNpemVcbiAgfSA9IHVzZUNvbnRleHQoUHJvY2Vzc0NvbnRleHQpO1xuICBjb25zdCBbbWF4aW1pemVXaW5kb3csIHNldE1heGltaXplV2luZG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyB4OiBwcmV2aW91c1gsIHk6IHByZXZpb3VzWSB9ID0gZ2V0U3RhdGUoe1xuICAgIGlkXG4gIH0pO1xuICBjb25zdCB7IGhlaWdodCwgd2lkdGggfSA9IGdldE1heERpbWVuc2lvbnMoXG4gICAgaW5pdGlhbFdpZHRoLFxuICAgIGluaXRpYWxIZWlnaHQsXG4gICAgZGVmYXVsdFdpZHRoLFxuICAgIGRlZmF1bHRIZWlnaHQsXG4gICAgbG9ja0FzcGVjdFJhdGlvXG4gICk7XG4gIGNvbnN0IHsgeDogZGVmYXVsdFgsIHk6IGRlZmF1bHRZIH0gPSB1c2VNZW1vKFxuICAgICgpID0+ICh7XG4gICAgICB4OiBNYXRoLmZsb29yKC0od2lkdGggLyAyKSArIHdpbmRvdy5pbm5lcldpZHRoICogMC41KSxcbiAgICAgIHk6ICgod2luZG93LmlubmVySGVpZ2h0IC0gVEFTS0JBUl9IRUlHSFQpIC0gaGVpZ2h0KSAvIDJcbiAgICB9KSxcbiAgICBbXVxuICApO1xuICAvLyAoKHdpbmRvdy5pbm5lckhlaWdodCAtIFRBU0tCQVJfSEVJR0hUKSAtIGhlaWdodCkgLyAyXG4gIGNvbnNvbGUubG9nKGRlZmF1bHRYLCBkZWZhdWx0WSk7XG4gIGNvbnN0IHdpbmRvd09wdGlvbnMgPSB7XG4gICAgb25NaW5pbWl6ZTogKCkgPT4gbWluaW1pemUoaWQpLFxuICAgIG9uTWF4aW1pemU6ICgpID0+IChtYXhpbWl6ZWQgPyByZXN0b3JlKGlkLCAnbWF4aW1pemVkJykgOiBtYXhpbWl6ZShpZCkpLFxuICAgIG9uQ2xvc2U6ICgpID0+IHtcbiAgICAgIHNhdmVTdGF0ZSh7XG4gICAgICAgIGhlaWdodCxcbiAgICAgICAgaWQsXG4gICAgICAgIHdpZHRoLFxuICAgICAgICB4OiAhcHJldmlvdXNYID8gZGVmYXVsdFggKyB4IDogeCxcbiAgICAgICAgeTogIXByZXZpb3VzWSA/IGRlZmF1bHRZICsgeSA6IHlcbiAgICAgIH0pO1xuICAgICAgY2xvc2UoaWQpO1xuICAgIH0sXG4gICAgb25Gb2N1czogKCkgPT4gZm9yZWdyb3VuZChpZCksXG4gICAgb25CbHVyOiAoZXZlbnQ6IFJlYWN0LkZvY3VzRXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5yZWxhdGVkVGFyZ2V0ICE9PSB0YXNrYmFyRWxlbWVudCkge1xuICAgICAgICBmb3JlZ3JvdW5kKCcnKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHVwZGF0ZVBvc2l0aW9uOiBwb3NpdGlvbihpZCksXG4gICAgekluZGV4OiB3aW5kb3daaW5kZXggKyBzdGFja09yZGVyLnNsaWNlKCkucmV2ZXJzZSgpLmluZGV4T2YoaWQpLFxuICAgIG1heGltaXplZDogbWF4aW1pemVXaW5kb3csXG4gICAgbWluaW1pemVkLFxuICAgIGlkLFxuICAgIGhlaWdodCxcbiAgICB3aWR0aFxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGZvcmVncm91bmRJZCA9PT0gaWQgJiYgbWluaW1pemVkKSB7XG4gICAgICBmb3JlZ3JvdW5kKFxuICAgICAgICBnZXROZXh0VmlzaWJsZVdpbmRvdyhcbiAgICAgICAgICBwcm9jZXNzZXMsXG4gICAgICAgICAgc3RhY2tPcmRlci5maWx0ZXIoKHN0YWNrSWQpID0+IHN0YWNrSWQgIT09IGlkKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoIXN0YWNrT3JkZXIuaW5jbHVkZXMoaWQpKSB7XG4gICAgICBmb3JlZ3JvdW5kKGdldE5leHRWaXNpYmxlV2luZG93KHByb2Nlc3Nlcywgc3RhY2tPcmRlcikpO1xuICAgIH1cbiAgfSwgW2ZvcmVncm91bmRJZCwgaWQsIG1pbmltaXplZCwgcHJvY2Vzc2VzLCBzdGFja09yZGVyXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobWF4aW1pemVkKSB7XG4gICAgICBzZXRNYXhpbWl6ZVdpbmRvdyh0cnVlKTtcbiAgICB9IGVsc2UgaWYgKG1heGltaXplV2luZG93KSB7XG4gICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAoKSA9PiBzZXRNYXhpbWl6ZVdpbmRvdyhmYWxzZSksXG4gICAgICAgIE1BWElNSVpFX0FOSU1BVElPTl9TUEVFRF9JTl9TRUNPTkRTICogTUlMTElTRUNPTkRTX0lOX1NFQ09ORFxuICAgICAgKTtcbiAgICB9XG4gIH0sIFttYXhpbWl6ZWRdKTtcblxuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uYXJ0aWNsZVxuICAgICAga2V5PXtpZH1cbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFuaW1hdGVkV2luZG93c31cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHpJbmRleDogZm9yZWdyb3VuZElkID09PSBpZCA/IGZvcmVncm91bmRaaW5kZXggOiB3aW5kb3dPcHRpb25zLnpJbmRleCxcbiAgICAgICAgaGVpZ2h0LFxuICAgICAgICB3aWR0aFxuICAgICAgfX1cbiAgICAgIHsuLi53aW5kb3dNb3Rpb25TZXR0aW5ncyh7XG4gICAgICAgIGluaXRpYWxYOiBwcmV2aW91c1ggfHwgZGVmYXVsdFgsXG4gICAgICAgIGluaXRpYWxZOiBwcmV2aW91c1kgfHwgZGVmYXVsdFksXG4gICAgICAgIGFuaW1hdGlvbjpcbiAgICAgICAgICAobWF4aW1pemVkICYmIG1pbmltaXplZCAmJiAnbWF4bWluJykgfHxcbiAgICAgICAgICAobWF4aW1pemVkICYmICdtYXhpbWl6ZWQnKSB8fFxuICAgICAgICAgIChtaW5pbWl6ZWQgJiYgJ21pbmltaXplZCcpIHx8XG4gICAgICAgICAgJ3N0YXJ0JyxcbiAgICAgICAgaGVpZ2h0LFxuICAgICAgICB3aWR0aCxcbiAgICAgICAgeCxcbiAgICAgICAgeSxcbiAgICAgICAgdGFza2JhckVsZW1lbnQsXG4gICAgICAgIGxhdW5jaEVsZW1lbnQsXG4gICAgICAgIHpJbmRleDogd2luZG93T3B0aW9ucy56SW5kZXhcbiAgICAgIH0pfVxuICAgID5cbiAgICAgIHt3aW5kb3dlZCA/IChcbiAgICAgICAgPFdpbmRvd1xuICAgICAgICAgIGljb249e2ljb259XG4gICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICBiZ0NvbG9yPXtiZ0NvbG9yfVxuICAgICAgICAgIGxvY2tBc3BlY3RSYXRpbz17bG9ja0FzcGVjdFJhdGlvfVxuICAgICAgICAgIHVwZGF0ZVNpemU9e3NpemUoaWQpfVxuICAgICAgICAgIHsuLi53aW5kb3dPcHRpb25zfVxuICAgICAgICA+XG4gICAgICAgICAgPEFwcCB7Li4ubG9hZGVkQXBwT3B0aW9uc30gey4uLndpbmRvd09wdGlvbnN9IC8+XG4gICAgICAgIDwvV2luZG93PlxuICAgICAgKSA6IChcbiAgICAgICAgPEFwcCB7Li4ubG9hZGVkQXBwT3B0aW9uc30gey4uLndpbmRvd09wdGlvbnN9IC8+XG4gICAgICApfVxuICAgIDwvbW90aW9uLmFydGljbGU+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9jZXNzV2luZG93O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/System/WindowManager/ProcessWindow.tsx\n");

/***/ })

})