"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Header: function() { return /* binding */ Header; },\n/* harmony export */   HeaderMenuLinks: function() { return /* binding */ HeaderMenuLinks; },\n/* harmony export */   menuLinks: function() { return /* binding */ menuLinks; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst menuLinks = [\n    {\n        label: \"Dashboard\",\n        href: \"/\",\n        icon: \"\"\n    },\n    {\n        label: \"Profile\",\n        href: \"/profile\",\n        icon: \"\"\n    }\n];\nconst HeaderMenuLinks = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: menuLinks.map((param)=>{\n            let { label, href, icon } = param;\n            const isActive = router.pathname === href;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: href,\n                    passHref: true,\n                    className: \"\".concat(isActive ? \"bg-[#FFC1CC] shadow-md\" : \"\", \" hover:bg-[#FFC1CC] hover:shadow-md focus:!bg-[#FFC1CC] active:!text-neutral py-1.5 px-3 text-sm rounded-full gap-2 grid grid-flow-col\"),\n                    children: [\n                        icon,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: label\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\blockchain\\\\Pendulum-Decentralized-Consultancy-ETHIndia_new\\\\MateDex\\\\packages\\\\nextjs\\\\components\\\\Header.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Projects\\\\blockchain\\\\Pendulum-Decentralized-Consultancy-ETHIndia_new\\\\MateDex\\\\packages\\\\nextjs\\\\components\\\\Header.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 13\n                }, undefined)\n            }, href, false, {\n                fileName: \"D:\\\\Projects\\\\blockchain\\\\Pendulum-Decentralized-Consultancy-ETHIndia_new\\\\MateDex\\\\packages\\\\nextjs\\\\components\\\\Header.tsx\",\n                lineNumber: 34,\n                columnNumber: 11\n            }, undefined);\n        })\n    }, void 0, false);\n};\n_s(HeaderMenuLinks, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = HeaderMenuLinks;\nconst Header = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sticky lg:static top-0 navbar bg-base-100 min-h-0 flex-shrink-0 justify-between z-20 shadow-md shadow-secondary px-0 sm:px-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"navbar-start w-auto lg:w-1/2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\",\n                        passHref: true,\n                        className: \"hidden text-xl font-bold lg:flex items-center gap-2 ml-4 mr-6 shrink-0\",\n                        children: \"Pendulum\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\blockchain\\\\Pendulum-Decentralized-Consultancy-ETHIndia_new\\\\MateDex\\\\packages\\\\nextjs\\\\components\\\\Header.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"hidden lg:flex lg:flex-nowrap menu menu-horizontal px-1 gap-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderMenuLinks, {}, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\blockchain\\\\Pendulum-Decentralized-Consultancy-ETHIndia_new\\\\MateDex\\\\packages\\\\nextjs\\\\components\\\\Header.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\blockchain\\\\Pendulum-Decentralized-Consultancy-ETHIndia_new\\\\MateDex\\\\packages\\\\nextjs\\\\components\\\\Header.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Projects\\\\blockchain\\\\Pendulum-Decentralized-Consultancy-ETHIndia_new\\\\MateDex\\\\packages\\\\nextjs\\\\components\\\\Header.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"navbar-end flex-grow mr-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.ConnectButton, {}, void 0, false, {\n                    fileName: \"D:\\\\Projects\\\\blockchain\\\\Pendulum-Decentralized-Consultancy-ETHIndia_new\\\\MateDex\\\\packages\\\\nextjs\\\\components\\\\Header.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\blockchain\\\\Pendulum-Decentralized-Consultancy-ETHIndia_new\\\\MateDex\\\\packages\\\\nextjs\\\\components\\\\Header.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Projects\\\\blockchain\\\\Pendulum-Decentralized-Consultancy-ETHIndia_new\\\\MateDex\\\\packages\\\\nextjs\\\\components\\\\Header.tsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = Header;\nvar _c, _c1;\n$RefreshReg$(_c, \"HeaderMenuLinks\");\n$RefreshReg$(_c1, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQzZCO0FBQ1c7QUFDZTtBQVNoRCxNQUFNRyxZQUE4QjtJQUN6QztRQUNFQyxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUYsT0FBTztRQUNQQyxNQUFNO1FBQ05DLE1BQU07SUFDUjtDQUNELENBQUM7QUFFSyxNQUFNQyxrQkFBa0I7O0lBQzdCLE1BQU1DLFNBQVNQLHNEQUFTQTtJQUV4QixxQkFDRTtrQkFDR0UsVUFBVU0sR0FBRyxDQUFDO2dCQUFDLEVBQUVMLEtBQUssRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUU7WUFDbkMsTUFBTUksV0FBV0YsT0FBT0csUUFBUSxLQUFLTjtZQUNyQyxxQkFDRSw4REFBQ087MEJBQ0MsNEVBQUNaLGtEQUFJQTtvQkFDSEssTUFBTUE7b0JBQ05RLFFBQVE7b0JBQ1JDLFdBQVcsR0FDUixPQURXSixXQUFXLDJCQUEyQixJQUNqRDs7d0JBRUZKO3NDQUNELDhEQUFDUztzQ0FBTVg7Ozs7Ozs7Ozs7OztlQVJGQzs7Ozs7UUFZYjs7QUFHTixFQUFFO0dBdkJXRTs7UUFDSU4sa0RBQVNBOzs7S0FEYk07QUF5Qk4sTUFBTVMsU0FBUztJQUNwQixxQkFDRSw4REFBQ0M7UUFBSUgsV0FBVTs7MEJBQ2IsOERBQUNHO2dCQUFJSCxXQUFVOztrQ0FDYiw4REFBQ2Qsa0RBQUlBO3dCQUFDSyxNQUFLO3dCQUFJUSxRQUFRO3dCQUFDQyxXQUFVO2tDQUF5RTs7Ozs7O2tDQUczRyw4REFBQ0k7d0JBQUdKLFdBQVU7a0NBQ1osNEVBQUNQOzs7Ozs7Ozs7Ozs7Ozs7OzBCQUdMLDhEQUFDVTtnQkFBSUgsV0FBVTswQkFJYiw0RUFBQ1osaUVBQWFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBSXRCLEVBQUU7TUFuQldjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyLnRzeD8wMzY4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBDb25uZWN0QnV0dG9uIH0gZnJvbSBcIkByYWluYm93LW1lL3JhaW5ib3draXRcIjtcclxuaW1wb3J0IHsgRmFVc2VyTGFyZ2UgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmE2XCI7XHJcblxyXG50eXBlIEhlYWRlck1lbnVMaW5rID0ge1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgaHJlZjogc3RyaW5nO1xyXG4gIGljb24/OiBSZWFjdC5SZWFjdE5vZGU7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbWVudUxpbmtzOiBIZWFkZXJNZW51TGlua1tdID0gW1xyXG4gIHtcclxuICAgIGxhYmVsOiBcIkRhc2hib2FyZFwiLFxyXG4gICAgaHJlZjogXCIvXCIsXHJcbiAgICBpY29uOiBcIlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6IFwiUHJvZmlsZVwiLFxyXG4gICAgaHJlZjogXCIvcHJvZmlsZVwiLFxyXG4gICAgaWNvbjogXCJcIixcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlck1lbnVMaW5rcyA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHttZW51TGlua3MubWFwKCh7IGxhYmVsLCBocmVmLCBpY29uIH0pID0+IHtcclxuICAgICAgICBjb25zdCBpc0FjdGl2ZSA9IHJvdXRlci5wYXRobmFtZSA9PT0gaHJlZjtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGxpIGtleT17aHJlZn0+XHJcbiAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgaHJlZj17aHJlZn1cclxuICAgICAgICAgICAgICBwYXNzSHJlZlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aXNBY3RpdmUgPyBcImJnLVsjRkZDMUNDXSBzaGFkb3ctbWRcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgIH0gaG92ZXI6YmctWyNGRkMxQ0NdIGhvdmVyOnNoYWRvdy1tZCBmb2N1czohYmctWyNGRkMxQ0NdIGFjdGl2ZTohdGV4dC1uZXV0cmFsIHB5LTEuNSBweC0zIHRleHQtc20gcm91bmRlZC1mdWxsIGdhcC0yIGdyaWQgZ3JpZC1mbG93LWNvbGB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7aWNvbn1cclxuICAgICAgICAgICAgICA8c3Bhbj57bGFiZWx9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3RpY2t5IGxnOnN0YXRpYyB0b3AtMCBuYXZiYXIgYmctYmFzZS0xMDAgbWluLWgtMCBmbGV4LXNocmluay0wIGp1c3RpZnktYmV0d2VlbiB6LTIwIHNoYWRvdy1tZCBzaGFkb3ctc2Vjb25kYXJ5IHB4LTAgc206cHgtMlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1zdGFydCB3LWF1dG8gbGc6dy0xLzJcIj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiIHBhc3NIcmVmIGNsYXNzTmFtZT1cImhpZGRlbiB0ZXh0LXhsIGZvbnQtYm9sZCBsZzpmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBtbC00IG1yLTYgc2hyaW5rLTBcIj5cclxuICAgICAgICAgIFBlbmR1bHVtXHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJoaWRkZW4gbGc6ZmxleCBsZzpmbGV4LW5vd3JhcCBtZW51IG1lbnUtaG9yaXpvbnRhbCBweC0xIGdhcC0yXCI+XHJcbiAgICAgICAgICA8SGVhZGVyTWVudUxpbmtzIC8+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWVuZCBmbGV4LWdyb3cgbXItNFwiPlxyXG4gICAgICAgIHsvKiA8TGluayBocmVmPVwiL3Byb2ZpbGVcIiA+XHJcbiAgICAgICAgICA8RmFVc2VyTGFyZ2UgY2xhc3NOYW1lPVwidy02IGgtNiBtci00IHByb2ZpbGUtaWNvbiBcIiAvPlxyXG4gICAgICAgIDwvTGluaz4gKi99XHJcbiAgICAgICAgPENvbm5lY3RCdXR0b24gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZVJvdXRlciIsIkNvbm5lY3RCdXR0b24iLCJtZW51TGlua3MiLCJsYWJlbCIsImhyZWYiLCJpY29uIiwiSGVhZGVyTWVudUxpbmtzIiwicm91dGVyIiwibWFwIiwiaXNBY3RpdmUiLCJwYXRobmFtZSIsImxpIiwicGFzc0hyZWYiLCJjbGFzc05hbWUiLCJzcGFuIiwiSGVhZGVyIiwiZGl2IiwidWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.tsx\n"));

/***/ })

});