exports.id = 94;
exports.ids = [94];
exports.modules = {

/***/ 1780:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6505, 23))

/***/ }),

/***/ 4874:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7624))

/***/ }),

/***/ 7624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9886);
/* harmony import */ var _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* __next_internal_client_entry_do_not_use__ default auto */ 




function Burger(props) {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [openBurger, setOpenBurger] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const closeBurger = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e)=>{
        if (ref.current && openBurger && !ref.current.contains(e.target)) {
            setOpenBurger(false);
        }
    }, [
        openBurger
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (false) {}
        return ()=>{
            document.removeEventListener("click", closeBurger);
        };
    }, [
        closeBurger,
        openBurger
    ]);
    const handleClick = ()=>{
        setOpenBurger(!openBurger);
    };
    const animationClass = openBurger ? "openLine" : "closeLine";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().burger),
        ref: ref,
        onClick: handleClick,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: `${(_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().burger_line1)} ${(_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default())[`${animationClass}1`]}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: `${(_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().burger_line2)} ${(_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default())[`${animationClass}2`]}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: `${(_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().burger_line3)} ${(_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default())[`${animationClass}3`]}`
            }),
            openBurger && props.children
        ]
    });
}
function Navbar(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().nav_container),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "/",
                        className: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().logo_link),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                            className: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().logo),
                            src: "/images/LogoBlack.jpg",
                            alt: "Asmar Studio Logo",
                            width: 100,
                            height: 75
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().navbar_item),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            className: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().content),
                            href: "/About",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("text", {
                                children: "ABOUT US"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().navbar_item),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            className: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().content),
                            href: "/Capabilities",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("text", {
                                children: "CAPABILITIES"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().navbar_item),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            id: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().gallery),
                            className: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().content),
                            href: "/Gallery",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("text", {
                                children: "GALLERY"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().navbar_item),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            className: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().content),
                            href: "/Contact",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("text", {
                                children: "CONTACT US"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().navbar_item),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            className: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().content),
                            href: "/Testimonials",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("text", {
                                children: "TESTIMONIALS"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Burger, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().burger_dropdown)
                })
            })
        ]
    });
}


/***/ }),

/***/ 9886:
/***/ ((module) => {

// Exports
module.exports = {
	"nav_container": "navbar_nav_container__QPZKY",
	"navbar_item": "navbar_navbar_item__vwZF5",
	"content": "navbar_content__9_n7x",
	"logo": "navbar_logo___IyD2",
	"logo_link": "navbar_logo_link__6UnTX",
	"gallery": "navbar_gallery__WUOAH",
	"burger": "navbar_burger__9Cho4",
	"burger_line1": "navbar_burger_line1__5zNDk",
	"burger_line2": "navbar_burger_line2__byGLq",
	"burger_line3": "navbar_burger_line3__YKyki",
	"x_left": "navbar_x_left__kxkkL",
	"x_right": "navbar_x_right__28YBf",
	"burger_dropdown": "navbar_burger_dropdown__xy4gN",
	"rotateMenu": "navbar_rotateMenu__4tXnX",
	"openLine1": "navbar_openLine1__q_lqC",
	"openLine3": "navbar_openLine3__HUKTJ",
	"closeLine1": "navbar_closeLine1__ZybSM",
	"closeLine3": "navbar_closeLine3__5rQ7o",
	"openLine2": "navbar_openLine2__nPICC",
	"closeLine2": "navbar_closeLine2___FRDF",
	"noAnimation": "navbar_noAnimation__0bM5w"
};


/***/ }),

/***/ 4757:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src\\app\\layout.js","import":"Sorts_Mill_Goudy","arguments":[{"weight":"400","subsets":["latin"],"display":"swap"}],"variableName":"goudy"}
var target_path_src_app_layout_js_import_Sorts_Mill_Goudy_arguments_weight_400_subsets_latin_display_swap_variableName_goudy_ = __webpack_require__(3811);
var target_path_src_app_layout_js_import_Sorts_Mill_Goudy_arguments_weight_400_subsets_latin_display_swap_variableName_goudy_default = /*#__PURE__*/__webpack_require__.n(target_path_src_app_layout_js_import_Sorts_Mill_Goudy_arguments_weight_400_subsets_latin_display_swap_variableName_goudy_);
// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(4315);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./src/components/navbar.js

const proxy = (0,module_proxy.createProxy)(String.raw`D:\Users\Spencer\Documents\GitHub\Asmar-Studio\src\components\navbar.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const navbar = (__default__);
;// CONCATENATED MODULE: ./src/app/layout.js




function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        className: (target_path_src_app_layout_js_import_Sorts_Mill_Goudy_arguments_weight_400_subsets_latin_display_swap_variableName_goudy_default()).className,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(navbar, {}),
                /*#__PURE__*/ jsx_runtime_.jsx("main", {
                    children: children
                })
            ]
        })
    });
}


/***/ }),

/***/ 3881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"456x434"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 4315:
/***/ (() => {



/***/ })

};
;