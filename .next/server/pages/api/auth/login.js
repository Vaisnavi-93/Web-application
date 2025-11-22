"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/login";
exports.ids = ["pages/api/auth/login"];
exports.modules = {

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Flogin&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5Clogin.js&middlewareConfigBase64=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Flogin&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5Clogin.js&middlewareConfigBase64=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_auth_login_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages\\api\\auth\\login.js */ \"(api)/./pages/api/auth/login.js\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_auth_login_js__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_auth_login_js__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/auth/login\",\n        pathname: \"/api/auth/login\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _pages_api_auth_login_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRmF1dGglMkZsb2dpbiZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnBhZ2VzJTVDYXBpJTVDYXV0aCU1Q2xvZ2luLmpzJm1pZGRsZXdhcmVDb25maWdCYXNlNjQ9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNMO0FBQzFEO0FBQ3lEO0FBQ3pEO0FBQ0EsaUVBQWUsd0VBQUssQ0FBQyxxREFBUSxZQUFZLEVBQUM7QUFDMUM7QUFDTyxlQUFlLHdFQUFLLENBQUMscURBQVE7QUFDcEM7QUFDTyx3QkFBd0IsZ0hBQW1CO0FBQ2xEO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFlBQVk7QUFDWixDQUFDOztBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNydWQtYXBwLz9hOWNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2VzQVBJUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9wYWdlcy1hcGkvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgaG9pc3QgfSBmcm9tIFwibmV4dC9kaXN0L2J1aWxkL3RlbXBsYXRlcy9oZWxwZXJzXCI7XG4vLyBJbXBvcnQgdGhlIHVzZXJsYW5kIGNvZGUuXG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiLi9wYWdlc1xcXFxhcGlcXFxcYXV0aFxcXFxsb2dpbi5qc1wiO1xuLy8gUmUtZXhwb3J0IHRoZSBoYW5kbGVyIChzaG91bGQgYmUgdGhlIGRlZmF1bHQgZXhwb3J0KS5cbmV4cG9ydCBkZWZhdWx0IGhvaXN0KHVzZXJsYW5kLCBcImRlZmF1bHRcIik7XG4vLyBSZS1leHBvcnQgY29uZmlnLlxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IGhvaXN0KHVzZXJsYW5kLCBcImNvbmZpZ1wiKTtcbi8vIENyZWF0ZSBhbmQgZXhwb3J0IHRoZSByb3V0ZSBtb2R1bGUgdGhhdCB3aWxsIGJlIGNvbnN1bWVkLlxuZXhwb3J0IGNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IFBhZ2VzQVBJUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLlBBR0VTX0FQSSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvbG9naW5cIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL2xvZ2luXCIsXG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgYXJlbid0IHVzZWQgaW4gcHJvZHVjdGlvbi5cbiAgICAgICAgYnVuZGxlUGF0aDogXCJcIixcbiAgICAgICAgZmlsZW5hbWU6IFwiXCJcbiAgICB9LFxuICAgIHVzZXJsYW5kXG59KTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFnZXMtYXBpLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Flogin&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5Clogin.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./lib/mongoose.js":
/*!*************************!*\
  !*** ./lib/mongoose.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGO_URI = process.env.MONGO_URI;\nif (!MONGO_URI) throw new Error(\"Please define MONGO_URI in .env.local\");\nlet cached = global.mongoose;\nif (!cached) cached = global.mongoose = {\n    conn: null,\n    promise: null\n};\nasync function dbConnect() {\n    if (cached.conn) return cached.conn;\n    if (!cached.promise) {\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGO_URI).then((m)=>m);\n    }\n    cached.conn = await cached.promise;\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29vc2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBQ2hDLE1BQU1DLFlBQVlDLFFBQVFDLEdBQUcsQ0FBQ0YsU0FBUztBQUN2QyxJQUFJLENBQUNBLFdBQVcsTUFBTSxJQUFJRyxNQUFNO0FBQ2hDLElBQUlDLFNBQVNDLE9BQU9OLFFBQVE7QUFDNUIsSUFBSSxDQUFDSyxRQUFRQSxTQUFTQyxPQUFPTixRQUFRLEdBQUc7SUFBRU8sTUFBTTtJQUFNQyxTQUFTO0FBQUs7QUFDcEUsZUFBZUM7SUFDYixJQUFJSixPQUFPRSxJQUFJLEVBQUUsT0FBT0YsT0FBT0UsSUFBSTtJQUNuQyxJQUFJLENBQUNGLE9BQU9HLE9BQU8sRUFBRTtRQUNuQkgsT0FBT0csT0FBTyxHQUFHUix1REFBZ0IsQ0FBQ0MsV0FBV1UsSUFBSSxDQUFDQyxDQUFBQSxJQUFHQTtJQUN2RDtJQUNBUCxPQUFPRSxJQUFJLEdBQUcsTUFBTUYsT0FBT0csT0FBTztJQUNsQyxPQUFPSCxPQUFPRSxJQUFJO0FBQ3BCO0FBQ0EsaUVBQWVFLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY3J1ZC1hcHAvLi9saWIvbW9uZ29vc2UuanM/MTYzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuY29uc3QgTU9OR09fVVJJID0gcHJvY2Vzcy5lbnYuTU9OR09fVVJJO1xuaWYgKCFNT05HT19VUkkpIHRocm93IG5ldyBFcnJvcignUGxlYXNlIGRlZmluZSBNT05HT19VUkkgaW4gLmVudi5sb2NhbCcpO1xubGV0IGNhY2hlZCA9IGdsb2JhbC5tb25nb29zZTtcbmlmICghY2FjaGVkKSBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2UgPSB7IGNvbm46IG51bGwsIHByb21pc2U6IG51bGwgfTtcbmFzeW5jIGZ1bmN0aW9uIGRiQ29ubmVjdCgpe1xuICBpZiAoY2FjaGVkLmNvbm4pIHJldHVybiBjYWNoZWQuY29ubjtcbiAgaWYgKCFjYWNoZWQucHJvbWlzZSkge1xuICAgIGNhY2hlZC5wcm9taXNlID0gbW9uZ29vc2UuY29ubmVjdChNT05HT19VUkkpLnRoZW4obT0+bSk7XG4gIH1cbiAgY2FjaGVkLmNvbm4gPSBhd2FpdCBjYWNoZWQucHJvbWlzZTtcbiAgcmV0dXJuIGNhY2hlZC5jb25uO1xufVxuZXhwb3J0IGRlZmF1bHQgZGJDb25uZWN0O1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiTU9OR09fVVJJIiwicHJvY2VzcyIsImVudiIsIkVycm9yIiwiY2FjaGVkIiwiZ2xvYmFsIiwiY29ubiIsInByb21pc2UiLCJkYkNvbm5lY3QiLCJjb25uZWN0IiwidGhlbiIsIm0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/mongoose.js\n");

/***/ }),

/***/ "(api)/./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    createdAt: {\n        type: Date,\n        default: Date.now\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvVXNlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFDaEMsTUFBTUMsYUFBYSxJQUFJRCx3REFBZSxDQUFDO0lBQ3JDRyxNQUFLO1FBQUNDLE1BQUtDO1FBQU9DLFVBQVM7SUFBSTtJQUMvQkMsT0FBTTtRQUFDSCxNQUFLQztRQUFPQyxVQUFTO1FBQUtFLFFBQU87SUFBSTtJQUM1Q0MsVUFBUztRQUFDTCxNQUFLQztRQUFPQyxVQUFTO0lBQUk7SUFDbkNJLFdBQVU7UUFBQ04sTUFBS087UUFBS0MsU0FBUUQsS0FBS0UsR0FBRztJQUFBO0FBQ3ZDO0FBQ0EsaUVBQWViLHdEQUFlLENBQUNlLElBQUksSUFBSWYscURBQWMsQ0FBQyxRQUFRQyxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNydWQtYXBwLy4vbW9kZWxzL1VzZXIuanM/NzM2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuY29uc3QgVXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICBuYW1lOnt0eXBlOlN0cmluZyxyZXF1aXJlZDp0cnVlfSxcbiAgZW1haWw6e3R5cGU6U3RyaW5nLHJlcXVpcmVkOnRydWUsdW5pcXVlOnRydWV9LFxuICBwYXNzd29yZDp7dHlwZTpTdHJpbmcscmVxdWlyZWQ6dHJ1ZX0sXG4gIGNyZWF0ZWRBdDp7dHlwZTpEYXRlLGRlZmF1bHQ6RGF0ZS5ub3d9XG59KTtcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5Vc2VyIHx8IG1vbmdvb3NlLm1vZGVsKCdVc2VyJywgVXNlclNjaGVtYSk7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJVc2VyU2NoZW1hIiwiU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImVtYWlsIiwidW5pcXVlIiwicGFzc3dvcmQiLCJjcmVhdGVkQXQiLCJEYXRlIiwiZGVmYXVsdCIsIm5vdyIsIm1vZGVscyIsIlVzZXIiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/User.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/login.js":
/*!*********************************!*\
  !*** ./pages/api/auth/login.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/mongoose */ \"(api)/./lib/mongoose.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/User */ \"(api)/./models/User.js\");\n/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/auth */ \"(api)/./utils/auth.js\");\n\n\n\nasync function handler(req, res) {\n    if (req.method !== \"POST\") return res.status(405).end();\n    await (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    try {\n        const { email, password } = req.body;\n        const user = await _models_User__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n            email\n        });\n        if (!user) return res.status(400).json({\n            message: \"Invalid credentials\"\n        });\n        const ok = await (0,_utils_auth__WEBPACK_IMPORTED_MODULE_2__.comparePasswords)(password, user.password);\n        if (!ok) return res.status(400).json({\n            message: \"Invalid credentials\"\n        });\n        const token = (0,_utils_auth__WEBPACK_IMPORTED_MODULE_2__.signToken)({\n            id: user._id\n        });\n        res.json({\n            token,\n            user: {\n                id: user._id,\n                name: user.name,\n                email: user.email\n            }\n        });\n    } catch (err) {\n        console.error(err);\n        res.status(500).json({\n            message: \"Server error\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9sb2dpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQThDO0FBQ047QUFDMEI7QUFDbkQsZUFBZUksUUFBUUMsR0FBRyxFQUFDQyxHQUFHO0lBQzNDLElBQUlELElBQUlFLE1BQU0sS0FBSyxRQUFRLE9BQU9ELElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxHQUFHO0lBQ3JELE1BQU1ULHlEQUFTQTtJQUNmLElBQUk7UUFDRixNQUFNLEVBQUVVLEtBQUssRUFBQ0MsUUFBUSxFQUFFLEdBQUdOLElBQUlPLElBQUk7UUFDbkMsTUFBTUMsT0FBTyxNQUFNWiw0REFBWSxDQUFDO1lBQUVTO1FBQU07UUFDeEMsSUFBSSxDQUFDRyxNQUFNLE9BQU9QLElBQUlFLE1BQU0sQ0FBQyxLQUFLTyxJQUFJLENBQUM7WUFBRUMsU0FBUztRQUFzQjtRQUN4RSxNQUFNQyxLQUFLLE1BQU1mLDZEQUFnQkEsQ0FBQ1MsVUFBVUUsS0FBS0YsUUFBUTtRQUN6RCxJQUFJLENBQUNNLElBQUksT0FBT1gsSUFBSUUsTUFBTSxDQUFDLEtBQUtPLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQXNCO1FBQ3RFLE1BQU1FLFFBQVFmLHNEQUFTQSxDQUFDO1lBQUVnQixJQUFJTixLQUFLTyxHQUFHO1FBQUM7UUFDdkNkLElBQUlTLElBQUksQ0FBQztZQUFFRztZQUFPTCxNQUFLO2dCQUFFTSxJQUFHTixLQUFLTyxHQUFHO2dCQUFFQyxNQUFLUixLQUFLUSxJQUFJO2dCQUFFWCxPQUFNRyxLQUFLSCxLQUFLO1lBQUM7UUFBQztJQUMxRSxFQUFFLE9BQU1ZLEtBQUk7UUFDVkMsUUFBUUMsS0FBSyxDQUFDRjtRQUNkaEIsSUFBSUUsTUFBTSxDQUFDLEtBQUtPLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQWU7SUFDakQ7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jcnVkLWFwcC8uL3BhZ2VzL2FwaS9hdXRoL2xvZ2luLmpzPzEzMTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRiQ29ubmVjdCBmcm9tICcuLi8uLi8uLi9saWIvbW9uZ29vc2UnO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL1VzZXInO1xuaW1wb3J0IHsgY29tcGFyZVBhc3N3b3Jkcywgc2lnblRva2VuIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvYXV0aCc7XG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSxyZXMpe1xuICBpZiAocmVxLm1ldGhvZCAhPT0gJ1BPU1QnKSByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmVuZCgpO1xuICBhd2FpdCBkYkNvbm5lY3QoKTtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IGVtYWlsLHBhc3N3b3JkIH0gPSByZXEuYm9keTtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWwgfSk7XG4gICAgaWYgKCF1c2VyKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiAnSW52YWxpZCBjcmVkZW50aWFscycgfSk7XG4gICAgY29uc3Qgb2sgPSBhd2FpdCBjb21wYXJlUGFzc3dvcmRzKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcbiAgICBpZiAoIW9rKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiAnSW52YWxpZCBjcmVkZW50aWFscycgfSk7XG4gICAgY29uc3QgdG9rZW4gPSBzaWduVG9rZW4oeyBpZDogdXNlci5faWQgfSk7XG4gICAgcmVzLmpzb24oeyB0b2tlbiwgdXNlcjp7IGlkOnVzZXIuX2lkLCBuYW1lOnVzZXIubmFtZSwgZW1haWw6dXNlci5lbWFpbCB9fSk7XG4gIH0gY2F0Y2goZXJyKXtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnU2VydmVyIGVycm9yJyB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImRiQ29ubmVjdCIsIlVzZXIiLCJjb21wYXJlUGFzc3dvcmRzIiwic2lnblRva2VuIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImVuZCIsImVtYWlsIiwicGFzc3dvcmQiLCJib2R5IiwidXNlciIsImZpbmRPbmUiLCJqc29uIiwibWVzc2FnZSIsIm9rIiwidG9rZW4iLCJpZCIsIl9pZCIsIm5hbWUiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/login.js\n");

/***/ }),

/***/ "(api)/./utils/auth.js":
/*!***********************!*\
  !*** ./utils/auth.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   comparePasswords: () => (/* binding */ comparePasswords),\n/* harmony export */   hashPassword: () => (/* binding */ hashPassword),\n/* harmony export */   signToken: () => (/* binding */ signToken),\n/* harmony export */   verifyToken: () => (/* binding */ verifyToken)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst JWT_SECRET = process.env.JWT_SECRET;\nfunction signToken(payload) {\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign(payload, JWT_SECRET, {\n        expiresIn: \"7d\"\n    });\n}\nfunction verifyToken(token) {\n    try {\n        return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, JWT_SECRET);\n    } catch (e) {\n        return null;\n    }\n}\nasync function hashPassword(password) {\n    const salt = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().genSalt(10);\n    return bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().hash(password, salt);\n}\nasync function comparePasswords(password, hash) {\n    return bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().compare(password, hash);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9hdXRoLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQStCO0FBQ0Q7QUFDOUIsTUFBTUUsYUFBYUMsUUFBUUMsR0FBRyxDQUFDRixVQUFVO0FBQ2xDLFNBQVNHLFVBQVVDLE9BQU87SUFBRyxPQUFPTix3REFBUSxDQUFDTSxTQUFTSixZQUFZO1FBQUNNLFdBQVU7SUFBSTtBQUFJO0FBQ3JGLFNBQVNDLFlBQVlDLEtBQUs7SUFDL0IsSUFBRztRQUFFLE9BQU9WLDBEQUFVLENBQUNVLE9BQU9SO0lBQWEsRUFBRSxPQUFNVSxHQUFFO1FBQUUsT0FBTztJQUFNO0FBQ3RFO0FBQ08sZUFBZUMsYUFBYUMsUUFBUTtJQUFHLE1BQU1DLE9BQU8sTUFBTWQsdURBQWMsQ0FBQztJQUFLLE9BQU9BLG9EQUFXLENBQUNhLFVBQVVDO0FBQU87QUFDbEgsZUFBZUcsaUJBQWlCSixRQUFRLEVBQUVHLElBQUk7SUFBRyxPQUFPaEIsdURBQWMsQ0FBQ2EsVUFBVUc7QUFBTyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jcnVkLWFwcC8uL3V0aWxzL2F1dGguanM/ZWI2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJztcbmNvbnN0IEpXVF9TRUNSRVQgPSBwcm9jZXNzLmVudi5KV1RfU0VDUkVUO1xuZXhwb3J0IGZ1bmN0aW9uIHNpZ25Ub2tlbihwYXlsb2FkKXsgcmV0dXJuIGp3dC5zaWduKHBheWxvYWQsIEpXVF9TRUNSRVQsIHtleHBpcmVzSW46JzdkJ30pOyB9XG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5VG9rZW4odG9rZW4pe1xuICB0cnl7IHJldHVybiBqd3QudmVyaWZ5KHRva2VuLCBKV1RfU0VDUkVUKTsgfSBjYXRjaChlKXsgcmV0dXJuIG51bGw7IH1cbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBoYXNoUGFzc3dvcmQocGFzc3dvcmQpeyBjb25zdCBzYWx0ID0gYXdhaXQgYmNyeXB0LmdlblNhbHQoMTApOyByZXR1cm4gYmNyeXB0Lmhhc2gocGFzc3dvcmQsIHNhbHQpOyB9XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29tcGFyZVBhc3N3b3JkcyhwYXNzd29yZCwgaGFzaCl7IHJldHVybiBiY3J5cHQuY29tcGFyZShwYXNzd29yZCwgaGFzaCk7IH1cbiJdLCJuYW1lcyI6WyJqd3QiLCJiY3J5cHQiLCJKV1RfU0VDUkVUIiwicHJvY2VzcyIsImVudiIsInNpZ25Ub2tlbiIsInBheWxvYWQiLCJzaWduIiwiZXhwaXJlc0luIiwidmVyaWZ5VG9rZW4iLCJ0b2tlbiIsInZlcmlmeSIsImUiLCJoYXNoUGFzc3dvcmQiLCJwYXNzd29yZCIsInNhbHQiLCJnZW5TYWx0IiwiaGFzaCIsImNvbXBhcmVQYXNzd29yZHMiLCJjb21wYXJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utils/auth.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Flogin&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5Clogin.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();