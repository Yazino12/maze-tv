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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Fredoka+One&family=Saira+Condensed&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n  --popup-text-color: rgb(34, 33, 33);\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: 'Saira Condensed', sans-serif;\\r\\n  margin: 0;\\r\\n  color: #ececec;\\r\\n}\\r\\n\\r\\nh1,\\r\\nh2,\\r\\np {\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\na,\\r\\nbutton,\\r\\ni {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\nul {\\r\\n  list-style-type: none;\\r\\n}\\r\\n\\r\\nnav {\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n  align-items: center;\\r\\n  background-color: #019267;\\r\\n  box-shadow: rgba(17, 17, 26, 0.1) 0 1px 0;\\r\\n  padding: 1em;\\r\\n}\\r\\n\\r\\nnav .left {\\r\\n  display: flex;\\r\\n  gap: 0.5em;\\r\\n  align-items: center;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\nnav .left .logo-wrapper {\\r\\n  padding: 1em 0.5em;\\r\\n  border: 2px solid #ececec;\\r\\n  border-radius: 50%;\\r\\n}\\r\\n\\r\\nnav .left h1 {\\r\\n  font-family: 'Fredoka One', 'cursive', sans-serif;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\nnav .right {\\r\\n  display: flex;\\r\\n  gap: 2em;\\r\\n}\\r\\n\\r\\nnav .right .active {\\r\\n  font-weight: bold;\\r\\n  text-decoration: underline;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  display: flex;\\r\\n  min-height: 780px;\\r\\n}\\r\\n\\r\\nmain .container {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  gap: 3em;\\r\\n  width: 90%;\\r\\n  margin: 3em auto;\\r\\n}\\r\\n\\r\\nmain .container .showCard {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 0.5em;\\r\\n  background-color: #00c897;\\r\\n}\\r\\n\\r\\nmain .container .showCard .title {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 0 0.5em;\\r\\n  background-color: #019267;\\r\\n}\\r\\n\\r\\nmain .container .showCard .title h2 {\\r\\n  line-height: 1em;\\r\\n  width: 200px;\\r\\n}\\r\\n\\r\\nmain .container .showCard .title div {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  padding: 0.5em 0;\\r\\n}\\r\\n\\r\\nmain .container .showCard .comment {\\r\\n  font-family: 'Saira Condensed', sans-serif;\\r\\n  font-size: 1rem;\\r\\n  font-weight: bold;\\r\\n  background-color: #019267;\\r\\n  color: #ececec;\\r\\n  border: none;\\r\\n  width: 100px;\\r\\n  padding: 0.5em;\\r\\n  margin: auto auto 1em auto;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  display: flex;\\r\\n  background-color: #019267;\\r\\n  box-shadow: rgba(17, 17, 26, 0.1) 0 1px 0;\\r\\n  padding: 1em;\\r\\n}\\r\\n\\r\\n.ctn-tv-info-window {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.show {\\r\\n  display: block;\\r\\n  position: fixed;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  color: var(--popup-text-color);\\r\\n  background-color: rgba(0, 0, 0, 0.282);\\r\\n}\\r\\n\\r\\n.ctn-tv-info {\\r\\n  width: 50%;\\r\\n  height: 80%;\\r\\n  margin: auto;\\r\\n  margin-top: 2rem;\\r\\n  padding: 2rem;\\r\\n  background-color: white;\\r\\n  border-radius: 10px;\\r\\n  overflow-y: scroll;\\r\\n}\\r\\n\\r\\n.ctn-img img {\\r\\n  margin-left: auto;\\r\\n  margin-right: auto;\\r\\n  display: block;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n.tvshow-name {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.ctn-comments-head {\\r\\n  align-content: center;\\r\\n}\\r\\n\\r\\n.comments-head {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.comment-form {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  row-gap: 1rem;\\r\\n}\\r\\n\\r\\n.tvshow_info {\\r\\n  display: grid;\\r\\n  grid-template-columns: 50% 50%;\\r\\n}\\r\\n\\r\\n.tvshow_info h5 span {\\r\\n  color: rgb(127, 159, 159);\\r\\n}\\r\\n\\r\\n.ctn-icn {\\r\\n  display: flex;\\r\\n  flex-direction: row-reverse;\\r\\n}\\r\\n\\r\\n.name-area {\\r\\n  width: 10rem;\\r\\n}\\r\\n\\r\\n.comment-area {\\r\\n  width: 20rem;\\r\\n  height: 5rem;\\r\\n}\\r\\n\\r\\n.sub-button {\\r\\n  width: 10rem;\\r\\n  height: 2rem;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://capstone-project2/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_populate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/populate.js */ \"./src/modules/populate.js\");\n\n\n\nconst render = () => {\n  (0,_modules_populate_js__WEBPACK_IMPORTED_MODULE_1__.displayShows)();\n  (0,_modules_populate_js__WEBPACK_IMPORTED_MODULE_1__.diplayComments)();\n  (0,_modules_populate_js__WEBPACK_IMPORTED_MODULE_1__.displayLikes)();\n};\n\nrender();\n\n\n//# sourceURL=webpack://capstone-project2/./src/index.js?");

/***/ }),

/***/ "./src/modules/comment_pop_up.js":
/*!***************************************!*\
  !*** ./src/modules/comment_pop_up.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _url_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url_config.js */ \"./src/modules/url_config.js\");\n\r\n\r\nconst getTvShowInfo = async (id) => {\r\n  const response = await fetch(`${_url_config_js__WEBPACK_IMPORTED_MODULE_0__.TVMAZE_BASE_URL}/${id}`);\r\n  const data = await response.json();\r\n  return data;\r\n};\r\n\r\nconst constructTvShowInfoDOM = (tvShow) => {\r\n  const popUpCtn = document.getElementById('ctn-tv-info-window');\r\n  popUpCtn.classList.add('show');\r\n  popUpCtn.innerHTML = '';\r\n  const showInfoDiv = `\r\n        <div class=\"ctn-tv-info\">\r\n            <div class=\"ctn-icn\">\r\n            <i class=\"fa-solid fa-xmark\"></i>\r\n            </div>\r\n            <div class=\"ctn-img\">\r\n                <img src=\"${tvShow.image.original}\" alt=\"tvshow_preview\">\r\n            </div>\r\n            <h3 class=\"tvshow-name\">${tvShow.name}</h3>\r\n            <div class=\"tvshow_info\">\r\n                <h5>Type : <span>${tvShow.type}</span></h5>\r\n                <h5>Languages : <span>${tvShow.language}</span></h5>\r\n                <h5>Duration : <span>${tvShow.runtime}</span></h5>\r\n                <h5>Genre : <span>${tvShow.genres}</span></h5>\r\n            </div>\r\n            <div class=\"ctn-comment\">\r\n                <div class=\"ctn-comments-head\">\r\n                    <h3 class=\"comments-head\">Comments (<span class=\"num-comment\"></span>) </h3>\r\n                </div>\r\n                <div class=\"comment-list\"></div>\r\n            </div>\r\n            <h3>Add a comment</h3>\r\n            <form class=\"comment-form\" action=\"\" method=\"post\">\r\n                <input class=\"name-area\" type=\"text\" name=\"name\" id=\"name\">\r\n                <textarea class=\"comment-area\" type=\"text\" name=\"comment\" id=\"comment\" required></textarea>\r\n                <input class=\"sub-button\" type=\"submit\" value=\"Comment\">\r\n            </form>\r\n        </div>`;\r\n\r\n  popUpCtn.innerHTML += showInfoDiv;\r\n  const sd = popUpCtn.querySelector('.ctn-icn');\r\n  sd.addEventListener('click', () => {\r\n    popUpCtn.classList.remove('show');\r\n  });\r\n};\r\n\r\nconst renderPopUp = (id) => {\r\n  getTvShowInfo(id).then((tvShow) => constructTvShowInfoDOM(tvShow));\r\n};\r\n\r\n// const createComment = (id) => {\r\n// send the comment to the server\r\n// };\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderPopUp);\r\n\n\n//# sourceURL=webpack://capstone-project2/./src/modules/comment_pop_up.js?");

/***/ }),

/***/ "./src/modules/populate.js":
/*!*********************************!*\
  !*** ./src/modules/populate.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"diplayComments\": () => (/* binding */ diplayComments),\n/* harmony export */   \"displayLikes\": () => (/* binding */ displayLikes),\n/* harmony export */   \"displayShows\": () => (/* binding */ displayShows)\n/* harmony export */ });\n/* harmony import */ var _url_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url_config.js */ \"./src/modules/url_config.js\");\n/* harmony import */ var _comment_pop_up_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comment_pop_up.js */ \"./src/modules/comment_pop_up.js\");\n\r\n\r\n\r\nconst appID = 'lwqk22PZhw0HzOrv1OVb';\r\n\r\n// ADD LIKE\r\nconst addLike = async (likes) => {\r\n  const data = {\r\n    method: 'POST',\r\n    body: JSON.stringify({\r\n      item_id: likes,\r\n    }),\r\n    headers: {\r\n      'Content-type': 'application/json; charset=UTF-8',\r\n    },\r\n  };\r\n  const response = await fetch(`${_url_config_js__WEBPACK_IMPORTED_MODULE_0__.INVOLVEMENT_BASE_API}${appID}/likes/`, data);\r\n  const result = await response.json();\r\n  return result;\r\n};\r\n\r\n// GET LIKE\r\nconst getLike = async () => {\r\n  const requestURL = `${_url_config_js__WEBPACK_IMPORTED_MODULE_0__.INVOLVEMENT_BASE_API}${appID}/likes/`;\r\n  const request = new Request(requestURL);\r\n\r\n  const response = await fetch(request);\r\n  const result = await response.json();\r\n\r\n  return result;\r\n};\r\n\r\nconst generate = async () => {\r\n  const requestURL = _url_config_js__WEBPACK_IMPORTED_MODULE_0__.TVMAZE_BASE_URL;\r\n  const request = new Request(requestURL);\r\n\r\n  const response = await fetch(request);\r\n  const result = await response.json();\r\n\r\n  return result;\r\n};\r\n\r\nconst displayShows = async () => {\r\n  const data = await generate();\r\n\r\n  const container = document.querySelector('.container');\r\n\r\n  data.forEach((show) => {\r\n    const showCard = `\r\n      <div id=${show.id} class=\"showCard\">\r\n      <img src=${show.image.medium} alt=\"TVshow thumbnail\"/>\r\n      <div class=\"title\">\r\n      <h2>${show.name}</h2>\r\n      <div>\r\n      <i class=\"fa-regular fa-heart like-button\"></i><span class=\"likes\">5 likes</span>\r\n      </div>\r\n      </div>\r\n      <button class=\"comment\">Comments</button>\r\n      </div>\r\n      `;\r\n\r\n    container.innerHTML += showCard;\r\n  });\r\n};\r\n\r\nconst displayLikes = () => {\r\n  const likeButtons = document.querySelectorAll('like-button');\r\n\r\n  likeButtons.forEach((button) => {\r\n    button.addEventListener('click', (e) => {\r\n      const currentShow = e.path[1];\r\n      console.log(currentShow);\r\n    });\r\n  });\r\n};\r\n\r\nconst diplayComments = async () => {\r\n  await generate();\r\n\r\n  const commentButtons = document.querySelectorAll('.comment');\r\n\r\n  commentButtons.forEach((button) => {\r\n    button.addEventListener('click', (e) => {\r\n      const currentShow = e.path[1];\r\n      const id = currentShow.getAttribute('id');\r\n      (0,_comment_pop_up_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(id);\r\n    });\r\n  });\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://capstone-project2/./src/modules/populate.js?");

/***/ }),

/***/ "./src/modules/url_config.js":
/*!***********************************!*\
  !*** ./src/modules/url_config.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"APP_KEY\": () => (/* binding */ APP_KEY),\n/* harmony export */   \"CAP_BASE_URL\": () => (/* binding */ CAP_BASE_URL),\n/* harmony export */   \"INVOLVEMENT_BASE_API\": () => (/* binding */ INVOLVEMENT_BASE_API),\n/* harmony export */   \"TVMAZE_BASE_URL\": () => (/* binding */ TVMAZE_BASE_URL)\n/* harmony export */ });\nconst TVMAZE_BASE_URL = 'https://api.tvmaze.com/shows';\r\nconst INVOLVEMENT_BASE_API = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';\r\nconst CAP_BASE_URL = '';\r\nconst APP_KEY = '';\r\n\n\n//# sourceURL=webpack://capstone-project2/./src/modules/url_config.js?");

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