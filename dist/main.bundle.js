/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Fredoka+One&family=Saira+Condensed&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --popup-text-color: rgb(34, 33, 33);\\n}\\n\\nbody {\\n  font-family: 'Saira Condensed', sans-serif;\\n  margin: 0;\\n  color: #ececec;\\n  min-width: 720px;\\n}\\n\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\np {\\n  margin: 0;\\n}\\n\\na,\\nbutton,\\ni {\\n  cursor: pointer;\\n}\\n\\nul {\\n  list-style-type: none;\\n}\\n\\nnav {\\n  display: flex;\\n  justify-content: space-around;\\n  align-items: center;\\n  background-color: #019267;\\n  background-image: url('https://www.transparenttextures.com/patterns/my-little-plaid-dark.png');\\n  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;\\n  padding: 1em;\\n}\\n\\nnav .left {\\n  display: flex;\\n  gap: 0.5em;\\n  align-items: center;\\n  cursor: pointer;\\n  transition: transform 2s;\\n}\\n\\nnav .left:hover {\\n  transform: scale(1.1);\\n}\\n\\nnav .left .logo-wrapper {\\n  padding: 1em 0.5em;\\n  border: 2px solid #ececec;\\n  border-radius: 50%;\\n}\\n\\nnav .left h1 {\\n  font-family: 'Fredoka One', 'cursive', sans-serif;\\n  margin: 0;\\n}\\n\\nnav .right {\\n  display: flex;\\n  gap: 3em;\\n}\\n\\nnav .right .active {\\n  font-weight: bold;\\n  text-decoration: underline;\\n}\\n\\nnav .right li a {\\n  font-size: 1.2rem;\\n  letter-spacing: 0.2em;\\n  transition: all 500ms;\\n}\\n\\nnav .right li a:hover {\\n  background-color: #00c897;\\n  padding: 0.1em 0.5em;\\n  border-radius: 0.5em;\\n  margin: -0.5em;\\n}\\n\\nmain {\\n  display: flex;\\n  min-height: 780px;\\n  background-color: #019267;\\n  background-image: url('https://www.transparenttextures.com/patterns/fabric-of-squares.png');\\n}\\n\\nmain .container {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 3em;\\n  width: 90%;\\n  margin: 3em auto;\\n}\\n\\nmain .container .showCard {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 0.5em;\\n  background-color: #00c897;\\n  background-image: url('https://www.transparenttextures.com/patterns/my-little-plaid-dark.png');\\n  border: 3px solid #00c897;\\n  border-radius: 1em 1em 0 0;\\n  box-shadow: rgba(0, 0, 0, 0.16) 0 3px 6px, rgba(0, 0, 0, 0.23) 0 3px 6px;\\n}\\n\\nmain .container .showCard img {\\n  border-radius: 1em 1em 0 0;\\n  transition: transform 1s, border-radius 2s;\\n}\\n\\nmain .container .showCard img:hover {\\n  transform: scale(1.08);\\n  border-radius: 0;\\n}\\n\\nmain .container .showCard .title {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 0 0.5em;\\n  background-color: #019267;\\n}\\n\\nmain .container .showCard .title h2 {\\n  line-height: 1em;\\n  width: 200px;\\n}\\n\\nmain .container .showCard .title .update-likes {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  padding: 0.5em 0;\\n}\\n\\nmain .container .showCard .comment {\\n  font-family: 'Saira Condensed', sans-serif;\\n  font-size: 1rem;\\n  font-weight: bold;\\n  background-color: #019267;\\n  color: #ececec;\\n  border: none;\\n  width: 100px;\\n  padding: 0.5em;\\n  margin: auto auto 1em auto;\\n  border-radius: 1em;\\n}\\n\\nmain .container .showCard .comment:hover {\\n  background-color: #ececec;\\n  color: #019267;\\n}\\n\\nfooter {\\n  display: flex;\\n  background-color: #019267;\\n  background-image: url('https://www.transparenttextures.com/patterns/my-little-plaid-dark.png');\\n  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;\\n  padding: 1em;\\n}\\n\\n.ctn-tv-info-window {\\n  display: none;\\n}\\n\\n.show {\\n  display: block;\\n  position: fixed;\\n  width: 100%;\\n  height: 100%;\\n  color: var(--popup-text-color);\\n  background-color: rgba(0, 0, 0, 0.282);\\n  z-index: 1;\\n}\\n\\n.ctn-tv-info {\\n  display: flex;\\n  flex-direction: column;\\n  width: 40%;\\n  height: 90%;\\n  margin: auto;\\n  margin-top: 2rem;\\n  border: 3px solid #00c897;\\n  background-color: #019267;\\n  border-radius: 10px;\\n  overflow-y: scroll;\\n  color: #ececec;\\n  text-align: center;\\n}\\n\\n/* width */\\n.ctn-tv-info::-webkit-scrollbar {\\n  width: 1em;\\n}\\n\\n/* Handle */\\n.ctn-tv-info::-webkit-scrollbar-thumb {\\n  background: #b9f8d3;\\n  border-radius: 1em;\\n}\\n\\n/* Handle on hover */\\n.ctn-tv-info::-webkit-scrollbar-thumb:hover {\\n  background: #00c897;\\n}\\n\\n.ctn-icn {\\n  display: flex;\\n  flex-direction: row-reverse;\\n  padding: 1em;\\n  background-image: url('https://www.transparenttextures.com/patterns/my-little-plaid-dark.png');\\n}\\n\\n.ctn-img {\\n  background-image: url('https://www.transparenttextures.com/patterns/my-little-plaid-dark.png');\\n}\\n\\n.ctn-img .popup-img {\\n  display: block;\\n  border-radius: 5px;\\n  height: 500px;\\n  width: 80%;\\n  margin: auto;\\n}\\n\\n.tvshow-name {\\n  font-size: 2rem;\\n  display: inline-block;\\n  margin: auto;\\n  margin-bottom: 0.5em;\\n  letter-spacing: 0.1em;\\n}\\n\\n.tvshow_info {\\n  display: flex;\\n  flex-wrap: wrap;\\n  gap: 0.5em;\\n}\\n\\n.tvshow_item {\\n  display: flex;\\n  justify-content: center;\\n  flex: 40%;\\n}\\n\\n.tvshow_info h5 span {\\n  letter-spacing: 0.1em;\\n  color: #d1d1d1;\\n  margin-left: 0.5em;\\n  background-color: #00c897;\\n  padding: 0 1em;\\n  border-radius: 1em;\\n}\\n\\n.ctn-comment {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 0.5em;\\n}\\n\\n.comments-head,\\n.add-comment {\\n  font-size: 1.3rem;\\n  display: inline-block;\\n  letter-spacing: 0.1em;\\n}\\n\\n.comment-list {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.comment-list h5 {\\n  color: #d1d1d1;\\n}\\n\\n.add-comment {\\n  margin-bottom: 0.5em;\\n}\\n\\n.comment-form {\\n  display: flex;\\n  flex-direction: column;\\n  width: 80%;\\n  margin: auto;\\n  margin-bottom: 0.5em;\\n  row-gap: 1em;\\n}\\n\\n.name-area {\\n  border: 2px solid #00c897;\\n  border-radius: 1em;\\n  width: 10em;\\n}\\n\\n.blur {\\n  filter: blur(4px);\\n}\\n\\n.comment-area {\\n  border: 2px solid #00c897;\\n  border-radius: 1em;\\n  width: 70%;\\n  height: 5em;\\n}\\n\\n.sub-button {\\n  font-family: 'Saira Condensed', sans-serif;\\n  font-size: 1rem;\\n  font-weight: bold;\\n  background-color: #00c897;\\n  color: #ececec;\\n  border: none;\\n  width: 100px;\\n  padding: 0.5em;\\n  border-radius: 1em;\\n  cursor: pointer;\\n}\\n\\n.sub-button:hover {\\n  background-color: #ececec;\\n  color: #00c897;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://capstone-project2/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://capstone-project2/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://capstone-project2/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://capstone-project2/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://capstone-project2/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://capstone-project2/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://capstone-project2/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://capstone-project2/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://capstone-project2/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://capstone-project2/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_populate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/populate.js */ \"./src/modules/populate.js\");\n\n\n\nconst render = async () => {\n  await (0,_modules_populate_js__WEBPACK_IMPORTED_MODULE_1__.displayShows)();\n  (0,_modules_populate_js__WEBPACK_IMPORTED_MODULE_1__.displayLikes)();\n  await (0,_modules_populate_js__WEBPACK_IMPORTED_MODULE_1__.diplayComments)();\n};\n\nrender();\n\n\n//# sourceURL=webpack://capstone-project2/./src/index.js?");

/***/ }),

/***/ "./src/modules/comment_pop_up.js":
/*!***************************************!*\
  !*** ./src/modules/comment_pop_up.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _url_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url_config.js */ \"./src/modules/url_config.js\");\n\n\nconst getTvShowInfo = async (id) => {\n  const response = await fetch(`${_url_config_js__WEBPACK_IMPORTED_MODULE_0__.TVMAZE_BASE_URL}/${id}`);\n  const data = await response.json();\n  return data;\n};\n\nconst getComments = async (id) => {\n  const response = await fetch(\n    `${_url_config_js__WEBPACK_IMPORTED_MODULE_0__.CAP_BASE_URL}/${_url_config_js__WEBPACK_IMPORTED_MODULE_0__.APP_KEY}/comments?item_id=${id}`,\n  );\n  const data = await response.json();\n  return data;\n};\n\nconst displayComments = (comments, container) => {\n  if (comments.length > 0) {\n    comments.forEach((comment) => {\n      container.innerHTML += `\n      <h5>${comment.creation_date} &nbsp; &nbsp; ${comment.username} &nbsp; :  &nbsp; ${comment.comment}</h5>`;\n    });\n  }\n};\n\nconst createComment = async (id, userName, message) => {\n  const userPost = {\n    item_id: id,\n    username: userName,\n    comment: message,\n  };\n  const response = await fetch(`${_url_config_js__WEBPACK_IMPORTED_MODULE_0__.CAP_BASE_URL}/${_url_config_js__WEBPACK_IMPORTED_MODULE_0__.APP_KEY}/comments`, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify(userPost),\n  });\n  const data = await response.json();\n  return data;\n};\n\nconst constructTvShowInfoDOM = (tvShow, comments) => {\n  const popUpCtn = document.getElementById('ctn-tv-info-window');\n  const main = document.querySelector('main');\n  const nav = document.querySelector('nav');\n  const body = document.querySelector('body');\n  body.style.overflow = 'hidden';\n  main.classList.add('blur');\n  nav.classList.add('blur');\n  popUpCtn.classList.add('show');\n  popUpCtn.innerHTML = '';\n  const showInfoDiv = `\n        <div class=\"ctn-tv-info\">\n            <div class=\"ctn-icn\">\n            <i class=\"fa-solid fa-xmark fa-xl\"></i>\n            </div>\n            <div class=\"ctn-img\">\n                <img class=\"popup-img\" src=\"${tvShow.image.original}\" alt=\"tvshow_preview\">\n            </div>\n            <h3 class=\"tvshow-name\">${tvShow.name}</h3>\n            <div class=\"tvshow_info\">\n                <h5 class=\"tvshow_item\">Type : <span>${tvShow.type}</span></h5>\n                <h5 class=\"tvshow_item\">Languages : <span>${tvShow.language}</span></h5>\n                <h5 class=\"tvshow_item\">Duration : <span>${tvShow.runtime}</span></h5>\n                <h5 class=\"tvshow_item\">Genre : <span>${tvShow.genres}</span></h5>\n            </div>\n            <div class=\"ctn-comment\">\n                <div class=\"ctn-comments-head\">\n                    <h3 class=\"comments-head\">Comments (<span class=\"num-comment\">${comments.length}</span>) </h3>\n                </div>\n                <div class=\"comment-list\"></div>\n            </div>\n            <h3 class=\"add-comment\">Add a comment</h3>\n            <form class=\"comment-form\" action=\"${_url_config_js__WEBPACK_IMPORTED_MODULE_0__.CAP_BASE_URL}/${_url_config_js__WEBPACK_IMPORTED_MODULE_0__.APP_KEY}/comments\" method=\"post\">\n                <input class=\"name-area\" type=\"text\" name=\"name\" id=\"name\" required>\n                <textarea class=\"comment-area\" type=\"text\" name=\"comment\" id=\"comment\" required></textarea>\n                <input class=\"sub-button\" type=\"submit\" name=\"Comment\">\n            </form>\n        </div>`;\n\n  popUpCtn.innerHTML += showInfoDiv;\n\n  const sd = popUpCtn.querySelector('.ctn-icn');\n  const commentList = popUpCtn.querySelector('.comment-list');\n\n  const nameField = popUpCtn.querySelector('.name-area');\n  const commentField = popUpCtn.querySelector('.comment-area');\n  const submitButton = popUpCtn.querySelector('form');\n\n  submitButton.addEventListener('submit', (e) => {\n    e.preventDefault();\n    createComment(tvShow.id, nameField.value, commentField.value);\n    nameField.value = '';\n    commentField.value = '';\n  });\n\n  displayComments(comments, commentList);\n\n  sd.addEventListener('click', () => {\n    body.style.overflow = 'auto';\n    main.classList.remove('blur');\n    nav.classList.remove('blur');\n    popUpCtn.classList.remove('show');\n  });\n};\n\nconst renderPopUp = (id) => {\n  Promise.all([getTvShowInfo(id), getComments(id)]).then((message) => {\n    if (!Array.isArray(message[1])) {\n      constructTvShowInfoDOM(message[0], []);\n    } else {\n      constructTvShowInfoDOM(message[0], message[1]);\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderPopUp);\n\n\n//# sourceURL=webpack://capstone-project2/./src/modules/comment_pop_up.js?");

/***/ }),

/***/ "./src/modules/populate.js":
/*!*********************************!*\
  !*** ./src/modules/populate.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"diplayComments\": () => (/* binding */ diplayComments),\n/* harmony export */   \"displayLikes\": () => (/* binding */ displayLikes),\n/* harmony export */   \"displayShows\": () => (/* binding */ displayShows)\n/* harmony export */ });\n/* harmony import */ var _url_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url_config.js */ \"./src/modules/url_config.js\");\n/* harmony import */ var _comment_pop_up_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comment_pop_up.js */ \"./src/modules/comment_pop_up.js\");\n\n\n\nconst appID = 'lwqk22PZhw0HzOrv1OVb';\n\n// ADD LIKE\nconst addLike = async (showID) => {\n  const data = {\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: showID,\n    }),\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n  };\n  const response = await fetch(`${_url_config_js__WEBPACK_IMPORTED_MODULE_0__.INVOLVEMENT_BASE_API}${appID}/likes/`, data);\n  return response;\n};\n\n// GET LIKE\nconst getLike = async () => {\n  const requestURL = `${_url_config_js__WEBPACK_IMPORTED_MODULE_0__.INVOLVEMENT_BASE_API}${appID}/likes/`;\n  const request = new Request(requestURL);\n\n  const response = await fetch(request);\n  const result = await response.json();\n\n  return result;\n};\n\nconst generate = async () => {\n  const requestURL = _url_config_js__WEBPACK_IMPORTED_MODULE_0__.TVMAZE_BASE_URL;\n  const request = new Request(requestURL);\n\n  const response = await fetch(request);\n  const result = await response.json();\n\n  return result;\n};\n\nconst countNumberOfItems = (newData) => newData.length;\n\n// DISPLAY SHOW COUNT ON HOME PAGE\nconst showHomeCounter = (newData) => {\n  const homeCounter = document.querySelector('.home-counter');\n  homeCounter.textContent = `(${countNumberOfItems(newData)})`;\n};\n\nconst displayShows = async () => {\n  const data = await generate();\n  const likes = await getLike();\n\n  const container = document.querySelector('.container');\n  container.innerHTML = '';\n  const newData = data.filter((show) => show.id < 22);\n\n  newData.forEach((show) => {\n    const like = likes\n      .filter((like) => typeof like.item_id === 'string')\n      .filter((like) => like.item_id === `${show.id}`)[0];\n    const showCard = `\n      <div id=${show.id} class=\"showCard\">\n      <img src=${show.image.medium} alt=\"TVshow thumbnail\"/>\n      <div class=\"title\">\n      <h2>${show.name}</h2>\n      <div class=\"update-likes\">\n      <i class=\"fa-regular fa-heart like-button\"></i><span class=\"likes\">${\n  like ? like.likes : 0\n} likes</span>\n      </div>\n      </div>\n      <button class=\"comment\">Comments</button>\n      </div>\n      `;\n\n    container.innerHTML += showCard;\n  });\n  showHomeCounter(newData);\n};\n\nconst displayLikes = () => {\n  const likeButtons = document.querySelectorAll('.like-button');\n\n  likeButtons.forEach((button) => {\n    button.addEventListener('click', async (e) => {\n      const currentShow = e.path[3];\n      const id = currentShow.getAttribute('id');\n      await addLike(id);\n\n      const updatLikes = currentShow.children[1].children[1].children[1];\n      const likes = await getLike();\n      const like = likes\n        .filter((like) => typeof like.item_id === 'string')\n        .filter((like) => like.item_id === `${id}`)[0];\n      updatLikes.textContent = `${like.likes} Likes`;\n    });\n  });\n};\n\nconst diplayComments = async () => {\n  await generate();\n\n  const commentButtons = document.querySelectorAll('.comment');\n\n  commentButtons.forEach((button) => {\n    button.addEventListener('click', (e) => {\n      const currentShow = e.path[1];\n      const id = currentShow.getAttribute('id');\n      (0,_comment_pop_up_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(id);\n    });\n  });\n};\n\n\n\n\n//# sourceURL=webpack://capstone-project2/./src/modules/populate.js?");

/***/ }),

/***/ "./src/modules/url_config.js":
/*!***********************************!*\
  !*** ./src/modules/url_config.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"APP_KEY\": () => (/* binding */ APP_KEY),\n/* harmony export */   \"CAP_BASE_URL\": () => (/* binding */ CAP_BASE_URL),\n/* harmony export */   \"INVOLVEMENT_BASE_API\": () => (/* binding */ INVOLVEMENT_BASE_API),\n/* harmony export */   \"TVMAZE_BASE_URL\": () => (/* binding */ TVMAZE_BASE_URL)\n/* harmony export */ });\nconst TVMAZE_BASE_URL = 'https://api.tvmaze.com/shows';\nconst INVOLVEMENT_BASE_API = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';\nconst CAP_BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';\nconst APP_KEY = 'aH5YpbgEiCoRRXqTNWfs';\n\n\n//# sourceURL=webpack://capstone-project2/./src/modules/url_config.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;