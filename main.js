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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./city.png */ \"./src/city.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./philippines.png */ \"./src/philippines.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: system-ui, sans-serif;\n    font-size: 20px;\n    --main-color: #9c0824;\n    --bg-color: #fffbf5;\n    --accent-color: #ded29d;\n}\n\n/* Header Styling */\n\nheader {\n  flex: auto;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--accent-color);\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  background-position: -180px -180px;\n  background-size: 360px 360px;\n  background-repeat: no-repeat;\n  box-shadow: inset 0 -1px 1px rgba(60, 60, 60, 0.5);\n}\n\nheader .name {\n  font-family: \"Allison\";\n  font-size: 6rem;\n  font-weight: 400;\n  text-shadow: 1.5px 1.5px 2px rgba(60, 60, 60, 0.5);\n  color: var(--main-color);\n}\n\nheader > nav {\n    display: flex;\n    justify-content: center;\n    gap: 100px;\n}\n\nheader button {\n    font-size: 1.5rem;\n    border: 0;\n    border-radius: 12px 12px 0 0;\n    width: 8rem;\n    height: 3rem;\n    background-color: var(--main-color);\n    color: var(--bg-color);\n}\n\nheader button:not(.open) {\n    box-shadow: inset 0 -2px 2px rgba(60, 60, 60, 0.5);\n}\n\nheader .open {\n    background-color: var(--bg-color);\n    color: var(--main-color);\n    box-shadow: 1px -1px 1px rgba(60, 60, 60, 0.5);\n}\n\n#content {\n    width: 100%;\n    height: 700px;\n    padding-bottom: 50px;\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n    background-position: 5% 50%;\n    background-repeat: no-repeat;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    align-items: center;\n}\n\n/* Main Content Styling */\n.main-stage {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 2rem;\n\n    width: 900px;\n\n    padding: 2rem 5rem;\n}\n\n.tag-line {\n    text-align: center;\n    color: var(--main-color);\n    font-size: 3rem;\n    font-family: \"Trebuchet MS\";\n}\n\n.pi-flag-icon {\n    width: 150px;\n    height: auto;\n}\n\n.rest-desc {\n    text-align: center;\n    font-size: 2rem;\n    font-weight: 500;\n    color: var(--main-color);\n}\n\n.rest-desc > p {\n    font-size: inherit;\n    text-shadow: 1.5px 1.5px 2px rgba(60, 60, 60, 0.5);\n}\n\n/* Menu Tab Styling */\n.title-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--accent-color);\n    border-radius: 20px;\n    box-shadow: 1px 1px 1px rgba(75, 74, 74, 0.503);\n    width: 12rem;\n    height: 4rem;\n}\n\n.menu-container {\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    gap: 30px;\n}\n\n.menu-item {\n    padding: 25px;\n    border-radius: 25px;\n    border: 2px solid black;\n    background-color: var(--accent-color);\n    box-shadow: 1.5px 1.5px 1px rgba(75, 74, 74, 0.503);\n    transition: 0.2s ease-in-out;\n}\n\n.menu-item:hover {\n    transform: translate(-4px, -4px);\n}\n\n.menu-item h3 {\n    font-size: 1.2rem;\n    color: var(--main-color);\n} \n\n.menu-item .price {\n    text-align: end;\n    font-size: 1.1rem;\n    font-weight: 400;\n    color: var(--bg-color);\n}\n\n/* About Tab Styling */\n.info-container {\n    display: grid;\n    grid-template-rows: 2fr 1fr 1fr 3fr;\n    align-items: center;\n\n    background-color: rgb(80, 52, 52);\n    color: var(--bg-color);\n    width: 350px;\n    padding: 20px 50px;\n    border-radius: 25px;\n}\n\n.address {\n    font-weight: 500;\n    grid-row: 1 / 2;\n}\n\n.hours-label {\n    grid-row: 3 / 4;\n    text-decoration: underline;\n    justify-self: center;\n}\n\n.hours {\n    grid-row: 4 / 5;\n}\n\n.info-container li {\n    list-style-type: none;\n    display: flex;\n    justify-content: space-between;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about_builder.js":
/*!******************************!*\
  !*** ./src/about_builder.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AboutPageBuilder: () => (/* binding */ AboutPageBuilder)\n/* harmony export */ });\nconst AboutPageBuilder = function () {\n    const content = document.querySelector(\"#content\");\n\n    const stage = document.createElement(\"div\");\n    stage.classList.add(\"main-stage\");\n\n    // About tab heading\n    const aboutTitleContainer = document.createElement(\"div\");\n    const aboutTitle = document.createElement(\"h2\");\n    aboutTitleContainer.classList.add(\"title-container\");\n    aboutTitle.classList.add(\"tag-line\");\n    aboutTitle.textContent = \"About\";\n    aboutTitleContainer.appendChild(aboutTitle);\n    stage.appendChild(aboutTitleContainer);\n\n    // Info Container\n    // Info container\n    const infoContainer = document.createElement(\"div\");\n    const address = document.createElement(\"p\");\n    const hrsLabel = document.createElement(\"p\");\n    infoContainer.classList.add(\"info-container\");\n    address.classList.add(\"address\");\n    address.innerHTML = \"1234 This St<br>Placeville, Country\";\n    hrsLabel.classList.add(\"hours-label\");\n    hrsLabel.textContent = \"Hours\";\n\n    infoContainer.appendChild(address);\n    infoContainer.appendChild(hrsLabel);\n\n    const hours = document.createElement(\"ul\");\n    hours.classList.add(\"hours\");\n\n    const monFriLi = document.createElement(\"li\");\n    const monFriLabel = document.createElement(\"span\");\n    const monFriHours = document.createElement(\"span\");\n    monFriLabel.classList.add(\"day\");\n    monFriLabel.textContent = \"Mon-Fri\";\n    monFriHours.classList.add(\"hours\");\n    monFriHours.textContent = \"2PM - 12AM\";\n    monFriLi.appendChild(monFriLabel);\n    monFriLi.appendChild(monFriHours);\n\n    const wkndLi = document.createElement(\"li\");\n    const wkndLabel = document.createElement(\"span\");\n    const wkndHours = document.createElement(\"span\");\n    wkndLabel.classList.add(\"day\");\n    wkndLabel.textContent = \"Sat-Sun\";\n    wkndHours.classList.add(\"hours\");\n    wkndHours.textContent = \"5PM - 2AM\";\n    wkndLi.appendChild(wkndLabel);\n    wkndLi.appendChild(wkndHours);\n\n    hours.appendChild(monFriLi);\n    hours.appendChild(wkndLi);\n\n    infoContainer.appendChild(hours);\n    stage.appendChild(infoContainer);\n\n    content.appendChild(stage);\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/about_builder.js?");

/***/ }),

/***/ "./src/home_builder.js":
/*!*****************************!*\
  !*** ./src/home_builder.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HomePageBuilder: () => (/* binding */ HomePageBuilder)\n/* harmony export */ });\n/* harmony import */ var _philippines_flag_circle_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./philippines-flag-circle.png */ \"./src/philippines-flag-circle.png\");\n\n\nconst HomePageBuilder = function() {\n    const content = document.querySelector(\"#content\");\n\n    const stage = document.createElement(\"div\");\n    stage.classList.add(\"main-stage\");\n\n    // Tag line content\n    const tagLineContainer = document.createElement(\"div\");\n    const tagLine = document.createElement(\"h2\");\n    tagLineContainer.classList.add(\"tag-line-container\");\n    tagLine.classList.add(\"tag-line\");\n    tagLine.textContent = \"The Best of Philippine Cuisine\";\n\n    tagLineContainer.appendChild(tagLine);\n    stage.appendChild(tagLineContainer);\n\n    // Circular PI Icon\n    const piIcon = document.createElement(\"img\");\n    piIcon.src = _philippines_flag_circle_png__WEBPACK_IMPORTED_MODULE_0__;\n    piIcon.alt = \"Circular Phlippine flag icon\";\n    piIcon.classList.add(\"pi-flag-icon\");\n    stage.appendChild(piIcon);\n\n    // Restaurant Description\n    const restDescContainer = document.createElement(\"div\");\n    const restDesc = document.createElement(\"p\");\n    restDescContainer.classList.add(\"rest-desc\");\n    \n    restDesc.textContent = \"Experience the diverse flavors of the islands of the Philippines \\\n    present in breakfast, lunch, and dinner foods.\";\n\n    restDescContainer.appendChild(restDesc);\n    stage.appendChild(restDescContainer);\n\n    // Add tab content to page\n    content.appendChild(stage);\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home_builder.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home_builder */ \"./src/home_builder.js\");\n/* harmony import */ var _menu_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu_builder */ \"./src/menu_builder.js\");\n/* harmony import */ var _about_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about_builder */ \"./src/about_builder.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n\n\n\nconsole.log(\"Script is running\");\n(0,_home_builder__WEBPACK_IMPORTED_MODULE_0__.HomePageBuilder)();\n\n/*\n    Nav button listeners\n*/\nconst setTabbing = (function() {\n    const content = document.querySelector(\"#content\");\n    const homeBtn = document.querySelector(\"nav .home\");\n    const menuBtn = document.querySelector(\"nav .menu\");\n    const aboutBtn = document.querySelector(\"nav .about\");\n\n    for (const prts of [[homeBtn, _home_builder__WEBPACK_IMPORTED_MODULE_0__.HomePageBuilder], [menuBtn, _menu_builder__WEBPACK_IMPORTED_MODULE_1__.MenuPageBuilder], [aboutBtn, _about_builder__WEBPACK_IMPORTED_MODULE_2__.AboutPageBuilder]]) {\n        prts[0].addEventListener(\"click\", (function(e) {\n            // clear tab\n            while (content.firstChild) {\n                content.removeChild(content.firstChild);\n            }\n\n            // print out new tab\n            prts[1]();\n\n            // change color of btn of active tab\n            for (const b of [homeBtn, menuBtn, aboutBtn]) {\n                b.classList.remove(\"open\");\n            }\n            \n            e.target.classList.add(\"open\");\n        }));\n    }\n})();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu_builder.js":
/*!*****************************!*\
  !*** ./src/menu_builder.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MenuPageBuilder: () => (/* binding */ MenuPageBuilder)\n/* harmony export */ });\nconst MenuPageBuilder = function () {\n    const content = document.querySelector(\"#content\");\n\n    const stage = document.createElement(\"div\");\n    stage.classList.add(\"main-stage\");\n\n    // Menu tab heading\n    const menuTitleContainer = document.createElement(\"div\");\n    const menuTitle = document.createElement(\"h2\");\n    menuTitleContainer.classList.add(\"title-container\");\n    menuTitle.classList.add(\"tag-line\");\n    menuTitle.textContent = \"Menu\";\n    menuTitleContainer.appendChild(menuTitle);\n    stage.appendChild(menuTitleContainer);\n\n    // Menu Items\n    const menuContainer = document.createElement(\"div\");\n    menuContainer.classList.add(\"menu-container\");\n\n    const foods = [\n        {\n            name: \"Bangusilog\",\n            price: \"$15.99\",\n            description: \"Marinated milkfish. Served with egg and garlic rice.\"\n        },\n        {\n            name: \"Tapsilog\",\n            price: \"$15.99\",\n            description: \"Thinly sliced marinated beef chuck roll in garlic, salt, pepper, and vinegar. Served with egg and garlic rice.\"\n        },\n        {\n            name: \"Cornsilog\",\n            price: \"$15.99\",\n            description: \"Corn beef. Served with egg and garlic rice.\"\n        },\n        {\n            name: \"Porksilog\",\n            price: \"$14.99\",\n            description: \"Served with egg and garlic rice.\"\n        },\n        {\n            name: \"Tocilog\",\n            price: \"$14.99\",\n            description: \"Thinly sliced marinated pork shoulder in garlic, salt, pepper, and sugar. Served with egg and garlic rice.\"\n        },\n        {\n            name: \"Longsilog\",\n            price: \"$13.99\",\n            description: \"Filipino sweet sausage. Served with egg and garlic rice.\"\n        }\n    ];\n\n    for (const food of foods) {\n        const menuItem = document.createElement(\"div\");\n        menuItem.classList.add(\"menu-item\");\n\n        const foodName = document.createElement(\"h3\");\n        const foodPrice = document.createElement(\"p\");\n        const foodDesc = document.createElement(\"p\");\n\n        foodName.textContent = food.name;\n        foodPrice.textContent = food.price;\n        foodPrice.classList.add(\"price\");\n        foodDesc.textContent = food.description;\n\n        menuItem.appendChild(foodName);\n        menuItem.appendChild(foodPrice);\n        menuItem.appendChild(foodDesc);\n\n        menuContainer.appendChild(menuItem);\n    }\n    stage.appendChild(menuContainer);\n\n    content.appendChild(stage);\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu_builder.js?");

/***/ }),

/***/ "./src/city.png":
/*!**********************!*\
  !*** ./src/city.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3fa72d586e9c8d9f62e1.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/city.png?");

/***/ }),

/***/ "./src/philippines-flag-circle.png":
/*!*****************************************!*\
  !*** ./src/philippines-flag-circle.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fba3eb79466bd886ad31.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/philippines-flag-circle.png?");

/***/ }),

/***/ "./src/philippines.png":
/*!*****************************!*\
  !*** ./src/philippines.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b81793c171b31bc4cb51.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/philippines.png?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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