"use strict";
(() => {
var exports = {};
exports.id = 858;
exports.ids = [858];
exports.modules = {

/***/ 2063:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ New),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "file-saver"
const external_file_saver_namespaceObject = require("file-saver");
;// CONCATENATED MODULE: external "react-select/creatable"
const creatable_namespaceObject = require("react-select/creatable");
var creatable_default = /*#__PURE__*/__webpack_require__.n(creatable_namespaceObject);
;// CONCATENATED MODULE: external "react-select"
const external_react_select_namespaceObject = require("react-select");
var external_react_select_default = /*#__PURE__*/__webpack_require__.n(external_react_select_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./pages/new/[[...workspace]].js
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../public/list.json'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());








async function getStaticPaths() {
    let paths = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../public/list.json'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())((workspace)=>({
            params: {
                workspace: [
                    btoa(workspace.friendly_name)
                ]
            }
        }));
    paths.push({
        params: {
            workspace: null
        }
    });
    return {
        paths,
        fallback: false
    };
}
// `getStaticPaths` requires using `getStaticProps`
async function getStaticProps({ params  }) {
    const workspace = params.workspace;
    return {
        // Passed to the page component as props
        props: {
            workspace: workspace ?? null
        }
    };
}
function New({ workspace  }) {
    const name = (0,external_react_.useRef)(null);
    const friendly_name = (0,external_react_.useRef)(null);
    const description = (0,external_react_.useRef)(null);
    const [categories, setCategories] = (0,external_react_.useState)(null);
    const [architecture, setArchitecture] = (0,external_react_.useState)(null);
    const [icon, setIcon] = (0,external_react_.useState)(null);
    const [ext, setExt] = (0,external_react_.useState)("png");
    const [inlineImage, setInlineImage] = (0,external_react_.useState)(null);
    const defaultState = {
        friendly_name: null,
        image_src: null,
        description: null,
        cores: 2,
        memory: 2768,
        gpu_count: 0,
        cpu_allocation_method: "Inherit",
        docker_registry: "https://index.docker.io/v1/",
        categories: [],
        require_gpu: false,
        enabled: true,
        image_type: "Container"
    };
    const [combined, setCombined] = (0,external_react_.useState)(defaultState);
    const router = (0,router_.useRouter)();
    // const { workspace } = router.query
    (0,external_react_.useEffect)(()=>{
        if (workspace === null) {
            description.current.value = "";
            name.current.value = "";
            friendly_name.current.value = "";
            setCategories(null);
            setArchitecture(null);
            setIcon(null);
            setCombined(defaultState);
        } else if (workspace && workspace[0]) {
            const workspaceDetails = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../public/list.json'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())((el)=>el.friendly_name === atob(workspace[0]));
            delete workspaceDetails["sha"];
            description.current.value = workspaceDetails.description;
            name.current.value = workspaceDetails.name;
            friendly_name.current.value = workspaceDetails.friendly_name;
            if (workspaceDetails.categories) {
                let catMap = [];
                workspaceDetails.categories.map((e)=>catMap.push({
                        label: e,
                        value: e
                    }));
                setCategories(catMap);
            }
            if (workspaceDetails.architecture) {
                let archMap = [];
                workspaceDetails.architecture.map((e)=>archMap.push({
                        label: e,
                        value: e
                    }));
                setArchitecture(archMap);
            }
            setInlineImage("../../icons/" + workspaceDetails.image_src);
            setCombined({
                ...combined,
                ...workspaceDetails
            });
        }
    }, [
        workspace
    ]);
    const displayWorkspace = ()=>{
        return {
            ...combined
        };
    };
    const customStyles = {
        control: (base, state)=>({
                ...base,
                background: "#f1f5f9",
                borderRadius: "0.5rem",
                borderColor: "#94a3b8"
            }),
        multiValue: (styles, { data  })=>{
            return {
                ...styles,
                backgroundColor: "#dde6f1"
            };
        }
    };
    (0,external_react_.useEffect)(()=>{
        if (combined && combined.friendly_name) {
            const updateWorkspace = {
                ...combined
            };
            updateWorkspace.image_src = friendlyUrl(updateWorkspace.friendly_name) + "." + ext;
            setCombined(updateWorkspace);
        }
    }, [
        ext
    ]);
    const updateCategories = (items)=>{
        const updateWorkspace = {
            ...combined
        };
        updateWorkspace.categories = items.map((cat)=>cat.value);
        setCombined(updateWorkspace);
        let catMap = [];
        updateWorkspace.categories.map((e)=>catMap.push({
                label: e,
                value: e
            }));
        setCategories(catMap);
    };
    const updateArchitecture = (items)=>{
        const updateWorkspace = {
            ...combined
        };
        updateWorkspace.architecture = items.map((arch)=>arch.value);
        setCombined(updateWorkspace);
        let archMap = [];
        updateWorkspace.architecture.map((e)=>archMap.push({
                label: e,
                value: e
            }));
        setArchitecture(archMap);
    };
    function friendlyUrl(url) {
        // make the url lowercase         
        var encodedUrl = url.toString().toLowerCase();
        // replace & with and           
        encodedUrl = encodedUrl.split(/\&+/).join("-and-");
        // remove invalid characters 
        encodedUrl = encodedUrl.split(/[^a-z0-9]/).join("-");
        // remove duplicates 
        encodedUrl = encodedUrl.split(/-+/).join("-");
        // trim leading & trailing characters 
        encodedUrl = encodedUrl.trim("-");
        return encodedUrl;
    }
    const downloadZip = ()=>{
        var JSZip = __webpack_require__(9227);
        const zip = new JSZip();
        const folder = zip.folder(combined.friendly_name);
        folder.file("workspace.json", JSON.stringify(combined, null, 2));
        if (icon) {
            folder.file(combined.image_src, icon.file);
        } else if (inlineImage) {
            const promise = fetch(inlineImage).then((response)=>response.blob());
            folder.file(combined.image_src, promise);
        }
        zip.generateAsync({
            type: "blob"
        }).then(function(content) {
            // Force down of the Zip file
            (0,external_file_saver_namespaceObject.saveAs)(content, friendlyUrl(combined.friendly_name) + ".zip");
        });
    };
    const handleChange = (event)=>{
        const updateWorkspace = {
            ...combined
        };
        updateWorkspace[event.target.name] = event.target.value;
        if (event.target.name === "icon") {
            delete updateWorkspace.icon;
            setIcon({
                value: event.target.value,
                file: event.target.files[0]
            });
            setExt(event.target.value.substr(event.target.value.lastIndexOf(".") + 1));
            setInlineImage(null);
        // return
        }
        if (updateWorkspace.friendly_name) {
            updateWorkspace.image_src = friendlyUrl(updateWorkspace.friendly_name) + "." + ext;
        }
        setCombined(updateWorkspace);
    };
    const options = [
        {
            value: "Browser",
            label: "Browser"
        },
        {
            value: "Communication",
            label: "Communication"
        },
        {
            value: "Desktop",
            label: "Desktop"
        },
        {
            value: "Development",
            label: "Development"
        },
        {
            value: "Games",
            label: "Games"
        },
        {
            value: "Multimedia",
            label: "Multimedia"
        },
        {
            value: "Office",
            label: "Office"
        },
        {
            value: "Privacy",
            label: "Privacy"
        },
        {
            value: "Productivity",
            label: "Productivity"
        },
        {
            value: "Remote Access",
            label: "Remote Access"
        }
    ];
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
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col lg:flex-row w-full my-20 max-w-6xl text-sm rounded-xl overflow-hidden mx-auto",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "w-full lg:w-1/2 p-16 bg-slate-300",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-2xl font-medium mb-2",
                                children: "Add Workspace"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "mb-8 opacity-70",
                                        children: 'This page is designed to allow admins to generate the JSON they need to upload to the "workspaces" directory. It also allows end users to see what settings are needed if they want to manually copy them into a new workspace.'
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        className: "mb-2 font-medium",
                                        children: "Icon"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "file",
                                        name: "icon",
                                        onChange: handleChange,
                                        className: "mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "mb-6 opacity-70",
                                        children: "Select the image to use, image will be renamed when it's downloaded."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        className: "mb-2 font-medium",
                                        children: "Friendly Name"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        ref: friendly_name,
                                        name: "friendly_name",
                                        onChange: handleChange,
                                        className: "mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "mb-6 opacity-70",
                                        children: "This is the name that will show for users"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        className: "mb-2 font-medium",
                                        children: "Categories"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((creatable_default()), {
                                        instanceId: "1",
                                        name: "categories",
                                        isMulti: true,
                                        options: options,
                                        onChange: updateCategories,
                                        styles: customStyles,
                                        value: categories
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "mb-6 mt-2 opacity-70",
                                        children: "You can select from the available option or create new ones."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        className: "mb-2 font-medium",
                                        children: "Description"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        ref: description,
                                        name: "description",
                                        onChange: handleChange,
                                        className: "mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "mb-6 opacity-70",
                                        children: "A short description about the workspace"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        className: "mb-2 font-medium",
                                        children: "Docker Image"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        ref: name,
                                        name: "name",
                                        onChange: handleChange,
                                        className: "mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: "mb-6 opacity-70",
                                        children: [
                                            "The docker image to use, i.e. ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("code", {
                                                className: "text-xs p-1 px-2 rounded bg-white/40",
                                                children: "kasmweb/filezilla:develop"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        className: "mb-2 font-medium",
                                        children: "Architecture"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((external_react_select_default()), {
                                        instanceId: "2",
                                        name: "architecture",
                                        isMulti: true,
                                        options: [
                                            {
                                                value: "amd64",
                                                label: "amd64"
                                            },
                                            {
                                                value: "arm64",
                                                label: "arm64"
                                            }
                                        ],
                                        onChange: updateArchitecture,
                                        styles: customStyles,
                                        value: architecture
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "mb-6 mt-2 opacity-70",
                                        children: "You can select from the available option or create new ones."
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "w-full lg:w-1/2 p-16 bg-slate-100",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Workspace, {
                                workspace: combined,
                                icon: icon,
                                inlineImage: inlineImage
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("pre", {
                                className: "my-8 overflow-y-auto text-xs",
                                children: JSON.stringify(displayWorkspace(), null, 2)
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                onClick: downloadZip,
                                className: "p-4 relative z-10 px-5 bg-[#2980b9] border-t border-white/20 border-solid hover:bg-slate-900 transition m-2 rounded items-center text-white/70 flex cursor-pointer",
                                children: "Download"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function Workspace({ workspace , icon , inlineImage  }) {
    const [showDescription, setShowDescription] = (0,external_react_.useState)(false);
    let srcBlob = null;
    if (icon) {
        const blob = new Blob([
            icon.file
        ]);
        srcBlob = URL.createObjectURL(blob);
        workspace.image_src = srcBlob;
    }
    const installButton = ()=>{
        return /*#__PURE__*/ jsx_runtime_.jsx("button", {
            className: "text-xs w-full p-4 py-1 rounded-lg flex justify-center items-center bg-blue-500 font-bold text-white",
            children: "Install"
        });
    };
    const editButton = ()=>{
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "text-xs text-color w-full p-4 py-1 rounded-lg bg-black/5 flex justify-center items-center",
            children: "Edit"
        });
    };
    const official = ()=>{
        return;
    };
    const workspaceExists = false;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "rounded-xl group w-full shadow max-w-xs relative overflow-hidden h-[100px] border border-solid flex flex-col justify-between bg-slate-300 border-slate-400/50",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "absolute top-0 left-0 right-0 h-[200px] transition-all" + (showDescription ? " -translate-y-1/2" : ""),
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    onClick: ()=>setShowDescription(true),
                    className: "h-[100px] p-4 relative overflow-hidden cursor-pointer",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            className: "h-[90px] group-hover:scale-150 transition-all absolute left-2 top-1",
                            src: workspace.image_src,
                            onError: (e)=>{
                                if (inlineImage !== null) {
                                    e.target.src = inlineImage;
                                }
                            },
                            alt: workspace.friendly_name
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex-col pl-28",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "font-bold",
                                    children: workspace.friendly_name || "Friendly Name"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "text-xs mb-2 flex gap-2",
                                    children: [
                                        "Pingus Kasm" || 0,
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: official()
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: " h-8"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "absolute bottom-0 left-0 right-0 bg-slate-400/20 h-8 text-[10px] flex items-center justify-center",
                            children: [
                                workspace.architecture && workspace.architecture.map((arch, index)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "p-2 py-0 m-[1px] inline-block rounded bg-slate-400/70",
                                        children: arch
                                    }, "arch" + index)),
                                workspace.categories.map((cat, index)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "p-2 py-0 m-[1px] inline-block rounded bg-slate-300/90",
                                        children: cat
                                    }, "cat" + index))
                            ]
                        }),
                        workspaceExists && workspaceExists.enabled === true && workspaceExists.available === false && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "absolute inset-0 flex justify-center items-center bg-slate-600/70 text-white",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa fa-spinner fa-spin mr-3"
                                }),
                                " Installing"
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "h-[100px] text-xs relative p-2 pl-4 flex",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "absolute right-2 top-2 bg-slate-100 rounded-full flex justify-center items-center h-6 w-6",
                            onClick: ()=>setShowDescription(false),
                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                style: {
                                    height: "14px"
                                },
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 320 512",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col flex-grow",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "font-bold",
                                    children: workspace.friendly_name
                                }),
                                " ",
                                workspace.description
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col justify-end gap-1",
                            children: [
                                editButton(),
                                installButton()
                            ]
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 9227:
/***/ ((module) => {

module.exports = require("jszip");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2063));
module.exports = __webpack_exports__;

})();