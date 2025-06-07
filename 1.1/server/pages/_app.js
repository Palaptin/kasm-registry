(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1947:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
;// CONCATENATED MODULE: ./components/Bubbles.js

function Bubbles() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
        className: "bg-bubbles",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("li", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {})
        ]
    });
}
/* harmony default export */ const components_Bubbles = (Bubbles);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: external "react-notifications"
const external_react_notifications_namespaceObject = require("react-notifications");
;// CONCATENATED MODULE: ./components/header.js





function Header({ searchText , changeSearch  }) {
    const copyToClipboard = ()=>{
        var textField = document.createElement("textarea");
        textField.innerText = listUrl;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand("copy");
        textField.remove();
        external_react_notifications_namespaceObject.NotificationManager.info("URL successfully copied to clipboard", "Copy URL", 4000);
    };
    const listUrl = "https://palaptin.github.io/kasm-registry/";
    const router = (0,router_.useRouter)();
    const getLink = (path)=>`${router.basePath}${path}`;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "relative font-light overflow-hidden bg-gradient-to-tr from-[#162d48] to-[#2980b9] p-8 xl:px-32 text-white gap-5 md:gap-0 flex flex-wrap justify-center items-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Bubbles, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative z-10",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-3xl",
                        children: "Pingus Kasm"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "text-sm uppercase w-full flex justify-between",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "opacity-70",
                                children: "W"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "opacity-70",
                                children: "o"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "opacity-70",
                                children: "r"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "opacity-70",
                                children: "k"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "opacity-70",
                                children: "s"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "opacity-70",
                                children: "p"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "opacity-70",
                                children: "a"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "opacity-70",
                                children: "c"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "opacity-70",
                                children: "e"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "\xa0"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "opacity-40",
                                children: "R"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "opacity-40",
                                children: "e"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "opacity-40",
                                children: "g"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "opacity-40",
                                children: "i"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "opacity-40",
                                children: "s"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "opacity-40",
                                children: "t"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "opacity-40",
                                children: "r"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "opacity-40",
                                children: "y"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                className: "relative z-10 mx-12",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: getLink("/"),
                        className: "p-4 inline-block rounded-full border border-solid" + (router.pathname == "/" ? " border-white/30" : " border-transparent"),
                        children: "Library"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/new/",
                        className: "p-4 inline-block rounded-full border border-solid" + (router.pathname.startsWith("/new") ? " bg-black/10 border-white/30" : " border-transparent"),
                        children: "New"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "grow flex justify-center relative z-10",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "bg-black/10 shadow border border-1 border-white/30 rounded flex w-full max-w-md",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        name: "search",
                        className: "bg-transparent shadow-inner text-lg font-light w-full p-4 placeholder:text-white/40",
                        placeholder: "Search for workspace",
                        type: "text",
                        value: searchText,
                        onChange: changeSearch
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                className: "p-4 relative z-10 px-5 bg-[#162d48]/70 border-t border-white/20 border-solid hover:bg-slate-900 transition shadow-lg m-2 rounded items-center text-white/70 flex cursor-pointer",
                onClick: ()=>{
                    copyToClipboard();
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "mr-3",
                        children: "Workspace Registry Link"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        style: {
                            height: "14px",
                            fill: "#fff"
                        },
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 512 512",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M224 0c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224zM64 160c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64H64V224h64V160H64z"
                        })
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/footer.js

function Footer() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "flex justify-center items-center p-5 bg-gradient-to-tr text-white/80 text-sm from-[#162d48] to-[#2980b9]",
        children: [
            "This registry is intended to work in conjuction with Kasm Workspaces.\xa0",
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                className: "underline",
                href: "https://kasmweb.com",
                children: "Click here to find out about Kasm Workspaces"
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/react-notifications/lib/notifications.css
var notifications = __webpack_require__(9013);
;// CONCATENATED MODULE: ./components/layout.js
// components/layout.js





function Layout({ children , searchText , changeSearch  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col min-h-screen",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                searchText: searchText,
                changeSearch: changeSearch
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: "grow",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_notifications_namespaceObject.NotificationContainer, {})
        ]
    });
}

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./pages/_app.js




function MyApp({ Component , pageProps  }) {
    const [searchText, setSearchText] = (0,external_react_.useState)("");
    const changeSearch = (event)=>{
        setSearchText(event.target.value);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
        searchText: searchText,
        changeSearch: changeSearch,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            searchText: searchText,
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,467], () => (__webpack_exec__(1947)));
module.exports = __webpack_exports__;

})();