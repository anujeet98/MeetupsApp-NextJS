"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[meetupId]",{

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_meetups_MeetupDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/meetups/MeetupDetails */ \"./components/meetups/MeetupDetails.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst DUMMY_MEETUPS = [\n    {\n        id: 1,\n        image: \"https://apnayatra.com/wp-content/uploads/2023/08/Gateway-of-India-Mumbai8.jpg\",\n        title: \"First Meetup\",\n        address: \"Gateway of India, Mumbai\",\n        description: \"This is the first meetup\"\n    },\n    {\n        id: 2,\n        image: \"https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2019/07/Feature-Image-Radhanagar-Beach.jpg\",\n        title: \"Second Meetup\",\n        address: \"Radhanagar beach, Havelock Island\",\n        description: \"This is the second meetup\"\n    }\n];\nfunction MeetupDetailsPage() {\n    _s();\n    const meetupId = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().query.meetupId;\n    const meetupData = DUMMY_MEETUPS[meetupId - 1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupDetails__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        title: meetupData.title,\n        image: meetupData.image,\n        address: meetupData.address,\n        description: meetupData.description\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\anujeet\\\\Desktop\\\\work\\\\SHARPNER\\\\NEXTJS\\\\meetups project\\\\pages\\\\[meetupId]\\\\index.js\",\n        lineNumber: 11,\n        columnNumber: 12\n    }, this);\n}\n_s(MeetupDetailsPage, \"CeygcqajjFExIxFEzW4x/gfWEGQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = MeetupDetailsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupDetailsPage);\nvar _c;\n$RefreshReg$(_c, \"MeetupDetailsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXdDO0FBQzJCO0FBRW5FLE1BQU1FLGdCQUFnQjtJQUNsQjtRQUFDQyxJQUFJO1FBQUdDLE9BQU87UUFBaUZDLE9BQU87UUFBZ0JDLFNBQVM7UUFBNEJDLGFBQWE7SUFBMEI7SUFDbk07UUFBQ0osSUFBSTtRQUFHQyxPQUFPO1FBQWlIQyxPQUFPO1FBQWlCQyxTQUFTO1FBQXFDQyxhQUFhO0lBQTJCO0NBQ2pQO0FBQ0QsU0FBU0M7O0lBQ0wsTUFBTUMsV0FBV1Qsc0RBQVNBLEdBQUdVLEtBQUssQ0FBQ0QsUUFBUTtJQUMzQyxNQUFNRSxhQUFhVCxhQUFhLENBQUNPLFdBQVMsRUFBRTtJQUM1QyxxQkFBTyw4REFBQ1IseUVBQWFBO1FBQUNJLE9BQU9NLFdBQVdOLEtBQUs7UUFBRUQsT0FBT08sV0FBV1AsS0FBSztRQUFFRSxTQUFTSyxXQUFXTCxPQUFPO1FBQUVDLGFBQWFJLFdBQVdKLFdBQVc7Ozs7OztBQUM1STtHQUpTQzs7UUFDWVIsa0RBQVNBOzs7S0FEckJRO0FBS1QsK0RBQWVBLGlCQUFpQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzPzhmZjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBNZWV0dXBEZXRhaWxzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsc1wiO1xyXG5cclxuY29uc3QgRFVNTVlfTUVFVFVQUyA9IFtcclxuICAgIHtpZDogMSwgaW1hZ2U6ICdodHRwczovL2FwbmF5YXRyYS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjMvMDgvR2F0ZXdheS1vZi1JbmRpYS1NdW1iYWk4LmpwZycsIHRpdGxlOiAnRmlyc3QgTWVldHVwJywgYWRkcmVzczogJ0dhdGV3YXkgb2YgSW5kaWEsIE11bWJhaScsIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyB0aGUgZmlyc3QgbWVldHVwJ30sXHJcbiAgICB7aWQ6IDIsIGltYWdlOiAnaHR0cHM6Ly9pbWFnZXMudHJhdmVsYW5kbGVpc3VyZWFzaWEuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy9zaXRlcy8yLzIwMTkvMDcvRmVhdHVyZS1JbWFnZS1SYWRoYW5hZ2FyLUJlYWNoLmpwZycsIHRpdGxlOiAnU2Vjb25kIE1lZXR1cCcsIGFkZHJlc3M6ICdSYWRoYW5hZ2FyIGJlYWNoLCBIYXZlbG9jayBJc2xhbmQnLCBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgdGhlIHNlY29uZCBtZWV0dXAnfVxyXG5dO1xyXG5mdW5jdGlvbiBNZWV0dXBEZXRhaWxzUGFnZSAoKSB7XHJcbiAgICBjb25zdCBtZWV0dXBJZCA9IHVzZVJvdXRlcigpLnF1ZXJ5Lm1lZXR1cElkO1xyXG4gICAgY29uc3QgbWVldHVwRGF0YSA9IERVTU1ZX01FRVRVUFNbbWVldHVwSWQtMV07XHJcbiAgICByZXR1cm4gPE1lZXR1cERldGFpbHMgdGl0bGU9e21lZXR1cERhdGEudGl0bGV9IGltYWdlPXttZWV0dXBEYXRhLmltYWdlfSBhZGRyZXNzPXttZWV0dXBEYXRhLmFkZHJlc3N9IGRlc2NyaXB0aW9uPXttZWV0dXBEYXRhLmRlc2NyaXB0aW9ufS8+O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1lZXR1cERldGFpbHNQYWdlOyAgICJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJNZWV0dXBEZXRhaWxzIiwiRFVNTVlfTUVFVFVQUyIsImlkIiwiaW1hZ2UiLCJ0aXRsZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIk1lZXR1cERldGFpbHNQYWdlIiwibWVldHVwSWQiLCJxdWVyeSIsIm1lZXR1cERhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[meetupId]/index.js\n"));

/***/ })

});