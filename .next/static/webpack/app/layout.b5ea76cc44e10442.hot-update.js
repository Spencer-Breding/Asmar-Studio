"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/components/navbar.js":
/*!**********************************!*\
  !*** ./src/components/navbar.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/navbar.module.css */ \"(app-pages-browser)/./src/styles/navbar.module.css\");\n/* harmony import */ var _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst sectionIds = [\n    \"AboutUs\",\n    \"Capabilities\",\n    \"Gallery\",\n    \"Testimonials\",\n    \"Contact\"\n];\nfunction Navbar(props) {\n    _s();\n    const [openBurger, setOpenBurger] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // Moved state up to Navbar\n    const [firstClick, setFirstClick] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isFirstRender, setIsFirstRender] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const animationClass = openBurger && firstClick ? \"openLine\" : firstClick ? \"closeLine\" : \"\";\n    const closeBurger = ()=>{\n        setOpenBurger(false); // Function to close the burger menu\n    };\n    const toggleBurger = ()=>{\n        setOpenBurger(!openBurger); // Function to toggle the burger menu\n        setFirstClick(true);\n    };\n    const handleScroll = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((sectionId)=>{\n        const element = document.getElementById(sectionId);\n        const navbar = document.getElementById(\"navbar\");\n        const burgerMenu = document.getElementById(\"burger\");\n        if (element) {\n            let offsetHeightInPx = 0;\n            if (navbar && window.getComputedStyle(navbar).display !== \"none\") {\n                offsetHeightInPx = parseFloat(window.getComputedStyle(navbar).height);\n                offsetHeightInPx -= 12;\n            } else if (burgerMenu && window.getComputedStyle(burgerMenu).display !== \"none\") {\n                offsetHeightInPx = parseFloat(window.getComputedStyle(burgerMenu).height);\n                offsetHeightInPx += 8;\n            }\n            const rect = element.getBoundingClientRect();\n            const bodyRect = document.body.getBoundingClientRect().top;\n            const elementPosition = rect.top - bodyRect;\n            const offsetPosition = elementPosition - offsetHeightInPx;\n            const adjustScroll = ()=>{\n                const rect = element.getBoundingClientRect();\n                const bodyRect = document.body.getBoundingClientRect().top;\n                const elementPosition = rect.top - bodyRect;\n                const offsetPosition = elementPosition - offsetHeightInPx;\n                window.scrollTo({\n                    top: offsetPosition,\n                    behavior: \"smooth\"\n                });\n            };\n            adjustScroll(); // Initial scroll\n            // Observe image loading within the gallery\n            const gallery = document.getElementById(\"galleryContainer\");\n            if (gallery) {\n                gallery.querySelectorAll(\"img\").forEach((img)=>{\n                    img.addEventListener(\"load\", adjustScroll);\n                });\n            }\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let isInitialRender = true; // Local flag within this useEffect\n        const sectionIds = [\n            \"AboutUs\",\n            \"Capabilities\",\n            \"Gallery\",\n            \"Testimonials\",\n            \"Contact\"\n        ];\n        const resizeObserver = new ResizeObserver((entries)=>{\n            if (isInitialRender) {\n                isInitialRender = false;\n                return;\n            }\n            for (let entry of entries){\n                if (sectionIds.includes(entry.target.id)) {\n                    console.log(\"Resize observed for:\", entry.target.id); // Debugging line\n                    scrollToSection(entry.target.id);\n                }\n            }\n        });\n        // Observe all the sections\n        sectionIds.forEach((id)=>{\n            const element = document.getElementById(id);\n            if (element) {\n                resizeObserver.observe(element);\n            }\n        });\n        return ()=>{\n            // Cleanup\n            sectionIds.forEach((id)=>{\n                const element = document.getElementById(id);\n                if (element) {\n                    resizeObserver.unobserve(element);\n                }\n            });\n        };\n    }, []); // No dependencies here, so it will run only once on mount\n    const scrollToTop = ()=>{\n        window.scrollTo({\n            top: 0,\n            behavior: \"smooth\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"navbar\",\n                className: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav_container),\n                children: sectionIds.map((section)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().navbar_item),\n                        onClick: ()=>handleScroll(section),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: section.replace(/([A-Z])/g, \" $1\").trim().toUpperCase()\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Users\\\\Spencer\\\\Documents\\\\GitHub\\\\Asmar-Studio\\\\src\\\\components\\\\navbar.js\",\n                            lineNumber: 119,\n                            columnNumber: 25\n                        }, this)\n                    }, section, false, {\n                        fileName: \"D:\\\\Users\\\\Spencer\\\\Documents\\\\GitHub\\\\Asmar-Studio\\\\src\\\\components\\\\navbar.js\",\n                        lineNumber: 118,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"D:\\\\Users\\\\Spencer\\\\Documents\\\\GitHub\\\\Asmar-Studio\\\\src\\\\components\\\\navbar.js\",\n                lineNumber: 116,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"burger\",\n                className: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().burger),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().burgerButton),\n                        onClick: toggleBurger,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"\".concat((_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().burger_line1), \" \").concat((_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default())[\"\".concat(animationClass, \"1\")])\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Users\\\\Spencer\\\\Documents\\\\GitHub\\\\Asmar-Studio\\\\src\\\\components\\\\navbar.js\",\n                                lineNumber: 125,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"\".concat((_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().burger_line2), \" \").concat((_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default())[\"\".concat(animationClass, \"2\")])\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Users\\\\Spencer\\\\Documents\\\\GitHub\\\\Asmar-Studio\\\\src\\\\components\\\\navbar.js\",\n                                lineNumber: 126,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"\".concat((_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().burger_line3), \" \").concat((_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default())[\"\".concat(animationClass, \"3\")])\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Users\\\\Spencer\\\\Documents\\\\GitHub\\\\Asmar-Studio\\\\src\\\\components\\\\navbar.js\",\n                                lineNumber: 127,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Users\\\\Spencer\\\\Documents\\\\GitHub\\\\Asmar-Studio\\\\src\\\\components\\\\navbar.js\",\n                        lineNumber: 124,\n                        columnNumber: 17\n                    }, this),\n                    openBurger && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().burger_dropdown),\n                        children: sectionIds.map((section)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().burger_item),\n                                onClick: ()=>handleItemClick(section),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: section.replace(/([A-Z])/g, \" $1\").trim().toUpperCase()\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Users\\\\Spencer\\\\Documents\\\\GitHub\\\\Asmar-Studio\\\\src\\\\components\\\\navbar.js\",\n                                    lineNumber: 133,\n                                    columnNumber: 33\n                                }, this)\n                            }, section, false, {\n                                fileName: \"D:\\\\Users\\\\Spencer\\\\Documents\\\\GitHub\\\\Asmar-Studio\\\\src\\\\components\\\\navbar.js\",\n                                lineNumber: 132,\n                                columnNumber: 29\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Users\\\\Spencer\\\\Documents\\\\GitHub\\\\Asmar-Studio\\\\src\\\\components\\\\navbar.js\",\n                        lineNumber: 130,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Users\\\\Spencer\\\\Documents\\\\GitHub\\\\Asmar-Studio\\\\src\\\\components\\\\navbar.js\",\n                lineNumber: 123,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Navbar, \"19nwG8FbsRBpjVdfrL/vau7LG2g=\");\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL25hdmJhci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ2dFO0FBQ2pDO0FBQ2lCO0FBRWhELE1BQU1NLGFBQWE7SUFBQztJQUFXO0lBQWdCO0lBQVc7SUFBZ0I7Q0FBVTtBQUVyRSxTQUFTQyxPQUFPQyxLQUFLOztJQUNoQyxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1QsK0NBQVFBLENBQUMsUUFBUywyQkFBMkI7SUFDakYsTUFBTSxDQUFDVSxZQUFZQyxjQUFjLEdBQUdYLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ1ksZUFBZUMsaUJBQWlCLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ25ELE1BQU1jLGlCQUFpQk4sY0FBY0UsYUFBYSxhQUFhQSxhQUFhLGNBQWM7SUFFMUYsTUFBTUssY0FBYztRQUNoQk4sY0FBYyxRQUFTLG9DQUFvQztJQUMvRDtJQUVBLE1BQU1PLGVBQWU7UUFDakJQLGNBQWMsQ0FBQ0QsYUFBYyxxQ0FBcUM7UUFDbEVHLGNBQWM7SUFDbEI7SUFFQSxNQUFNTSxlQUFlaEIsa0RBQVdBLENBQUMsQ0FBQ2lCO1FBQzlCLE1BQU1DLFVBQVVDLFNBQVNDLGNBQWMsQ0FBQ0g7UUFDeEMsTUFBTUksU0FBU0YsU0FBU0MsY0FBYyxDQUFDO1FBQ3ZDLE1BQU1FLGFBQWFILFNBQVNDLGNBQWMsQ0FBQztRQUUzQyxJQUFJRixTQUFTO1lBQ1QsSUFBSUssbUJBQW1CO1lBRXZCLElBQUlGLFVBQVVHLE9BQU9DLGdCQUFnQixDQUFDSixRQUFRSyxPQUFPLEtBQUssUUFBUTtnQkFDOURILG1CQUFtQkksV0FBV0gsT0FBT0MsZ0JBQWdCLENBQUNKLFFBQVFPLE1BQU07Z0JBQ3BFTCxvQkFBb0I7WUFDeEIsT0FBTyxJQUFJRCxjQUFjRSxPQUFPQyxnQkFBZ0IsQ0FBQ0gsWUFBWUksT0FBTyxLQUFLLFFBQVE7Z0JBQzdFSCxtQkFBbUJJLFdBQVdILE9BQU9DLGdCQUFnQixDQUFDSCxZ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a0IsT0FBZlUsZ0JBQWUsS0FBRzs7Ozs7OzBDQUN2RSw4REFBQzBEO2dDQUFLWixXQUFXLEdBQTBCeEQsT0FBdkJBLCtFQUFtQixFQUFDLEtBQWdDLE9BQTdCQSxrRUFBTSxDQUFDLEdBQWtCLE9BQWZVLGdCQUFlLEtBQUc7Ozs7OzswQ0FDdkUsOERBQUMwRDtnQ0FBS1osV0FBVyxHQUEwQnhELE9BQXZCQSwrRUFBbUIsRUFBQyxLQUFnQyxPQUE3QkEsa0VBQU0sQ0FBQyxHQUFrQixPQUFmVSxnQkFBZSxLQUFHOzs7Ozs7Ozs7Ozs7b0JBRTFFTiw0QkFDRyw4REFBQ21EO3dCQUFJQyxXQUFXeEQsa0ZBQXNCO2tDQUNqQ0MsV0FBV3lELEdBQUcsQ0FBQyxDQUFDQyx3QkFDYiw4REFBQ0o7Z0NBQWtCQyxXQUFXeEQsOEVBQWtCO2dDQUFFNkQsU0FBUyxJQUFNYSxnQkFBZ0JmOzBDQUM3RSw0RUFBQ0c7OENBQUdILFFBQVFJLE9BQU8sQ0FBQyxZQUFZLE9BQU9DLElBQUksR0FBR0MsV0FBVzs7Ozs7OytCQURuRE47Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVN0QztHQXJJd0J6RDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9uYXZiYXIuanM/YTU2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL25hdmJhci5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3Qgc2VjdGlvbklkcyA9IFtcIkFib3V0VXNcIiwgXCJDYXBhYmlsaXRpZXNcIiwgXCJHYWxsZXJ5XCIsIFwiVGVzdGltb25pYWxzXCIsIFwiQ29udGFjdFwiXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcihwcm9wcykge1xyXG4gICAgY29uc3QgW29wZW5CdXJnZXIsIHNldE9wZW5CdXJnZXJdID0gdXNlU3RhdGUoZmFsc2UpOyAgLy8gTW92ZWQgc3RhdGUgdXAgdG8gTmF2YmFyXHJcbiAgICBjb25zdCBbZmlyc3RDbGljaywgc2V0Rmlyc3RDbGlja10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNGaXJzdFJlbmRlciwgc2V0SXNGaXJzdFJlbmRlcl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IGFuaW1hdGlvbkNsYXNzID0gb3BlbkJ1cmdlciAmJiBmaXJzdENsaWNrID8gJ29wZW5MaW5lJyA6IGZpcnN0Q2xpY2sgPyAnY2xvc2VMaW5lJyA6ICcnO1xyXG5cclxuICAgIGNvbnN0IGNsb3NlQnVyZ2VyID0gKCkgPT4ge1xyXG4gICAgICAgIHNldE9wZW5CdXJnZXIoZmFsc2UpOyAgLy8gRnVuY3Rpb24gdG8gY2xvc2UgdGhlIGJ1cmdlciBtZW51XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZUJ1cmdlciA9ICgpID0+IHtcclxuICAgICAgICBzZXRPcGVuQnVyZ2VyKCFvcGVuQnVyZ2VyKTsgIC8vIEZ1bmN0aW9uIHRvIHRvZ2dsZSB0aGUgYnVyZ2VyIG1lbnVcclxuICAgICAgICBzZXRGaXJzdENsaWNrKHRydWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSB1c2VDYWxsYmFjaygoc2VjdGlvbklkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlY3Rpb25JZCk7XHJcbiAgICAgICAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdmJhcicpO1xyXG4gICAgICAgIGNvbnN0IGJ1cmdlck1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnVyZ2VyJyk7XHJcblxyXG4gICAgICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGxldCBvZmZzZXRIZWlnaHRJblB4ID0gMDtcclxuXHJcbiAgICAgICAgICAgIGlmIChuYXZiYXIgJiYgd2luZG93LmdldENvbXB1dGVkU3R5bGUobmF2YmFyKS5kaXNwbGF5ICE9PSAnbm9uZScpIHtcclxuICAgICAgICAgICAgICAgIG9mZnNldEhlaWdodEluUHggPSBwYXJzZUZsb2F0KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5hdmJhcikuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIG9mZnNldEhlaWdodEluUHggLT0gMTI7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYnVyZ2VyTWVudSAmJiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShidXJnZXJNZW51KS5kaXNwbGF5ICE9PSAnbm9uZScpIHtcclxuICAgICAgICAgICAgICAgIG9mZnNldEhlaWdodEluUHggPSBwYXJzZUZsb2F0KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGJ1cmdlck1lbnUpLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXRIZWlnaHRJblB4ICs9IDg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICBjb25zdCBib2R5UmVjdCA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50UG9zaXRpb24gPSByZWN0LnRvcCAtIGJvZHlSZWN0O1xyXG4gICAgICAgICAgICBjb25zdCBvZmZzZXRQb3NpdGlvbiA9IGVsZW1lbnRQb3NpdGlvbiAtIG9mZnNldEhlaWdodEluUHg7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhZGp1c3RTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJvZHlSZWN0ID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50UG9zaXRpb24gPSByZWN0LnRvcCAtIGJvZHlSZWN0O1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0UG9zaXRpb24gPSBlbGVtZW50UG9zaXRpb24gLSBvZmZzZXRIZWlnaHRJblB4O1xyXG5cclxuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBvZmZzZXRQb3NpdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGFkanVzdFNjcm9sbCgpOyAgLy8gSW5pdGlhbCBzY3JvbGxcclxuXHJcbiAgICAgICAgICAgIC8vIE9ic2VydmUgaW1hZ2UgbG9hZGluZyB3aXRoaW4gdGhlIGdhbGxlcnlcclxuICAgICAgICAgICAgY29uc3QgZ2FsbGVyeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FsbGVyeUNvbnRhaW5lclwiKTtcclxuICAgICAgICAgICAgaWYgKGdhbGxlcnkpIHtcclxuICAgICAgICAgICAgICAgIGdhbGxlcnkucXVlcnlTZWxlY3RvckFsbCgnaW1nJykuZm9yRWFjaChpbWcgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgYWRqdXN0U2Nyb2xsKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGlzSW5pdGlhbFJlbmRlciA9IHRydWU7ICAvLyBMb2NhbCBmbGFnIHdpdGhpbiB0aGlzIHVzZUVmZmVjdFxyXG5cclxuICAgICAgICBjb25zdCBzZWN0aW9uSWRzID0gW1wiQWJvdXRVc1wiLCBcIkNhcGFiaWxpdGllc1wiLCBcIkdhbGxlcnlcIiwgXCJUZXN0aW1vbmlhbHNcIiwgXCJDb250YWN0XCJdO1xyXG5cclxuICAgICAgICBjb25zdCByZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXNJbml0aWFsUmVuZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBpc0luaXRpYWxSZW5kZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgZW50cnkgb2YgZW50cmllcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlY3Rpb25JZHMuaW5jbHVkZXMoZW50cnkudGFyZ2V0LmlkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVzaXplIG9ic2VydmVkIGZvcjpcIiwgZW50cnkudGFyZ2V0LmlkKTsgIC8vIERlYnVnZ2luZyBsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9TZWN0aW9uKGVudHJ5LnRhcmdldC5pZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gT2JzZXJ2ZSBhbGwgdGhlIHNlY3Rpb25zXHJcbiAgICAgICAgc2VjdGlvbklkcy5mb3JFYWNoKGlkID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHJlc2l6ZU9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgLy8gQ2xlYW51cFxyXG4gICAgICAgICAgICBzZWN0aW9uSWRzLmZvckVhY2goaWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzaXplT2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pOyAgLy8gTm8gZGVwZW5kZW5jaWVzIGhlcmUsIHNvIGl0IHdpbGwgcnVuIG9ubHkgb25jZSBvbiBtb3VudFxyXG5cclxuXHJcblxyXG4gICAgY29uc3Qgc2Nyb2xsVG9Ub3AgPSAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBpZD1cIm5hdmJhclwiIGNsYXNzTmFtZT17c3R5bGVzLm5hdl9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAge3NlY3Rpb25JZHMubWFwKChzZWN0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3NlY3Rpb259IGNsYXNzTmFtZT17c3R5bGVzLm5hdmJhcl9pdGVtfSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTY3JvbGwoc2VjdGlvbil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57c2VjdGlvbi5yZXBsYWNlKC8oW0EtWl0pL2csICcgJDEnKS50cmltKCkudG9VcHBlckNhc2UoKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJidXJnZXJcIiBjbGFzc05hbWU9e3N0eWxlcy5idXJnZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXJnZXJCdXR0b259IG9uQ2xpY2s9e3RvZ2dsZUJ1cmdlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtzdHlsZXMuYnVyZ2VyX2xpbmUxfSAke3N0eWxlc1tgJHthbmltYXRpb25DbGFzc30xYF19YH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5idXJnZXJfbGluZTJ9ICR7c3R5bGVzW2Ake2FuaW1hdGlvbkNsYXNzfTJgXX1gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7c3R5bGVzLmJ1cmdlcl9saW5lM30gJHtzdHlsZXNbYCR7YW5pbWF0aW9uQ2xhc3N9M2BdfWB9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtvcGVuQnVyZ2VyICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXJnZXJfZHJvcGRvd259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2VjdGlvbklkcy5tYXAoKHNlY3Rpb24pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtzZWN0aW9ufSBjbGFzc05hbWU9e3N0eWxlcy5idXJnZXJfaXRlbX0gb25DbGljaz17KCkgPT4gaGFuZGxlSXRlbUNsaWNrKHNlY3Rpb24pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57c2VjdGlvbi5yZXBsYWNlKC8oW0EtWl0pL2csICcgJDEnKS50cmltKCkudG9VcHBlckNhc2UoKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsIkltYWdlIiwic3R5bGVzIiwic2VjdGlvbklkcyIsIk5hdmJhciIsInByb3BzIiwib3BlbkJ1cmdlciIsInNldE9wZW5CdXJnZXIiLCJmaXJzdENsaWNrIiwic2V0Rmlyc3RDbGljayIsImlzRmlyc3RSZW5kZXIiLCJzZXRJc0ZpcnN0UmVuZGVyIiwiYW5pbWF0aW9uQ2xhc3MiLCJjbG9zZUJ1cmdlciIsInRvZ2dsZUJ1cmdlciIsImhhbmRsZVNjcm9sbCIsInNlY3Rpb25JZCIsImVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibmF2YmFyIiwiYnVyZ2VyTWVudSIsIm9mZnNldEhlaWdodEluUHgiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwiZGlzcGxheSIsInBhcnNlRmxvYXQiLCJoZWlnaHQiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYm9keVJlY3QiLCJib2R5IiwidG9wIiwiZWxlbWVudFBvc2l0aW9uIiwib2Zmc2V0UG9zaXRpb24iLCJhZGp1c3RTY3JvbGwiLCJzY3JvbGxUbyIsImJlaGF2aW9yIiwiZ2FsbGVyeSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaW1nIiwiYWRkRXZlbnRMaXN0ZW5lciIsImlzSW5pdGlhbFJlbmRlciIsInJlc2l6ZU9ic2VydmVyIiwiUmVzaXplT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJpbmNsdWRlcyIsInRhcmdldCIsImlkIiwiY29uc29sZSIsImxvZyIsInNjcm9sbFRvU2VjdGlvbiIsIm9ic2VydmUiLCJ1bm9ic2VydmUiLCJzY3JvbGxUb1RvcCIsImRpdiIsImNsYXNzTmFtZSIsIm5hdl9jb250YWluZXIiLCJtYXAiLCJzZWN0aW9uIiwibmF2YmFyX2l0ZW0iLCJvbkNsaWNrIiwicCIsInJlcGxhY2UiLCJ0cmltIiwidG9VcHBlckNhc2UiLCJidXJnZXIiLCJidXJnZXJCdXR0b24iLCJzcGFuIiwiYnVyZ2VyX2xpbmUxIiwiYnVyZ2VyX2xpbmUyIiwiYnVyZ2VyX2xpbmUzIiwiYnVyZ2VyX2Ryb3Bkb3duIiwiYnVyZ2VyX2l0ZW0iLCJoYW5kbGVJdGVtQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/navbar.js\n"));

/***/ })

});