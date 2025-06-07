(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 9399:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Home_container__bCOhY",
	"main": "Home_main__nLjiQ",
	"footer": "Home_footer____T7K",
	"title": "Home_title__T09hD",
	"description": "Home_description__41Owk",
	"code": "Home_code__suPER",
	"grid": "Home_grid__GxQ85",
	"card": "Home_card___LpL1",
	"logo": "Home_logo__27_tb"
};


/***/ }),

/***/ 4482:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/Workspace.js


function Workspace({ Component , pageProps , workspace  }) {
    const router = (0,router_.useRouter)();
    const viewexample = (workspace)=>{
        router.push({
            pathname: "/new/[workspace]",
            query: {
                workspace: btoa(workspace.friendly_name)
            }
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        onClick: ()=>viewexample(workspace),
        className: "w-[245px] h-[88px] transition-all relative cursor-pointer group flex p-2 items-center justify-center bg-slate-100/90 shadow rounded hover:shadow-xl hover:bg-gradient-to-r hover:from-[#162d48] hover:to-[#2980b9] hover:text-white",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "w-full h-full",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "show-grid flex h-full items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "kasmcard-img flex h-full mx-4 items-center justify-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            className: "w-[50px] max-h-[66px]",
                            src: "icons/" + workspace.image_src
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "kasmcard-detail settingPad",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                className: "text-base",
                                children: workspace.friendly_name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-xs opacity-50",
                                children: workspace.categories && workspace.categories[0] || "Unknown"
                            })
                        ]
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const components_Workspace = (Workspace);

// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(9399);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
;// CONCATENATED MODULE: ./pages/index.js





function Home({ searchText  }) {
    const [workspaces, setWorkspaces] = (0,external_react_.useState)(null);
    const [versions, setVersions] = (0,external_react_.useState)(null);
    const [version, setVersion] = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        let currentVersion = localStorage.getItem("version") || null;
        fetch("list.json").then((res)=>res.json()).then((workspaces)=>{
            let wsversions = [];
            workspaces.workspaces.forEach((workspace)=>{
                if (workspace.compatibility) {
                    workspace.compatibility.forEach((v)=>{
                        const value = parseFloat(v.version);
                        if (wsversions.indexOf(value) === -1) {
                            wsversions.push(value);
                        }
                    });
                }
            });
            const sorted = wsversions.sort((a, b)=>a - b).reverse();
            setVersions(sorted);
            if (currentVersion === null) {
                currentVersion = sorted[0];
                localStorage.setItem("version", currentVersion);
            }
            setVersion(currentVersion);
            setWorkspaces(workspaces);
        });
    }, []);
    const updateVersion = (version)=>{
        localStorage.setItem("version", version);
        setVersion(version);
    };
    let filteredworkspaces = workspaces && workspaces.workspaces && workspaces.workspaces.length > 0 ? [
        ...workspaces.workspaces
    ] : [];
    filteredworkspaces = filteredworkspaces.filter((v)=>v.compatibility.some((el)=>el.version === version + ".x"));
    const lowerSearch = searchText && searchText.toLowerCase();
    if (searchText && searchText !== "") {
        filteredworkspaces = filteredworkspaces.filter((i)=>{
            const category = i.categories && i.categories.length > 0 ? i.categories.filter((i)=>i.toLowerCase().includes(lowerSearch)) : [];
            return i.name.toLowerCase().includes(lowerSearch) || category.length > 0;
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Kasm Workspaces"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "List of workspaces for Kasm Webspaces"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: "p-8 py-10 xl:px-20",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                        className: "flex flex-wrap-reverse uppercase tracking-widest justify-center mb-10 gap-5",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: "flex items-center text-lg bg-slate-100/90 rounded overflow-hidden shadow",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "flex px-3 text-xs opacity-100",
                                        children: "Workspaces"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-white p-3 py-1 flex bg-[#2980b9]",
                                        children: filteredworkspaces && filteredworkspaces.length
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: "flex items-center text-lg bg-slate-100/90 rounded overflow-hidden shadow",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "flex px-3 text-xs opacity-100",
                                        children: "Kasm Version"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-white gap-3 p-3 py-1 flex items-center bg-[#2980b9]",
                                        children: versions && versions.map((v)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "cursor-pointer " + (+v === +version ? "text-white" : "text-white/50 text-xs"),
                                                onClick: ()=>updateVersion(v),
                                                children: v
                                            }, v))
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-wrap gap-1 justify-center",
                        children: [
                            filteredworkspaces && filteredworkspaces.length > 0 && filteredworkspaces.map(function(workspace, i) {
                                return /*#__PURE__*/ jsx_runtime_.jsx(components_Workspace, {
                                    workspace: workspace
                                }, workspace.sha);
                            }),
                            filteredworkspaces && filteredworkspaces.length === 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    "No workspaces found ",
                                    searchText !== "" && 'matching "' + searchText + '"'
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Home_module_default()).grid
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

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
var __webpack_exports__ = (__webpack_exec__(4482));
module.exports = __webpack_exports__;

})();