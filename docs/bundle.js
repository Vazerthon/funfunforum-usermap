/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII="

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(11);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services___ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_css__);



Object(__WEBPACK_IMPORTED_MODULE_0__services___["e" /* renderMapHost */])('mapHost');
Object(__WEBPACK_IMPORTED_MODULE_0__services___["d" /* initMap */])('mapHost');

const htmlCaption = (username, caption) => `
  <p><b><center>${username}</center></b></p>
  <p>${caption}</p>
`;

const addUserMarkers = async () => {
  const forumDataResult = await Object(__WEBPACK_IMPORTED_MODULE_0__services___["c" /* fetchForumData */])();
  const forumData = await forumDataResult.json();
  const userLocationData = Object(__WEBPACK_IMPORTED_MODULE_0__services___["b" /* extractUserLocations */])(forumData);
  userLocationData
    .map(l => ({ lat: l.lat, lng: l.lng, caption: htmlCaption(l.username, l.caption) }))
    .map(l => Object(__WEBPACK_IMPORTED_MODULE_0__services___["a" /* addMapMarker */])(l));
};

addUserMarkers();


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_map_service__ = __webpack_require__(5);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__user_map_service__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__user_map_service__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__forum_data_fetch_service__ = __webpack_require__(14);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__forum_data_fetch_service__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__forum_data_fetch_service__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dom_service__ = __webpack_require__(20);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__dom_service__["a"]; });





/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_leaflet__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_leaflet_dist_leaflet_css__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_leaflet_dist_leaflet_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__node_modules_leaflet_dist_leaflet_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_leaflet_dist_images_marker_icon_2x_png__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_leaflet_dist_images_marker_icon_2x_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__node_modules_leaflet_dist_images_marker_icon_2x_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_leaflet_dist_images_marker_icon_png__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_leaflet_dist_images_marker_icon_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__node_modules_leaflet_dist_images_marker_icon_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_leaflet_dist_images_marker_shadow_png__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_leaflet_dist_images_marker_shadow_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__node_modules_leaflet_dist_images_marker_shadow_png__);






let userMap;

// without this the default icon won't show
// https://github.com/PaulLeCam/react-leaflet/issues/255
const defaultIcon = Object(__WEBPACK_IMPORTED_MODULE_0_leaflet__["icon"])({
  iconRetinaUrl: __WEBPACK_IMPORTED_MODULE_2__node_modules_leaflet_dist_images_marker_icon_2x_png___default.a,
  iconUrl: __WEBPACK_IMPORTED_MODULE_3__node_modules_leaflet_dist_images_marker_icon_png___default.a,
  shadowUrl: __WEBPACK_IMPORTED_MODULE_4__node_modules_leaflet_dist_images_marker_shadow_png___default.a,
  popupAnchor: [0, -38],
  iconSize: [24, 36],
  iconAnchor: [12, 36],
});

const initMap = (hostId) => {
  userMap = Object(__WEBPACK_IMPORTED_MODULE_0_leaflet__["map"])(hostId);

  const tiles = Object(__WEBPACK_IMPORTED_MODULE_0_leaflet__["tileLayer"])('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 3,
    maxZoom: 18,
  });

  userMap.setView([55.942, -3.21], 3);
  userMap.addLayer(tiles);
};
/* harmony export (immutable) */ __webpack_exports__["b"] = initMap;


const addMapMarker = ({ lat, lng, caption }) => {
  const mark = Object(__WEBPACK_IMPORTED_MODULE_0_leaflet__["marker"])([lat, lng], { icon: defaultIcon }).addTo(userMap);
  mark.bindPopup(caption);
};
/* harmony export (immutable) */ __webpack_exports__["a"] = addMapMarker;



/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* @preserve
 * Leaflet 1.2.0, a JS library for interactive maps. http://leafletjs.com
 * (c) 2010-2017 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
(function (global, factory) {
	 true ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.L = {})));
}(this, (function (exports) { 'use strict';

var version = "1.2.0";

/*
 * @namespace Util
 *
 * Various utility functions, used by Leaflet internally.
 */

var freeze = Object.freeze;
Object.freeze = function (obj) { return obj; };

// @function extend(dest: Object, src?: Object): Object
// Merges the properties of the `src` object (or multiple objects) into `dest` object and returns the latter. Has an `L.extend` shortcut.
function extend(dest) {
	var i, j, len, src;

	for (j = 1, len = arguments.length; j < len; j++) {
		src = arguments[j];
		for (i in src) {
			dest[i] = src[i];
		}
	}
	return dest;
}

// @function create(proto: Object, properties?: Object): Object
// Compatibility polyfill for [Object.create](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
var create = Object.create || (function () {
	function F() {}
	return function (proto) {
		F.prototype = proto;
		return new F();
	};
})();

// @function bind(fn: Function, …): Function
// Returns a new function bound to the arguments passed, like [Function.prototype.bind](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
// Has a `L.bind()` shortcut.
function bind(fn, obj) {
	var slice = Array.prototype.slice;

	if (fn.bind) {
		return fn.bind.apply(fn, slice.call(arguments, 1));
	}

	var args = slice.call(arguments, 2);

	return function () {
		return fn.apply(obj, args.length ? args.concat(slice.call(arguments)) : arguments);
	};
}

// @property lastId: Number
// Last unique ID used by [`stamp()`](#util-stamp)
var lastId = 0;

// @function stamp(obj: Object): Number
// Returns the unique ID of an object, assiging it one if it doesn't have it.
function stamp(obj) {
	/*eslint-disable */
	obj._leaflet_id = obj._leaflet_id || ++lastId;
	return obj._leaflet_id;
	/*eslint-enable */
}

// @function throttle(fn: Function, time: Number, context: Object): Function
// Returns a function which executes function `fn` with the given scope `context`
// (so that the `this` keyword refers to `context` inside `fn`'s code). The function
// `fn` will be called no more than one time per given amount of `time`. The arguments
// received by the bound function will be any arguments passed when binding the
// function, followed by any arguments passed when invoking the bound function.
// Has an `L.throttle` shortcut.
function throttle(fn, time, context) {
	var lock, args, wrapperFn, later;

	later = function () {
		// reset lock and call if queued
		lock = false;
		if (args) {
			wrapperFn.apply(context, args);
			args = false;
		}
	};

	wrapperFn = function () {
		if (lock) {
			// called too soon, queue to call later
			args = arguments;

		} else {
			// call and lock until later
			fn.apply(context, arguments);
			setTimeout(later, time);
			lock = true;
		}
	};

	return wrapperFn;
}

// @function wrapNum(num: Number, range: Number[], includeMax?: Boolean): Number
// Returns the number `num` modulo `range` in such a way so it lies within
// `range[0]` and `range[1]`. The returned value will be always smaller than
// `range[1]` unless `includeMax` is set to `true`.
function wrapNum(x, range, includeMax) {
	var max = range[1],
	    min = range[0],
	    d = max - min;
	return x === max && includeMax ? x : ((x - min) % d + d) % d + min;
}

// @function falseFn(): Function
// Returns a function which always returns `false`.
function falseFn() { return false; }

// @function formatNum(num: Number, digits?: Number): Number
// Returns the number `num` rounded to `digits` decimals, or to 5 decimals by default.
function formatNum(num, digits) {
	var pow = Math.pow(10, digits || 5);
	return Math.round(num * pow) / pow;
}

// @function trim(str: String): String
// Compatibility polyfill for [String.prototype.trim](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)
function trim(str) {
	return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}

// @function splitWords(str: String): String[]
// Trims and splits the string on whitespace and returns the array of parts.
function splitWords(str) {
	return trim(str).split(/\s+/);
}

// @function setOptions(obj: Object, options: Object): Object
// Merges the given properties to the `options` of the `obj` object, returning the resulting options. See `Class options`. Has an `L.setOptions` shortcut.
function setOptions(obj, options) {
	if (!obj.hasOwnProperty('options')) {
		obj.options = obj.options ? create(obj.options) : {};
	}
	for (var i in options) {
		obj.options[i] = options[i];
	}
	return obj.options;
}

// @function getParamString(obj: Object, existingUrl?: String, uppercase?: Boolean): String
// Converts an object into a parameter URL string, e.g. `{a: "foo", b: "bar"}`
// translates to `'?a=foo&b=bar'`. If `existingUrl` is set, the parameters will
// be appended at the end. If `uppercase` is `true`, the parameter names will
// be uppercased (e.g. `'?A=foo&B=bar'`)
function getParamString(obj, existingUrl, uppercase) {
	var params = [];
	for (var i in obj) {
		params.push(encodeURIComponent(uppercase ? i.toUpperCase() : i) + '=' + encodeURIComponent(obj[i]));
	}
	return ((!existingUrl || existingUrl.indexOf('?') === -1) ? '?' : '&') + params.join('&');
}

var templateRe = /\{ *([\w_\-]+) *\}/g;

// @function template(str: String, data: Object): String
// Simple templating facility, accepts a template string of the form `'Hello {a}, {b}'`
// and a data object like `{a: 'foo', b: 'bar'}`, returns evaluated string
// `('Hello foo, bar')`. You can also specify functions instead of strings for
// data values — they will be evaluated passing `data` as an argument.
function template(str, data) {
	return str.replace(templateRe, function (str, key) {
		var value = data[key];

		if (value === undefined) {
			throw new Error('No value provided for variable ' + str);

		} else if (typeof value === 'function') {
			value = value(data);
		}
		return value;
	});
}

// @function isArray(obj): Boolean
// Compatibility polyfill for [Array.isArray](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
var isArray = Array.isArray || function (obj) {
	return (Object.prototype.toString.call(obj) === '[object Array]');
};

// @function indexOf(array: Array, el: Object): Number
// Compatibility polyfill for [Array.prototype.indexOf](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
function indexOf(array, el) {
	for (var i = 0; i < array.length; i++) {
		if (array[i] === el) { return i; }
	}
	return -1;
}

// @property emptyImageUrl: String
// Data URI string containing a base64-encoded empty GIF image.
// Used as a hack to free memory from unused images on WebKit-powered
// mobile devices (by setting image `src` to this string).
var emptyImageUrl = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';

// inspired by http://paulirish.com/2011/requestanimationframe-for-smart-animating/

function getPrefixed(name) {
	return window['webkit' + name] || window['moz' + name] || window['ms' + name];
}

var lastTime = 0;

// fallback for IE 7-8
function timeoutDefer(fn) {
	var time = +new Date(),
	    timeToCall = Math.max(0, 16 - (time - lastTime));

	lastTime = time + timeToCall;
	return window.setTimeout(fn, timeToCall);
}

var requestFn = window.requestAnimationFrame || getPrefixed('RequestAnimationFrame') || timeoutDefer;
var cancelFn = window.cancelAnimationFrame || getPrefixed('CancelAnimationFrame') ||
		getPrefixed('CancelRequestAnimationFrame') || function (id) { window.clearTimeout(id); };

// @function requestAnimFrame(fn: Function, context?: Object, immediate?: Boolean): Number
// Schedules `fn` to be executed when the browser repaints. `fn` is bound to
// `context` if given. When `immediate` is set, `fn` is called immediately if
// the browser doesn't have native support for
// [`window.requestAnimationFrame`](https://developer.mozilla.org/docs/Web/API/window/requestAnimationFrame),
// otherwise it's delayed. Returns a request ID that can be used to cancel the request.
function requestAnimFrame(fn, context, immediate) {
	if (immediate && requestFn === timeoutDefer) {
		fn.call(context);
	} else {
		return requestFn.call(window, bind(fn, context));
	}
}

// @function cancelAnimFrame(id: Number): undefined
// Cancels a previous `requestAnimFrame`. See also [window.cancelAnimationFrame](https://developer.mozilla.org/docs/Web/API/window/cancelAnimationFrame).
function cancelAnimFrame(id) {
	if (id) {
		cancelFn.call(window, id);
	}
}


var Util = (Object.freeze || Object)({
	freeze: freeze,
	extend: extend,
	create: create,
	bind: bind,
	lastId: lastId,
	stamp: stamp,
	throttle: throttle,
	wrapNum: wrapNum,
	falseFn: falseFn,
	formatNum: formatNum,
	trim: trim,
	splitWords: splitWords,
	setOptions: setOptions,
	getParamString: getParamString,
	template: template,
	isArray: isArray,
	indexOf: indexOf,
	emptyImageUrl: emptyImageUrl,
	requestFn: requestFn,
	cancelFn: cancelFn,
	requestAnimFrame: requestAnimFrame,
	cancelAnimFrame: cancelAnimFrame
});

// @class Class
// @aka L.Class

// @section
// @uninheritable

// Thanks to John Resig and Dean Edwards for inspiration!

function Class() {}

Class.extend = function (props) {

	// @function extend(props: Object): Function
	// [Extends the current class](#class-inheritance) given the properties to be included.
	// Returns a Javascript function that is a class constructor (to be called with `new`).
	var NewClass = function () {

		// call the constructor
		if (this.initialize) {
			this.initialize.apply(this, arguments);
		}

		// call all constructor hooks
		this.callInitHooks();
	};

	var parentProto = NewClass.__super__ = this.prototype;

	var proto = create(parentProto);
	proto.constructor = NewClass;

	NewClass.prototype = proto;

	// inherit parent's statics
	for (var i in this) {
		if (this.hasOwnProperty(i) && i !== 'prototype' && i !== '__super__') {
			NewClass[i] = this[i];
		}
	}

	// mix static properties into the class
	if (props.statics) {
		extend(NewClass, props.statics);
		delete props.statics;
	}

	// mix includes into the prototype
	if (props.includes) {
		checkDeprecatedMixinEvents(props.includes);
		extend.apply(null, [proto].concat(props.includes));
		delete props.includes;
	}

	// merge options
	if (proto.options) {
		props.options = extend(create(proto.options), props.options);
	}

	// mix given properties into the prototype
	extend(proto, props);

	proto._initHooks = [];

	// add method for calling all hooks
	proto.callInitHooks = function () {

		if (this._initHooksCalled) { return; }

		if (parentProto.callInitHooks) {
			parentProto.callInitHooks.call(this);
		}

		this._initHooksCalled = true;

		for (var i = 0, len = proto._initHooks.length; i < len; i++) {
			proto._initHooks[i].call(this);
		}
	};

	return NewClass;
};


// @function include(properties: Object): this
// [Includes a mixin](#class-includes) into the current class.
Class.include = function (props) {
	extend(this.prototype, props);
	return this;
};

// @function mergeOptions(options: Object): this
// [Merges `options`](#class-options) into the defaults of the class.
Class.mergeOptions = function (options) {
	extend(this.prototype.options, options);
	return this;
};

// @function addInitHook(fn: Function): this
// Adds a [constructor hook](#class-constructor-hooks) to the class.
Class.addInitHook = function (fn) { // (Function) || (String, args...)
	var args = Array.prototype.slice.call(arguments, 1);

	var init = typeof fn === 'function' ? fn : function () {
		this[fn].apply(this, args);
	};

	this.prototype._initHooks = this.prototype._initHooks || [];
	this.prototype._initHooks.push(init);
	return this;
};

function checkDeprecatedMixinEvents(includes) {
	if (!L || !L.Mixin) { return; }

	includes = isArray(includes) ? includes : [includes];

	for (var i = 0; i < includes.length; i++) {
		if (includes[i] === L.Mixin.Events) {
			console.warn('Deprecated include of L.Mixin.Events: ' +
				'this property will be removed in future releases, ' +
				'please inherit from L.Evented instead.', new Error().stack);
		}
	}
}

/*
 * @class Evented
 * @aka L.Evented
 * @inherits Class
 *
 * A set of methods shared between event-powered classes (like `Map` and `Marker`). Generally, events allow you to execute some function when something happens with an object (e.g. the user clicks on the map, causing the map to fire `'click'` event).
 *
 * @example
 *
 * ```js
 * map.on('click', function(e) {
 * 	alert(e.latlng);
 * } );
 * ```
 *
 * Leaflet deals with event listeners by reference, so if you want to add a listener and then remove it, define it as a function:
 *
 * ```js
 * function onClick(e) { ... }
 *
 * map.on('click', onClick);
 * map.off('click', onClick);
 * ```
 */

var Events = {
	/* @method on(type: String, fn: Function, context?: Object): this
	 * Adds a listener function (`fn`) to a particular event type of the object. You can optionally specify the context of the listener (object the this keyword will point to). You can also pass several space-separated types (e.g. `'click dblclick'`).
	 *
	 * @alternative
	 * @method on(eventMap: Object): this
	 * Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
	 */
	on: function (types, fn, context) {

		// types can be a map of types/handlers
		if (typeof types === 'object') {
			for (var type in types) {
				// we don't process space-separated events here for performance;
				// it's a hot path since Layer uses the on(obj) syntax
				this._on(type, types[type], fn);
			}

		} else {
			// types can be a string of space-separated words
			types = splitWords(types);

			for (var i = 0, len = types.length; i < len; i++) {
				this._on(types[i], fn, context);
			}
		}

		return this;
	},

	/* @method off(type: String, fn?: Function, context?: Object): this
	 * Removes a previously added listener function. If no function is specified, it will remove all the listeners of that particular event from the object. Note that if you passed a custom context to `on`, you must pass the same context to `off` in order to remove the listener.
	 *
	 * @alternative
	 * @method off(eventMap: Object): this
	 * Removes a set of type/listener pairs.
	 *
	 * @alternative
	 * @method off: this
	 * Removes all listeners to all events on the object.
	 */
	off: function (types, fn, context) {

		if (!types) {
			// clear all listeners if called without arguments
			delete this._events;

		} else if (typeof types === 'object') {
			for (var type in types) {
				this._off(type, types[type], fn);
			}

		} else {
			types = splitWords(types);

			for (var i = 0, len = types.length; i < len; i++) {
				this._off(types[i], fn, context);
			}
		}

		return this;
	},

	// attach listener (without syntactic sugar now)
	_on: function (type, fn, context) {
		this._events = this._events || {};

		/* get/init listeners for type */
		var typeListeners = this._events[type];
		if (!typeListeners) {
			typeListeners = [];
			this._events[type] = typeListeners;
		}

		if (context === this) {
			// Less memory footprint.
			context = undefined;
		}
		var newListener = {fn: fn, ctx: context},
		    listeners = typeListeners;

		// check if fn already there
		for (var i = 0, len = listeners.length; i < len; i++) {
			if (listeners[i].fn === fn && listeners[i].ctx === context) {
				return;
			}
		}

		listeners.push(newListener);
	},

	_off: function (type, fn, context) {
		var listeners,
		    i,
		    len;

		if (!this._events) { return; }

		listeners = this._events[type];

		if (!listeners) {
			return;
		}

		if (!fn) {
			// Set all removed listeners to noop so they are not called if remove happens in fire
			for (i = 0, len = listeners.length; i < len; i++) {
				listeners[i].fn = falseFn;
			}
			// clear all listeners for a type if function isn't specified
			delete this._events[type];
			return;
		}

		if (context === this) {
			context = undefined;
		}

		if (listeners) {

			// find fn and remove it
			for (i = 0, len = listeners.length; i < len; i++) {
				var l = listeners[i];
				if (l.ctx !== context) { continue; }
				if (l.fn === fn) {

					// set the removed listener to noop so that's not called if remove happens in fire
					l.fn = falseFn;

					if (this._firingCount) {
						/* copy array in case events are being fired */
						this._events[type] = listeners = listeners.slice();
					}
					listeners.splice(i, 1);

					return;
				}
			}
		}
	},

	// @method fire(type: String, data?: Object, propagate?: Boolean): this
	// Fires an event of the specified type. You can optionally provide an data
	// object — the first argument of the listener function will contain its
	// properties. The event can optionally be propagated to event parents.
	fire: function (type, data, propagate) {
		if (!this.listens(type, propagate)) { return this; }

		var event = extend({}, data, {type: type, target: this});

		if (this._events) {
			var listeners = this._events[type];

			if (listeners) {
				this._firingCount = (this._firingCount + 1) || 1;
				for (var i = 0, len = listeners.length; i < len; i++) {
					var l = listeners[i];
					l.fn.call(l.ctx || this, event);
				}

				this._firingCount--;
			}
		}

		if (propagate) {
			// propagate the event to parents (set with addEventParent)
			this._propagateEvent(event);
		}

		return this;
	},

	// @method listens(type: String): Boolean
	// Returns `true` if a particular event type has any listeners attached to it.
	listens: function (type, propagate) {
		var listeners = this._events && this._events[type];
		if (listeners && listeners.length) { return true; }

		if (propagate) {
			// also check parents for listeners if event propagates
			for (var id in this._eventParents) {
				if (this._eventParents[id].listens(type, propagate)) { return true; }
			}
		}
		return false;
	},

	// @method once(…): this
	// Behaves as [`on(…)`](#evented-on), except the listener will only get fired once and then removed.
	once: function (types, fn, context) {

		if (typeof types === 'object') {
			for (var type in types) {
				this.once(type, types[type], fn);
			}
			return this;
		}

		var handler = bind(function () {
			this
			    .off(types, fn, context)
			    .off(types, handler, context);
		}, this);

		// add a listener that's executed once and removed after that
		return this
		    .on(types, fn, context)
		    .on(types, handler, context);
	},

	// @method addEventParent(obj: Evented): this
	// Adds an event parent - an `Evented` that will receive propagated events
	addEventParent: function (obj) {
		this._eventParents = this._eventParents || {};
		this._eventParents[stamp(obj)] = obj;
		return this;
	},

	// @method removeEventParent(obj: Evented): this
	// Removes an event parent, so it will stop receiving propagated events
	removeEventParent: function (obj) {
		if (this._eventParents) {
			delete this._eventParents[stamp(obj)];
		}
		return this;
	},

	_propagateEvent: function (e) {
		for (var id in this._eventParents) {
			this._eventParents[id].fire(e.type, extend({layer: e.target}, e), true);
		}
	}
};

// aliases; we should ditch those eventually

// @method addEventListener(…): this
// Alias to [`on(…)`](#evented-on)
Events.addEventListener = Events.on;

// @method removeEventListener(…): this
// Alias to [`off(…)`](#evented-off)

// @method clearAllEventListeners(…): this
// Alias to [`off()`](#evented-off)
Events.removeEventListener = Events.clearAllEventListeners = Events.off;

// @method addOneTimeEventListener(…): this
// Alias to [`once(…)`](#evented-once)
Events.addOneTimeEventListener = Events.once;

// @method fireEvent(…): this
// Alias to [`fire(…)`](#evented-fire)
Events.fireEvent = Events.fire;

// @method hasEventListeners(…): Boolean
// Alias to [`listens(…)`](#evented-listens)
Events.hasEventListeners = Events.listens;

var Evented = Class.extend(Events);

/*
 * @class Point
 * @aka L.Point
 *
 * Represents a point with `x` and `y` coordinates in pixels.
 *
 * @example
 *
 * ```js
 * var point = L.point(200, 300);
 * ```
 *
 * All Leaflet methods and options that accept `Point` objects also accept them in a simple Array form (unless noted otherwise), so these lines are equivalent:
 *
 * ```js
 * map.panBy([200, 300]);
 * map.panBy(L.point(200, 300));
 * ```
 */

function Point(x, y, round) {
	// @property x: Number; The `x` coordinate of the point
	this.x = (round ? Math.round(x) : x);
	// @property y: Number; The `y` coordinate of the point
	this.y = (round ? Math.round(y) : y);
}

Point.prototype = {

	// @method clone(): Point
	// Returns a copy of the current point.
	clone: function () {
		return new Point(this.x, this.y);
	},

	// @method add(otherPoint: Point): Point
	// Returns the result of addition of the current and the given points.
	add: function (point) {
		// non-destructive, returns a new point
		return this.clone()._add(toPoint(point));
	},

	_add: function (point) {
		// destructive, used directly for performance in situations where it's safe to modify existing point
		this.x += point.x;
		this.y += point.y;
		return this;
	},

	// @method subtract(otherPoint: Point): Point
	// Returns the result of subtraction of the given point from the current.
	subtract: function (point) {
		return this.clone()._subtract(toPoint(point));
	},

	_subtract: function (point) {
		this.x -= point.x;
		this.y -= point.y;
		return this;
	},

	// @method divideBy(num: Number): Point
	// Returns the result of division of the current point by the given number.
	divideBy: function (num) {
		return this.clone()._divideBy(num);
	},

	_divideBy: function (num) {
		this.x /= num;
		this.y /= num;
		return this;
	},

	// @method multiplyBy(num: Number): Point
	// Returns the result of multiplication of the current point by the given number.
	multiplyBy: function (num) {
		return this.clone()._multiplyBy(num);
	},

	_multiplyBy: function (num) {
		this.x *= num;
		this.y *= num;
		return this;
	},

	// @method scaleBy(scale: Point): Point
	// Multiply each coordinate of the current point by each coordinate of
	// `scale`. In linear algebra terms, multiply the point by the
	// [scaling matrix](https://en.wikipedia.org/wiki/Scaling_%28geometry%29#Matrix_representation)
	// defined by `scale`.
	scaleBy: function (point) {
		return new Point(this.x * point.x, this.y * point.y);
	},

	// @method unscaleBy(scale: Point): Point
	// Inverse of `scaleBy`. Divide each coordinate of the current point by
	// each coordinate of `scale`.
	unscaleBy: function (point) {
		return new Point(this.x / point.x, this.y / point.y);
	},

	// @method round(): Point
	// Returns a copy of the current point with rounded coordinates.
	round: function () {
		return this.clone()._round();
	},

	_round: function () {
		this.x = Math.round(this.x);
		this.y = Math.round(this.y);
		return this;
	},

	// @method floor(): Point
	// Returns a copy of the current point with floored coordinates (rounded down).
	floor: function () {
		return this.clone()._floor();
	},

	_floor: function () {
		this.x = Math.floor(this.x);
		this.y = Math.floor(this.y);
		return this;
	},

	// @method ceil(): Point
	// Returns a copy of the current point with ceiled coordinates (rounded up).
	ceil: function () {
		return this.clone()._ceil();
	},

	_ceil: function () {
		this.x = Math.ceil(this.x);
		this.y = Math.ceil(this.y);
		return this;
	},

	// @method distanceTo(otherPoint: Point): Number
	// Returns the cartesian distance between the current and the given points.
	distanceTo: function (point) {
		point = toPoint(point);

		var x = point.x - this.x,
		    y = point.y - this.y;

		return Math.sqrt(x * x + y * y);
	},

	// @method equals(otherPoint: Point): Boolean
	// Returns `true` if the given point has the same coordinates.
	equals: function (point) {
		point = toPoint(point);

		return point.x === this.x &&
		       point.y === this.y;
	},

	// @method contains(otherPoint: Point): Boolean
	// Returns `true` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).
	contains: function (point) {
		point = toPoint(point);

		return Math.abs(point.x) <= Math.abs(this.x) &&
		       Math.abs(point.y) <= Math.abs(this.y);
	},

	// @method toString(): String
	// Returns a string representation of the point for debugging purposes.
	toString: function () {
		return 'Point(' +
		        formatNum(this.x) + ', ' +
		        formatNum(this.y) + ')';
	}
};

// @factory L.point(x: Number, y: Number, round?: Boolean)
// Creates a Point object with the given `x` and `y` coordinates. If optional `round` is set to true, rounds the `x` and `y` values.

// @alternative
// @factory L.point(coords: Number[])
// Expects an array of the form `[x, y]` instead.

// @alternative
// @factory L.point(coords: Object)
// Expects a plain object of the form `{x: Number, y: Number}` instead.
function toPoint(x, y, round) {
	if (x instanceof Point) {
		return x;
	}
	if (isArray(x)) {
		return new Point(x[0], x[1]);
	}
	if (x === undefined || x === null) {
		return x;
	}
	if (typeof x === 'object' && 'x' in x && 'y' in x) {
		return new Point(x.x, x.y);
	}
	return new Point(x, y, round);
}

/*
 * @class Bounds
 * @aka L.Bounds
 *
 * Represents a rectangular area in pixel coordinates.
 *
 * @example
 *
 * ```js
 * var p1 = L.point(10, 10),
 * p2 = L.point(40, 60),
 * bounds = L.bounds(p1, p2);
 * ```
 *
 * All Leaflet methods that accept `Bounds` objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:
 *
 * ```js
 * otherBounds.intersects([[10, 10], [40, 60]]);
 * ```
 */

function Bounds(a, b) {
	if (!a) { return; }

	var points = b ? [a, b] : a;

	for (var i = 0, len = points.length; i < len; i++) {
		this.extend(points[i]);
	}
}

Bounds.prototype = {
	// @method extend(point: Point): this
	// Extends the bounds to contain the given point.
	extend: function (point) { // (Point)
		point = toPoint(point);

		// @property min: Point
		// The top left corner of the rectangle.
		// @property max: Point
		// The bottom right corner of the rectangle.
		if (!this.min && !this.max) {
			this.min = point.clone();
			this.max = point.clone();
		} else {
			this.min.x = Math.min(point.x, this.min.x);
			this.max.x = Math.max(point.x, this.max.x);
			this.min.y = Math.min(point.y, this.min.y);
			this.max.y = Math.max(point.y, this.max.y);
		}
		return this;
	},

	// @method getCenter(round?: Boolean): Point
	// Returns the center point of the bounds.
	getCenter: function (round) {
		return new Point(
		        (this.min.x + this.max.x) / 2,
		        (this.min.y + this.max.y) / 2, round);
	},

	// @method getBottomLeft(): Point
	// Returns the bottom-left point of the bounds.
	getBottomLeft: function () {
		return new Point(this.min.x, this.max.y);
	},

	// @method getTopRight(): Point
	// Returns the top-right point of the bounds.
	getTopRight: function () { // -> Point
		return new Point(this.max.x, this.min.y);
	},

	// @method getTopLeft(): Point
	// Returns the top-left point of the bounds (i.e. [`this.min`](#bounds-min)).
	getTopLeft: function () {
		return this.min; // left, top
	},

	// @method getBottomRight(): Point
	// Returns the bottom-right point of the bounds (i.e. [`this.max`](#bounds-max)).
	getBottomRight: function () {
		return this.max; // right, bottom
	},

	// @method getSize(): Point
	// Returns the size of the given bounds
	getSize: function () {
		return this.max.subtract(this.min);
	},

	// @method contains(otherBounds: Bounds): Boolean
	// Returns `true` if the rectangle contains the given one.
	// @alternative
	// @method contains(point: Point): Boolean
	// Returns `true` if the rectangle contains the given point.
	contains: function (obj) {
		var min, max;

		if (typeof obj[0] === 'number' || obj instanceof Point) {
			obj = toPoint(obj);
		} else {
			obj = toBounds(obj);
		}

		if (obj instanceof Bounds) {
			min = obj.min;
			max = obj.max;
		} else {
			min = max = obj;
		}

		return (min.x >= this.min.x) &&
		       (max.x <= this.max.x) &&
		       (min.y >= this.min.y) &&
		       (max.y <= this.max.y);
	},

	// @method intersects(otherBounds: Bounds): Boolean
	// Returns `true` if the rectangle intersects the given bounds. Two bounds
	// intersect if they have at least one point in common.
	intersects: function (bounds) { // (Bounds) -> Boolean
		bounds = toBounds(bounds);

		var min = this.min,
		    max = this.max,
		    min2 = bounds.min,
		    max2 = bounds.max,
		    xIntersects = (max2.x >= min.x) && (min2.x <= max.x),
		    yIntersects = (max2.y >= min.y) && (min2.y <= max.y);

		return xIntersects && yIntersects;
	},

	// @method overlaps(otherBounds: Bounds): Boolean
	// Returns `true` if the rectangle overlaps the given bounds. Two bounds
	// overlap if their intersection is an area.
	overlaps: function (bounds) { // (Bounds) -> Boolean
		bounds = toBounds(bounds);

		var min = this.min,
		    max = this.max,
		    min2 = bounds.min,
		    max2 = bounds.max,
		    xOverlaps = (max2.x > min.x) && (min2.x < max.x),
		    yOverlaps = (max2.y > min.y) && (min2.y < max.y);

		return xOverlaps && yOverlaps;
	},

	isValid: function () {
		return !!(this.min && this.max);
	}
};


// @factory L.bounds(corner1: Point, corner2: Point)
// Creates a Bounds object from two corners coordinate pairs.
// @alternative
// @factory L.bounds(points: Point[])
// Creates a Bounds object from the given array of points.
function toBounds(a, b) {
	if (!a || a instanceof Bounds) {
		return a;
	}
	return new Bounds(a, b);
}

/*
 * @class LatLngBounds
 * @aka L.LatLngBounds
 *
 * Represents a rectangular geographical area on a map.
 *
 * @example
 *
 * ```js
 * var corner1 = L.latLng(40.712, -74.227),
 * corner2 = L.latLng(40.774, -74.125),
 * bounds = L.latLngBounds(corner1, corner2);
 * ```
 *
 * All Leaflet methods that accept LatLngBounds objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:
 *
 * ```js
 * map.fitBounds([
 * 	[40.712, -74.227],
 * 	[40.774, -74.125]
 * ]);
 * ```
 *
 * Caution: if the area crosses the antimeridian (often confused with the International Date Line), you must specify corners _outside_ the [-180, 180] degrees longitude range.
 */

function LatLngBounds(corner1, corner2) { // (LatLng, LatLng) or (LatLng[])
	if (!corner1) { return; }

	var latlngs = corner2 ? [corner1, corner2] : corner1;

	for (var i = 0, len = latlngs.length; i < len; i++) {
		this.extend(latlngs[i]);
	}
}

LatLngBounds.prototype = {

	// @method extend(latlng: LatLng): this
	// Extend the bounds to contain the given point

	// @alternative
	// @method extend(otherBounds: LatLngBounds): this
	// Extend the bounds to contain the given bounds
	extend: function (obj) {
		var sw = this._southWest,
		    ne = this._northEast,
		    sw2, ne2;

		if (obj instanceof LatLng) {
			sw2 = obj;
			ne2 = obj;

		} else if (obj instanceof LatLngBounds) {
			sw2 = obj._southWest;
			ne2 = obj._northEast;

			if (!sw2 || !ne2) { return this; }

		} else {
			return obj ? this.extend(toLatLng(obj) || toLatLngBounds(obj)) : this;
		}

		if (!sw && !ne) {
			this._southWest = new LatLng(sw2.lat, sw2.lng);
			this._northEast = new LatLng(ne2.lat, ne2.lng);
		} else {
			sw.lat = Math.min(sw2.lat, sw.lat);
			sw.lng = Math.min(sw2.lng, sw.lng);
			ne.lat = Math.max(ne2.lat, ne.lat);
			ne.lng = Math.max(ne2.lng, ne.lng);
		}

		return this;
	},

	// @method pad(bufferRatio: Number): LatLngBounds
	// Returns bigger bounds created by extending the current bounds by a given percentage in each direction.
	pad: function (bufferRatio) {
		var sw = this._southWest,
		    ne = this._northEast,
		    heightBuffer = Math.abs(sw.lat - ne.lat) * bufferRatio,
		    widthBuffer = Math.abs(sw.lng - ne.lng) * bufferRatio;

		return new LatLngBounds(
		        new LatLng(sw.lat - heightBuffer, sw.lng - widthBuffer),
		        new LatLng(ne.lat + heightBuffer, ne.lng + widthBuffer));
	},

	// @method getCenter(): LatLng
	// Returns the center point of the bounds.
	getCenter: function () {
		return new LatLng(
		        (this._southWest.lat + this._northEast.lat) / 2,
		        (this._southWest.lng + this._northEast.lng) / 2);
	},

	// @method getSouthWest(): LatLng
	// Returns the south-west point of the bounds.
	getSouthWest: function () {
		return this._southWest;
	},

	// @method getNorthEast(): LatLng
	// Returns the north-east point of the bounds.
	getNorthEast: function () {
		return this._northEast;
	},

	// @method getNorthWest(): LatLng
	// Returns the north-west point of the bounds.
	getNorthWest: function () {
		return new LatLng(this.getNorth(), this.getWest());
	},

	// @method getSouthEast(): LatLng
	// Returns the south-east point of the bounds.
	getSouthEast: function () {
		return new LatLng(this.getSouth(), this.getEast());
	},

	// @method getWest(): Number
	// Returns the west longitude of the bounds
	getWest: function () {
		return this._southWest.lng;
	},

	// @method getSouth(): Number
	// Returns the south latitude of the bounds
	getSouth: function () {
		return this._southWest.lat;
	},

	// @method getEast(): Number
	// Returns the east longitude of the bounds
	getEast: function () {
		return this._northEast.lng;
	},

	// @method getNorth(): Number
	// Returns the north latitude of the bounds
	getNorth: function () {
		return this._northEast.lat;
	},

	// @method contains(otherBounds: LatLngBounds): Boolean
	// Returns `true` if the rectangle contains the given one.

	// @alternative
	// @method contains (latlng: LatLng): Boolean
	// Returns `true` if the rectangle contains the given point.
	contains: function (obj) { // (LatLngBounds) or (LatLng) -> Boolean
		if (typeof obj[0] === 'number' || obj instanceof LatLng || 'lat' in obj) {
			obj = toLatLng(obj);
		} else {
			obj = toLatLngBounds(obj);
		}

		var sw = this._southWest,
		    ne = this._northEast,
		    sw2, ne2;

		if (obj instanceof LatLngBounds) {
			sw2 = obj.getSouthWest();
			ne2 = obj.getNorthEast();
		} else {
			sw2 = ne2 = obj;
		}

		return (sw2.lat >= sw.lat) && (ne2.lat <= ne.lat) &&
		       (sw2.lng >= sw.lng) && (ne2.lng <= ne.lng);
	},

	// @method intersects(otherBounds: LatLngBounds): Boolean
	// Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
	intersects: function (bounds) {
		bounds = toLatLngBounds(bounds);

		var sw = this._southWest,
		    ne = this._northEast,
		    sw2 = bounds.getSouthWest(),
		    ne2 = bounds.getNorthEast(),

		    latIntersects = (ne2.lat >= sw.lat) && (sw2.lat <= ne.lat),
		    lngIntersects = (ne2.lng >= sw.lng) && (sw2.lng <= ne.lng);

		return latIntersects && lngIntersects;
	},

	// @method overlaps(otherBounds: Bounds): Boolean
	// Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
	overlaps: function (bounds) {
		bounds = toLatLngBounds(bounds);

		var sw = this._southWest,
		    ne = this._northEast,
		    sw2 = bounds.getSouthWest(),
		    ne2 = bounds.getNorthEast(),

		    latOverlaps = (ne2.lat > sw.lat) && (sw2.lat < ne.lat),
		    lngOverlaps = (ne2.lng > sw.lng) && (sw2.lng < ne.lng);

		return latOverlaps && lngOverlaps;
	},

	// @method toBBoxString(): String
	// Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.
	toBBoxString: function () {
		return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(',');
	},

	// @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean
	// Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overriden by setting `maxMargin` to a small number.
	equals: function (bounds, maxMargin) {
		if (!bounds) { return false; }

		bounds = toLatLngBounds(bounds);

		return this._southWest.equals(bounds.getSouthWest(), maxMargin) &&
		       this._northEast.equals(bounds.getNorthEast(), maxMargin);
	},

	// @method isValid(): Boolean
	// Returns `true` if the bounds are properly initialized.
	isValid: function () {
		return !!(this._southWest && this._northEast);
	}
};

// TODO International date line?

// @factory L.latLngBounds(corner1: LatLng, corner2: LatLng)
// Creates a `LatLngBounds` object by defining two diagonally opposite corners of the rectangle.

// @alternative
// @factory L.latLngBounds(latlngs: LatLng[])
// Creates a `LatLngBounds` object defined by the geographical points it contains. Very useful for zooming the map to fit a particular set of locations with [`fitBounds`](#map-fitbounds).
function toLatLngBounds(a, b) {
	if (a instanceof LatLngBounds) {
		return a;
	}
	return new LatLngBounds(a, b);
}

/* @class LatLng
 * @aka L.LatLng
 *
 * Represents a geographical point with a certain latitude and longitude.
 *
 * @example
 *
 * ```
 * var latlng = L.latLng(50.5, 30.5);
 * ```
 *
 * All Leaflet methods that accept LatLng objects also accept them in a simple Array form and simple object form (unless noted otherwise), so these lines are equivalent:
 *
 * ```
 * map.panTo([50, 30]);
 * map.panTo({lon: 30, lat: 50});
 * map.panTo({lat: 50, lng: 30});
 * map.panTo(L.latLng(50, 30));
 * ```
 */

function LatLng(lat, lng, alt) {
	if (isNaN(lat) || isNaN(lng)) {
		throw new Error('Invalid LatLng object: (' + lat + ', ' + lng + ')');
	}

	// @property lat: Number
	// Latitude in degrees
	this.lat = +lat;

	// @property lng: Number
	// Longitude in degrees
	this.lng = +lng;

	// @property alt: Number
	// Altitude in meters (optional)
	if (alt !== undefined) {
		this.alt = +alt;
	}
}

LatLng.prototype = {
	// @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean
	// Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overriden by setting `maxMargin` to a small number.
	equals: function (obj, maxMargin) {
		if (!obj) { return false; }

		obj = toLatLng(obj);

		var margin = Math.max(
		        Math.abs(this.lat - obj.lat),
		        Math.abs(this.lng - obj.lng));

		return margin <= (maxMargin === undefined ? 1.0E-9 : maxMargin);
	},

	// @method toString(): String
	// Returns a string representation of the point (for debugging purposes).
	toString: function (precision) {
		return 'LatLng(' +
		        formatNum(this.lat, precision) + ', ' +
		        formatNum(this.lng, precision) + ')';
	},

	// @method distanceTo(otherLatLng: LatLng): Number
	// Returns the distance (in meters) to the given `LatLng` calculated using the [Haversine formula](http://en.wikipedia.org/wiki/Haversine_formula).
	distanceTo: function (other) {
		return Earth.distance(this, toLatLng(other));
	},

	// @method wrap(): LatLng
	// Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
	wrap: function () {
		return Earth.wrapLatLng(this);
	},

	// @method toBounds(sizeInMeters: Number): LatLngBounds
	// Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters/2` meters apart from the `LatLng`.
	toBounds: function (sizeInMeters) {
		var latAccuracy = 180 * sizeInMeters / 40075017,
		    lngAccuracy = latAccuracy / Math.cos((Math.PI / 180) * this.lat);

		return toLatLngBounds(
		        [this.lat - latAccuracy, this.lng - lngAccuracy],
		        [this.lat + latAccuracy, this.lng + lngAccuracy]);
	},

	clone: function () {
		return new LatLng(this.lat, this.lng, this.alt);
	}
};



// @factory L.latLng(latitude: Number, longitude: Number, altitude?: Number): LatLng
// Creates an object representing a geographical point with the given latitude and longitude (and optionally altitude).

// @alternative
// @factory L.latLng(coords: Array): LatLng
// Expects an array of the form `[Number, Number]` or `[Number, Number, Number]` instead.

// @alternative
// @factory L.latLng(coords: Object): LatLng
// Expects an plain object of the form `{lat: Number, lng: Number}` or `{lat: Number, lng: Number, alt: Number}` instead.

function toLatLng(a, b, c) {
	if (a instanceof LatLng) {
		return a;
	}
	if (isArray(a) && typeof a[0] !== 'object') {
		if (a.length === 3) {
			return new LatLng(a[0], a[1], a[2]);
		}
		if (a.length === 2) {
			return new LatLng(a[0], a[1]);
		}
		return null;
	}
	if (a === undefined || a === null) {
		return a;
	}
	if (typeof a === 'object' && 'lat' in a) {
		return new LatLng(a.lat, 'lng' in a ? a.lng : a.lon, a.alt);
	}
	if (b === undefined) {
		return null;
	}
	return new LatLng(a, b, c);
}

/*
 * @namespace CRS
 * @crs L.CRS.Base
 * Object that defines coordinate reference systems for projecting
 * geographical points into pixel (screen) coordinates and back (and to
 * coordinates in other units for [WMS](https://en.wikipedia.org/wiki/Web_Map_Service) services). See
 * [spatial reference system](http://en.wikipedia.org/wiki/Coordinate_reference_system).
 *
 * Leaflet defines the most usual CRSs by default. If you want to use a
 * CRS not defined by default, take a look at the
 * [Proj4Leaflet](https://github.com/kartena/Proj4Leaflet) plugin.
 */

var CRS = {
	// @method latLngToPoint(latlng: LatLng, zoom: Number): Point
	// Projects geographical coordinates into pixel coordinates for a given zoom.
	latLngToPoint: function (latlng, zoom) {
		var projectedPoint = this.projection.project(latlng),
		    scale = this.scale(zoom);

		return this.transformation._transform(projectedPoint, scale);
	},

	// @method pointToLatLng(point: Point, zoom: Number): LatLng
	// The inverse of `latLngToPoint`. Projects pixel coordinates on a given
	// zoom into geographical coordinates.
	pointToLatLng: function (point, zoom) {
		var scale = this.scale(zoom),
		    untransformedPoint = this.transformation.untransform(point, scale);

		return this.projection.unproject(untransformedPoint);
	},

	// @method project(latlng: LatLng): Point
	// Projects geographical coordinates into coordinates in units accepted for
	// this CRS (e.g. meters for EPSG:3857, for passing it to WMS services).
	project: function (latlng) {
		return this.projection.project(latlng);
	},

	// @method unproject(point: Point): LatLng
	// Given a projected coordinate returns the corresponding LatLng.
	// The inverse of `project`.
	unproject: function (point) {
		return this.projection.unproject(point);
	},

	// @method scale(zoom: Number): Number
	// Returns the scale used when transforming projected coordinates into
	// pixel coordinates for a particular zoom. For example, it returns
	// `256 * 2^zoom` for Mercator-based CRS.
	scale: function (zoom) {
		return 256 * Math.pow(2, zoom);
	},

	// @method zoom(scale: Number): Number
	// Inverse of `scale()`, returns the zoom level corresponding to a scale
	// factor of `scale`.
	zoom: function (scale) {
		return Math.log(scale / 256) / Math.LN2;
	},

	// @method getProjectedBounds(zoom: Number): Bounds
	// Returns the projection's bounds scaled and transformed for the provided `zoom`.
	getProjectedBounds: function (zoom) {
		if (this.infinite) { return null; }

		var b = this.projection.bounds,
		    s = this.scale(zoom),
		    min = this.transformation.transform(b.min, s),
		    max = this.transformation.transform(b.max, s);

		return new Bounds(min, max);
	},

	// @method distance(latlng1: LatLng, latlng2: LatLng): Number
	// Returns the distance between two geographical coordinates.

	// @property code: String
	// Standard code name of the CRS passed into WMS services (e.g. `'EPSG:3857'`)
	//
	// @property wrapLng: Number[]
	// An array of two numbers defining whether the longitude (horizontal) coordinate
	// axis wraps around a given range and how. Defaults to `[-180, 180]` in most
	// geographical CRSs. If `undefined`, the longitude axis does not wrap around.
	//
	// @property wrapLat: Number[]
	// Like `wrapLng`, but for the latitude (vertical) axis.

	// wrapLng: [min, max],
	// wrapLat: [min, max],

	// @property infinite: Boolean
	// If true, the coordinate space will be unbounded (infinite in both axes)
	infinite: false,

	// @method wrapLatLng(latlng: LatLng): LatLng
	// Returns a `LatLng` where lat and lng has been wrapped according to the
	// CRS's `wrapLat` and `wrapLng` properties, if they are outside the CRS's bounds.
	wrapLatLng: function (latlng) {
		var lng = this.wrapLng ? wrapNum(latlng.lng, this.wrapLng, true) : latlng.lng,
		    lat = this.wrapLat ? wrapNum(latlng.lat, this.wrapLat, true) : latlng.lat,
		    alt = latlng.alt;

		return new LatLng(lat, lng, alt);
	},

	// @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
	// Returns a `LatLngBounds` with the same size as the given one, ensuring
	// that its center is within the CRS's bounds.
	// Only accepts actual `L.LatLngBounds` instances, not arrays.
	wrapLatLngBounds: function (bounds) {
		var center = bounds.getCenter(),
		    newCenter = this.wrapLatLng(center),
		    latShift = center.lat - newCenter.lat,
		    lngShift = center.lng - newCenter.lng;

		if (latShift === 0 && lngShift === 0) {
			return bounds;
		}

		var sw = bounds.getSouthWest(),
		    ne = bounds.getNorthEast(),
		    newSw = new LatLng(sw.lat - latShift, sw.lng - lngShift),
		    newNe = new LatLng(ne.lat - latShift, ne.lng - lngShift);

		return new LatLngBounds(newSw, newNe);
	}
};

/*
 * @namespace CRS
 * @crs L.CRS.Earth
 *
 * Serves as the base for CRS that are global such that they cover the earth.
 * Can only be used as the base for other CRS and cannot be used directly,
 * since it does not have a `code`, `projection` or `transformation`. `distance()` returns
 * meters.
 */

var Earth = extend({}, CRS, {
	wrapLng: [-180, 180],

	// Mean Earth Radius, as recommended for use by
	// the International Union of Geodesy and Geophysics,
	// see http://rosettacode.org/wiki/Haversine_formula
	R: 6371000,

	// distance between two geographical points using spherical law of cosines approximation
	distance: function (latlng1, latlng2) {
		var rad = Math.PI / 180,
		    lat1 = latlng1.lat * rad,
		    lat2 = latlng2.lat * rad,
		    a = Math.sin(lat1) * Math.sin(lat2) +
		        Math.cos(lat1) * Math.cos(lat2) * Math.cos((latlng2.lng - latlng1.lng) * rad);

		return this.R * Math.acos(Math.min(a, 1));
	}
});

/*
 * @namespace Projection
 * @projection L.Projection.SphericalMercator
 *
 * Spherical Mercator projection — the most common projection for online maps,
 * used by almost all free and commercial tile providers. Assumes that Earth is
 * a sphere. Used by the `EPSG:3857` CRS.
 */

var SphericalMercator = {

	R: 6378137,
	MAX_LATITUDE: 85.0511287798,

	project: function (latlng) {
		var d = Math.PI / 180,
		    max = this.MAX_LATITUDE,
		    lat = Math.max(Math.min(max, latlng.lat), -max),
		    sin = Math.sin(lat * d);

		return new Point(
				this.R * latlng.lng * d,
				this.R * Math.log((1 + sin) / (1 - sin)) / 2);
	},

	unproject: function (point) {
		var d = 180 / Math.PI;

		return new LatLng(
			(2 * Math.atan(Math.exp(point.y / this.R)) - (Math.PI / 2)) * d,
			point.x * d / this.R);
	},

	bounds: (function () {
		var d = 6378137 * Math.PI;
		return new Bounds([-d, -d], [d, d]);
	})()
};

/*
 * @class Transformation
 * @aka L.Transformation
 *
 * Represents an affine transformation: a set of coefficients `a`, `b`, `c`, `d`
 * for transforming a point of a form `(x, y)` into `(a*x + b, c*y + d)` and doing
 * the reverse. Used by Leaflet in its projections code.
 *
 * @example
 *
 * ```js
 * var transformation = L.transformation(2, 5, -1, 10),
 * 	p = L.point(1, 2),
 * 	p2 = transformation.transform(p), //  L.point(7, 8)
 * 	p3 = transformation.untransform(p2); //  L.point(1, 2)
 * ```
 */


// factory new L.Transformation(a: Number, b: Number, c: Number, d: Number)
// Creates a `Transformation` object with the given coefficients.
function Transformation(a, b, c, d) {
	if (isArray(a)) {
		// use array properties
		this._a = a[0];
		this._b = a[1];
		this._c = a[2];
		this._d = a[3];
		return;
	}
	this._a = a;
	this._b = b;
	this._c = c;
	this._d = d;
}

Transformation.prototype = {
	// @method transform(point: Point, scale?: Number): Point
	// Returns a transformed point, optionally multiplied by the given scale.
	// Only accepts actual `L.Point` instances, not arrays.
	transform: function (point, scale) { // (Point, Number) -> Point
		return this._transform(point.clone(), scale);
	},

	// destructive transform (faster)
	_transform: function (point, scale) {
		scale = scale || 1;
		point.x = scale * (this._a * point.x + this._b);
		point.y = scale * (this._c * point.y + this._d);
		return point;
	},

	// @method untransform(point: Point, scale?: Number): Point
	// Returns the reverse transformation of the given point, optionally divided
	// by the given scale. Only accepts actual `L.Point` instances, not arrays.
	untransform: function (point, scale) {
		scale = scale || 1;
		return new Point(
		        (point.x / scale - this._b) / this._a,
		        (point.y / scale - this._d) / this._c);
	}
};

// factory L.transformation(a: Number, b: Number, c: Number, d: Number)

// @factory L.transformation(a: Number, b: Number, c: Number, d: Number)
// Instantiates a Transformation object with the given coefficients.

// @alternative
// @factory L.transformation(coefficients: Array): Transformation
// Expects an coeficients array of the form
// `[a: Number, b: Number, c: Number, d: Number]`.

function toTransformation(a, b, c, d) {
	return new Transformation(a, b, c, d);
}

/*
 * @namespace CRS
 * @crs L.CRS.EPSG3857
 *
 * The most common CRS for online maps, used by almost all free and commercial
 * tile providers. Uses Spherical Mercator projection. Set in by default in
 * Map's `crs` option.
 */

var EPSG3857 = extend({}, Earth, {
	code: 'EPSG:3857',
	projection: SphericalMercator,

	transformation: (function () {
		var scale = 0.5 / (Math.PI * SphericalMercator.R);
		return toTransformation(scale, 0.5, -scale, 0.5);
	}())
});

var EPSG900913 = extend({}, EPSG3857, {
	code: 'EPSG:900913'
});

// @namespace SVG; @section
// There are several static functions which can be called without instantiating L.SVG:

// @function create(name: String): SVGElement
// Returns a instance of [SVGElement](https://developer.mozilla.org/docs/Web/API/SVGElement),
// corresponding to the class name passed. For example, using 'line' will return
// an instance of [SVGLineElement](https://developer.mozilla.org/docs/Web/API/SVGLineElement).
function svgCreate(name) {
	return document.createElementNS('http://www.w3.org/2000/svg', name);
}

// @function pointsToPath(rings: Point[], closed: Boolean): String
// Generates a SVG path string for multiple rings, with each ring turning
// into "M..L..L.." instructions
function pointsToPath(rings, closed) {
	var str = '',
	i, j, len, len2, points, p;

	for (i = 0, len = rings.length; i < len; i++) {
		points = rings[i];

		for (j = 0, len2 = points.length; j < len2; j++) {
			p = points[j];
			str += (j ? 'L' : 'M') + p.x + ' ' + p.y;
		}

		// closes the ring for polygons; "x" is VML syntax
		str += closed ? (svg ? 'z' : 'x') : '';
	}

	// SVG complains about empty path strings
	return str || 'M0 0';
}

/*
 * @namespace Browser
 * @aka L.Browser
 *
 * A namespace with static properties for browser/feature detection used by Leaflet internally.
 *
 * @example
 *
 * ```js
 * if (L.Browser.ielt9) {
 *   alert('Upgrade your browser, dude!');
 * }
 * ```
 */

var style$1 = document.documentElement.style;

// @property ie: Boolean; `true` for all Internet Explorer versions (not Edge).
var ie = 'ActiveXObject' in window;

// @property ielt9: Boolean; `true` for Internet Explorer versions less than 9.
var ielt9 = ie && !document.addEventListener;

// @property edge: Boolean; `true` for the Edge web browser.
var edge = 'msLaunchUri' in navigator && !('documentMode' in document);

// @property webkit: Boolean;
// `true` for webkit-based browsers like Chrome and Safari (including mobile versions).
var webkit = userAgentContains('webkit');

// @property android: Boolean
// `true` for any browser running on an Android platform.
var android = userAgentContains('android');

// @property android23: Boolean; `true` for browsers running on Android 2 or Android 3.
var android23 = userAgentContains('android 2') || userAgentContains('android 3');

// @property opera: Boolean; `true` for the Opera browser
var opera = !!window.opera;

// @property chrome: Boolean; `true` for the Chrome browser.
var chrome = userAgentContains('chrome');

// @property gecko: Boolean; `true` for gecko-based browsers like Firefox.
var gecko = userAgentContains('gecko') && !webkit && !opera && !ie;

// @property safari: Boolean; `true` for the Safari browser.
var safari = !chrome && userAgentContains('safari');

var phantom = userAgentContains('phantom');

// @property opera12: Boolean
// `true` for the Opera browser supporting CSS transforms (version 12 or later).
var opera12 = 'OTransition' in style$1;

// @property win: Boolean; `true` when the browser is running in a Windows platform
var win = navigator.platform.indexOf('Win') === 0;

// @property ie3d: Boolean; `true` for all Internet Explorer versions supporting CSS transforms.
var ie3d = ie && ('transition' in style$1);

// @property webkit3d: Boolean; `true` for webkit-based browsers supporting CSS transforms.
var webkit3d = ('WebKitCSSMatrix' in window) && ('m11' in new window.WebKitCSSMatrix()) && !android23;

// @property gecko3d: Boolean; `true` for gecko-based browsers supporting CSS transforms.
var gecko3d = 'MozPerspective' in style$1;

// @property any3d: Boolean
// `true` for all browsers supporting CSS transforms.
var any3d = !window.L_DISABLE_3D && (ie3d || webkit3d || gecko3d) && !opera12 && !phantom;

// @property mobile: Boolean; `true` for all browsers running in a mobile device.
var mobile = typeof orientation !== 'undefined' || userAgentContains('mobile');

// @property mobileWebkit: Boolean; `true` for all webkit-based browsers in a mobile device.
var mobileWebkit = mobile && webkit;

// @property mobileWebkit3d: Boolean
// `true` for all webkit-based browsers in a mobile device supporting CSS transforms.
var mobileWebkit3d = mobile && webkit3d;

// @property msPointer: Boolean
// `true` for browsers implementing the Microsoft touch events model (notably IE10).
var msPointer = !window.PointerEvent && window.MSPointerEvent;

// @property pointer: Boolean
// `true` for all browsers supporting [pointer events](https://msdn.microsoft.com/en-us/library/dn433244%28v=vs.85%29.aspx).
var pointer = !!(window.PointerEvent || msPointer);

// @property touch: Boolean
// `true` for all browsers supporting [touch events](https://developer.mozilla.org/docs/Web/API/Touch_events).
// This does not necessarily mean that the browser is running in a computer with
// a touchscreen, it only means that the browser is capable of understanding
// touch events.
var touch = !window.L_NO_TOUCH && (pointer || 'ontouchstart' in window ||
		(window.DocumentTouch && document instanceof window.DocumentTouch));

// @property mobileOpera: Boolean; `true` for the Opera browser in a mobile device.
var mobileOpera = mobile && opera;

// @property mobileGecko: Boolean
// `true` for gecko-based browsers running in a mobile device.
var mobileGecko = mobile && gecko;

// @property retina: Boolean
// `true` for browsers on a high-resolution "retina" screen.
var retina = (window.devicePixelRatio || (window.screen.deviceXDPI / window.screen.logicalXDPI)) > 1;


// @property canvas: Boolean
// `true` when the browser supports [`<canvas>`](https://developer.mozilla.org/docs/Web/API/Canvas_API).
var canvas = (function () {
	return !!document.createElement('canvas').getContext;
}());

// @property svg: Boolean
// `true` when the browser supports [SVG](https://developer.mozilla.org/docs/Web/SVG).
var svg = !!(document.createElementNS && svgCreate('svg').createSVGRect);

// @property vml: Boolean
// `true` if the browser supports [VML](https://en.wikipedia.org/wiki/Vector_Markup_Language).
var vml = !svg && (function () {
	try {
		var div = document.createElement('div');
		div.innerHTML = '<v:shape adj="1"/>';

		var shape = div.firstChild;
		shape.style.behavior = 'url(#default#VML)';

		return shape && (typeof shape.adj === 'object');

	} catch (e) {
		return false;
	}
}());


function userAgentContains(str) {
	return navigator.userAgent.toLowerCase().indexOf(str) >= 0;
}


var Browser = (Object.freeze || Object)({
	ie: ie,
	ielt9: ielt9,
	edge: edge,
	webkit: webkit,
	android: android,
	android23: android23,
	opera: opera,
	chrome: chrome,
	gecko: gecko,
	safari: safari,
	phantom: phantom,
	opera12: opera12,
	win: win,
	ie3d: ie3d,
	webkit3d: webkit3d,
	gecko3d: gecko3d,
	any3d: any3d,
	mobile: mobile,
	mobileWebkit: mobileWebkit,
	mobileWebkit3d: mobileWebkit3d,
	msPointer: msPointer,
	pointer: pointer,
	touch: touch,
	mobileOpera: mobileOpera,
	mobileGecko: mobileGecko,
	retina: retina,
	canvas: canvas,
	svg: svg,
	vml: vml
});

/*
 * Extends L.DomEvent to provide touch support for Internet Explorer and Windows-based devices.
 */


var POINTER_DOWN =   msPointer ? 'MSPointerDown'   : 'pointerdown';
var POINTER_MOVE =   msPointer ? 'MSPointerMove'   : 'pointermove';
var POINTER_UP =     msPointer ? 'MSPointerUp'     : 'pointerup';
var POINTER_CANCEL = msPointer ? 'MSPointerCancel' : 'pointercancel';
var TAG_WHITE_LIST = ['INPUT', 'SELECT', 'OPTION'];
var _pointers = {};
var _pointerDocListener = false;

// DomEvent.DoubleTap needs to know about this
var _pointersCount = 0;

// Provides a touch events wrapper for (ms)pointer events.
// ref http://www.w3.org/TR/pointerevents/ https://www.w3.org/Bugs/Public/show_bug.cgi?id=22890

function addPointerListener(obj, type, handler, id) {
	if (type === 'touchstart') {
		_addPointerStart(obj, handler, id);

	} else if (type === 'touchmove') {
		_addPointerMove(obj, handler, id);

	} else if (type === 'touchend') {
		_addPointerEnd(obj, handler, id);
	}

	return this;
}

function removePointerListener(obj, type, id) {
	var handler = obj['_leaflet_' + type + id];

	if (type === 'touchstart') {
		obj.removeEventListener(POINTER_DOWN, handler, false);

	} else if (type === 'touchmove') {
		obj.removeEventListener(POINTER_MOVE, handler, false);

	} else if (type === 'touchend') {
		obj.removeEventListener(POINTER_UP, handler, false);
		obj.removeEventListener(POINTER_CANCEL, handler, false);
	}

	return this;
}

function _addPointerStart(obj, handler, id) {
	var onDown = bind(function (e) {
		if (e.pointerType !== 'mouse' && e.pointerType !== e.MSPOINTER_TYPE_MOUSE && e.pointerType !== e.MSPOINTER_TYPE_MOUSE) {
			// In IE11, some touch events needs to fire for form controls, or
			// the controls will stop working. We keep a whitelist of tag names that
			// need these events. For other target tags, we prevent default on the event.
			if (TAG_WHITE_LIST.indexOf(e.target.tagName) < 0) {
				preventDefault(e);
			} else {
				return;
			}
		}

		_handlePointer(e, handler);
	});

	obj['_leaflet_touchstart' + id] = onDown;
	obj.addEventListener(POINTER_DOWN, onDown, false);

	// need to keep track of what pointers and how many are active to provide e.touches emulation
	if (!_pointerDocListener) {
		// we listen documentElement as any drags that end by moving the touch off the screen get fired there
		document.documentElement.addEventListener(POINTER_DOWN, _globalPointerDown, true);
		document.documentElement.addEventListener(POINTER_MOVE, _globalPointerMove, true);
		document.documentElement.addEventListener(POINTER_UP, _globalPointerUp, true);
		document.documentElement.addEventListener(POINTER_CANCEL, _globalPointerUp, true);

		_pointerDocListener = true;
	}
}

function _globalPointerDown(e) {
	_pointers[e.pointerId] = e;
	_pointersCount++;
}

function _globalPointerMove(e) {
	if (_pointers[e.pointerId]) {
		_pointers[e.pointerId] = e;
	}
}

function _globalPointerUp(e) {
	delete _pointers[e.pointerId];
	_pointersCount--;
}

function _handlePointer(e, handler) {
	e.touches = [];
	for (var i in _pointers) {
		e.touches.push(_pointers[i]);
	}
	e.changedTouches = [e];

	handler(e);
}

function _addPointerMove(obj, handler, id) {
	var onMove = function (e) {
		// don't fire touch moves when mouse isn't down
		if ((e.pointerType === e.MSPOINTER_TYPE_MOUSE || e.pointerType === 'mouse') && e.buttons === 0) { return; }

		_handlePointer(e, handler);
	};

	obj['_leaflet_touchmove' + id] = onMove;
	obj.addEventListener(POINTER_MOVE, onMove, false);
}

function _addPointerEnd(obj, handler, id) {
	var onUp = function (e) {
		_handlePointer(e, handler);
	};

	obj['_leaflet_touchend' + id] = onUp;
	obj.addEventListener(POINTER_UP, onUp, false);
	obj.addEventListener(POINTER_CANCEL, onUp, false);
}

/*
 * Extends the event handling code with double tap support for mobile browsers.
 */

var _touchstart = msPointer ? 'MSPointerDown' : pointer ? 'pointerdown' : 'touchstart';
var _touchend = msPointer ? 'MSPointerUp' : pointer ? 'pointerup' : 'touchend';
var _pre = '_leaflet_';

// inspired by Zepto touch code by Thomas Fuchs
function addDoubleTapListener(obj, handler, id) {
	var last, touch$$1,
	    doubleTap = false,
	    delay = 250;

	function onTouchStart(e) {
		var count;

		if (pointer) {
			if ((!edge) || e.pointerType === 'mouse') { return; }
			count = _pointersCount;
		} else {
			count = e.touches.length;
		}

		if (count > 1) { return; }

		var now = Date.now(),
		    delta = now - (last || now);

		touch$$1 = e.touches ? e.touches[0] : e;
		doubleTap = (delta > 0 && delta <= delay);
		last = now;
	}

	function onTouchEnd(e) {
		if (doubleTap && !touch$$1.cancelBubble) {
			if (pointer) {
				if ((!edge) || e.pointerType === 'mouse') { return; }
				// work around .type being readonly with MSPointer* events
				var newTouch = {},
				    prop, i;

				for (i in touch$$1) {
					prop = touch$$1[i];
					newTouch[i] = prop && prop.bind ? prop.bind(touch$$1) : prop;
				}
				touch$$1 = newTouch;
			}
			touch$$1.type = 'dblclick';
			handler(touch$$1);
			last = null;
		}
	}

	obj[_pre + _touchstart + id] = onTouchStart;
	obj[_pre + _touchend + id] = onTouchEnd;
	obj[_pre + 'dblclick' + id] = handler;

	obj.addEventListener(_touchstart, onTouchStart, false);
	obj.addEventListener(_touchend, onTouchEnd, false);

	// On some platforms (notably, chrome<55 on win10 + touchscreen + mouse),
	// the browser doesn't fire touchend/pointerup events but does fire
	// native dblclicks. See #4127.
	// Edge 14 also fires native dblclicks, but only for pointerType mouse, see #5180.
	obj.addEventListener('dblclick', handler, false);

	return this;
}

function removeDoubleTapListener(obj, id) {
	var touchstart = obj[_pre + _touchstart + id],
	    touchend = obj[_pre + _touchend + id],
	    dblclick = obj[_pre + 'dblclick' + id];

	obj.removeEventListener(_touchstart, touchstart, false);
	obj.removeEventListener(_touchend, touchend, false);
	if (!edge) {
		obj.removeEventListener('dblclick', dblclick, false);
	}

	return this;
}

/*
 * @namespace DomEvent
 * Utility functions to work with the [DOM events](https://developer.mozilla.org/docs/Web/API/Event), used by Leaflet internally.
 */

// Inspired by John Resig, Dean Edwards and YUI addEvent implementations.

// @function on(el: HTMLElement, types: String, fn: Function, context?: Object): this
// Adds a listener function (`fn`) to a particular DOM event type of the
// element `el`. You can optionally specify the context of the listener
// (object the `this` keyword will point to). You can also pass several
// space-separated types (e.g. `'click dblclick'`).

// @alternative
// @function on(el: HTMLElement, eventMap: Object, context?: Object): this
// Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
function on(obj, types, fn, context) {

	if (typeof types === 'object') {
		for (var type in types) {
			addOne(obj, type, types[type], fn);
		}
	} else {
		types = splitWords(types);

		for (var i = 0, len = types.length; i < len; i++) {
			addOne(obj, types[i], fn, context);
		}
	}

	return this;
}

var eventsKey = '_leaflet_events';

// @function off(el: HTMLElement, types: String, fn: Function, context?: Object): this
// Removes a previously added listener function. If no function is specified,
// it will remove all the listeners of that particular DOM event from the element.
// Note that if you passed a custom context to on, you must pass the same
// context to `off` in order to remove the listener.

// @alternative
// @function off(el: HTMLElement, eventMap: Object, context?: Object): this
// Removes a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`

// @alternative
// @function off(el: HTMLElement): this
// Removes all known event listeners
function off(obj, types, fn, context) {

	if (typeof types === 'object') {
		for (var type in types) {
			removeOne(obj, type, types[type], fn);
		}
	} else if (types) {
		types = splitWords(types);

		for (var i = 0, len = types.length; i < len; i++) {
			removeOne(obj, types[i], fn, context);
		}
	} else {
		for (var j in obj[eventsKey]) {
			removeOne(obj, j, obj[eventsKey][j]);
		}
		delete obj[eventsKey];
	}

	return this;
}

function addOne(obj, type, fn, context) {
	var id = type + stamp(fn) + (context ? '_' + stamp(context) : '');

	if (obj[eventsKey] && obj[eventsKey][id]) { return this; }

	var handler = function (e) {
		return fn.call(context || obj, e || window.event);
	};

	var originalHandler = handler;

	if (pointer && type.indexOf('touch') === 0) {
		// Needs DomEvent.Pointer.js
		addPointerListener(obj, type, handler, id);

	} else if (touch && (type === 'dblclick') && addDoubleTapListener &&
	           !(pointer && chrome)) {
		// Chrome >55 does not need the synthetic dblclicks from addDoubleTapListener
		// See #5180
		addDoubleTapListener(obj, handler, id);

	} else if ('addEventListener' in obj) {

		if (type === 'mousewheel') {
			obj.addEventListener('onwheel' in obj ? 'wheel' : 'mousewheel', handler, false);

		} else if ((type === 'mouseenter') || (type === 'mouseleave')) {
			handler = function (e) {
				e = e || window.event;
				if (isExternalTarget(obj, e)) {
					originalHandler(e);
				}
			};
			obj.addEventListener(type === 'mouseenter' ? 'mouseover' : 'mouseout', handler, false);

		} else {
			if (type === 'click' && android) {
				handler = function (e) {
					filterClick(e, originalHandler);
				};
			}
			obj.addEventListener(type, handler, false);
		}

	} else if ('attachEvent' in obj) {
		obj.attachEvent('on' + type, handler);
	}

	obj[eventsKey] = obj[eventsKey] || {};
	obj[eventsKey][id] = handler;
}

function removeOne(obj, type, fn, context) {

	var id = type + stamp(fn) + (context ? '_' + stamp(context) : ''),
	    handler = obj[eventsKey] && obj[eventsKey][id];

	if (!handler) { return this; }

	if (pointer && type.indexOf('touch') === 0) {
		removePointerListener(obj, type, id);

	} else if (touch && (type === 'dblclick') && removeDoubleTapListener) {
		removeDoubleTapListener(obj, id);

	} else if ('removeEventListener' in obj) {

		if (type === 'mousewheel') {
			obj.removeEventListener('onwheel' in obj ? 'wheel' : 'mousewheel', handler, false);

		} else {
			obj.removeEventListener(
				type === 'mouseenter' ? 'mouseover' :
				type === 'mouseleave' ? 'mouseout' : type, handler, false);
		}

	} else if ('detachEvent' in obj) {
		obj.detachEvent('on' + type, handler);
	}

	obj[eventsKey][id] = null;
}

// @function stopPropagation(ev: DOMEvent): this
// Stop the given event from propagation to parent elements. Used inside the listener functions:
// ```js
// L.DomEvent.on(div, 'click', function (ev) {
// 	L.DomEvent.stopPropagation(ev);
// });
// ```
function stopPropagation(e) {

	if (e.stopPropagation) {
		e.stopPropagation();
	} else if (e.originalEvent) {  // In case of Leaflet event.
		e.originalEvent._stopped = true;
	} else {
		e.cancelBubble = true;
	}
	skipped(e);

	return this;
}

// @function disableScrollPropagation(el: HTMLElement): this
// Adds `stopPropagation` to the element's `'mousewheel'` events (plus browser variants).
function disableScrollPropagation(el) {
	addOne(el, 'mousewheel', stopPropagation);
	return this;
}

// @function disableClickPropagation(el: HTMLElement): this
// Adds `stopPropagation` to the element's `'click'`, `'doubleclick'`,
// `'mousedown'` and `'touchstart'` events (plus browser variants).
function disableClickPropagation(el) {
	on(el, 'mousedown touchstart dblclick', stopPropagation);
	addOne(el, 'click', fakeStop);
	return this;
}

// @function preventDefault(ev: DOMEvent): this
// Prevents the default action of the DOM Event `ev` from happening (such as
// following a link in the href of the a element, or doing a POST request
// with page reload when a `<form>` is submitted).
// Use it inside listener functions.
function preventDefault(e) {
	if (e.preventDefault) {
		e.preventDefault();
	} else {
		e.returnValue = false;
	}
	return this;
}

// @function stop(ev): this
// Does `stopPropagation` and `preventDefault` at the same time.
function stop(e) {
	preventDefault(e);
	stopPropagation(e);
	return this;
}

// @function getMousePosition(ev: DOMEvent, container?: HTMLElement): Point
// Gets normalized mouse position from a DOM event relative to the
// `container` or to the whole page if not specified.
function getMousePosition(e, container) {
	if (!container) {
		return new Point(e.clientX, e.clientY);
	}

	var rect = container.getBoundingClientRect();

	return new Point(
		e.clientX - rect.left - container.clientLeft,
		e.clientY - rect.top - container.clientTop);
}

// Chrome on Win scrolls double the pixels as in other platforms (see #4538),
// and Firefox scrolls device pixels, not CSS pixels
var wheelPxFactor =
	(win && chrome) ? 2 * window.devicePixelRatio :
	gecko ? window.devicePixelRatio : 1;

// @function getWheelDelta(ev: DOMEvent): Number
// Gets normalized wheel delta from a mousewheel DOM event, in vertical
// pixels scrolled (negative if scrolling down).
// Events from pointing devices without precise scrolling are mapped to
// a best guess of 60 pixels.
function getWheelDelta(e) {
	return (edge) ? e.wheelDeltaY / 2 : // Don't trust window-geometry-based delta
	       (e.deltaY && e.deltaMode === 0) ? -e.deltaY / wheelPxFactor : // Pixels
	       (e.deltaY && e.deltaMode === 1) ? -e.deltaY * 20 : // Lines
	       (e.deltaY && e.deltaMode === 2) ? -e.deltaY * 60 : // Pages
	       (e.deltaX || e.deltaZ) ? 0 :	// Skip horizontal/depth wheel events
	       e.wheelDelta ? (e.wheelDeltaY || e.wheelDelta) / 2 : // Legacy IE pixels
	       (e.detail && Math.abs(e.detail) < 32765) ? -e.detail * 20 : // Legacy Moz lines
	       e.detail ? e.detail / -32765 * 60 : // Legacy Moz pages
	       0;
}

var skipEvents = {};

function fakeStop(e) {
	// fakes stopPropagation by setting a special event flag, checked/reset with skipped(e)
	skipEvents[e.type] = true;
}

function skipped(e) {
	var events = skipEvents[e.type];
	// reset when checking, as it's only used in map container and propagates outside of the map
	skipEvents[e.type] = false;
	return events;
}

// check if element really left/entered the event target (for mouseenter/mouseleave)
function isExternalTarget(el, e) {

	var related = e.relatedTarget;

	if (!related) { return true; }

	try {
		while (related && (related !== el)) {
			related = related.parentNode;
		}
	} catch (err) {
		return false;
	}
	return (related !== el);
}

var lastClick;

// this is a horrible workaround for a bug in Android where a single touch triggers two click events
function filterClick(e, handler) {
	var timeStamp = (e.timeStamp || (e.originalEvent && e.originalEvent.timeStamp)),
	    elapsed = lastClick && (timeStamp - lastClick);

	// are they closer together than 500ms yet more than 100ms?
	// Android typically triggers them ~300ms apart while multiple listeners
	// on the same event should be triggered far faster;
	// or check if click is simulated on the element, and if it is, reject any non-simulated events

	if ((elapsed && elapsed > 100 && elapsed < 500) || (e.target._simulatedClick && !e._simulated)) {
		stop(e);
		return;
	}
	lastClick = timeStamp;

	handler(e);
}




var DomEvent = (Object.freeze || Object)({
	on: on,
	off: off,
	stopPropagation: stopPropagation,
	disableScrollPropagation: disableScrollPropagation,
	disableClickPropagation: disableClickPropagation,
	preventDefault: preventDefault,
	stop: stop,
	getMousePosition: getMousePosition,
	getWheelDelta: getWheelDelta,
	fakeStop: fakeStop,
	skipped: skipped,
	isExternalTarget: isExternalTarget,
	addListener: on,
	removeListener: off
});

/*
 * @namespace DomUtil
 *
 * Utility functions to work with the [DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model)
 * tree, used by Leaflet internally.
 *
 * Most functions expecting or returning a `HTMLElement` also work for
 * SVG elements. The only difference is that classes refer to CSS classes
 * in HTML and SVG classes in SVG.
 */


// @property TRANSFORM: String
// Vendor-prefixed transform style name (e.g. `'webkitTransform'` for WebKit).
var TRANSFORM = testProp(
	['transform', 'WebkitTransform', 'OTransform', 'MozTransform', 'msTransform']);

// webkitTransition comes first because some browser versions that drop vendor prefix don't do
// the same for the transitionend event, in particular the Android 4.1 stock browser

// @property TRANSITION: String
// Vendor-prefixed transition style name.
var TRANSITION = testProp(
	['webkitTransition', 'transition', 'OTransition', 'MozTransition', 'msTransition']);

// @property TRANSITION_END: String
// Vendor-prefixed transitionend event name.
var TRANSITION_END =
	TRANSITION === 'webkitTransition' || TRANSITION === 'OTransition' ? TRANSITION + 'End' : 'transitionend';


// @function get(id: String|HTMLElement): HTMLElement
// Returns an element given its DOM id, or returns the element itself
// if it was passed directly.
function get(id) {
	return typeof id === 'string' ? document.getElementById(id) : id;
}

// @function getStyle(el: HTMLElement, styleAttrib: String): String
// Returns the value for a certain style attribute on an element,
// including computed values or values set through CSS.
function getStyle(el, style) {
	var value = el.style[style] || (el.currentStyle && el.currentStyle[style]);

	if ((!value || value === 'auto') && document.defaultView) {
		var css = document.defaultView.getComputedStyle(el, null);
		value = css ? css[style] : null;
	}
	return value === 'auto' ? null : value;
}

// @function create(tagName: String, className?: String, container?: HTMLElement): HTMLElement
// Creates an HTML element with `tagName`, sets its class to `className`, and optionally appends it to `container` element.
function create$1(tagName, className, container) {
	var el = document.createElement(tagName);
	el.className = className || '';

	if (container) {
		container.appendChild(el);
	}
	return el;
}

// @function remove(el: HTMLElement)
// Removes `el` from its parent element
function remove(el) {
	var parent = el.parentNode;
	if (parent) {
		parent.removeChild(el);
	}
}

// @function empty(el: HTMLElement)
// Removes all of `el`'s children elements from `el`
function empty(el) {
	while (el.firstChild) {
		el.removeChild(el.firstChild);
	}
}

// @function toFront(el: HTMLElement)
// Makes `el` the last child of its parent, so it renders in front of the other children.
function toFront(el) {
	var parent = el.parentNode;
	if (parent.lastChild !== el) {
		parent.appendChild(el);
	}
}

// @function toBack(el: HTMLElement)
// Makes `el` the first child of its parent, so it renders behind the other children.
function toBack(el) {
	var parent = el.parentNode;
	if (parent.firstChild !== el) {
		parent.insertBefore(el, parent.firstChild);
	}
}

// @function hasClass(el: HTMLElement, name: String): Boolean
// Returns `true` if the element's class attribute contains `name`.
function hasClass(el, name) {
	if (el.classList !== undefined) {
		return el.classList.contains(name);
	}
	var className = getClass(el);
	return className.length > 0 && new RegExp('(^|\\s)' + name + '(\\s|$)').test(className);
}

// @function addClass(el: HTMLElement, name: String)
// Adds `name` to the element's class attribute.
function addClass(el, name) {
	if (el.classList !== undefined) {
		var classes = splitWords(name);
		for (var i = 0, len = classes.length; i < len; i++) {
			el.classList.add(classes[i]);
		}
	} else if (!hasClass(el, name)) {
		var className = getClass(el);
		setClass(el, (className ? className + ' ' : '') + name);
	}
}

// @function removeClass(el: HTMLElement, name: String)
// Removes `name` from the element's class attribute.
function removeClass(el, name) {
	if (el.classList !== undefined) {
		el.classList.remove(name);
	} else {
		setClass(el, trim((' ' + getClass(el) + ' ').replace(' ' + name + ' ', ' ')));
	}
}

// @function setClass(el: HTMLElement, name: String)
// Sets the element's class.
function setClass(el, name) {
	if (el.className.baseVal === undefined) {
		el.className = name;
	} else {
		// in case of SVG element
		el.className.baseVal = name;
	}
}

// @function getClass(el: HTMLElement): String
// Returns the element's class.
function getClass(el) {
	return el.className.baseVal === undefined ? el.className : el.className.baseVal;
}

// @function setOpacity(el: HTMLElement, opacity: Number)
// Set the opacity of an element (including old IE support).
// `opacity` must be a number from `0` to `1`.
function setOpacity(el, value) {
	if ('opacity' in el.style) {
		el.style.opacity = value;
	} else if ('filter' in el.style) {
		_setOpacityIE(el, value);
	}
}

function _setOpacityIE(el, value) {
	var filter = false,
	    filterName = 'DXImageTransform.Microsoft.Alpha';

	// filters collection throws an error if we try to retrieve a filter that doesn't exist
	try {
		filter = el.filters.item(filterName);
	} catch (e) {
		// don't set opacity to 1 if we haven't already set an opacity,
		// it isn't needed and breaks transparent pngs.
		if (value === 1) { return; }
	}

	value = Math.round(value * 100);

	if (filter) {
		filter.Enabled = (value !== 100);
		filter.Opacity = value;
	} else {
		el.style.filter += ' progid:' + filterName + '(opacity=' + value + ')';
	}
}

// @function testProp(props: String[]): String|false
// Goes through the array of style names and returns the first name
// that is a valid style name for an element. If no such name is found,
// it returns false. Useful for vendor-prefixed styles like `transform`.
function testProp(props) {
	var style = document.documentElement.style;

	for (var i = 0; i < props.length; i++) {
		if (props[i] in style) {
			return props[i];
		}
	}
	return false;
}

// @function setTransform(el: HTMLElement, offset: Point, scale?: Number)
// Resets the 3D CSS transform of `el` so it is translated by `offset` pixels
// and optionally scaled by `scale`. Does not have an effect if the
// browser doesn't support 3D CSS transforms.
function setTransform(el, offset, scale) {
	var pos = offset || new Point(0, 0);

	el.style[TRANSFORM] =
		(ie3d ?
			'translate(' + pos.x + 'px,' + pos.y + 'px)' :
			'translate3d(' + pos.x + 'px,' + pos.y + 'px,0)') +
		(scale ? ' scale(' + scale + ')' : '');
}

// @function setPosition(el: HTMLElement, position: Point)
// Sets the position of `el` to coordinates specified by `position`,
// using CSS translate or top/left positioning depending on the browser
// (used by Leaflet internally to position its layers).
function setPosition(el, point) {

	/*eslint-disable */
	el._leaflet_pos = point;
	/*eslint-enable */

	if (any3d) {
		setTransform(el, point);
	} else {
		el.style.left = point.x + 'px';
		el.style.top = point.y + 'px';
	}
}

// @function getPosition(el: HTMLElement): Point
// Returns the coordinates of an element previously positioned with setPosition.
function getPosition(el) {
	// this method is only used for elements previously positioned using setPosition,
	// so it's safe to cache the position for performance

	return el._leaflet_pos || new Point(0, 0);
}

// @function disableTextSelection()
// Prevents the user from generating `selectstart` DOM events, usually generated
// when the user drags the mouse through a page with text. Used internally
// by Leaflet to override the behaviour of any click-and-drag interaction on
// the map. Affects drag interactions on the whole document.

// @function enableTextSelection()
// Cancels the effects of a previous [`L.DomUtil.disableTextSelection`](#domutil-disabletextselection).
var disableTextSelection;
var enableTextSelection;
var _userSelect;
if ('onselectstart' in document) {
	disableTextSelection = function () {
		on(window, 'selectstart', preventDefault);
	};
	enableTextSelection = function () {
		off(window, 'selectstart', preventDefault);
	};
} else {
	var userSelectProperty = testProp(
		['userSelect', 'WebkitUserSelect', 'OUserSelect', 'MozUserSelect', 'msUserSelect']);

	disableTextSelection = function () {
		if (userSelectProperty) {
			var style = document.documentElement.style;
			_userSelect = style[userSelectProperty];
			style[userSelectProperty] = 'none';
		}
	};
	enableTextSelection = function () {
		if (userSelectProperty) {
			document.documentElement.style[userSelectProperty] = _userSelect;
			_userSelect = undefined;
		}
	};
}

// @function disableImageDrag()
// As [`L.DomUtil.disableTextSelection`](#domutil-disabletextselection), but
// for `dragstart` DOM events, usually generated when the user drags an image.
function disableImageDrag() {
	on(window, 'dragstart', preventDefault);
}

// @function enableImageDrag()
// Cancels the effects of a previous [`L.DomUtil.disableImageDrag`](#domutil-disabletextselection).
function enableImageDrag() {
	off(window, 'dragstart', preventDefault);
}

var _outlineElement;
var _outlineStyle;
// @function preventOutline(el: HTMLElement)
// Makes the [outline](https://developer.mozilla.org/docs/Web/CSS/outline)
// of the element `el` invisible. Used internally by Leaflet to prevent
// focusable elements from displaying an outline when the user performs a
// drag interaction on them.
function preventOutline(element) {
	while (element.tabIndex === -1) {
		element = element.parentNode;
	}
	if (!element.style) { return; }
	restoreOutline();
	_outlineElement = element;
	_outlineStyle = element.style.outline;
	element.style.outline = 'none';
	on(window, 'keydown', restoreOutline);
}

// @function restoreOutline()
// Cancels the effects of a previous [`L.DomUtil.preventOutline`]().
function restoreOutline() {
	if (!_outlineElement) { return; }
	_outlineElement.style.outline = _outlineStyle;
	_outlineElement = undefined;
	_outlineStyle = undefined;
	off(window, 'keydown', restoreOutline);
}


var DomUtil = (Object.freeze || Object)({
	TRANSFORM: TRANSFORM,
	TRANSITION: TRANSITION,
	TRANSITION_END: TRANSITION_END,
	get: get,
	getStyle: getStyle,
	create: create$1,
	remove: remove,
	empty: empty,
	toFront: toFront,
	toBack: toBack,
	hasClass: hasClass,
	addClass: addClass,
	removeClass: removeClass,
	setClass: setClass,
	getClass: getClass,
	setOpacity: setOpacity,
	testProp: testProp,
	setTransform: setTransform,
	setPosition: setPosition,
	getPosition: getPosition,
	disableTextSelection: disableTextSelection,
	enableTextSelection: enableTextSelection,
	disableImageDrag: disableImageDrag,
	enableImageDrag: enableImageDrag,
	preventOutline: preventOutline,
	restoreOutline: restoreOutline
});

/*
 * @class PosAnimation
 * @aka L.PosAnimation
 * @inherits Evented
 * Used internally for panning animations, utilizing CSS3 Transitions for modern browsers and a timer fallback for IE6-9.
 *
 * @example
 * ```js
 * var fx = new L.PosAnimation();
 * fx.run(el, [300, 500], 0.5);
 * ```
 *
 * @constructor L.PosAnimation()
 * Creates a `PosAnimation` object.
 *
 */

var PosAnimation = Evented.extend({

	// @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
	// Run an animation of a given element to a new position, optionally setting
	// duration in seconds (`0.25` by default) and easing linearity factor (3rd
	// argument of the [cubic bezier curve](http://cubic-bezier.com/#0,0,.5,1),
	// `0.5` by default).
	run: function (el, newPos, duration, easeLinearity) {
		this.stop();

		this._el = el;
		this._inProgress = true;
		this._duration = duration || 0.25;
		this._easeOutPower = 1 / Math.max(easeLinearity || 0.5, 0.2);

		this._startPos = getPosition(el);
		this._offset = newPos.subtract(this._startPos);
		this._startTime = +new Date();

		// @event start: Event
		// Fired when the animation starts
		this.fire('start');

		this._animate();
	},

	// @method stop()
	// Stops the animation (if currently running).
	stop: function () {
		if (!this._inProgress) { return; }

		this._step(true);
		this._complete();
	},

	_animate: function () {
		// animation loop
		this._animId = requestAnimFrame(this._animate, this);
		this._step();
	},

	_step: function (round) {
		var elapsed = (+new Date()) - this._startTime,
		    duration = this._duration * 1000;

		if (elapsed < duration) {
			this._runFrame(this._easeOut(elapsed / duration), round);
		} else {
			this._runFrame(1);
			this._complete();
		}
	},

	_runFrame: function (progress, round) {
		var pos = this._startPos.add(this._offset.multiplyBy(progress));
		if (round) {
			pos._round();
		}
		setPosition(this._el, pos);

		// @event step: Event
		// Fired continuously during the animation.
		this.fire('step');
	},

	_complete: function () {
		cancelAnimFrame(this._animId);

		this._inProgress = false;
		// @event end: Event
		// Fired when the animation ends.
		this.fire('end');
	},

	_easeOut: function (t) {
		return 1 - Math.pow(1 - t, this._easeOutPower);
	}
});

/*
 * @class Map
 * @aka L.Map
 * @inherits Evented
 *
 * The central class of the API — it is used to create a map on a page and manipulate it.
 *
 * @example
 *
 * ```js
 * // initialize the map on the "map" div with a given center and zoom
 * var map = L.map('map', {
 * 	center: [51.505, -0.09],
 * 	zoom: 13
 * });
 * ```
 *
 */

var Map = Evented.extend({

	options: {
		// @section Map State Options
		// @option crs: CRS = L.CRS.EPSG3857
		// The [Coordinate Reference System](#crs) to use. Don't change this if you're not
		// sure what it means.
		crs: EPSG3857,

		// @option center: LatLng = undefined
		// Initial geographic center of the map
		center: undefined,

		// @option zoom: Number = undefined
		// Initial map zoom level
		zoom: undefined,

		// @option minZoom: Number = *
		// Minimum zoom level of the map.
		// If not specified and at least one `GridLayer` or `TileLayer` is in the map,
		// the lowest of their `minZoom` options will be used instead.
		minZoom: undefined,

		// @option maxZoom: Number = *
		// Maximum zoom level of the map.
		// If not specified and at least one `GridLayer` or `TileLayer` is in the map,
		// the highest of their `maxZoom` options will be used instead.
		maxZoom: undefined,

		// @option layers: Layer[] = []
		// Array of layers that will be added to the map initially
		layers: [],

		// @option maxBounds: LatLngBounds = null
		// When this option is set, the map restricts the view to the given
		// geographical bounds, bouncing the user back if the user tries to pan
		// outside the view. To set the restriction dynamically, use
		// [`setMaxBounds`](#map-setmaxbounds) method.
		maxBounds: undefined,

		// @option renderer: Renderer = *
		// The default method for drawing vector layers on the map. `L.SVG`
		// or `L.Canvas` by default depending on browser support.
		renderer: undefined,


		// @section Animation Options
		// @option zoomAnimation: Boolean = true
		// Whether the map zoom animation is enabled. By default it's enabled
		// in all browsers that support CSS3 Transitions except Android.
		zoomAnimation: true,

		// @option zoomAnimationThreshold: Number = 4
		// Won't animate zoom if the zoom difference exceeds this value.
		zoomAnimationThreshold: 4,

		// @option fadeAnimation: Boolean = true
		// Whether the tile fade animation is enabled. By default it's enabled
		// in all browsers that support CSS3 Transitions except Android.
		fadeAnimation: true,

		// @option markerZoomAnimation: Boolean = true
		// Whether markers animate their zoom with the zoom animation, if disabled
		// they will disappear for the length of the animation. By default it's
		// enabled in all browsers that support CSS3 Transitions except Android.
		markerZoomAnimation: true,

		// @option transform3DLimit: Number = 2^23
		// Defines the maximum size of a CSS translation transform. The default
		// value should not be changed unless a web browser positions layers in
		// the wrong place after doing a large `panBy`.
		transform3DLimit: 8388608, // Precision limit of a 32-bit float

		// @section Interaction Options
		// @option zoomSnap: Number = 1
		// Forces the map's zoom level to always be a multiple of this, particularly
		// right after a [`fitBounds()`](#map-fitbounds) or a pinch-zoom.
		// By default, the zoom level snaps to the nearest integer; lower values
		// (e.g. `0.5` or `0.1`) allow for greater granularity. A value of `0`
		// means the zoom level will not be snapped after `fitBounds` or a pinch-zoom.
		zoomSnap: 1,

		// @option zoomDelta: Number = 1
		// Controls how much the map's zoom level will change after a
		// [`zoomIn()`](#map-zoomin), [`zoomOut()`](#map-zoomout), pressing `+`
		// or `-` on the keyboard, or using the [zoom controls](#control-zoom).
		// Values smaller than `1` (e.g. `0.5`) allow for greater granularity.
		zoomDelta: 1,

		// @option trackResize: Boolean = true
		// Whether the map automatically handles browser window resize to update itself.
		trackResize: true
	},

	initialize: function (id, options) { // (HTMLElement or String, Object)
		options = setOptions(this, options);

		this._initContainer(id);
		this._initLayout();

		// hack for https://github.com/Leaflet/Leaflet/issues/1980
		this._onResize = bind(this._onResize, this);

		this._initEvents();

		if (options.maxBounds) {
			this.setMaxBounds(options.maxBounds);
		}

		if (options.zoom !== undefined) {
			this._zoom = this._limitZoom(options.zoom);
		}

		if (options.center && options.zoom !== undefined) {
			this.setView(toLatLng(options.center), options.zoom, {reset: true});
		}

		this._handlers = [];
		this._layers = {};
		this._zoomBoundLayers = {};
		this._sizeChanged = true;

		this.callInitHooks();

		// don't animate on browsers without hardware-accelerated transitions or old Android/Opera
		this._zoomAnimated = TRANSITION && any3d && !mobileOpera &&
				this.options.zoomAnimation;

		// zoom transitions run with the same duration for all layers, so if one of transitionend events
		// happens after starting zoom animation (propagating to the map pane), we know that it ended globally
		if (this._zoomAnimated) {
			this._createAnimProxy();
			on(this._proxy, TRANSITION_END, this._catchTransitionEnd, this);
		}

		this._addLayers(this.options.layers);
	},


	// @section Methods for modifying map state

	// @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
	// Sets the view of the map (geographical center and zoom) with the given
	// animation options.
	setView: function (center, zoom, options) {

		zoom = zoom === undefined ? this._zoom : this._limitZoom(zoom);
		center = this._limitCenter(toLatLng(center), zoom, this.options.maxBounds);
		options = options || {};

		this._stop();

		if (this._loaded && !options.reset && options !== true) {

			if (options.animate !== undefined) {
				options.zoom = extend({animate: options.animate}, options.zoom);
				options.pan = extend({animate: options.animate, duration: options.duration}, options.pan);
			}

			// try animating pan or zoom
			var moved = (this._zoom !== zoom) ?
				this._tryAnimatedZoom && this._tryAnimatedZoom(center, zoom, options.zoom) :
				this._tryAnimatedPan(center, options.pan);

			if (moved) {
				// prevent resize handler call, the view will refresh after animation anyway
				clearTimeout(this._sizeTimer);
				return this;
			}
		}

		// animation didn't start, just reset the map view
		this._resetView(center, zoom);

		return this;
	},

	// @method setZoom(zoom: Number, options?: Zoom/pan options): this
	// Sets the zoom of the map.
	setZoom: function (zoom, options) {
		if (!this._loaded) {
			this._zoom = zoom;
			return this;
		}
		return this.setView(this.getCenter(), zoom, {zoom: options});
	},

	// @method zoomIn(delta?: Number, options?: Zoom options): this
	// Increases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
	zoomIn: function (delta, options) {
		delta = delta || (any3d ? this.options.zoomDelta : 1);
		return this.setZoom(this._zoom + delta, options);
	},

	// @method zoomOut(delta?: Number, options?: Zoom options): this
	// Decreases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
	zoomOut: function (delta, options) {
		delta = delta || (any3d ? this.options.zoomDelta : 1);
		return this.setZoom(this._zoom - delta, options);
	},

	// @method setZoomAround(latlng: LatLng, zoom: Number, options: Zoom options): this
	// Zooms the map while keeping a specified geographical point on the map
	// stationary (e.g. used internally for scroll zoom and double-click zoom).
	// @alternative
	// @method setZoomAround(offset: Point, zoom: Number, options: Zoom options): this
	// Zooms the map while keeping a specified pixel on the map (relative to the top-left corner) stationary.
	setZoomAround: function (latlng, zoom, options) {
		var scale = this.getZoomScale(zoom),
		    viewHalf = this.getSize().divideBy(2),
		    containerPoint = latlng instanceof Point ? latlng : this.latLngToContainerPoint(latlng),

		    centerOffset = containerPoint.subtract(viewHalf).multiplyBy(1 - 1 / scale),
		    newCenter = this.containerPointToLatLng(viewHalf.add(centerOffset));

		return this.setView(newCenter, zoom, {zoom: options});
	},

	_getBoundsCenterZoom: function (bounds, options) {

		options = options || {};
		bounds = bounds.getBounds ? bounds.getBounds() : toLatLngBounds(bounds);

		var paddingTL = toPoint(options.paddingTopLeft || options.padding || [0, 0]),
		    paddingBR = toPoint(options.paddingBottomRight || options.padding || [0, 0]),

		    zoom = this.getBoundsZoom(bounds, false, paddingTL.add(paddingBR));

		zoom = (typeof options.maxZoom === 'number') ? Math.min(options.maxZoom, zoom) : zoom;

		if (zoom === Infinity) {
			return {
				center: bounds.getCenter(),
				zoom: zoom
			};
		}

		var paddingOffset = paddingBR.subtract(paddingTL).divideBy(2),

		    swPoint = this.project(bounds.getSouthWest(), zoom),
		    nePoint = this.project(bounds.getNorthEast(), zoom),
		    center = this.unproject(swPoint.add(nePoint).divideBy(2).add(paddingOffset), zoom);

		return {
			center: center,
			zoom: zoom
		};
	},

	// @method fitBounds(bounds: LatLngBounds, options?: fitBounds options): this
	// Sets a map view that contains the given geographical bounds with the
	// maximum zoom level possible.
	fitBounds: function (bounds, options) {

		bounds = toLatLngBounds(bounds);

		if (!bounds.isValid()) {
			throw new Error('Bounds are not valid.');
		}

		var target = this._getBoundsCenterZoom(bounds, options);
		return this.setView(target.center, target.zoom, options);
	},

	// @method fitWorld(options?: fitBounds options): this
	// Sets a map view that mostly contains the whole world with the maximum
	// zoom level possible.
	fitWorld: function (options) {
		return this.fitBounds([[-90, -180], [90, 180]], options);
	},

	// @method panTo(latlng: LatLng, options?: Pan options): this
	// Pans the map to a given center.
	panTo: function (center, options) { // (LatLng)
		return this.setView(center, this._zoom, {pan: options});
	},

	// @method panBy(offset: Point, options?: Pan options): this
	// Pans the map by a given number of pixels (animated).
	panBy: function (offset, options) {
		offset = toPoint(offset).round();
		options = options || {};

		if (!offset.x && !offset.y) {
			return this.fire('moveend');
		}
		// If we pan too far, Chrome gets issues with tiles
		// and makes them disappear or appear in the wrong place (slightly offset) #2602
		if (options.animate !== true && !this.getSize().contains(offset)) {
			this._resetView(this.unproject(this.project(this.getCenter()).add(offset)), this.getZoom());
			return this;
		}

		if (!this._panAnim) {
			this._panAnim = new PosAnimation();

			this._panAnim.on({
				'step': this._onPanTransitionStep,
				'end': this._onPanTransitionEnd
			}, this);
		}

		// don't fire movestart if animating inertia
		if (!options.noMoveStart) {
			this.fire('movestart');
		}

		// animate pan unless animate: false specified
		if (options.animate !== false) {
			addClass(this._mapPane, 'leaflet-pan-anim');

			var newPos = this._getMapPanePos().subtract(offset).round();
			this._panAnim.run(this._mapPane, newPos, options.duration || 0.25, options.easeLinearity);
		} else {
			this._rawPanBy(offset);
			this.fire('move').fire('moveend');
		}

		return this;
	},

	// @method flyTo(latlng: LatLng, zoom?: Number, options?: Zoom/pan options): this
	// Sets the view of the map (geographical center and zoom) performing a smooth
	// pan-zoom animation.
	flyTo: function (targetCenter, targetZoom, options) {

		options = options || {};
		if (options.animate === false || !any3d) {
			return this.setView(targetCenter, targetZoom, options);
		}

		this._stop();

		var from = this.project(this.getCenter()),
		    to = this.project(targetCenter),
		    size = this.getSize(),
		    startZoom = this._zoom;

		targetCenter = toLatLng(targetCenter);
		targetZoom = targetZoom === undefined ? startZoom : targetZoom;

		var w0 = Math.max(size.x, size.y),
		    w1 = w0 * this.getZoomScale(startZoom, targetZoom),
		    u1 = (to.distanceTo(from)) || 1,
		    rho = 1.42,
		    rho2 = rho * rho;

		function r(i) {
			var s1 = i ? -1 : 1,
			    s2 = i ? w1 : w0,
			    t1 = w1 * w1 - w0 * w0 + s1 * rho2 * rho2 * u1 * u1,
			    b1 = 2 * s2 * rho2 * u1,
			    b = t1 / b1,
			    sq = Math.sqrt(b * b + 1) - b;

			    // workaround for floating point precision bug when sq = 0, log = -Infinite,
			    // thus triggering an infinite loop in flyTo
			    var log = sq < 0.000000001 ? -18 : Math.log(sq);

			return log;
		}

		function sinh(n) { return (Math.exp(n) - Math.exp(-n)) / 2; }
		function cosh(n) { return (Math.exp(n) + Math.exp(-n)) / 2; }
		function tanh(n) { return sinh(n) / cosh(n); }

		var r0 = r(0);

		function w(s) { return w0 * (cosh(r0) / cosh(r0 + rho * s)); }
		function u(s) { return w0 * (cosh(r0) * tanh(r0 + rho * s) - sinh(r0)) / rho2; }

		function easeOut(t) { return 1 - Math.pow(1 - t, 1.5); }

		var start = Date.now(),
		    S = (r(1) - r0) / rho,
		    duration = options.duration ? 1000 * options.duration : 1000 * S * 0.8;

		function frame() {
			var t = (Date.now() - start) / duration,
			    s = easeOut(t) * S;

			if (t <= 1) {
				this._flyToFrame = requestAnimFrame(frame, this);

				this._move(
					this.unproject(from.add(to.subtract(from).multiplyBy(u(s) / u1)), startZoom),
					this.getScaleZoom(w0 / w(s), startZoom),
					{flyTo: true});

			} else {
				this
					._move(targetCenter, targetZoom)
					._moveEnd(true);
			}
		}

		this._moveStart(true);

		frame.call(this);
		return this;
	},

	// @method flyToBounds(bounds: LatLngBounds, options?: fitBounds options): this
	// Sets the view of the map with a smooth animation like [`flyTo`](#map-flyto),
	// but takes a bounds parameter like [`fitBounds`](#map-fitbounds).
	flyToBounds: function (bounds, options) {
		var target = this._getBoundsCenterZoom(bounds, options);
		return this.flyTo(target.center, target.zoom, options);
	},

	// @method setMaxBounds(bounds: Bounds): this
	// Restricts the map view to the given bounds (see the [maxBounds](#map-maxbounds) option).
	setMaxBounds: function (bounds) {
		bounds = toLatLngBounds(bounds);

		if (!bounds.isValid()) {
			this.options.maxBounds = null;
			return this.off('moveend', this._panInsideMaxBounds);
		} else if (this.options.maxBounds) {
			this.off('moveend', this._panInsideMaxBounds);
		}

		this.options.maxBounds = bounds;

		if (this._loaded) {
			this._panInsideMaxBounds();
		}

		return this.on('moveend', this._panInsideMaxBounds);
	},

	// @method setMinZoom(zoom: Number): this
	// Sets the lower limit for the available zoom levels (see the [minZoom](#map-minzoom) option).
	setMinZoom: function (zoom) {
		this.options.minZoom = zoom;

		if (this._loaded && this.getZoom() < this.options.minZoom) {
			return this.setZoom(zoom);
		}

		return this;
	},

	// @method setMaxZoom(zoom: Number): this
	// Sets the upper limit for the available zoom levels (see the [maxZoom](#map-maxzoom) option).
	setMaxZoom: function (zoom) {
		this.options.maxZoom = zoom;

		if (this._loaded && (this.getZoom() > this.options.maxZoom)) {
			return this.setZoom(zoom);
		}

		return this;
	},

	// @method panInsideBounds(bounds: LatLngBounds, options?: Pan options): this
	// Pans the map to the closest view that would lie inside the given bounds (if it's not already), controlling the animation using the options specific, if any.
	panInsideBounds: function (bounds, options) {
		this._enforcingBounds = true;
		var center = this.getCenter(),
		    newCenter = this._limitCenter(center, this._zoom, toLatLngBounds(bounds));

		if (!center.equals(newCenter)) {
			this.panTo(newCenter, options);
		}

		this._enforcingBounds = false;
		return this;
	},

	// @method invalidateSize(options: Zoom/Pan options): this
	// Checks if the map container size changed and updates the map if so —
	// call it after you've changed the map size dynamically, also animating
	// pan by default. If `options.pan` is `false`, panning will not occur.
	// If `options.debounceMoveend` is `true`, it will delay `moveend` event so
	// that it doesn't happen often even if the method is called many
	// times in a row.

	// @alternative
	// @method invalidateSize(animate: Boolean): this
	// Checks if the map container size changed and updates the map if so —
	// call it after you've changed the map size dynamically, also animating
	// pan by default.
	invalidateSize: function (options) {
		if (!this._loaded) { return this; }

		options = extend({
			animate: false,
			pan: true
		}, options === true ? {animate: true} : options);

		var oldSize = this.getSize();
		this._sizeChanged = true;
		this._lastCenter = null;

		var newSize = this.getSize(),
		    oldCenter = oldSize.divideBy(2).round(),
		    newCenter = newSize.divideBy(2).round(),
		    offset = oldCenter.subtract(newCenter);

		if (!offset.x && !offset.y) { return this; }

		if (options.animate && options.pan) {
			this.panBy(offset);

		} else {
			if (options.pan) {
				this._rawPanBy(offset);
			}

			this.fire('move');

			if (options.debounceMoveend) {
				clearTimeout(this._sizeTimer);
				this._sizeTimer = setTimeout(bind(this.fire, this, 'moveend'), 200);
			} else {
				this.fire('moveend');
			}
		}

		// @section Map state change events
		// @event resize: ResizeEvent
		// Fired when the map is resized.
		return this.fire('resize', {
			oldSize: oldSize,
			newSize: newSize
		});
	},

	// @section Methods for modifying map state
	// @method stop(): this
	// Stops the currently running `panTo` or `flyTo` animation, if any.
	stop: function () {
		this.setZoom(this._limitZoom(this._zoom));
		if (!this.options.zoomSnap) {
			this.fire('viewreset');
		}
		return this._stop();
	},

	// @section Geolocation methods
	// @method locate(options?: Locate options): this
	// Tries to locate the user using the Geolocation API, firing a [`locationfound`](#map-locationfound)
	// event with location data on success or a [`locationerror`](#map-locationerror) event on failure,
	// and optionally sets the map view to the user's location with respect to
	// detection accuracy (or to the world view if geolocation failed).
	// Note that, if your page doesn't use HTTPS, this method will fail in
	// modern browsers ([Chrome 50 and newer](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins))
	// See `Locate options` for more details.
	locate: function (options) {

		options = this._locateOptions = extend({
			timeout: 10000,
			watch: false
			// setView: false
			// maxZoom: <Number>
			// maximumAge: 0
			// enableHighAccuracy: false
		}, options);

		if (!('geolocation' in navigator)) {
			this._handleGeolocationError({
				code: 0,
				message: 'Geolocation not supported.'
			});
			return this;
		}

		var onResponse = bind(this._handleGeolocationResponse, this),
		    onError = bind(this._handleGeolocationError, this);

		if (options.watch) {
			this._locationWatchId =
			        navigator.geolocation.watchPosition(onResponse, onError, options);
		} else {
			navigator.geolocation.getCurrentPosition(onResponse, onError, options);
		}
		return this;
	},

	// @method stopLocate(): this
	// Stops watching location previously initiated by `map.locate({watch: true})`
	// and aborts resetting the map view if map.locate was called with
	// `{setView: true}`.
	stopLocate: function () {
		if (navigator.geolocation && navigator.geolocation.clearWatch) {
			navigator.geolocation.clearWatch(this._locationWatchId);
		}
		if (this._locateOptions) {
			this._locateOptions.setView = false;
		}
		return this;
	},

	_handleGeolocationError: function (error) {
		var c = error.code,
		    message = error.message ||
		            (c === 1 ? 'permission denied' :
		            (c === 2 ? 'position unavailable' : 'timeout'));

		if (this._locateOptions.setView && !this._loaded) {
			this.fitWorld();
		}

		// @section Location events
		// @event locationerror: ErrorEvent
		// Fired when geolocation (using the [`locate`](#map-locate) method) failed.
		this.fire('locationerror', {
			code: c,
			message: 'Geolocation error: ' + message + '.'
		});
	},

	_handleGeolocationResponse: function (pos) {
		var lat = pos.coords.latitude,
		    lng = pos.coords.longitude,
		    latlng = new LatLng(lat, lng),
		    bounds = latlng.toBounds(pos.coords.accuracy),
		    options = this._locateOptions;

		if (options.setView) {
			var zoom = this.getBoundsZoom(bounds);
			this.setView(latlng, options.maxZoom ? Math.min(zoom, options.maxZoom) : zoom);
		}

		var data = {
			latlng: latlng,
			bounds: bounds,
			timestamp: pos.timestamp
		};

		for (var i in pos.coords) {
			if (typeof pos.coords[i] === 'number') {
				data[i] = pos.coords[i];
			}
		}

		// @event locationfound: LocationEvent
		// Fired when geolocation (using the [`locate`](#map-locate) method)
		// went successfully.
		this.fire('locationfound', data);
	},

	// TODO handler.addTo
	// TODO Appropiate docs section?
	// @section Other Methods
	// @method addHandler(name: String, HandlerClass: Function): this
	// Adds a new `Handler` to the map, given its name and constructor function.
	addHandler: function (name, HandlerClass) {
		if (!HandlerClass) { return this; }

		var handler = this[name] = new HandlerClass(this);

		this._handlers.push(handler);

		if (this.options[name]) {
			handler.enable();
		}

		return this;
	},

	// @method remove(): this
	// Destroys the map and clears all related event listeners.
	remove: function () {

		this._initEvents(true);

		if (this._containerId !== this._container._leaflet_id) {
			throw new Error('Map container is being reused by another instance');
		}

		try {
			// throws error in IE6-8
			delete this._container._leaflet_id;
			delete this._containerId;
		} catch (e) {
			/*eslint-disable */
			this._container._leaflet_id = undefined;
			/*eslint-enable */
			this._containerId = undefined;
		}

		remove(this._mapPane);

		if (this._clearControlPos) {
			this._clearControlPos();
		}

		this._clearHandlers();

		if (this._loaded) {
			// @section Map state change events
			// @event unload: Event
			// Fired when the map is destroyed with [remove](#map-remove) method.
			this.fire('unload');
		}

		var i;
		for (i in this._layers) {
			this._layers[i].remove();
		}
		for (i in this._panes) {
			remove(this._panes[i]);
		}

		this._layers = [];
		this._panes = [];
		delete this._mapPane;
		delete this._renderer;

		return this;
	},

	// @section Other Methods
	// @method createPane(name: String, container?: HTMLElement): HTMLElement
	// Creates a new [map pane](#map-pane) with the given name if it doesn't exist already,
	// then returns it. The pane is created as a child of `container`, or
	// as a child of the main map pane if not set.
	createPane: function (name, container) {
		var className = 'leaflet-pane' + (name ? ' leaflet-' + name.replace('Pane', '') + '-pane' : ''),
		    pane = create$1('div', className, container || this._mapPane);

		if (name) {
			this._panes[name] = pane;
		}
		return pane;
	},

	// @section Methods for Getting Map State

	// @method getCenter(): LatLng
	// Returns the geographical center of the map view
	getCenter: function () {
		this._checkIfLoaded();

		if (this._lastCenter && !this._moved()) {
			return this._lastCenter;
		}
		return this.layerPointToLatLng(this._getCenterLayerPoint());
	},

	// @method getZoom(): Number
	// Returns the current zoom level of the map view
	getZoom: function () {
		return this._zoom;
	},

	// @method getBounds(): LatLngBounds
	// Returns the geographical bounds visible in the current map view
	getBounds: function () {
		var bounds = this.getPixelBounds(),
		    sw = this.unproject(bounds.getBottomLeft()),
		    ne = this.unproject(bounds.getTopRight());

		return new LatLngBounds(sw, ne);
	},

	// @method getMinZoom(): Number
	// Returns the minimum zoom level of the map (if set in the `minZoom` option of the map or of any layers), or `0` by default.
	getMinZoom: function () {
		return this.options.minZoom === undefined ? this._layersMinZoom || 0 : this.options.minZoom;
	},

	// @method getMaxZoom(): Number
	// Returns the maximum zoom level of the map (if set in the `maxZoom` option of the map or of any layers).
	getMaxZoom: function () {
		return this.options.maxZoom === undefined ?
			(this._layersMaxZoom === undefined ? Infinity : this._layersMaxZoom) :
			this.options.maxZoom;
	},

	// @method getBoundsZoom(bounds: LatLngBounds, inside?: Boolean): Number
	// Returns the maximum zoom level on which the given bounds fit to the map
	// view in its entirety. If `inside` (optional) is set to `true`, the method
	// instead returns the minimum zoom level on which the map view fits into
	// the given bounds in its entirety.
	getBoundsZoom: function (bounds, inside, padding) { // (LatLngBounds[, Boolean, Point]) -> Number
		bounds = toLatLngBounds(bounds);
		padding = toPoint(padding || [0, 0]);

		var zoom = this.getZoom() || 0,
		    min = this.getMinZoom(),
		    max = this.getMaxZoom(),
		    nw = bounds.getNorthWest(),
		    se = bounds.getSouthEast(),
		    size = this.getSize().subtract(padding),
		    boundsSize = toBounds(this.project(se, zoom), this.project(nw, zoom)).getSize(),
		    snap = any3d ? this.options.zoomSnap : 1,
		    scalex = size.x / boundsSize.x,
		    scaley = size.y / boundsSize.y,
		    scale = inside ? Math.max(scalex, scaley) : Math.min(scalex, scaley);

		zoom = this.getScaleZoom(scale, zoom);

		if (snap) {
			zoom = Math.round(zoom / (snap / 100)) * (snap / 100); // don't jump if within 1% of a snap level
			zoom = inside ? Math.ceil(zoom / snap) * snap : Math.floor(zoom / snap) * snap;
		}

		return Math.max(min, Math.min(max, zoom));
	},

	// @method getSize(): Point
	// Returns the current size of the map container (in pixels).
	getSize: function () {
		if (!this._size || this._sizeChanged) {
			this._size = new Point(
				this._container.clientWidth || 0,
				this._container.clientHeight || 0);

			this._sizeChanged = false;
		}
		return this._size.clone();
	},

	// @method getPixelBounds(): Bounds
	// Returns the bounds of the current map view in projected pixel
	// coordinates (sometimes useful in layer and overlay implementations).
	getPixelBounds: function (center, zoom) {
		var topLeftPoint = this._getTopLeftPoint(center, zoom);
		return new Bounds(topLeftPoint, topLeftPoint.add(this.getSize()));
	},

	// TODO: Check semantics - isn't the pixel origin the 0,0 coord relative to
	// the map pane? "left point of the map layer" can be confusing, specially
	// since there can be negative offsets.
	// @method getPixelOrigin(): Point
	// Returns the projected pixel coordinates of the top left point of
	// the map layer (useful in custom layer and overlay implementations).
	getPixelOrigin: function () {
		this._checkIfLoaded();
		return this._pixelOrigin;
	},

	// @method getPixelWorldBounds(zoom?: Number): Bounds
	// Returns the world's bounds in pixel coordinates for zoom level `zoom`.
	// If `zoom` is omitted, the map's current zoom level is used.
	getPixelWorldBounds: function (zoom) {
		return this.options.crs.getProjectedBounds(zoom === undefined ? this.getZoom() : zoom);
	},

	// @section Other Methods

	// @method getPane(pane: String|HTMLElement): HTMLElement
	// Returns a [map pane](#map-pane), given its name or its HTML element (its identity).
	getPane: function (pane) {
		return typeof pane === 'string' ? this._panes[pane] : pane;
	},

	// @method getPanes(): Object
	// Returns a plain object containing the names of all [panes](#map-pane) as keys and
	// the panes as values.
	getPanes: function () {
		return this._panes;
	},

	// @method getContainer: HTMLElement
	// Returns the HTML element that contains the map.
	getContainer: function () {
		return this._container;
	},


	// @section Conversion Methods

	// @method getZoomScale(toZoom: Number, fromZoom: Number): Number
	// Returns the scale factor to be applied to a map transition from zoom level
	// `fromZoom` to `toZoom`. Used internally to help with zoom animations.
	getZoomScale: function (toZoom, fromZoom) {
		// TODO replace with universal implementation after refactoring projections
		var crs = this.options.crs;
		fromZoom = fromZoom === undefined ? this._zoom : fromZoom;
		return crs.scale(toZoom) / crs.scale(fromZoom);
	},

	// @method getScaleZoom(scale: Number, fromZoom: Number): Number
	// Returns the zoom level that the map would end up at, if it is at `fromZoom`
	// level and everything is scaled by a factor of `scale`. Inverse of
	// [`getZoomScale`](#map-getZoomScale).
	getScaleZoom: function (scale, fromZoom) {
		var crs = this.options.crs;
		fromZoom = fromZoom === undefined ? this._zoom : fromZoom;
		var zoom = crs.zoom(scale * crs.scale(fromZoom));
		return isNaN(zoom) ? Infinity : zoom;
	},

	// @method project(latlng: LatLng, zoom: Number): Point
	// Projects a geographical coordinate `LatLng` according to the projection
	// of the map's CRS, then scales it according to `zoom` and the CRS's
	// `Transformation`. The result is pixel coordinate relative to
	// the CRS origin.
	project: function (latlng, zoom) {
		zoom = zoom === undefined ? this._zoom : zoom;
		return this.options.crs.latLngToPoint(toLatLng(latlng), zoom);
	},

	// @method unproject(point: Point, zoom: Number): LatLng
	// Inverse of [`project`](#map-project).
	unproject: function (point, zoom) {
		zoom = zoom === undefined ? this._zoom : zoom;
		return this.options.crs.pointToLatLng(toPoint(point), zoom);
	},

	// @method layerPointToLatLng(point: Point): LatLng
	// Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
	// returns the corresponding geographical coordinate (for the current zoom level).
	layerPointToLatLng: function (point) {
		var projectedPoint = toPoint(point).add(this.getPixelOrigin());
		return this.unproject(projectedPoint);
	},

	// @method latLngToLayerPoint(latlng: LatLng): Point
	// Given a geographical coordinate, returns the corresponding pixel coordinate
	// relative to the [origin pixel](#map-getpixelorigin).
	latLngToLayerPoint: function (latlng) {
		var projectedPoint = this.project(toLatLng(latlng))._round();
		return projectedPoint._subtract(this.getPixelOrigin());
	},

	// @method wrapLatLng(latlng: LatLng): LatLng
	// Returns a `LatLng` where `lat` and `lng` has been wrapped according to the
	// map's CRS's `wrapLat` and `wrapLng` properties, if they are outside the
	// CRS's bounds.
	// By default this means longitude is wrapped around the dateline so its
	// value is between -180 and +180 degrees.
	wrapLatLng: function (latlng) {
		return this.options.crs.wrapLatLng(toLatLng(latlng));
	},

	// @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
	// Returns a `LatLngBounds` with the same size as the given one, ensuring that
	// its center is within the CRS's bounds.
	// By default this means the center longitude is wrapped around the dateline so its
	// value is between -180 and +180 degrees, and the majority of the bounds
	// overlaps the CRS's bounds.
	wrapLatLngBounds: function (latlng) {
		return this.options.crs.wrapLatLngBounds(toLatLngBounds(latlng));
	},

	// @method distance(latlng1: LatLng, latlng2: LatLng): Number
	// Returns the distance between two geographical coordinates according to
	// the map's CRS. By default this measures distance in meters.
	distance: function (latlng1, latlng2) {
		return this.options.crs.distance(toLatLng(latlng1), toLatLng(latlng2));
	},

	// @method containerPointToLayerPoint(point: Point): Point
	// Given a pixel coordinate relative to the map container, returns the corresponding
	// pixel coordinate relative to the [origin pixel](#map-getpixelorigin).
	containerPointToLayerPoint: function (point) { // (Point)
		return toPoint(point).subtract(this._getMapPanePos());
	},

	// @method layerPointToContainerPoint(point: Point): Point
	// Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
	// returns the corresponding pixel coordinate relative to the map container.
	layerPointToContainerPoint: function (point) { // (Point)
		return toPoint(point).add(this._getMapPanePos());
	},

	// @method containerPointToLatLng(point: Point): LatLng
	// Given a pixel coordinate relative to the map container, returns
	// the corresponding geographical coordinate (for the current zoom level).
	containerPointToLatLng: function (point) {
		var layerPoint = this.containerPointToLayerPoint(toPoint(point));
		return this.layerPointToLatLng(layerPoint);
	},

	// @method latLngToContainerPoint(latlng: LatLng): Point
	// Given a geographical coordinate, returns the corresponding pixel coordinate
	// relative to the map container.
	latLngToContainerPoint: function (latlng) {
		return this.layerPointToContainerPoint(this.latLngToLayerPoint(toLatLng(latlng)));
	},

	// @method mouseEventToContainerPoint(ev: MouseEvent): Point
	// Given a MouseEvent object, returns the pixel coordinate relative to the
	// map container where the event took place.
	mouseEventToContainerPoint: function (e) {
		return getMousePosition(e, this._container);
	},

	// @method mouseEventToLayerPoint(ev: MouseEvent): Point
	// Given a MouseEvent object, returns the pixel coordinate relative to
	// the [origin pixel](#map-getpixelorigin) where the event took place.
	mouseEventToLayerPoint: function (e) {
		return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(e));
	},

	// @method mouseEventToLatLng(ev: MouseEvent): LatLng
	// Given a MouseEvent object, returns geographical coordinate where the
	// event took place.
	mouseEventToLatLng: function (e) { // (MouseEvent)
		return this.layerPointToLatLng(this.mouseEventToLayerPoint(e));
	},


	// map initialization methods

	_initContainer: function (id) {
		var container = this._container = get(id);

		if (!container) {
			throw new Error('Map container not found.');
		} else if (container._leaflet_id) {
			throw new Error('Map container is already initialized.');
		}

		on(container, 'scroll', this._onScroll, this);
		this._containerId = stamp(container);
	},

	_initLayout: function () {
		var container = this._container;

		this._fadeAnimated = this.options.fadeAnimation && any3d;

		addClass(container, 'leaflet-container' +
			(touch ? ' leaflet-touch' : '') +
			(retina ? ' leaflet-retina' : '') +
			(ielt9 ? ' leaflet-oldie' : '') +
			(safari ? ' leaflet-safari' : '') +
			(this._fadeAnimated ? ' leaflet-fade-anim' : ''));

		var position = getStyle(container, 'position');

		if (position !== 'absolute' && position !== 'relative' && position !== 'fixed') {
			container.style.position = 'relative';
		}

		this._initPanes();

		if (this._initControlPos) {
			this._initControlPos();
		}
	},

	_initPanes: function () {
		var panes = this._panes = {};
		this._paneRenderers = {};

		// @section
		//
		// Panes are DOM elements used to control the ordering of layers on the map. You
		// can access panes with [`map.getPane`](#map-getpane) or
		// [`map.getPanes`](#map-getpanes) methods. New panes can be created with the
		// [`map.createPane`](#map-createpane) method.
		//
		// Every map has the following default panes that differ only in zIndex.
		//
		// @pane mapPane: HTMLElement = 'auto'
		// Pane that contains all other map panes

		this._mapPane = this.createPane('mapPane', this._container);
		setPosition(this._mapPane, new Point(0, 0));

		// @pane tilePane: HTMLElement = 200
		// Pane for `GridLayer`s and `TileLayer`s
		this.createPane('tilePane');
		// @pane overlayPane: HTMLElement = 400
		// Pane for vector overlays (`Path`s), like `Polyline`s and `Polygon`s
		this.createPane('shadowPane');
		// @pane shadowPane: HTMLElement = 500
		// Pane for overlay shadows (e.g. `Marker` shadows)
		this.createPane('overlayPane');
		// @pane markerPane: HTMLElement = 600
		// Pane for `Icon`s of `Marker`s
		this.createPane('markerPane');
		// @pane tooltipPane: HTMLElement = 650
		// Pane for tooltip.
		this.createPane('tooltipPane');
		// @pane popupPane: HTMLElement = 700
		// Pane for `Popup`s.
		this.createPane('popupPane');

		if (!this.options.markerZoomAnimation) {
			addClass(panes.markerPane, 'leaflet-zoom-hide');
			addClass(panes.shadowPane, 'leaflet-zoom-hide');
		}
	},


	// private methods that modify map state

	// @section Map state change events
	_resetView: function (center, zoom) {
		setPosition(this._mapPane, new Point(0, 0));

		var loading = !this._loaded;
		this._loaded = true;
		zoom = this._limitZoom(zoom);

		this.fire('viewprereset');

		var zoomChanged = this._zoom !== zoom;
		this
			._moveStart(zoomChanged)
			._move(center, zoom)
			._moveEnd(zoomChanged);

		// @event viewreset: Event
		// Fired when the map needs to redraw its content (this usually happens
		// on map zoom or load). Very useful for creating custom overlays.
		this.fire('viewreset');

		// @event load: Event
		// Fired when the map is initialized (when its center and zoom are set
		// for the first time).
		if (loading) {
			this.fire('load');
		}
	},

	_moveStart: function (zoomChanged) {
		// @event zoomstart: Event
		// Fired when the map zoom is about to change (e.g. before zoom animation).
		// @event movestart: Event
		// Fired when the view of the map starts changing (e.g. user starts dragging the map).
		if (zoomChanged) {
			this.fire('zoomstart');
		}
		return this.fire('movestart');
	},

	_move: function (center, zoom, data) {
		if (zoom === undefined) {
			zoom = this._zoom;
		}
		var zoomChanged = this._zoom !== zoom;

		this._zoom = zoom;
		this._lastCenter = center;
		this._pixelOrigin = this._getNewPixelOrigin(center);

		// @event zoom: Event
		// Fired repeatedly during any change in zoom level, including zoom
		// and fly animations.
		if (zoomChanged || (data && data.pinch)) {	// Always fire 'zoom' if pinching because #3530
			this.fire('zoom', data);
		}

		// @event move: Event
		// Fired repeatedly during any movement of the map, including pan and
		// fly animations.
		return this.fire('move', data);
	},

	_moveEnd: function (zoomChanged) {
		// @event zoomend: Event
		// Fired when the map has changed, after any animations.
		if (zoomChanged) {
			this.fire('zoomend');
		}

		// @event moveend: Event
		// Fired when the center of the map stops changing (e.g. user stopped
		// dragging the map).
		return this.fire('moveend');
	},

	_stop: function () {
		cancelAnimFrame(this._flyToFrame);
		if (this._panAnim) {
			this._panAnim.stop();
		}
		return this;
	},

	_rawPanBy: function (offset) {
		setPosition(this._mapPane, this._getMapPanePos().subtract(offset));
	},

	_getZoomSpan: function () {
		return this.getMaxZoom() - this.getMinZoom();
	},

	_panInsideMaxBounds: function () {
		if (!this._enforcingBounds) {
			this.panInsideBounds(this.options.maxBounds);
		}
	},

	_checkIfLoaded: function () {
		if (!this._loaded) {
			throw new Error('Set map center and zoom first.');
		}
	},

	// DOM event handling

	// @section Interaction events
	_initEvents: function (remove$$1) {
		this._targets = {};
		this._targets[stamp(this._container)] = this;

		var onOff = remove$$1 ? off : on;

		// @event click: MouseEvent
		// Fired when the user clicks (or taps) the map.
		// @event dblclick: MouseEvent
		// Fired when the user double-clicks (or double-taps) the map.
		// @event mousedown: MouseEvent
		// Fired when the user pushes the mouse button on the map.
		// @event mouseup: MouseEvent
		// Fired when the user releases the mouse button on the map.
		// @event mouseover: MouseEvent
		// Fired when the mouse enters the map.
		// @event mouseout: MouseEvent
		// Fired when the mouse leaves the map.
		// @event mousemove: MouseEvent
		// Fired while the mouse moves over the map.
		// @event contextmenu: MouseEvent
		// Fired when the user pushes the right mouse button on the map, prevents
		// default browser context menu from showing if there are listeners on
		// this event. Also fired on mobile when the user holds a single touch
		// for a second (also called long press).
		// @event keypress: KeyboardEvent
		// Fired when the user presses a key from the keyboard while the map is focused.
		onOff(this._container, 'click dblclick mousedown mouseup ' +
			'mouseover mouseout mousemove contextmenu keypress', this._handleDOMEvent, this);

		if (this.options.trackResize) {
			onOff(window, 'resize', this._onResize, this);
		}

		if (any3d && this.options.transform3DLimit) {
			(remove$$1 ? this.off : this.on).call(this, 'moveend', this._onMoveEnd);
		}
	},

	_onResize: function () {
		cancelAnimFrame(this._resizeRequest);
		this._resizeRequest = requestAnimFrame(
		        function () { this.invalidateSize({debounceMoveend: true}); }, this);
	},

	_onScroll: function () {
		this._container.scrollTop  = 0;
		this._container.scrollLeft = 0;
	},

	_onMoveEnd: function () {
		var pos = this._getMapPanePos();
		if (Math.max(Math.abs(pos.x), Math.abs(pos.y)) >= this.options.transform3DLimit) {
			// https://bugzilla.mozilla.org/show_bug.cgi?id=1203873 but Webkit also have
			// a pixel offset on very high values, see: http://jsfiddle.net/dg6r5hhb/
			this._resetView(this.getCenter(), this.getZoom());
		}
	},

	_findEventTargets: function (e, type) {
		var targets = [],
		    target,
		    isHover = type === 'mouseout' || type === 'mouseover',
		    src = e.target || e.srcElement,
		    dragging = false;

		while (src) {
			target = this._targets[stamp(src)];
			if (target && (type === 'click' || type === 'preclick') && !e._simulated && this._draggableMoved(target)) {
				// Prevent firing click after you just dragged an object.
				dragging = true;
				break;
			}
			if (target && target.listens(type, true)) {
				if (isHover && !isExternalTarget(src, e)) { break; }
				targets.push(target);
				if (isHover) { break; }
			}
			if (src === this._container) { break; }
			src = src.parentNode;
		}
		if (!targets.length && !dragging && !isHover && isExternalTarget(src, e)) {
			targets = [this];
		}
		return targets;
	},

	_handleDOMEvent: function (e) {
		if (!this._loaded || skipped(e)) { return; }

		var type = e.type;

		if (type === 'mousedown' || type === 'keypress') {
			// prevents outline when clicking on keyboard-focusable element
			preventOutline(e.target || e.srcElement);
		}

		this._fireDOMEvent(e, type);
	},

	_mouseEvents: ['click', 'dblclick', 'mouseover', 'mouseout', 'contextmenu'],

	_fireDOMEvent: function (e, type, targets) {

		if (e.type === 'click') {
			// Fire a synthetic 'preclick' event which propagates up (mainly for closing popups).
			// @event preclick: MouseEvent
			// Fired before mouse click on the map (sometimes useful when you
			// want something to happen on click before any existing click
			// handlers start running).
			var synth = extend({}, e);
			synth.type = 'preclick';
			this._fireDOMEvent(synth, synth.type, targets);
		}

		if (e._stopped) { return; }

		// Find the layer the event is propagating from and its parents.
		targets = (targets || []).concat(this._findEventTargets(e, type));

		if (!targets.length) { return; }

		var target = targets[0];
		if (type === 'contextmenu' && target.listens(type, true)) {
			preventDefault(e);
		}

		var data = {
			originalEvent: e
		};

		if (e.type !== 'keypress') {
			var isMarker = (target.options && 'icon' in target.options);
			data.containerPoint = isMarker ?
					this.latLngToContainerPoint(target.getLatLng()) : this.mouseEventToContainerPoint(e);
			data.layerPoint = this.containerPointToLayerPoint(data.containerPoint);
			data.latlng = isMarker ? target.getLatLng() : this.layerPointToLatLng(data.layerPoint);
		}

		for (var i = 0; i < targets.length; i++) {
			targets[i].fire(type, data, true);
			if (data.originalEvent._stopped ||
				(targets[i].options.bubblingMouseEvents === false && indexOf(this._mouseEvents, type) !== -1)) { return; }
		}
	},

	_draggableMoved: function (obj) {
		obj = obj.dragging && obj.dragging.enabled() ? obj : this;
		return (obj.dragging && obj.dragging.moved()) || (this.boxZoom && this.boxZoom.moved());
	},

	_clearHandlers: function () {
		for (var i = 0, len = this._handlers.length; i < len; i++) {
			this._handlers[i].disable();
		}
	},

	// @section Other Methods

	// @method whenReady(fn: Function, context?: Object): this
	// Runs the given function `fn` when the map gets initialized with
	// a view (center and zoom) and at least one layer, or immediately
	// if it's already initialized, optionally passing a function context.
	whenReady: function (callback, context) {
		if (this._loaded) {
			callback.call(context || this, {target: this});
		} else {
			this.on('load', callback, context);
		}
		return this;
	},


	// private methods for getting map state

	_getMapPanePos: function () {
		return getPosition(this._mapPane) || new Point(0, 0);
	},

	_moved: function () {
		var pos = this._getMapPanePos();
		return pos && !pos.equals([0, 0]);
	},

	_getTopLeftPoint: function (center, zoom) {
		var pixelOrigin = center && zoom !== undefined ?
			this._getNewPixelOrigin(center, zoom) :
			this.getPixelOrigin();
		return pixelOrigin.subtract(this._getMapPanePos());
	},

	_getNewPixelOrigin: function (center, zoom) {
		var viewHalf = this.getSize()._divideBy(2);
		return this.project(center, zoom)._subtract(viewHalf)._add(this._getMapPanePos())._round();
	},

	_latLngToNewLayerPoint: function (latlng, zoom, center) {
		var topLeft = this._getNewPixelOrigin(center, zoom);
		return this.project(latlng, zoom)._subtract(topLeft);
	},

	_latLngBoundsToNewLayerBounds: function (latLngBounds, zoom, center) {
		var topLeft = this._getNewPixelOrigin(center, zoom);
		return toBounds([
			this.project(latLngBounds.getSouthWest(), zoom)._subtract(topLeft),
			this.project(latLngBounds.getNorthWest(), zoom)._subtract(topLeft),
			this.project(latLngBounds.getSouthEast(), zoom)._subtract(topLeft),
			this.project(latLngBounds.getNorthEast(), zoom)._subtract(topLeft)
		]);
	},

	// layer point of the current center
	_getCenterLayerPoint: function () {
		return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
	},

	// offset of the specified place to the current center in pixels
	_getCenterOffset: function (latlng) {
		return this.latLngToLayerPoint(latlng).subtract(this._getCenterLayerPoint());
	},

	// adjust center for view to get inside bounds
	_limitCenter: function (center, zoom, bounds) {

		if (!bounds) { return center; }

		var centerPoint = this.project(center, zoom),
		    viewHalf = this.getSize().divideBy(2),
		    viewBounds = new Bounds(centerPoint.subtract(viewHalf), centerPoint.add(viewHalf)),
		    offset = this._getBoundsOffset(viewBounds, bounds, zoom);

		// If offset is less than a pixel, ignore.
		// This prevents unstable projections from getting into
		// an infinite loop of tiny offsets.
		if (offset.round().equals([0, 0])) {
			return center;
		}

		return this.unproject(centerPoint.add(offset), zoom);
	},

	// adjust offset for view to get inside bounds
	_limitOffset: function (offset, bounds) {
		if (!bounds) { return offset; }

		var viewBounds = this.getPixelBounds(),
		    newBounds = new Bounds(viewBounds.min.add(offset), viewBounds.max.add(offset));

		return offset.add(this._getBoundsOffset(newBounds, bounds));
	},

	// returns offset needed for pxBounds to get inside maxBounds at a specified zoom
	_getBoundsOffset: function (pxBounds, maxBounds, zoom) {
		var projectedMaxBounds = toBounds(
		        this.project(maxBounds.getNorthEast(), zoom),
		        this.project(maxBounds.getSouthWest(), zoom)
		    ),
		    minOffset = projectedMaxBounds.min.subtract(pxBounds.min),
		    maxOffset = projectedMaxBounds.max.subtract(pxBounds.max),

		    dx = this._rebound(minOffset.x, -maxOffset.x),
		    dy = this._rebound(minOffset.y, -maxOffset.y);

		return new Point(dx, dy);
	},

	_rebound: function (left, right) {
		return left + right > 0 ?
			Math.round(left - right) / 2 :
			Math.max(0, Math.ceil(left)) - Math.max(0, Math.floor(right));
	},

	_limitZoom: function (zoom) {
		var min = this.getMinZoom(),
		    max = this.getMaxZoom(),
		    snap = any3d ? this.options.zoomSnap : 1;
		if (snap) {
			zoom = Math.round(zoom / snap) * snap;
		}
		return Math.max(min, Math.min(max, zoom));
	},

	_onPanTransitionStep: function () {
		this.fire('move');
	},

	_onPanTransitionEnd: function () {
		removeClass(this._mapPane, 'leaflet-pan-anim');
		this.fire('moveend');
	},

	_tryAnimatedPan: function (center, options) {
		// difference between the new and current centers in pixels
		var offset = this._getCenterOffset(center)._floor();

		// don't animate too far unless animate: true specified in options
		if ((options && options.animate) !== true && !this.getSize().contains(offset)) { return false; }

		this.panBy(offset, options);

		return true;
	},

	_createAnimProxy: function () {

		var proxy = this._proxy = create$1('div', 'leaflet-proxy leaflet-zoom-animated');
		this._panes.mapPane.appendChild(proxy);

		this.on('zoomanim', function (e) {
			var prop = TRANSFORM,
			    transform = this._proxy.style[prop];

			setTransform(this._proxy, this.project(e.center, e.zoom), this.getZoomScale(e.zoom, 1));

			// workaround for case when transform is the same and so transitionend event is not fired
			if (transform === this._proxy.style[prop] && this._animatingZoom) {
				this._onZoomTransitionEnd();
			}
		}, this);

		this.on('load moveend', function () {
			var c = this.getCenter(),
			    z = this.getZoom();
			setTransform(this._proxy, this.project(c, z), this.getZoomScale(z, 1));
		}, this);

		this._on('unload', this._destroyAnimProxy, this);
	},

	_destroyAnimProxy: function () {
		remove(this._proxy);
		delete this._proxy;
	},

	_catchTransitionEnd: function (e) {
		if (this._animatingZoom && e.propertyName.indexOf('transform') >= 0) {
			this._onZoomTransitionEnd();
		}
	},

	_nothingToAnimate: function () {
		return !this._container.getElementsByClassName('leaflet-zoom-animated').length;
	},

	_tryAnimatedZoom: function (center, zoom, options) {

		if (this._animatingZoom) { return true; }

		options = options || {};

		// don't animate if disabled, not supported or zoom difference is too large
		if (!this._zoomAnimated || options.animate === false || this._nothingToAnimate() ||
		        Math.abs(zoom - this._zoom) > this.options.zoomAnimationThreshold) { return false; }

		// offset is the pixel coords of the zoom origin relative to the current center
		var scale = this.getZoomScale(zoom),
		    offset = this._getCenterOffset(center)._divideBy(1 - 1 / scale);

		// don't animate if the zoom origin isn't within one screen from the current center, unless forced
		if (options.animate !== true && !this.getSize().contains(offset)) { return false; }

		requestAnimFrame(function () {
			this
			    ._moveStart(true)
			    ._animateZoom(center, zoom, true);
		}, this);

		return true;
	},

	_animateZoom: function (center, zoom, startAnim, noUpdate) {
		if (startAnim) {
			this._animatingZoom = true;

			// remember what center/zoom to set after animation
			this._animateToCenter = center;
			this._animateToZoom = zoom;

			addClass(this._mapPane, 'leaflet-zoom-anim');
		}

		// @event zoomanim: ZoomAnimEvent
		// Fired on every frame of a zoom animation
		this.fire('zoomanim', {
			center: center,
			zoom: zoom,
			noUpdate: noUpdate
		});

		// Work around webkit not firing 'transitionend', see https://github.com/Leaflet/Leaflet/issues/3689, 2693
		setTimeout(bind(this._onZoomTransitionEnd, this), 250);
	},

	_onZoomTransitionEnd: function () {
		if (!this._animatingZoom) { return; }

		removeClass(this._mapPane, 'leaflet-zoom-anim');

		this._animatingZoom = false;

		this._move(this._animateToCenter, this._animateToZoom);

		// This anim frame should prevent an obscure iOS webkit tile loading race condition.
		requestAnimFrame(function () {
			this._moveEnd(true);
		}, this);
	}
});

// @section

// @factory L.map(id: String, options?: Map options)
// Instantiates a map object given the DOM ID of a `<div>` element
// and optionally an object literal with `Map options`.
//
// @alternative
// @factory L.map(el: HTMLElement, options?: Map options)
// Instantiates a map object given an instance of a `<div>` HTML element
// and optionally an object literal with `Map options`.
function createMap(id, options) {
	return new Map(id, options);
}

/*
 * @class Control
 * @aka L.Control
 * @inherits Class
 *
 * L.Control is a base class for implementing map controls. Handles positioning.
 * All other controls extend from this class.
 */

var Control = Class.extend({
	// @section
	// @aka Control options
	options: {
		// @option position: String = 'topright'
		// The position of the control (one of the map corners). Possible values are `'topleft'`,
		// `'topright'`, `'bottomleft'` or `'bottomright'`
		position: 'topright'
	},

	initialize: function (options) {
		setOptions(this, options);
	},

	/* @section
	 * Classes extending L.Control will inherit the following methods:
	 *
	 * @method getPosition: string
	 * Returns the position of the control.
	 */
	getPosition: function () {
		return this.options.position;
	},

	// @method setPosition(position: string): this
	// Sets the position of the control.
	setPosition: function (position) {
		var map = this._map;

		if (map) {
			map.removeControl(this);
		}

		this.options.position = position;

		if (map) {
			map.addControl(this);
		}

		return this;
	},

	// @method getContainer: HTMLElement
	// Returns the HTMLElement that contains the control.
	getContainer: function () {
		return this._container;
	},

	// @method addTo(map: Map): this
	// Adds the control to the given map.
	addTo: function (map) {
		this.remove();
		this._map = map;

		var container = this._container = this.onAdd(map),
		    pos = this.getPosition(),
		    corner = map._controlCorners[pos];

		addClass(container, 'leaflet-control');

		if (pos.indexOf('bottom') !== -1) {
			corner.insertBefore(container, corner.firstChild);
		} else {
			corner.appendChild(container);
		}

		return this;
	},

	// @method remove: this
	// Removes the control from the map it is currently active on.
	remove: function () {
		if (!this._map) {
			return this;
		}

		remove(this._container);

		if (this.onRemove) {
			this.onRemove(this._map);
		}

		this._map = null;

		return this;
	},

	_refocusOnMap: function (e) {
		// if map exists and event is not a keyboard event
		if (this._map && e && e.screenX > 0 && e.screenY > 0) {
			this._map.getContainer().focus();
		}
	}
});

var control = function (options) {
	return new Control(options);
};

/* @section Extension methods
 * @uninheritable
 *
 * Every control should extend from `L.Control` and (re-)implement the following methods.
 *
 * @method onAdd(map: Map): HTMLElement
 * Should return the container DOM element for the control and add listeners on relevant map events. Called on [`control.addTo(map)`](#control-addTo).
 *
 * @method onRemove(map: Map)
 * Optional method. Should contain all clean up code that removes the listeners previously added in [`onAdd`](#control-onadd). Called on [`control.remove()`](#control-remove).
 */

/* @namespace Map
 * @section Methods for Layers and Controls
 */
Map.include({
	// @method addControl(control: Control): this
	// Adds the given control to the map
	addControl: function (control) {
		control.addTo(this);
		return this;
	},

	// @method removeControl(control: Control): this
	// Removes the given control from the map
	removeControl: function (control) {
		control.remove();
		return this;
	},

	_initControlPos: function () {
		var corners = this._controlCorners = {},
		    l = 'leaflet-',
		    container = this._controlContainer =
		            create$1('div', l + 'control-container', this._container);

		function createCorner(vSide, hSide) {
			var className = l + vSide + ' ' + l + hSide;

			corners[vSide + hSide] = create$1('div', className, container);
		}

		createCorner('top', 'left');
		createCorner('top', 'right');
		createCorner('bottom', 'left');
		createCorner('bottom', 'right');
	},

	_clearControlPos: function () {
		for (var i in this._controlCorners) {
			remove(this._controlCorners[i]);
		}
		remove(this._controlContainer);
		delete this._controlCorners;
		delete this._controlContainer;
	}
});

/*
 * @class Control.Layers
 * @aka L.Control.Layers
 * @inherits Control
 *
 * The layers control gives users the ability to switch between different base layers and switch overlays on/off (check out the [detailed example](http://leafletjs.com/examples/layers-control/)). Extends `Control`.
 *
 * @example
 *
 * ```js
 * var baseLayers = {
 * 	"Mapbox": mapbox,
 * 	"OpenStreetMap": osm
 * };
 *
 * var overlays = {
 * 	"Marker": marker,
 * 	"Roads": roadsLayer
 * };
 *
 * L.control.layers(baseLayers, overlays).addTo(map);
 * ```
 *
 * The `baseLayers` and `overlays` parameters are object literals with layer names as keys and `Layer` objects as values:
 *
 * ```js
 * {
 *     "<someName1>": layer1,
 *     "<someName2>": layer2
 * }
 * ```
 *
 * The layer names can contain HTML, which allows you to add additional styling to the items:
 *
 * ```js
 * {"<img src='my-layer-icon' /> <span class='my-layer-item'>My Layer</span>": myLayer}
 * ```
 */

var Layers = Control.extend({
	// @section
	// @aka Control.Layers options
	options: {
		// @option collapsed: Boolean = true
		// If `true`, the control will be collapsed into an icon and expanded on mouse hover or touch.
		collapsed: true,
		position: 'topright',

		// @option autoZIndex: Boolean = true
		// If `true`, the control will assign zIndexes in increasing order to all of its layers so that the order is preserved when switching them on/off.
		autoZIndex: true,

		// @option hideSingleBase: Boolean = false
		// If `true`, the base layers in the control will be hidden when there is only one.
		hideSingleBase: false,

		// @option sortLayers: Boolean = false
		// Whether to sort the layers. When `false`, layers will keep the order
		// in which they were added to the control.
		sortLayers: false,

		// @option sortFunction: Function = *
		// A [compare function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
		// that will be used for sorting the layers, when `sortLayers` is `true`.
		// The function receives both the `L.Layer` instances and their names, as in
		// `sortFunction(layerA, layerB, nameA, nameB)`.
		// By default, it sorts layers alphabetically by their name.
		sortFunction: function (layerA, layerB, nameA, nameB) {
			return nameA < nameB ? -1 : (nameB < nameA ? 1 : 0);
		}
	},

	initialize: function (baseLayers, overlays, options) {
		setOptions(this, options);

		this._layerControlInputs = [];
		this._layers = [];
		this._lastZIndex = 0;
		this._handlingClick = false;

		for (var i in baseLayers) {
			this._addLayer(baseLayers[i], i);
		}

		for (i in overlays) {
			this._addLayer(overlays[i], i, true);
		}
	},

	onAdd: function (map) {
		this._initLayout();
		this._update();

		this._map = map;
		map.on('zoomend', this._checkDisabledLayers, this);

		for (var i = 0; i < this._layers.length; i++) {
			this._layers[i].layer.on('add remove', this._onLayerChange, this);
		}

		return this._container;
	},

	addTo: function (map) {
		Control.prototype.addTo.call(this, map);
		// Trigger expand after Layers Control has been inserted into DOM so that is now has an actual height.
		return this._expandIfNotCollapsed();
	},

	onRemove: function () {
		this._map.off('zoomend', this._checkDisabledLayers, this);

		for (var i = 0; i < this._layers.length; i++) {
			this._layers[i].layer.off('add remove', this._onLayerChange, this);
		}
	},

	// @method addBaseLayer(layer: Layer, name: String): this
	// Adds a base layer (radio button entry) with the given name to the control.
	addBaseLayer: function (layer, name) {
		this._addLayer(layer, name);
		return (this._map) ? this._update() : this;
	},

	// @method addOverlay(layer: Layer, name: String): this
	// Adds an overlay (checkbox entry) with the given name to the control.
	addOverlay: function (layer, name) {
		this._addLayer(layer, name, true);
		return (this._map) ? this._update() : this;
	},

	// @method removeLayer(layer: Layer): this
	// Remove the given layer from the control.
	removeLayer: function (layer) {
		layer.off('add remove', this._onLayerChange, this);

		var obj = this._getLayer(stamp(layer));
		if (obj) {
			this._layers.splice(this._layers.indexOf(obj), 1);
		}
		return (this._map) ? this._update() : this;
	},

	// @method expand(): this
	// Expand the control container if collapsed.
	expand: function () {
		addClass(this._container, 'leaflet-control-layers-expanded');
		this._form.style.height = null;
		var acceptableHeight = this._map.getSize().y - (this._container.offsetTop + 50);
		if (acceptableHeight < this._form.clientHeight) {
			addClass(this._form, 'leaflet-control-layers-scrollbar');
			this._form.style.height = acceptableHeight + 'px';
		} else {
			removeClass(this._form, 'leaflet-control-layers-scrollbar');
		}
		this._checkDisabledLayers();
		return this;
	},

	// @method collapse(): this
	// Collapse the control container if expanded.
	collapse: function () {
		removeClass(this._container, 'leaflet-control-layers-expanded');
		return this;
	},

	_initLayout: function () {
		var className = 'leaflet-control-layers',
		    container = this._container = create$1('div', className),
		    collapsed = this.options.collapsed;

		// makes this work on IE touch devices by stopping it from firing a mouseout event when the touch is released
		container.setAttribute('aria-haspopup', true);

		disableClickPropagation(container);
		disableScrollPropagation(container);

		var form = this._form = create$1('form', className + '-list');

		if (collapsed) {
			this._map.on('click', this.collapse, this);

			if (!android) {
				on(container, {
					mouseenter: this.expand,
					mouseleave: this.collapse
				}, this);
			}
		}

		var link = this._layersLink = create$1('a', className + '-toggle', container);
		link.href = '#';
		link.title = 'Layers';

		if (touch) {
			on(link, 'click', stop);
			on(link, 'click', this.expand, this);
		} else {
			on(link, 'focus', this.expand, this);
		}

		if (!collapsed) {
			this.expand();
		}

		this._baseLayersList = create$1('div', className + '-base', form);
		this._separator = create$1('div', className + '-separator', form);
		this._overlaysList = create$1('div', className + '-overlays', form);

		container.appendChild(form);
	},

	_getLayer: function (id) {
		for (var i = 0; i < this._layers.length; i++) {

			if (this._layers[i] && stamp(this._layers[i].layer) === id) {
				return this._layers[i];
			}
		}
	},

	_addLayer: function (layer, name, overlay) {
		if (this._map) {
			layer.on('add remove', this._onLayerChange, this);
		}

		this._layers.push({
			layer: layer,
			name: name,
			overlay: overlay
		});

		if (this.options.sortLayers) {
			this._layers.sort(bind(function (a, b) {
				return this.options.sortFunction(a.layer, b.layer, a.name, b.name);
			}, this));
		}

		if (this.options.autoZIndex && layer.setZIndex) {
			this._lastZIndex++;
			layer.setZIndex(this._lastZIndex);
		}

		this._expandIfNotCollapsed();
	},

	_update: function () {
		if (!this._container) { return this; }

		empty(this._baseLayersList);
		empty(this._overlaysList);

		this._layerControlInputs = [];
		var baseLayersPresent, overlaysPresent, i, obj, baseLayersCount = 0;

		for (i = 0; i < this._layers.length; i++) {
			obj = this._layers[i];
			this._addItem(obj);
			overlaysPresent = overlaysPresent || obj.overlay;
			baseLayersPresent = baseLayersPresent || !obj.overlay;
			baseLayersCount += !obj.overlay ? 1 : 0;
		}

		// Hide base layers section if there's only one layer.
		if (this.options.hideSingleBase) {
			baseLayersPresent = baseLayersPresent && baseLayersCount > 1;
			this._baseLayersList.style.display = baseLayersPresent ? '' : 'none';
		}

		this._separator.style.display = overlaysPresent && baseLayersPresent ? '' : 'none';

		return this;
	},

	_onLayerChange: function (e) {
		if (!this._handlingClick) {
			this._update();
		}

		var obj = this._getLayer(stamp(e.target));

		// @namespace Map
		// @section Layer events
		// @event baselayerchange: LayersControlEvent
		// Fired when the base layer is changed through the [layer control](#control-layers).
		// @event overlayadd: LayersControlEvent
		// Fired when an overlay is selected through the [layer control](#control-layers).
		// @event overlayremove: LayersControlEvent
		// Fired when an overlay is deselected through the [layer control](#control-layers).
		// @namespace Control.Layers
		var type = obj.overlay ?
			(e.type === 'add' ? 'overlayadd' : 'overlayremove') :
			(e.type === 'add' ? 'baselayerchange' : null);

		if (type) {
			this._map.fire(type, obj);
		}
	},

	// IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see http://bit.ly/PqYLBe)
	_createRadioElement: function (name, checked) {

		var radioHtml = '<input type="radio" class="leaflet-control-layers-selector" name="' +
				name + '"' + (checked ? ' checked="checked"' : '') + '/>';

		var radioFragment = document.createElement('div');
		radioFragment.innerHTML = radioHtml;

		return radioFragment.firstChild;
	},

	_addItem: function (obj) {
		var label = document.createElement('label'),
		    checked = this._map.hasLayer(obj.layer),
		    input;

		if (obj.overlay) {
			input = document.createElement('input');
			input.type = 'checkbox';
			input.className = 'leaflet-control-layers-selector';
			input.defaultChecked = checked;
		} else {
			input = this._createRadioElement('leaflet-base-layers', checked);
		}

		this._layerControlInputs.push(input);
		input.layerId = stamp(obj.layer);

		on(input, 'click', this._onInputClick, this);

		var name = document.createElement('span');
		name.innerHTML = ' ' + obj.name;

		// Helps from preventing layer control flicker when checkboxes are disabled
		// https://github.com/Leaflet/Leaflet/issues/2771
		var holder = document.createElement('div');

		label.appendChild(holder);
		holder.appendChild(input);
		holder.appendChild(name);

		var container = obj.overlay ? this._overlaysList : this._baseLayersList;
		container.appendChild(label);

		this._checkDisabledLayers();
		return label;
	},

	_onInputClick: function () {
		var inputs = this._layerControlInputs,
		    input, layer;
		var addedLayers = [],
		    removedLayers = [];

		this._handlingClick = true;

		for (var i = inputs.length - 1; i >= 0; i--) {
			input = inputs[i];
			layer = this._getLayer(input.layerId).layer;

			if (input.checked) {
				addedLayers.push(layer);
			} else if (!input.checked) {
				removedLayers.push(layer);
			}
		}

		// Bugfix issue 2318: Should remove all old layers before readding new ones
		for (i = 0; i < removedLayers.length; i++) {
			if (this._map.hasLayer(removedLayers[i])) {
				this._map.removeLayer(removedLayers[i]);
			}
		}
		for (i = 0; i < addedLayers.length; i++) {
			if (!this._map.hasLayer(addedLayers[i])) {
				this._map.addLayer(addedLayers[i]);
			}
		}

		this._handlingClick = false;

		this._refocusOnMap();
	},

	_checkDisabledLayers: function () {
		var inputs = this._layerControlInputs,
		    input,
		    layer,
		    zoom = this._map.getZoom();

		for (var i = inputs.length - 1; i >= 0; i--) {
			input = inputs[i];
			layer = this._getLayer(input.layerId).layer;
			input.disabled = (layer.options.minZoom !== undefined && zoom < layer.options.minZoom) ||
			                 (layer.options.maxZoom !== undefined && zoom > layer.options.maxZoom);

		}
	},

	_expandIfNotCollapsed: function () {
		if (this._map && !this.options.collapsed) {
			this.expand();
		}
		return this;
	},

	_expand: function () {
		// Backward compatibility, remove me in 1.1.
		return this.expand();
	},

	_collapse: function () {
		// Backward compatibility, remove me in 1.1.
		return this.collapse();
	}

});


// @factory L.control.layers(baselayers?: Object, overlays?: Object, options?: Control.Layers options)
// Creates an attribution control with the given layers. Base layers will be switched with radio buttons, while overlays will be switched with checkboxes. Note that all base layers should be passed in the base layers object, but only one should be added to the map during map instantiation.
var layers = function (baseLayers, overlays, options) {
	return new Layers(baseLayers, overlays, options);
};

/*
 * @class Control.Zoom
 * @aka L.Control.Zoom
 * @inherits Control
 *
 * A basic zoom control with two buttons (zoom in and zoom out). It is put on the map by default unless you set its [`zoomControl` option](#map-zoomcontrol) to `false`. Extends `Control`.
 */

var Zoom = Control.extend({
	// @section
	// @aka Control.Zoom options
	options: {
		position: 'topleft',

		// @option zoomInText: String = '+'
		// The text set on the 'zoom in' button.
		zoomInText: '+',

		// @option zoomInTitle: String = 'Zoom in'
		// The title set on the 'zoom in' button.
		zoomInTitle: 'Zoom in',

		// @option zoomOutText: String = '&#x2212;'
		// The text set on the 'zoom out' button.
		zoomOutText: '&#x2212;',

		// @option zoomOutTitle: String = 'Zoom out'
		// The title set on the 'zoom out' button.
		zoomOutTitle: 'Zoom out'
	},

	onAdd: function (map) {
		var zoomName = 'leaflet-control-zoom',
		    container = create$1('div', zoomName + ' leaflet-bar'),
		    options = this.options;

		this._zoomInButton  = this._createButton(options.zoomInText, options.zoomInTitle,
		        zoomName + '-in',  container, this._zoomIn);
		this._zoomOutButton = this._createButton(options.zoomOutText, options.zoomOutTitle,
		        zoomName + '-out', container, this._zoomOut);

		this._updateDisabled();
		map.on('zoomend zoomlevelschange', this._updateDisabled, this);

		return container;
	},

	onRemove: function (map) {
		map.off('zoomend zoomlevelschange', this._updateDisabled, this);
	},

	disable: function () {
		this._disabled = true;
		this._updateDisabled();
		return this;
	},

	enable: function () {
		this._disabled = false;
		this._updateDisabled();
		return this;
	},

	_zoomIn: function (e) {
		if (!this._disabled && this._map._zoom < this._map.getMaxZoom()) {
			this._map.zoomIn(this._map.options.zoomDelta * (e.shiftKey ? 3 : 1));
		}
	},

	_zoomOut: function (e) {
		if (!this._disabled && this._map._zoom > this._map.getMinZoom()) {
			this._map.zoomOut(this._map.options.zoomDelta * (e.shiftKey ? 3 : 1));
		}
	},

	_createButton: function (html, title, className, container, fn) {
		var link = create$1('a', className, container);
		link.innerHTML = html;
		link.href = '#';
		link.title = title;

		/*
		 * Will force screen readers like VoiceOver to read this as "Zoom in - button"
		 */
		link.setAttribute('role', 'button');
		link.setAttribute('aria-label', title);

		disableClickPropagation(link);
		on(link, 'click', stop);
		on(link, 'click', fn, this);
		on(link, 'click', this._refocusOnMap, this);

		return link;
	},

	_updateDisabled: function () {
		var map = this._map,
		    className = 'leaflet-disabled';

		removeClass(this._zoomInButton, className);
		removeClass(this._zoomOutButton, className);

		if (this._disabled || map._zoom === map.getMinZoom()) {
			addClass(this._zoomOutButton, className);
		}
		if (this._disabled || map._zoom === map.getMaxZoom()) {
			addClass(this._zoomInButton, className);
		}
	}
});

// @namespace Map
// @section Control options
// @option zoomControl: Boolean = true
// Whether a [zoom control](#control-zoom) is added to the map by default.
Map.mergeOptions({
	zoomControl: true
});

Map.addInitHook(function () {
	if (this.options.zoomControl) {
		this.zoomControl = new Zoom();
		this.addControl(this.zoomControl);
	}
});

// @namespace Control.Zoom
// @factory L.control.zoom(options: Control.Zoom options)
// Creates a zoom control
var zoom = function (options) {
	return new Zoom(options);
};

/*
 * @class Control.Scale
 * @aka L.Control.Scale
 * @inherits Control
 *
 * A simple scale control that shows the scale of the current center of screen in metric (m/km) and imperial (mi/ft) systems. Extends `Control`.
 *
 * @example
 *
 * ```js
 * L.control.scale().addTo(map);
 * ```
 */

var Scale = Control.extend({
	// @section
	// @aka Control.Scale options
	options: {
		position: 'bottomleft',

		// @option maxWidth: Number = 100
		// Maximum width of the control in pixels. The width is set dynamically to show round values (e.g. 100, 200, 500).
		maxWidth: 100,

		// @option metric: Boolean = True
		// Whether to show the metric scale line (m/km).
		metric: true,

		// @option imperial: Boolean = True
		// Whether to show the imperial scale line (mi/ft).
		imperial: true

		// @option updateWhenIdle: Boolean = false
		// If `true`, the control is updated on [`moveend`](#map-moveend), otherwise it's always up-to-date (updated on [`move`](#map-move)).
	},

	onAdd: function (map) {
		var className = 'leaflet-control-scale',
		    container = create$1('div', className),
		    options = this.options;

		this._addScales(options, className + '-line', container);

		map.on(options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
		map.whenReady(this._update, this);

		return container;
	},

	onRemove: function (map) {
		map.off(this.options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
	},

	_addScales: function (options, className, container) {
		if (options.metric) {
			this._mScale = create$1('div', className, container);
		}
		if (options.imperial) {
			this._iScale = create$1('div', className, container);
		}
	},

	_update: function () {
		var map = this._map,
		    y = map.getSize().y / 2;

		var maxMeters = map.distance(
				map.containerPointToLatLng([0, y]),
				map.containerPointToLatLng([this.options.maxWidth, y]));

		this._updateScales(maxMeters);
	},

	_updateScales: function (maxMeters) {
		if (this.options.metric && maxMeters) {
			this._updateMetric(maxMeters);
		}
		if (this.options.imperial && maxMeters) {
			this._updateImperial(maxMeters);
		}
	},

	_updateMetric: function (maxMeters) {
		var meters = this._getRoundNum(maxMeters),
		    label = meters < 1000 ? meters + ' m' : (meters / 1000) + ' km';

		this._updateScale(this._mScale, label, meters / maxMeters);
	},

	_updateImperial: function (maxMeters) {
		var maxFeet = maxMeters * 3.2808399,
		    maxMiles, miles, feet;

		if (maxFeet > 5280) {
			maxMiles = maxFeet / 5280;
			miles = this._getRoundNum(maxMiles);
			this._updateScale(this._iScale, miles + ' mi', miles / maxMiles);

		} else {
			feet = this._getRoundNum(maxFeet);
			this._updateScale(this._iScale, feet + ' ft', feet / maxFeet);
		}
	},

	_updateScale: function (scale, text, ratio) {
		scale.style.width = Math.round(this.options.maxWidth * ratio) + 'px';
		scale.innerHTML = text;
	},

	_getRoundNum: function (num) {
		var pow10 = Math.pow(10, (Math.floor(num) + '').length - 1),
		    d = num / pow10;

		d = d >= 10 ? 10 :
		    d >= 5 ? 5 :
		    d >= 3 ? 3 :
		    d >= 2 ? 2 : 1;

		return pow10 * d;
	}
});


// @factory L.control.scale(options?: Control.Scale options)
// Creates an scale control with the given options.
var scale = function (options) {
	return new Scale(options);
};

/*
 * @class Control.Attribution
 * @aka L.Control.Attribution
 * @inherits Control
 *
 * The attribution control allows you to display attribution data in a small text box on a map. It is put on the map by default unless you set its [`attributionControl` option](#map-attributioncontrol) to `false`, and it fetches attribution texts from layers with the [`getAttribution` method](#layer-getattribution) automatically. Extends Control.
 */

var Attribution = Control.extend({
	// @section
	// @aka Control.Attribution options
	options: {
		position: 'bottomright',

		// @option prefix: String = 'Leaflet'
		// The HTML text shown before the attributions. Pass `false` to disable.
		prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
	},

	initialize: function (options) {
		setOptions(this, options);

		this._attributions = {};
	},

	onAdd: function (map) {
		map.attributionControl = this;
		this._container = create$1('div', 'leaflet-control-attribution');
		disableClickPropagation(this._container);

		// TODO ugly, refactor
		for (var i in map._layers) {
			if (map._layers[i].getAttribution) {
				this.addAttribution(map._layers[i].getAttribution());
			}
		}

		this._update();

		return this._container;
	},

	// @method setPrefix(prefix: String): this
	// Sets the text before the attributions.
	setPrefix: function (prefix) {
		this.options.prefix = prefix;
		this._update();
		return this;
	},

	// @method addAttribution(text: String): this
	// Adds an attribution text (e.g. `'Vector data &copy; Mapbox'`).
	addAttribution: function (text) {
		if (!text) { return this; }

		if (!this._attributions[text]) {
			this._attributions[text] = 0;
		}
		this._attributions[text]++;

		this._update();

		return this;
	},

	// @method removeAttribution(text: String): this
	// Removes an attribution text.
	removeAttribution: function (text) {
		if (!text) { return this; }

		if (this._attributions[text]) {
			this._attributions[text]--;
			this._update();
		}

		return this;
	},

	_update: function () {
		if (!this._map) { return; }

		var attribs = [];

		for (var i in this._attributions) {
			if (this._attributions[i]) {
				attribs.push(i);
			}
		}

		var prefixAndAttribs = [];

		if (this.options.prefix) {
			prefixAndAttribs.push(this.options.prefix);
		}
		if (attribs.length) {
			prefixAndAttribs.push(attribs.join(', '));
		}

		this._container.innerHTML = prefixAndAttribs.join(' | ');
	}
});

// @namespace Map
// @section Control options
// @option attributionControl: Boolean = true
// Whether a [attribution control](#control-attribution) is added to the map by default.
Map.mergeOptions({
	attributionControl: true
});

Map.addInitHook(function () {
	if (this.options.attributionControl) {
		new Attribution().addTo(this);
	}
});

// @namespace Control.Attribution
// @factory L.control.attribution(options: Control.Attribution options)
// Creates an attribution control.
var attribution = function (options) {
	return new Attribution(options);
};

Control.Layers = Layers;
Control.Zoom = Zoom;
Control.Scale = Scale;
Control.Attribution = Attribution;

control.layers = layers;
control.zoom = zoom;
control.scale = scale;
control.attribution = attribution;

/*
	L.Handler is a base class for handler classes that are used internally to inject
	interaction features like dragging to classes like Map and Marker.
*/

// @class Handler
// @aka L.Handler
// Abstract class for map interaction handlers

var Handler = Class.extend({
	initialize: function (map) {
		this._map = map;
	},

	// @method enable(): this
	// Enables the handler
	enable: function () {
		if (this._enabled) { return this; }

		this._enabled = true;
		this.addHooks();
		return this;
	},

	// @method disable(): this
	// Disables the handler
	disable: function () {
		if (!this._enabled) { return this; }

		this._enabled = false;
		this.removeHooks();
		return this;
	},

	// @method enabled(): Boolean
	// Returns `true` if the handler is enabled
	enabled: function () {
		return !!this._enabled;
	}

	// @section Extension methods
	// Classes inheriting from `Handler` must implement the two following methods:
	// @method addHooks()
	// Called when the handler is enabled, should add event hooks.
	// @method removeHooks()
	// Called when the handler is disabled, should remove the event hooks added previously.
});

var Mixin = {Events: Events};

/*
 * @class Draggable
 * @aka L.Draggable
 * @inherits Evented
 *
 * A class for making DOM elements draggable (including touch support).
 * Used internally for map and marker dragging. Only works for elements
 * that were positioned with [`L.DomUtil.setPosition`](#domutil-setposition).
 *
 * @example
 * ```js
 * var draggable = new L.Draggable(elementToDrag);
 * draggable.enable();
 * ```
 */

var START = touch ? 'touchstart mousedown' : 'mousedown';
var END = {
	mousedown: 'mouseup',
	touchstart: 'touchend',
	pointerdown: 'touchend',
	MSPointerDown: 'touchend'
};
var MOVE = {
	mousedown: 'mousemove',
	touchstart: 'touchmove',
	pointerdown: 'touchmove',
	MSPointerDown: 'touchmove'
};


var Draggable = Evented.extend({

	options: {
		// @section
		// @aka Draggable options
		// @option clickTolerance: Number = 3
		// The max number of pixels a user can shift the mouse pointer during a click
		// for it to be considered a valid click (as opposed to a mouse drag).
		clickTolerance: 3
	},

	// @constructor L.Draggable(el: HTMLElement, dragHandle?: HTMLElement, preventOutline?: Boolean, options?: Draggable options)
	// Creates a `Draggable` object for moving `el` when you start dragging the `dragHandle` element (equals `el` itself by default).
	initialize: function (element, dragStartTarget, preventOutline$$1, options) {
		setOptions(this, options);

		this._element = element;
		this._dragStartTarget = dragStartTarget || element;
		this._preventOutline = preventOutline$$1;
	},

	// @method enable()
	// Enables the dragging ability
	enable: function () {
		if (this._enabled) { return; }

		on(this._dragStartTarget, START, this._onDown, this);

		this._enabled = true;
	},

	// @method disable()
	// Disables the dragging ability
	disable: function () {
		if (!this._enabled) { return; }

		// If we're currently dragging this draggable,
		// disabling it counts as first ending the drag.
		if (Draggable._dragging === this) {
			this.finishDrag();
		}

		off(this._dragStartTarget, START, this._onDown, this);

		this._enabled = false;
		this._moved = false;
	},

	_onDown: function (e) {
		// Ignore simulated events, since we handle both touch and
		// mouse explicitly; otherwise we risk getting duplicates of
		// touch events, see #4315.
		// Also ignore the event if disabled; this happens in IE11
		// under some circumstances, see #3666.
		if (e._simulated || !this._enabled) { return; }

		this._moved = false;

		if (hasClass(this._element, 'leaflet-zoom-anim')) { return; }

		if (Draggable._dragging || e.shiftKey || ((e.which !== 1) && (e.button !== 1) && !e.touches)) { return; }
		Draggable._dragging = this;  // Prevent dragging multiple objects at once.

		if (this._preventOutline) {
			preventOutline(this._element);
		}

		disableImageDrag();
		disableTextSelection();

		if (this._moving) { return; }

		// @event down: Event
		// Fired when a drag is about to start.
		this.fire('down');

		var first = e.touches ? e.touches[0] : e;

		this._startPoint = new Point(first.clientX, first.clientY);

		on(document, MOVE[e.type], this._onMove, this);
		on(document, END[e.type], this._onUp, this);
	},

	_onMove: function (e) {
		// Ignore simulated events, since we handle both touch and
		// mouse explicitly; otherwise we risk getting duplicates of
		// touch events, see #4315.
		// Also ignore the event if disabled; this happens in IE11
		// under some circumstances, see #3666.
		if (e._simulated || !this._enabled) { return; }

		if (e.touches && e.touches.length > 1) {
			this._moved = true;
			return;
		}

		var first = (e.touches && e.touches.length === 1 ? e.touches[0] : e),
		    newPoint = new Point(first.clientX, first.clientY),
		    offset = newPoint.subtract(this._startPoint);

		if (!offset.x && !offset.y) { return; }
		if (Math.abs(offset.x) + Math.abs(offset.y) < this.options.clickTolerance) { return; }

		preventDefault(e);

		if (!this._moved) {
			// @event dragstart: Event
			// Fired when a drag starts
			this.fire('dragstart');

			this._moved = true;
			this._startPos = getPosition(this._element).subtract(offset);

			addClass(document.body, 'leaflet-dragging');

			this._lastTarget = e.target || e.srcElement;
			// IE and Edge do not give the <use> element, so fetch it
			// if necessary
			if ((window.SVGElementInstance) && (this._lastTarget instanceof SVGElementInstance)) {
				this._lastTarget = this._lastTarget.correspondingUseElement;
			}
			addClass(this._lastTarget, 'leaflet-drag-target');
		}

		this._newPos = this._startPos.add(offset);
		this._moving = true;

		cancelAnimFrame(this._animRequest);
		this._lastEvent = e;
		this._animRequest = requestAnimFrame(this._updatePosition, this, true);
	},

	_updatePosition: function () {
		var e = {originalEvent: this._lastEvent};

		// @event predrag: Event
		// Fired continuously during dragging *before* each corresponding
		// update of the element's position.
		this.fire('predrag', e);
		setPosition(this._element, this._newPos);

		// @event drag: Event
		// Fired continuously during dragging.
		this.fire('drag', e);
	},

	_onUp: function (e) {
		// Ignore simulated events, since we handle both touch and
		// mouse explicitly; otherwise we risk getting duplicates of
		// touch events, see #4315.
		// Also ignore the event if disabled; this happens in IE11
		// under some circumstances, see #3666.
		if (e._simulated || !this._enabled) { return; }
		this.finishDrag();
	},

	finishDrag: function () {
		removeClass(document.body, 'leaflet-dragging');

		if (this._lastTarget) {
			removeClass(this._lastTarget, 'leaflet-drag-target');
			this._lastTarget = null;
		}

		for (var i in MOVE) {
			off(document, MOVE[i], this._onMove, this);
			off(document, END[i], this._onUp, this);
		}

		enableImageDrag();
		enableTextSelection();

		if (this._moved && this._moving) {
			// ensure drag is not fired after dragend
			cancelAnimFrame(this._animRequest);

			// @event dragend: DragEndEvent
			// Fired when the drag ends.
			this.fire('dragend', {
				distance: this._newPos.distanceTo(this._startPos)
			});
		}

		this._moving = false;
		Draggable._dragging = false;
	}

});

/*
 * @namespace LineUtil
 *
 * Various utility functions for polyine points processing, used by Leaflet internally to make polylines lightning-fast.
 */

// Simplify polyline with vertex reduction and Douglas-Peucker simplification.
// Improves rendering performance dramatically by lessening the number of points to draw.

// @function simplify(points: Point[], tolerance: Number): Point[]
// Dramatically reduces the number of points in a polyline while retaining
// its shape and returns a new array of simplified points, using the
// [Douglas-Peucker algorithm](http://en.wikipedia.org/wiki/Douglas-Peucker_algorithm).
// Used for a huge performance boost when processing/displaying Leaflet polylines for
// each zoom level and also reducing visual noise. tolerance affects the amount of
// simplification (lesser value means higher quality but slower and with more points).
// Also released as a separated micro-library [Simplify.js](http://mourner.github.com/simplify-js/).
function simplify(points, tolerance) {
	if (!tolerance || !points.length) {
		return points.slice();
	}

	var sqTolerance = tolerance * tolerance;

	    // stage 1: vertex reduction
	    points = _reducePoints(points, sqTolerance);

	    // stage 2: Douglas-Peucker simplification
	    points = _simplifyDP(points, sqTolerance);

	return points;
}

// @function pointToSegmentDistance(p: Point, p1: Point, p2: Point): Number
// Returns the distance between point `p` and segment `p1` to `p2`.
function pointToSegmentDistance(p, p1, p2) {
	return Math.sqrt(_sqClosestPointOnSegment(p, p1, p2, true));
}

// @function closestPointOnSegment(p: Point, p1: Point, p2: Point): Number
// Returns the closest point from a point `p` on a segment `p1` to `p2`.
function closestPointOnSegment(p, p1, p2) {
	return _sqClosestPointOnSegment(p, p1, p2);
}

// Douglas-Peucker simplification, see http://en.wikipedia.org/wiki/Douglas-Peucker_algorithm
function _simplifyDP(points, sqTolerance) {

	var len = points.length,
	    ArrayConstructor = typeof Uint8Array !== undefined + '' ? Uint8Array : Array,
	    markers = new ArrayConstructor(len);

	    markers[0] = markers[len - 1] = 1;

	_simplifyDPStep(points, markers, sqTolerance, 0, len - 1);

	var i,
	    newPoints = [];

	for (i = 0; i < len; i++) {
		if (markers[i]) {
			newPoints.push(points[i]);
		}
	}

	return newPoints;
}

function _simplifyDPStep(points, markers, sqTolerance, first, last) {

	var maxSqDist = 0,
	index, i, sqDist;

	for (i = first + 1; i <= last - 1; i++) {
		sqDist = _sqClosestPointOnSegment(points[i], points[first], points[last], true);

		if (sqDist > maxSqDist) {
			index = i;
			maxSqDist = sqDist;
		}
	}

	if (maxSqDist > sqTolerance) {
		markers[index] = 1;

		_simplifyDPStep(points, markers, sqTolerance, first, index);
		_simplifyDPStep(points, markers, sqTolerance, index, last);
	}
}

// reduce points that are too close to each other to a single point
function _reducePoints(points, sqTolerance) {
	var reducedPoints = [points[0]];

	for (var i = 1, prev = 0, len = points.length; i < len; i++) {
		if (_sqDist(points[i], points[prev]) > sqTolerance) {
			reducedPoints.push(points[i]);
			prev = i;
		}
	}
	if (prev < len - 1) {
		reducedPoints.push(points[len - 1]);
	}
	return reducedPoints;
}

var _lastCode;

// @function clipSegment(a: Point, b: Point, bounds: Bounds, useLastCode?: Boolean, round?: Boolean): Point[]|Boolean
// Clips the segment a to b by rectangular bounds with the
// [Cohen-Sutherland algorithm](https://en.wikipedia.org/wiki/Cohen%E2%80%93Sutherland_algorithm)
// (modifying the segment points directly!). Used by Leaflet to only show polyline
// points that are on the screen or near, increasing performance.
function clipSegment(a, b, bounds, useLastCode, round) {
	var codeA = useLastCode ? _lastCode : _getBitCode(a, bounds),
	    codeB = _getBitCode(b, bounds),

	    codeOut, p, newCode;

	    // save 2nd code to avoid calculating it on the next segment
	    _lastCode = codeB;

	while (true) {
		// if a,b is inside the clip window (trivial accept)
		if (!(codeA | codeB)) {
			return [a, b];
		}

		// if a,b is outside the clip window (trivial reject)
		if (codeA & codeB) {
			return false;
		}

		// other cases
		codeOut = codeA || codeB;
		p = _getEdgeIntersection(a, b, codeOut, bounds, round);
		newCode = _getBitCode(p, bounds);

		if (codeOut === codeA) {
			a = p;
			codeA = newCode;
		} else {
			b = p;
			codeB = newCode;
		}
	}
}

function _getEdgeIntersection(a, b, code, bounds, round) {
	var dx = b.x - a.x,
	    dy = b.y - a.y,
	    min = bounds.min,
	    max = bounds.max,
	    x, y;

	if (code & 8) { // top
		x = a.x + dx * (max.y - a.y) / dy;
		y = max.y;

	} else if (code & 4) { // bottom
		x = a.x + dx * (min.y - a.y) / dy;
		y = min.y;

	} else if (code & 2) { // right
		x = max.x;
		y = a.y + dy * (max.x - a.x) / dx;

	} else if (code & 1) { // left
		x = min.x;
		y = a.y + dy * (min.x - a.x) / dx;
	}

	return new Point(x, y, round);
}

function _getBitCode(p, bounds) {
	var code = 0;

	if (p.x < bounds.min.x) { // left
		code |= 1;
	} else if (p.x > bounds.max.x) { // right
		code |= 2;
	}

	if (p.y < bounds.min.y) { // bottom
		code |= 4;
	} else if (p.y > bounds.max.y) { // top
		code |= 8;
	}

	return code;
}

// square distance (to avoid unnecessary Math.sqrt calls)
function _sqDist(p1, p2) {
	var dx = p2.x - p1.x,
	    dy = p2.y - p1.y;
	return dx * dx + dy * dy;
}

// return closest point on segment or distance to that point
function _sqClosestPointOnSegment(p, p1, p2, sqDist) {
	var x = p1.x,
	    y = p1.y,
	    dx = p2.x - x,
	    dy = p2.y - y,
	    dot = dx * dx + dy * dy,
	    t;

	if (dot > 0) {
		t = ((p.x - x) * dx + (p.y - y) * dy) / dot;

		if (t > 1) {
			x = p2.x;
			y = p2.y;
		} else if (t > 0) {
			x += dx * t;
			y += dy * t;
		}
	}

	dx = p.x - x;
	dy = p.y - y;

	return sqDist ? dx * dx + dy * dy : new Point(x, y);
}


// @function isFlat(latlngs: LatLng[]): Boolean
// Returns true if `latlngs` is a flat array, false is nested.
function isFlat(latlngs) {
	return !isArray(latlngs[0]) || (typeof latlngs[0][0] !== 'object' && typeof latlngs[0][0] !== 'undefined');
}

function _flat(latlngs) {
	console.warn('Deprecated use of _flat, please use L.LineUtil.isFlat instead.');
	return isFlat(latlngs);
}


var LineUtil = (Object.freeze || Object)({
	simplify: simplify,
	pointToSegmentDistance: pointToSegmentDistance,
	closestPointOnSegment: closestPointOnSegment,
	clipSegment: clipSegment,
	_getEdgeIntersection: _getEdgeIntersection,
	_getBitCode: _getBitCode,
	_sqClosestPointOnSegment: _sqClosestPointOnSegment,
	isFlat: isFlat,
	_flat: _flat
});

/*
 * @namespace PolyUtil
 * Various utility functions for polygon geometries.
 */

/* @function clipPolygon(points: Point[], bounds: Bounds, round?: Boolean): Point[]
 * Clips the polygon geometry defined by the given `points` by the given bounds (using the [Sutherland-Hodgeman algorithm](https://en.wikipedia.org/wiki/Sutherland%E2%80%93Hodgman_algorithm)).
 * Used by Leaflet to only show polygon points that are on the screen or near, increasing
 * performance. Note that polygon points needs different algorithm for clipping
 * than polyline, so there's a seperate method for it.
 */
function clipPolygon(points, bounds, round) {
	var clippedPoints,
	    edges = [1, 4, 2, 8],
	    i, j, k,
	    a, b,
	    len, edge, p;

	for (i = 0, len = points.length; i < len; i++) {
		points[i]._code = _getBitCode(points[i], bounds);
	}

	// for each edge (left, bottom, right, top)
	for (k = 0; k < 4; k++) {
		edge = edges[k];
		clippedPoints = [];

		for (i = 0, len = points.length, j = len - 1; i < len; j = i++) {
			a = points[i];
			b = points[j];

			// if a is inside the clip window
			if (!(a._code & edge)) {
				// if b is outside the clip window (a->b goes out of screen)
				if (b._code & edge) {
					p = _getEdgeIntersection(b, a, edge, bounds, round);
					p._code = _getBitCode(p, bounds);
					clippedPoints.push(p);
				}
				clippedPoints.push(a);

			// else if b is inside the clip window (a->b enters the screen)
			} else if (!(b._code & edge)) {
				p = _getEdgeIntersection(b, a, edge, bounds, round);
				p._code = _getBitCode(p, bounds);
				clippedPoints.push(p);
			}
		}
		points = clippedPoints;
	}

	return points;
}


var PolyUtil = (Object.freeze || Object)({
	clipPolygon: clipPolygon
});

/*
 * @namespace Projection
 * @section
 * Leaflet comes with a set of already defined Projections out of the box:
 *
 * @projection L.Projection.LonLat
 *
 * Equirectangular, or Plate Carree projection — the most simple projection,
 * mostly used by GIS enthusiasts. Directly maps `x` as longitude, and `y` as
 * latitude. Also suitable for flat worlds, e.g. game maps. Used by the
 * `EPSG:4326` and `Simple` CRS.
 */

var LonLat = {
	project: function (latlng) {
		return new Point(latlng.lng, latlng.lat);
	},

	unproject: function (point) {
		return new LatLng(point.y, point.x);
	},

	bounds: new Bounds([-180, -90], [180, 90])
};

/*
 * @namespace Projection
 * @projection L.Projection.Mercator
 *
 * Elliptical Mercator projection — more complex than Spherical Mercator. Takes into account that Earth is a geoid, not a perfect sphere. Used by the EPSG:3395 CRS.
 */

var Mercator = {
	R: 6378137,
	R_MINOR: 6356752.314245179,

	bounds: new Bounds([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),

	project: function (latlng) {
		var d = Math.PI / 180,
		    r = this.R,
		    y = latlng.lat * d,
		    tmp = this.R_MINOR / r,
		    e = Math.sqrt(1 - tmp * tmp),
		    con = e * Math.sin(y);

		var ts = Math.tan(Math.PI / 4 - y / 2) / Math.pow((1 - con) / (1 + con), e / 2);
		y = -r * Math.log(Math.max(ts, 1E-10));

		return new Point(latlng.lng * d * r, y);
	},

	unproject: function (point) {
		var d = 180 / Math.PI,
		    r = this.R,
		    tmp = this.R_MINOR / r,
		    e = Math.sqrt(1 - tmp * tmp),
		    ts = Math.exp(-point.y / r),
		    phi = Math.PI / 2 - 2 * Math.atan(ts);

		for (var i = 0, dphi = 0.1, con; i < 15 && Math.abs(dphi) > 1e-7; i++) {
			con = e * Math.sin(phi);
			con = Math.pow((1 - con) / (1 + con), e / 2);
			dphi = Math.PI / 2 - 2 * Math.atan(ts * con) - phi;
			phi += dphi;
		}

		return new LatLng(phi * d, point.x * d / r);
	}
};

/*
 * @class Projection

 * An object with methods for projecting geographical coordinates of the world onto
 * a flat surface (and back). See [Map projection](http://en.wikipedia.org/wiki/Map_projection).

 * @property bounds: Bounds
 * The bounds (specified in CRS units) where the projection is valid

 * @method project(latlng: LatLng): Point
 * Projects geographical coordinates into a 2D point.
 * Only accepts actual `L.LatLng` instances, not arrays.

 * @method unproject(point: Point): LatLng
 * The inverse of `project`. Projects a 2D point into a geographical location.
 * Only accepts actual `L.Point` instances, not arrays.

 */




var index = (Object.freeze || Object)({
	LonLat: LonLat,
	Mercator: Mercator,
	SphericalMercator: SphericalMercator
});

/*
 * @namespace CRS
 * @crs L.CRS.EPSG3395
 *
 * Rarely used by some commercial tile providers. Uses Elliptical Mercator projection.
 */
var EPSG3395 = extend({}, Earth, {
	code: 'EPSG:3395',
	projection: Mercator,

	transformation: (function () {
		var scale = 0.5 / (Math.PI * Mercator.R);
		return toTransformation(scale, 0.5, -scale, 0.5);
	}())
});

/*
 * @namespace CRS
 * @crs L.CRS.EPSG4326
 *
 * A common CRS among GIS enthusiasts. Uses simple Equirectangular projection.
 *
 * Leaflet 1.0.x complies with the [TMS coordinate scheme for EPSG:4326](https://wiki.osgeo.org/wiki/Tile_Map_Service_Specification#global-geodetic),
 * which is a breaking change from 0.7.x behaviour.  If you are using a `TileLayer`
 * with this CRS, ensure that there are two 256x256 pixel tiles covering the
 * whole earth at zoom level zero, and that the tile coordinate origin is (-180,+90),
 * or (-180,-90) for `TileLayer`s with [the `tms` option](#tilelayer-tms) set.
 */

var EPSG4326 = extend({}, Earth, {
	code: 'EPSG:4326',
	projection: LonLat,
	transformation: toTransformation(1 / 180, 1, -1 / 180, 0.5)
});

/*
 * @namespace CRS
 * @crs L.CRS.Simple
 *
 * A simple CRS that maps longitude and latitude into `x` and `y` directly.
 * May be used for maps of flat surfaces (e.g. game maps). Note that the `y`
 * axis should still be inverted (going from bottom to top). `distance()` returns
 * simple euclidean distance.
 */

var Simple = extend({}, CRS, {
	projection: LonLat,
	transformation: toTransformation(1, 0, -1, 0),

	scale: function (zoom) {
		return Math.pow(2, zoom);
	},

	zoom: function (scale) {
		return Math.log(scale) / Math.LN2;
	},

	distance: function (latlng1, latlng2) {
		var dx = latlng2.lng - latlng1.lng,
		    dy = latlng2.lat - latlng1.lat;

		return Math.sqrt(dx * dx + dy * dy);
	},

	infinite: true
});

CRS.Earth = Earth;
CRS.EPSG3395 = EPSG3395;
CRS.EPSG3857 = EPSG3857;
CRS.EPSG900913 = EPSG900913;
CRS.EPSG4326 = EPSG4326;
CRS.Simple = Simple;

/*
 * @class Layer
 * @inherits Evented
 * @aka L.Layer
 * @aka ILayer
 *
 * A set of methods from the Layer base class that all Leaflet layers use.
 * Inherits all methods, options and events from `L.Evented`.
 *
 * @example
 *
 * ```js
 * var layer = L.Marker(latlng).addTo(map);
 * layer.addTo(map);
 * layer.remove();
 * ```
 *
 * @event add: Event
 * Fired after the layer is added to a map
 *
 * @event remove: Event
 * Fired after the layer is removed from a map
 */


var Layer = Evented.extend({

	// Classes extending `L.Layer` will inherit the following options:
	options: {
		// @option pane: String = 'overlayPane'
		// By default the layer will be added to the map's [overlay pane](#map-overlaypane). Overriding this option will cause the layer to be placed on another pane by default.
		pane: 'overlayPane',

		// @option attribution: String = null
		// String to be shown in the attribution control, describes the layer data, e.g. "© Mapbox".
		attribution: null,

		bubblingMouseEvents: true
	},

	/* @section
	 * Classes extending `L.Layer` will inherit the following methods:
	 *
	 * @method addTo(map: Map|LayerGroup): this
	 * Adds the layer to the given map or layer group.
	 */
	addTo: function (map) {
		map.addLayer(this);
		return this;
	},

	// @method remove: this
	// Removes the layer from the map it is currently active on.
	remove: function () {
		return this.removeFrom(this._map || this._mapToAdd);
	},

	// @method removeFrom(map: Map): this
	// Removes the layer from the given map
	removeFrom: function (obj) {
		if (obj) {
			obj.removeLayer(this);
		}
		return this;
	},

	// @method getPane(name? : String): HTMLElement
	// Returns the `HTMLElement` representing the named pane on the map. If `name` is omitted, returns the pane for this layer.
	getPane: function (name) {
		return this._map.getPane(name ? (this.options[name] || name) : this.options.pane);
	},

	addInteractiveTarget: function (targetEl) {
		this._map._targets[stamp(targetEl)] = this;
		return this;
	},

	removeInteractiveTarget: function (targetEl) {
		delete this._map._targets[stamp(targetEl)];
		return this;
	},

	// @method getAttribution: String
	// Used by the `attribution control`, returns the [attribution option](#gridlayer-attribution).
	getAttribution: function () {
		return this.options.attribution;
	},

	_layerAdd: function (e) {
		var map = e.target;

		// check in case layer gets added and then removed before the map is ready
		if (!map.hasLayer(this)) { return; }

		this._map = map;
		this._zoomAnimated = map._zoomAnimated;

		if (this.getEvents) {
			var events = this.getEvents();
			map.on(events, this);
			this.once('remove', function () {
				map.off(events, this);
			}, this);
		}

		this.onAdd(map);

		if (this.getAttribution && map.attributionControl) {
			map.attributionControl.addAttribution(this.getAttribution());
		}

		this.fire('add');
		map.fire('layeradd', {layer: this});
	}
});

/* @section Extension methods
 * @uninheritable
 *
 * Every layer should extend from `L.Layer` and (re-)implement the following methods.
 *
 * @method onAdd(map: Map): this
 * Should contain code that creates DOM elements for the layer, adds them to `map panes` where they should belong and puts listeners on relevant map events. Called on [`map.addLayer(layer)`](#map-addlayer).
 *
 * @method onRemove(map: Map): this
 * Should contain all clean up code that removes the layer's elements from the DOM and removes listeners previously added in [`onAdd`](#layer-onadd). Called on [`map.removeLayer(layer)`](#map-removelayer).
 *
 * @method getEvents(): Object
 * This optional method should return an object like `{ viewreset: this._reset }` for [`addEventListener`](#evented-addeventlistener). The event handlers in this object will be automatically added and removed from the map with your layer.
 *
 * @method getAttribution(): String
 * This optional method should return a string containing HTML to be shown on the `Attribution control` whenever the layer is visible.
 *
 * @method beforeAdd(map: Map): this
 * Optional method. Called on [`map.addLayer(layer)`](#map-addlayer), before the layer is added to the map, before events are initialized, without waiting until the map is in a usable state. Use for early initialization only.
 */


/* @namespace Map
 * @section Layer events
 *
 * @event layeradd: LayerEvent
 * Fired when a new layer is added to the map.
 *
 * @event layerremove: LayerEvent
 * Fired when some layer is removed from the map
 *
 * @section Methods for Layers and Controls
 */
Map.include({
	// @method addLayer(layer: Layer): this
	// Adds the given layer to the map
	addLayer: function (layer) {
		if (!layer._layerAdd) {
			throw new Error('The provided object is not a Layer.');
		}

		var id = stamp(layer);
		if (this._layers[id]) { return this; }
		this._layers[id] = layer;

		layer._mapToAdd = this;

		if (layer.beforeAdd) {
			layer.beforeAdd(this);
		}

		this.whenReady(layer._layerAdd, layer);

		return this;
	},

	// @method removeLayer(layer: Layer): this
	// Removes the given layer from the map.
	removeLayer: function (layer) {
		var id = stamp(layer);

		if (!this._layers[id]) { return this; }

		if (this._loaded) {
			layer.onRemove(this);
		}

		if (layer.getAttribution && this.attributionControl) {
			this.attributionControl.removeAttribution(layer.getAttribution());
		}

		delete this._layers[id];

		if (this._loaded) {
			this.fire('layerremove', {layer: layer});
			layer.fire('remove');
		}

		layer._map = layer._mapToAdd = null;

		return this;
	},

	// @method hasLayer(layer: Layer): Boolean
	// Returns `true` if the given layer is currently added to the map
	hasLayer: function (layer) {
		return !!layer && (stamp(layer) in this._layers);
	},

	/* @method eachLayer(fn: Function, context?: Object): this
	 * Iterates over the layers of the map, optionally specifying context of the iterator function.
	 * ```
	 * map.eachLayer(function(layer){
	 *     layer.bindPopup('Hello');
	 * });
	 * ```
	 */
	eachLayer: function (method, context) {
		for (var i in this._layers) {
			method.call(context, this._layers[i]);
		}
		return this;
	},

	_addLayers: function (layers) {
		layers = layers ? (isArray(layers) ? layers : [layers]) : [];

		for (var i = 0, len = layers.length; i < len; i++) {
			this.addLayer(layers[i]);
		}
	},

	_addZoomLimit: function (layer) {
		if (isNaN(layer.options.maxZoom) || !isNaN(layer.options.minZoom)) {
			this._zoomBoundLayers[stamp(layer)] = layer;
			this._updateZoomLevels();
		}
	},

	_removeZoomLimit: function (layer) {
		var id = stamp(layer);

		if (this._zoomBoundLayers[id]) {
			delete this._zoomBoundLayers[id];
			this._updateZoomLevels();
		}
	},

	_updateZoomLevels: function () {
		var minZoom = Infinity,
		    maxZoom = -Infinity,
		    oldZoomSpan = this._getZoomSpan();

		for (var i in this._zoomBoundLayers) {
			var options = this._zoomBoundLayers[i].options;

			minZoom = options.minZoom === undefined ? minZoom : Math.min(minZoom, options.minZoom);
			maxZoom = options.maxZoom === undefined ? maxZoom : Math.max(maxZoom, options.maxZoom);
		}

		this._layersMaxZoom = maxZoom === -Infinity ? undefined : maxZoom;
		this._layersMinZoom = minZoom === Infinity ? undefined : minZoom;

		// @section Map state change events
		// @event zoomlevelschange: Event
		// Fired when the number of zoomlevels on the map is changed due
		// to adding or removing a layer.
		if (oldZoomSpan !== this._getZoomSpan()) {
			this.fire('zoomlevelschange');
		}

		if (this.options.maxZoom === undefined && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom) {
			this.setZoom(this._layersMaxZoom);
		}
		if (this.options.minZoom === undefined && this._layersMinZoom && this.getZoom() < this._layersMinZoom) {
			this.setZoom(this._layersMinZoom);
		}
	}
});

/*
 * @class LayerGroup
 * @aka L.LayerGroup
 * @inherits Layer
 *
 * Used to group several layers and handle them as one. If you add it to the map,
 * any layers added or removed from the group will be added/removed on the map as
 * well. Extends `Layer`.
 *
 * @example
 *
 * ```js
 * L.layerGroup([marker1, marker2])
 * 	.addLayer(polyline)
 * 	.addTo(map);
 * ```
 */

var LayerGroup = Layer.extend({

	initialize: function (layers) {
		this._layers = {};

		var i, len;

		if (layers) {
			for (i = 0, len = layers.length; i < len; i++) {
				this.addLayer(layers[i]);
			}
		}
	},

	// @method addLayer(layer: Layer): this
	// Adds the given layer to the group.
	addLayer: function (layer) {
		var id = this.getLayerId(layer);

		this._layers[id] = layer;

		if (this._map) {
			this._map.addLayer(layer);
		}

		return this;
	},

	// @method removeLayer(layer: Layer): this
	// Removes the given layer from the group.
	// @alternative
	// @method removeLayer(id: Number): this
	// Removes the layer with the given internal ID from the group.
	removeLayer: function (layer) {
		var id = layer in this._layers ? layer : this.getLayerId(layer);

		if (this._map && this._layers[id]) {
			this._map.removeLayer(this._layers[id]);
		}

		delete this._layers[id];

		return this;
	},

	// @method hasLayer(layer: Layer): Boolean
	// Returns `true` if the given layer is currently added to the group.
	// @alternative
	// @method hasLayer(id: Number): Boolean
	// Returns `true` if the given internal ID is currently added to the group.
	hasLayer: function (layer) {
		return !!layer && (layer in this._layers || this.getLayerId(layer) in this._layers);
	},

	// @method clearLayers(): this
	// Removes all the layers from the group.
	clearLayers: function () {
		for (var i in this._layers) {
			this.removeLayer(this._layers[i]);
		}
		return this;
	},

	// @method invoke(methodName: String, …): this
	// Calls `methodName` on every layer contained in this group, passing any
	// additional parameters. Has no effect if the layers contained do not
	// implement `methodName`.
	invoke: function (methodName) {
		var args = Array.prototype.slice.call(arguments, 1),
		    i, layer;

		for (i in this._layers) {
			layer = this._layers[i];

			if (layer[methodName]) {
				layer[methodName].apply(layer, args);
			}
		}

		return this;
	},

	onAdd: function (map) {
		for (var i in this._layers) {
			map.addLayer(this._layers[i]);
		}
	},

	onRemove: function (map) {
		for (var i in this._layers) {
			map.removeLayer(this._layers[i]);
		}
	},

	// @method eachLayer(fn: Function, context?: Object): this
	// Iterates over the layers of the group, optionally specifying context of the iterator function.
	// ```js
	// group.eachLayer(function (layer) {
	// 	layer.bindPopup('Hello');
	// });
	// ```
	eachLayer: function (method, context) {
		for (var i in this._layers) {
			method.call(context, this._layers[i]);
		}
		return this;
	},

	// @method getLayer(id: Number): Layer
	// Returns the layer with the given internal ID.
	getLayer: function (id) {
		return this._layers[id];
	},

	// @method getLayers(): Layer[]
	// Returns an array of all the layers added to the group.
	getLayers: function () {
		var layers = [];

		for (var i in this._layers) {
			layers.push(this._layers[i]);
		}
		return layers;
	},

	// @method setZIndex(zIndex: Number): this
	// Calls `setZIndex` on every layer contained in this group, passing the z-index.
	setZIndex: function (zIndex) {
		return this.invoke('setZIndex', zIndex);
	},

	// @method getLayerId(layer: Layer): Number
	// Returns the internal ID for a layer
	getLayerId: function (layer) {
		return stamp(layer);
	}
});


// @factory L.layerGroup(layers?: Layer[])
// Create a layer group, optionally given an initial set of layers.
var layerGroup = function (layers) {
	return new LayerGroup(layers);
};

/*
 * @class FeatureGroup
 * @aka L.FeatureGroup
 * @inherits LayerGroup
 *
 * Extended `LayerGroup` that makes it easier to do the same thing to all its member layers:
 *  * [`bindPopup`](#layer-bindpopup) binds a popup to all of the layers at once (likewise with [`bindTooltip`](#layer-bindtooltip))
 *  * Events are propagated to the `FeatureGroup`, so if the group has an event
 * handler, it will handle events from any of the layers. This includes mouse events
 * and custom events.
 *  * Has `layeradd` and `layerremove` events
 *
 * @example
 *
 * ```js
 * L.featureGroup([marker1, marker2, polyline])
 * 	.bindPopup('Hello world!')
 * 	.on('click', function() { alert('Clicked on a member of the group!'); })
 * 	.addTo(map);
 * ```
 */

var FeatureGroup = LayerGroup.extend({

	addLayer: function (layer) {
		if (this.hasLayer(layer)) {
			return this;
		}

		layer.addEventParent(this);

		LayerGroup.prototype.addLayer.call(this, layer);

		// @event layeradd: LayerEvent
		// Fired when a layer is added to this `FeatureGroup`
		return this.fire('layeradd', {layer: layer});
	},

	removeLayer: function (layer) {
		if (!this.hasLayer(layer)) {
			return this;
		}
		if (layer in this._layers) {
			layer = this._layers[layer];
		}

		layer.removeEventParent(this);

		LayerGroup.prototype.removeLayer.call(this, layer);

		// @event layerremove: LayerEvent
		// Fired when a layer is removed from this `FeatureGroup`
		return this.fire('layerremove', {layer: layer});
	},

	// @method setStyle(style: Path options): this
	// Sets the given path options to each layer of the group that has a `setStyle` method.
	setStyle: function (style) {
		return this.invoke('setStyle', style);
	},

	// @method bringToFront(): this
	// Brings the layer group to the top of all other layers
	bringToFront: function () {
		return this.invoke('bringToFront');
	},

	// @method bringToBack(): this
	// Brings the layer group to the top of all other layers
	bringToBack: function () {
		return this.invoke('bringToBack');
	},

	// @method getBounds(): LatLngBounds
	// Returns the LatLngBounds of the Feature Group (created from bounds and coordinates of its children).
	getBounds: function () {
		var bounds = new LatLngBounds();

		for (var id in this._layers) {
			var layer = this._layers[id];
			bounds.extend(layer.getBounds ? layer.getBounds() : layer.getLatLng());
		}
		return bounds;
	}
});

// @factory L.featureGroup(layers: Layer[])
// Create a feature group, optionally given an initial set of layers.
var featureGroup = function (layers) {
	return new FeatureGroup(layers);
};

/*
 * @class Icon
 * @aka L.Icon
 *
 * Represents an icon to provide when creating a marker.
 *
 * @example
 *
 * ```js
 * var myIcon = L.icon({
 *     iconUrl: 'my-icon.png',
 *     iconRetinaUrl: 'my-icon@2x.png',
 *     iconSize: [38, 95],
 *     iconAnchor: [22, 94],
 *     popupAnchor: [-3, -76],
 *     shadowUrl: 'my-icon-shadow.png',
 *     shadowRetinaUrl: 'my-icon-shadow@2x.png',
 *     shadowSize: [68, 95],
 *     shadowAnchor: [22, 94]
 * });
 *
 * L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);
 * ```
 *
 * `L.Icon.Default` extends `L.Icon` and is the blue icon Leaflet uses for markers by default.
 *
 */

var Icon = Class.extend({

	/* @section
	 * @aka Icon options
	 *
	 * @option iconUrl: String = null
	 * **(required)** The URL to the icon image (absolute or relative to your script path).
	 *
	 * @option iconRetinaUrl: String = null
	 * The URL to a retina sized version of the icon image (absolute or relative to your
	 * script path). Used for Retina screen devices.
	 *
	 * @option iconSize: Point = null
	 * Size of the icon image in pixels.
	 *
	 * @option iconAnchor: Point = null
	 * The coordinates of the "tip" of the icon (relative to its top left corner). The icon
	 * will be aligned so that this point is at the marker's geographical location. Centered
	 * by default if size is specified, also can be set in CSS with negative margins.
	 *
	 * @option popupAnchor: Point = null
	 * The coordinates of the point from which popups will "open", relative to the icon anchor.
	 *
	 * @option shadowUrl: String = null
	 * The URL to the icon shadow image. If not specified, no shadow image will be created.
	 *
	 * @option shadowRetinaUrl: String = null
	 *
	 * @option shadowSize: Point = null
	 * Size of the shadow image in pixels.
	 *
	 * @option shadowAnchor: Point = null
	 * The coordinates of the "tip" of the shadow (relative to its top left corner) (the same
	 * as iconAnchor if not specified).
	 *
	 * @option className: String = ''
	 * A custom class name to assign to both icon and shadow images. Empty by default.
	 */

	initialize: function (options) {
		setOptions(this, options);
	},

	// @method createIcon(oldIcon?: HTMLElement): HTMLElement
	// Called internally when the icon has to be shown, returns a `<img>` HTML element
	// styled according to the options.
	createIcon: function (oldIcon) {
		return this._createIcon('icon', oldIcon);
	},

	// @method createShadow(oldIcon?: HTMLElement): HTMLElement
	// As `createIcon`, but for the shadow beneath it.
	createShadow: function (oldIcon) {
		return this._createIcon('shadow', oldIcon);
	},

	_createIcon: function (name, oldIcon) {
		var src = this._getIconUrl(name);

		if (!src) {
			if (name === 'icon') {
				throw new Error('iconUrl not set in Icon options (see the docs).');
			}
			return null;
		}

		var img = this._createImg(src, oldIcon && oldIcon.tagName === 'IMG' ? oldIcon : null);
		this._setIconStyles(img, name);

		return img;
	},

	_setIconStyles: function (img, name) {
		var options = this.options;
		var sizeOption = options[name + 'Size'];

		if (typeof sizeOption === 'number') {
			sizeOption = [sizeOption, sizeOption];
		}

		var size = toPoint(sizeOption),
		    anchor = toPoint(name === 'shadow' && options.shadowAnchor || options.iconAnchor ||
		            size && size.divideBy(2, true));

		img.className = 'leaflet-marker-' + name + ' ' + (options.className || '');

		if (anchor) {
			img.style.marginLeft = (-anchor.x) + 'px';
			img.style.marginTop  = (-anchor.y) + 'px';
		}

		if (size) {
			img.style.width  = size.x + 'px';
			img.style.height = size.y + 'px';
		}
	},

	_createImg: function (src, el) {
		el = el || document.createElement('img');
		el.src = src;
		return el;
	},

	_getIconUrl: function (name) {
		return retina && this.options[name + 'RetinaUrl'] || this.options[name + 'Url'];
	}
});


// @factory L.icon(options: Icon options)
// Creates an icon instance with the given options.
function icon(options) {
	return new Icon(options);
}

/*
 * @miniclass Icon.Default (Icon)
 * @aka L.Icon.Default
 * @section
 *
 * A trivial subclass of `Icon`, represents the icon to use in `Marker`s when
 * no icon is specified. Points to the blue marker image distributed with Leaflet
 * releases.
 *
 * In order to customize the default icon, just change the properties of `L.Icon.Default.prototype.options`
 * (which is a set of `Icon options`).
 *
 * If you want to _completely_ replace the default icon, override the
 * `L.Marker.prototype.options.icon` with your own icon instead.
 */

var IconDefault = Icon.extend({

	options: {
		iconUrl:       'marker-icon.png',
		iconRetinaUrl: 'marker-icon-2x.png',
		shadowUrl:     'marker-shadow.png',
		iconSize:    [25, 41],
		iconAnchor:  [12, 41],
		popupAnchor: [1, -34],
		tooltipAnchor: [16, -28],
		shadowSize:  [41, 41]
	},

	_getIconUrl: function (name) {
		if (!IconDefault.imagePath) {	// Deprecated, backwards-compatibility only
			IconDefault.imagePath = this._detectIconPath();
		}

		// @option imagePath: String
		// `Icon.Default` will try to auto-detect the absolute location of the
		// blue icon images. If you are placing these images in a non-standard
		// way, set this option to point to the right absolute path.
		return (this.options.imagePath || IconDefault.imagePath) + Icon.prototype._getIconUrl.call(this, name);
	},

	_detectIconPath: function () {
		var el = create$1('div',  'leaflet-default-icon-path', document.body);
		var path = getStyle(el, 'background-image') ||
		           getStyle(el, 'backgroundImage');	// IE8

		document.body.removeChild(el);

		if (path === null || path.indexOf('url') !== 0) {
			path = '';
		} else {
			path = path.replace(/^url\([\"\']?/, '').replace(/marker-icon\.png[\"\']?\)$/, '');
		}

		return path;
	}
});

/*
 * L.Handler.MarkerDrag is used internally by L.Marker to make the markers draggable.
 */


/* @namespace Marker
 * @section Interaction handlers
 *
 * Interaction handlers are properties of a marker instance that allow you to control interaction behavior in runtime, enabling or disabling certain features such as dragging (see `Handler` methods). Example:
 *
 * ```js
 * marker.dragging.disable();
 * ```
 *
 * @property dragging: Handler
 * Marker dragging handler (by both mouse and touch). Only valid when the marker is on the map (Otherwise set [`marker.options.draggable`](#marker-draggable)).
 */

var MarkerDrag = Handler.extend({
	initialize: function (marker) {
		this._marker = marker;
	},

	addHooks: function () {
		var icon = this._marker._icon;

		if (!this._draggable) {
			this._draggable = new Draggable(icon, icon, true);
		}

		this._draggable.on({
			dragstart: this._onDragStart,
			drag: this._onDrag,
			dragend: this._onDragEnd
		}, this).enable();

		addClass(icon, 'leaflet-marker-draggable');
	},

	removeHooks: function () {
		this._draggable.off({
			dragstart: this._onDragStart,
			drag: this._onDrag,
			dragend: this._onDragEnd
		}, this).disable();

		if (this._marker._icon) {
			removeClass(this._marker._icon, 'leaflet-marker-draggable');
		}
	},

	moved: function () {
		return this._draggable && this._draggable._moved;
	},

	_onDragStart: function () {
		// @section Dragging events
		// @event dragstart: Event
		// Fired when the user starts dragging the marker.

		// @event movestart: Event
		// Fired when the marker starts moving (because of dragging).

		this._oldLatLng = this._marker.getLatLng();
		this._marker
		    .closePopup()
		    .fire('movestart')
		    .fire('dragstart');
	},

	_onDrag: function (e) {
		var marker = this._marker,
		    shadow = marker._shadow,
		iconPos = getPosition(marker._icon),
		    latlng = marker._map.layerPointToLatLng(iconPos);

		// update shadow position
		if (shadow) {
			setPosition(shadow, iconPos);
		}

		marker._latlng = latlng;
		e.latlng = latlng;
		e.oldLatLng = this._oldLatLng;

		// @event drag: Event
		// Fired repeatedly while the user drags the marker.
		marker
		    .fire('move', e)
		    .fire('drag', e);
	},

	_onDragEnd: function (e) {
		// @event dragend: DragEndEvent
		// Fired when the user stops dragging the marker.

		// @event moveend: Event
		// Fired when the marker stops moving (because of dragging).
		delete this._oldLatLng;
		this._marker
		    .fire('moveend')
		    .fire('dragend', e);
	}
});

/*
 * @class Marker
 * @inherits Interactive layer
 * @aka L.Marker
 * L.Marker is used to display clickable/draggable icons on the map. Extends `Layer`.
 *
 * @example
 *
 * ```js
 * L.marker([50.5, 30.5]).addTo(map);
 * ```
 */

var Marker = Layer.extend({

	// @section
	// @aka Marker options
	options: {
		// @option icon: Icon = *
		// Icon instance to use for rendering the marker.
		// See [Icon documentation](#L.Icon) for details on how to customize the marker icon.
		// If not specified, a common instance of `L.Icon.Default` is used.
		icon: new IconDefault(),

		// Option inherited from "Interactive layer" abstract class
		interactive: true,

		// @option draggable: Boolean = false
		// Whether the marker is draggable with mouse/touch or not.
		draggable: false,

		// @option keyboard: Boolean = true
		// Whether the marker can be tabbed to with a keyboard and clicked by pressing enter.
		keyboard: true,

		// @option title: String = ''
		// Text for the browser tooltip that appear on marker hover (no tooltip by default).
		title: '',

		// @option alt: String = ''
		// Text for the `alt` attribute of the icon image (useful for accessibility).
		alt: '',

		// @option zIndexOffset: Number = 0
		// By default, marker images zIndex is set automatically based on its latitude. Use this option if you want to put the marker on top of all others (or below), specifying a high value like `1000` (or high negative value, respectively).
		zIndexOffset: 0,

		// @option opacity: Number = 1.0
		// The opacity of the marker.
		opacity: 1,

		// @option riseOnHover: Boolean = false
		// If `true`, the marker will get on top of others when you hover the mouse over it.
		riseOnHover: false,

		// @option riseOffset: Number = 250
		// The z-index offset used for the `riseOnHover` feature.
		riseOffset: 250,

		// @option pane: String = 'markerPane'
		// `Map pane` where the markers icon will be added.
		pane: 'markerPane',

		// @option bubblingMouseEvents: Boolean = false
		// When `true`, a mouse event on this marker will trigger the same event on the map
		// (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
		bubblingMouseEvents: false
	},

	/* @section
	 *
	 * In addition to [shared layer methods](#Layer) like `addTo()` and `remove()` and [popup methods](#Popup) like bindPopup() you can also use the following methods:
	 */

	initialize: function (latlng, options) {
		setOptions(this, options);
		this._latlng = toLatLng(latlng);
	},

	onAdd: function (map) {
		this._zoomAnimated = this._zoomAnimated && map.options.markerZoomAnimation;

		if (this._zoomAnimated) {
			map.on('zoomanim', this._animateZoom, this);
		}

		this._initIcon();
		this.update();
	},

	onRemove: function (map) {
		if (this.dragging && this.dragging.enabled()) {
			this.options.draggable = true;
			this.dragging.removeHooks();
		}
		delete this.dragging;

		if (this._zoomAnimated) {
			map.off('zoomanim', this._animateZoom, this);
		}

		this._removeIcon();
		this._removeShadow();
	},

	getEvents: function () {
		return {
			zoom: this.update,
			viewreset: this.update
		};
	},

	// @method getLatLng: LatLng
	// Returns the current geographical position of the marker.
	getLatLng: function () {
		return this._latlng;
	},

	// @method setLatLng(latlng: LatLng): this
	// Changes the marker position to the given point.
	setLatLng: function (latlng) {
		var oldLatLng = this._latlng;
		this._latlng = toLatLng(latlng);
		this.update();

		// @event move: Event
		// Fired when the marker is moved via [`setLatLng`](#marker-setlatlng) or by [dragging](#marker-dragging). Old and new coordinates are included in event arguments as `oldLatLng`, `latlng`.
		return this.fire('move', {oldLatLng: oldLatLng, latlng: this._latlng});
	},

	// @method setZIndexOffset(offset: Number): this
	// Changes the [zIndex offset](#marker-zindexoffset) of the marker.
	setZIndexOffset: function (offset) {
		this.options.zIndexOffset = offset;
		return this.update();
	},

	// @method setIcon(icon: Icon): this
	// Changes the marker icon.
	setIcon: function (icon) {

		this.options.icon = icon;

		if (this._map) {
			this._initIcon();
			this.update();
		}

		if (this._popup) {
			this.bindPopup(this._popup, this._popup.options);
		}

		return this;
	},

	getElement: function () {
		return this._icon;
	},

	update: function () {

		if (this._icon) {
			var pos = this._map.latLngToLayerPoint(this._latlng).round();
			this._setPos(pos);
		}

		return this;
	},

	_initIcon: function () {
		var options = this.options,
		    classToAdd = 'leaflet-zoom-' + (this._zoomAnimated ? 'animated' : 'hide');

		var icon = options.icon.createIcon(this._icon),
		    addIcon = false;

		// if we're not reusing the icon, remove the old one and init new one
		if (icon !== this._icon) {
			if (this._icon) {
				this._removeIcon();
			}
			addIcon = true;

			if (options.title) {
				icon.title = options.title;
			}
			if (options.alt) {
				icon.alt = options.alt;
			}
		}

		addClass(icon, classToAdd);

		if (options.keyboard) {
			icon.tabIndex = '0';
		}

		this._icon = icon;

		if (options.riseOnHover) {
			this.on({
				mouseover: this._bringToFront,
				mouseout: this._resetZIndex
			});
		}

		var newShadow = options.icon.createShadow(this._shadow),
		    addShadow = false;

		if (newShadow !== this._shadow) {
			this._removeShadow();
			addShadow = true;
		}

		if (newShadow) {
			addClass(newShadow, classToAdd);
			newShadow.alt = '';
		}
		this._shadow = newShadow;


		if (options.opacity < 1) {
			this._updateOpacity();
		}


		if (addIcon) {
			this.getPane().appendChild(this._icon);
		}
		this._initInteraction();
		if (newShadow && addShadow) {
			this.getPane('shadowPane').appendChild(this._shadow);
		}
	},

	_removeIcon: function () {
		if (this.options.riseOnHover) {
			this.off({
				mouseover: this._bringToFront,
				mouseout: this._resetZIndex
			});
		}

		remove(this._icon);
		this.removeInteractiveTarget(this._icon);

		this._icon = null;
	},

	_removeShadow: function () {
		if (this._shadow) {
			remove(this._shadow);
		}
		this._shadow = null;
	},

	_setPos: function (pos) {
		setPosition(this._icon, pos);

		if (this._shadow) {
			setPosition(this._shadow, pos);
		}

		this._zIndex = pos.y + this.options.zIndexOffset;

		this._resetZIndex();
	},

	_updateZIndex: function (offset) {
		this._icon.style.zIndex = this._zIndex + offset;
	},

	_animateZoom: function (opt) {
		var pos = this._map._latLngToNewLayerPoint(this._latlng, opt.zoom, opt.center).round();

		this._setPos(pos);
	},

	_initInteraction: function () {

		if (!this.options.interactive) { return; }

		addClass(this._icon, 'leaflet-interactive');

		this.addInteractiveTarget(this._icon);

		if (MarkerDrag) {
			var draggable = this.options.draggable;
			if (this.dragging) {
				draggable = this.dragging.enabled();
				this.dragging.disable();
			}

			this.dragging = new MarkerDrag(this);

			if (draggable) {
				this.dragging.enable();
			}
		}
	},

	// @method setOpacity(opacity: Number): this
	// Changes the opacity of the marker.
	setOpacity: function (opacity) {
		this.options.opacity = opacity;
		if (this._map) {
			this._updateOpacity();
		}

		return this;
	},

	_updateOpacity: function () {
		var opacity = this.options.opacity;

		setOpacity(this._icon, opacity);

		if (this._shadow) {
			setOpacity(this._shadow, opacity);
		}
	},

	_bringToFront: function () {
		this._updateZIndex(this.options.riseOffset);
	},

	_resetZIndex: function () {
		this._updateZIndex(0);
	},

	_getPopupAnchor: function () {
		return this.options.icon.options.popupAnchor || [0, 0];
	},

	_getTooltipAnchor: function () {
		return this.options.icon.options.tooltipAnchor || [0, 0];
	}
});


// factory L.marker(latlng: LatLng, options? : Marker options)

// @factory L.marker(latlng: LatLng, options? : Marker options)
// Instantiates a Marker object given a geographical point and optionally an options object.
function marker(latlng, options) {
	return new Marker(latlng, options);
}

/*
 * @class Path
 * @aka L.Path
 * @inherits Interactive layer
 *
 * An abstract class that contains options and constants shared between vector
 * overlays (Polygon, Polyline, Circle). Do not use it directly. Extends `Layer`.
 */

var Path = Layer.extend({

	// @section
	// @aka Path options
	options: {
		// @option stroke: Boolean = true
		// Whether to draw stroke along the path. Set it to `false` to disable borders on polygons or circles.
		stroke: true,

		// @option color: String = '#3388ff'
		// Stroke color
		color: '#3388ff',

		// @option weight: Number = 3
		// Stroke width in pixels
		weight: 3,

		// @option opacity: Number = 1.0
		// Stroke opacity
		opacity: 1,

		// @option lineCap: String= 'round'
		// A string that defines [shape to be used at the end](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap) of the stroke.
		lineCap: 'round',

		// @option lineJoin: String = 'round'
		// A string that defines [shape to be used at the corners](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linejoin) of the stroke.
		lineJoin: 'round',

		// @option dashArray: String = null
		// A string that defines the stroke [dash pattern](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dasharray). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
		dashArray: null,

		// @option dashOffset: String = null
		// A string that defines the [distance into the dash pattern to start the dash](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dashoffset). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
		dashOffset: null,

		// @option fill: Boolean = depends
		// Whether to fill the path with color. Set it to `false` to disable filling on polygons or circles.
		fill: false,

		// @option fillColor: String = *
		// Fill color. Defaults to the value of the [`color`](#path-color) option
		fillColor: null,

		// @option fillOpacity: Number = 0.2
		// Fill opacity.
		fillOpacity: 0.2,

		// @option fillRule: String = 'evenodd'
		// A string that defines [how the inside of a shape](https://developer.mozilla.org/docs/Web/SVG/Attribute/fill-rule) is determined.
		fillRule: 'evenodd',

		// className: '',

		// Option inherited from "Interactive layer" abstract class
		interactive: true,

		// @option bubblingMouseEvents: Boolean = true
		// When `true`, a mouse event on this path will trigger the same event on the map
		// (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
		bubblingMouseEvents: true
	},

	beforeAdd: function (map) {
		// Renderer is set here because we need to call renderer.getEvents
		// before this.getEvents.
		this._renderer = map.getRenderer(this);
	},

	onAdd: function () {
		this._renderer._initPath(this);
		this._reset();
		this._renderer._addPath(this);
	},

	onRemove: function () {
		this._renderer._removePath(this);
	},

	// @method redraw(): this
	// Redraws the layer. Sometimes useful after you changed the coordinates that the path uses.
	redraw: function () {
		if (this._map) {
			this._renderer._updatePath(this);
		}
		return this;
	},

	// @method setStyle(style: Path options): this
	// Changes the appearance of a Path based on the options in the `Path options` object.
	setStyle: function (style) {
		setOptions(this, style);
		if (this._renderer) {
			this._renderer._updateStyle(this);
		}
		return this;
	},

	// @method bringToFront(): this
	// Brings the layer to the top of all path layers.
	bringToFront: function () {
		if (this._renderer) {
			this._renderer._bringToFront(this);
		}
		return this;
	},

	// @method bringToBack(): this
	// Brings the layer to the bottom of all path layers.
	bringToBack: function () {
		if (this._renderer) {
			this._renderer._bringToBack(this);
		}
		return this;
	},

	getElement: function () {
		return this._path;
	},

	_reset: function () {
		// defined in child classes
		this._project();
		this._update();
	},

	_clickTolerance: function () {
		// used when doing hit detection for Canvas layers
		return (this.options.stroke ? this.options.weight / 2 : 0) + (touch ? 10 : 0);
	}
});

/*
 * @class CircleMarker
 * @aka L.CircleMarker
 * @inherits Path
 *
 * A circle of a fixed size with radius specified in pixels. Extends `Path`.
 */

var CircleMarker = Path.extend({

	// @section
	// @aka CircleMarker options
	options: {
		fill: true,

		// @option radius: Number = 10
		// Radius of the circle marker, in pixels
		radius: 10
	},

	initialize: function (latlng, options) {
		setOptions(this, options);
		this._latlng = toLatLng(latlng);
		this._radius = this.options.radius;
	},

	// @method setLatLng(latLng: LatLng): this
	// Sets the position of a circle marker to a new location.
	setLatLng: function (latlng) {
		this._latlng = toLatLng(latlng);
		this.redraw();
		return this.fire('move', {latlng: this._latlng});
	},

	// @method getLatLng(): LatLng
	// Returns the current geographical position of the circle marker
	getLatLng: function () {
		return this._latlng;
	},

	// @method setRadius(radius: Number): this
	// Sets the radius of a circle marker. Units are in pixels.
	setRadius: function (radius) {
		this.options.radius = this._radius = radius;
		return this.redraw();
	},

	// @method getRadius(): Number
	// Returns the current radius of the circle
	getRadius: function () {
		return this._radius;
	},

	setStyle : function (options) {
		var radius = options && options.radius || this._radius;
		Path.prototype.setStyle.call(this, options);
		this.setRadius(radius);
		return this;
	},

	_project: function () {
		this._point = this._map.latLngToLayerPoint(this._latlng);
		this._updateBounds();
	},

	_updateBounds: function () {
		var r = this._radius,
		    r2 = this._radiusY || r,
		    w = this._clickTolerance(),
		    p = [r + w, r2 + w];
		this._pxBounds = new Bounds(this._point.subtract(p), this._point.add(p));
	},

	_update: function () {
		if (this._map) {
			this._updatePath();
		}
	},

	_updatePath: function () {
		this._renderer._updateCircle(this);
	},

	_empty: function () {
		return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
	},

	// Needed by the `Canvas` renderer for interactivity
	_containsPoint: function (p) {
		return p.distanceTo(this._point) <= this._radius + this._clickTolerance();
	}
});


// @factory L.circleMarker(latlng: LatLng, options?: CircleMarker options)
// Instantiates a circle marker object given a geographical point, and an optional options object.
function circleMarker(latlng, options) {
	return new CircleMarker(latlng, options);
}

/*
 * @class Circle
 * @aka L.Circle
 * @inherits CircleMarker
 *
 * A class for drawing circle overlays on a map. Extends `CircleMarker`.
 *
 * It's an approximation and starts to diverge from a real circle closer to poles (due to projection distortion).
 *
 * @example
 *
 * ```js
 * L.circle([50.5, 30.5], {radius: 200}).addTo(map);
 * ```
 */

var Circle = CircleMarker.extend({

	initialize: function (latlng, options, legacyOptions) {
		if (typeof options === 'number') {
			// Backwards compatibility with 0.7.x factory (latlng, radius, options?)
			options = extend({}, legacyOptions, {radius: options});
		}
		setOptions(this, options);
		this._latlng = toLatLng(latlng);

		if (isNaN(this.options.radius)) { throw new Error('Circle radius cannot be NaN'); }

		// @section
		// @aka Circle options
		// @option radius: Number; Radius of the circle, in meters.
		this._mRadius = this.options.radius;
	},

	// @method setRadius(radius: Number): this
	// Sets the radius of a circle. Units are in meters.
	setRadius: function (radius) {
		this._mRadius = radius;
		return this.redraw();
	},

	// @method getRadius(): Number
	// Returns the current radius of a circle. Units are in meters.
	getRadius: function () {
		return this._mRadius;
	},

	// @method getBounds(): LatLngBounds
	// Returns the `LatLngBounds` of the path.
	getBounds: function () {
		var half = [this._radius, this._radiusY || this._radius];

		return new LatLngBounds(
			this._map.layerPointToLatLng(this._point.subtract(half)),
			this._map.layerPointToLatLng(this._point.add(half)));
	},

	setStyle: Path.prototype.setStyle,

	_project: function () {

		var lng = this._latlng.lng,
		    lat = this._latlng.lat,
		    map = this._map,
		    crs = map.options.crs;

		if (crs.distance === Earth.distance) {
			var d = Math.PI / 180,
			    latR = (this._mRadius / Earth.R) / d,
			    top = map.project([lat + latR, lng]),
			    bottom = map.project([lat - latR, lng]),
			    p = top.add(bottom).divideBy(2),
			    lat2 = map.unproject(p).lat,
			    lngR = Math.acos((Math.cos(latR * d) - Math.sin(lat * d) * Math.sin(lat2 * d)) /
			            (Math.cos(lat * d) * Math.cos(lat2 * d))) / d;

			if (isNaN(lngR) || lngR === 0) {
				lngR = latR / Math.cos(Math.PI / 180 * lat); // Fallback for edge case, #2425
			}

			this._point = p.subtract(map.getPixelOrigin());
			this._radius = isNaN(lngR) ? 0 : Math.max(Math.round(p.x - map.project([lat2, lng - lngR]).x), 1);
			this._radiusY = Math.max(Math.round(p.y - top.y), 1);

		} else {
			var latlng2 = crs.unproject(crs.project(this._latlng).subtract([this._mRadius, 0]));

			this._point = map.latLngToLayerPoint(this._latlng);
			this._radius = this._point.x - map.latLngToLayerPoint(latlng2).x;
		}

		this._updateBounds();
	}
});

// @factory L.circle(latlng: LatLng, options?: Circle options)
// Instantiates a circle object given a geographical point, and an options object
// which contains the circle radius.
// @alternative
// @factory L.circle(latlng: LatLng, radius: Number, options?: Circle options)
// Obsolete way of instantiating a circle, for compatibility with 0.7.x code.
// Do not use in new applications or plugins.
function circle(latlng, options, legacyOptions) {
	return new Circle(latlng, options, legacyOptions);
}

/*
 * @class Polyline
 * @aka L.Polyline
 * @inherits Path
 *
 * A class for drawing polyline overlays on a map. Extends `Path`.
 *
 * @example
 *
 * ```js
 * // create a red polyline from an array of LatLng points
 * var latlngs = [
 * 	[45.51, -122.68],
 * 	[37.77, -122.43],
 * 	[34.04, -118.2]
 * ];
 *
 * var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);
 *
 * // zoom the map to the polyline
 * map.fitBounds(polyline.getBounds());
 * ```
 *
 * You can also pass a multi-dimensional array to represent a `MultiPolyline` shape:
 *
 * ```js
 * // create a red polyline from an array of arrays of LatLng points
 * var latlngs = [
 * 	[[45.51, -122.68],
 * 	 [37.77, -122.43],
 * 	 [34.04, -118.2]],
 * 	[[40.78, -73.91],
 * 	 [41.83, -87.62],
 * 	 [32.76, -96.72]]
 * ];
 * ```
 */


var Polyline = Path.extend({

	// @section
	// @aka Polyline options
	options: {
		// @option smoothFactor: Number = 1.0
		// How much to simplify the polyline on each zoom level. More means
		// better performance and smoother look, and less means more accurate representation.
		smoothFactor: 1.0,

		// @option noClip: Boolean = false
		// Disable polyline clipping.
		noClip: false
	},

	initialize: function (latlngs, options) {
		setOptions(this, options);
		this._setLatLngs(latlngs);
	},

	// @method getLatLngs(): LatLng[]
	// Returns an array of the points in the path, or nested arrays of points in case of multi-polyline.
	getLatLngs: function () {
		return this._latlngs;
	},

	// @method setLatLngs(latlngs: LatLng[]): this
	// Replaces all the points in the polyline with the given array of geographical points.
	setLatLngs: function (latlngs) {
		this._setLatLngs(latlngs);
		return this.redraw();
	},

	// @method isEmpty(): Boolean
	// Returns `true` if the Polyline has no LatLngs.
	isEmpty: function () {
		return !this._latlngs.length;
	},

	closestLayerPoint: function (p) {
		var minDistance = Infinity,
		    minPoint = null,
		    closest = _sqClosestPointOnSegment,
		    p1, p2;

		for (var j = 0, jLen = this._parts.length; j < jLen; j++) {
			var points = this._parts[j];

			for (var i = 1, len = points.length; i < len; i++) {
				p1 = points[i - 1];
				p2 = points[i];

				var sqDist = closest(p, p1, p2, true);

				if (sqDist < minDistance) {
					minDistance = sqDist;
					minPoint = closest(p, p1, p2);
				}
			}
		}
		if (minPoint) {
			minPoint.distance = Math.sqrt(minDistance);
		}
		return minPoint;
	},

	// @method getCenter(): LatLng
	// Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the polyline.
	getCenter: function () {
		// throws error when not yet added to map as this center calculation requires projected coordinates
		if (!this._map) {
			throw new Error('Must add layer to map before using getCenter()');
		}

		var i, halfDist, segDist, dist, p1, p2, ratio,
		    points = this._rings[0],
		    len = points.length;

		if (!len) { return null; }

		// polyline centroid algorithm; only uses the first ring if there are multiple

		for (i = 0, halfDist = 0; i < len - 1; i++) {
			halfDist += points[i].distanceTo(points[i + 1]) / 2;
		}

		// The line is so small in the current view that all points are on the same pixel.
		if (halfDist === 0) {
			return this._map.layerPointToLatLng(points[0]);
		}

		for (i = 0, dist = 0; i < len - 1; i++) {
			p1 = points[i];
			p2 = points[i + 1];
			segDist = p1.distanceTo(p2);
			dist += segDist;

			if (dist > halfDist) {
				ratio = (dist - halfDist) / segDist;
				return this._map.layerPointToLatLng([
					p2.x - ratio * (p2.x - p1.x),
					p2.y - ratio * (p2.y - p1.y)
				]);
			}
		}
	},

	// @method getBounds(): LatLngBounds
	// Returns the `LatLngBounds` of the path.
	getBounds: function () {
		return this._bounds;
	},

	// @method addLatLng(latlng: LatLng, latlngs? LatLng[]): this
	// Adds a given point to the polyline. By default, adds to the first ring of
	// the polyline in case of a multi-polyline, but can be overridden by passing
	// a specific ring as a LatLng array (that you can earlier access with [`getLatLngs`](#polyline-getlatlngs)).
	addLatLng: function (latlng, latlngs) {
		latlngs = latlngs || this._defaultShape();
		latlng = toLatLng(latlng);
		latlngs.push(latlng);
		this._bounds.extend(latlng);
		return this.redraw();
	},

	_setLatLngs: function (latlngs) {
		this._bounds = new LatLngBounds();
		this._latlngs = this._convertLatLngs(latlngs);
	},

	_defaultShape: function () {
		return isFlat(this._latlngs) ? this._latlngs : this._latlngs[0];
	},

	// recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
	_convertLatLngs: function (latlngs) {
		var result = [],
		    flat = isFlat(latlngs);

		for (var i = 0, len = latlngs.length; i < len; i++) {
			if (flat) {
				result[i] = toLatLng(latlngs[i]);
				this._bounds.extend(result[i]);
			} else {
				result[i] = this._convertLatLngs(latlngs[i]);
			}
		}

		return result;
	},

	_project: function () {
		var pxBounds = new Bounds();
		this._rings = [];
		this._projectLatlngs(this._latlngs, this._rings, pxBounds);

		var w = this._clickTolerance(),
		    p = new Point(w, w);

		if (this._bounds.isValid() && pxBounds.isValid()) {
			pxBounds.min._subtract(p);
			pxBounds.max._add(p);
			this._pxBounds = pxBounds;
		}
	},

	// recursively turns latlngs into a set of rings with projected coordinates
	_projectLatlngs: function (latlngs, result, projectedBounds) {
		var flat = latlngs[0] instanceof LatLng,
		    len = latlngs.length,
		    i, ring;

		if (flat) {
			ring = [];
			for (i = 0; i < len; i++) {
				ring[i] = this._map.latLngToLayerPoint(latlngs[i]);
				projectedBounds.extend(ring[i]);
			}
			result.push(ring);
		} else {
			for (i = 0; i < len; i++) {
				this._projectLatlngs(latlngs[i], result, projectedBounds);
			}
		}
	},

	// clip polyline by renderer bounds so that we have less to render for performance
	_clipPoints: function () {
		var bounds = this._renderer._bounds;

		this._parts = [];
		if (!this._pxBounds || !this._pxBounds.intersects(bounds)) {
			return;
		}

		if (this.options.noClip) {
			this._parts = this._rings;
			return;
		}

		var parts = this._parts,
		    i, j, k, len, len2, segment, points;

		for (i = 0, k = 0, len = this._rings.length; i < len; i++) {
			points = this._rings[i];

			for (j = 0, len2 = points.length; j < len2 - 1; j++) {
				segment = clipSegment(points[j], points[j + 1], bounds, j, true);

				if (!segment) { continue; }

				parts[k] = parts[k] || [];
				parts[k].push(segment[0]);

				// if segment goes out of screen, or it's the last one, it's the end of the line part
				if ((segment[1] !== points[j + 1]) || (j === len2 - 2)) {
					parts[k].push(segment[1]);
					k++;
				}
			}
		}
	},

	// simplify each clipped part of the polyline for performance
	_simplifyPoints: function () {
		var parts = this._parts,
		    tolerance = this.options.smoothFactor;

		for (var i = 0, len = parts.length; i < len; i++) {
			parts[i] = simplify(parts[i], tolerance);
		}
	},

	_update: function () {
		if (!this._map) { return; }

		this._clipPoints();
		this._simplifyPoints();
		this._updatePath();
	},

	_updatePath: function () {
		this._renderer._updatePoly(this);
	},

	// Needed by the `Canvas` renderer for interactivity
	_containsPoint: function (p, closed) {
		var i, j, k, len, len2, part,
		    w = this._clickTolerance();

		if (!this._pxBounds || !this._pxBounds.contains(p)) { return false; }

		// hit detection for polylines
		for (i = 0, len = this._parts.length; i < len; i++) {
			part = this._parts[i];

			for (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
				if (!closed && (j === 0)) { continue; }

				if (pointToSegmentDistance(p, part[k], part[j]) <= w) {
					return true;
				}
			}
		}
		return false;
	}
});

// @factory L.polyline(latlngs: LatLng[], options?: Polyline options)
// Instantiates a polyline object given an array of geographical points and
// optionally an options object. You can create a `Polyline` object with
// multiple separate lines (`MultiPolyline`) by passing an array of arrays
// of geographic points.
function polyline(latlngs, options) {
	return new Polyline(latlngs, options);
}

// Retrocompat. Allow plugins to support Leaflet versions before and after 1.1.
Polyline._flat = _flat;

/*
 * @class Polygon
 * @aka L.Polygon
 * @inherits Polyline
 *
 * A class for drawing polygon overlays on a map. Extends `Polyline`.
 *
 * Note that points you pass when creating a polygon shouldn't have an additional last point equal to the first one — it's better to filter out such points.
 *
 *
 * @example
 *
 * ```js
 * // create a red polygon from an array of LatLng points
 * var latlngs = [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]];
 *
 * var polygon = L.polygon(latlngs, {color: 'red'}).addTo(map);
 *
 * // zoom the map to the polygon
 * map.fitBounds(polygon.getBounds());
 * ```
 *
 * You can also pass an array of arrays of latlngs, with the first array representing the outer shape and the other arrays representing holes in the outer shape:
 *
 * ```js
 * var latlngs = [
 *   [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]], // outer ring
 *   [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]] // hole
 * ];
 * ```
 *
 * Additionally, you can pass a multi-dimensional array to represent a MultiPolygon shape.
 *
 * ```js
 * var latlngs = [
 *   [ // first polygon
 *     [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]], // outer ring
 *     [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]] // hole
 *   ],
 *   [ // second polygon
 *     [[41, -111.03],[45, -111.04],[45, -104.05],[41, -104.05]]
 *   ]
 * ];
 * ```
 */

var Polygon = Polyline.extend({

	options: {
		fill: true
	},

	isEmpty: function () {
		return !this._latlngs.length || !this._latlngs[0].length;
	},

	getCenter: function () {
		// throws error when not yet added to map as this center calculation requires projected coordinates
		if (!this._map) {
			throw new Error('Must add layer to map before using getCenter()');
		}

		var i, j, p1, p2, f, area, x, y, center,
		    points = this._rings[0],
		    len = points.length;

		if (!len) { return null; }

		// polygon centroid algorithm; only uses the first ring if there are multiple

		area = x = y = 0;

		for (i = 0, j = len - 1; i < len; j = i++) {
			p1 = points[i];
			p2 = points[j];

			f = p1.y * p2.x - p2.y * p1.x;
			x += (p1.x + p2.x) * f;
			y += (p1.y + p2.y) * f;
			area += f * 3;
		}

		if (area === 0) {
			// Polygon is so small that all points are on same pixel.
			center = points[0];
		} else {
			center = [x / area, y / area];
		}
		return this._map.layerPointToLatLng(center);
	},

	_convertLatLngs: function (latlngs) {
		var result = Polyline.prototype._convertLatLngs.call(this, latlngs),
		    len = result.length;

		// remove last point if it equals first one
		if (len >= 2 && result[0] instanceof LatLng && result[0].equals(result[len - 1])) {
			result.pop();
		}
		return result;
	},

	_setLatLngs: function (latlngs) {
		Polyline.prototype._setLatLngs.call(this, latlngs);
		if (isFlat(this._latlngs)) {
			this._latlngs = [this._latlngs];
		}
	},

	_defaultShape: function () {
		return isFlat(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
	},

	_clipPoints: function () {
		// polygons need a different clipping algorithm so we redefine that

		var bounds = this._renderer._bounds,
		    w = this.options.weight,
		    p = new Point(w, w);

		// increase clip padding by stroke width to avoid stroke on clip edges
		bounds = new Bounds(bounds.min.subtract(p), bounds.max.add(p));

		this._parts = [];
		if (!this._pxBounds || !this._pxBounds.intersects(bounds)) {
			return;
		}

		if (this.options.noClip) {
			this._parts = this._rings;
			return;
		}

		for (var i = 0, len = this._rings.length, clipped; i < len; i++) {
			clipped = clipPolygon(this._rings[i], bounds, true);
			if (clipped.length) {
				this._parts.push(clipped);
			}
		}
	},

	_updatePath: function () {
		this._renderer._updatePoly(this, true);
	},

	// Needed by the `Canvas` renderer for interactivity
	_containsPoint: function (p) {
		var inside = false,
		    part, p1, p2, i, j, k, len, len2;

		if (!this._pxBounds.contains(p)) { return false; }

		// ray casting algorithm for detecting if point is in polygon
		for (i = 0, len = this._parts.length; i < len; i++) {
			part = this._parts[i];

			for (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
				p1 = part[j];
				p2 = part[k];

				if (((p1.y > p.y) !== (p2.y > p.y)) && (p.x < (p2.x - p1.x) * (p.y - p1.y) / (p2.y - p1.y) + p1.x)) {
					inside = !inside;
				}
			}
		}

		// also check if it's on polygon stroke
		return inside || Polyline.prototype._containsPoint.call(this, p, true);
	}

});


// @factory L.polygon(latlngs: LatLng[], options?: Polyline options)
function polygon(latlngs, options) {
	return new Polygon(latlngs, options);
}

/*
 * @class GeoJSON
 * @aka L.GeoJSON
 * @inherits FeatureGroup
 *
 * Represents a GeoJSON object or an array of GeoJSON objects. Allows you to parse
 * GeoJSON data and display it on the map. Extends `FeatureGroup`.
 *
 * @example
 *
 * ```js
 * L.geoJSON(data, {
 * 	style: function (feature) {
 * 		return {color: feature.properties.color};
 * 	}
 * }).bindPopup(function (layer) {
 * 	return layer.feature.properties.description;
 * }).addTo(map);
 * ```
 */

var GeoJSON = FeatureGroup.extend({

	/* @section
	 * @aka GeoJSON options
	 *
	 * @option pointToLayer: Function = *
	 * A `Function` defining how GeoJSON points spawn Leaflet layers. It is internally
	 * called when data is added, passing the GeoJSON point feature and its `LatLng`.
	 * The default is to spawn a default `Marker`:
	 * ```js
	 * function(geoJsonPoint, latlng) {
	 * 	return L.marker(latlng);
	 * }
	 * ```
	 *
	 * @option style: Function = *
	 * A `Function` defining the `Path options` for styling GeoJSON lines and polygons,
	 * called internally when data is added.
	 * The default value is to not override any defaults:
	 * ```js
	 * function (geoJsonFeature) {
	 * 	return {}
	 * }
	 * ```
	 *
	 * @option onEachFeature: Function = *
	 * A `Function` that will be called once for each created `Feature`, after it has
	 * been created and styled. Useful for attaching events and popups to features.
	 * The default is to do nothing with the newly created layers:
	 * ```js
	 * function (feature, layer) {}
	 * ```
	 *
	 * @option filter: Function = *
	 * A `Function` that will be used to decide whether to include a feature or not.
	 * The default is to include all features:
	 * ```js
	 * function (geoJsonFeature) {
	 * 	return true;
	 * }
	 * ```
	 * Note: dynamically changing the `filter` option will have effect only on newly
	 * added data. It will _not_ re-evaluate already included features.
	 *
	 * @option coordsToLatLng: Function = *
	 * A `Function` that will be used for converting GeoJSON coordinates to `LatLng`s.
	 * The default is the `coordsToLatLng` static method.
	 */

	initialize: function (geojson, options) {
		setOptions(this, options);

		this._layers = {};

		if (geojson) {
			this.addData(geojson);
		}
	},

	// @method addData( <GeoJSON> data ): this
	// Adds a GeoJSON object to the layer.
	addData: function (geojson) {
		var features = isArray(geojson) ? geojson : geojson.features,
		    i, len, feature;

		if (features) {
			for (i = 0, len = features.length; i < len; i++) {
				// only add this if geometry or geometries are set and not null
				feature = features[i];
				if (feature.geometries || feature.geometry || feature.features || feature.coordinates) {
					this.addData(feature);
				}
			}
			return this;
		}

		var options = this.options;

		if (options.filter && !options.filter(geojson)) { return this; }

		var layer = geometryToLayer(geojson, options);
		if (!layer) {
			return this;
		}
		layer.feature = asFeature(geojson);

		layer.defaultOptions = layer.options;
		this.resetStyle(layer);

		if (options.onEachFeature) {
			options.onEachFeature(geojson, layer);
		}

		return this.addLayer(layer);
	},

	// @method resetStyle( <Path> layer ): this
	// Resets the given vector layer's style to the original GeoJSON style, useful for resetting style after hover events.
	resetStyle: function (layer) {
		// reset any custom styles
		layer.options = extend({}, layer.defaultOptions);
		this._setLayerStyle(layer, this.options.style);
		return this;
	},

	// @method setStyle( <Function> style ): this
	// Changes styles of GeoJSON vector layers with the given style function.
	setStyle: function (style) {
		return this.eachLayer(function (layer) {
			this._setLayerStyle(layer, style);
		}, this);
	},

	_setLayerStyle: function (layer, style) {
		if (typeof style === 'function') {
			style = style(layer.feature);
		}
		if (layer.setStyle) {
			layer.setStyle(style);
		}
	}
});

// @section
// There are several static functions which can be called without instantiating L.GeoJSON:

// @function geometryToLayer(featureData: Object, options?: GeoJSON options): Layer
// Creates a `Layer` from a given GeoJSON feature. Can use a custom
// [`pointToLayer`](#geojson-pointtolayer) and/or [`coordsToLatLng`](#geojson-coordstolatlng)
// functions if provided as options.
function geometryToLayer(geojson, options) {

	var geometry = geojson.type === 'Feature' ? geojson.geometry : geojson,
	    coords = geometry ? geometry.coordinates : null,
	    layers = [],
	    pointToLayer = options && options.pointToLayer,
	    _coordsToLatLng = options && options.coordsToLatLng || coordsToLatLng,
	    latlng, latlngs, i, len;

	if (!coords && !geometry) {
		return null;
	}

	switch (geometry.type) {
	case 'Point':
		latlng = _coordsToLatLng(coords);
		return pointToLayer ? pointToLayer(geojson, latlng) : new Marker(latlng);

	case 'MultiPoint':
		for (i = 0, len = coords.length; i < len; i++) {
			latlng = _coordsToLatLng(coords[i]);
			layers.push(pointToLayer ? pointToLayer(geojson, latlng) : new Marker(latlng));
		}
		return new FeatureGroup(layers);

	case 'LineString':
	case 'MultiLineString':
		latlngs = coordsToLatLngs(coords, geometry.type === 'LineString' ? 0 : 1, _coordsToLatLng);
		return new Polyline(latlngs, options);

	case 'Polygon':
	case 'MultiPolygon':
		latlngs = coordsToLatLngs(coords, geometry.type === 'Polygon' ? 1 : 2, _coordsToLatLng);
		return new Polygon(latlngs, options);

	case 'GeometryCollection':
		for (i = 0, len = geometry.geometries.length; i < len; i++) {
			var layer = geometryToLayer({
				geometry: geometry.geometries[i],
				type: 'Feature',
				properties: geojson.properties
			}, options);

			if (layer) {
				layers.push(layer);
			}
		}
		return new FeatureGroup(layers);

	default:
		throw new Error('Invalid GeoJSON object.');
	}
}

// @function coordsToLatLng(coords: Array): LatLng
// Creates a `LatLng` object from an array of 2 numbers (longitude, latitude)
// or 3 numbers (longitude, latitude, altitude) used in GeoJSON for points.
function coordsToLatLng(coords) {
	return new LatLng(coords[1], coords[0], coords[2]);
}

// @function coordsToLatLngs(coords: Array, levelsDeep?: Number, coordsToLatLng?: Function): Array
// Creates a multidimensional array of `LatLng`s from a GeoJSON coordinates array.
// `levelsDeep` specifies the nesting level (0 is for an array of points, 1 for an array of arrays of points, etc., 0 by default).
// Can use a custom [`coordsToLatLng`](#geojson-coordstolatlng) function.
function coordsToLatLngs(coords, levelsDeep, _coordsToLatLng) {
	var latlngs = [];

	for (var i = 0, len = coords.length, latlng; i < len; i++) {
		latlng = levelsDeep ?
				coordsToLatLngs(coords[i], levelsDeep - 1, _coordsToLatLng) :
				(_coordsToLatLng || coordsToLatLng)(coords[i]);

		latlngs.push(latlng);
	}

	return latlngs;
}

// @function latLngToCoords(latlng: LatLng, precision?: Number): Array
// Reverse of [`coordsToLatLng`](#geojson-coordstolatlng)
function latLngToCoords(latlng, precision) {
	precision = typeof precision === 'number' ? precision : 6;
	return latlng.alt !== undefined ?
			[formatNum(latlng.lng, precision), formatNum(latlng.lat, precision), formatNum(latlng.alt, precision)] :
			[formatNum(latlng.lng, precision), formatNum(latlng.lat, precision)];
}

// @function latLngsToCoords(latlngs: Array, levelsDeep?: Number, closed?: Boolean): Array
// Reverse of [`coordsToLatLngs`](#geojson-coordstolatlngs)
// `closed` determines whether the first point should be appended to the end of the array to close the feature, only used when `levelsDeep` is 0. False by default.
function latLngsToCoords(latlngs, levelsDeep, closed, precision) {
	var coords = [];

	for (var i = 0, len = latlngs.length; i < len; i++) {
		coords.push(levelsDeep ?
			latLngsToCoords(latlngs[i], levelsDeep - 1, closed, precision) :
			latLngToCoords(latlngs[i], precision));
	}

	if (!levelsDeep && closed) {
		coords.push(coords[0]);
	}

	return coords;
}

function getFeature(layer, newGeometry) {
	return layer.feature ?
			extend({}, layer.feature, {geometry: newGeometry}) :
			asFeature(newGeometry);
}

// @function asFeature(geojson: Object): Object
// Normalize GeoJSON geometries/features into GeoJSON features.
function asFeature(geojson) {
	if (geojson.type === 'Feature' || geojson.type === 'FeatureCollection') {
		return geojson;
	}

	return {
		type: 'Feature',
		properties: {},
		geometry: geojson
	};
}

var PointToGeoJSON = {
	toGeoJSON: function (precision) {
		return getFeature(this, {
			type: 'Point',
			coordinates: latLngToCoords(this.getLatLng(), precision)
		});
	}
};

// @namespace Marker
// @method toGeoJSON(): Object
// Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the marker (as a GeoJSON `Point` Feature).
Marker.include(PointToGeoJSON);

// @namespace CircleMarker
// @method toGeoJSON(): Object
// Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the circle marker (as a GeoJSON `Point` Feature).
Circle.include(PointToGeoJSON);
CircleMarker.include(PointToGeoJSON);


// @namespace Polyline
// @method toGeoJSON(): Object
// Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the polyline (as a GeoJSON `LineString` or `MultiLineString` Feature).
Polyline.include({
	toGeoJSON: function (precision) {
		var multi = !isFlat(this._latlngs);

		var coords = latLngsToCoords(this._latlngs, multi ? 1 : 0, false, precision);

		return getFeature(this, {
			type: (multi ? 'Multi' : '') + 'LineString',
			coordinates: coords
		});
	}
});

// @namespace Polygon
// @method toGeoJSON(): Object
// Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the polygon (as a GeoJSON `Polygon` or `MultiPolygon` Feature).
Polygon.include({
	toGeoJSON: function (precision) {
		var holes = !isFlat(this._latlngs),
		    multi = holes && !isFlat(this._latlngs[0]);

		var coords = latLngsToCoords(this._latlngs, multi ? 2 : holes ? 1 : 0, true, precision);

		if (!holes) {
			coords = [coords];
		}

		return getFeature(this, {
			type: (multi ? 'Multi' : '') + 'Polygon',
			coordinates: coords
		});
	}
});


// @namespace LayerGroup
LayerGroup.include({
	toMultiPoint: function (precision) {
		var coords = [];

		this.eachLayer(function (layer) {
			coords.push(layer.toGeoJSON(precision).geometry.coordinates);
		});

		return getFeature(this, {
			type: 'MultiPoint',
			coordinates: coords
		});
	},

	// @method toGeoJSON(): Object
	// Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the layer group (as a GeoJSON `FeatureCollection`, `GeometryCollection`, or `MultiPoint`).
	toGeoJSON: function (precision) {

		var type = this.feature && this.feature.geometry && this.feature.geometry.type;

		if (type === 'MultiPoint') {
			return this.toMultiPoint(precision);
		}

		var isGeometryCollection = type === 'GeometryCollection',
		    jsons = [];

		this.eachLayer(function (layer) {
			if (layer.toGeoJSON) {
				var json = layer.toGeoJSON(precision);
				if (isGeometryCollection) {
					jsons.push(json.geometry);
				} else {
					var feature = asFeature(json);
					// Squash nested feature collections
					if (feature.type === 'FeatureCollection') {
						jsons.push.apply(jsons, feature.features);
					} else {
						jsons.push(feature);
					}
				}
			}
		});

		if (isGeometryCollection) {
			return getFeature(this, {
				geometries: jsons,
				type: 'GeometryCollection'
			});
		}

		return {
			type: 'FeatureCollection',
			features: jsons
		};
	}
});

// @namespace GeoJSON
// @factory L.geoJSON(geojson?: Object, options?: GeoJSON options)
// Creates a GeoJSON layer. Optionally accepts an object in
// [GeoJSON format](http://geojson.org/geojson-spec.html) to display on the map
// (you can alternatively add it later with `addData` method) and an `options` object.
function geoJSON(geojson, options) {
	return new GeoJSON(geojson, options);
}

// Backward compatibility.
var geoJson = geoJSON;

/*
 * @class ImageOverlay
 * @aka L.ImageOverlay
 * @inherits Interactive layer
 *
 * Used to load and display a single image over specific bounds of the map. Extends `Layer`.
 *
 * @example
 *
 * ```js
 * var imageUrl = 'http://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg',
 * 	imageBounds = [[40.712216, -74.22655], [40.773941, -74.12544]];
 * L.imageOverlay(imageUrl, imageBounds).addTo(map);
 * ```
 */

var ImageOverlay = Layer.extend({

	// @section
	// @aka ImageOverlay options
	options: {
		// @option opacity: Number = 1.0
		// The opacity of the image overlay.
		opacity: 1,

		// @option alt: String = ''
		// Text for the `alt` attribute of the image (useful for accessibility).
		alt: '',

		// @option interactive: Boolean = false
		// If `true`, the image overlay will emit [mouse events](#interactive-layer) when clicked or hovered.
		interactive: false,

		// @option crossOrigin: Boolean = false
		// If true, the image will have its crossOrigin attribute set to ''. This is needed if you want to access image pixel data.
		crossOrigin: false,

		// @option errorOverlayUrl: String = ''
		// URL to the overlay image to show in place of the overlay that failed to load.
		errorOverlayUrl: '',

		// @option zIndex: Number = 1
		// The explicit [zIndex](https://developer.mozilla.org/docs/Web/CSS/CSS_Positioning/Understanding_z_index) of the tile layer.
		zIndex: 1,

		// @option className: String = ''
		// A custom class name to assign to the image. Empty by default.
		className: '',
	},

	initialize: function (url, bounds, options) { // (String, LatLngBounds, Object)
		this._url = url;
		this._bounds = toLatLngBounds(bounds);

		setOptions(this, options);
	},

	onAdd: function () {
		if (!this._image) {
			this._initImage();

			if (this.options.opacity < 1) {
				this._updateOpacity();
			}
		}

		if (this.options.interactive) {
			addClass(this._image, 'leaflet-interactive');
			this.addInteractiveTarget(this._image);
		}

		this.getPane().appendChild(this._image);
		this._reset();
	},

	onRemove: function () {
		remove(this._image);
		if (this.options.interactive) {
			this.removeInteractiveTarget(this._image);
		}
	},

	// @method setOpacity(opacity: Number): this
	// Sets the opacity of the overlay.
	setOpacity: function (opacity) {
		this.options.opacity = opacity;

		if (this._image) {
			this._updateOpacity();
		}
		return this;
	},

	setStyle: function (styleOpts) {
		if (styleOpts.opacity) {
			this.setOpacity(styleOpts.opacity);
		}
		return this;
	},

	// @method bringToFront(): this
	// Brings the layer to the top of all overlays.
	bringToFront: function () {
		if (this._map) {
			toFront(this._image);
		}
		return this;
	},

	// @method bringToBack(): this
	// Brings the layer to the bottom of all overlays.
	bringToBack: function () {
		if (this._map) {
			toBack(this._image);
		}
		return this;
	},

	// @method setUrl(url: String): this
	// Changes the URL of the image.
	setUrl: function (url) {
		this._url = url;

		if (this._image) {
			this._image.src = url;
		}
		return this;
	},

	// @method setBounds(bounds: LatLngBounds): this
	// Update the bounds that this ImageOverlay covers
	setBounds: function (bounds) {
		this._bounds = toLatLngBounds(bounds);

		if (this._map) {
			this._reset();
		}
		return this;
	},

	getEvents: function () {
		var events = {
			zoom: this._reset,
			viewreset: this._reset
		};

		if (this._zoomAnimated) {
			events.zoomanim = this._animateZoom;
		}

		return events;
	},

	// @method: setZIndex(value: Number) : this
	// Changes the [zIndex](#imageoverlay-zindex) of the image overlay.
	setZIndex: function (value) {
		this.options.zIndex = value;
		this._updateZIndex();
		return this;
	},

	// @method getBounds(): LatLngBounds
	// Get the bounds that this ImageOverlay covers
	getBounds: function () {
		return this._bounds;
	},

	// @method getElement(): HTMLElement
	// Returns the instance of [`HTMLImageElement`](https://developer.mozilla.org/docs/Web/API/HTMLImageElement)
	// used by this overlay.
	getElement: function () {
		return this._image;
	},

	_initImage: function () {
		var img = this._image = create$1('img',
				'leaflet-image-layer ' + (this._zoomAnimated ? 'leaflet-zoom-animated' : '') +
				 (this.options.className || ''));

		img.onselectstart = falseFn;
		img.onmousemove = falseFn;

		// @event load: Event
		// Fired when the ImageOverlay layer has loaded its image
		img.onload = bind(this.fire, this, 'load');
		img.onerror = bind(this._overlayOnError, this, 'error');

		if (this.options.crossOrigin) {
			img.crossOrigin = '';
		}

		if (this.options.zIndex) {
			this._updateZIndex();
		}

		img.src = this._url;
		img.alt = this.options.alt;
	},

	_animateZoom: function (e) {
		var scale = this._map.getZoomScale(e.zoom),
		    offset = this._map._latLngBoundsToNewLayerBounds(this._bounds, e.zoom, e.center).min;

		setTransform(this._image, offset, scale);
	},

	_reset: function () {
		var image = this._image,
		    bounds = new Bounds(
		        this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
		        this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
		    size = bounds.getSize();

		setPosition(image, bounds.min);

		image.style.width  = size.x + 'px';
		image.style.height = size.y + 'px';
	},

	_updateOpacity: function () {
		setOpacity(this._image, this.options.opacity);
	},

	_updateZIndex: function () {
		if (this._image && this.options.zIndex !== undefined && this.options.zIndex !== null) {
			this._image.style.zIndex = this.options.zIndex;
		}
	},

	_overlayOnError: function () {
		// @event error: Event
		// Fired when the ImageOverlay layer has loaded its image
		this.fire('error');

		var errorUrl = this.options.errorOverlayUrl;
		if (errorUrl && this._url !== errorUrl) {
			this._url = errorUrl;
			this._image.src = errorUrl;
		}
	}
});

// @factory L.imageOverlay(imageUrl: String, bounds: LatLngBounds, options?: ImageOverlay options)
// Instantiates an image overlay object given the URL of the image and the
// geographical bounds it is tied to.
var imageOverlay = function (url, bounds, options) {
	return new ImageOverlay(url, bounds, options);
};

/*
 * @class VideoOverlay
 * @aka L.VideoOverlay
 * @inherits ImageOverlay
 *
 * Used to load and display a video player over specific bounds of the map. Extends `ImageOverlay`.
 *
 * A video overlay uses the [`<video>`](https://developer.mozilla.org/docs/Web/HTML/Element/video)
 * HTML5 element.
 *
 * @example
 *
 * ```js
 * var videoUrl = 'https://www.mapbox.com/bites/00188/patricia_nasa.webm',
 * 	videoBounds = [[ 32, -130], [ 13, -100]];
 * L.VideoOverlay(videoUrl, videoBounds ).addTo(map);
 * ```
 */

var VideoOverlay = ImageOverlay.extend({

	// @section
	// @aka VideoOverlay options
	options: {
		// @option autoplay: Boolean = true
		// Whether the video starts playing automatically when loaded.
		autoplay: true,

		// @option loop: Boolean = true
		// Whether the video will loop back to the beginning when played.
		loop: true
	},

	_initImage: function () {
		var wasElementSupplied = this._url.tagName === 'VIDEO';
		var vid = this._image = wasElementSupplied ? this._url : create$1('video');

		vid.class = vid.class || '';
		vid.class += 'leaflet-image-layer ' + (this._zoomAnimated ? 'leaflet-zoom-animated' : '');

		vid.onselectstart = falseFn;
		vid.onmousemove = falseFn;

		// @event load: Event
		// Fired when the video has finished loading the first frame
		vid.onloadeddata = bind(this.fire, this, 'load');

		if (wasElementSupplied) { return; }

		if (!isArray(this._url)) { this._url = [this._url]; }

		vid.autoplay = !!this.options.autoplay;
		vid.loop = !!this.options.loop;
		for (var i = 0; i < this._url.length; i++) {
			var source = create$1('source');
			source.src = this._url[i];
			vid.appendChild(source);
		}
	}

	// @method getElement(): HTMLVideoElement
	// Returns the instance of [`HTMLVideoElement`](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement)
	// used by this overlay.
});


// @factory L.videoOverlay(video: String|Array|HTMLVideoElement, bounds: LatLngBounds, options?: VideoOverlay options)
// Instantiates an image overlay object given the URL of the video (or array of URLs, or even a video element) and the
// geographical bounds it is tied to.

function videoOverlay(video, bounds, options) {
	return new VideoOverlay(video, bounds, options);
}

/*
 * @class DivOverlay
 * @inherits Layer
 * @aka L.DivOverlay
 * Base model for L.Popup and L.Tooltip. Inherit from it for custom popup like plugins.
 */

// @namespace DivOverlay
var DivOverlay = Layer.extend({

	// @section
	// @aka DivOverlay options
	options: {
		// @option offset: Point = Point(0, 7)
		// The offset of the popup position. Useful to control the anchor
		// of the popup when opening it on some overlays.
		offset: [0, 7],

		// @option className: String = ''
		// A custom CSS class name to assign to the popup.
		className: '',

		// @option pane: String = 'popupPane'
		// `Map pane` where the popup will be added.
		pane: 'popupPane'
	},

	initialize: function (options, source) {
		setOptions(this, options);

		this._source = source;
	},

	onAdd: function (map) {
		this._zoomAnimated = map._zoomAnimated;

		if (!this._container) {
			this._initLayout();
		}

		if (map._fadeAnimated) {
			setOpacity(this._container, 0);
		}

		clearTimeout(this._removeTimeout);
		this.getPane().appendChild(this._container);
		this.update();

		if (map._fadeAnimated) {
			setOpacity(this._container, 1);
		}

		this.bringToFront();
	},

	onRemove: function (map) {
		if (map._fadeAnimated) {
			setOpacity(this._container, 0);
			this._removeTimeout = setTimeout(bind(remove, undefined, this._container), 200);
		} else {
			remove(this._container);
		}
	},

	// @namespace Popup
	// @method getLatLng: LatLng
	// Returns the geographical point of popup.
	getLatLng: function () {
		return this._latlng;
	},

	// @method setLatLng(latlng: LatLng): this
	// Sets the geographical point where the popup will open.
	setLatLng: function (latlng) {
		this._latlng = toLatLng(latlng);
		if (this._map) {
			this._updatePosition();
			this._adjustPan();
		}
		return this;
	},

	// @method getContent: String|HTMLElement
	// Returns the content of the popup.
	getContent: function () {
		return this._content;
	},

	// @method setContent(htmlContent: String|HTMLElement|Function): this
	// Sets the HTML content of the popup. If a function is passed the source layer will be passed to the function. The function should return a `String` or `HTMLElement` to be used in the popup.
	setContent: function (content) {
		this._content = content;
		this.update();
		return this;
	},

	// @method getElement: String|HTMLElement
	// Alias for [getContent()](#popup-getcontent)
	getElement: function () {
		return this._container;
	},

	// @method update: null
	// Updates the popup content, layout and position. Useful for updating the popup after something inside changed, e.g. image loaded.
	update: function () {
		if (!this._map) { return; }

		this._container.style.visibility = 'hidden';

		this._updateContent();
		this._updateLayout();
		this._updatePosition();

		this._container.style.visibility = '';

		this._adjustPan();
	},

	getEvents: function () {
		var events = {
			zoom: this._updatePosition,
			viewreset: this._updatePosition
		};

		if (this._zoomAnimated) {
			events.zoomanim = this._animateZoom;
		}
		return events;
	},

	// @method isOpen: Boolean
	// Returns `true` when the popup is visible on the map.
	isOpen: function () {
		return !!this._map && this._map.hasLayer(this);
	},

	// @method bringToFront: this
	// Brings this popup in front of other popups (in the same map pane).
	bringToFront: function () {
		if (this._map) {
			toFront(this._container);
		}
		return this;
	},

	// @method bringToBack: this
	// Brings this popup to the back of other popups (in the same map pane).
	bringToBack: function () {
		if (this._map) {
			toBack(this._container);
		}
		return this;
	},

	_updateContent: function () {
		if (!this._content) { return; }

		var node = this._contentNode;
		var content = (typeof this._content === 'function') ? this._content(this._source || this) : this._content;

		if (typeof content === 'string') {
			node.innerHTML = content;
		} else {
			while (node.hasChildNodes()) {
				node.removeChild(node.firstChild);
			}
			node.appendChild(content);
		}
		this.fire('contentupdate');
	},

	_updatePosition: function () {
		if (!this._map) { return; }

		var pos = this._map.latLngToLayerPoint(this._latlng),
		    offset = toPoint(this.options.offset),
		    anchor = this._getAnchor();

		if (this._zoomAnimated) {
			setPosition(this._container, pos.add(anchor));
		} else {
			offset = offset.add(pos).add(anchor);
		}

		var bottom = this._containerBottom = -offset.y,
		    left = this._containerLeft = -Math.round(this._containerWidth / 2) + offset.x;

		// bottom position the popup in case the height of the popup changes (images loading etc)
		this._container.style.bottom = bottom + 'px';
		this._container.style.left = left + 'px';
	},

	_getAnchor: function () {
		return [0, 0];
	}

});

/*
 * @class Popup
 * @inherits DivOverlay
 * @aka L.Popup
 * Used to open popups in certain places of the map. Use [Map.openPopup](#map-openpopup) to
 * open popups while making sure that only one popup is open at one time
 * (recommended for usability), or use [Map.addLayer](#map-addlayer) to open as many as you want.
 *
 * @example
 *
 * If you want to just bind a popup to marker click and then open it, it's really easy:
 *
 * ```js
 * marker.bindPopup(popupContent).openPopup();
 * ```
 * Path overlays like polylines also have a `bindPopup` method.
 * Here's a more complicated way to open a popup on a map:
 *
 * ```js
 * var popup = L.popup()
 * 	.setLatLng(latlng)
 * 	.setContent('<p>Hello world!<br />This is a nice popup.</p>')
 * 	.openOn(map);
 * ```
 */


// @namespace Popup
var Popup = DivOverlay.extend({

	// @section
	// @aka Popup options
	options: {
		// @option maxWidth: Number = 300
		// Max width of the popup, in pixels.
		maxWidth: 300,

		// @option minWidth: Number = 50
		// Min width of the popup, in pixels.
		minWidth: 50,

		// @option maxHeight: Number = null
		// If set, creates a scrollable container of the given height
		// inside a popup if its content exceeds it.
		maxHeight: null,

		// @option autoPan: Boolean = true
		// Set it to `false` if you don't want the map to do panning animation
		// to fit the opened popup.
		autoPan: true,

		// @option autoPanPaddingTopLeft: Point = null
		// The margin between the popup and the top left corner of the map
		// view after autopanning was performed.
		autoPanPaddingTopLeft: null,

		// @option autoPanPaddingBottomRight: Point = null
		// The margin between the popup and the bottom right corner of the map
		// view after autopanning was performed.
		autoPanPaddingBottomRight: null,

		// @option autoPanPadding: Point = Point(5, 5)
		// Equivalent of setting both top left and bottom right autopan padding to the same value.
		autoPanPadding: [5, 5],

		// @option keepInView: Boolean = false
		// Set it to `true` if you want to prevent users from panning the popup
		// off of the screen while it is open.
		keepInView: false,

		// @option closeButton: Boolean = true
		// Controls the presence of a close button in the popup.
		closeButton: true,

		// @option autoClose: Boolean = true
		// Set it to `false` if you want to override the default behavior of
		// the popup closing when another popup is opened.
		autoClose: true,

		// @option closeOnClick: Boolean = *
		// Set it if you want to override the default behavior of the popup closing when user clicks
		// on the map. Defaults to the map's [`closePopupOnClick`](#map-closepopuponclick) option.

		// @option className: String = ''
		// A custom CSS class name to assign to the popup.
		className: ''
	},

	// @namespace Popup
	// @method openOn(map: Map): this
	// Adds the popup to the map and closes the previous one. The same as `map.openPopup(popup)`.
	openOn: function (map) {
		map.openPopup(this);
		return this;
	},

	onAdd: function (map) {
		DivOverlay.prototype.onAdd.call(this, map);

		// @namespace Map
		// @section Popup events
		// @event popupopen: PopupEvent
		// Fired when a popup is opened in the map
		map.fire('popupopen', {popup: this});

		if (this._source) {
			// @namespace Layer
			// @section Popup events
			// @event popupopen: PopupEvent
			// Fired when a popup bound to this layer is opened
			this._source.fire('popupopen', {popup: this}, true);
			// For non-path layers, we toggle the popup when clicking
			// again the layer, so prevent the map to reopen it.
			if (!(this._source instanceof Path)) {
				this._source.on('preclick', stopPropagation);
			}
		}
	},

	onRemove: function (map) {
		DivOverlay.prototype.onRemove.call(this, map);

		// @namespace Map
		// @section Popup events
		// @event popupclose: PopupEvent
		// Fired when a popup in the map is closed
		map.fire('popupclose', {popup: this});

		if (this._source) {
			// @namespace Layer
			// @section Popup events
			// @event popupclose: PopupEvent
			// Fired when a popup bound to this layer is closed
			this._source.fire('popupclose', {popup: this}, true);
			if (!(this._source instanceof Path)) {
				this._source.off('preclick', stopPropagation);
			}
		}
	},

	getEvents: function () {
		var events = DivOverlay.prototype.getEvents.call(this);

		if (this.options.closeOnClick !== undefined ? this.options.closeOnClick : this._map.options.closePopupOnClick) {
			events.preclick = this._close;
		}

		if (this.options.keepInView) {
			events.moveend = this._adjustPan;
		}

		return events;
	},

	_close: function () {
		if (this._map) {
			this._map.closePopup(this);
		}
	},

	_initLayout: function () {
		var prefix = 'leaflet-popup',
		    container = this._container = create$1('div',
			prefix + ' ' + (this.options.className || '') +
			' leaflet-zoom-animated');

		var wrapper = this._wrapper = create$1('div', prefix + '-content-wrapper', container);
		this._contentNode = create$1('div', prefix + '-content', wrapper);

		disableClickPropagation(wrapper);
		disableScrollPropagation(this._contentNode);
		on(wrapper, 'contextmenu', stopPropagation);

		this._tipContainer = create$1('div', prefix + '-tip-container', container);
		this._tip = create$1('div', prefix + '-tip', this._tipContainer);

		if (this.options.closeButton) {
			var closeButton = this._closeButton = create$1('a', prefix + '-close-button', container);
			closeButton.href = '#close';
			closeButton.innerHTML = '&#215;';

			on(closeButton, 'click', this._onCloseButtonClick, this);
		}
	},

	_updateLayout: function () {
		var container = this._contentNode,
		    style = container.style;

		style.width = '';
		style.whiteSpace = 'nowrap';

		var width = container.offsetWidth;
		width = Math.min(width, this.options.maxWidth);
		width = Math.max(width, this.options.minWidth);

		style.width = (width + 1) + 'px';
		style.whiteSpace = '';

		style.height = '';

		var height = container.offsetHeight,
		    maxHeight = this.options.maxHeight,
		    scrolledClass = 'leaflet-popup-scrolled';

		if (maxHeight && height > maxHeight) {
			style.height = maxHeight + 'px';
			addClass(container, scrolledClass);
		} else {
			removeClass(container, scrolledClass);
		}

		this._containerWidth = this._container.offsetWidth;
	},

	_animateZoom: function (e) {
		var pos = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center),
		    anchor = this._getAnchor();
		setPosition(this._container, pos.add(anchor));
	},

	_adjustPan: function () {
		if (!this.options.autoPan || (this._map._panAnim && this._map._panAnim._inProgress)) { return; }

		var map = this._map,
		    marginBottom = parseInt(getStyle(this._container, 'marginBottom'), 10) || 0,
		    containerHeight = this._container.offsetHeight + marginBottom,
		    containerWidth = this._containerWidth,
		    layerPos = new Point(this._containerLeft, -containerHeight - this._containerBottom);

		layerPos._add(getPosition(this._container));

		var containerPos = map.layerPointToContainerPoint(layerPos),
		    padding = toPoint(this.options.autoPanPadding),
		    paddingTL = toPoint(this.options.autoPanPaddingTopLeft || padding),
		    paddingBR = toPoint(this.options.autoPanPaddingBottomRight || padding),
		    size = map.getSize(),
		    dx = 0,
		    dy = 0;

		if (containerPos.x + containerWidth + paddingBR.x > size.x) { // right
			dx = containerPos.x + containerWidth - size.x + paddingBR.x;
		}
		if (containerPos.x - dx - paddingTL.x < 0) { // left
			dx = containerPos.x - paddingTL.x;
		}
		if (containerPos.y + containerHeight + paddingBR.y > size.y) { // bottom
			dy = containerPos.y + containerHeight - size.y + paddingBR.y;
		}
		if (containerPos.y - dy - paddingTL.y < 0) { // top
			dy = containerPos.y - paddingTL.y;
		}

		// @namespace Map
		// @section Popup events
		// @event autopanstart: Event
		// Fired when the map starts autopanning when opening a popup.
		if (dx || dy) {
			map
			    .fire('autopanstart')
			    .panBy([dx, dy]);
		}
	},

	_onCloseButtonClick: function (e) {
		this._close();
		stop(e);
	},

	_getAnchor: function () {
		// Where should we anchor the popup on the source layer?
		return toPoint(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
	}

});

// @namespace Popup
// @factory L.popup(options?: Popup options, source?: Layer)
// Instantiates a `Popup` object given an optional `options` object that describes its appearance and location and an optional `source` object that is used to tag the popup with a reference to the Layer to which it refers.
var popup = function (options, source) {
	return new Popup(options, source);
};


/* @namespace Map
 * @section Interaction Options
 * @option closePopupOnClick: Boolean = true
 * Set it to `false` if you don't want popups to close when user clicks the map.
 */
Map.mergeOptions({
	closePopupOnClick: true
});


// @namespace Map
// @section Methods for Layers and Controls
Map.include({
	// @method openPopup(popup: Popup): this
	// Opens the specified popup while closing the previously opened (to make sure only one is opened at one time for usability).
	// @alternative
	// @method openPopup(content: String|HTMLElement, latlng: LatLng, options?: Popup options): this
	// Creates a popup with the specified content and options and opens it in the given point on a map.
	openPopup: function (popup, latlng, options) {
		if (!(popup instanceof Popup)) {
			popup = new Popup(options).setContent(popup);
		}

		if (latlng) {
			popup.setLatLng(latlng);
		}

		if (this.hasLayer(popup)) {
			return this;
		}

		if (this._popup && this._popup.options.autoClose) {
			this.closePopup();
		}

		this._popup = popup;
		return this.addLayer(popup);
	},

	// @method closePopup(popup?: Popup): this
	// Closes the popup previously opened with [openPopup](#map-openpopup) (or the given one).
	closePopup: function (popup) {
		if (!popup || popup === this._popup) {
			popup = this._popup;
			this._popup = null;
		}
		if (popup) {
			this.removeLayer(popup);
		}
		return this;
	}
});

/*
 * @namespace Layer
 * @section Popup methods example
 *
 * All layers share a set of methods convenient for binding popups to it.
 *
 * ```js
 * var layer = L.Polygon(latlngs).bindPopup('Hi There!').addTo(map);
 * layer.openPopup();
 * layer.closePopup();
 * ```
 *
 * Popups will also be automatically opened when the layer is clicked on and closed when the layer is removed from the map or another popup is opened.
 */

// @section Popup methods
Layer.include({

	// @method bindPopup(content: String|HTMLElement|Function|Popup, options?: Popup options): this
	// Binds a popup to the layer with the passed `content` and sets up the
	// necessary event listeners. If a `Function` is passed it will receive
	// the layer as the first argument and should return a `String` or `HTMLElement`.
	bindPopup: function (content, options) {

		if (content instanceof Popup) {
			setOptions(content, options);
			this._popup = content;
			content._source = this;
		} else {
			if (!this._popup || options) {
				this._popup = new Popup(options, this);
			}
			this._popup.setContent(content);
		}

		if (!this._popupHandlersAdded) {
			this.on({
				click: this._openPopup,
				keypress: this._onKeyPress,
				remove: this.closePopup,
				move: this._movePopup
			});
			this._popupHandlersAdded = true;
		}

		return this;
	},

	// @method unbindPopup(): this
	// Removes the popup previously bound with `bindPopup`.
	unbindPopup: function () {
		if (this._popup) {
			this.off({
				click: this._openPopup,
				keypress: this._onKeyPress,
				remove: this.closePopup,
				move: this._movePopup
			});
			this._popupHandlersAdded = false;
			this._popup = null;
		}
		return this;
	},

	// @method openPopup(latlng?: LatLng): this
	// Opens the bound popup at the specificed `latlng` or at the default popup anchor if no `latlng` is passed.
	openPopup: function (layer, latlng) {
		if (!(layer instanceof Layer)) {
			latlng = layer;
			layer = this;
		}

		if (layer instanceof FeatureGroup) {
			for (var id in this._layers) {
				layer = this._layers[id];
				break;
			}
		}

		if (!latlng) {
			latlng = layer.getCenter ? layer.getCenter() : layer.getLatLng();
		}

		if (this._popup && this._map) {
			// set popup source to this layer
			this._popup._source = layer;

			// update the popup (content, layout, ect...)
			this._popup.update();

			// open the popup on the map
			this._map.openPopup(this._popup, latlng);
		}

		return this;
	},

	// @method closePopup(): this
	// Closes the popup bound to this layer if it is open.
	closePopup: function () {
		if (this._popup) {
			this._popup._close();
		}
		return this;
	},

	// @method togglePopup(): this
	// Opens or closes the popup bound to this layer depending on its current state.
	togglePopup: function (target) {
		if (this._popup) {
			if (this._popup._map) {
				this.closePopup();
			} else {
				this.openPopup(target);
			}
		}
		return this;
	},

	// @method isPopupOpen(): boolean
	// Returns `true` if the popup bound to this layer is currently open.
	isPopupOpen: function () {
		return (this._popup ? this._popup.isOpen() : false);
	},

	// @method setPopupContent(content: String|HTMLElement|Popup): this
	// Sets the content of the popup bound to this layer.
	setPopupContent: function (content) {
		if (this._popup) {
			this._popup.setContent(content);
		}
		return this;
	},

	// @method getPopup(): Popup
	// Returns the popup bound to this layer.
	getPopup: function () {
		return this._popup;
	},

	_openPopup: function (e) {
		var layer = e.layer || e.target;

		if (!this._popup) {
			return;
		}

		if (!this._map) {
			return;
		}

		// prevent map click
		stop(e);

		// if this inherits from Path its a vector and we can just
		// open the popup at the new location
		if (layer instanceof Path) {
			this.openPopup(e.layer || e.target, e.latlng);
			return;
		}

		// otherwise treat it like a marker and figure out
		// if we should toggle it open/closed
		if (this._map.hasLayer(this._popup) && this._popup._source === layer) {
			this.closePopup();
		} else {
			this.openPopup(layer, e.latlng);
		}
	},

	_movePopup: function (e) {
		this._popup.setLatLng(e.latlng);
	},

	_onKeyPress: function (e) {
		if (e.originalEvent.keyCode === 13) {
			this._openPopup(e);
		}
	}
});

/*
 * @class Tooltip
 * @inherits DivOverlay
 * @aka L.Tooltip
 * Used to display small texts on top of map layers.
 *
 * @example
 *
 * ```js
 * marker.bindTooltip("my tooltip text").openTooltip();
 * ```
 * Note about tooltip offset. Leaflet takes two options in consideration
 * for computing tooltip offseting:
 * - the `offset` Tooltip option: it defaults to [0, 0], and it's specific to one tooltip.
 *   Add a positive x offset to move the tooltip to the right, and a positive y offset to
 *   move it to the bottom. Negatives will move to the left and top.
 * - the `tooltipAnchor` Icon option: this will only be considered for Marker. You
 *   should adapt this value if you use a custom icon.
 */


// @namespace Tooltip
var Tooltip = DivOverlay.extend({

	// @section
	// @aka Tooltip options
	options: {
		// @option pane: String = 'tooltipPane'
		// `Map pane` where the tooltip will be added.
		pane: 'tooltipPane',

		// @option offset: Point = Point(0, 0)
		// Optional offset of the tooltip position.
		offset: [0, 0],

		// @option direction: String = 'auto'
		// Direction where to open the tooltip. Possible values are: `right`, `left`,
		// `top`, `bottom`, `center`, `auto`.
		// `auto` will dynamicaly switch between `right` and `left` according to the tooltip
		// position on the map.
		direction: 'auto',

		// @option permanent: Boolean = false
		// Whether to open the tooltip permanently or only on mouseover.
		permanent: false,

		// @option sticky: Boolean = false
		// If true, the tooltip will follow the mouse instead of being fixed at the feature center.
		sticky: false,

		// @option interactive: Boolean = false
		// If true, the tooltip will listen to the feature events.
		interactive: false,

		// @option opacity: Number = 0.9
		// Tooltip container opacity.
		opacity: 0.9
	},

	onAdd: function (map) {
		DivOverlay.prototype.onAdd.call(this, map);
		this.setOpacity(this.options.opacity);

		// @namespace Map
		// @section Tooltip events
		// @event tooltipopen: TooltipEvent
		// Fired when a tooltip is opened in the map.
		map.fire('tooltipopen', {tooltip: this});

		if (this._source) {
			// @namespace Layer
			// @section Tooltip events
			// @event tooltipopen: TooltipEvent
			// Fired when a tooltip bound to this layer is opened.
			this._source.fire('tooltipopen', {tooltip: this}, true);
		}
	},

	onRemove: function (map) {
		DivOverlay.prototype.onRemove.call(this, map);

		// @namespace Map
		// @section Tooltip events
		// @event tooltipclose: TooltipEvent
		// Fired when a tooltip in the map is closed.
		map.fire('tooltipclose', {tooltip: this});

		if (this._source) {
			// @namespace Layer
			// @section Tooltip events
			// @event tooltipclose: TooltipEvent
			// Fired when a tooltip bound to this layer is closed.
			this._source.fire('tooltipclose', {tooltip: this}, true);
		}
	},

	getEvents: function () {
		var events = DivOverlay.prototype.getEvents.call(this);

		if (touch && !this.options.permanent) {
			events.preclick = this._close;
		}

		return events;
	},

	_close: function () {
		if (this._map) {
			this._map.closeTooltip(this);
		}
	},

	_initLayout: function () {
		var prefix = 'leaflet-tooltip',
		    className = prefix + ' ' + (this.options.className || '') + ' leaflet-zoom-' + (this._zoomAnimated ? 'animated' : 'hide');

		this._contentNode = this._container = create$1('div', className);
	},

	_updateLayout: function () {},

	_adjustPan: function () {},

	_setPosition: function (pos) {
		var map = this._map,
		    container = this._container,
		    centerPoint = map.latLngToContainerPoint(map.getCenter()),
		    tooltipPoint = map.layerPointToContainerPoint(pos),
		    direction = this.options.direction,
		    tooltipWidth = container.offsetWidth,
		    tooltipHeight = container.offsetHeight,
		    offset = toPoint(this.options.offset),
		    anchor = this._getAnchor();

		if (direction === 'top') {
			pos = pos.add(toPoint(-tooltipWidth / 2 + offset.x, -tooltipHeight + offset.y + anchor.y, true));
		} else if (direction === 'bottom') {
			pos = pos.subtract(toPoint(tooltipWidth / 2 - offset.x, -offset.y, true));
		} else if (direction === 'center') {
			pos = pos.subtract(toPoint(tooltipWidth / 2 + offset.x, tooltipHeight / 2 - anchor.y + offset.y, true));
		} else if (direction === 'right' || direction === 'auto' && tooltipPoint.x < centerPoint.x) {
			direction = 'right';
			pos = pos.add(toPoint(offset.x + anchor.x, anchor.y - tooltipHeight / 2 + offset.y, true));
		} else {
			direction = 'left';
			pos = pos.subtract(toPoint(tooltipWidth + anchor.x - offset.x, tooltipHeight / 2 - anchor.y - offset.y, true));
		}

		removeClass(container, 'leaflet-tooltip-right');
		removeClass(container, 'leaflet-tooltip-left');
		removeClass(container, 'leaflet-tooltip-top');
		removeClass(container, 'leaflet-tooltip-bottom');
		addClass(container, 'leaflet-tooltip-' + direction);
		setPosition(container, pos);
	},

	_updatePosition: function () {
		var pos = this._map.latLngToLayerPoint(this._latlng);
		this._setPosition(pos);
	},

	setOpacity: function (opacity) {
		this.options.opacity = opacity;

		if (this._container) {
			setOpacity(this._container, opacity);
		}
	},

	_animateZoom: function (e) {
		var pos = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center);
		this._setPosition(pos);
	},

	_getAnchor: function () {
		// Where should we anchor the tooltip on the source layer?
		return toPoint(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
	}

});

// @namespace Tooltip
// @factory L.tooltip(options?: Tooltip options, source?: Layer)
// Instantiates a Tooltip object given an optional `options` object that describes its appearance and location and an optional `source` object that is used to tag the tooltip with a reference to the Layer to which it refers.
var tooltip = function (options, source) {
	return new Tooltip(options, source);
};

// @namespace Map
// @section Methods for Layers and Controls
Map.include({

	// @method openTooltip(tooltip: Tooltip): this
	// Opens the specified tooltip.
	// @alternative
	// @method openTooltip(content: String|HTMLElement, latlng: LatLng, options?: Tooltip options): this
	// Creates a tooltip with the specified content and options and open it.
	openTooltip: function (tooltip, latlng, options) {
		if (!(tooltip instanceof Tooltip)) {
			tooltip = new Tooltip(options).setContent(tooltip);
		}

		if (latlng) {
			tooltip.setLatLng(latlng);
		}

		if (this.hasLayer(tooltip)) {
			return this;
		}

		return this.addLayer(tooltip);
	},

	// @method closeTooltip(tooltip?: Tooltip): this
	// Closes the tooltip given as parameter.
	closeTooltip: function (tooltip) {
		if (tooltip) {
			this.removeLayer(tooltip);
		}
		return this;
	}

});

/*
 * @namespace Layer
 * @section Tooltip methods example
 *
 * All layers share a set of methods convenient for binding tooltips to it.
 *
 * ```js
 * var layer = L.Polygon(latlngs).bindTooltip('Hi There!').addTo(map);
 * layer.openTooltip();
 * layer.closeTooltip();
 * ```
 */

// @section Tooltip methods
Layer.include({

	// @method bindTooltip(content: String|HTMLElement|Function|Tooltip, options?: Tooltip options): this
	// Binds a tooltip to the layer with the passed `content` and sets up the
	// necessary event listeners. If a `Function` is passed it will receive
	// the layer as the first argument and should return a `String` or `HTMLElement`.
	bindTooltip: function (content, options) {

		if (content instanceof Tooltip) {
			setOptions(content, options);
			this._tooltip = content;
			content._source = this;
		} else {
			if (!this._tooltip || options) {
				this._tooltip = new Tooltip(options, this);
			}
			this._tooltip.setContent(content);

		}

		this._initTooltipInteractions();

		if (this._tooltip.options.permanent && this._map && this._map.hasLayer(this)) {
			this.openTooltip();
		}

		return this;
	},

	// @method unbindTooltip(): this
	// Removes the tooltip previously bound with `bindTooltip`.
	unbindTooltip: function () {
		if (this._tooltip) {
			this._initTooltipInteractions(true);
			this.closeTooltip();
			this._tooltip = null;
		}
		return this;
	},

	_initTooltipInteractions: function (remove$$1) {
		if (!remove$$1 && this._tooltipHandlersAdded) { return; }
		var onOff = remove$$1 ? 'off' : 'on',
		    events = {
			remove: this.closeTooltip,
			move: this._moveTooltip
		    };
		if (!this._tooltip.options.permanent) {
			events.mouseover = this._openTooltip;
			events.mouseout = this.closeTooltip;
			if (this._tooltip.options.sticky) {
				events.mousemove = this._moveTooltip;
			}
			if (touch) {
				events.click = this._openTooltip;
			}
		} else {
			events.add = this._openTooltip;
		}
		this[onOff](events);
		this._tooltipHandlersAdded = !remove$$1;
	},

	// @method openTooltip(latlng?: LatLng): this
	// Opens the bound tooltip at the specificed `latlng` or at the default tooltip anchor if no `latlng` is passed.
	openTooltip: function (layer, latlng) {
		if (!(layer instanceof Layer)) {
			latlng = layer;
			layer = this;
		}

		if (layer instanceof FeatureGroup) {
			for (var id in this._layers) {
				layer = this._layers[id];
				break;
			}
		}

		if (!latlng) {
			latlng = layer.getCenter ? layer.getCenter() : layer.getLatLng();
		}

		if (this._tooltip && this._map) {

			// set tooltip source to this layer
			this._tooltip._source = layer;

			// update the tooltip (content, layout, ect...)
			this._tooltip.update();

			// open the tooltip on the map
			this._map.openTooltip(this._tooltip, latlng);

			// Tooltip container may not be defined if not permanent and never
			// opened.
			if (this._tooltip.options.interactive && this._tooltip._container) {
				addClass(this._tooltip._container, 'leaflet-clickable');
				this.addInteractiveTarget(this._tooltip._container);
			}
		}

		return this;
	},

	// @method closeTooltip(): this
	// Closes the tooltip bound to this layer if it is open.
	closeTooltip: function () {
		if (this._tooltip) {
			this._tooltip._close();
			if (this._tooltip.options.interactive && this._tooltip._container) {
				removeClass(this._tooltip._container, 'leaflet-clickable');
				this.removeInteractiveTarget(this._tooltip._container);
			}
		}
		return this;
	},

	// @method toggleTooltip(): this
	// Opens or closes the tooltip bound to this layer depending on its current state.
	toggleTooltip: function (target) {
		if (this._tooltip) {
			if (this._tooltip._map) {
				this.closeTooltip();
			} else {
				this.openTooltip(target);
			}
		}
		return this;
	},

	// @method isTooltipOpen(): boolean
	// Returns `true` if the tooltip bound to this layer is currently open.
	isTooltipOpen: function () {
		return this._tooltip.isOpen();
	},

	// @method setTooltipContent(content: String|HTMLElement|Tooltip): this
	// Sets the content of the tooltip bound to this layer.
	setTooltipContent: function (content) {
		if (this._tooltip) {
			this._tooltip.setContent(content);
		}
		return this;
	},

	// @method getTooltip(): Tooltip
	// Returns the tooltip bound to this layer.
	getTooltip: function () {
		return this._tooltip;
	},

	_openTooltip: function (e) {
		var layer = e.layer || e.target;

		if (!this._tooltip || !this._map) {
			return;
		}
		this.openTooltip(layer, this._tooltip.options.sticky ? e.latlng : undefined);
	},

	_moveTooltip: function (e) {
		var latlng = e.latlng, containerPoint, layerPoint;
		if (this._tooltip.options.sticky && e.originalEvent) {
			containerPoint = this._map.mouseEventToContainerPoint(e.originalEvent);
			layerPoint = this._map.containerPointToLayerPoint(containerPoint);
			latlng = this._map.layerPointToLatLng(layerPoint);
		}
		this._tooltip.setLatLng(latlng);
	}
});

/*
 * @class DivIcon
 * @aka L.DivIcon
 * @inherits Icon
 *
 * Represents a lightweight icon for markers that uses a simple `<div>`
 * element instead of an image. Inherits from `Icon` but ignores the `iconUrl` and shadow options.
 *
 * @example
 * ```js
 * var myIcon = L.divIcon({className: 'my-div-icon'});
 * // you can set .my-div-icon styles in CSS
 *
 * L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);
 * ```
 *
 * By default, it has a 'leaflet-div-icon' CSS class and is styled as a little white square with a shadow.
 */

var DivIcon = Icon.extend({
	options: {
		// @section
		// @aka DivIcon options
		iconSize: [12, 12], // also can be set through CSS

		// iconAnchor: (Point),
		// popupAnchor: (Point),

		// @option html: String = ''
		// Custom HTML code to put inside the div element, empty by default.
		html: false,

		// @option bgPos: Point = [0, 0]
		// Optional relative position of the background, in pixels
		bgPos: null,

		className: 'leaflet-div-icon'
	},

	createIcon: function (oldIcon) {
		var div = (oldIcon && oldIcon.tagName === 'DIV') ? oldIcon : document.createElement('div'),
		    options = this.options;

		div.innerHTML = options.html !== false ? options.html : '';

		if (options.bgPos) {
			var bgPos = toPoint(options.bgPos);
			div.style.backgroundPosition = (-bgPos.x) + 'px ' + (-bgPos.y) + 'px';
		}
		this._setIconStyles(div, 'icon');

		return div;
	},

	createShadow: function () {
		return null;
	}
});

// @factory L.divIcon(options: DivIcon options)
// Creates a `DivIcon` instance with the given options.
function divIcon(options) {
	return new DivIcon(options);
}

Icon.Default = IconDefault;

/*
 * @class GridLayer
 * @inherits Layer
 * @aka L.GridLayer
 *
 * Generic class for handling a tiled grid of HTML elements. This is the base class for all tile layers and replaces `TileLayer.Canvas`.
 * GridLayer can be extended to create a tiled grid of HTML elements like `<canvas>`, `<img>` or `<div>`. GridLayer will handle creating and animating these DOM elements for you.
 *
 *
 * @section Synchronous usage
 * @example
 *
 * To create a custom layer, extend GridLayer and implement the `createTile()` method, which will be passed a `Point` object with the `x`, `y`, and `z` (zoom level) coordinates to draw your tile.
 *
 * ```js
 * var CanvasLayer = L.GridLayer.extend({
 *     createTile: function(coords){
 *         // create a <canvas> element for drawing
 *         var tile = L.DomUtil.create('canvas', 'leaflet-tile');
 *
 *         // setup tile width and height according to the options
 *         var size = this.getTileSize();
 *         tile.width = size.x;
 *         tile.height = size.y;
 *
 *         // get a canvas context and draw something on it using coords.x, coords.y and coords.z
 *         var ctx = tile.getContext('2d');
 *
 *         // return the tile so it can be rendered on screen
 *         return tile;
 *     }
 * });
 * ```
 *
 * @section Asynchronous usage
 * @example
 *
 * Tile creation can also be asynchronous, this is useful when using a third-party drawing library. Once the tile is finished drawing it can be passed to the `done()` callback.
 *
 * ```js
 * var CanvasLayer = L.GridLayer.extend({
 *     createTile: function(coords, done){
 *         var error;
 *
 *         // create a <canvas> element for drawing
 *         var tile = L.DomUtil.create('canvas', 'leaflet-tile');
 *
 *         // setup tile width and height according to the options
 *         var size = this.getTileSize();
 *         tile.width = size.x;
 *         tile.height = size.y;
 *
 *         // draw something asynchronously and pass the tile to the done() callback
 *         setTimeout(function() {
 *             done(error, tile);
 *         }, 1000);
 *
 *         return tile;
 *     }
 * });
 * ```
 *
 * @section
 */


var GridLayer = Layer.extend({

	// @section
	// @aka GridLayer options
	options: {
		// @option tileSize: Number|Point = 256
		// Width and height of tiles in the grid. Use a number if width and height are equal, or `L.point(width, height)` otherwise.
		tileSize: 256,

		// @option opacity: Number = 1.0
		// Opacity of the tiles. Can be used in the `createTile()` function.
		opacity: 1,

		// @option updateWhenIdle: Boolean = (depends)
		// Load new tiles only when panning ends.
		// `true` by default on mobile browsers, in order to avoid too many requests and keep smooth navigation.
		// `false` otherwise in order to display new tiles _during_ panning, since it is easy to pan outside the
		// [`keepBuffer`](#gridlayer-keepbuffer) option in desktop browsers.
		updateWhenIdle: mobile,

		// @option updateWhenZooming: Boolean = true
		// By default, a smooth zoom animation (during a [touch zoom](#map-touchzoom) or a [`flyTo()`](#map-flyto)) will update grid layers every integer zoom level. Setting this option to `false` will update the grid layer only when the smooth animation ends.
		updateWhenZooming: true,

		// @option updateInterval: Number = 200
		// Tiles will not update more than once every `updateInterval` milliseconds when panning.
		updateInterval: 200,

		// @option zIndex: Number = 1
		// The explicit zIndex of the tile layer.
		zIndex: 1,

		// @option bounds: LatLngBounds = undefined
		// If set, tiles will only be loaded inside the set `LatLngBounds`.
		bounds: null,

		// @option minZoom: Number = 0
		// The minimum zoom level down to which this layer will be displayed (inclusive).
		minZoom: 0,

		// @option maxZoom: Number = undefined
		// The maximum zoom level up to which this layer will be displayed (inclusive).
		maxZoom: undefined,

		// @option maxNativeZoom: Number = undefined
		// Maximum zoom number the tile source has available. If it is specified,
		// the tiles on all zoom levels higher than `maxNativeZoom` will be loaded
		// from `maxNativeZoom` level and auto-scaled.
		maxNativeZoom: undefined,

		// @option minNativeZoom: Number = undefined
		// Minimum zoom number the tile source has available. If it is specified,
		// the tiles on all zoom levels lower than `minNativeZoom` will be loaded
		// from `minNativeZoom` level and auto-scaled.
		minNativeZoom: undefined,

		// @option noWrap: Boolean = false
		// Whether the layer is wrapped around the antimeridian. If `true`, the
		// GridLayer will only be displayed once at low zoom levels. Has no
		// effect when the [map CRS](#map-crs) doesn't wrap around. Can be used
		// in combination with [`bounds`](#gridlayer-bounds) to prevent requesting
		// tiles outside the CRS limits.
		noWrap: false,

		// @option pane: String = 'tilePane'
		// `Map pane` where the grid layer will be added.
		pane: 'tilePane',

		// @option className: String = ''
		// A custom class name to assign to the tile layer. Empty by default.
		className: '',

		// @option keepBuffer: Number = 2
		// When panning the map, keep this many rows and columns of tiles before unloading them.
		keepBuffer: 2
	},

	initialize: function (options) {
		setOptions(this, options);
	},

	onAdd: function () {
		this._initContainer();

		this._levels = {};
		this._tiles = {};

		this._resetView();
		this._update();
	},

	beforeAdd: function (map) {
		map._addZoomLimit(this);
	},

	onRemove: function (map) {
		this._removeAllTiles();
		remove(this._container);
		map._removeZoomLimit(this);
		this._container = null;
		this._tileZoom = null;
	},

	// @method bringToFront: this
	// Brings the tile layer to the top of all tile layers.
	bringToFront: function () {
		if (this._map) {
			toFront(this._container);
			this._setAutoZIndex(Math.max);
		}
		return this;
	},

	// @method bringToBack: this
	// Brings the tile layer to the bottom of all tile layers.
	bringToBack: function () {
		if (this._map) {
			toBack(this._container);
			this._setAutoZIndex(Math.min);
		}
		return this;
	},

	// @method getContainer: HTMLElement
	// Returns the HTML element that contains the tiles for this layer.
	getContainer: function () {
		return this._container;
	},

	// @method setOpacity(opacity: Number): this
	// Changes the [opacity](#gridlayer-opacity) of the grid layer.
	setOpacity: function (opacity) {
		this.options.opacity = opacity;
		this._updateOpacity();
		return this;
	},

	// @method setZIndex(zIndex: Number): this
	// Changes the [zIndex](#gridlayer-zindex) of the grid layer.
	setZIndex: function (zIndex) {
		this.options.zIndex = zIndex;
		this._updateZIndex();

		return this;
	},

	// @method isLoading: Boolean
	// Returns `true` if any tile in the grid layer has not finished loading.
	isLoading: function () {
		return this._loading;
	},

	// @method redraw: this
	// Causes the layer to clear all the tiles and request them again.
	redraw: function () {
		if (this._map) {
			this._removeAllTiles();
			this._update();
		}
		return this;
	},

	getEvents: function () {
		var events = {
			viewprereset: this._invalidateAll,
			viewreset: this._resetView,
			zoom: this._resetView,
			moveend: this._onMoveEnd
		};

		if (!this.options.updateWhenIdle) {
			// update tiles on move, but not more often than once per given interval
			if (!this._onMove) {
				this._onMove = throttle(this._onMoveEnd, this.options.updateInterval, this);
			}

			events.move = this._onMove;
		}

		if (this._zoomAnimated) {
			events.zoomanim = this._animateZoom;
		}

		return events;
	},

	// @section Extension methods
	// Layers extending `GridLayer` shall reimplement the following method.
	// @method createTile(coords: Object, done?: Function): HTMLElement
	// Called only internally, must be overriden by classes extending `GridLayer`.
	// Returns the `HTMLElement` corresponding to the given `coords`. If the `done` callback
	// is specified, it must be called when the tile has finished loading and drawing.
	createTile: function () {
		return document.createElement('div');
	},

	// @section
	// @method getTileSize: Point
	// Normalizes the [tileSize option](#gridlayer-tilesize) into a point. Used by the `createTile()` method.
	getTileSize: function () {
		var s = this.options.tileSize;
		return s instanceof Point ? s : new Point(s, s);
	},

	_updateZIndex: function () {
		if (this._container && this.options.zIndex !== undefined && this.options.zIndex !== null) {
			this._container.style.zIndex = this.options.zIndex;
		}
	},

	_setAutoZIndex: function (compare) {
		// go through all other layers of the same pane, set zIndex to max + 1 (front) or min - 1 (back)

		var layers = this.getPane().children,
		    edgeZIndex = -compare(-Infinity, Infinity); // -Infinity for max, Infinity for min

		for (var i = 0, len = layers.length, zIndex; i < len; i++) {

			zIndex = layers[i].style.zIndex;

			if (layers[i] !== this._container && zIndex) {
				edgeZIndex = compare(edgeZIndex, +zIndex);
			}
		}

		if (isFinite(edgeZIndex)) {
			this.options.zIndex = edgeZIndex + compare(-1, 1);
			this._updateZIndex();
		}
	},

	_updateOpacity: function () {
		if (!this._map) { return; }

		// IE doesn't inherit filter opacity properly, so we're forced to set it on tiles
		if (ielt9) { return; }

		setOpacity(this._container, this.options.opacity);

		var now = +new Date(),
		    nextFrame = false,
		    willPrune = false;

		for (var key in this._tiles) {
			var tile = this._tiles[key];
			if (!tile.current || !tile.loaded) { continue; }

			var fade = Math.min(1, (now - tile.loaded) / 200);

			setOpacity(tile.el, fade);
			if (fade < 1) {
				nextFrame = true;
			} else {
				if (tile.active) {
					willPrune = true;
				} else {
					this._onOpaqueTile(tile);
				}
				tile.active = true;
			}
		}

		if (willPrune && !this._noPrune) { this._pruneTiles(); }

		if (nextFrame) {
			cancelAnimFrame(this._fadeFrame);
			this._fadeFrame = requestAnimFrame(this._updateOpacity, this);
		}
	},

	_onOpaqueTile: falseFn,

	_initContainer: function () {
		if (this._container) { return; }

		this._container = create$1('div', 'leaflet-layer ' + (this.options.className || ''));
		this._updateZIndex();

		if (this.options.opacity < 1) {
			this._updateOpacity();
		}

		this.getPane().appendChild(this._container);
	},

	_updateLevels: function () {

		var zoom = this._tileZoom,
		    maxZoom = this.options.maxZoom;

		if (zoom === undefined) { return undefined; }

		for (var z in this._levels) {
			if (this._levels[z].el.children.length || z === zoom) {
				this._levels[z].el.style.zIndex = maxZoom - Math.abs(zoom - z);
				this._onUpdateLevel(z);
			} else {
				remove(this._levels[z].el);
				this._removeTilesAtZoom(z);
				this._onRemoveLevel(z);
				delete this._levels[z];
			}
		}

		var level = this._levels[zoom],
		    map = this._map;

		if (!level) {
			level = this._levels[zoom] = {};

			level.el = create$1('div', 'leaflet-tile-container leaflet-zoom-animated', this._container);
			level.el.style.zIndex = maxZoom;

			level.origin = map.project(map.unproject(map.getPixelOrigin()), zoom).round();
			level.zoom = zoom;

			this._setZoomTransform(level, map.getCenter(), map.getZoom());

			// force the browser to consider the newly added element for transition
			falseFn(level.el.offsetWidth);

			this._onCreateLevel(level);
		}

		this._level = level;

		return level;
	},

	_onUpdateLevel: falseFn,

	_onRemoveLevel: falseFn,

	_onCreateLevel: falseFn,

	_pruneTiles: function () {
		if (!this._map) {
			return;
		}

		var key, tile;

		var zoom = this._map.getZoom();
		if (zoom > this.options.maxZoom ||
			zoom < this.options.minZoom) {
			this._removeAllTiles();
			return;
		}

		for (key in this._tiles) {
			tile = this._tiles[key];
			tile.retain = tile.current;
		}

		for (key in this._tiles) {
			tile = this._tiles[key];
			if (tile.current && !tile.active) {
				var coords = tile.coords;
				if (!this._retainParent(coords.x, coords.y, coords.z, coords.z - 5)) {
					this._retainChildren(coords.x, coords.y, coords.z, coords.z + 2);
				}
			}
		}

		for (key in this._tiles) {
			if (!this._tiles[key].retain) {
				this._removeTile(key);
			}
		}
	},

	_removeTilesAtZoom: function (zoom) {
		for (var key in this._tiles) {
			if (this._tiles[key].coords.z !== zoom) {
				continue;
			}
			this._removeTile(key);
		}
	},

	_removeAllTiles: function () {
		for (var key in this._tiles) {
			this._removeTile(key);
		}
	},

	_invalidateAll: function () {
		for (var z in this._levels) {
			remove(this._levels[z].el);
			this._onRemoveLevel(z);
			delete this._levels[z];
		}
		this._removeAllTiles();

		this._tileZoom = null;
	},

	_retainParent: function (x, y, z, minZoom) {
		var x2 = Math.floor(x / 2),
		    y2 = Math.floor(y / 2),
		    z2 = z - 1,
		    coords2 = new Point(+x2, +y2);
		coords2.z = +z2;

		var key = this._tileCoordsToKey(coords2),
		    tile = this._tiles[key];

		if (tile && tile.active) {
			tile.retain = true;
			return true;

		} else if (tile && tile.loaded) {
			tile.retain = true;
		}

		if (z2 > minZoom) {
			return this._retainParent(x2, y2, z2, minZoom);
		}

		return false;
	},

	_retainChildren: function (x, y, z, maxZoom) {

		for (var i = 2 * x; i < 2 * x + 2; i++) {
			for (var j = 2 * y; j < 2 * y + 2; j++) {

				var coords = new Point(i, j);
				coords.z = z + 1;

				var key = this._tileCoordsToKey(coords),
				    tile = this._tiles[key];

				if (tile && tile.active) {
					tile.retain = true;
					continue;

				} else if (tile && tile.loaded) {
					tile.retain = true;
				}

				if (z + 1 < maxZoom) {
					this._retainChildren(i, j, z + 1, maxZoom);
				}
			}
		}
	},

	_resetView: function (e) {
		var animating = e && (e.pinch || e.flyTo);
		this._setView(this._map.getCenter(), this._map.getZoom(), animating, animating);
	},

	_animateZoom: function (e) {
		this._setView(e.center, e.zoom, true, e.noUpdate);
	},

	_clampZoom: function (zoom) {
		var options = this.options;

		if (undefined !== options.minNativeZoom && zoom < options.minNativeZoom) {
			return options.minNativeZoom;
		}

		if (undefined !== options.maxNativeZoom && options.maxNativeZoom < zoom) {
			return options.maxNativeZoom;
		}

		return zoom;
	},

	_setView: function (center, zoom, noPrune, noUpdate) {
		var tileZoom = this._clampZoom(Math.round(zoom));
		if ((this.options.maxZoom !== undefined && tileZoom > this.options.maxZoom) ||
		    (this.options.minZoom !== undefined && tileZoom < this.options.minZoom)) {
			tileZoom = undefined;
		}

		var tileZoomChanged = this.options.updateWhenZooming && (tileZoom !== this._tileZoom);

		if (!noUpdate || tileZoomChanged) {

			this._tileZoom = tileZoom;

			if (this._abortLoading) {
				this._abortLoading();
			}

			this._updateLevels();
			this._resetGrid();

			if (tileZoom !== undefined) {
				this._update(center);
			}

			if (!noPrune) {
				this._pruneTiles();
			}

			// Flag to prevent _updateOpacity from pruning tiles during
			// a zoom anim or a pinch gesture
			this._noPrune = !!noPrune;
		}

		this._setZoomTransforms(center, zoom);
	},

	_setZoomTransforms: function (center, zoom) {
		for (var i in this._levels) {
			this._setZoomTransform(this._levels[i], center, zoom);
		}
	},

	_setZoomTransform: function (level, center, zoom) {
		var scale = this._map.getZoomScale(zoom, level.zoom),
		    translate = level.origin.multiplyBy(scale)
		        .subtract(this._map._getNewPixelOrigin(center, zoom)).round();

		if (any3d) {
			setTransform(level.el, translate, scale);
		} else {
			setPosition(level.el, translate);
		}
	},

	_resetGrid: function () {
		var map = this._map,
		    crs = map.options.crs,
		    tileSize = this._tileSize = this.getTileSize(),
		    tileZoom = this._tileZoom;

		var bounds = this._map.getPixelWorldBounds(this._tileZoom);
		if (bounds) {
			this._globalTileRange = this._pxBoundsToTileRange(bounds);
		}

		this._wrapX = crs.wrapLng && !this.options.noWrap && [
			Math.floor(map.project([0, crs.wrapLng[0]], tileZoom).x / tileSize.x),
			Math.ceil(map.project([0, crs.wrapLng[1]], tileZoom).x / tileSize.y)
		];
		this._wrapY = crs.wrapLat && !this.options.noWrap && [
			Math.floor(map.project([crs.wrapLat[0], 0], tileZoom).y / tileSize.x),
			Math.ceil(map.project([crs.wrapLat[1], 0], tileZoom).y / tileSize.y)
		];
	},

	_onMoveEnd: function () {
		if (!this._map || this._map._animatingZoom) { return; }

		this._update();
	},

	_getTiledPixelBounds: function (center) {
		var map = this._map,
		    mapZoom = map._animatingZoom ? Math.max(map._animateToZoom, map.getZoom()) : map.getZoom(),
		    scale = map.getZoomScale(mapZoom, this._tileZoom),
		    pixelCenter = map.project(center, this._tileZoom).floor(),
		    halfSize = map.getSize().divideBy(scale * 2);

		return new Bounds(pixelCenter.subtract(halfSize), pixelCenter.add(halfSize));
	},

	// Private method to load tiles in the grid's active zoom level according to map bounds
	_update: function (center) {
		var map = this._map;
		if (!map) { return; }
		var zoom = this._clampZoom(map.getZoom());

		if (center === undefined) { center = map.getCenter(); }
		if (this._tileZoom === undefined) { return; }	// if out of minzoom/maxzoom

		var pixelBounds = this._getTiledPixelBounds(center),
		    tileRange = this._pxBoundsToTileRange(pixelBounds),
		    tileCenter = tileRange.getCenter(),
		    queue = [],
		    margin = this.options.keepBuffer,
		    noPruneRange = new Bounds(tileRange.getBottomLeft().subtract([margin, -margin]),
		                              tileRange.getTopRight().add([margin, -margin]));

		// Sanity check: panic if the tile range contains Infinity somewhere.
		if (!(isFinite(tileRange.min.x) &&
		      isFinite(tileRange.min.y) &&
		      isFinite(tileRange.max.x) &&
		      isFinite(tileRange.max.y))) { throw new Error('Attempted to load an infinite number of tiles'); }

		for (var key in this._tiles) {
			var c = this._tiles[key].coords;
			if (c.z !== this._tileZoom || !noPruneRange.contains(new Point(c.x, c.y))) {
				this._tiles[key].current = false;
			}
		}

		// _update just loads more tiles. If the tile zoom level differs too much
		// from the map's, let _setView reset levels and prune old tiles.
		if (Math.abs(zoom - this._tileZoom) > 1) { this._setView(center, zoom); return; }

		// create a queue of coordinates to load tiles from
		for (var j = tileRange.min.y; j <= tileRange.max.y; j++) {
			for (var i = tileRange.min.x; i <= tileRange.max.x; i++) {
				var coords = new Point(i, j);
				coords.z = this._tileZoom;

				if (!this._isValidTile(coords)) { continue; }

				if (!this._tiles[this._tileCoordsToKey(coords)]) {
					queue.push(coords);
				}
			}
		}

		// sort tile queue to load tiles in order of their distance to center
		queue.sort(function (a, b) {
			return a.distanceTo(tileCenter) - b.distanceTo(tileCenter);
		});

		if (queue.length !== 0) {
			// if it's the first batch of tiles to load
			if (!this._loading) {
				this._loading = true;
				// @event loading: Event
				// Fired when the grid layer starts loading tiles.
				this.fire('loading');
			}

			// create DOM fragment to append tiles in one batch
			var fragment = document.createDocumentFragment();

			for (i = 0; i < queue.length; i++) {
				this._addTile(queue[i], fragment);
			}

			this._level.el.appendChild(fragment);
		}
	},

	_isValidTile: function (coords) {
		var crs = this._map.options.crs;

		if (!crs.infinite) {
			// don't load tile if it's out of bounds and not wrapped
			var bounds = this._globalTileRange;
			if ((!crs.wrapLng && (coords.x < bounds.min.x || coords.x > bounds.max.x)) ||
			    (!crs.wrapLat && (coords.y < bounds.min.y || coords.y > bounds.max.y))) { return false; }
		}

		if (!this.options.bounds) { return true; }

		// don't load tile if it doesn't intersect the bounds in options
		var tileBounds = this._tileCoordsToBounds(coords);
		return toLatLngBounds(this.options.bounds).overlaps(tileBounds);
	},

	_keyToBounds: function (key) {
		return this._tileCoordsToBounds(this._keyToTileCoords(key));
	},

	// converts tile coordinates to its geographical bounds
	_tileCoordsToBounds: function (coords) {

		var map = this._map,
		    tileSize = this.getTileSize(),

		    nwPoint = coords.scaleBy(tileSize),
		    sePoint = nwPoint.add(tileSize),

		    nw = map.unproject(nwPoint, coords.z),
		    se = map.unproject(sePoint, coords.z),
		    bounds = new LatLngBounds(nw, se);

		if (!this.options.noWrap) {
			map.wrapLatLngBounds(bounds);
		}

		return bounds;
	},

	// converts tile coordinates to key for the tile cache
	_tileCoordsToKey: function (coords) {
		return coords.x + ':' + coords.y + ':' + coords.z;
	},

	// converts tile cache key to coordinates
	_keyToTileCoords: function (key) {
		var k = key.split(':'),
		    coords = new Point(+k[0], +k[1]);
		coords.z = +k[2];
		return coords;
	},

	_removeTile: function (key) {
		var tile = this._tiles[key];
		if (!tile) { return; }

		remove(tile.el);

		delete this._tiles[key];

		// @event tileunload: TileEvent
		// Fired when a tile is removed (e.g. when a tile goes off the screen).
		this.fire('tileunload', {
			tile: tile.el,
			coords: this._keyToTileCoords(key)
		});
	},

	_initTile: function (tile) {
		addClass(tile, 'leaflet-tile');

		var tileSize = this.getTileSize();
		tile.style.width = tileSize.x + 'px';
		tile.style.height = tileSize.y + 'px';

		tile.onselectstart = falseFn;
		tile.onmousemove = falseFn;

		// update opacity on tiles in IE7-8 because of filter inheritance problems
		if (ielt9 && this.options.opacity < 1) {
			setOpacity(tile, this.options.opacity);
		}

		// without this hack, tiles disappear after zoom on Chrome for Android
		// https://github.com/Leaflet/Leaflet/issues/2078
		if (android && !android23) {
			tile.style.WebkitBackfaceVisibility = 'hidden';
		}
	},

	_addTile: function (coords, container) {
		var tilePos = this._getTilePos(coords),
		    key = this._tileCoordsToKey(coords);

		var tile = this.createTile(this._wrapCoords(coords), bind(this._tileReady, this, coords));

		this._initTile(tile);

		// if createTile is defined with a second argument ("done" callback),
		// we know that tile is async and will be ready later; otherwise
		if (this.createTile.length < 2) {
			// mark tile as ready, but delay one frame for opacity animation to happen
			requestAnimFrame(bind(this._tileReady, this, coords, null, tile));
		}

		setPosition(tile, tilePos);

		// save tile in cache
		this._tiles[key] = {
			el: tile,
			coords: coords,
			current: true
		};

		container.appendChild(tile);
		// @event tileloadstart: TileEvent
		// Fired when a tile is requested and starts loading.
		this.fire('tileloadstart', {
			tile: tile,
			coords: coords
		});
	},

	_tileReady: function (coords, err, tile) {
		if (!this._map) { return; }

		if (err) {
			// @event tileerror: TileErrorEvent
			// Fired when there is an error loading a tile.
			this.fire('tileerror', {
				error: err,
				tile: tile,
				coords: coords
			});
		}

		var key = this._tileCoordsToKey(coords);

		tile = this._tiles[key];
		if (!tile) { return; }

		tile.loaded = +new Date();
		if (this._map._fadeAnimated) {
			setOpacity(tile.el, 0);
			cancelAnimFrame(this._fadeFrame);
			this._fadeFrame = requestAnimFrame(this._updateOpacity, this);
		} else {
			tile.active = true;
			this._pruneTiles();
		}

		if (!err) {
			addClass(tile.el, 'leaflet-tile-loaded');

			// @event tileload: TileEvent
			// Fired when a tile loads.
			this.fire('tileload', {
				tile: tile.el,
				coords: coords
			});
		}

		if (this._noTilesToLoad()) {
			this._loading = false;
			// @event load: Event
			// Fired when the grid layer loaded all visible tiles.
			this.fire('load');

			if (ielt9 || !this._map._fadeAnimated) {
				requestAnimFrame(this._pruneTiles, this);
			} else {
				// Wait a bit more than 0.2 secs (the duration of the tile fade-in)
				// to trigger a pruning.
				setTimeout(bind(this._pruneTiles, this), 250);
			}
		}
	},

	_getTilePos: function (coords) {
		return coords.scaleBy(this.getTileSize()).subtract(this._level.origin);
	},

	_wrapCoords: function (coords) {
		var newCoords = new Point(
			this._wrapX ? wrapNum(coords.x, this._wrapX) : coords.x,
			this._wrapY ? wrapNum(coords.y, this._wrapY) : coords.y);
		newCoords.z = coords.z;
		return newCoords;
	},

	_pxBoundsToTileRange: function (bounds) {
		var tileSize = this.getTileSize();
		return new Bounds(
			bounds.min.unscaleBy(tileSize).floor(),
			bounds.max.unscaleBy(tileSize).ceil().subtract([1, 1]));
	},

	_noTilesToLoad: function () {
		for (var key in this._tiles) {
			if (!this._tiles[key].loaded) { return false; }
		}
		return true;
	}
});

// @factory L.gridLayer(options?: GridLayer options)
// Creates a new instance of GridLayer with the supplied options.
function gridLayer(options) {
	return new GridLayer(options);
}

/*
 * @class TileLayer
 * @inherits GridLayer
 * @aka L.TileLayer
 * Used to load and display tile layers on the map. Extends `GridLayer`.
 *
 * @example
 *
 * ```js
 * L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar'}).addTo(map);
 * ```
 *
 * @section URL template
 * @example
 *
 * A string of the following form:
 *
 * ```
 * 'http://{s}.somedomain.com/blabla/{z}/{x}/{y}{r}.png'
 * ```
 *
 * `{s}` means one of the available subdomains (used sequentially to help with browser parallel requests per domain limitation; subdomain values are specified in options; `a`, `b` or `c` by default, can be omitted), `{z}` — zoom level, `{x}` and `{y}` — tile coordinates. `{r}` can be used to add "&commat;2x" to the URL to load retina tiles.
 *
 * You can use custom keys in the template, which will be [evaluated](#util-template) from TileLayer options, like this:
 *
 * ```
 * L.tileLayer('http://{s}.somedomain.com/{foo}/{z}/{x}/{y}.png', {foo: 'bar'});
 * ```
 */


var TileLayer = GridLayer.extend({

	// @section
	// @aka TileLayer options
	options: {
		// @option minZoom: Number = 0
		// The minimum zoom level down to which this layer will be displayed (inclusive).
		minZoom: 0,

		// @option maxZoom: Number = 18
		// The maximum zoom level up to which this layer will be displayed (inclusive).
		maxZoom: 18,

		// @option subdomains: String|String[] = 'abc'
		// Subdomains of the tile service. Can be passed in the form of one string (where each letter is a subdomain name) or an array of strings.
		subdomains: 'abc',

		// @option errorTileUrl: String = ''
		// URL to the tile image to show in place of the tile that failed to load.
		errorTileUrl: '',

		// @option zoomOffset: Number = 0
		// The zoom number used in tile URLs will be offset with this value.
		zoomOffset: 0,

		// @option tms: Boolean = false
		// If `true`, inverses Y axis numbering for tiles (turn this on for [TMS](https://en.wikipedia.org/wiki/Tile_Map_Service) services).
		tms: false,

		// @option zoomReverse: Boolean = false
		// If set to true, the zoom number used in tile URLs will be reversed (`maxZoom - zoom` instead of `zoom`)
		zoomReverse: false,

		// @option detectRetina: Boolean = false
		// If `true` and user is on a retina display, it will request four tiles of half the specified size and a bigger zoom level in place of one to utilize the high resolution.
		detectRetina: false,

		// @option crossOrigin: Boolean = false
		// If true, all tiles will have their crossOrigin attribute set to ''. This is needed if you want to access tile pixel data.
		crossOrigin: false
	},

	initialize: function (url, options) {

		this._url = url;

		options = setOptions(this, options);

		// detecting retina displays, adjusting tileSize and zoom levels
		if (options.detectRetina && retina && options.maxZoom > 0) {

			options.tileSize = Math.floor(options.tileSize / 2);

			if (!options.zoomReverse) {
				options.zoomOffset++;
				options.maxZoom--;
			} else {
				options.zoomOffset--;
				options.minZoom++;
			}

			options.minZoom = Math.max(0, options.minZoom);
		}

		if (typeof options.subdomains === 'string') {
			options.subdomains = options.subdomains.split('');
		}

		// for https://github.com/Leaflet/Leaflet/issues/137
		if (!android) {
			this.on('tileunload', this._onTileRemove);
		}
	},

	// @method setUrl(url: String, noRedraw?: Boolean): this
	// Updates the layer's URL template and redraws it (unless `noRedraw` is set to `true`).
	setUrl: function (url, noRedraw) {
		this._url = url;

		if (!noRedraw) {
			this.redraw();
		}
		return this;
	},

	// @method createTile(coords: Object, done?: Function): HTMLElement
	// Called only internally, overrides GridLayer's [`createTile()`](#gridlayer-createtile)
	// to return an `<img>` HTML element with the appropiate image URL given `coords`. The `done`
	// callback is called when the tile has been loaded.
	createTile: function (coords, done) {
		var tile = document.createElement('img');

		on(tile, 'load', bind(this._tileOnLoad, this, done, tile));
		on(tile, 'error', bind(this._tileOnError, this, done, tile));

		if (this.options.crossOrigin) {
			tile.crossOrigin = '';
		}

		/*
		 Alt tag is set to empty string to keep screen readers from reading URL and for compliance reasons
		 http://www.w3.org/TR/WCAG20-TECHS/H67
		*/
		tile.alt = '';

		/*
		 Set role="presentation" to force screen readers to ignore this
		 https://www.w3.org/TR/wai-aria/roles#textalternativecomputation
		*/
		tile.setAttribute('role', 'presentation');

		tile.src = this.getTileUrl(coords);

		return tile;
	},

	// @section Extension methods
	// @uninheritable
	// Layers extending `TileLayer` might reimplement the following method.
	// @method getTileUrl(coords: Object): String
	// Called only internally, returns the URL for a tile given its coordinates.
	// Classes extending `TileLayer` can override this function to provide custom tile URL naming schemes.
	getTileUrl: function (coords) {
		var data = {
			r: retina ? '@2x' : '',
			s: this._getSubdomain(coords),
			x: coords.x,
			y: coords.y,
			z: this._getZoomForUrl()
		};
		if (this._map && !this._map.options.crs.infinite) {
			var invertedY = this._globalTileRange.max.y - coords.y;
			if (this.options.tms) {
				data['y'] = invertedY;
			}
			data['-y'] = invertedY;
		}

		return template(this._url, extend(data, this.options));
	},

	_tileOnLoad: function (done, tile) {
		// For https://github.com/Leaflet/Leaflet/issues/3332
		if (ielt9) {
			setTimeout(bind(done, this, null, tile), 0);
		} else {
			done(null, tile);
		}
	},

	_tileOnError: function (done, tile, e) {
		var errorUrl = this.options.errorTileUrl;
		if (errorUrl && tile.src !== errorUrl) {
			tile.src = errorUrl;
		}
		done(e, tile);
	},

	_onTileRemove: function (e) {
		e.tile.onload = null;
	},

	_getZoomForUrl: function () {
		var zoom = this._tileZoom,
		maxZoom = this.options.maxZoom,
		zoomReverse = this.options.zoomReverse,
		zoomOffset = this.options.zoomOffset;

		if (zoomReverse) {
			zoom = maxZoom - zoom;
		}

		return zoom + zoomOffset;
	},

	_getSubdomain: function (tilePoint) {
		var index = Math.abs(tilePoint.x + tilePoint.y) % this.options.subdomains.length;
		return this.options.subdomains[index];
	},

	// stops loading all tiles in the background layer
	_abortLoading: function () {
		var i, tile;
		for (i in this._tiles) {
			if (this._tiles[i].coords.z !== this._tileZoom) {
				tile = this._tiles[i].el;

				tile.onload = falseFn;
				tile.onerror = falseFn;

				if (!tile.complete) {
					tile.src = emptyImageUrl;
					remove(tile);
				}
			}
		}
	}
});


// @factory L.tilelayer(urlTemplate: String, options?: TileLayer options)
// Instantiates a tile layer object given a `URL template` and optionally an options object.

function tileLayer(url, options) {
	return new TileLayer(url, options);
}

/*
 * @class TileLayer.WMS
 * @inherits TileLayer
 * @aka L.TileLayer.WMS
 * Used to display [WMS](https://en.wikipedia.org/wiki/Web_Map_Service) services as tile layers on the map. Extends `TileLayer`.
 *
 * @example
 *
 * ```js
 * var nexrad = L.tileLayer.wms("http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi", {
 * 	layers: 'nexrad-n0r-900913',
 * 	format: 'image/png',
 * 	transparent: true,
 * 	attribution: "Weather data © 2012 IEM Nexrad"
 * });
 * ```
 */

var TileLayerWMS = TileLayer.extend({

	// @section
	// @aka TileLayer.WMS options
	// If any custom options not documented here are used, they will be sent to the
	// WMS server as extra parameters in each request URL. This can be useful for
	// [non-standard vendor WMS parameters](http://docs.geoserver.org/stable/en/user/services/wms/vendor.html).
	defaultWmsParams: {
		service: 'WMS',
		request: 'GetMap',

		// @option layers: String = ''
		// **(required)** Comma-separated list of WMS layers to show.
		layers: '',

		// @option styles: String = ''
		// Comma-separated list of WMS styles.
		styles: '',

		// @option format: String = 'image/jpeg'
		// WMS image format (use `'image/png'` for layers with transparency).
		format: 'image/jpeg',

		// @option transparent: Boolean = false
		// If `true`, the WMS service will return images with transparency.
		transparent: false,

		// @option version: String = '1.1.1'
		// Version of the WMS service to use
		version: '1.1.1'
	},

	options: {
		// @option crs: CRS = null
		// Coordinate Reference System to use for the WMS requests, defaults to
		// map CRS. Don't change this if you're not sure what it means.
		crs: null,

		// @option uppercase: Boolean = false
		// If `true`, WMS request parameter keys will be uppercase.
		uppercase: false
	},

	initialize: function (url, options) {

		this._url = url;

		var wmsParams = extend({}, this.defaultWmsParams);

		// all keys that are not TileLayer options go to WMS params
		for (var i in options) {
			if (!(i in this.options)) {
				wmsParams[i] = options[i];
			}
		}

		options = setOptions(this, options);

		wmsParams.width = wmsParams.height = options.tileSize * (options.detectRetina && retina ? 2 : 1);

		this.wmsParams = wmsParams;
	},

	onAdd: function (map) {

		this._crs = this.options.crs || map.options.crs;
		this._wmsVersion = parseFloat(this.wmsParams.version);

		var projectionKey = this._wmsVersion >= 1.3 ? 'crs' : 'srs';
		this.wmsParams[projectionKey] = this._crs.code;

		TileLayer.prototype.onAdd.call(this, map);
	},

	getTileUrl: function (coords) {

		var tileBounds = this._tileCoordsToBounds(coords),
		    nw = this._crs.project(tileBounds.getNorthWest()),
		    se = this._crs.project(tileBounds.getSouthEast()),

		    bbox = (this._wmsVersion >= 1.3 && this._crs === EPSG4326 ?
			    [se.y, nw.x, nw.y, se.x] :
			    [nw.x, se.y, se.x, nw.y]).join(','),

		    url = TileLayer.prototype.getTileUrl.call(this, coords);

		return url +
			getParamString(this.wmsParams, url, this.options.uppercase) +
			(this.options.uppercase ? '&BBOX=' : '&bbox=') + bbox;
	},

	// @method setParams(params: Object, noRedraw?: Boolean): this
	// Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).
	setParams: function (params, noRedraw) {

		extend(this.wmsParams, params);

		if (!noRedraw) {
			this.redraw();
		}

		return this;
	}
});


// @factory L.tileLayer.wms(baseUrl: String, options: TileLayer.WMS options)
// Instantiates a WMS tile layer object given a base URL of the WMS service and a WMS parameters/options object.
function tileLayerWMS(url, options) {
	return new TileLayerWMS(url, options);
}

TileLayer.WMS = TileLayerWMS;
tileLayer.wms = tileLayerWMS;

/*
 * @class Renderer
 * @inherits Layer
 * @aka L.Renderer
 *
 * Base class for vector renderer implementations (`SVG`, `Canvas`). Handles the
 * DOM container of the renderer, its bounds, and its zoom animation.
 *
 * A `Renderer` works as an implicit layer group for all `Path`s - the renderer
 * itself can be added or removed to the map. All paths use a renderer, which can
 * be implicit (the map will decide the type of renderer and use it automatically)
 * or explicit (using the [`renderer`](#path-renderer) option of the path).
 *
 * Do not use this class directly, use `SVG` and `Canvas` instead.
 *
 * @event update: Event
 * Fired when the renderer updates its bounds, center and zoom, for example when
 * its map has moved
 */

var Renderer = Layer.extend({

	// @section
	// @aka Renderer options
	options: {
		// @option padding: Number = 0.1
		// How much to extend the clip area around the map view (relative to its size)
		// e.g. 0.1 would be 10% of map view in each direction
		padding: 0.1
	},

	initialize: function (options) {
		setOptions(this, options);
		stamp(this);
		this._layers = this._layers || {};
	},

	onAdd: function () {
		if (!this._container) {
			this._initContainer(); // defined by renderer implementations

			if (this._zoomAnimated) {
				addClass(this._container, 'leaflet-zoom-animated');
			}
		}

		this.getPane().appendChild(this._container);
		this._update();
		this.on('update', this._updatePaths, this);
	},

	onRemove: function () {
		this.off('update', this._updatePaths, this);
		this._destroyContainer();
	},

	getEvents: function () {
		var events = {
			viewreset: this._reset,
			zoom: this._onZoom,
			moveend: this._update,
			zoomend: this._onZoomEnd
		};
		if (this._zoomAnimated) {
			events.zoomanim = this._onAnimZoom;
		}
		return events;
	},

	_onAnimZoom: function (ev) {
		this._updateTransform(ev.center, ev.zoom);
	},

	_onZoom: function () {
		this._updateTransform(this._map.getCenter(), this._map.getZoom());
	},

	_updateTransform: function (center, zoom) {
		var scale = this._map.getZoomScale(zoom, this._zoom),
		    position = getPosition(this._container),
		    viewHalf = this._map.getSize().multiplyBy(0.5 + this.options.padding),
		    currentCenterPoint = this._map.project(this._center, zoom),
		    destCenterPoint = this._map.project(center, zoom),
		    centerOffset = destCenterPoint.subtract(currentCenterPoint),

		    topLeftOffset = viewHalf.multiplyBy(-scale).add(position).add(viewHalf).subtract(centerOffset);

		if (any3d) {
			setTransform(this._container, topLeftOffset, scale);
		} else {
			setPosition(this._container, topLeftOffset);
		}
	},

	_reset: function () {
		this._update();
		this._updateTransform(this._center, this._zoom);

		for (var id in this._layers) {
			this._layers[id]._reset();
		}
	},

	_onZoomEnd: function () {
		for (var id in this._layers) {
			this._layers[id]._project();
		}
	},

	_updatePaths: function () {
		for (var id in this._layers) {
			this._layers[id]._update();
		}
	},

	_update: function () {
		// Update pixel bounds of renderer container (for positioning/sizing/clipping later)
		// Subclasses are responsible of firing the 'update' event.
		var p = this.options.padding,
		    size = this._map.getSize(),
		    min = this._map.containerPointToLayerPoint(size.multiplyBy(-p)).round();

		this._bounds = new Bounds(min, min.add(size.multiplyBy(1 + p * 2)).round());

		this._center = this._map.getCenter();
		this._zoom = this._map.getZoom();
	}
});

/*
 * @class Canvas
 * @inherits Renderer
 * @aka L.Canvas
 *
 * Allows vector layers to be displayed with [`<canvas>`](https://developer.mozilla.org/docs/Web/API/Canvas_API).
 * Inherits `Renderer`.
 *
 * Due to [technical limitations](http://caniuse.com/#search=canvas), Canvas is not
 * available in all web browsers, notably IE8, and overlapping geometries might
 * not display properly in some edge cases.
 *
 * @example
 *
 * Use Canvas by default for all paths in the map:
 *
 * ```js
 * var map = L.map('map', {
 * 	renderer: L.canvas()
 * });
 * ```
 *
 * Use a Canvas renderer with extra padding for specific vector geometries:
 *
 * ```js
 * var map = L.map('map');
 * var myRenderer = L.canvas({ padding: 0.5 });
 * var line = L.polyline( coordinates, { renderer: myRenderer } );
 * var circle = L.circle( center, { renderer: myRenderer } );
 * ```
 */

var Canvas = Renderer.extend({
	getEvents: function () {
		var events = Renderer.prototype.getEvents.call(this);
		events.viewprereset = this._onViewPreReset;
		return events;
	},

	_onViewPreReset: function () {
		// Set a flag so that a viewprereset+moveend+viewreset only updates&redraws once
		this._postponeUpdatePaths = true;
	},

	onAdd: function () {
		Renderer.prototype.onAdd.call(this);

		// Redraw vectors since canvas is cleared upon removal,
		// in case of removing the renderer itself from the map.
		this._draw();
	},

	_initContainer: function () {
		var container = this._container = document.createElement('canvas');

		on(container, 'mousemove', throttle(this._onMouseMove, 32, this), this);
		on(container, 'click dblclick mousedown mouseup contextmenu', this._onClick, this);
		on(container, 'mouseout', this._handleMouseOut, this);

		this._ctx = container.getContext('2d');
	},

	_destroyContainer: function () {
		delete this._ctx;
		remove(this._container);
		off(this._container);
		delete this._container;
	},

	_updatePaths: function () {
		if (this._postponeUpdatePaths) { return; }

		var layer;
		this._redrawBounds = null;
		for (var id in this._layers) {
			layer = this._layers[id];
			layer._update();
		}
		this._redraw();
	},

	_update: function () {
		if (this._map._animatingZoom && this._bounds) { return; }

		this._drawnLayers = {};

		Renderer.prototype._update.call(this);

		var b = this._bounds,
		    container = this._container,
		    size = b.getSize(),
		    m = retina ? 2 : 1;

		setPosition(container, b.min);

		// set canvas size (also clearing it); use double size on retina
		container.width = m * size.x;
		container.height = m * size.y;
		container.style.width = size.x + 'px';
		container.style.height = size.y + 'px';

		if (retina) {
			this._ctx.scale(2, 2);
		}

		// translate so we use the same path coordinates after canvas element moves
		this._ctx.translate(-b.min.x, -b.min.y);

		// Tell paths to redraw themselves
		this.fire('update');
	},

	_reset: function () {
		Renderer.prototype._reset.call(this);

		if (this._postponeUpdatePaths) {
			this._postponeUpdatePaths = false;
			this._updatePaths();
		}
	},

	_initPath: function (layer) {
		this._updateDashArray(layer);
		this._layers[stamp(layer)] = layer;

		var order = layer._order = {
			layer: layer,
			prev: this._drawLast,
			next: null
		};
		if (this._drawLast) { this._drawLast.next = order; }
		this._drawLast = order;
		this._drawFirst = this._drawFirst || this._drawLast;
	},

	_addPath: function (layer) {
		this._requestRedraw(layer);
	},

	_removePath: function (layer) {
		var order = layer._order;
		var next = order.next;
		var prev = order.prev;

		if (next) {
			next.prev = prev;
		} else {
			this._drawLast = prev;
		}
		if (prev) {
			prev.next = next;
		} else {
			this._drawFirst = next;
		}

		delete layer._order;

		delete this._layers[L.stamp(layer)];

		this._requestRedraw(layer);
	},

	_updatePath: function (layer) {
		// Redraw the union of the layer's old pixel
		// bounds and the new pixel bounds.
		this._extendRedrawBounds(layer);
		layer._project();
		layer._update();
		// The redraw will extend the redraw bounds
		// with the new pixel bounds.
		this._requestRedraw(layer);
	},

	_updateStyle: function (layer) {
		this._updateDashArray(layer);
		this._requestRedraw(layer);
	},

	_updateDashArray: function (layer) {
		if (layer.options.dashArray) {
			var parts = layer.options.dashArray.split(','),
			    dashArray = [],
			    i;
			for (i = 0; i < parts.length; i++) {
				dashArray.push(Number(parts[i]));
			}
			layer.options._dashArray = dashArray;
		}
	},

	_requestRedraw: function (layer) {
		if (!this._map) { return; }

		this._extendRedrawBounds(layer);
		this._redrawRequest = this._redrawRequest || requestAnimFrame(this._redraw, this);
	},

	_extendRedrawBounds: function (layer) {
		if (layer._pxBounds) {
			var padding = (layer.options.weight || 0) + 1;
			this._redrawBounds = this._redrawBounds || new Bounds();
			this._redrawBounds.extend(layer._pxBounds.min.subtract([padding, padding]));
			this._redrawBounds.extend(layer._pxBounds.max.add([padding, padding]));
		}
	},

	_redraw: function () {
		this._redrawRequest = null;

		if (this._redrawBounds) {
			this._redrawBounds.min._floor();
			this._redrawBounds.max._ceil();
		}

		this._clear(); // clear layers in redraw bounds
		this._draw(); // draw layers

		this._redrawBounds = null;
	},

	_clear: function () {
		var bounds = this._redrawBounds;
		if (bounds) {
			var size = bounds.getSize();
			this._ctx.clearRect(bounds.min.x, bounds.min.y, size.x, size.y);
		} else {
			this._ctx.clearRect(0, 0, this._container.width, this._container.height);
		}
	},

	_draw: function () {
		var layer, bounds = this._redrawBounds;
		this._ctx.save();
		if (bounds) {
			var size = bounds.getSize();
			this._ctx.beginPath();
			this._ctx.rect(bounds.min.x, bounds.min.y, size.x, size.y);
			this._ctx.clip();
		}

		this._drawing = true;

		for (var order = this._drawFirst; order; order = order.next) {
			layer = order.layer;
			if (!bounds || (layer._pxBounds && layer._pxBounds.intersects(bounds))) {
				layer._updatePath();
			}
		}

		this._drawing = false;

		this._ctx.restore();  // Restore state before clipping.
	},

	_updatePoly: function (layer, closed) {
		if (!this._drawing) { return; }

		var i, j, len2, p,
		    parts = layer._parts,
		    len = parts.length,
		    ctx = this._ctx;

		if (!len) { return; }

		this._drawnLayers[layer._leaflet_id] = layer;

		ctx.beginPath();

		for (i = 0; i < len; i++) {
			for (j = 0, len2 = parts[i].length; j < len2; j++) {
				p = parts[i][j];
				ctx[j ? 'lineTo' : 'moveTo'](p.x, p.y);
			}
			if (closed) {
				ctx.closePath();
			}
		}

		this._fillStroke(ctx, layer);

		// TODO optimization: 1 fill/stroke for all features with equal style instead of 1 for each feature
	},

	_updateCircle: function (layer) {

		if (!this._drawing || layer._empty()) { return; }

		var p = layer._point,
		    ctx = this._ctx,
		    r = layer._radius,
		    s = (layer._radiusY || r) / r;

		this._drawnLayers[layer._leaflet_id] = layer;

		if (s !== 1) {
			ctx.save();
			ctx.scale(1, s);
		}

		ctx.beginPath();
		ctx.arc(p.x, p.y / s, r, 0, Math.PI * 2, false);

		if (s !== 1) {
			ctx.restore();
		}

		this._fillStroke(ctx, layer);
	},

	_fillStroke: function (ctx, layer) {
		var options = layer.options;

		if (options.fill) {
			ctx.globalAlpha = options.fillOpacity;
			ctx.fillStyle = options.fillColor || options.color;
			ctx.fill(options.fillRule || 'evenodd');
		}

		if (options.stroke && options.weight !== 0) {
			if (ctx.setLineDash) {
				ctx.setLineDash(layer.options && layer.options._dashArray || []);
			}
			ctx.globalAlpha = options.opacity;
			ctx.lineWidth = options.weight;
			ctx.strokeStyle = options.color;
			ctx.lineCap = options.lineCap;
			ctx.lineJoin = options.lineJoin;
			ctx.stroke();
		}
	},

	// Canvas obviously doesn't have mouse events for individual drawn objects,
	// so we emulate that by calculating what's under the mouse on mousemove/click manually

	_onClick: function (e) {
		var point = this._map.mouseEventToLayerPoint(e), layer, clickedLayer;

		for (var order = this._drawFirst; order; order = order.next) {
			layer = order.layer;
			if (layer.options.interactive && layer._containsPoint(point) && !this._map._draggableMoved(layer)) {
				clickedLayer = layer;
			}
		}
		if (clickedLayer)  {
			fakeStop(e);
			this._fireEvent([clickedLayer], e);
		}
	},

	_onMouseMove: function (e) {
		if (!this._map || this._map.dragging.moving() || this._map._animatingZoom) { return; }

		var point = this._map.mouseEventToLayerPoint(e);
		this._handleMouseHover(e, point);
	},


	_handleMouseOut: function (e) {
		var layer = this._hoveredLayer;
		if (layer) {
			// if we're leaving the layer, fire mouseout
			removeClass(this._container, 'leaflet-interactive');
			this._fireEvent([layer], e, 'mouseout');
			this._hoveredLayer = null;
		}
	},

	_handleMouseHover: function (e, point) {
		var layer, candidateHoveredLayer;

		for (var order = this._drawFirst; order; order = order.next) {
			layer = order.layer;
			if (layer.options.interactive && layer._containsPoint(point)) {
				candidateHoveredLayer = layer;
			}
		}

		if (candidateHoveredLayer !== this._hoveredLayer) {
			this._handleMouseOut(e);

			if (candidateHoveredLayer) {
				addClass(this._container, 'leaflet-interactive'); // change cursor
				this._fireEvent([candidateHoveredLayer], e, 'mouseover');
				this._hoveredLayer = candidateHoveredLayer;
			}
		}

		if (this._hoveredLayer) {
			this._fireEvent([this._hoveredLayer], e);
		}
	},

	_fireEvent: function (layers, e, type) {
		this._map._fireDOMEvent(e, type || e.type, layers);
	},

	_bringToFront: function (layer) {
		var order = layer._order;
		var next = order.next;
		var prev = order.prev;

		if (next) {
			next.prev = prev;
		} else {
			// Already last
			return;
		}
		if (prev) {
			prev.next = next;
		} else if (next) {
			// Update first entry unless this is the
			// signle entry
			this._drawFirst = next;
		}

		order.prev = this._drawLast;
		this._drawLast.next = order;

		order.next = null;
		this._drawLast = order;

		this._requestRedraw(layer);
	},

	_bringToBack: function (layer) {
		var order = layer._order;
		var next = order.next;
		var prev = order.prev;

		if (prev) {
			prev.next = next;
		} else {
			// Already first
			return;
		}
		if (next) {
			next.prev = prev;
		} else if (prev) {
			// Update last entry unless this is the
			// signle entry
			this._drawLast = prev;
		}

		order.prev = null;

		order.next = this._drawFirst;
		this._drawFirst.prev = order;
		this._drawFirst = order;

		this._requestRedraw(layer);
	}
});

// @factory L.canvas(options?: Renderer options)
// Creates a Canvas renderer with the given options.
function canvas$1(options) {
	return canvas ? new Canvas(options) : null;
}

/*
 * Thanks to Dmitry Baranovsky and his Raphael library for inspiration!
 */


var vmlCreate = (function () {
	try {
		document.namespaces.add('lvml', 'urn:schemas-microsoft-com:vml');
		return function (name) {
			return document.createElement('<lvml:' + name + ' class="lvml">');
		};
	} catch (e) {
		return function (name) {
			return document.createElement('<' + name + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
		};
	}
})();


/*
 * @class SVG
 *
 * Although SVG is not available on IE7 and IE8, these browsers support [VML](https://en.wikipedia.org/wiki/Vector_Markup_Language), and the SVG renderer will fall back to VML in this case.
 *
 * VML was deprecated in 2012, which means VML functionality exists only for backwards compatibility
 * with old versions of Internet Explorer.
 */

// mixin to redefine some SVG methods to handle VML syntax which is similar but with some differences
var vmlMixin = {

	_initContainer: function () {
		this._container = create$1('div', 'leaflet-vml-container');
	},

	_update: function () {
		if (this._map._animatingZoom) { return; }
		Renderer.prototype._update.call(this);
		this.fire('update');
	},

	_initPath: function (layer) {
		var container = layer._container = vmlCreate('shape');

		addClass(container, 'leaflet-vml-shape ' + (this.options.className || ''));

		container.coordsize = '1 1';

		layer._path = vmlCreate('path');
		container.appendChild(layer._path);

		this._updateStyle(layer);
		this._layers[stamp(layer)] = layer;
	},

	_addPath: function (layer) {
		var container = layer._container;
		this._container.appendChild(container);

		if (layer.options.interactive) {
			layer.addInteractiveTarget(container);
		}
	},

	_removePath: function (layer) {
		var container = layer._container;
		remove(container);
		layer.removeInteractiveTarget(container);
		delete this._layers[stamp(layer)];
	},

	_updateStyle: function (layer) {
		var stroke = layer._stroke,
		    fill = layer._fill,
		    options = layer.options,
		    container = layer._container;

		container.stroked = !!options.stroke;
		container.filled = !!options.fill;

		if (options.stroke) {
			if (!stroke) {
				stroke = layer._stroke = vmlCreate('stroke');
			}
			container.appendChild(stroke);
			stroke.weight = options.weight + 'px';
			stroke.color = options.color;
			stroke.opacity = options.opacity;

			if (options.dashArray) {
				stroke.dashStyle = isArray(options.dashArray) ?
				    options.dashArray.join(' ') :
				    options.dashArray.replace(/( *, *)/g, ' ');
			} else {
				stroke.dashStyle = '';
			}
			stroke.endcap = options.lineCap.replace('butt', 'flat');
			stroke.joinstyle = options.lineJoin;

		} else if (stroke) {
			container.removeChild(stroke);
			layer._stroke = null;
		}

		if (options.fill) {
			if (!fill) {
				fill = layer._fill = vmlCreate('fill');
			}
			container.appendChild(fill);
			fill.color = options.fillColor || options.color;
			fill.opacity = options.fillOpacity;

		} else if (fill) {
			container.removeChild(fill);
			layer._fill = null;
		}
	},

	_updateCircle: function (layer) {
		var p = layer._point.round(),
		    r = Math.round(layer._radius),
		    r2 = Math.round(layer._radiusY || r);

		this._setPath(layer, layer._empty() ? 'M0 0' :
				'AL ' + p.x + ',' + p.y + ' ' + r + ',' + r2 + ' 0,' + (65535 * 360));
	},

	_setPath: function (layer, path) {
		layer._path.v = path;
	},

	_bringToFront: function (layer) {
		toFront(layer._container);
	},

	_bringToBack: function (layer) {
		toBack(layer._container);
	}
};

var create$2 = vml ? vmlCreate : svgCreate;

/*
 * @class SVG
 * @inherits Renderer
 * @aka L.SVG
 *
 * Allows vector layers to be displayed with [SVG](https://developer.mozilla.org/docs/Web/SVG).
 * Inherits `Renderer`.
 *
 * Due to [technical limitations](http://caniuse.com/#search=svg), SVG is not
 * available in all web browsers, notably Android 2.x and 3.x.
 *
 * Although SVG is not available on IE7 and IE8, these browsers support
 * [VML](https://en.wikipedia.org/wiki/Vector_Markup_Language)
 * (a now deprecated technology), and the SVG renderer will fall back to VML in
 * this case.
 *
 * @example
 *
 * Use SVG by default for all paths in the map:
 *
 * ```js
 * var map = L.map('map', {
 * 	renderer: L.svg()
 * });
 * ```
 *
 * Use a SVG renderer with extra padding for specific vector geometries:
 *
 * ```js
 * var map = L.map('map');
 * var myRenderer = L.svg({ padding: 0.5 });
 * var line = L.polyline( coordinates, { renderer: myRenderer } );
 * var circle = L.circle( center, { renderer: myRenderer } );
 * ```
 */

var SVG = Renderer.extend({

	getEvents: function () {
		var events = Renderer.prototype.getEvents.call(this);
		events.zoomstart = this._onZoomStart;
		return events;
	},

	_initContainer: function () {
		this._container = create$2('svg');

		// makes it possible to click through svg root; we'll reset it back in individual paths
		this._container.setAttribute('pointer-events', 'none');

		this._rootGroup = create$2('g');
		this._container.appendChild(this._rootGroup);
	},

	_destroyContainer: function () {
		remove(this._container);
		off(this._container);
		delete this._container;
		delete this._rootGroup;
	},

	_onZoomStart: function () {
		// Drag-then-pinch interactions might mess up the center and zoom.
		// In this case, the easiest way to prevent this is re-do the renderer
		//   bounds and padding when the zooming starts.
		this._update();
	},

	_update: function () {
		if (this._map._animatingZoom && this._bounds) { return; }

		Renderer.prototype._update.call(this);

		var b = this._bounds,
		    size = b.getSize(),
		    container = this._container;

		// set size of svg-container if changed
		if (!this._svgSize || !this._svgSize.equals(size)) {
			this._svgSize = size;
			container.setAttribute('width', size.x);
			container.setAttribute('height', size.y);
		}

		// movement: update container viewBox so that we don't have to change coordinates of individual layers
		setPosition(container, b.min);
		container.setAttribute('viewBox', [b.min.x, b.min.y, size.x, size.y].join(' '));

		this.fire('update');
	},

	// methods below are called by vector layers implementations

	_initPath: function (layer) {
		var path = layer._path = create$2('path');

		// @namespace Path
		// @option className: String = null
		// Custom class name set on an element. Only for SVG renderer.
		if (layer.options.className) {
			addClass(path, layer.options.className);
		}

		if (layer.options.interactive) {
			addClass(path, 'leaflet-interactive');
		}

		this._updateStyle(layer);
		this._layers[stamp(layer)] = layer;
	},

	_addPath: function (layer) {
		if (!this._rootGroup) { this._initContainer(); }
		this._rootGroup.appendChild(layer._path);
		layer.addInteractiveTarget(layer._path);
	},

	_removePath: function (layer) {
		remove(layer._path);
		layer.removeInteractiveTarget(layer._path);
		delete this._layers[stamp(layer)];
	},

	_updatePath: function (layer) {
		layer._project();
		layer._update();
	},

	_updateStyle: function (layer) {
		var path = layer._path,
		    options = layer.options;

		if (!path) { return; }

		if (options.stroke) {
			path.setAttribute('stroke', options.color);
			path.setAttribute('stroke-opacity', options.opacity);
			path.setAttribute('stroke-width', options.weight);
			path.setAttribute('stroke-linecap', options.lineCap);
			path.setAttribute('stroke-linejoin', options.lineJoin);

			if (options.dashArray) {
				path.setAttribute('stroke-dasharray', options.dashArray);
			} else {
				path.removeAttribute('stroke-dasharray');
			}

			if (options.dashOffset) {
				path.setAttribute('stroke-dashoffset', options.dashOffset);
			} else {
				path.removeAttribute('stroke-dashoffset');
			}
		} else {
			path.setAttribute('stroke', 'none');
		}

		if (options.fill) {
			path.setAttribute('fill', options.fillColor || options.color);
			path.setAttribute('fill-opacity', options.fillOpacity);
			path.setAttribute('fill-rule', options.fillRule || 'evenodd');
		} else {
			path.setAttribute('fill', 'none');
		}
	},

	_updatePoly: function (layer, closed) {
		this._setPath(layer, pointsToPath(layer._parts, closed));
	},

	_updateCircle: function (layer) {
		var p = layer._point,
		    r = layer._radius,
		    r2 = layer._radiusY || r,
		    arc = 'a' + r + ',' + r2 + ' 0 1,0 ';

		// drawing a circle with two half-arcs
		var d = layer._empty() ? 'M0 0' :
				'M' + (p.x - r) + ',' + p.y +
				arc + (r * 2) + ',0 ' +
				arc + (-r * 2) + ',0 ';

		this._setPath(layer, d);
	},

	_setPath: function (layer, path) {
		layer._path.setAttribute('d', path);
	},

	// SVG does not have the concept of zIndex so we resort to changing the DOM order of elements
	_bringToFront: function (layer) {
		toFront(layer._path);
	},

	_bringToBack: function (layer) {
		toBack(layer._path);
	}
});

if (vml) {
	SVG.include(vmlMixin);
}

// @factory L.svg(options?: Renderer options)
// Creates a SVG renderer with the given options.
function svg$1(options) {
	return svg || vml ? new SVG(options) : null;
}

Map.include({
	// @namespace Map; @method getRenderer(layer: Path): Renderer
	// Returns the instance of `Renderer` that should be used to render the given
	// `Path`. It will ensure that the `renderer` options of the map and paths
	// are respected, and that the renderers do exist on the map.
	getRenderer: function (layer) {
		// @namespace Path; @option renderer: Renderer
		// Use this specific instance of `Renderer` for this path. Takes
		// precedence over the map's [default renderer](#map-renderer).
		var renderer = layer.options.renderer || this._getPaneRenderer(layer.options.pane) || this.options.renderer || this._renderer;

		if (!renderer) {
			// @namespace Map; @option preferCanvas: Boolean = false
			// Whether `Path`s should be rendered on a `Canvas` renderer.
			// By default, all `Path`s are rendered in a `SVG` renderer.
			renderer = this._renderer = (this.options.preferCanvas && canvas$1()) || svg$1();
		}

		if (!this.hasLayer(renderer)) {
			this.addLayer(renderer);
		}
		return renderer;
	},

	_getPaneRenderer: function (name) {
		if (name === 'overlayPane' || name === undefined) {
			return false;
		}

		var renderer = this._paneRenderers[name];
		if (renderer === undefined) {
			renderer = (SVG && svg$1({pane: name})) || (Canvas && canvas$1({pane: name}));
			this._paneRenderers[name] = renderer;
		}
		return renderer;
	}
});

/*
 * L.Rectangle extends Polygon and creates a rectangle when passed a LatLngBounds object.
 */

/*
 * @class Rectangle
 * @aka L.Retangle
 * @inherits Polygon
 *
 * A class for drawing rectangle overlays on a map. Extends `Polygon`.
 *
 * @example
 *
 * ```js
 * // define rectangle geographical bounds
 * var bounds = [[54.559322, -5.767822], [56.1210604, -3.021240]];
 *
 * // create an orange rectangle
 * L.rectangle(bounds, {color: "#ff7800", weight: 1}).addTo(map);
 *
 * // zoom the map to the rectangle bounds
 * map.fitBounds(bounds);
 * ```
 *
 */


var Rectangle = Polygon.extend({
	initialize: function (latLngBounds, options) {
		Polygon.prototype.initialize.call(this, this._boundsToLatLngs(latLngBounds), options);
	},

	// @method setBounds(latLngBounds: LatLngBounds): this
	// Redraws the rectangle with the passed bounds.
	setBounds: function (latLngBounds) {
		return this.setLatLngs(this._boundsToLatLngs(latLngBounds));
	},

	_boundsToLatLngs: function (latLngBounds) {
		latLngBounds = toLatLngBounds(latLngBounds);
		return [
			latLngBounds.getSouthWest(),
			latLngBounds.getNorthWest(),
			latLngBounds.getNorthEast(),
			latLngBounds.getSouthEast()
		];
	}
});


// @factory L.rectangle(latLngBounds: LatLngBounds, options?: Polyline options)
function rectangle(latLngBounds, options) {
	return new Rectangle(latLngBounds, options);
}

SVG.create = create$2;
SVG.pointsToPath = pointsToPath;

GeoJSON.geometryToLayer = geometryToLayer;
GeoJSON.coordsToLatLng = coordsToLatLng;
GeoJSON.coordsToLatLngs = coordsToLatLngs;
GeoJSON.latLngToCoords = latLngToCoords;
GeoJSON.latLngsToCoords = latLngsToCoords;
GeoJSON.getFeature = getFeature;
GeoJSON.asFeature = asFeature;

/*
 * L.Handler.BoxZoom is used to add shift-drag zoom interaction to the map
 * (zoom to a selected bounding box), enabled by default.
 */

// @namespace Map
// @section Interaction Options
Map.mergeOptions({
	// @option boxZoom: Boolean = true
	// Whether the map can be zoomed to a rectangular area specified by
	// dragging the mouse while pressing the shift key.
	boxZoom: true
});

var BoxZoom = Handler.extend({
	initialize: function (map) {
		this._map = map;
		this._container = map._container;
		this._pane = map._panes.overlayPane;
		this._resetStateTimeout = 0;
		map.on('unload', this._destroy, this);
	},

	addHooks: function () {
		on(this._container, 'mousedown', this._onMouseDown, this);
	},

	removeHooks: function () {
		off(this._container, 'mousedown', this._onMouseDown, this);
	},

	moved: function () {
		return this._moved;
	},

	_destroy: function () {
		remove(this._pane);
		delete this._pane;
	},

	_resetState: function () {
		this._resetStateTimeout = 0;
		this._moved = false;
	},

	_clearDeferredResetState: function () {
		if (this._resetStateTimeout !== 0) {
			clearTimeout(this._resetStateTimeout);
			this._resetStateTimeout = 0;
		}
	},

	_onMouseDown: function (e) {
		if (!e.shiftKey || ((e.which !== 1) && (e.button !== 1))) { return false; }

		// Clear the deferred resetState if it hasn't executed yet, otherwise it
		// will interrupt the interaction and orphan a box element in the container.
		this._clearDeferredResetState();
		this._resetState();

		disableTextSelection();
		disableImageDrag();

		this._startPoint = this._map.mouseEventToContainerPoint(e);

		on(document, {
			contextmenu: stop,
			mousemove: this._onMouseMove,
			mouseup: this._onMouseUp,
			keydown: this._onKeyDown
		}, this);
	},

	_onMouseMove: function (e) {
		if (!this._moved) {
			this._moved = true;

			this._box = create$1('div', 'leaflet-zoom-box', this._container);
			addClass(this._container, 'leaflet-crosshair');

			this._map.fire('boxzoomstart');
		}

		this._point = this._map.mouseEventToContainerPoint(e);

		var bounds = new Bounds(this._point, this._startPoint),
		    size = bounds.getSize();

		setPosition(this._box, bounds.min);

		this._box.style.width  = size.x + 'px';
		this._box.style.height = size.y + 'px';
	},

	_finish: function () {
		if (this._moved) {
			remove(this._box);
			removeClass(this._container, 'leaflet-crosshair');
		}

		enableTextSelection();
		enableImageDrag();

		off(document, {
			contextmenu: stop,
			mousemove: this._onMouseMove,
			mouseup: this._onMouseUp,
			keydown: this._onKeyDown
		}, this);
	},

	_onMouseUp: function (e) {
		if ((e.which !== 1) && (e.button !== 1)) { return; }

		this._finish();

		if (!this._moved) { return; }
		// Postpone to next JS tick so internal click event handling
		// still see it as "moved".
		this._clearDeferredResetState();
		this._resetStateTimeout = setTimeout(bind(this._resetState, this), 0);

		var bounds = new LatLngBounds(
		        this._map.containerPointToLatLng(this._startPoint),
		        this._map.containerPointToLatLng(this._point));

		this._map
			.fitBounds(bounds)
			.fire('boxzoomend', {boxZoomBounds: bounds});
	},

	_onKeyDown: function (e) {
		if (e.keyCode === 27) {
			this._finish();
		}
	}
});

// @section Handlers
// @property boxZoom: Handler
// Box (shift-drag with mouse) zoom handler.
Map.addInitHook('addHandler', 'boxZoom', BoxZoom);

/*
 * L.Handler.DoubleClickZoom is used to handle double-click zoom on the map, enabled by default.
 */

// @namespace Map
// @section Interaction Options

Map.mergeOptions({
	// @option doubleClickZoom: Boolean|String = true
	// Whether the map can be zoomed in by double clicking on it and
	// zoomed out by double clicking while holding shift. If passed
	// `'center'`, double-click zoom will zoom to the center of the
	//  view regardless of where the mouse was.
	doubleClickZoom: true
});

var DoubleClickZoom = Handler.extend({
	addHooks: function () {
		this._map.on('dblclick', this._onDoubleClick, this);
	},

	removeHooks: function () {
		this._map.off('dblclick', this._onDoubleClick, this);
	},

	_onDoubleClick: function (e) {
		var map = this._map,
		    oldZoom = map.getZoom(),
		    delta = map.options.zoomDelta,
		    zoom = e.originalEvent.shiftKey ? oldZoom - delta : oldZoom + delta;

		if (map.options.doubleClickZoom === 'center') {
			map.setZoom(zoom);
		} else {
			map.setZoomAround(e.containerPoint, zoom);
		}
	}
});

// @section Handlers
//
// Map properties include interaction handlers that allow you to control
// interaction behavior in runtime, enabling or disabling certain features such
// as dragging or touch zoom (see `Handler` methods). For example:
//
// ```js
// map.doubleClickZoom.disable();
// ```
//
// @property doubleClickZoom: Handler
// Double click zoom handler.
Map.addInitHook('addHandler', 'doubleClickZoom', DoubleClickZoom);

/*
 * L.Handler.MapDrag is used to make the map draggable (with panning inertia), enabled by default.
 */

// @namespace Map
// @section Interaction Options
Map.mergeOptions({
	// @option dragging: Boolean = true
	// Whether the map be draggable with mouse/touch or not.
	dragging: true,

	// @section Panning Inertia Options
	// @option inertia: Boolean = *
	// If enabled, panning of the map will have an inertia effect where
	// the map builds momentum while dragging and continues moving in
	// the same direction for some time. Feels especially nice on touch
	// devices. Enabled by default unless running on old Android devices.
	inertia: !android23,

	// @option inertiaDeceleration: Number = 3000
	// The rate with which the inertial movement slows down, in pixels/second².
	inertiaDeceleration: 3400, // px/s^2

	// @option inertiaMaxSpeed: Number = Infinity
	// Max speed of the inertial movement, in pixels/second.
	inertiaMaxSpeed: Infinity, // px/s

	// @option easeLinearity: Number = 0.2
	easeLinearity: 0.2,

	// TODO refactor, move to CRS
	// @option worldCopyJump: Boolean = false
	// With this option enabled, the map tracks when you pan to another "copy"
	// of the world and seamlessly jumps to the original one so that all overlays
	// like markers and vector layers are still visible.
	worldCopyJump: false,

	// @option maxBoundsViscosity: Number = 0.0
	// If `maxBounds` is set, this option will control how solid the bounds
	// are when dragging the map around. The default value of `0.0` allows the
	// user to drag outside the bounds at normal speed, higher values will
	// slow down map dragging outside bounds, and `1.0` makes the bounds fully
	// solid, preventing the user from dragging outside the bounds.
	maxBoundsViscosity: 0.0
});

var Drag = Handler.extend({
	addHooks: function () {
		if (!this._draggable) {
			var map = this._map;

			this._draggable = new Draggable(map._mapPane, map._container);

			this._draggable.on({
				dragstart: this._onDragStart,
				drag: this._onDrag,
				dragend: this._onDragEnd
			}, this);

			this._draggable.on('predrag', this._onPreDragLimit, this);
			if (map.options.worldCopyJump) {
				this._draggable.on('predrag', this._onPreDragWrap, this);
				map.on('zoomend', this._onZoomEnd, this);

				map.whenReady(this._onZoomEnd, this);
			}
		}
		addClass(this._map._container, 'leaflet-grab leaflet-touch-drag');
		this._draggable.enable();
		this._positions = [];
		this._times = [];
	},

	removeHooks: function () {
		removeClass(this._map._container, 'leaflet-grab');
		removeClass(this._map._container, 'leaflet-touch-drag');
		this._draggable.disable();
	},

	moved: function () {
		return this._draggable && this._draggable._moved;
	},

	moving: function () {
		return this._draggable && this._draggable._moving;
	},

	_onDragStart: function () {
		var map = this._map;

		map._stop();
		if (this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
			var bounds = toLatLngBounds(this._map.options.maxBounds);

			this._offsetLimit = toBounds(
				this._map.latLngToContainerPoint(bounds.getNorthWest()).multiplyBy(-1),
				this._map.latLngToContainerPoint(bounds.getSouthEast()).multiplyBy(-1)
					.add(this._map.getSize()));

			this._viscosity = Math.min(1.0, Math.max(0.0, this._map.options.maxBoundsViscosity));
		} else {
			this._offsetLimit = null;
		}

		map
		    .fire('movestart')
		    .fire('dragstart');

		if (map.options.inertia) {
			this._positions = [];
			this._times = [];
		}
	},

	_onDrag: function (e) {
		if (this._map.options.inertia) {
			var time = this._lastTime = +new Date(),
			    pos = this._lastPos = this._draggable._absPos || this._draggable._newPos;

			this._positions.push(pos);
			this._times.push(time);

			if (time - this._times[0] > 50) {
				this._positions.shift();
				this._times.shift();
			}
		}

		this._map
		    .fire('move', e)
		    .fire('drag', e);
	},

	_onZoomEnd: function () {
		var pxCenter = this._map.getSize().divideBy(2),
		    pxWorldCenter = this._map.latLngToLayerPoint([0, 0]);

		this._initialWorldOffset = pxWorldCenter.subtract(pxCenter).x;
		this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
	},

	_viscousLimit: function (value, threshold) {
		return value - (value - threshold) * this._viscosity;
	},

	_onPreDragLimit: function () {
		if (!this._viscosity || !this._offsetLimit) { return; }

		var offset = this._draggable._newPos.subtract(this._draggable._startPos);

		var limit = this._offsetLimit;
		if (offset.x < limit.min.x) { offset.x = this._viscousLimit(offset.x, limit.min.x); }
		if (offset.y < limit.min.y) { offset.y = this._viscousLimit(offset.y, limit.min.y); }
		if (offset.x > limit.max.x) { offset.x = this._viscousLimit(offset.x, limit.max.x); }
		if (offset.y > limit.max.y) { offset.y = this._viscousLimit(offset.y, limit.max.y); }

		this._draggable._newPos = this._draggable._startPos.add(offset);
	},

	_onPreDragWrap: function () {
		// TODO refactor to be able to adjust map pane position after zoom
		var worldWidth = this._worldWidth,
		    halfWidth = Math.round(worldWidth / 2),
		    dx = this._initialWorldOffset,
		    x = this._draggable._newPos.x,
		    newX1 = (x - halfWidth + dx) % worldWidth + halfWidth - dx,
		    newX2 = (x + halfWidth + dx) % worldWidth - halfWidth - dx,
		    newX = Math.abs(newX1 + dx) < Math.abs(newX2 + dx) ? newX1 : newX2;

		this._draggable._absPos = this._draggable._newPos.clone();
		this._draggable._newPos.x = newX;
	},

	_onDragEnd: function (e) {
		var map = this._map,
		    options = map.options,

		    noInertia = !options.inertia || this._times.length < 2;

		map.fire('dragend', e);

		if (noInertia) {
			map.fire('moveend');

		} else {

			var direction = this._lastPos.subtract(this._positions[0]),
			    duration = (this._lastTime - this._times[0]) / 1000,
			    ease = options.easeLinearity,

			    speedVector = direction.multiplyBy(ease / duration),
			    speed = speedVector.distanceTo([0, 0]),

			    limitedSpeed = Math.min(options.inertiaMaxSpeed, speed),
			    limitedSpeedVector = speedVector.multiplyBy(limitedSpeed / speed),

			    decelerationDuration = limitedSpeed / (options.inertiaDeceleration * ease),
			    offset = limitedSpeedVector.multiplyBy(-decelerationDuration / 2).round();

			if (!offset.x && !offset.y) {
				map.fire('moveend');

			} else {
				offset = map._limitOffset(offset, map.options.maxBounds);

				requestAnimFrame(function () {
					map.panBy(offset, {
						duration: decelerationDuration,
						easeLinearity: ease,
						noMoveStart: true,
						animate: true
					});
				});
			}
		}
	}
});

// @section Handlers
// @property dragging: Handler
// Map dragging handler (by both mouse and touch).
Map.addInitHook('addHandler', 'dragging', Drag);

/*
 * L.Map.Keyboard is handling keyboard interaction with the map, enabled by default.
 */

// @namespace Map
// @section Keyboard Navigation Options
Map.mergeOptions({
	// @option keyboard: Boolean = true
	// Makes the map focusable and allows users to navigate the map with keyboard
	// arrows and `+`/`-` keys.
	keyboard: true,

	// @option keyboardPanDelta: Number = 80
	// Amount of pixels to pan when pressing an arrow key.
	keyboardPanDelta: 80
});

var Keyboard = Handler.extend({

	keyCodes: {
		left:    [37],
		right:   [39],
		down:    [40],
		up:      [38],
		zoomIn:  [187, 107, 61, 171],
		zoomOut: [189, 109, 54, 173]
	},

	initialize: function (map) {
		this._map = map;

		this._setPanDelta(map.options.keyboardPanDelta);
		this._setZoomDelta(map.options.zoomDelta);
	},

	addHooks: function () {
		var container = this._map._container;

		// make the container focusable by tabbing
		if (container.tabIndex <= 0) {
			container.tabIndex = '0';
		}

		on(container, {
			focus: this._onFocus,
			blur: this._onBlur,
			mousedown: this._onMouseDown
		}, this);

		this._map.on({
			focus: this._addHooks,
			blur: this._removeHooks
		}, this);
	},

	removeHooks: function () {
		this._removeHooks();

		off(this._map._container, {
			focus: this._onFocus,
			blur: this._onBlur,
			mousedown: this._onMouseDown
		}, this);

		this._map.off({
			focus: this._addHooks,
			blur: this._removeHooks
		}, this);
	},

	_onMouseDown: function () {
		if (this._focused) { return; }

		var body = document.body,
		    docEl = document.documentElement,
		    top = body.scrollTop || docEl.scrollTop,
		    left = body.scrollLeft || docEl.scrollLeft;

		this._map._container.focus();

		window.scrollTo(left, top);
	},

	_onFocus: function () {
		this._focused = true;
		this._map.fire('focus');
	},

	_onBlur: function () {
		this._focused = false;
		this._map.fire('blur');
	},

	_setPanDelta: function (panDelta) {
		var keys = this._panKeys = {},
		    codes = this.keyCodes,
		    i, len;

		for (i = 0, len = codes.left.length; i < len; i++) {
			keys[codes.left[i]] = [-1 * panDelta, 0];
		}
		for (i = 0, len = codes.right.length; i < len; i++) {
			keys[codes.right[i]] = [panDelta, 0];
		}
		for (i = 0, len = codes.down.length; i < len; i++) {
			keys[codes.down[i]] = [0, panDelta];
		}
		for (i = 0, len = codes.up.length; i < len; i++) {
			keys[codes.up[i]] = [0, -1 * panDelta];
		}
	},

	_setZoomDelta: function (zoomDelta) {
		var keys = this._zoomKeys = {},
		    codes = this.keyCodes,
		    i, len;

		for (i = 0, len = codes.zoomIn.length; i < len; i++) {
			keys[codes.zoomIn[i]] = zoomDelta;
		}
		for (i = 0, len = codes.zoomOut.length; i < len; i++) {
			keys[codes.zoomOut[i]] = -zoomDelta;
		}
	},

	_addHooks: function () {
		on(document, 'keydown', this._onKeyDown, this);
	},

	_removeHooks: function () {
		off(document, 'keydown', this._onKeyDown, this);
	},

	_onKeyDown: function (e) {
		if (e.altKey || e.ctrlKey || e.metaKey) { return; }

		var key = e.keyCode,
		    map = this._map,
		    offset;

		if (key in this._panKeys) {

			if (map._panAnim && map._panAnim._inProgress) { return; }

			offset = this._panKeys[key];
			if (e.shiftKey) {
				offset = toPoint(offset).multiplyBy(3);
			}

			map.panBy(offset);

			if (map.options.maxBounds) {
				map.panInsideBounds(map.options.maxBounds);
			}

		} else if (key in this._zoomKeys) {
			map.setZoom(map.getZoom() + (e.shiftKey ? 3 : 1) * this._zoomKeys[key]);

		} else if (key === 27 && map._popup) {
			map.closePopup();

		} else {
			return;
		}

		stop(e);
	}
});

// @section Handlers
// @section Handlers
// @property keyboard: Handler
// Keyboard navigation handler.
Map.addInitHook('addHandler', 'keyboard', Keyboard);

/*
 * L.Handler.ScrollWheelZoom is used by L.Map to enable mouse scroll wheel zoom on the map.
 */

// @namespace Map
// @section Interaction Options
Map.mergeOptions({
	// @section Mousewheel options
	// @option scrollWheelZoom: Boolean|String = true
	// Whether the map can be zoomed by using the mouse wheel. If passed `'center'`,
	// it will zoom to the center of the view regardless of where the mouse was.
	scrollWheelZoom: true,

	// @option wheelDebounceTime: Number = 40
	// Limits the rate at which a wheel can fire (in milliseconds). By default
	// user can't zoom via wheel more often than once per 40 ms.
	wheelDebounceTime: 40,

	// @option wheelPxPerZoomLevel: Number = 60
	// How many scroll pixels (as reported by [L.DomEvent.getWheelDelta](#domevent-getwheeldelta))
	// mean a change of one full zoom level. Smaller values will make wheel-zooming
	// faster (and vice versa).
	wheelPxPerZoomLevel: 60
});

var ScrollWheelZoom = Handler.extend({
	addHooks: function () {
		on(this._map._container, 'mousewheel', this._onWheelScroll, this);

		this._delta = 0;
	},

	removeHooks: function () {
		off(this._map._container, 'mousewheel', this._onWheelScroll, this);
	},

	_onWheelScroll: function (e) {
		var delta = getWheelDelta(e);

		var debounce = this._map.options.wheelDebounceTime;

		this._delta += delta;
		this._lastMousePos = this._map.mouseEventToContainerPoint(e);

		if (!this._startTime) {
			this._startTime = +new Date();
		}

		var left = Math.max(debounce - (+new Date() - this._startTime), 0);

		clearTimeout(this._timer);
		this._timer = setTimeout(bind(this._performZoom, this), left);

		stop(e);
	},

	_performZoom: function () {
		var map = this._map,
		    zoom = map.getZoom(),
		    snap = this._map.options.zoomSnap || 0;

		map._stop(); // stop panning and fly animations if any

		// map the delta with a sigmoid function to -4..4 range leaning on -1..1
		var d2 = this._delta / (this._map.options.wheelPxPerZoomLevel * 4),
		    d3 = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(d2)))) / Math.LN2,
		    d4 = snap ? Math.ceil(d3 / snap) * snap : d3,
		    delta = map._limitZoom(zoom + (this._delta > 0 ? d4 : -d4)) - zoom;

		this._delta = 0;
		this._startTime = null;

		if (!delta) { return; }

		if (map.options.scrollWheelZoom === 'center') {
			map.setZoom(zoom + delta);
		} else {
			map.setZoomAround(this._lastMousePos, zoom + delta);
		}
	}
});

// @section Handlers
// @property scrollWheelZoom: Handler
// Scroll wheel zoom handler.
Map.addInitHook('addHandler', 'scrollWheelZoom', ScrollWheelZoom);

/*
 * L.Map.Tap is used to enable mobile hacks like quick taps and long hold.
 */

// @namespace Map
// @section Interaction Options
Map.mergeOptions({
	// @section Touch interaction options
	// @option tap: Boolean = true
	// Enables mobile hacks for supporting instant taps (fixing 200ms click
	// delay on iOS/Android) and touch holds (fired as `contextmenu` events).
	tap: true,

	// @option tapTolerance: Number = 15
	// The max number of pixels a user can shift his finger during touch
	// for it to be considered a valid tap.
	tapTolerance: 15
});

var Tap = Handler.extend({
	addHooks: function () {
		on(this._map._container, 'touchstart', this._onDown, this);
	},

	removeHooks: function () {
		off(this._map._container, 'touchstart', this._onDown, this);
	},

	_onDown: function (e) {
		if (!e.touches) { return; }

		preventDefault(e);

		this._fireClick = true;

		// don't simulate click or track longpress if more than 1 touch
		if (e.touches.length > 1) {
			this._fireClick = false;
			clearTimeout(this._holdTimeout);
			return;
		}

		var first = e.touches[0],
		    el = first.target;

		this._startPos = this._newPos = new Point(first.clientX, first.clientY);

		// if touching a link, highlight it
		if (el.tagName && el.tagName.toLowerCase() === 'a') {
			addClass(el, 'leaflet-active');
		}

		// simulate long hold but setting a timeout
		this._holdTimeout = setTimeout(bind(function () {
			if (this._isTapValid()) {
				this._fireClick = false;
				this._onUp();
				this._simulateEvent('contextmenu', first);
			}
		}, this), 1000);

		this._simulateEvent('mousedown', first);

		on(document, {
			touchmove: this._onMove,
			touchend: this._onUp
		}, this);
	},

	_onUp: function (e) {
		clearTimeout(this._holdTimeout);

		off(document, {
			touchmove: this._onMove,
			touchend: this._onUp
		}, this);

		if (this._fireClick && e && e.changedTouches) {

			var first = e.changedTouches[0],
			    el = first.target;

			if (el && el.tagName && el.tagName.toLowerCase() === 'a') {
				removeClass(el, 'leaflet-active');
			}

			this._simulateEvent('mouseup', first);

			// simulate click if the touch didn't move too much
			if (this._isTapValid()) {
				this._simulateEvent('click', first);
			}
		}
	},

	_isTapValid: function () {
		return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
	},

	_onMove: function (e) {
		var first = e.touches[0];
		this._newPos = new Point(first.clientX, first.clientY);
		this._simulateEvent('mousemove', first);
	},

	_simulateEvent: function (type, e) {
		var simulatedEvent = document.createEvent('MouseEvents');

		simulatedEvent._simulated = true;
		e.target._simulatedClick = true;

		simulatedEvent.initMouseEvent(
		        type, true, true, window, 1,
		        e.screenX, e.screenY,
		        e.clientX, e.clientY,
		        false, false, false, false, 0, null);

		e.target.dispatchEvent(simulatedEvent);
	}
});

// @section Handlers
// @property tap: Handler
// Mobile touch hacks (quick tap and touch hold) handler.
if (touch && !pointer) {
	Map.addInitHook('addHandler', 'tap', Tap);
}

/*
 * L.Handler.TouchZoom is used by L.Map to add pinch zoom on supported mobile browsers.
 */

// @namespace Map
// @section Interaction Options
Map.mergeOptions({
	// @section Touch interaction options
	// @option touchZoom: Boolean|String = *
	// Whether the map can be zoomed by touch-dragging with two fingers. If
	// passed `'center'`, it will zoom to the center of the view regardless of
	// where the touch events (fingers) were. Enabled for touch-capable web
	// browsers except for old Androids.
	touchZoom: touch && !android23,

	// @option bounceAtZoomLimits: Boolean = true
	// Set it to false if you don't want the map to zoom beyond min/max zoom
	// and then bounce back when pinch-zooming.
	bounceAtZoomLimits: true
});

var TouchZoom = Handler.extend({
	addHooks: function () {
		addClass(this._map._container, 'leaflet-touch-zoom');
		on(this._map._container, 'touchstart', this._onTouchStart, this);
	},

	removeHooks: function () {
		removeClass(this._map._container, 'leaflet-touch-zoom');
		off(this._map._container, 'touchstart', this._onTouchStart, this);
	},

	_onTouchStart: function (e) {
		var map = this._map;
		if (!e.touches || e.touches.length !== 2 || map._animatingZoom || this._zooming) { return; }

		var p1 = map.mouseEventToContainerPoint(e.touches[0]),
		    p2 = map.mouseEventToContainerPoint(e.touches[1]);

		this._centerPoint = map.getSize()._divideBy(2);
		this._startLatLng = map.containerPointToLatLng(this._centerPoint);
		if (map.options.touchZoom !== 'center') {
			this._pinchStartLatLng = map.containerPointToLatLng(p1.add(p2)._divideBy(2));
		}

		this._startDist = p1.distanceTo(p2);
		this._startZoom = map.getZoom();

		this._moved = false;
		this._zooming = true;

		map._stop();

		on(document, 'touchmove', this._onTouchMove, this);
		on(document, 'touchend', this._onTouchEnd, this);

		preventDefault(e);
	},

	_onTouchMove: function (e) {
		if (!e.touches || e.touches.length !== 2 || !this._zooming) { return; }

		var map = this._map,
		    p1 = map.mouseEventToContainerPoint(e.touches[0]),
		    p2 = map.mouseEventToContainerPoint(e.touches[1]),
		    scale = p1.distanceTo(p2) / this._startDist;

		this._zoom = map.getScaleZoom(scale, this._startZoom);

		if (!map.options.bounceAtZoomLimits && (
			(this._zoom < map.getMinZoom() && scale < 1) ||
			(this._zoom > map.getMaxZoom() && scale > 1))) {
			this._zoom = map._limitZoom(this._zoom);
		}

		if (map.options.touchZoom === 'center') {
			this._center = this._startLatLng;
			if (scale === 1) { return; }
		} else {
			// Get delta from pinch to center, so centerLatLng is delta applied to initial pinchLatLng
			var delta = p1._add(p2)._divideBy(2)._subtract(this._centerPoint);
			if (scale === 1 && delta.x === 0 && delta.y === 0) { return; }
			this._center = map.unproject(map.project(this._pinchStartLatLng, this._zoom).subtract(delta), this._zoom);
		}

		if (!this._moved) {
			map._moveStart(true);
			this._moved = true;
		}

		cancelAnimFrame(this._animRequest);

		var moveFn = bind(map._move, map, this._center, this._zoom, {pinch: true, round: false});
		this._animRequest = requestAnimFrame(moveFn, this, true);

		preventDefault(e);
	},

	_onTouchEnd: function () {
		if (!this._moved || !this._zooming) {
			this._zooming = false;
			return;
		}

		this._zooming = false;
		cancelAnimFrame(this._animRequest);

		off(document, 'touchmove', this._onTouchMove);
		off(document, 'touchend', this._onTouchEnd);

		// Pinch updates GridLayers' levels only when zoomSnap is off, so zoomSnap becomes noUpdate.
		if (this._map.options.zoomAnimation) {
			this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), true, this._map.options.zoomSnap);
		} else {
			this._map._resetView(this._center, this._map._limitZoom(this._zoom));
		}
	}
});

// @section Handlers
// @property touchZoom: Handler
// Touch zoom handler.
Map.addInitHook('addHandler', 'touchZoom', TouchZoom);

Map.BoxZoom = BoxZoom;
Map.DoubleClickZoom = DoubleClickZoom;
Map.Drag = Drag;
Map.Keyboard = Keyboard;
Map.ScrollWheelZoom = ScrollWheelZoom;
Map.Tap = Tap;
Map.TouchZoom = TouchZoom;

// misc

var oldL = window.L;
function noConflict() {
	window.L = oldL;
	return this;
}

// Always export us to window global (see #2364)
window.L = exports;

Object.freeze = freeze;

exports.version = version;
exports.noConflict = noConflict;
exports.Control = Control;
exports.control = control;
exports.Browser = Browser;
exports.Evented = Evented;
exports.Mixin = Mixin;
exports.Util = Util;
exports.Class = Class;
exports.Handler = Handler;
exports.extend = extend;
exports.bind = bind;
exports.stamp = stamp;
exports.setOptions = setOptions;
exports.DomEvent = DomEvent;
exports.DomUtil = DomUtil;
exports.PosAnimation = PosAnimation;
exports.Draggable = Draggable;
exports.LineUtil = LineUtil;
exports.PolyUtil = PolyUtil;
exports.Point = Point;
exports.point = toPoint;
exports.Bounds = Bounds;
exports.bounds = toBounds;
exports.Transformation = Transformation;
exports.transformation = toTransformation;
exports.Projection = index;
exports.LatLng = LatLng;
exports.latLng = toLatLng;
exports.LatLngBounds = LatLngBounds;
exports.latLngBounds = toLatLngBounds;
exports.CRS = CRS;
exports.GeoJSON = GeoJSON;
exports.geoJSON = geoJSON;
exports.geoJson = geoJson;
exports.Layer = Layer;
exports.LayerGroup = LayerGroup;
exports.layerGroup = layerGroup;
exports.FeatureGroup = FeatureGroup;
exports.featureGroup = featureGroup;
exports.ImageOverlay = ImageOverlay;
exports.imageOverlay = imageOverlay;
exports.VideoOverlay = VideoOverlay;
exports.videoOverlay = videoOverlay;
exports.DivOverlay = DivOverlay;
exports.Popup = Popup;
exports.popup = popup;
exports.Tooltip = Tooltip;
exports.tooltip = tooltip;
exports.Icon = Icon;
exports.icon = icon;
exports.DivIcon = DivIcon;
exports.divIcon = divIcon;
exports.Marker = Marker;
exports.marker = marker;
exports.TileLayer = TileLayer;
exports.tileLayer = tileLayer;
exports.GridLayer = GridLayer;
exports.gridLayer = gridLayer;
exports.SVG = SVG;
exports.svg = svg$1;
exports.Renderer = Renderer;
exports.Canvas = Canvas;
exports.canvas = canvas$1;
exports.Path = Path;
exports.CircleMarker = CircleMarker;
exports.circleMarker = circleMarker;
exports.Circle = Circle;
exports.circle = circle;
exports.Polyline = Polyline;
exports.polyline = polyline;
exports.Polygon = Polygon;
exports.polygon = polygon;
exports.Rectangle = Rectangle;
exports.rectangle = rectangle;
exports.Map = Map;
exports.map = createMap;

})));
//# sourceMappingURL=leaflet-src.js.map


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(8);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js!./leaflet.css", function() {
			var newContent = require("!!../../css-loader/index.js!./leaflet.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "/* required styles */\r\n\r\n.leaflet-pane,\r\n.leaflet-tile,\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow,\r\n.leaflet-tile-container,\r\n.leaflet-pane > svg,\r\n.leaflet-pane > canvas,\r\n.leaflet-zoom-box,\r\n.leaflet-image-layer,\r\n.leaflet-layer {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\t}\r\n.leaflet-container {\r\n\toverflow: hidden;\r\n\t}\r\n.leaflet-tile,\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow {\r\n\t-webkit-user-select: none;\r\n\t   -moz-user-select: none;\r\n\t        user-select: none;\r\n\t  -webkit-user-drag: none;\r\n\t}\r\n/* Safari renders non-retina tile on retina better with this, but Chrome is worse */\r\n.leaflet-safari .leaflet-tile {\r\n\timage-rendering: -webkit-optimize-contrast;\r\n\t}\r\n/* hack that prevents hw layers \"stretching\" when loading new tiles */\r\n.leaflet-safari .leaflet-tile-container {\r\n\twidth: 1600px;\r\n\theight: 1600px;\r\n\t-webkit-transform-origin: 0 0;\r\n\t}\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow {\r\n\tdisplay: block;\r\n\t}\r\n/* .leaflet-container svg: reset svg max-width decleration shipped in Joomla! (joomla.org) 3.x */\r\n/* .leaflet-container img: map is broken in FF if you have max-width: 100% on tiles */\r\n.leaflet-container .leaflet-overlay-pane svg,\r\n.leaflet-container .leaflet-marker-pane img,\r\n.leaflet-container .leaflet-shadow-pane img,\r\n.leaflet-container .leaflet-tile-pane img,\r\n.leaflet-container img.leaflet-image-layer {\r\n\tmax-width: none !important;\r\n\t}\r\n\r\n.leaflet-container.leaflet-touch-zoom {\r\n\t-ms-touch-action: pan-x pan-y;\r\n\ttouch-action: pan-x pan-y;\r\n\t}\r\n.leaflet-container.leaflet-touch-drag {\r\n\t-ms-touch-action: pinch-zoom;\r\n\t}\r\n.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom {\r\n\t-ms-touch-action: none;\r\n\ttouch-action: none;\r\n}\r\n.leaflet-container {\r\n\t-webkit-tap-highlight-color: transparent;\r\n}\r\n.leaflet-container a {\r\n\t-webkit-tap-highlight-color: rgba(51, 181, 229, 0.4);\r\n}\r\n.leaflet-tile {\r\n\tfilter: inherit;\r\n\tvisibility: hidden;\r\n\t}\r\n.leaflet-tile-loaded {\r\n\tvisibility: inherit;\r\n\t}\r\n.leaflet-zoom-box {\r\n\twidth: 0;\r\n\theight: 0;\r\n\t-moz-box-sizing: border-box;\r\n\t     box-sizing: border-box;\r\n\tz-index: 800;\r\n\t}\r\n/* workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=888319 */\r\n.leaflet-overlay-pane svg {\r\n\t-moz-user-select: none;\r\n\t}\r\n\r\n.leaflet-pane         { z-index: 400; }\r\n\r\n.leaflet-tile-pane    { z-index: 200; }\r\n.leaflet-overlay-pane { z-index: 400; }\r\n.leaflet-shadow-pane  { z-index: 500; }\r\n.leaflet-marker-pane  { z-index: 600; }\r\n.leaflet-tooltip-pane   { z-index: 650; }\r\n.leaflet-popup-pane   { z-index: 700; }\r\n\r\n.leaflet-map-pane canvas { z-index: 100; }\r\n.leaflet-map-pane svg    { z-index: 200; }\r\n\r\n.leaflet-vml-shape {\r\n\twidth: 1px;\r\n\theight: 1px;\r\n\t}\r\n.lvml {\r\n\tbehavior: url(#default#VML);\r\n\tdisplay: inline-block;\r\n\tposition: absolute;\r\n\t}\r\n\r\n\r\n/* control positioning */\r\n\r\n.leaflet-control {\r\n\tposition: relative;\r\n\tz-index: 800;\r\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\r\n\tpointer-events: auto;\r\n\t}\r\n.leaflet-top,\r\n.leaflet-bottom {\r\n\tposition: absolute;\r\n\tz-index: 1000;\r\n\tpointer-events: none;\r\n\t}\r\n.leaflet-top {\r\n\ttop: 0;\r\n\t}\r\n.leaflet-right {\r\n\tright: 0;\r\n\t}\r\n.leaflet-bottom {\r\n\tbottom: 0;\r\n\t}\r\n.leaflet-left {\r\n\tleft: 0;\r\n\t}\r\n.leaflet-control {\r\n\tfloat: left;\r\n\tclear: both;\r\n\t}\r\n.leaflet-right .leaflet-control {\r\n\tfloat: right;\r\n\t}\r\n.leaflet-top .leaflet-control {\r\n\tmargin-top: 10px;\r\n\t}\r\n.leaflet-bottom .leaflet-control {\r\n\tmargin-bottom: 10px;\r\n\t}\r\n.leaflet-left .leaflet-control {\r\n\tmargin-left: 10px;\r\n\t}\r\n.leaflet-right .leaflet-control {\r\n\tmargin-right: 10px;\r\n\t}\r\n\r\n\r\n/* zoom and fade animations */\r\n\r\n.leaflet-fade-anim .leaflet-tile {\r\n\twill-change: opacity;\r\n\t}\r\n.leaflet-fade-anim .leaflet-popup {\r\n\topacity: 0;\r\n\t-webkit-transition: opacity 0.2s linear;\r\n\t   -moz-transition: opacity 0.2s linear;\r\n\t     -o-transition: opacity 0.2s linear;\r\n\t        transition: opacity 0.2s linear;\r\n\t}\r\n.leaflet-fade-anim .leaflet-map-pane .leaflet-popup {\r\n\topacity: 1;\r\n\t}\r\n.leaflet-zoom-animated {\r\n\t-webkit-transform-origin: 0 0;\r\n\t    -ms-transform-origin: 0 0;\r\n\t        transform-origin: 0 0;\r\n\t}\r\n.leaflet-zoom-anim .leaflet-zoom-animated {\r\n\twill-change: transform;\r\n\t}\r\n.leaflet-zoom-anim .leaflet-zoom-animated {\r\n\t-webkit-transition: -webkit-transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t   -moz-transition:    -moz-transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t     -o-transition:      -o-transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t        transition:         transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t}\r\n.leaflet-zoom-anim .leaflet-tile,\r\n.leaflet-pan-anim .leaflet-tile {\r\n\t-webkit-transition: none;\r\n\t   -moz-transition: none;\r\n\t     -o-transition: none;\r\n\t        transition: none;\r\n\t}\r\n\r\n.leaflet-zoom-anim .leaflet-zoom-hide {\r\n\tvisibility: hidden;\r\n\t}\r\n\r\n\r\n/* cursors */\r\n\r\n.leaflet-interactive {\r\n\tcursor: pointer;\r\n\t}\r\n.leaflet-grab {\r\n\tcursor: -webkit-grab;\r\n\tcursor:    -moz-grab;\r\n\t}\r\n.leaflet-crosshair,\r\n.leaflet-crosshair .leaflet-interactive {\r\n\tcursor: crosshair;\r\n\t}\r\n.leaflet-popup-pane,\r\n.leaflet-control {\r\n\tcursor: auto;\r\n\t}\r\n.leaflet-dragging .leaflet-grab,\r\n.leaflet-dragging .leaflet-grab .leaflet-interactive,\r\n.leaflet-dragging .leaflet-marker-draggable {\r\n\tcursor: move;\r\n\tcursor: -webkit-grabbing;\r\n\tcursor:    -moz-grabbing;\r\n\t}\r\n\r\n/* marker & overlays interactivity */\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow,\r\n.leaflet-image-layer,\r\n.leaflet-pane > svg path,\r\n.leaflet-tile-container {\r\n\tpointer-events: none;\r\n\t}\r\n\r\n.leaflet-marker-icon.leaflet-interactive,\r\n.leaflet-image-layer.leaflet-interactive,\r\n.leaflet-pane > svg path.leaflet-interactive {\r\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\r\n\tpointer-events: auto;\r\n\t}\r\n\r\n/* visual tweaks */\r\n\r\n.leaflet-container {\r\n\tbackground: #ddd;\r\n\toutline: 0;\r\n\t}\r\n.leaflet-container a {\r\n\tcolor: #0078A8;\r\n\t}\r\n.leaflet-container a.leaflet-active {\r\n\toutline: 2px solid orange;\r\n\t}\r\n.leaflet-zoom-box {\r\n\tborder: 2px dotted #38f;\r\n\tbackground: rgba(255,255,255,0.5);\r\n\t}\r\n\r\n\r\n/* general typography */\r\n.leaflet-container {\r\n\tfont: 12px/1.5 \"Helvetica Neue\", Arial, Helvetica, sans-serif;\r\n\t}\r\n\r\n\r\n/* general toolbar styles */\r\n\r\n.leaflet-bar {\r\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.65);\r\n\tborder-radius: 4px;\r\n\t}\r\n.leaflet-bar a,\r\n.leaflet-bar a:hover {\r\n\tbackground-color: #fff;\r\n\tborder-bottom: 1px solid #ccc;\r\n\twidth: 26px;\r\n\theight: 26px;\r\n\tline-height: 26px;\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n\ttext-decoration: none;\r\n\tcolor: black;\r\n\t}\r\n.leaflet-bar a,\r\n.leaflet-control-layers-toggle {\r\n\tbackground-position: 50% 50%;\r\n\tbackground-repeat: no-repeat;\r\n\tdisplay: block;\r\n\t}\r\n.leaflet-bar a:hover {\r\n\tbackground-color: #f4f4f4;\r\n\t}\r\n.leaflet-bar a:first-child {\r\n\tborder-top-left-radius: 4px;\r\n\tborder-top-right-radius: 4px;\r\n\t}\r\n.leaflet-bar a:last-child {\r\n\tborder-bottom-left-radius: 4px;\r\n\tborder-bottom-right-radius: 4px;\r\n\tborder-bottom: none;\r\n\t}\r\n.leaflet-bar a.leaflet-disabled {\r\n\tcursor: default;\r\n\tbackground-color: #f4f4f4;\r\n\tcolor: #bbb;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-bar a {\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tline-height: 30px;\r\n\t}\r\n.leaflet-touch .leaflet-bar a:first-child {\r\n\tborder-top-left-radius: 2px;\r\n\tborder-top-right-radius: 2px;\r\n\t}\r\n.leaflet-touch .leaflet-bar a:last-child {\r\n\tborder-bottom-left-radius: 2px;\r\n\tborder-bottom-right-radius: 2px;\r\n\t}\r\n\r\n/* zoom control */\r\n\r\n.leaflet-control-zoom-in,\r\n.leaflet-control-zoom-out {\r\n\tfont: bold 18px 'Lucida Console', Monaco, monospace;\r\n\ttext-indent: 1px;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-zoom-in, .leaflet-touch .leaflet-control-zoom-out  {\r\n\tfont-size: 22px;\r\n\t}\r\n\r\n\r\n/* layers control */\r\n\r\n.leaflet-control-layers {\r\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.4);\r\n\tbackground: #fff;\r\n\tborder-radius: 5px;\r\n\t}\r\n.leaflet-control-layers-toggle {\r\n\tbackground-image: url(" + __webpack_require__(9) + ");\r\n\twidth: 36px;\r\n\theight: 36px;\r\n\t}\r\n.leaflet-retina .leaflet-control-layers-toggle {\r\n\tbackground-image: url(" + __webpack_require__(10) + ");\r\n\tbackground-size: 26px 26px;\r\n\t}\r\n.leaflet-touch .leaflet-control-layers-toggle {\r\n\twidth: 44px;\r\n\theight: 44px;\r\n\t}\r\n.leaflet-control-layers .leaflet-control-layers-list,\r\n.leaflet-control-layers-expanded .leaflet-control-layers-toggle {\r\n\tdisplay: none;\r\n\t}\r\n.leaflet-control-layers-expanded .leaflet-control-layers-list {\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\t}\r\n.leaflet-control-layers-expanded {\r\n\tpadding: 6px 10px 6px 6px;\r\n\tcolor: #333;\r\n\tbackground: #fff;\r\n\t}\r\n.leaflet-control-layers-scrollbar {\r\n\toverflow-y: scroll;\r\n\toverflow-x: hidden;\r\n\tpadding-right: 5px;\r\n\t}\r\n.leaflet-control-layers-selector {\r\n\tmargin-top: 2px;\r\n\tposition: relative;\r\n\ttop: 1px;\r\n\t}\r\n.leaflet-control-layers label {\r\n\tdisplay: block;\r\n\t}\r\n.leaflet-control-layers-separator {\r\n\theight: 0;\r\n\tborder-top: 1px solid #ddd;\r\n\tmargin: 5px -10px 5px -6px;\r\n\t}\r\n\r\n/* Default icon URLs */\r\n.leaflet-default-icon-path {\r\n\tbackground-image: url(" + __webpack_require__(1) + ");\r\n\t}\r\n\r\n\r\n/* attribution and scale controls */\r\n\r\n.leaflet-container .leaflet-control-attribution {\r\n\tbackground: #fff;\r\n\tbackground: rgba(255, 255, 255, 0.7);\r\n\tmargin: 0;\r\n\t}\r\n.leaflet-control-attribution,\r\n.leaflet-control-scale-line {\r\n\tpadding: 0 5px;\r\n\tcolor: #333;\r\n\t}\r\n.leaflet-control-attribution a {\r\n\ttext-decoration: none;\r\n\t}\r\n.leaflet-control-attribution a:hover {\r\n\ttext-decoration: underline;\r\n\t}\r\n.leaflet-container .leaflet-control-attribution,\r\n.leaflet-container .leaflet-control-scale {\r\n\tfont-size: 11px;\r\n\t}\r\n.leaflet-left .leaflet-control-scale {\r\n\tmargin-left: 5px;\r\n\t}\r\n.leaflet-bottom .leaflet-control-scale {\r\n\tmargin-bottom: 5px;\r\n\t}\r\n.leaflet-control-scale-line {\r\n\tborder: 2px solid #777;\r\n\tborder-top: none;\r\n\tline-height: 1.1;\r\n\tpadding: 2px 5px 1px;\r\n\tfont-size: 11px;\r\n\twhite-space: nowrap;\r\n\toverflow: hidden;\r\n\t-moz-box-sizing: border-box;\r\n\t     box-sizing: border-box;\r\n\r\n\tbackground: #fff;\r\n\tbackground: rgba(255, 255, 255, 0.5);\r\n\t}\r\n.leaflet-control-scale-line:not(:first-child) {\r\n\tborder-top: 2px solid #777;\r\n\tborder-bottom: none;\r\n\tmargin-top: -2px;\r\n\t}\r\n.leaflet-control-scale-line:not(:first-child):not(:last-child) {\r\n\tborder-bottom: 2px solid #777;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-attribution,\r\n.leaflet-touch .leaflet-control-layers,\r\n.leaflet-touch .leaflet-bar {\r\n\tbox-shadow: none;\r\n\t}\r\n.leaflet-touch .leaflet-control-layers,\r\n.leaflet-touch .leaflet-bar {\r\n\tborder: 2px solid rgba(0,0,0,0.2);\r\n\tbackground-clip: padding-box;\r\n\t}\r\n\r\n\r\n/* popup */\r\n\r\n.leaflet-popup {\r\n\tposition: absolute;\r\n\ttext-align: center;\r\n\tmargin-bottom: 20px;\r\n\t}\r\n.leaflet-popup-content-wrapper {\r\n\tpadding: 1px;\r\n\ttext-align: left;\r\n\tborder-radius: 12px;\r\n\t}\r\n.leaflet-popup-content {\r\n\tmargin: 13px 19px;\r\n\tline-height: 1.4;\r\n\t}\r\n.leaflet-popup-content p {\r\n\tmargin: 18px 0;\r\n\t}\r\n.leaflet-popup-tip-container {\r\n\twidth: 40px;\r\n\theight: 20px;\r\n\tposition: absolute;\r\n\tleft: 50%;\r\n\tmargin-left: -20px;\r\n\toverflow: hidden;\r\n\tpointer-events: none;\r\n\t}\r\n.leaflet-popup-tip {\r\n\twidth: 17px;\r\n\theight: 17px;\r\n\tpadding: 1px;\r\n\r\n\tmargin: -10px auto 0;\r\n\r\n\t-webkit-transform: rotate(45deg);\r\n\t   -moz-transform: rotate(45deg);\r\n\t    -ms-transform: rotate(45deg);\r\n\t     -o-transform: rotate(45deg);\r\n\t        transform: rotate(45deg);\r\n\t}\r\n.leaflet-popup-content-wrapper,\r\n.leaflet-popup-tip {\r\n\tbackground: white;\r\n\tcolor: #333;\r\n\tbox-shadow: 0 3px 14px rgba(0,0,0,0.4);\r\n\t}\r\n.leaflet-container a.leaflet-popup-close-button {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tpadding: 4px 4px 0 0;\r\n\tborder: none;\r\n\ttext-align: center;\r\n\twidth: 18px;\r\n\theight: 14px;\r\n\tfont: 16px/14px Tahoma, Verdana, sans-serif;\r\n\tcolor: #c3c3c3;\r\n\ttext-decoration: none;\r\n\tfont-weight: bold;\r\n\tbackground: transparent;\r\n\t}\r\n.leaflet-container a.leaflet-popup-close-button:hover {\r\n\tcolor: #999;\r\n\t}\r\n.leaflet-popup-scrolled {\r\n\toverflow: auto;\r\n\tborder-bottom: 1px solid #ddd;\r\n\tborder-top: 1px solid #ddd;\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-popup-content-wrapper {\r\n\tzoom: 1;\r\n\t}\r\n.leaflet-oldie .leaflet-popup-tip {\r\n\twidth: 24px;\r\n\tmargin: 0 auto;\r\n\r\n\t-ms-filter: \"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)\";\r\n\tfilter: progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678);\r\n\t}\r\n.leaflet-oldie .leaflet-popup-tip-container {\r\n\tmargin-top: -1px;\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-control-zoom,\r\n.leaflet-oldie .leaflet-control-layers,\r\n.leaflet-oldie .leaflet-popup-content-wrapper,\r\n.leaflet-oldie .leaflet-popup-tip {\r\n\tborder: 1px solid #999;\r\n\t}\r\n\r\n\r\n/* div icon */\r\n\r\n.leaflet-div-icon {\r\n\tbackground: #fff;\r\n\tborder: 1px solid #666;\r\n\t}\r\n\r\n\r\n/* Tooltip */\r\n/* Base styles for the element that has a tooltip */\r\n.leaflet-tooltip {\r\n\tposition: absolute;\r\n\tpadding: 6px;\r\n\tbackground-color: #fff;\r\n\tborder: 1px solid #fff;\r\n\tborder-radius: 3px;\r\n\tcolor: #222;\r\n\twhite-space: nowrap;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n\tpointer-events: none;\r\n\tbox-shadow: 0 1px 3px rgba(0,0,0,0.4);\r\n\t}\r\n.leaflet-tooltip.leaflet-clickable {\r\n\tcursor: pointer;\r\n\tpointer-events: auto;\r\n\t}\r\n.leaflet-tooltip-top:before,\r\n.leaflet-tooltip-bottom:before,\r\n.leaflet-tooltip-left:before,\r\n.leaflet-tooltip-right:before {\r\n\tposition: absolute;\r\n\tpointer-events: none;\r\n\tborder: 6px solid transparent;\r\n\tbackground: transparent;\r\n\tcontent: \"\";\r\n\t}\r\n\r\n/* Directions */\r\n\r\n.leaflet-tooltip-bottom {\r\n\tmargin-top: 6px;\r\n}\r\n.leaflet-tooltip-top {\r\n\tmargin-top: -6px;\r\n}\r\n.leaflet-tooltip-bottom:before,\r\n.leaflet-tooltip-top:before {\r\n\tleft: 50%;\r\n\tmargin-left: -6px;\r\n\t}\r\n.leaflet-tooltip-top:before {\r\n\tbottom: 0;\r\n\tmargin-bottom: -12px;\r\n\tborder-top-color: #fff;\r\n\t}\r\n.leaflet-tooltip-bottom:before {\r\n\ttop: 0;\r\n\tmargin-top: -12px;\r\n\tmargin-left: -6px;\r\n\tborder-bottom-color: #fff;\r\n\t}\r\n.leaflet-tooltip-left {\r\n\tmargin-left: -6px;\r\n}\r\n.leaflet-tooltip-right {\r\n\tmargin-left: 6px;\r\n}\r\n.leaflet-tooltip-left:before,\r\n.leaflet-tooltip-right:before {\r\n\ttop: 50%;\r\n\tmargin-top: -6px;\r\n\t}\r\n.leaflet-tooltip-left:before {\r\n\tright: 0;\r\n\tmargin-right: -12px;\r\n\tborder-left-color: #fff;\r\n\t}\r\n.leaflet-tooltip-right:before {\r\n\tleft: 0;\r\n\tmargin-left: -12px;\r\n\tborder-right-color: #fff;\r\n\t}\r\n", ""]);

// exports


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAQAAAADQ4RFAAACf0lEQVR4AY1UM3gkARTePdvdoTxXKc+qTl3aU5U6b2Kbkz3Gtq3Zw6ziLGNPzrYx7946Tr6/ee/XeCQ4D3ykPtL5tHno4n0d/h3+xfuWHGLX81cn7r0iTNzjr7LrlxCqPtkbTQEHeqOrTy4Yyt3VCi/IOB0v7rVC7q45Q3Gr5K6jt+3Gl5nCoDD4MtO+j96Wu8atmhGqcNGHObuf8OM/x3AMx38+4Z2sPqzCxRFK2aF2e5Jol56XTLyggAMTL56XOMoS1W4pOyjUcGGQdZxU6qRh7B9Zp+PfpOFlqt0zyDZckPi1ttmIp03jX8gyJ8a/PG2yutpS/Vol7peZIbZcKBAEEheEIAgFbDkz5H6Zrkm2hVWGiXKiF4Ycw0RWKdtC16Q7qe3X4iOMxruonzegJzWaXFrU9utOSsLUmrc0YjeWYjCW4PDMADElpJSSQ0vQvA1Tm6/JlKnqFs1EGyZiFCqnRZTEJJJiKRYzVYzJck2Rm6P4iH+cmSY0YzimYa8l0EtTODFWhcMIMVqdsI2uiTvKmTisIDHJ3od5GILVhBCarCfVRmo4uTjkhrhzkiBV7SsaqS+TzrzM1qpGGUFt28pIySQHR6h7F6KSwGWm97ay+Z+ZqMcEjEWebE7wxCSQwpkhJqoZA5ivCdZDjJepuJ9IQjGGUmuXJdBFUygxVqVsxFsLMbDe8ZbDYVCGKxs+W080max1hFCarCfV+C1KATwcnvE9gRRuMP2prdbWGowm1KB1y+zwMMENkM755cJ2yPDtqhTI6ED1M/82yIDtC/4j4BijjeObflpO9I9MwXTCsSX8jWAFeHr05WoLTJ5G8IQVS/7vwR6ohirYM7f6HzYpogfS3R2OAAAAAElFTkSuQmCC"

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAQAAABvcdNgAAAEsklEQVR4AWL4TydIhpZK1kpWOlg0w3ZXP6D2soBtG42jeI6ZmQTHzAxiTbSJsYLjO9HhP+WOmcuhciVnmHVQcJnp7DFvScowZorad/+V/fVzMdMT2g9Cv9guXGv/7pYOrXh2U+RRR3dSd9JRx6bIFc/ekqHI29JC6pJ5ZEh1yWkhkbcFeSjxgx3L2m1cb1C7bceyxA+CNjT/Ifff+/kDk2u/w/33/IeCMOSaWZ4glosqT3DNnNZQ7Cs58/3Ce5HL78iZH/vKVIaYlqzfdLu8Vi7dnvUbEza5Idt36tquZFldl6N5Z/POLof0XLK61mZCmJSWjVF9tEjUluu74IUXvgttuVIHE7YxSkaYhJZam7yiM9Pv82JYfl9nptxZaxMJE4YSPty+vF0+Y2up9d3wwijfjZbabqm/3bZ9ecKHsiGmRflnn1MW4pjHf9oLufyn2z3y1D6n8g8TZhxyzipLNPnAUpsOiuWimg52psrTZYnOWYNDTMuWBWa0tJb4rgq1UvmutpaYEbZlwU3CLJm/ayYjHW5/h7xWLn9Hh1vepDkyf7dE7MtT5LR4e7yYpHrkhOUpEfssBLq2pPhAqoSWKUkk7EDqkmK6RrCEzqDjhNDWNE+XSMvkJRDWlZTmCW0l0PHQGRZY5t1L83kT0Y3l2SItk5JAWHl2dCOBm+fPu3fo5/3v61RMCO9Jx2EEYYhb0rmNQMX/vm7gqOEJLcXTGw3CAuRNeyaPWwjR8PRqKQ1PDA/dpv+on9Shox52WFnx0KY8onHayrJzm87i5h9xGw/tfkev0jGsQizqezUKjk12hBMKJ4kbCqGPVNXudyyrShovGw5CgxsRICxF6aRmSjlBnHRzg7Gx8fKqEubI2rahQYdR1YgDIRQO7JvQyD52hoIQx0mxa0ODtW2Iozn1le2iIRdzwWewedyZzewidueOGqlsn1MvcnQpuVwLGG3/IR1hIKxCjelIDZ8ldqWz25jWAsnldEnK0Zxro19TGVb2ffIZEsIO89EIEDvKMPrzmBOQcKQ+rroye6NgRRxqR4U8EAkz0CL6uSGOm6KQCdWjvjRiSP1BPalCRS5iQYiEIvxuBMJEWgzSoHADcVMuN7IuqqTeyUPq22qFimFtxDyBBJEwNyt6TM88blFHao/6tWWhuuOM4SAK4EI4QmFHA+SEyWlp4EQoJ13cYGzMu7yszEIBOm2rVmHUNqwAIQabISNMRstmdhNWcFLsSm+0tjJH1MdRxO5Nx0WDMhCtgD6OKgZeljJqJKc9po8juskR9XN0Y1lZ3mWjLR9JCO1jRDMd0fpYC2VnvjBSEFg7wBENc0R9HFlb0xvF1+TBEpF68d+DHR6IOWVv2BECtxo46hOFUBd/APU57WIoEwJhIi2CdpyZX0m93BZicktMj1AS9dClteUFAUNUIEygRZCtik5zSxI9MubTBH1GOiHsiLJ3OCoSZkILa9PxiN0EbvhsAo8tdAf9Seepd36lGWHmtNANTv5Jd0z4QYyeo/UEJqxKRpg5LZx6btLPsOaEmdMyxYdlc8LMaJnikDlhclqmPiQnTEpLUIZEwkRagjYkEibQErwhkTAKCLQEbUgkzJQWc/0PstHHcfEdQ+UAAAAASUVORK5CYII="

/***/ }),
/* 11 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABSCAMAAAAhFXfZAAAC91BMVEVMaXEzeak2f7I4g7g3g7c3grY3grg8hJo3grY4g7c4g7c3grU0gLI4grY9hrpBi79HkMM2frE0daA0fq82gbROlslbo9Vgp9dcpNZQmcxFjsIwd6QzeKk3gbRfptdepdZcpdY2gLMtd5s3gLNZotVSntNPnNJLmtFImdBZodU1f7A2f7A1frA2f7I2f7FHmNBUnM9Wn9VGmNAydaNYoNJOm9M9hLc0e6w3fa46f7BKmdFFltBVndE1fK1Els82fq41fK1Dlc89g7RClc9XoNVUndQ0eqxClM9Jl9FRms81eqo0eqpHltFBk89Fi75Qm9M/k89KkcYzealSjbadvdPH2ufz9/r4+vzP3+qlxNljmL08gLNSnNQzeKgydqUzeKg/ks6NtM/////+/v8+kc/f6fFAgK1CiLwydKIzd6c8kM6Tt9C1zd5OmdNBh7pTjLRzn78xdKIydqU7j86jwdbM3egxdKIydaQydaMydKNGlNE6js5OiLAxc6FKkshDk9E5jc09e6Zekrcxc6I4jc03eagyc6FIldI3jM0wcaBMl9J+psNKltIwcZ82i83k7fMubJhLlc81is1Lg6pklbZNl9I/j9AvbJlEjcVdkLPt8/cwcZ4ubZkwcJ00icy0y9swcJwvb5wzicxHkcpTh60ubZhCkNAyiMwvbpoxh8xAicBHj8hGk9FHks0+jdAubJcubJdEkdEwhsw6i88ubJgta5cvhswxapgubJcuhcstbJcubZcuhMsubJcvbJZBjMgthMsubJcvbZkubJcrg8stbJctbZcubJgrgssua5gubJc6is8qgcs8i9A9iMYtg8spgcoogMo7hcMrbZcubJcngMonf8olfsoubJc4gr8kfckua5g5iM8jfMk4iM8he8k1froua5g7itAgeskubJc2hs8eecgzfLcofssdeMg0hc4ubJccd8g2hcsxeLQbdsgZdcgxeLImfcszhM0vda4xgckzhM4xg84wf8Yxgs4udKsvfcQucqjbZ8obAAAA7HRSTlMAHDdTb4yPA+L/7ZxE/////yYLgvb///////8SYf/////qB/////////+1wNHd//////8s////r/////////+O/P///////////8f///////////////////////+P2P///////////3f//////////5j/////tczn//////L///////////////////////8+////////R/////Ww////tf////9q////////////4P/////Yd/8W+P/xov+UNv///STN/7hc1P/AUv//////////MMT///+m//+e//////+M//+C////////6cqo94AAAAXmSURBVHgBrNKDoipBGADgbHMRpjuKi2xOdu//MHe2Y6tvOdZvuhGzxWqzO2xWi9lp+g6L3eV+5PH6vmpltrv8nDsQDIWCAbef83jDpo9FojFeJxhPJO8JosQzYnb5oxYpVzodiCcyhiwA2esPEAPpdM727vT+eSH0x7McwoTmOUpxIcvF/RAWI29byCUIpUQ2m8A0/xwx8kIQls2vW4QrihIHQMDqGyQBgAiVnOXVTuWUtAaAnq++I48B0PxKrPZiq8qKvy4IpPqBhiDUm0rl+ca12h1NQN3eh7pI6MN26WnfooNBPIHU4SdUlBAHg9Hj0seDEEJ08pxKqfoio4tQaDAOP0xrMEWIzB4NCWaIK8xJ7ymXItQcFO/jcLGIF+bLRytW4LS18Wbd5SNcEBcLn8mw2TYZ2+3vLRuMaYdme7sdTA8iY8flQ0mPscC2fB1ku12z4+necs7YebDlri9JZ3rvoazB1tutxdiuy1TXl4/Zer95ufzneq7524qBAIBr61TmtxXX/MK4FC6cKIwvViozXMDMzLbCTF+1JBn/4/EtLi2vrK6tbywsbE506vVxnZ3fF7YIIQamdX7dVqb/RtnCr1X+n3F9gA2MdA7Vsl87nzEDId2MTUCHSdr+As/Y1DKvM1uYFWBGpTtggrFuYrMPApgc0jhMTNmdvInLbn8NqNImgEG7jWzZnwB1KAg79t1V3mzPvgm6Q+n9m98n/e5ZQI+iw6Dby1v43AzApPIIs24/Cbg1GFcRE+h29xpvseJ2v4cxjzQOmjtAgqF5PRyRZvTXIfcqbxUNPdOnI1JYnw8FSSwUp4mklKDzoRRvkw7N0vF6QTwUI4aMRsNZyUQnMhkzb2HMZeJ0RhUMUy1jIP68lRaKUpLSXN7FW5jz+QnqKEoFas37yX6pD8tFpYybpQpv4S3lEGv5KvaV9olNDPwNHUhh1ETex5scpsQOVg8UxAFhI0dCHKPjRIogDorT1aZPzkTuHC9U2oPnQlySRzFxhYkTJYHHIXFt5srNnhBxLDSyV+L2IyF395vnhQflpHCuifv80g3/a+UPIXWNEDEAQEE0HR23weEk6XGnwR1iH3eJu7udbt26fe30I17x/PYH+9iv+CB5qT1v+YhlL5WeS5ZV72RZftvlNF6Wj75Zdn2kHcl6e5Sy/A3D7DsBMP0gd/DkC/Bp9l3gW5Y7a5asWVCm3WcaAFSHnFtxAXivwwAsWf9E25dl+TiwhwIKPVRgD33Ct6wvom0ijKapOBllpkEcf6ZCMsqjyCgjuvKIoajXYgya8vhIJ7rKKnKOP+sxjOPJZmV0DRRHGIZx/KW6npaOvor3M/G+pqalS00TT5q4G7qzPGe4O+wu7mxw59wt8p3LCre//pn/J+iupIwe1HKcpVdXI8c9QB9l9QMDnHVQF8+9xdAw5YzgBmfuHdVh4bj7GKO8cZYxW/UmvHkAeEl5pgncMJt7JzVZzOYaTFGh6WRGEDVJ5pniCDOCWw0Ns3MaLA0NdRijYm+AmQZhXoO1YQFYpBJLqGloGF1W1ZuMfKRSL1OZFVXJyNBlUhhD7evXk6sqZl+/rscaKfUDC68FtYn19Xr64xU+oo7nxQ2FWZ6vxyapuTyEdV5WTgR+HZ3DpGoN9Szzu8Qkzz9CH6kbZhlpa7uELO2gs4I0bOKRJInFC1GyPsMuaanoxPre1n6hbXlvB90dpKkPj4Q9sXAi7gnfcEDaOjqxIxwe5e1vCcforiIdu/gkyyenOSeyrBthqrpxvHV2lF0cHW4d47ySdB3g29bWiSPjZMvZBDvpqzxPZk7Ti9PDLZcyomBHk/PwxJ1ycsgiv4guzrgOz9wexn126EVbNV3oVzLj8zBaEYXqNnjP/G4W8Z8F0GYiKisTPGMZ31kQGKdymGwIhMIeTzgUgM1EZRkHgmGfL8wi01Qe0wQCYSaAESrXNBCJRiN6EYURxKLRmF5E4Q0QjwNvyIAlJBKYIiNegnlJhowBY2RMP9BPBn38SEYtLpKG/+tgQe8M5cY7AAAAAElFTkSuQmCC"

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAQAAAACach9AAACMUlEQVR4Ae3ShY7jQBAE0Aoz/f9/HTMzhg1zrdKUrJbdx+Kd2nD8VNudfsL/Th///dyQN2TH6f3y/BGpC379rV+S+qqetBOxImNQXL8JCAr2V4iMQXHGNJxeCfZXhSRBcQMfvkOWUdtfzlLgAENmZDcmo2TVmt8OSM2eXxBp3DjHSMFutqS7SbmemzBiR+xpKCNUIRkdkkYxhAkyGoBvyQFEJEefwSmmvBfJuJ6aKqKWnAkvGZOaZXTUgFqYULWNSHUckZuR1HIIimUExutRxwzOLROIG4vKmCKQt364mIlhSyzAf1m9lHZHJZrlAOMMztRRiKimp/rpdJDc9Awry5xTZCte7FHtuS8wJgeYGrex28xNTd086Dik7vUMscQOa8y4DoGtCCSkAKlNwpgNtphjrC6MIHUkR6YWxxs6Sc5xqn222mmCRFzIt8lEdKx+ikCtg91qS2WpwVfBelJCiQJwvzixfI9cxZQWgiSJelKnwBElKYtDOb2MFbhmUigbReQBV0Cg4+qMXSxXSyGUn4UbF8l+7qdSGnTC0XLCmahIgUHLhLOhpVCtw4CzYXvLQWQbJNmxoCsOKAxSgBJno75avolkRw8iIAFcsdc02e9iyCd8tHwmeSSoKTowIgvscSGZUOA7PuCN5b2BX9mQM7S0wYhMNU74zgsPBj3HU7wguAfnxxjFQGBE6pwN+GjME9zHY7zGp8wVxMShYX9NXvEWD3HbwJf4giO4CFIQxXScH1/TM+04kkBiAAAAAElFTkSuQmCC"

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(fetch) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__schema___ = __webpack_require__(17);


const fetchForumData = () => fetch('https://ffforumautomator.herokuapp.com/hackable-data');
/* harmony export (immutable) */ __webpack_exports__["b"] = fetchForumData;


const filterInvalidUserData = data => data.filter(__WEBPACK_IMPORTED_MODULE_0__schema___["a" /* isValidUserData */]);
const mapUserToLocationData = user =>
  Object.assign({}, { username: user.username }, JSON.parse(user.hackable_json).usermap_location);
const mapToLocationData = data => filterInvalidUserData(data).map(mapUserToLocationData);

const extractUserLocations = forumData => mapToLocationData(forumData);
/* harmony export (immutable) */ __webpack_exports__["a"] = extractUserLocations;


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(15)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
__webpack_require__(16);
module.exports = self.fetch.bind(self);


/***/ }),
/* 16 */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    rawHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = 'status' in options ? options.status : 200
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__forum_data_schema__ = __webpack_require__(18);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__forum_data_schema__["a"]; });



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_joi_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_joi_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_joi_browser__);


const usermapLocationSchema = __WEBPACK_IMPORTED_MODULE_0_joi_browser___default.a.object().keys({
  lat: __WEBPACK_IMPORTED_MODULE_0_joi_browser___default.a.number().required(),
  lng: __WEBPACK_IMPORTED_MODULE_0_joi_browser___default.a.number().required(),
  caption: __WEBPACK_IMPORTED_MODULE_0_joi_browser___default.a.string().required(),
});
/* unused harmony export usermapLocationSchema */


const hackableJsonSchema = __WEBPACK_IMPORTED_MODULE_0_joi_browser___default.a.object().keys({
  usermap_location: usermapLocationSchema.required(),
});
/* unused harmony export hackableJsonSchema */


const userDataSchema = __WEBPACK_IMPORTED_MODULE_0_joi_browser___default.a.object().keys({
  username: __WEBPACK_IMPORTED_MODULE_0_joi_browser___default.a.string().required(),
  hackable_json: hackableJsonSchema.required(),
});
/* unused harmony export userDataSchema */


const isValidUserData = (obj) => {
  const { error } = __WEBPACK_IMPORTED_MODULE_0_joi_browser___default.a.validate(obj, userDataSchema);
  return !error;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = isValidUserData;



/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Joi", [], factory);
	else if(typeof exports === 'object')
		exports["Joi"] = factory();
	else
		root["Joi"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Joi = __webpack_require__(1);

	module.exports = Joi;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Load modules

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var Hoek = __webpack_require__(2);
	var Any = __webpack_require__(11);
	var Cast = __webpack_require__(16);
	var Errors = __webpack_require__(13);
	var Lazy = __webpack_require__(29);
	var Ref = __webpack_require__(12);

	// Declare internals

	var internals = {
	    alternatives: __webpack_require__(25),
	    array: __webpack_require__(30),
	    boolean: __webpack_require__(24),
	    binary: __webpack_require__(31),
	    date: __webpack_require__(17),
	    number: __webpack_require__(23),
	    object: __webpack_require__(26),
	    string: __webpack_require__(18)
	};

	internals.root = function () {

	    var any = new Any();

	    var root = any.clone();
	    root.any = function () {

	        Hoek.assert(arguments.length === 0, 'Joi.any() does not allow arguments.');

	        return any;
	    };

	    root.alternatives = root.alt = function () {

	        return arguments.length ? internals.alternatives.try.apply(internals.alternatives, arguments) : internals.alternatives;
	    };

	    root.array = function () {

	        Hoek.assert(arguments.length === 0, 'Joi.array() does not allow arguments.');

	        return internals.array;
	    };

	    root.boolean = root.bool = function () {

	        Hoek.assert(arguments.length === 0, 'Joi.boolean() does not allow arguments.');

	        return internals.boolean;
	    };

	    root.binary = function () {

	        Hoek.assert(arguments.length === 0, 'Joi.binary() does not allow arguments.');

	        return internals.binary;
	    };

	    root.date = function () {

	        Hoek.assert(arguments.length === 0, 'Joi.date() does not allow arguments.');

	        return internals.date;
	    };

	    root.func = function () {

	        Hoek.assert(arguments.length === 0, 'Joi.func() does not allow arguments.');

	        return internals.object._func();
	    };

	    root.number = function () {

	        Hoek.assert(arguments.length === 0, 'Joi.number() does not allow arguments.');

	        return internals.number;
	    };

	    root.object = function () {

	        return arguments.length ? internals.object.keys.apply(internals.object, arguments) : internals.object;
	    };

	    root.string = function () {

	        Hoek.assert(arguments.length === 0, 'Joi.string() does not allow arguments.');

	        return internals.string;
	    };

	    root.ref = function () {

	        return Ref.create.apply(null, arguments);
	    };

	    root.isRef = function (ref) {

	        return Ref.isRef(ref);
	    };

	    root.validate = function (value /*, [schema], [options], callback */) {

	        var last = arguments[arguments.length - 1];
	        var callback = typeof last === 'function' ? last : null;

	        var count = arguments.length - (callback ? 1 : 0);
	        if (count === 1) {
	            return any.validate(value, callback);
	        }

	        var options = count === 3 ? arguments[2] : {};
	        var schema = root.compile(arguments[1]);

	        return schema._validateWithOptions(value, options, callback);
	    };

	    root.describe = function () {

	        var schema = arguments.length ? root.compile(arguments[0]) : any;
	        return schema.describe();
	    };

	    root.compile = function (schema) {

	        try {
	            return Cast.schema(schema);
	        } catch (err) {
	            if (err.hasOwnProperty('path')) {
	                err.message = err.message + '(' + err.path + ')';
	            }
	            throw err;
	        }
	    };

	    root.assert = function (value, schema, message) {

	        root.attempt(value, schema, message);
	    };

	    root.attempt = function (value, schema, message) {

	        var result = root.validate(value, schema);
	        var error = result.error;
	        if (error) {
	            if (!message) {
	                if (typeof error.annotate === 'function') {
	                    error.message = error.annotate();
	                }
	                throw error;
	            }

	            if (!(message instanceof Error)) {
	                if (typeof error.annotate === 'function') {
	                    error.message = message + ' ' + error.annotate();
	                }
	                throw error;
	            }

	            throw message;
	        }

	        return result.value;
	    };

	    root.reach = function (schema, path) {

	        Hoek.assert(schema && schema instanceof Any, 'you must provide a joi schema');
	        Hoek.assert(typeof path === 'string', 'path must be a string');

	        if (path === '') {
	            return schema;
	        }

	        var parts = path.split('.');
	        var children = schema._inner.children;
	        if (!children) {
	            return;
	        }

	        var key = parts[0];
	        for (var i = 0; i < children.length; ++i) {
	            var child = children[i];
	            if (child.key === key) {
	                return this.reach(child.schema, path.substr(key.length + 1));
	            }
	        }
	    };

	    root.lazy = function (fn) {

	        return Lazy.set(fn);
	    };

	    root.extend = function () {
	        var _this = this;

	        var extensions = Hoek.flatten(Array.prototype.slice.call(arguments));
	        Hoek.assert(extensions.length > 0, 'You need to provide at least one extension');

	        this.assert(extensions, root.extensionsSchema);

	        var joi = Object.create(this.any());
	        _extends(joi, this);

	        var _loop = function _loop(i) {
	            var extension = extensions[i];

	            if (typeof extension === 'function') {
	                extension = extension(joi);
	            }

	            _this.assert(extension, root.extensionSchema);

	            var base = (extension.base || _this.any()).clone(); // Cloning because we're going to override language afterwards
	            var ctor = base.constructor;
	            var type = function (_ctor) {
	                _inherits(type, _ctor);

	                // eslint-disable-line no-loop-func

	                function type() {
	                    _classCallCheck(this, type);

	                    var _this2 = _possibleConstructorReturn(this, _ctor.call(this));

	                    if (extension.base) {
	                        _extends(_this2, base);
	                    }

	                    _this2._type = extension.name;

	                    if (extension.language) {
	                        _this2._settings = _this2._settings || { language: {} };
	                        _this2._settings.language = Hoek.applyToDefaults(_this2._settings.language, _defineProperty({}, extension.name, extension.language));
	                    }
	                    return _this2;
	                }

	                return type;
	            }(ctor);

	            if (extension.coerce) {
	                type.prototype._coerce = function (value, state, options) {

	                    if (ctor.prototype._coerce) {
	                        var baseRet = ctor.prototype._coerce.call(this, value, state, options);

	                        if (baseRet.errors) {
	                            return baseRet;
	                        }

	                        value = baseRet.value;
	                    }

	                    var ret = extension.coerce.call(this, value, state, options);
	                    if (ret instanceof Errors.Err) {
	                        return { value: value, errors: ret };
	                    }

	                    return { value: ret };
	                };
	            }
	            if (extension.pre) {
	                type.prototype._base = function (value, state, options) {

	                    if (ctor.prototype._base) {
	                        var baseRet = ctor.prototype._base.call(this, value, state, options);

	                        if (baseRet.errors) {
	                            return baseRet;
	                        }

	                        value = baseRet.value;
	                    }

	                    var ret = extension.pre.call(this, value, state, options);
	                    if (ret instanceof Errors.Err) {
	                        return { value: value, errors: ret };
	                    }

	                    return { value: ret };
	                };
	            }

	            if (extension.rules) {
	                var _loop2 = function _loop2(j) {
	                    var rule = extension.rules[j];
	                    var ruleArgs = rule.params ? rule.params instanceof Any ? rule.params._inner.children.map(function (k) {
	                        return k.key;
	                    }) : Object.keys(rule.params) : [];
	                    var validateArgs = rule.params ? Cast.schema(rule.params) : null;

	                    type.prototype[rule.name] = function () {
	                        // eslint-disable-line no-loop-func

	                        if (arguments.length > ruleArgs.length) {
	                            throw new Error('Unexpected number of arguments');
	                        }

	                        var args = Array.prototype.slice.call(arguments);
	                        var hasRef = false;
	                        var arg = {};

	                        for (var k = 0; k < ruleArgs.length; ++k) {
	                            arg[ruleArgs[k]] = args[k];
	                            if (!hasRef && Ref.isRef(args[k])) {
	                                hasRef = true;
	                            }
	                        }

	                        if (validateArgs) {
	                            arg = joi.attempt(arg, validateArgs);
	                        }

	                        var schema = void 0;
	                        if (rule.validate) {
	                            var validate = function validate(value, state, options) {

	                                return rule.validate.call(this, arg, value, state, options);
	                            };

	                            schema = this._test(rule.name, arg, validate, {
	                                description: rule.description,
	                                hasRef: hasRef
	                            });
	                        } else {
	                            schema = this.clone();
	                        }

	                        if (rule.setup) {
	                            var newSchema = rule.setup.call(schema, arg);
	                            if (newSchema !== undefined) {
	                                Hoek.assert(newSchema instanceof Any, 'Setup of extension Joi.' + this._type + '().' + rule.name + '() must return undefined or a Joi object');
	                                schema = newSchema;
	                            }
	                        }

	                        return schema;
	                    };
	                };

	                for (var j = 0; j < extension.rules.length; ++j) {
	                    _loop2(j);
	                }
	            }

	            if (extension.describe) {
	                type.prototype.describe = function () {

	                    var description = ctor.prototype.describe.call(this);
	                    return extension.describe.call(this, description);
	                };
	            }

	            var instance = new type();
	            joi[extension.name] = function () {

	                return instance;
	            };
	        };

	        for (var i = 0; i < extensions.length; ++i) {
	            _loop(i);
	        }

	        return joi;
	    };

	    root.extensionSchema = internals.object.keys({
	        base: internals.object.type(Any, 'Joi object'),
	        name: internals.string.required(),
	        coerce: internals.object._func().arity(3),
	        pre: internals.object._func().arity(3),
	        language: internals.object,
	        describe: internals.object._func().arity(1),
	        rules: internals.array.items(internals.object.keys({
	            name: internals.string.required(),
	            setup: internals.object._func().arity(1),
	            validate: internals.object._func().arity(4),
	            params: [internals.object.pattern(/.*/, internals.object.type(Any, 'Joi object')), internals.object.type(internals.object.constructor, 'Joi object')],
	            description: [internals.string, internals.object._func().arity(1)]
	        }).or('setup', 'validate'))
	    }).strict();

	    root.extensionsSchema = internals.array.items([internals.object, internals.object._func().arity(1)]).strict();

	    root.version = __webpack_require__(32).version;

	    return root;
	};

	module.exports = internals.root();

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer, process) {'use strict';

	// Load modules

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var Crypto = __webpack_require__(5);
	var Path = __webpack_require__(6);
	var Util = __webpack_require__(7);
	var Escape = __webpack_require__(10);

	// Declare internals

	var internals = {};

	// Clone object or array

	exports.clone = function (obj, seen) {

	    if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || obj === null) {

	        return obj;
	    }

	    seen = seen || new Map();

	    var lookup = seen.get(obj);
	    if (lookup) {
	        return lookup;
	    }

	    var newObj = void 0;
	    var cloneDeep = false;

	    if (!Array.isArray(obj)) {
	        if (Buffer.isBuffer(obj)) {
	            newObj = new Buffer(obj);
	        } else if (obj instanceof Date) {
	            newObj = new Date(obj.getTime());
	        } else if (obj instanceof RegExp) {
	            newObj = new RegExp(obj);
	        } else {
	            var proto = Object.getPrototypeOf(obj);
	            if (proto && proto.isImmutable) {

	                newObj = obj;
	            } else {
	                newObj = Object.create(proto);
	                cloneDeep = true;
	            }
	        }
	    } else {
	        newObj = [];
	        cloneDeep = true;
	    }

	    seen.set(obj, newObj);

	    if (cloneDeep) {
	        var keys = Object.getOwnPropertyNames(obj);
	        for (var i = 0; i < keys.length; ++i) {
	            var key = keys[i];
	            var descriptor = Object.getOwnPropertyDescriptor(obj, key);
	            if (descriptor && (descriptor.get || descriptor.set)) {

	                Object.defineProperty(newObj, key, descriptor);
	            } else {
	                newObj[key] = exports.clone(obj[key], seen);
	            }
	        }
	    }

	    return newObj;
	};

	// Merge all the properties of source into target, source wins in conflict, and by default null and undefined from source are applied

	/*eslint-disable */
	exports.merge = function (target, source, isNullOverride /* = true */, isMergeArrays /* = true */) {
	    /*eslint-enable */

	    exports.assert(target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object', 'Invalid target value: must be an object');
	    exports.assert(source === null || source === undefined || (typeof source === 'undefined' ? 'undefined' : _typeof(source)) === 'object', 'Invalid source value: must be null, undefined, or an object');

	    if (!source) {
	        return target;
	    }

	    if (Array.isArray(source)) {
	        exports.assert(Array.isArray(target), 'Cannot merge array onto an object');
	        if (isMergeArrays === false) {
	            // isMergeArrays defaults to true
	            target.length = 0; // Must not change target assignment
	        }

	        for (var i = 0; i < source.length; ++i) {
	            target.push(exports.clone(source[i]));
	        }

	        return target;
	    }

	    var keys = Object.keys(source);
	    for (var _i = 0; _i < keys.length; ++_i) {
	        var key = keys[_i];
	        var value = source[key];
	        if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {

	            if (!target[key] || _typeof(target[key]) !== 'object' || Array.isArray(target[key]) !== Array.isArray(value) || value instanceof Date || Buffer.isBuffer(value) || value instanceof RegExp) {

	                target[key] = exports.clone(value);
	            } else {
	                exports.merge(target[key], value, isNullOverride, isMergeArrays);
	            }
	        } else {
	            if (value !== null && value !== undefined) {
	                // Explicit to preserve empty strings

	                target[key] = value;
	            } else if (isNullOverride !== false) {
	                // Defaults to true
	                target[key] = value;
	            }
	        }
	    }

	    return target;
	};

	// Apply options to a copy of the defaults

	exports.applyToDefaults = function (defaults, options, isNullOverride) {

	    exports.assert(defaults && (typeof defaults === 'undefined' ? 'undefined' : _typeof(defaults)) === 'object', 'Invalid defaults value: must be an object');
	    exports.assert(!options || options === true || (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object', 'Invalid options value: must be true, falsy or an object');

	    if (!options) {
	        // If no options, return null
	        return null;
	    }

	    var copy = exports.clone(defaults);

	    if (options === true) {
	        // If options is set to true, use defaults
	        return copy;
	    }

	    return exports.merge(copy, options, isNullOverride === true, false);
	};

	// Clone an object except for the listed keys which are shallow copied

	exports.cloneWithShallow = function (source, keys) {

	    if (!source || (typeof source === 'undefined' ? 'undefined' : _typeof(source)) !== 'object') {

	        return source;
	    }

	    var storage = internals.store(source, keys); // Move shallow copy items to storage
	    var copy = exports.clone(source); // Deep copy the rest
	    internals.restore(copy, source, storage); // Shallow copy the stored items and restore
	    return copy;
	};

	internals.store = function (source, keys) {

	    var storage = {};
	    for (var i = 0; i < keys.length; ++i) {
	        var key = keys[i];
	        var value = exports.reach(source, key);
	        if (value !== undefined) {
	            storage[key] = value;
	            internals.reachSet(source, key, undefined);
	        }
	    }

	    return storage;
	};

	internals.restore = function (copy, source, storage) {

	    var keys = Object.keys(storage);
	    for (var i = 0; i < keys.length; ++i) {
	        var key = keys[i];
	        internals.reachSet(copy, key, storage[key]);
	        internals.reachSet(source, key, storage[key]);
	    }
	};

	internals.reachSet = function (obj, key, value) {

	    var path = key.split('.');
	    var ref = obj;
	    for (var i = 0; i < path.length; ++i) {
	        var segment = path[i];
	        if (i + 1 === path.length) {
	            ref[segment] = value;
	        }

	        ref = ref[segment];
	    }
	};

	// Apply options to defaults except for the listed keys which are shallow copied from option without merging

	exports.applyToDefaultsWithShallow = function (defaults, options, keys) {

	    exports.assert(defaults && (typeof defaults === 'undefined' ? 'undefined' : _typeof(defaults)) === 'object', 'Invalid defaults value: must be an object');
	    exports.assert(!options || options === true || (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object', 'Invalid options value: must be true, falsy or an object');
	    exports.assert(keys && Array.isArray(keys), 'Invalid keys');

	    if (!options) {
	        // If no options, return null
	        return null;
	    }

	    var copy = exports.cloneWithShallow(defaults, keys);

	    if (options === true) {
	        // If options is set to true, use defaults
	        return copy;
	    }

	    var storage = internals.store(options, keys); // Move shallow copy items to storage
	    exports.merge(copy, options, false, false); // Deep copy the rest
	    internals.restore(copy, options, storage); // Shallow copy the stored items and restore
	    return copy;
	};

	// Deep object or array comparison

	exports.deepEqual = function (obj, ref, options, seen) {

	    options = options || { prototype: true };

	    var type = typeof obj === 'undefined' ? 'undefined' : _typeof(obj);

	    if (type !== (typeof ref === 'undefined' ? 'undefined' : _typeof(ref))) {
	        return false;
	    }

	    if (type !== 'object' || obj === null || ref === null) {

	        if (obj === ref) {
	            // Copied from Deep-eql, copyright(c) 2013 Jake Luer, jake@alogicalparadox.com, MIT Licensed, https://github.com/chaijs/deep-eql
	            return obj !== 0 || 1 / obj === 1 / ref; // -0 / +0
	        }

	        return obj !== obj && ref !== ref; // NaN
	    }

	    seen = seen || [];
	    if (seen.indexOf(obj) !== -1) {
	        return true; // If previous comparison failed, it would have stopped execution
	    }

	    seen.push(obj);

	    if (Array.isArray(obj)) {
	        if (!Array.isArray(ref)) {
	            return false;
	        }

	        if (!options.part && obj.length !== ref.length) {
	            return false;
	        }

	        for (var i = 0; i < obj.length; ++i) {
	            if (options.part) {
	                var found = false;
	                for (var j = 0; j < ref.length; ++j) {
	                    if (exports.deepEqual(obj[i], ref[j], options)) {
	                        found = true;
	                        break;
	                    }
	                }

	                return found;
	            }

	            if (!exports.deepEqual(obj[i], ref[i], options)) {
	                return false;
	            }
	        }

	        return true;
	    }

	    if (Buffer.isBuffer(obj)) {
	        if (!Buffer.isBuffer(ref)) {
	            return false;
	        }

	        if (obj.length !== ref.length) {
	            return false;
	        }

	        for (var _i2 = 0; _i2 < obj.length; ++_i2) {
	            if (obj[_i2] !== ref[_i2]) {
	                return false;
	            }
	        }

	        return true;
	    }

	    if (obj instanceof Date) {
	        return ref instanceof Date && obj.getTime() === ref.getTime();
	    }

	    if (obj instanceof RegExp) {
	        return ref instanceof RegExp && obj.toString() === ref.toString();
	    }

	    if (options.prototype) {
	        if (Object.getPrototypeOf(obj) !== Object.getPrototypeOf(ref)) {
	            return false;
	        }
	    }

	    var keys = Object.getOwnPropertyNames(obj);

	    if (!options.part && keys.length !== Object.getOwnPropertyNames(ref).length) {
	        return false;
	    }

	    for (var _i3 = 0; _i3 < keys.length; ++_i3) {
	        var key = keys[_i3];
	        var descriptor = Object.getOwnPropertyDescriptor(obj, key);
	        if (descriptor.get) {
	            if (!exports.deepEqual(descriptor, Object.getOwnPropertyDescriptor(ref, key), options, seen)) {
	                return false;
	            }
	        } else if (!exports.deepEqual(obj[key], ref[key], options, seen)) {
	            return false;
	        }
	    }

	    return true;
	};

	// Remove duplicate items from array

	exports.unique = function (array, key) {

	    var result = void 0;
	    if (key) {
	        (function () {
	            result = [];
	            var index = new Set();
	            array.forEach(function (item) {

	                var identifier = item[key];
	                if (!index.has(identifier)) {
	                    index.add(identifier);
	                    result.push(item);
	                }
	            });
	        })();
	    } else {
	        result = Array.from(new Set(array));
	    }

	    return result;
	};

	// Convert array into object

	exports.mapToObject = function (array, key) {

	    if (!array) {
	        return null;
	    }

	    var obj = {};
	    for (var i = 0; i < array.length; ++i) {
	        if (key) {
	            if (array[i][key]) {
	                obj[array[i][key]] = true;
	            }
	        } else {
	            obj[array[i]] = true;
	        }
	    }

	    return obj;
	};

	// Find the common unique items in two arrays

	exports.intersect = function (array1, array2, justFirst) {

	    if (!array1 || !array2) {
	        return [];
	    }

	    var common = [];
	    var hash = Array.isArray(array1) ? exports.mapToObject(array1) : array1;
	    var found = {};
	    for (var i = 0; i < array2.length; ++i) {
	        if (hash[array2[i]] && !found[array2[i]]) {
	            if (justFirst) {
	                return array2[i];
	            }

	            common.push(array2[i]);
	            found[array2[i]] = true;
	        }
	    }

	    return justFirst ? null : common;
	};

	// Test if the reference contains the values

	exports.contain = function (ref, values, options) {

	    /*
	        string -> string(s)
	        array -> item(s)
	        object -> key(s)
	        object -> object (key:value)
	    */

	    var valuePairs = null;
	    if ((typeof ref === 'undefined' ? 'undefined' : _typeof(ref)) === 'object' && (typeof values === 'undefined' ? 'undefined' : _typeof(values)) === 'object' && !Array.isArray(ref) && !Array.isArray(values)) {

	        valuePairs = values;
	        values = Object.keys(values);
	    } else {
	        values = [].concat(values);
	    }

	    options = options || {}; // deep, once, only, part

	    exports.assert(arguments.length >= 2, 'Insufficient arguments');
	    exports.assert(typeof ref === 'string' || (typeof ref === 'undefined' ? 'undefined' : _typeof(ref)) === 'object', 'Reference must be string or an object');
	    exports.assert(values.length, 'Values array cannot be empty');

	    var compare = void 0;
	    var compareFlags = void 0;
	    if (options.deep) {
	        compare = exports.deepEqual;

	        var hasOnly = options.hasOwnProperty('only');
	        var hasPart = options.hasOwnProperty('part');

	        compareFlags = {
	            prototype: hasOnly ? options.only : hasPart ? !options.part : false,
	            part: hasOnly ? !options.only : hasPart ? options.part : true
	        };
	    } else {
	        compare = function compare(a, b) {
	            return a === b;
	        };
	    }

	    var misses = false;
	    var matches = new Array(values.length);
	    for (var i = 0; i < matches.length; ++i) {
	        matches[i] = 0;
	    }

	    if (typeof ref === 'string') {
	        var pattern = '(';
	        for (var _i4 = 0; _i4 < values.length; ++_i4) {
	            var value = values[_i4];
	            exports.assert(typeof value === 'string', 'Cannot compare string reference to non-string value');
	            pattern += (_i4 ? '|' : '') + exports.escapeRegex(value);
	        }

	        var regex = new RegExp(pattern + ')', 'g');
	        var leftovers = ref.replace(regex, function ($0, $1) {

	            var index = values.indexOf($1);
	            ++matches[index];
	            return ''; // Remove from string
	        });

	        misses = !!leftovers;
	    } else if (Array.isArray(ref)) {
	        for (var _i5 = 0; _i5 < ref.length; ++_i5) {
	            var matched = false;
	            for (var j = 0; j < values.length && matched === false; ++j) {
	                matched = compare(values[j], ref[_i5], compareFlags) && j;
	            }

	            if (matched !== false) {
	                ++matches[matched];
	            } else {
	                misses = true;
	            }
	        }
	    } else {
	        var keys = Object.getOwnPropertyNames(ref);
	        for (var _i6 = 0; _i6 < keys.length; ++_i6) {
	            var key = keys[_i6];
	            var pos = values.indexOf(key);
	            if (pos !== -1) {
	                if (valuePairs && !compare(valuePairs[key], ref[key], compareFlags)) {

	                    return false;
	                }

	                ++matches[pos];
	            } else {
	                misses = true;
	            }
	        }
	    }

	    var result = false;
	    for (var _i7 = 0; _i7 < matches.length; ++_i7) {
	        result = result || !!matches[_i7];
	        if (options.once && matches[_i7] > 1 || !options.part && !matches[_i7]) {

	            return false;
	        }
	    }

	    if (options.only && misses) {

	        return false;
	    }

	    return result;
	};

	// Flatten array

	exports.flatten = function (array, target) {

	    var result = target || [];

	    for (var i = 0; i < array.length; ++i) {
	        if (Array.isArray(array[i])) {
	            exports.flatten(array[i], result);
	        } else {
	            result.push(array[i]);
	        }
	    }

	    return result;
	};

	// Convert an object key chain string ('a.b.c') to reference (object[a][b][c])

	exports.reach = function (obj, chain, options) {

	    if (chain === false || chain === null || typeof chain === 'undefined') {

	        return obj;
	    }

	    options = options || {};
	    if (typeof options === 'string') {
	        options = { separator: options };
	    }

	    var path = chain.split(options.separator || '.');
	    var ref = obj;
	    for (var i = 0; i < path.length; ++i) {
	        var key = path[i];
	        if (key[0] === '-' && Array.isArray(ref)) {
	            key = key.slice(1, key.length);
	            key = ref.length - key;
	        }

	        if (!ref || !(((typeof ref === 'undefined' ? 'undefined' : _typeof(ref)) === 'object' || typeof ref === 'function') && key in ref) || (typeof ref === 'undefined' ? 'undefined' : _typeof(ref)) !== 'object' && options.functions === false) {
	            // Only object and function can have properties

	            exports.assert(!options.strict || i + 1 === path.length, 'Missing segment', key, 'in reach path ', chain);
	            exports.assert((typeof ref === 'undefined' ? 'undefined' : _typeof(ref)) === 'object' || options.functions === true || typeof ref !== 'function', 'Invalid segment', key, 'in reach path ', chain);
	            ref = options.default;
	            break;
	        }

	        ref = ref[key];
	    }

	    return ref;
	};

	exports.reachTemplate = function (obj, template, options) {

	    return template.replace(/{([^}]+)}/g, function ($0, chain) {

	        var value = exports.reach(obj, chain, options);
	        return value === undefined || value === null ? '' : value;
	    });
	};

	exports.formatStack = function (stack) {

	    var trace = [];
	    for (var i = 0; i < stack.length; ++i) {
	        var item = stack[i];
	        trace.push([item.getFileName(), item.getLineNumber(), item.getColumnNumber(), item.getFunctionName(), item.isConstructor()]);
	    }

	    return trace;
	};

	exports.formatTrace = function (trace) {

	    var display = [];

	    for (var i = 0; i < trace.length; ++i) {
	        var row = trace[i];
	        display.push((row[4] ? 'new ' : '') + row[3] + ' (' + row[0] + ':' + row[1] + ':' + row[2] + ')');
	    }

	    return display;
	};

	exports.callStack = function (slice) {

	    // http://code.google.com/p/v8/wiki/JavaScriptStackTraceApi

	    var v8 = Error.prepareStackTrace;
	    Error.prepareStackTrace = function (_, stack) {

	        return stack;
	    };

	    var capture = {};
	    Error.captureStackTrace(capture, this); // arguments.callee is not supported in strict mode so we use this and slice the trace of this off the result
	    var stack = capture.stack;

	    Error.prepareStackTrace = v8;

	    var trace = exports.formatStack(stack);

	    return trace.slice(1 + slice);
	};

	exports.displayStack = function (slice) {

	    var trace = exports.callStack(slice === undefined ? 1 : slice + 1);

	    return exports.formatTrace(trace);
	};

	exports.abortThrow = false;

	exports.abort = function (message, hideStack) {

	    if (process.env.NODE_ENV === 'test' || exports.abortThrow === true) {
	        throw new Error(message || 'Unknown error');
	    }

	    var stack = '';
	    if (!hideStack) {
	        stack = exports.displayStack(1).join('\n\t');
	    }
	    console.log('ABORT: ' + message + '\n\t' + stack);
	    process.exit(1);
	};

	exports.assert = function (condition /*, msg1, msg2, msg3 */) {

	    if (condition) {
	        return;
	    }

	    if (arguments.length === 2 && arguments[1] instanceof Error) {
	        throw arguments[1];
	    }

	    var msgs = [];
	    for (var i = 1; i < arguments.length; ++i) {
	        if (arguments[i] !== '') {
	            msgs.push(arguments[i]); // Avoids Array.slice arguments leak, allowing for V8 optimizations
	        }
	    }

	    msgs = msgs.map(function (msg) {

	        return typeof msg === 'string' ? msg : msg instanceof Error ? msg.message : exports.stringify(msg);
	    });

	    throw new Error(msgs.join(' ') || 'Unknown error');
	};

	exports.Timer = function () {

	    this.ts = 0;
	    this.reset();
	};

	exports.Timer.prototype.reset = function () {

	    this.ts = Date.now();
	};

	exports.Timer.prototype.elapsed = function () {

	    return Date.now() - this.ts;
	};

	exports.Bench = function () {

	    this.ts = 0;
	    this.reset();
	};

	exports.Bench.prototype.reset = function () {

	    this.ts = exports.Bench.now();
	};

	exports.Bench.prototype.elapsed = function () {

	    return exports.Bench.now() - this.ts;
	};

	exports.Bench.now = function () {

	    var ts = process.hrtime();
	    return ts[0] * 1e3 + ts[1] / 1e6;
	};

	// Escape string for Regex construction

	exports.escapeRegex = function (string) {

	    // Escape ^$.*+-?=!:|\/()[]{},
	    return string.replace(/[\^\$\.\*\+\-\?\=\!\:\|\\\/\(\)\[\]\{\}\,]/g, '\\$&');
	};

	// Base64url (RFC 4648) encode

	exports.base64urlEncode = function (value, encoding) {

	    exports.assert(typeof value === 'string' || Buffer.isBuffer(value), 'value must be string or buffer');
	    var buf = Buffer.isBuffer(value) ? value : new Buffer(value, encoding || 'binary');
	    return buf.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/\=/g, '');
	};

	// Base64url (RFC 4648) decode

	exports.base64urlDecode = function (value, encoding) {

	    if (typeof value !== 'string') {

	        return new Error('Value not a string');
	    }

	    if (!/^[\w\-]*$/.test(value)) {

	        return new Error('Invalid character');
	    }

	    var buf = new Buffer(value, 'base64');
	    return encoding === 'buffer' ? buf : buf.toString(encoding || 'binary');
	};

	// Escape attribute value for use in HTTP header

	exports.escapeHeaderAttribute = function (attribute) {

	    // Allowed value characters: !#$%&'()*+,-./:;<=>?@[]^_`{|}~ and space, a-z, A-Z, 0-9, \, "

	    exports.assert(/^[ \w\!#\$%&'\(\)\*\+,\-\.\/\:;<\=>\?@\[\]\^`\{\|\}~\"\\]*$/.test(attribute), 'Bad attribute value (' + attribute + ')');

	    return attribute.replace(/\\/g, '\\\\').replace(/\"/g, '\\"'); // Escape quotes and slash
	};

	exports.escapeHtml = function (string) {

	    return Escape.escapeHtml(string);
	};

	exports.escapeJavaScript = function (string) {

	    return Escape.escapeJavaScript(string);
	};

	exports.nextTick = function (callback) {

	    return function () {

	        var args = arguments;
	        process.nextTick(function () {

	            callback.apply(null, args);
	        });
	    };
	};

	exports.once = function (method) {

	    if (method._hoekOnce) {
	        return method;
	    }

	    var once = false;
	    var wrapped = function wrapped() {

	        if (!once) {
	            once = true;
	            method.apply(null, arguments);
	        }
	    };

	    wrapped._hoekOnce = true;

	    return wrapped;
	};

	exports.isInteger = Number.isSafeInteger;

	exports.ignore = function () {};

	exports.inherits = Util.inherits;

	exports.format = Util.format;

	exports.transform = function (source, transform, options) {

	    exports.assert(source === null || source === undefined || (typeof source === 'undefined' ? 'undefined' : _typeof(source)) === 'object' || Array.isArray(source), 'Invalid source object: must be null, undefined, an object, or an array');
	    var separator = (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object' && options !== null ? options.separator || '.' : '.';

	    if (Array.isArray(source)) {
	        var results = [];
	        for (var i = 0; i < source.length; ++i) {
	            results.push(exports.transform(source[i], transform, options));
	        }
	        return results;
	    }

	    var result = {};
	    var keys = Object.keys(transform);

	    for (var _i8 = 0; _i8 < keys.length; ++_i8) {
	        var key = keys[_i8];
	        var path = key.split(separator);
	        var sourcePath = transform[key];

	        exports.assert(typeof sourcePath === 'string', 'All mappings must be "." delineated strings');

	        var segment = void 0;
	        var res = result;

	        while (path.length > 1) {
	            segment = path.shift();
	            if (!res[segment]) {
	                res[segment] = {};
	            }
	            res = res[segment];
	        }
	        segment = path.shift();
	        res[segment] = exports.reach(source, sourcePath, options);
	    }

	    return result;
	};

	exports.uniqueFilename = function (path, extension) {

	    if (extension) {
	        extension = extension[0] !== '.' ? '.' + extension : extension;
	    } else {
	        extension = '';
	    }

	    path = Path.resolve(path);
	    var name = [Date.now(), process.pid, Crypto.randomBytes(8).toString('hex')].join('-') + extension;
	    return Path.join(path, name);
	};

	exports.stringify = function () {

	    try {
	        return JSON.stringify.apply(null, arguments);
	    } catch (err) {
	        return '[Cannot display object: ' + err.message + ']';
	    }
	};

	exports.shallow = function (source) {

	    var target = {};
	    var keys = Object.keys(source);
	    for (var i = 0; i < keys.length; ++i) {
	        var key = keys[i];
	        target[key] = source[key];
	    }

	    return target;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3).Buffer, __webpack_require__(4)))

/***/ },
/* 3 */
/***/ function(module, exports) {

	function Buffer() {
		throw new Error("Buffer is not included.");
	}
	Buffer.isBuffer = function() {
	  return false;
	};

	exports.INSPECT_MAX_BYTES = 50;
	exports.SlowBuffer = Buffer;
	exports.Buffer = Buffer;


/***/ },
/* 4 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 5 */
/***/ function(module, exports) {

	

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// resolves . and .. elements in a path array with directory names there
	// must be no slashes, empty elements, or device names (c:\) in the array
	// (so also no leading and trailing slashes - it does not distinguish
	// relative and absolute paths)
	function normalizeArray(parts, allowAboveRoot) {
	  // if the path tries to go above the root, `up` ends up > 0
	  var up = 0;
	  for (var i = parts.length - 1; i >= 0; i--) {
	    var last = parts[i];
	    if (last === '.') {
	      parts.splice(i, 1);
	    } else if (last === '..') {
	      parts.splice(i, 1);
	      up++;
	    } else if (up) {
	      parts.splice(i, 1);
	      up--;
	    }
	  }

	  // if the path is allowed to go above the root, restore leading ..s
	  if (allowAboveRoot) {
	    for (; up--; up) {
	      parts.unshift('..');
	    }
	  }

	  return parts;
	}

	// Split a filename into [root, dir, basename, ext], unix version
	// 'root' is just a slash, or nothing.
	var splitPathRe =
	    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
	var splitPath = function(filename) {
	  return splitPathRe.exec(filename).slice(1);
	};

	// path.resolve([from ...], to)
	// posix version
	exports.resolve = function() {
	  var resolvedPath = '',
	      resolvedAbsolute = false;

	  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
	    var path = (i >= 0) ? arguments[i] : process.cwd();

	    // Skip empty and invalid entries
	    if (typeof path !== 'string') {
	      throw new TypeError('Arguments to path.resolve must be strings');
	    } else if (!path) {
	      continue;
	    }

	    resolvedPath = path + '/' + resolvedPath;
	    resolvedAbsolute = path.charAt(0) === '/';
	  }

	  // At this point the path should be resolved to a full absolute path, but
	  // handle relative paths to be safe (might happen when process.cwd() fails)

	  // Normalize the path
	  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
	    return !!p;
	  }), !resolvedAbsolute).join('/');

	  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
	};

	// path.normalize(path)
	// posix version
	exports.normalize = function(path) {
	  var isAbsolute = exports.isAbsolute(path),
	      trailingSlash = substr(path, -1) === '/';

	  // Normalize the path
	  path = normalizeArray(filter(path.split('/'), function(p) {
	    return !!p;
	  }), !isAbsolute).join('/');

	  if (!path && !isAbsolute) {
	    path = '.';
	  }
	  if (path && trailingSlash) {
	    path += '/';
	  }

	  return (isAbsolute ? '/' : '') + path;
	};

	// posix version
	exports.isAbsolute = function(path) {
	  return path.charAt(0) === '/';
	};

	// posix version
	exports.join = function() {
	  var paths = Array.prototype.slice.call(arguments, 0);
	  return exports.normalize(filter(paths, function(p, index) {
	    if (typeof p !== 'string') {
	      throw new TypeError('Arguments to path.join must be strings');
	    }
	    return p;
	  }).join('/'));
	};


	// path.relative(from, to)
	// posix version
	exports.relative = function(from, to) {
	  from = exports.resolve(from).substr(1);
	  to = exports.resolve(to).substr(1);

	  function trim(arr) {
	    var start = 0;
	    for (; start < arr.length; start++) {
	      if (arr[start] !== '') break;
	    }

	    var end = arr.length - 1;
	    for (; end >= 0; end--) {
	      if (arr[end] !== '') break;
	    }

	    if (start > end) return [];
	    return arr.slice(start, end - start + 1);
	  }

	  var fromParts = trim(from.split('/'));
	  var toParts = trim(to.split('/'));

	  var length = Math.min(fromParts.length, toParts.length);
	  var samePartsLength = length;
	  for (var i = 0; i < length; i++) {
	    if (fromParts[i] !== toParts[i]) {
	      samePartsLength = i;
	      break;
	    }
	  }

	  var outputParts = [];
	  for (var i = samePartsLength; i < fromParts.length; i++) {
	    outputParts.push('..');
	  }

	  outputParts = outputParts.concat(toParts.slice(samePartsLength));

	  return outputParts.join('/');
	};

	exports.sep = '/';
	exports.delimiter = ':';

	exports.dirname = function(path) {
	  var result = splitPath(path),
	      root = result[0],
	      dir = result[1];

	  if (!root && !dir) {
	    // No dirname whatsoever
	    return '.';
	  }

	  if (dir) {
	    // It has a dirname, strip trailing slash
	    dir = dir.substr(0, dir.length - 1);
	  }

	  return root + dir;
	};


	exports.basename = function(path, ext) {
	  var f = splitPath(path)[2];
	  // TODO: make this comparison case-insensitive on windows?
	  if (ext && f.substr(-1 * ext.length) === ext) {
	    f = f.substr(0, f.length - ext.length);
	  }
	  return f;
	};


	exports.extname = function(path) {
	  return splitPath(path)[3];
	};

	function filter (xs, f) {
	    if (xs.filter) return xs.filter(f);
	    var res = [];
	    for (var i = 0; i < xs.length; i++) {
	        if (f(xs[i], i, xs)) res.push(xs[i]);
	    }
	    return res;
	}

	// String.prototype.substr - negative index don't work in IE8
	var substr = 'ab'.substr(-1) === 'b'
	    ? function (str, start, len) { return str.substr(start, len) }
	    : function (str, start, len) {
	        if (start < 0) start = str.length + start;
	        return str.substr(start, len);
	    }
	;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var formatRegExp = /%[sdj%]/g;
	exports.format = function(f) {
	  if (!isString(f)) {
	    var objects = [];
	    for (var i = 0; i < arguments.length; i++) {
	      objects.push(inspect(arguments[i]));
	    }
	    return objects.join(' ');
	  }

	  var i = 1;
	  var args = arguments;
	  var len = args.length;
	  var str = String(f).replace(formatRegExp, function(x) {
	    if (x === '%%') return '%';
	    if (i >= len) return x;
	    switch (x) {
	      case '%s': return String(args[i++]);
	      case '%d': return Number(args[i++]);
	      case '%j':
	        try {
	          return JSON.stringify(args[i++]);
	        } catch (_) {
	          return '[Circular]';
	        }
	      default:
	        return x;
	    }
	  });
	  for (var x = args[i]; i < len; x = args[++i]) {
	    if (isNull(x) || !isObject(x)) {
	      str += ' ' + x;
	    } else {
	      str += ' ' + inspect(x);
	    }
	  }
	  return str;
	};


	// Mark that a method should not be used.
	// Returns a modified function which warns once by default.
	// If --no-deprecation is set, then it is a no-op.
	exports.deprecate = function(fn, msg) {
	  // Allow for deprecating things in the process of starting up.
	  if (isUndefined(global.process)) {
	    return function() {
	      return exports.deprecate(fn, msg).apply(this, arguments);
	    };
	  }

	  if (process.noDeprecation === true) {
	    return fn;
	  }

	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (process.throwDeprecation) {
	        throw new Error(msg);
	      } else if (process.traceDeprecation) {
	        console.trace(msg);
	      } else {
	        console.error(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }

	  return deprecated;
	};


	var debugs = {};
	var debugEnviron;
	exports.debuglog = function(set) {
	  if (isUndefined(debugEnviron))
	    debugEnviron = process.env.NODE_DEBUG || '';
	  set = set.toUpperCase();
	  if (!debugs[set]) {
	    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
	      var pid = process.pid;
	      debugs[set] = function() {
	        var msg = exports.format.apply(exports, arguments);
	        console.error('%s %d: %s', set, pid, msg);
	      };
	    } else {
	      debugs[set] = function() {};
	    }
	  }
	  return debugs[set];
	};


	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Object} opts Optional options object that alters the output.
	 */
	/* legacy: obj, showHidden, depth, colors*/
	function inspect(obj, opts) {
	  // default options
	  var ctx = {
	    seen: [],
	    stylize: stylizeNoColor
	  };
	  // legacy...
	  if (arguments.length >= 3) ctx.depth = arguments[2];
	  if (arguments.length >= 4) ctx.colors = arguments[3];
	  if (isBoolean(opts)) {
	    // legacy...
	    ctx.showHidden = opts;
	  } else if (opts) {
	    // got an "options" object
	    exports._extend(ctx, opts);
	  }
	  // set default options
	  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
	  if (isUndefined(ctx.depth)) ctx.depth = 2;
	  if (isUndefined(ctx.colors)) ctx.colors = false;
	  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
	  if (ctx.colors) ctx.stylize = stylizeWithColor;
	  return formatValue(ctx, obj, ctx.depth);
	}
	exports.inspect = inspect;


	// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
	inspect.colors = {
	  'bold' : [1, 22],
	  'italic' : [3, 23],
	  'underline' : [4, 24],
	  'inverse' : [7, 27],
	  'white' : [37, 39],
	  'grey' : [90, 39],
	  'black' : [30, 39],
	  'blue' : [34, 39],
	  'cyan' : [36, 39],
	  'green' : [32, 39],
	  'magenta' : [35, 39],
	  'red' : [31, 39],
	  'yellow' : [33, 39]
	};

	// Don't use 'blue' not visible on cmd.exe
	inspect.styles = {
	  'special': 'cyan',
	  'number': 'yellow',
	  'boolean': 'yellow',
	  'undefined': 'grey',
	  'null': 'bold',
	  'string': 'green',
	  'date': 'magenta',
	  // "name": intentionally not styling
	  'regexp': 'red'
	};


	function stylizeWithColor(str, styleType) {
	  var style = inspect.styles[styleType];

	  if (style) {
	    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
	           '\u001b[' + inspect.colors[style][1] + 'm';
	  } else {
	    return str;
	  }
	}


	function stylizeNoColor(str, styleType) {
	  return str;
	}


	function arrayToHash(array) {
	  var hash = {};

	  array.forEach(function(val, idx) {
	    hash[val] = true;
	  });

	  return hash;
	}


	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (ctx.customInspect &&
	      value &&
	      isFunction(value.inspect) &&
	      // Filter out the util module, it's inspect function is special
	      value.inspect !== exports.inspect &&
	      // Also filter out any prototype objects using the circular check.
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes, ctx);
	    if (!isString(ret)) {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }

	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }

	  // Look up the keys of the object.
	  var keys = Object.keys(value);
	  var visibleKeys = arrayToHash(keys);

	  if (ctx.showHidden) {
	    keys = Object.getOwnPropertyNames(value);
	  }

	  // IE doesn't make error fields non-enumerable
	  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
	  if (isError(value)
	      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
	    return formatError(value);
	  }

	  // Some type of object without properties can be shortcutted.
	  if (keys.length === 0) {
	    if (isFunction(value)) {
	      var name = value.name ? ': ' + value.name : '';
	      return ctx.stylize('[Function' + name + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }

	  var base = '', array = false, braces = ['{', '}'];

	  // Make Array say that they are Array
	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }

	  // Make functions say that they are functions
	  if (isFunction(value)) {
	    var n = value.name ? ': ' + value.name : '';
	    base = ' [Function' + n + ']';
	  }

	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }

	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }

	  // Make error with message first say the error
	  if (isError(value)) {
	    base = ' ' + formatError(value);
	  }

	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }

	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }

	  ctx.seen.push(value);

	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }

	  ctx.seen.pop();

	  return reduceToSingleString(output, base, braces);
	}


	function formatPrimitive(ctx, value) {
	  if (isUndefined(value))
	    return ctx.stylize('undefined', 'undefined');
	  if (isString(value)) {
	    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                             .replace(/'/g, "\\'")
	                                             .replace(/\\"/g, '"') + '\'';
	    return ctx.stylize(simple, 'string');
	  }
	  if (isNumber(value))
	    return ctx.stylize('' + value, 'number');
	  if (isBoolean(value))
	    return ctx.stylize('' + value, 'boolean');
	  // For some reason typeof null is "object", so special case here.
	  if (isNull(value))
	    return ctx.stylize('null', 'null');
	}


	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}


	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (hasOwnProperty(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}


	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str, desc;
	  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
	  if (desc.get) {
	    if (desc.set) {
	      str = ctx.stylize('[Getter/Setter]', 'special');
	    } else {
	      str = ctx.stylize('[Getter]', 'special');
	    }
	  } else {
	    if (desc.set) {
	      str = ctx.stylize('[Setter]', 'special');
	    }
	  }
	  if (!hasOwnProperty(visibleKeys, key)) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(desc.value) < 0) {
	      if (isNull(recurseTimes)) {
	        str = formatValue(ctx, desc.value, null);
	      } else {
	        str = formatValue(ctx, desc.value, recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (isUndefined(name)) {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }

	  return name + ': ' + str;
	}


	function reduceToSingleString(output, base, braces) {
	  var numLinesEst = 0;
	  var length = output.reduce(function(prev, cur) {
	    numLinesEst++;
	    if (cur.indexOf('\n') >= 0) numLinesEst++;
	    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
	  }, 0);

	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }

	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}


	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	function isArray(ar) {
	  return Array.isArray(ar);
	}
	exports.isArray = isArray;

	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;

	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;

	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;

	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;

	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;

	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;

	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;

	function isRegExp(re) {
	  return isObject(re) && objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;

	function isDate(d) {
	  return isObject(d) && objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;

	function isError(e) {
	  return isObject(e) &&
	      (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;

	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;

	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;

	exports.isBuffer = __webpack_require__(8);

	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}


	function pad(n) {
	  return n < 10 ? '0' + n.toString(10) : n.toString(10);
	}


	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
	              'Oct', 'Nov', 'Dec'];

	// 26 Feb 16:19:34
	function timestamp() {
	  var d = new Date();
	  var time = [pad(d.getHours()),
	              pad(d.getMinutes()),
	              pad(d.getSeconds())].join(':');
	  return [d.getDate(), months[d.getMonth()], time].join(' ');
	}


	// log is just a thin wrapper to console.log that prepends a timestamp
	exports.log = function() {
	  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
	};


	/**
	 * Inherit the prototype methods from one constructor into another.
	 *
	 * The Function.prototype.inherits from lang.js rewritten as a standalone
	 * function (not on Function.prototype). NOTE: If this file is to be loaded
	 * during bootstrapping this function needs to be rewritten using some native
	 * functions as prototype setup using normal JavaScript does not work as
	 * expected during bootstrapping (see mirror.js in r114903).
	 *
	 * @param {function} ctor Constructor function which needs to inherit the
	 *     prototype.
	 * @param {function} superCtor Constructor function to inherit prototype from.
	 */
	exports.inherits = __webpack_require__(9);

	exports._extend = function(origin, add) {
	  // Don't do anything if add isn't an object
	  if (!add || !isObject(add)) return origin;

	  var keys = Object.keys(add);
	  var i = keys.length;
	  while (i--) {
	    origin[keys[i]] = add[keys[i]];
	  }
	  return origin;
	};

	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(4)))

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = function isBuffer(arg) {
	  return arg && typeof arg === 'object'
	    && typeof arg.copy === 'function'
	    && typeof arg.fill === 'function'
	    && typeof arg.readUInt8 === 'function';
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

	// Declare internals

	var internals = {};

	exports.escapeJavaScript = function (input) {

	    if (!input) {
	        return '';
	    }

	    var escaped = '';

	    for (var i = 0; i < input.length; ++i) {

	        var charCode = input.charCodeAt(i);

	        if (internals.isSafe(charCode)) {
	            escaped += input[i];
	        } else {
	            escaped += internals.escapeJavaScriptChar(charCode);
	        }
	    }

	    return escaped;
	};

	exports.escapeHtml = function (input) {

	    if (!input) {
	        return '';
	    }

	    var escaped = '';

	    for (var i = 0; i < input.length; ++i) {

	        var charCode = input.charCodeAt(i);

	        if (internals.isSafe(charCode)) {
	            escaped += input[i];
	        } else {
	            escaped += internals.escapeHtmlChar(charCode);
	        }
	    }

	    return escaped;
	};

	internals.escapeJavaScriptChar = function (charCode) {

	    if (charCode >= 256) {
	        return '\\u' + internals.padLeft('' + charCode, 4);
	    }

	    var hexValue = new Buffer(String.fromCharCode(charCode), 'ascii').toString('hex');
	    return '\\x' + internals.padLeft(hexValue, 2);
	};

	internals.escapeHtmlChar = function (charCode) {

	    var namedEscape = internals.namedHtml[charCode];
	    if (typeof namedEscape !== 'undefined') {
	        return namedEscape;
	    }

	    if (charCode >= 256) {
	        return '&#' + charCode + ';';
	    }

	    var hexValue = new Buffer(String.fromCharCode(charCode), 'ascii').toString('hex');
	    return '&#x' + internals.padLeft(hexValue, 2) + ';';
	};

	internals.padLeft = function (str, len) {

	    while (str.length < len) {
	        str = '0' + str;
	    }

	    return str;
	};

	internals.isSafe = function (charCode) {

	    return typeof internals.safeCharCodes[charCode] !== 'undefined';
	};

	internals.namedHtml = {
	    '38': '&amp;',
	    '60': '&lt;',
	    '62': '&gt;',
	    '34': '&quot;',
	    '160': '&nbsp;',
	    '162': '&cent;',
	    '163': '&pound;',
	    '164': '&curren;',
	    '169': '&copy;',
	    '174': '&reg;'
	};

	internals.safeCharCodes = function () {

	    var safe = {};

	    for (var i = 32; i < 123; ++i) {

	        if (i >= 97 || // a-z
	        i >= 65 && i <= 90 || // A-Z
	        i >= 48 && i <= 57 || // 0-9
	        i === 32 || // space
	        i === 46 || // .
	        i === 44 || // ,
	        i === 45 || // -
	        i === 58 || // :
	        i === 95) {
	            // _

	            safe[i] = null;
	        }
	    }

	    return safe;
	}();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3).Buffer))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Load modules

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Hoek = __webpack_require__(2);
	var Ref = __webpack_require__(12);
	var Errors = __webpack_require__(13);
	var Alternatives = null; // Delay-loaded to prevent circular dependencies
	var Cast = null;

	// Declare internals

	var internals = {
	    Set: __webpack_require__(15)
	};

	internals.defaults = {
	    abortEarly: true,
	    convert: true,
	    allowUnknown: false,
	    skipFunctions: false,
	    stripUnknown: false,
	    language: {},
	    presence: 'optional',
	    strip: false,
	    noDefaults: false

	    // context: null
	};

	module.exports = internals.Any = function () {
	    function _class() {
	        _classCallCheck(this, _class);

	        Cast = Cast || __webpack_require__(16);

	        this.isJoi = true;
	        this._type = 'any';
	        this._settings = null;
	        this._valids = new internals.Set();
	        this._invalids = new internals.Set();
	        this._tests = [];
	        this._refs = [];
	        this._flags = {
	            /*
	             presence: 'optional',                   // optional, required, forbidden, ignore
	             allowOnly: false,
	             allowUnknown: undefined,
	             default: undefined,
	             forbidden: false,
	             encoding: undefined,
	             insensitive: false,
	             trim: false,
	             case: undefined,                        // upper, lower
	             empty: undefined,
	             func: false,
	             raw: false
	             */
	        };

	        this._description = null;
	        this._unit = null;
	        this._notes = [];
	        this._tags = [];
	        this._examples = [];
	        this._meta = [];

	        this._inner = {}; // Hash of arrays of immutable objects
	    }

	    _class.prototype.createError = function createError(type, context, state, options) {

	        return Errors.create(type, context, state, options, this._flags);
	    };

	    _class.prototype.createOverrideError = function createOverrideError(type, context, state, options, message, template) {

	        return Errors.create(type, context, state, options, this._flags, message, template);
	    };

	    _class.prototype.checkOptions = function checkOptions(options) {

	        var Schemas = __webpack_require__(28);
	        var result = Schemas.options.validate(options);
	        if (result.error) {
	            throw new Error(result.error.details[0].message);
	        }
	    };

	    _class.prototype.clone = function clone() {

	        var obj = Object.create(Object.getPrototypeOf(this));

	        obj.isJoi = true;
	        obj._type = this._type;
	        obj._settings = internals.concatSettings(this._settings);
	        obj._baseType = this._baseType;
	        obj._valids = Hoek.clone(this._valids);
	        obj._invalids = Hoek.clone(this._invalids);
	        obj._tests = this._tests.slice();
	        obj._refs = this._refs.slice();
	        obj._flags = Hoek.clone(this._flags);

	        obj._description = this._description;
	        obj._unit = this._unit;
	        obj._notes = this._notes.slice();
	        obj._tags = this._tags.slice();
	        obj._examples = this._examples.slice();
	        obj._meta = this._meta.slice();

	        obj._inner = {};
	        var inners = Object.keys(this._inner);
	        for (var i = 0; i < inners.length; ++i) {
	            var key = inners[i];
	            obj._inner[key] = this._inner[key] ? this._inner[key].slice() : null;
	        }

	        return obj;
	    };

	    _class.prototype.concat = function concat(schema) {

	        Hoek.assert(schema instanceof internals.Any, 'Invalid schema object');
	        Hoek.assert(this._type === 'any' || schema._type === 'any' || schema._type === this._type, 'Cannot merge type', this._type, 'with another type:', schema._type);

	        var obj = this.clone();

	        if (this._type === 'any' && schema._type !== 'any') {

	            // Reset values as if we were "this"
	            var tmpObj = schema.clone();
	            var keysToRestore = ['_settings', '_valids', '_invalids', '_tests', '_refs', '_flags', '_description', '_unit', '_notes', '_tags', '_examples', '_meta', '_inner'];

	            for (var i = 0; i < keysToRestore.length; ++i) {
	                tmpObj[keysToRestore[i]] = obj[keysToRestore[i]];
	            }

	            obj = tmpObj;
	        }

	        obj._settings = obj._settings ? internals.concatSettings(obj._settings, schema._settings) : schema._settings;
	        obj._valids.merge(schema._valids, schema._invalids);
	        obj._invalids.merge(schema._invalids, schema._valids);
	        obj._tests = obj._tests.concat(schema._tests);
	        obj._refs = obj._refs.concat(schema._refs);
	        Hoek.merge(obj._flags, schema._flags);

	        obj._description = schema._description || obj._description;
	        obj._unit = schema._unit || obj._unit;
	        obj._notes = obj._notes.concat(schema._notes);
	        obj._tags = obj._tags.concat(schema._tags);
	        obj._examples = obj._examples.concat(schema._examples);
	        obj._meta = obj._meta.concat(schema._meta);

	        var inners = Object.keys(schema._inner);
	        var isObject = obj._type === 'object';
	        for (var _i = 0; _i < inners.length; ++_i) {
	            var key = inners[_i];
	            var source = schema._inner[key];
	            if (source) {
	                var target = obj._inner[key];
	                if (target) {
	                    if (isObject && key === 'children') {
	                        var keys = {};

	                        for (var j = 0; j < target.length; ++j) {
	                            keys[target[j].key] = j;
	                        }

	                        for (var _j = 0; _j < source.length; ++_j) {
	                            var sourceKey = source[_j].key;
	                            if (keys[sourceKey] >= 0) {
	                                target[keys[sourceKey]] = {
	                                    key: sourceKey,
	                                    schema: target[keys[sourceKey]].schema.concat(source[_j].schema)
	                                };
	                            } else {
	                                target.push(source[_j]);
	                            }
	                        }
	                    } else {
	                        obj._inner[key] = obj._inner[key].concat(source);
	                    }
	                } else {
	                    obj._inner[key] = source.slice();
	                }
	            }
	        }

	        return obj;
	    };

	    _class.prototype._test = function _test(name, arg, func, options) {

	        var obj = this.clone();
	        obj._tests.push({ func: func, name: name, arg: arg, options: options });
	        return obj;
	    };

	    _class.prototype.options = function options(_options) {

	        Hoek.assert(!_options.context, 'Cannot override context');
	        this.checkOptions(_options);

	        var obj = this.clone();
	        obj._settings = internals.concatSettings(obj._settings, _options);
	        return obj;
	    };

	    _class.prototype.strict = function strict(isStrict) {

	        var obj = this.clone();
	        obj._settings = obj._settings || {};
	        obj._settings.convert = isStrict === undefined ? false : !isStrict;
	        return obj;
	    };

	    _class.prototype.raw = function raw(isRaw) {

	        var value = isRaw === undefined ? true : isRaw;

	        if (this._flags.raw === value) {
	            return this;
	        }

	        var obj = this.clone();
	        obj._flags.raw = value;
	        return obj;
	    };

	    _class.prototype.error = function error(err) {

	        Hoek.assert(err && (err instanceof Error || typeof err === 'function'), 'Must provide a valid Error object or a function');

	        var obj = this.clone();
	        obj._flags.error = err;
	        return obj;
	    };

	    _class.prototype.allow = function allow() {

	        var obj = this.clone();
	        var values = Hoek.flatten(Array.prototype.slice.call(arguments));
	        for (var i = 0; i < values.length; ++i) {
	            var value = values[i];

	            Hoek.assert(value !== undefined, 'Cannot call allow/valid/invalid with undefined');
	            obj._invalids.remove(value);
	            obj._valids.add(value, obj._refs);
	        }
	        return obj;
	    };

	    _class.prototype.valid = function valid() {

	        var obj = this.allow.apply(this, arguments);
	        obj._flags.allowOnly = true;
	        return obj;
	    };

	    _class.prototype.invalid = function invalid(value) {

	        var obj = this.clone();
	        var values = Hoek.flatten(Array.prototype.slice.call(arguments));
	        for (var i = 0; i < values.length; ++i) {
	            value = values[i];

	            Hoek.assert(value !== undefined, 'Cannot call allow/valid/invalid with undefined');
	            obj._valids.remove(value);
	            obj._invalids.add(value, this._refs);
	        }

	        return obj;
	    };

	    _class.prototype.required = function required() {

	        if (this._flags.presence === 'required') {
	            return this;
	        }

	        var obj = this.clone();
	        obj._flags.presence = 'required';
	        return obj;
	    };

	    _class.prototype.optional = function optional() {

	        if (this._flags.presence === 'optional') {
	            return this;
	        }

	        var obj = this.clone();
	        obj._flags.presence = 'optional';
	        return obj;
	    };

	    _class.prototype.forbidden = function forbidden() {

	        if (this._flags.presence === 'forbidden') {
	            return this;
	        }

	        var obj = this.clone();
	        obj._flags.presence = 'forbidden';
	        return obj;
	    };

	    _class.prototype.strip = function strip() {

	        if (this._flags.strip) {
	            return this;
	        }

	        var obj = this.clone();
	        obj._flags.strip = true;
	        return obj;
	    };

	    _class.prototype.applyFunctionToChildren = function applyFunctionToChildren(children, fn, args, root) {

	        children = [].concat(children);

	        if (children.length !== 1 || children[0] !== '') {
	            root = root ? root + '.' : '';

	            var extraChildren = (children[0] === '' ? children.slice(1) : children).map(function (child) {

	                return root + child;
	            });

	            throw new Error('unknown key(s) ' + extraChildren.join(', '));
	        }

	        return this[fn].apply(this, args);
	    };

	    _class.prototype.default = function _default(value, description) {

	        if (typeof value === 'function' && !Ref.isRef(value)) {

	            if (!value.description && description) {

	                value.description = description;
	            }

	            if (!this._flags.func) {
	                Hoek.assert(typeof value.description === 'string' && value.description.length > 0, 'description must be provided when default value is a function');
	            }
	        }

	        var obj = this.clone();
	        obj._flags.default = value;
	        Ref.push(obj._refs, value);
	        return obj;
	    };

	    _class.prototype.empty = function empty(schema) {

	        var obj = this.clone();
	        obj._flags.empty = schema === undefined ? undefined : Cast.schema(schema);
	        return obj;
	    };

	    _class.prototype.when = function when(ref, options) {

	        Hoek.assert(options && (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object', 'Invalid options');
	        Hoek.assert(options.then !== undefined || options.otherwise !== undefined, 'options must have at least one of "then" or "otherwise"');

	        var then = options.hasOwnProperty('then') ? this.concat(Cast.schema(options.then)) : undefined;
	        var otherwise = options.hasOwnProperty('otherwise') ? this.concat(Cast.schema(options.otherwise)) : undefined;

	        Alternatives = Alternatives || __webpack_require__(25);
	        var obj = Alternatives.when(ref, { is: options.is, then: then, otherwise: otherwise });
	        obj._flags.presence = 'ignore';
	        obj._baseType = this;

	        return obj;
	    };

	    _class.prototype.description = function description(desc) {

	        Hoek.assert(desc && typeof desc === 'string', 'Description must be a non-empty string');

	        var obj = this.clone();
	        obj._description = desc;
	        return obj;
	    };

	    _class.prototype.notes = function notes(_notes) {

	        Hoek.assert(_notes && (typeof _notes === 'string' || Array.isArray(_notes)), 'Notes must be a non-empty string or array');

	        var obj = this.clone();
	        obj._notes = obj._notes.concat(_notes);
	        return obj;
	    };

	    _class.prototype.tags = function tags(_tags) {

	        Hoek.assert(_tags && (typeof _tags === 'string' || Array.isArray(_tags)), 'Tags must be a non-empty string or array');

	        var obj = this.clone();
	        obj._tags = obj._tags.concat(_tags);
	        return obj;
	    };

	    _class.prototype.meta = function meta(_meta) {

	        Hoek.assert(_meta !== undefined, 'Meta cannot be undefined');

	        var obj = this.clone();
	        obj._meta = obj._meta.concat(_meta);
	        return obj;
	    };

	    _class.prototype.example = function example(value) {

	        Hoek.assert(arguments.length, 'Missing example');
	        var result = this._validate(value, null, internals.defaults);
	        Hoek.assert(!result.errors, 'Bad example:', result.errors && Errors.process(result.errors, value));

	        var obj = this.clone();
	        obj._examples.push(value);
	        return obj;
	    };

	    _class.prototype.unit = function unit(name) {

	        Hoek.assert(name && typeof name === 'string', 'Unit name must be a non-empty string');

	        var obj = this.clone();
	        obj._unit = name;
	        return obj;
	    };

	    _class.prototype._prepareEmptyValue = function _prepareEmptyValue(value) {

	        if (typeof value === 'string' && this._flags.trim) {
	            return value.trim();
	        }

	        return value;
	    };

	    _class.prototype._validate = function _validate(value, state, options, reference) {
	        var _this = this;

	        var originalValue = value;

	        // Setup state and settings

	        state = state || { key: '', path: '', parent: null, reference: reference };

	        if (this._settings) {
	            options = internals.concatSettings(options, this._settings);
	        }

	        var errors = [];
	        var finish = function finish() {

	            var finalValue = void 0;

	            if (value !== undefined) {
	                finalValue = _this._flags.raw ? originalValue : value;
	            } else if (options.noDefaults) {
	                finalValue = value;
	            } else if (Ref.isRef(_this._flags.default)) {
	                finalValue = _this._flags.default(state.parent, options);
	            } else if (typeof _this._flags.default === 'function' && !(_this._flags.func && !_this._flags.default.description)) {

	                var args = void 0;

	                if (state.parent !== null && _this._flags.default.length > 0) {

	                    args = [Hoek.clone(state.parent), options];
	                }

	                var defaultValue = internals._try(_this._flags.default, args);
	                finalValue = defaultValue.value;
	                if (defaultValue.error) {
	                    errors.push(_this.createError('any.default', defaultValue.error, state, options));
	                }
	            } else {
	                finalValue = Hoek.clone(_this._flags.default);
	            }

	            if (errors.length && typeof _this._flags.error === 'function') {
	                var change = _this._flags.error.call(_this, errors);

	                if (typeof change === 'string') {
	                    errors = [_this.createOverrideError('override', { reason: errors }, state, options, change)];
	                } else {
	                    errors = [].concat(change).map(function (err) {

	                        return err instanceof Error ? err : _this.createOverrideError(err.type || 'override', err.context, state, options, err.message, err.template);
	                    });
	                }
	            }

	            return {
	                value: _this._flags.strip ? undefined : finalValue,
	                finalValue: finalValue,
	                errors: errors.length ? errors : null
	            };
	        };

	        if (this._coerce) {
	            var coerced = this._coerce.call(this, value, state, options);
	            if (coerced.errors) {
	                value = coerced.value;
	                errors = errors.concat(coerced.errors);
	                return finish(); // Coerced error always aborts early
	            }

	            value = coerced.value;
	        }

	        if (this._flags.empty && !this._flags.empty._validate(this._prepareEmptyValue(value), null, internals.defaults).errors) {
	            value = undefined;
	        }

	        // Check presence requirements

	        var presence = this._flags.presence || options.presence;
	        if (presence === 'optional') {
	            if (value === undefined) {
	                var isDeepDefault = this._flags.hasOwnProperty('default') && this._flags.default === undefined;
	                if (isDeepDefault && this._type === 'object') {
	                    value = {};
	                } else {
	                    return finish();
	                }
	            }
	        } else if (presence === 'required' && value === undefined) {

	            errors.push(this.createError('any.required', null, state, options));
	            return finish();
	        } else if (presence === 'forbidden') {
	            if (value === undefined) {
	                return finish();
	            }

	            errors.push(this.createError('any.unknown', null, state, options));
	            return finish();
	        }

	        // Check allowed and denied values using the original value

	        if (this._valids.has(value, state, options, this._flags.insensitive)) {
	            return finish();
	        }

	        if (this._invalids.has(value, state, options, this._flags.insensitive)) {
	            errors.push(this.createError(value === '' ? 'any.empty' : 'any.invalid', null, state, options));
	            if (options.abortEarly || value === undefined) {
	                // No reason to keep validating missing value

	                return finish();
	            }
	        }

	        // Convert value and validate type

	        if (this._base) {
	            var base = this._base.call(this, value, state, options);
	            if (base.errors) {
	                value = base.value;
	                errors = errors.concat(base.errors);
	                return finish(); // Base error always aborts early
	            }

	            if (base.value !== value) {
	                value = base.value;

	                // Check allowed and denied values using the converted value

	                if (this._valids.has(value, state, options, this._flags.insensitive)) {
	                    return finish();
	                }

	                if (this._invalids.has(value, state, options, this._flags.insensitive)) {
	                    errors.push(this.createError(value === '' ? 'any.empty' : 'any.invalid', null, state, options));
	                    if (options.abortEarly) {
	                        return finish();
	                    }
	                }
	            }
	        }

	        // Required values did not match

	        if (this._flags.allowOnly) {
	            errors.push(this.createError('any.allowOnly', { valids: this._valids.values({ stripUndefined: true }) }, state, options));
	            if (options.abortEarly) {
	                return finish();
	            }
	        }

	        // Helper.validate tests

	        for (var i = 0; i < this._tests.length; ++i) {
	            var test = this._tests[i];
	            var ret = test.func.call(this, value, state, options);
	            if (ret instanceof Errors.Err) {
	                errors.push(ret);
	                if (options.abortEarly) {
	                    return finish();
	                }
	            } else {
	                value = ret;
	            }
	        }

	        return finish();
	    };

	    _class.prototype._validateWithOptions = function _validateWithOptions(value, options, callback) {

	        if (options) {
	            this.checkOptions(options);
	        }

	        var settings = internals.concatSettings(internals.defaults, options);
	        var result = this._validate(value, null, settings);
	        var errors = Errors.process(result.errors, value);

	        if (callback) {
	            return callback(errors, result.value);
	        }

	        return { error: errors, value: result.value };
	    };

	    _class.prototype.validate = function validate(value, options, callback) {

	        if (typeof options === 'function') {
	            return this._validateWithOptions(value, null, options);
	        }

	        return this._validateWithOptions(value, options, callback);
	    };

	    _class.prototype.describe = function describe() {
	        var _this2 = this;

	        var description = {
	            type: this._type
	        };

	        var flags = Object.keys(this._flags);
	        if (flags.length) {
	            if (['empty', 'default', 'lazy', 'label'].some(function (flag) {
	                return _this2._flags.hasOwnProperty(flag);
	            })) {
	                description.flags = {};
	                for (var i = 0; i < flags.length; ++i) {
	                    var flag = flags[i];
	                    if (flag === 'empty') {
	                        description.flags[flag] = this._flags[flag].describe();
	                    } else if (flag === 'default') {
	                        if (Ref.isRef(this._flags[flag])) {
	                            description.flags[flag] = this._flags[flag].toString();
	                        } else if (typeof this._flags[flag] === 'function') {
	                            description.flags[flag] = this._flags[flag].description;
	                        } else {
	                            description.flags[flag] = this._flags[flag];
	                        }
	                    } else if (flag === 'lazy' || flag === 'label') {
	                        // We don't want it in the description
	                    } else {
	                        description.flags[flag] = this._flags[flag];
	                    }
	                }
	            } else {
	                description.flags = this._flags;
	            }
	        }

	        if (this._settings) {
	            description.options = Hoek.clone(this._settings);
	        }

	        if (this._baseType) {
	            description.base = this._baseType.describe();
	        }

	        if (this._description) {
	            description.description = this._description;
	        }

	        if (this._notes.length) {
	            description.notes = this._notes;
	        }

	        if (this._tags.length) {
	            description.tags = this._tags;
	        }

	        if (this._meta.length) {
	            description.meta = this._meta;
	        }

	        if (this._examples.length) {
	            description.examples = this._examples;
	        }

	        if (this._unit) {
	            description.unit = this._unit;
	        }

	        var valids = this._valids.values();
	        if (valids.length) {
	            description.valids = valids.map(function (v) {

	                return Ref.isRef(v) ? v.toString() : v;
	            });
	        }

	        var invalids = this._invalids.values();
	        if (invalids.length) {
	            description.invalids = invalids.map(function (v) {

	                return Ref.isRef(v) ? v.toString() : v;
	            });
	        }

	        description.rules = [];

	        for (var _i2 = 0; _i2 < this._tests.length; ++_i2) {
	            var validator = this._tests[_i2];
	            var item = { name: validator.name };

	            if (validator.arg !== void 0) {
	                item.arg = Ref.isRef(validator.arg) ? validator.arg.toString() : validator.arg;
	            }

	            var options = validator.options;
	            if (options) {
	                if (options.hasRef) {
	                    item.arg = {};
	                    var keys = Object.keys(validator.arg);
	                    for (var j = 0; j < keys.length; ++j) {
	                        var key = keys[j];
	                        var value = validator.arg[key];
	                        item.arg[key] = Ref.isRef(value) ? value.toString() : value;
	                    }
	                }

	                if (typeof options.description === 'string') {
	                    item.description = options.description;
	                } else if (typeof options.description === 'function') {
	                    item.description = options.description(item.arg);
	                }
	            }

	            description.rules.push(item);
	        }

	        if (!description.rules.length) {
	            delete description.rules;
	        }

	        var label = this._getLabel();
	        if (label) {
	            description.label = label;
	        }

	        return description;
	    };

	    _class.prototype.label = function label(name) {

	        Hoek.assert(name && typeof name === 'string', 'Label name must be a non-empty string');

	        var obj = this.clone();
	        obj._flags.label = name;
	        return obj;
	    };

	    _class.prototype._getLabel = function _getLabel(def) {

	        return this._flags.label || def;
	    };

	    return _class;
	}();

	internals.Any.prototype.isImmutable = true; // Prevents Hoek from deep cloning schema objects

	// Aliases

	internals.Any.prototype.only = internals.Any.prototype.equal = internals.Any.prototype.valid;
	internals.Any.prototype.disallow = internals.Any.prototype.not = internals.Any.prototype.invalid;
	internals.Any.prototype.exist = internals.Any.prototype.required;

	internals._try = function (fn, args) {

	    var err = void 0;
	    var result = void 0;

	    try {
	        result = fn.apply(null, args);
	    } catch (e) {
	        err = e;
	    }

	    return {
	        value: result,
	        error: err
	    };
	};

	internals.concatSettings = function (target, source) {

	    // Used to avoid cloning context

	    if (!target && !source) {

	        return null;
	    }

	    var obj = {};

	    if (target) {
	        _extends(obj, target);
	    }

	    if (source) {
	        var sKeys = Object.keys(source);
	        for (var i = 0; i < sKeys.length; ++i) {
	            var key = sKeys[i];
	            if (key !== 'language' || !obj.hasOwnProperty(key)) {

	                obj[key] = source[key];
	            } else {
	                obj[key] = Hoek.applyToDefaults(obj[key], source[key]);
	            }
	        }
	    }

	    return obj;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Load modules

	var Hoek = __webpack_require__(2);

	// Declare internals

	var internals = {};

	exports.create = function (key, options) {

	    Hoek.assert(typeof key === 'string', 'Invalid reference key:', key);

	    var settings = Hoek.clone(options); // options can be reused and modified

	    var ref = function ref(value, validationOptions) {

	        return Hoek.reach(ref.isContext ? validationOptions.context : value, ref.key, settings);
	    };

	    ref.isContext = key[0] === (settings && settings.contextPrefix || '$');
	    ref.key = ref.isContext ? key.slice(1) : key;
	    ref.path = ref.key.split(settings && settings.separator || '.');
	    ref.depth = ref.path.length;
	    ref.root = ref.path[0];
	    ref.isJoi = true;

	    ref.toString = function () {

	        return (ref.isContext ? 'context:' : 'ref:') + ref.key;
	    };

	    return ref;
	};

	exports.isRef = function (ref) {

	    return typeof ref === 'function' && ref.isJoi;
	};

	exports.push = function (array, ref) {

	    if (exports.isRef(ref) && !ref.isContext) {

	        array.push(ref.root);
	    }
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Load modules

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Hoek = __webpack_require__(2);
	var Language = __webpack_require__(14);

	// Declare internals

	var internals = {
	    annotations: Symbol('joi-annotations')
	};

	internals.stringify = function (value, wrapArrays) {

	    var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);

	    if (value === null) {
	        return 'null';
	    }

	    if (type === 'string') {
	        return value;
	    }

	    if (value instanceof exports.Err || type === 'function') {
	        return value.toString();
	    }

	    if (type === 'object') {
	        if (Array.isArray(value)) {
	            var partial = '';

	            for (var i = 0; i < value.length; ++i) {
	                partial = partial + (partial.length ? ', ' : '') + internals.stringify(value[i], wrapArrays);
	            }

	            return wrapArrays ? '[' + partial + ']' : partial;
	        }

	        return value.toString();
	    }

	    return JSON.stringify(value);
	};

	exports.Err = function () {
	    function _class(type, context, state, options, flags, message, template) {
	        _classCallCheck(this, _class);

	        this.isJoi = true;
	        this.type = type;
	        this.context = context || {};
	        this.context.key = state.key;
	        this.path = state.path;
	        this.options = options;
	        this.flags = flags;
	        this.message = message;
	        this.template = template;
	    }

	    _class.prototype.toString = function toString() {
	        var _this = this;

	        if (this.message) {
	            return this.message;
	        }

	        var format = void 0;

	        if (this.template) {
	            format = this.template;
	        }

	        var localized = this.options.language;

	        if (this.flags.label) {
	            this.context.key = this.flags.label;
	        } else if (this.context.key === '' || this.context.key === null) {
	            this.context.key = localized.root || Language.errors.root;
	        }

	        format = format || Hoek.reach(localized, this.type) || Hoek.reach(Language.errors, this.type);

	        var wrapArrays = Hoek.reach(localized, 'messages.wrapArrays');
	        if (typeof wrapArrays !== 'boolean') {
	            wrapArrays = Language.errors.messages.wrapArrays;
	        }

	        if (format === null) {
	            var childrenString = internals.stringify(this.context.reason, wrapArrays);
	            if (wrapArrays) {
	                return childrenString.slice(1, -1);
	            }
	            return childrenString;
	        }

	        var hasKey = /\{\{\!?key\}\}/.test(format);
	        var skipKey = format.length > 2 && format[0] === '!' && format[1] === '!';

	        if (skipKey) {
	            format = format.slice(2);
	        }

	        if (!hasKey && !skipKey) {
	            format = (Hoek.reach(localized, 'key') || Hoek.reach(Language.errors, 'key')) + format;
	        }

	        return format.replace(/\{\{(\!?)([^}]+)\}\}/g, function ($0, isSecure, name) {

	            var value = Hoek.reach(_this.context, name);
	            var normalized = internals.stringify(value, wrapArrays);
	            return isSecure ? Hoek.escapeHtml(normalized) : normalized;
	        });
	    };

	    return _class;
	}();

	exports.create = function (type, context, state, options, flags, message, template) {

	    return new exports.Err(type, context, state, options, flags, message, template);
	};

	exports.process = function (errors, object) {

	    if (!errors || !errors.length) {
	        return null;
	    }

	    // Construct error

	    var message = '';
	    var details = [];

	    var processErrors = function processErrors(localErrors, parent) {

	        for (var i = 0; i < localErrors.length; ++i) {
	            var item = localErrors[i];

	            if (item instanceof Error) {
	                return item;
	            }

	            if (item.flags.error && typeof item.flags.error !== 'function') {
	                return item.flags.error;
	            }

	            var itemMessage = void 0;
	            if (parent === undefined) {
	                itemMessage = item.toString();
	                message = message + (message ? '. ' : '') + itemMessage;
	            }

	            // Do not push intermediate errors, we're only interested in leafs

	            if (item.context.reason && item.context.reason.length) {
	                var _override = processErrors(item.context.reason, item.path);
	                if (_override) {
	                    return _override;
	                }
	            } else {
	                details.push({
	                    message: itemMessage || item.toString(),
	                    path: internals.getPath(item),
	                    type: item.type,
	                    context: item.context
	                });
	            }
	        }
	    };

	    var override = processErrors(errors);
	    if (override) {
	        return override;
	    }

	    var error = new Error(message);
	    error.isJoi = true;
	    error.name = 'ValidationError';
	    error.details = details;
	    error._object = object;
	    error.annotate = internals.annotate;
	    return error;
	};

	internals.getPath = function (item) {

	    return item.path || item.context.key;
	};

	// Inspired by json-stringify-safe
	internals.safeStringify = function (obj, spaces) {

	    return JSON.stringify(obj, internals.serializer(), spaces);
	};

	internals.serializer = function () {

	    var keys = [];
	    var stack = [];

	    var cycleReplacer = function cycleReplacer(key, value) {

	        if (stack[0] === value) {
	            return '[Circular ~]';
	        }

	        return '[Circular ~.' + keys.slice(0, stack.indexOf(value)).join('.') + ']';
	    };

	    return function (key, value) {

	        if (stack.length > 0) {
	            var thisPos = stack.indexOf(this);
	            if (~thisPos) {
	                stack.length = thisPos + 1;
	                keys.length = thisPos + 1;
	                keys[thisPos] = key;
	            } else {
	                stack.push(this);
	                keys.push(key);
	            }

	            if (~stack.indexOf(value)) {
	                value = cycleReplacer.call(this, key, value);
	            }
	        } else {
	            stack.push(value);
	        }

	        if (value) {
	            var annotations = value[internals.annotations];
	            if (annotations) {
	                if (Array.isArray(value)) {
	                    var annotated = [];

	                    for (var i = 0; i < value.length; ++i) {
	                        if (annotations.errors[i]) {
	                            annotated.push('_$idx$_' + annotations.errors[i].sort().join(', ') + '_$end$_');
	                        }
	                        annotated.push(value[i]);
	                    }

	                    value = annotated;
	                } else {
	                    var errorKeys = Object.keys(annotations.errors);
	                    for (var _i = 0; _i < errorKeys.length; ++_i) {
	                        var errorKey = errorKeys[_i];
	                        value[errorKey + '_$key$_' + annotations.errors[errorKey].sort().join(', ') + '_$end$_'] = value[errorKey];
	                        value[errorKey] = undefined;
	                    }

	                    var missingKeys = Object.keys(annotations.missing);
	                    for (var _i2 = 0; _i2 < missingKeys.length; ++_i2) {
	                        var missingKey = missingKeys[_i2];
	                        value['_$miss$_' + missingKey + '|' + annotations.missing[missingKey] + '_$end$_'] = '__missing__';
	                    }
	                }

	                return value;
	            }
	        }

	        if (value === Infinity || value === -Infinity || Number.isNaN(value) || typeof value === 'function' || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'symbol') {
	            return '[' + value.toString() + ']';
	        }

	        return value;
	    };
	};

	internals.annotate = function (stripColorCodes) {

	    var redFgEscape = stripColorCodes ? '' : '\x1B[31m';
	    var redBgEscape = stripColorCodes ? '' : '\x1B[41m';
	    var endColor = stripColorCodes ? '' : '\x1B[0m';

	    if (_typeof(this._object) !== 'object') {
	        return this.details[0].message;
	    }

	    var obj = Hoek.clone(this._object || {});

	    for (var i = this.details.length - 1; i >= 0; --i) {
	        // Reverse order to process deepest child first
	        var pos = i + 1;
	        var error = this.details[i];
	        var path = error.path.split('.');
	        var ref = obj;
	        for (var j = 0;; ++j) {
	            var seg = path[j];

	            if (ref.isImmutable) {
	                ref = ref.clone(); // joi schemas are not cloned by hoek, we have to take this extra step
	            }

	            if (j + 1 < path.length && ref[seg] && typeof ref[seg] !== 'string') {

	                ref = ref[seg];
	            } else {
	                var refAnnotations = ref[internals.annotations] = ref[internals.annotations] || { errors: {}, missing: {} };
	                var value = ref[seg];

	                if (value !== undefined) {
	                    refAnnotations.errors[seg] = refAnnotations.errors[seg] || [];
	                    refAnnotations.errors[seg].push(pos);
	                } else {
	                    refAnnotations.missing[seg] = pos;
	                }

	                break;
	            }
	        }
	    }

	    var replacers = {
	        key: /_\$key\$_([, \d]+)_\$end\$_\"/g,
	        missing: /\"_\$miss\$_([^\|]+)\|(\d+)_\$end\$_\"\: \"__missing__\"/g,
	        arrayIndex: /\s*\"_\$idx\$_([, \d]+)_\$end\$_\",?\n(.*)/g,
	        specials: /"\[(NaN|Symbol.*|-?Infinity|function.*|\(.*)\]"/g
	    };

	    var message = internals.safeStringify(obj, 2).replace(replacers.key, function ($0, $1) {
	        return '" ' + redFgEscape + '[' + $1 + ']' + endColor;
	    }).replace(replacers.missing, function ($0, $1, $2) {
	        return redBgEscape + '"' + $1 + '"' + endColor + redFgEscape + ' [' + $2 + ']: -- missing --' + endColor;
	    }).replace(replacers.arrayIndex, function ($0, $1, $2) {
	        return '\n' + $2 + ' ' + redFgEscape + '[' + $1 + ']' + endColor;
	    }).replace(replacers.specials, function ($0, $1) {
	        return $1;
	    });

	    message = message + '\n' + redFgEscape;

	    for (var _i3 = 0; _i3 < this.details.length; ++_i3) {
	        var _pos = _i3 + 1;
	        message = message + '\n[' + _pos + '] ' + this.details[_i3].message;
	    }

	    message = message + endColor;

	    return message;
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	// Load modules


	// Declare internals

	var internals = {};

	exports.errors = {
	    root: 'value',
	    key: '"{{!key}}" ',
	    messages: {
	        wrapArrays: true
	    },
	    any: {
	        unknown: 'is not allowed',
	        invalid: 'contains an invalid value',
	        empty: 'is not allowed to be empty',
	        required: 'is required',
	        allowOnly: 'must be one of {{valids}}',
	        default: 'threw an error when running default method'
	    },
	    alternatives: {
	        base: 'not matching any of the allowed alternatives',
	        child: null
	    },
	    array: {
	        base: 'must be an array',
	        includes: 'at position {{pos}} does not match any of the allowed types',
	        includesSingle: 'single value of "{{!key}}" does not match any of the allowed types',
	        includesOne: 'at position {{pos}} fails because {{reason}}',
	        includesOneSingle: 'single value of "{{!key}}" fails because {{reason}}',
	        includesRequiredUnknowns: 'does not contain {{unknownMisses}} required value(s)',
	        includesRequiredKnowns: 'does not contain {{knownMisses}}',
	        includesRequiredBoth: 'does not contain {{knownMisses}} and {{unknownMisses}} other required value(s)',
	        excludes: 'at position {{pos}} contains an excluded value',
	        excludesSingle: 'single value of "{{!key}}" contains an excluded value',
	        min: 'must contain at least {{limit}} items',
	        max: 'must contain less than or equal to {{limit}} items',
	        length: 'must contain {{limit}} items',
	        ordered: 'at position {{pos}} fails because {{reason}}',
	        orderedLength: 'at position {{pos}} fails because array must contain at most {{limit}} items',
	        ref: 'references "{{ref}}" which is not a positive integer',
	        sparse: 'must not be a sparse array',
	        unique: 'position {{pos}} contains a duplicate value'
	    },
	    boolean: {
	        base: 'must be a boolean'
	    },
	    binary: {
	        base: 'must be a buffer or a string',
	        min: 'must be at least {{limit}} bytes',
	        max: 'must be less than or equal to {{limit}} bytes',
	        length: 'must be {{limit}} bytes'
	    },
	    date: {
	        base: 'must be a number of milliseconds or valid date string',
	        format: 'must be a string with one of the following formats {{format}}',
	        strict: 'must be a valid date',
	        min: 'must be larger than or equal to "{{limit}}"',
	        max: 'must be less than or equal to "{{limit}}"',
	        isoDate: 'must be a valid ISO 8601 date',
	        timestamp: {
	            javascript: 'must be a valid timestamp or number of milliseconds',
	            unix: 'must be a valid timestamp or number of seconds'
	        },
	        ref: 'references "{{ref}}" which is not a date'
	    },
	    function: {
	        base: 'must be a Function',
	        arity: 'must have an arity of {{n}}',
	        minArity: 'must have an arity greater or equal to {{n}}',
	        maxArity: 'must have an arity lesser or equal to {{n}}',
	        ref: 'must be a Joi reference'
	    },
	    lazy: {
	        base: '!!schema error: lazy schema must be set',
	        schema: '!!schema error: lazy schema function must return a schema'
	    },
	    object: {
	        base: 'must be an object',
	        child: '!!child "{{!child}}" fails because {{reason}}',
	        min: 'must have at least {{limit}} children',
	        max: 'must have less than or equal to {{limit}} children',
	        length: 'must have {{limit}} children',
	        allowUnknown: '!!"{{!child}}" is not allowed',
	        with: '!!"{{mainWithLabel}}" missing required peer "{{peerWithLabel}}"',
	        without: '!!"{{mainWithLabel}}" conflict with forbidden peer "{{peerWithLabel}}"',
	        missing: 'must contain at least one of {{peersWithLabels}}',
	        xor: 'contains a conflict between exclusive peers {{peersWithLabels}}',
	        or: 'must contain at least one of {{peersWithLabels}}',
	        and: 'contains {{presentWithLabels}} without its required peers {{missingWithLabels}}',
	        nand: '!!"{{mainWithLabel}}" must not exist simultaneously with {{peersWithLabels}}',
	        assert: '!!"{{ref}}" validation failed because "{{ref}}" failed to {{message}}',
	        rename: {
	            multiple: 'cannot rename child "{{from}}" because multiple renames are disabled and another key was already renamed to "{{to}}"',
	            override: 'cannot rename child "{{from}}" because override is disabled and target "{{to}}" exists'
	        },
	        type: 'must be an instance of "{{type}}"',
	        schema: 'must be a Joi instance'
	    },
	    number: {
	        base: 'must be a number',
	        min: 'must be larger than or equal to {{limit}}',
	        max: 'must be less than or equal to {{limit}}',
	        less: 'must be less than {{limit}}',
	        greater: 'must be greater than {{limit}}',
	        float: 'must be a float or double',
	        integer: 'must be an integer',
	        negative: 'must be a negative number',
	        positive: 'must be a positive number',
	        precision: 'must have no more than {{limit}} decimal places',
	        ref: 'references "{{ref}}" which is not a number',
	        multiple: 'must be a multiple of {{multiple}}'
	    },
	    string: {
	        base: 'must be a string',
	        min: 'length must be at least {{limit}} characters long',
	        max: 'length must be less than or equal to {{limit}} characters long',
	        length: 'length must be {{limit}} characters long',
	        alphanum: 'must only contain alpha-numeric characters',
	        token: 'must only contain alpha-numeric and underscore characters',
	        regex: {
	            base: 'with value "{{!value}}" fails to match the required pattern: {{pattern}}',
	            name: 'with value "{{!value}}" fails to match the {{name}} pattern',
	            invert: {
	                base: 'with value "{{!value}}" matches the inverted pattern: {{pattern}}',
	                name: 'with value "{{!value}}" matches the inverted {{name}} pattern'
	            }
	        },
	        email: 'must be a valid email',
	        uri: 'must be a valid uri',
	        uriRelativeOnly: 'must be a valid relative uri',
	        uriCustomScheme: 'must be a valid uri with a scheme matching the {{scheme}} pattern',
	        isoDate: 'must be a valid ISO 8601 date',
	        guid: 'must be a valid GUID',
	        hex: 'must only contain hexadecimal characters',
	        base64: 'must be a valid base64 string',
	        hostname: 'must be a valid hostname',
	        lowercase: 'must only contain lowercase characters',
	        uppercase: 'must only contain uppercase characters',
	        trim: 'must not have leading or trailing whitespace',
	        creditCard: 'must be a credit card',
	        ref: 'references "{{ref}}" which is not a number',
	        ip: 'must be a valid ip address with a {{cidr}} CIDR',
	        ipVersion: 'must be a valid ip address of one of the following versions {{version}} with a {{cidr}} CIDR'
	    }
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Ref = __webpack_require__(12);

	module.exports = function () {
	    function Set() {
	        _classCallCheck(this, Set);

	        this._set = [];
	    }

	    Set.prototype.add = function add(value, refs) {

	        if (!Ref.isRef(value) && this.has(value, null, null, false)) {

	            return;
	        }

	        if (refs !== undefined) {
	            // If it's a merge, we don't have any refs
	            Ref.push(refs, value);
	        }

	        this._set.push(value);
	        return this;
	    };

	    Set.prototype.merge = function merge(add, remove) {

	        for (var i = 0; i < add._set.length; ++i) {
	            this.add(add._set[i]);
	        }

	        for (var _i = 0; _i < remove._set.length; ++_i) {
	            this.remove(remove._set[_i]);
	        }

	        return this;
	    };

	    Set.prototype.remove = function remove(value) {

	        this._set = this._set.filter(function (item) {
	            return value !== item;
	        });
	        return this;
	    };

	    Set.prototype.has = function has(value, state, options, insensitive) {

	        for (var i = 0; i < this._set.length; ++i) {
	            var items = this._set[i];

	            if (state && Ref.isRef(items)) {
	                // Only resolve references if there is a state, otherwise it's a merge
	                items = items(state.reference || state.parent, options);
	            }

	            if (!Array.isArray(items)) {
	                items = [items];
	            }

	            for (var j = 0; j < items.length; ++j) {
	                var item = items[j];
	                if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== (typeof item === 'undefined' ? 'undefined' : _typeof(item))) {
	                    continue;
	                }

	                if (value === item || value instanceof Date && item instanceof Date && value.getTime() === item.getTime() || insensitive && typeof value === 'string' && value.toLowerCase() === item.toLowerCase() || Buffer.isBuffer(value) && Buffer.isBuffer(item) && value.length === item.length && value.toString('binary') === item.toString('binary')) {

	                    return true;
	                }
	            }
	        }

	        return false;
	    };

	    Set.prototype.values = function values(options) {

	        if (options && options.stripUndefined) {
	            var values = [];

	            for (var i = 0; i < this._set.length; ++i) {
	                var item = this._set[i];
	                if (item !== undefined) {
	                    values.push(item);
	                }
	            }

	            return values;
	        }

	        return this._set.slice();
	    };

	    Set.prototype.slice = function slice() {

	        var newSet = new Set();
	        newSet._set = this._set.slice();

	        return newSet;
	    };

	    Set.prototype.concat = function concat(source) {

	        var newSet = new Set();
	        newSet._set = this._set.concat(source._set);

	        return newSet;
	    };

	    return Set;
	}();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3).Buffer))

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Load modules

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var Hoek = __webpack_require__(2);
	var Ref = __webpack_require__(12);

	// Type modules are delay-loaded to prevent circular dependencies


	// Declare internals

	var internals = {
	    any: null,
	    date: __webpack_require__(17),
	    string: __webpack_require__(18),
	    number: __webpack_require__(23),
	    boolean: __webpack_require__(24),
	    alt: null,
	    object: null
	};

	exports.schema = function (config) {

	    internals.any = internals.any || new (__webpack_require__(11))();
	    internals.alt = internals.alt || __webpack_require__(25);
	    internals.object = internals.object || __webpack_require__(26);

	    if (config !== undefined && config !== null && (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object') {

	        if (config.isJoi) {
	            return config;
	        }

	        if (Array.isArray(config)) {
	            return internals.alt.try(config);
	        }

	        if (config instanceof RegExp) {
	            return internals.string.regex(config);
	        }

	        if (config instanceof Date) {
	            return internals.date.valid(config);
	        }

	        return internals.object.keys(config);
	    }

	    if (typeof config === 'string') {
	        return internals.string.valid(config);
	    }

	    if (typeof config === 'number') {
	        return internals.number.valid(config);
	    }

	    if (typeof config === 'boolean') {
	        return internals.boolean.valid(config);
	    }

	    if (Ref.isRef(config)) {
	        return internals.any.valid(config);
	    }

	    Hoek.assert(config === null, 'Invalid schema content:', config);

	    return internals.any.valid(null);
	};

	exports.ref = function (id) {

	    return Ref.isRef(id) ? id : Ref.create(id);
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Load modules

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var Any = __webpack_require__(11);
	var Ref = __webpack_require__(12);
	var Hoek = __webpack_require__(2);

	// Declare internals

	var internals = {};

	internals.isoDate = /^(?:[-+]\d{2})?(?:\d{4}(?!\d{2}\b))(?:(-?)(?:(?:0[1-9]|1[0-2])(?:\1(?:[12]\d|0[1-9]|3[01]))?|W(?:[0-4]\d|5[0-2])(?:-?[1-7])?|(?:00[1-9]|0[1-9]\d|[12]\d{2}|3(?:[0-5]\d|6[1-6])))(?![T]$|[T][\d]+Z$)(?:[T\s](?:(?:(?:[01]\d|2[0-3])(?:(:?)[0-5]\d)?|24\:?00)(?:[.,]\d+(?!:))?)(?:\2[0-5]\d(?:[.,]\d+)?)?(?:[Z]|(?:[+-])(?:[01]\d|2[0-3])(?::?[0-5]\d)?)?)?)?$/;
	internals.invalidDate = new Date('');
	internals.isIsoDate = function () {

	    var isoString = internals.isoDate.toString();

	    return function (date) {

	        return date && date.toString() === isoString;
	    };
	}();

	internals.Date = function (_Any) {
	    _inherits(_class, _Any);

	    function _class() {
	        _classCallCheck(this, _class);

	        var _this = _possibleConstructorReturn(this, _Any.call(this));

	        _this._type = 'date';
	        return _this;
	    }

	    _class.prototype._base = function _base(value, state, options) {

	        var result = {
	            value: options.convert && internals.Date.toDate(value, this._flags.format, this._flags.timestamp, this._flags.multiplier) || value
	        };

	        if (result.value instanceof Date && !isNaN(result.value.getTime())) {
	            result.errors = null;
	        } else if (!options.convert) {
	            result.errors = this.createError('date.strict', null, state, options);
	        } else {
	            var type = void 0;
	            if (internals.isIsoDate(this._flags.format)) {
	                type = 'isoDate';
	            } else if (this._flags.timestamp) {
	                type = 'timestamp.' + this._flags.timestamp;
	            } else {
	                type = 'base';
	            }

	            result.errors = this.createError('date.' + type, null, state, options);
	        }

	        return result;
	    };

	    _class.toDate = function toDate(value, format, timestamp, multiplier) {

	        if (value instanceof Date) {
	            return value;
	        }

	        if (typeof value === 'string' || typeof value === 'number' && !isNaN(value) && isFinite(value)) {

	            if (typeof value === 'string' && /^[+-]?\d+(\.\d+)?$/.test(value)) {

	                value = parseFloat(value);
	            }

	            var date = void 0;
	            if (format && internals.isIsoDate(format)) {
	                date = format.test(value) ? new Date(value) : internals.invalidDate;
	            } else if (timestamp && multiplier) {
	                date = new Date(value * multiplier);
	            } else {
	                date = new Date(value);
	            }

	            if (!isNaN(date.getTime())) {
	                return date;
	            }
	        }

	        return null;
	    };

	    _class.prototype.iso = function iso() {

	        if (this._flags.format === internals.isoDate) {
	            return this;
	        }

	        var obj = this.clone();
	        obj._flags.format = internals.isoDate;
	        return obj;
	    };

	    _class.prototype.timestamp = function timestamp(type) {

	        type = type || 'javascript';

	        var allowed = ['javascript', 'unix'];
	        Hoek.assert(allowed.indexOf(type) !== -1, '"type" must be one of "' + allowed.join('", "') + '"');

	        if (this._flags.timestamp === type) {
	            return this;
	        }

	        var obj = this.clone();
	        obj._flags.timestamp = type;
	        obj._flags.multiplier = type === 'unix' ? 1000 : 1;
	        return obj;
	    };

	    _class.prototype._isIsoDate = function _isIsoDate(value) {

	        return internals.isoDate.test(value);
	    };

	    return _class;
	}(Any);

	internals.compare = function (type, compare) {

	    return function (date) {

	        var isNow = date === 'now';
	        var isRef = Ref.isRef(date);

	        if (!isNow && !isRef) {
	            date = internals.Date.toDate(date);
	        }

	        Hoek.assert(date, 'Invalid date format');

	        return this._test(type, date, function (value, state, options) {

	            var compareTo = void 0;
	            if (isNow) {
	                compareTo = Date.now();
	            } else if (isRef) {
	                compareTo = internals.Date.toDate(date(state.reference || state.parent, options));

	                if (!compareTo) {
	                    return this.createError('date.ref', { ref: date.key }, state, options);
	                }

	                compareTo = compareTo.getTime();
	            } else {
	                compareTo = date.getTime();
	            }

	            if (compare(value.getTime(), compareTo)) {
	                return value;
	            }

	            return this.createError('date.' + type, { limit: new Date(compareTo) }, state, options);
	        });
	    };
	};
	internals.Date.prototype.min = internals.compare('min', function (value, date) {
	    return value >= date;
	});
	internals.Date.prototype.max = internals.compare('max', function (value, date) {
	    return value <= date;
	});

	module.exports = new internals.Date();

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

	// Load modules

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var Net = __webpack_require__(5);
	var Hoek = __webpack_require__(2);
	var Isemail = void 0; // Loaded on demand
	var Any = __webpack_require__(11);
	var Ref = __webpack_require__(12);
	var JoiDate = __webpack_require__(17);
	var Uri = __webpack_require__(19);
	var Ip = __webpack_require__(21);

	// Declare internals

	var internals = {
	    uriRegex: Uri.createUriRegex(),
	    ipRegex: Ip.createIpRegex(['ipv4', 'ipv6', 'ipvfuture'], 'optional'),
	    guidBrackets: {
	        '{': '}', '[': ']', '(': ')', '': ''
	    },
	    guidVersions: {
	        uuidv1: '1',
	        uuidv2: '2',
	        uuidv3: '3',
	        uuidv4: '4',
	        uuidv5: '5'
	    }
	};

	internals.String = function (_Any) {
	    _inherits(_class, _Any);

	    function _class() {
	        _classCallCheck(this, _class);

	        var _this = _possibleConstructorReturn(this, _Any.call(this));

	        _this._type = 'string';
	        _this._invalids.add('');
	        return _this;
	    }

	    _class.prototype._base = function _base(value, state, options) {

	        if (typeof value === 'string' && options.convert) {

	            if (this._flags.case) {
	                value = this._flags.case === 'upper' ? value.toLocaleUpperCase() : value.toLocaleLowerCase();
	            }

	            if (this._flags.trim) {
	                value = value.trim();
	            }

	            if (this._inner.replacements) {

	                for (var i = 0; i < this._inner.replacements.length; ++i) {
	                    var replacement = this._inner.replacements[i];
	                    value = value.replace(replacement.pattern, replacement.replacement);
	                }
	            }

	            if (this._flags.truncate) {
	                for (var _i = 0; _i < this._tests.length; ++_i) {
	                    var test = this._tests[_i];
	                    if (test.name === 'max') {
	                        value = value.slice(0, test.arg);
	                        break;
	                    }
	                }
	            }
	        }

	        return {
	            value: value,
	            errors: typeof value === 'string' ? null : this.createError('string.base', { value: value }, state, options)
	        };
	    };

	    _class.prototype.insensitive = function insensitive() {

	        if (this._flags.insensitive) {
	            return this;
	        }

	        var obj = this.clone();
	        obj._flags.insensitive = true;
	        return obj;
	    };

	    _class.prototype.creditCard = function creditCard() {

	        return this._test('creditCard', undefined, function (value, state, options) {

	            var i = value.length;
	            var sum = 0;
	            var mul = 1;

	            while (i--) {
	                var char = value.charAt(i) * mul;
	                sum = sum + (char - (char > 9) * 9);
	                mul = mul ^ 3;
	            }

	            var check = sum % 10 === 0 && sum > 0;
	            return check ? value : this.createError('string.creditCard', { value: value }, state, options);
	        });
	    };

	    _class.prototype.regex = function regex(pattern, patternOptions) {

	        Hoek.assert(pattern instanceof RegExp, 'pattern must be a RegExp');

	        var patternObject = {
	            pattern: new RegExp(pattern.source, pattern.ignoreCase ? 'i' : undefined) // Future version should break this and forbid unsupported regex flags
	        };

	        if (typeof patternOptions === 'string') {
	            patternObject.name = patternOptions;
	        } else if ((typeof patternOptions === 'undefined' ? 'undefined' : _typeof(patternOptions)) === 'object') {
	            patternObject.invert = !!patternOptions.invert;

	            if (patternOptions.name) {
	                patternObject.name = patternOptions.name;
	            }
	        }

	        var errorCode = ['string.regex', patternObject.invert ? '.invert' : '', patternObject.name ? '.name' : '.base'].join('');

	        return this._test('regex', patternObject, function (value, state, options) {

	            var patternMatch = patternObject.pattern.test(value);

	            if (patternMatch ^ patternObject.invert) {
	                return value;
	            }

	            return this.createError(errorCode, { name: patternObject.name, pattern: patternObject.pattern, value: value }, state, options);
	        });
	    };

	    _class.prototype.alphanum = function alphanum() {

	        return this._test('alphanum', undefined, function (value, state, options) {

	            if (/^[a-zA-Z0-9]+$/.test(value)) {
	                return value;
	            }

	            return this.createError('string.alphanum', { value: value }, state, options);
	        });
	    };

	    _class.prototype.token = function token() {

	        return this._test('token', undefined, function (value, state, options) {

	            if (/^\w+$/.test(value)) {
	                return value;
	            }

	            return this.createError('string.token', { value: value }, state, options);
	        });
	    };

	    _class.prototype.email = function email(isEmailOptions) {

	        if (isEmailOptions) {
	            Hoek.assert((typeof isEmailOptions === 'undefined' ? 'undefined' : _typeof(isEmailOptions)) === 'object', 'email options must be an object');
	            Hoek.assert(typeof isEmailOptions.checkDNS === 'undefined', 'checkDNS option is not supported');
	            Hoek.assert(typeof isEmailOptions.tldWhitelist === 'undefined' || _typeof(isEmailOptions.tldWhitelist) === 'object', 'tldWhitelist must be an array or object');
	            Hoek.assert(typeof isEmailOptions.minDomainAtoms === 'undefined' || Number.isSafeInteger(isEmailOptions.minDomainAtoms) && isEmailOptions.minDomainAtoms > 0, 'minDomainAtoms must be a positive integer');
	            Hoek.assert(typeof isEmailOptions.errorLevel === 'undefined' || typeof isEmailOptions.errorLevel === 'boolean' || Number.isSafeInteger(isEmailOptions.errorLevel) && isEmailOptions.errorLevel >= 0, 'errorLevel must be a non-negative integer or boolean');
	        }

	        return this._test('email', isEmailOptions, function (value, state, options) {

	            Isemail = Isemail || __webpack_require__(22);

	            try {
	                var result = Isemail.validate(value, isEmailOptions);
	                if (result === true || result === 0) {
	                    return value;
	                }
	            } catch (e) {}

	            return this.createError('string.email', { value: value }, state, options);
	        });
	    };

	    _class.prototype.ip = function ip(ipOptions) {

	        var regex = internals.ipRegex;
	        ipOptions = ipOptions || {};
	        Hoek.assert((typeof ipOptions === 'undefined' ? 'undefined' : _typeof(ipOptions)) === 'object', 'options must be an object');

	        if (ipOptions.cidr) {
	            Hoek.assert(typeof ipOptions.cidr === 'string', 'cidr must be a string');
	            ipOptions.cidr = ipOptions.cidr.toLowerCase();

	            Hoek.assert(ipOptions.cidr in Ip.cidrs, 'cidr must be one of ' + Object.keys(Ip.cidrs).join(', '));

	            // If we only received a `cidr` setting, create a regex for it. But we don't need to create one if `cidr` is "optional" since that is the default
	            if (!ipOptions.version && ipOptions.cidr !== 'optional') {
	                regex = Ip.createIpRegex(['ipv4', 'ipv6', 'ipvfuture'], ipOptions.cidr);
	            }
	        } else {

	            // Set our default cidr strategy
	            ipOptions.cidr = 'optional';
	        }

	        var versions = void 0;
	        if (ipOptions.version) {
	            if (!Array.isArray(ipOptions.version)) {
	                ipOptions.version = [ipOptions.version];
	            }

	            Hoek.assert(ipOptions.version.length >= 1, 'version must have at least 1 version specified');

	            versions = [];
	            for (var i = 0; i < ipOptions.version.length; ++i) {
	                var version = ipOptions.version[i];
	                Hoek.assert(typeof version === 'string', 'version at position ' + i + ' must be a string');
	                version = version.toLowerCase();
	                Hoek.assert(Ip.versions[version], 'version at position ' + i + ' must be one of ' + Object.keys(Ip.versions).join(', '));
	                versions.push(version);
	            }

	            // Make sure we have a set of versions
	            versions = Hoek.unique(versions);

	            regex = Ip.createIpRegex(versions, ipOptions.cidr);
	        }

	        return this._test('ip', ipOptions, function (value, state, options) {

	            if (regex.test(value)) {
	                return value;
	            }

	            if (versions) {
	                return this.createError('string.ipVersion', { value: value, cidr: ipOptions.cidr, version: versions }, state, options);
	            }

	            return this.createError('string.ip', { value: value, cidr: ipOptions.cidr }, state, options);
	        });
	    };

	    _class.prototype.uri = function uri(uriOptions) {

	        var customScheme = '';
	        var allowRelative = false;
	        var relativeOnly = false;
	        var regex = internals.uriRegex;

	        if (uriOptions) {
	            Hoek.assert((typeof uriOptions === 'undefined' ? 'undefined' : _typeof(uriOptions)) === 'object', 'options must be an object');

	            if (uriOptions.scheme) {
	                Hoek.assert(uriOptions.scheme instanceof RegExp || typeof uriOptions.scheme === 'string' || Array.isArray(uriOptions.scheme), 'scheme must be a RegExp, String, or Array');

	                if (!Array.isArray(uriOptions.scheme)) {
	                    uriOptions.scheme = [uriOptions.scheme];
	                }

	                Hoek.assert(uriOptions.scheme.length >= 1, 'scheme must have at least 1 scheme specified');

	                // Flatten the array into a string to be used to match the schemes.
	                for (var i = 0; i < uriOptions.scheme.length; ++i) {
	                    var scheme = uriOptions.scheme[i];
	                    Hoek.assert(scheme instanceof RegExp || typeof scheme === 'string', 'scheme at position ' + i + ' must be a RegExp or String');

	                    // Add OR separators if a value already exists
	                    customScheme = customScheme + (customScheme ? '|' : '');

	                    // If someone wants to match HTTP or HTTPS for example then we need to support both RegExp and String so we don't escape their pattern unknowingly.
	                    if (scheme instanceof RegExp) {
	                        customScheme = customScheme + scheme.source;
	                    } else {
	                        Hoek.assert(/[a-zA-Z][a-zA-Z0-9+-\.]*/.test(scheme), 'scheme at position ' + i + ' must be a valid scheme');
	                        customScheme = customScheme + Hoek.escapeRegex(scheme);
	                    }
	                }
	            }

	            if (uriOptions.allowRelative) {
	                allowRelative = true;
	            }

	            if (uriOptions.relativeOnly) {
	                relativeOnly = true;
	            }
	        }

	        if (customScheme || allowRelative || relativeOnly) {
	            regex = Uri.createUriRegex(customScheme, allowRelative, relativeOnly);
	        }

	        return this._test('uri', uriOptions, function (value, state, options) {

	            if (regex.test(value)) {
	                return value;
	            }

	            if (relativeOnly) {
	                return this.createError('string.uriRelativeOnly', { value: value }, state, options);
	            }

	            if (customScheme) {
	                return this.createError('string.uriCustomScheme', { scheme: customScheme, value: value }, state, options);
	            }

	            return this.createError('string.uri', { value: value }, state, options);
	        });
	    };

	    _class.prototype.isoDate = function isoDate() {

	        return this._test('isoDate', undefined, function (value, state, options) {

	            if (JoiDate._isIsoDate(value)) {
	                return value;
	            }

	            return this.createError('string.isoDate', { value: value }, state, options);
	        });
	    };

	    _class.prototype.guid = function guid(guidOptions) {

	        var versionNumbers = '';

	        if (guidOptions && guidOptions.version) {
	            if (!Array.isArray(guidOptions.version)) {
	                guidOptions.version = [guidOptions.version];
	            }

	            Hoek.assert(guidOptions.version.length >= 1, 'version must have at least 1 valid version specified');
	            var versions = new Set();

	            for (var i = 0; i < guidOptions.version.length; ++i) {
	                var version = guidOptions.version[i];
	                Hoek.assert(typeof version === 'string', 'version at position ' + i + ' must be a string');
	                version = version.toLowerCase();
	                var versionNumber = internals.guidVersions[version];
	                Hoek.assert(versionNumber, 'version at position ' + i + ' must be one of ' + Object.keys(internals.guidVersions).join(', '));
	                Hoek.assert(!versions.has(versionNumber), 'version at position ' + i + ' must not be a duplicate.');

	                versionNumbers += versionNumber;
	                versions.add(versionNumber);
	            }
	        }

	        var guidRegex = new RegExp('^([\\[{\\(]?)[0-9A-F]{8}([:-]?)[0-9A-F]{4}\\2?[' + (versionNumbers || '0-9A-F') + '][0-9A-F]{3}\\2?[' + (versionNumbers ? '89AB' : '0-9A-F') + '][0-9A-F]{3}\\2?[0-9A-F]{12}([\\]}\\)]?)$', 'i');

	        return this._test('guid', guidOptions, function (value, state, options) {

	            var results = guidRegex.exec(value);

	            if (!results) {
	                return this.createError('string.guid', { value: value }, state, options);
	            }

	            // Matching braces
	            if (internals.guidBrackets[results[1]] !== results[results.length - 1]) {
	                return this.createError('string.guid', { value: value }, state, options);
	            }

	            return value;
	        });
	    };

	    _class.prototype.hex = function hex() {

	        var regex = /^[a-f0-9]+$/i;

	        return this._test('hex', regex, function (value, state, options) {

	            if (regex.test(value)) {
	                return value;
	            }

	            return this.createError('string.hex', { value: value }, state, options);
	        });
	    };

	    _class.prototype.base64 = function base64(base64Options) {

	        base64Options = base64Options || {};

	        // Validation.
	        Hoek.assert((typeof base64Options === 'undefined' ? 'undefined' : _typeof(base64Options)) === 'object', 'base64 options must be an object');
	        Hoek.assert(typeof base64Options.paddingRequired === 'undefined' || typeof base64Options.paddingRequired === 'boolean', 'paddingRequired must be boolean');

	        // Determine if padding is required.
	        var paddingRequired = base64Options.paddingRequired === false ? base64Options.paddingRequired : base64Options.paddingRequired || true;

	        // Set validation based on preference.
	        var regex = paddingRequired ?
	        // Padding is required.
	        /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/
	        // Padding is optional.
	        : /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}(==)?|[A-Za-z0-9+\/]{3}=?)?$/;

	        return this._test('base64', regex, function (value, state, options) {

	            if (regex.test(value)) {
	                return value;
	            }

	            return this.createError('string.base64', { value: value }, state, options);
	        });
	    };

	    _class.prototype.hostname = function hostname() {

	        var regex = /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$/;

	        return this._test('hostname', undefined, function (value, state, options) {

	            if (value.length <= 255 && regex.test(value) || Net.isIPv6(value)) {

	                return value;
	            }

	            return this.createError('string.hostname', { value: value }, state, options);
	        });
	    };

	    _class.prototype.lowercase = function lowercase() {

	        var obj = this._test('lowercase', undefined, function (value, state, options) {

	            if (options.convert || value === value.toLocaleLowerCase()) {

	                return value;
	            }

	            return this.createError('string.lowercase', { value: value }, state, options);
	        });

	        obj._flags.case = 'lower';
	        return obj;
	    };

	    _class.prototype.uppercase = function uppercase() {

	        var obj = this._test('uppercase', undefined, function (value, state, options) {

	            if (options.convert || value === value.toLocaleUpperCase()) {

	                return value;
	            }

	            return this.createError('string.uppercase', { value: value }, state, options);
	        });

	        obj._flags.case = 'upper';
	        return obj;
	    };

	    _class.prototype.trim = function trim() {

	        var obj = this._test('trim', undefined, function (value, state, options) {

	            if (options.convert || value === value.trim()) {

	                return value;
	            }

	            return this.createError('string.trim', { value: value }, state, options);
	        });

	        obj._flags.trim = true;
	        return obj;
	    };

	    _class.prototype.replace = function replace(pattern, replacement) {

	        if (typeof pattern === 'string') {
	            pattern = new RegExp(Hoek.escapeRegex(pattern), 'g');
	        }

	        Hoek.assert(pattern instanceof RegExp, 'pattern must be a RegExp');
	        Hoek.assert(typeof replacement === 'string', 'replacement must be a String');

	        // This can not be considere a test like trim, we can't "reject"
	        // anything from this rule, so just clone the current object
	        var obj = this.clone();

	        if (!obj._inner.replacements) {
	            obj._inner.replacements = [];
	        }

	        obj._inner.replacements.push({
	            pattern: pattern,
	            replacement: replacement
	        });

	        return obj;
	    };

	    _class.prototype.truncate = function truncate(enabled) {

	        var value = enabled === undefined ? true : !!enabled;

	        if (this._flags.truncate === value) {
	            return this;
	        }

	        var obj = this.clone();
	        obj._flags.truncate = value;
	        return obj;
	    };

	    return _class;
	}(Any);

	internals.compare = function (type, compare) {

	    return function (limit, encoding) {

	        var isRef = Ref.isRef(limit);

	        Hoek.assert(Number.isSafeInteger(limit) && limit >= 0 || isRef, 'limit must be a positive integer or reference');
	        Hoek.assert(!encoding || Buffer.isEncoding(encoding), 'Invalid encoding:', encoding);

	        return this._test(type, limit, function (value, state, options) {

	            var compareTo = void 0;
	            if (isRef) {
	                compareTo = limit(state.reference || state.parent, options);

	                if (!Number.isSafeInteger(compareTo)) {
	                    return this.createError('string.ref', { ref: limit.key }, state, options);
	                }
	            } else {
	                compareTo = limit;
	            }

	            if (compare(value, compareTo, encoding)) {
	                return value;
	            }

	            return this.createError('string.' + type, { limit: compareTo, value: value, encoding: encoding }, state, options);
	        });
	    };
	};

	internals.String.prototype.min = internals.compare('min', function (value, limit, encoding) {

	    var length = encoding ? Buffer.byteLength(value, encoding) : value.length;
	    return length >= limit;
	});

	internals.String.prototype.max = internals.compare('max', function (value, limit, encoding) {

	    var length = encoding ? Buffer.byteLength(value, encoding) : value.length;
	    return length <= limit;
	});

	internals.String.prototype.length = internals.compare('length', function (value, limit, encoding) {

	    var length = encoding ? Buffer.byteLength(value, encoding) : value.length;
	    return length === limit;
	});

	// Aliases

	internals.String.prototype.uuid = internals.String.prototype.guid;

	module.exports = new internals.String();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3).Buffer))

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Load Modules

	var RFC3986 = __webpack_require__(20);

	// Declare internals

	var internals = {
	    Uri: {
	        createUriRegex: function createUriRegex(optionalScheme, allowRelative, relativeOnly) {

	            var scheme = RFC3986.scheme;
	            var prefix = void 0;

	            if (relativeOnly) {
	                prefix = '(?:' + RFC3986.relativeRef + ')';
	            } else {
	                // If we were passed a scheme, use it instead of the generic one
	                if (optionalScheme) {

	                    // Have to put this in a non-capturing group to handle the OR statements
	                    scheme = '(?:' + optionalScheme + ')';
	                }

	                var withScheme = '(?:' + scheme + ':' + RFC3986.hierPart + ')';

	                prefix = allowRelative ? '(?:' + withScheme + '|' + RFC3986.relativeRef + ')' : withScheme;
	            }

	            /**
	             * URI = scheme ":" hier-part [ "?" query ] [ "#" fragment ]
	             *
	             * OR
	             *
	             * relative-ref = relative-part [ "?" query ] [ "#" fragment ]
	             */
	            return new RegExp('^' + prefix + '(?:\\?' + RFC3986.query + ')?' + '(?:#' + RFC3986.fragment + ')?$');
	        }
	    }
	};

	module.exports = internals.Uri;

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	// Load modules


	// Delcare internals

	var internals = {
	  rfc3986: {}
	};

	internals.generate = function () {

	  /**
	   * elements separated by forward slash ("/") are alternatives.
	   */
	  var or = '|';

	  /**
	   * DIGIT = %x30-39 ; 0-9
	   */
	  var digit = '0-9';
	  var digitOnly = '[' + digit + ']';

	  /**
	   * ALPHA = %x41-5A / %x61-7A   ; A-Z / a-z
	   */
	  var alpha = 'a-zA-Z';
	  var alphaOnly = '[' + alpha + ']';

	  /**
	   * cidr       = DIGIT                ; 0-9
	   *            / %x31-32 DIGIT         ; 10-29
	   *            / "3" %x30-32           ; 30-32
	   */
	  internals.rfc3986.cidr = digitOnly + or + '[1-2]' + digitOnly + or + '3' + '[0-2]';

	  /**
	   * HEXDIG = DIGIT / "A" / "B" / "C" / "D" / "E" / "F"
	   */
	  var hexDigit = digit + 'A-Fa-f';
	  var hexDigitOnly = '[' + hexDigit + ']';

	  /**
	   * unreserved = ALPHA / DIGIT / "-" / "." / "_" / "~"
	   */
	  var unreserved = alpha + digit + '-\\._~';

	  /**
	   * sub-delims = "!" / "$" / "&" / "'" / "(" / ")" / "*" / "+" / "," / ";" / "="
	   */
	  var subDelims = '!\\$&\'\\(\\)\\*\\+,;=';

	  /**
	   * pct-encoded = "%" HEXDIG HEXDIG
	   */
	  var pctEncoded = '%' + hexDigit;

	  /**
	   * pchar = unreserved / pct-encoded / sub-delims / ":" / "@"
	   */
	  var pchar = unreserved + pctEncoded + subDelims + ':@';
	  var pcharOnly = '[' + pchar + ']';

	  /**
	   * Rule to support zero-padded addresses.
	   */
	  var zeroPad = '0?';

	  /**
	   * dec-octet   = DIGIT                 ; 0-9
	   *            / %x31-39 DIGIT         ; 10-99
	   *            / "1" 2DIGIT            ; 100-199
	   *            / "2" %x30-34 DIGIT     ; 200-249
	   *            / "25" %x30-35          ; 250-255
	   */
	  var decOctect = '(?:' + zeroPad + zeroPad + digitOnly + or + zeroPad + '[1-9]' + digitOnly + or + '1' + digitOnly + digitOnly + or + '2' + '[0-4]' + digitOnly + or + '25' + '[0-5])';

	  /**
	   * IPv4address = dec-octet "." dec-octet "." dec-octet "." dec-octet
	   */
	  internals.rfc3986.IPv4address = '(?:' + decOctect + '\\.){3}' + decOctect;

	  /**
	   * h16 = 1*4HEXDIG ; 16 bits of address represented in hexadecimal
	   * ls32 = ( h16 ":" h16 ) / IPv4address ; least-significant 32 bits of address
	   * IPv6address =                            6( h16 ":" ) ls32
	   *             /                       "::" 5( h16 ":" ) ls32
	   *             / [               h16 ] "::" 4( h16 ":" ) ls32
	   *             / [ *1( h16 ":" ) h16 ] "::" 3( h16 ":" ) ls32
	   *             / [ *2( h16 ":" ) h16 ] "::" 2( h16 ":" ) ls32
	   *             / [ *3( h16 ":" ) h16 ] "::"    h16 ":"   ls32
	   *             / [ *4( h16 ":" ) h16 ] "::"              ls32
	   *             / [ *5( h16 ":" ) h16 ] "::"              h16
	   *             / [ *6( h16 ":" ) h16 ] "::"
	   */
	  var h16 = hexDigitOnly + '{1,4}';
	  var ls32 = '(?:' + h16 + ':' + h16 + '|' + internals.rfc3986.IPv4address + ')';
	  var IPv6SixHex = '(?:' + h16 + ':){6}' + ls32;
	  var IPv6FiveHex = '::(?:' + h16 + ':){5}' + ls32;
	  var IPv6FourHex = '(?:' + h16 + ')?::(?:' + h16 + ':){4}' + ls32;
	  var IPv6ThreeHex = '(?:(?:' + h16 + ':){0,1}' + h16 + ')?::(?:' + h16 + ':){3}' + ls32;
	  var IPv6TwoHex = '(?:(?:' + h16 + ':){0,2}' + h16 + ')?::(?:' + h16 + ':){2}' + ls32;
	  var IPv6OneHex = '(?:(?:' + h16 + ':){0,3}' + h16 + ')?::' + h16 + ':' + ls32;
	  var IPv6NoneHex = '(?:(?:' + h16 + ':){0,4}' + h16 + ')?::' + ls32;
	  var IPv6NoneHex2 = '(?:(?:' + h16 + ':){0,5}' + h16 + ')?::' + h16;
	  var IPv6NoneHex3 = '(?:(?:' + h16 + ':){0,6}' + h16 + ')?::';
	  internals.rfc3986.IPv6address = '(?:' + IPv6SixHex + or + IPv6FiveHex + or + IPv6FourHex + or + IPv6ThreeHex + or + IPv6TwoHex + or + IPv6OneHex + or + IPv6NoneHex + or + IPv6NoneHex2 + or + IPv6NoneHex3 + ')';

	  /**
	   * IPvFuture = "v" 1*HEXDIG "." 1*( unreserved / sub-delims / ":" )
	   */
	  internals.rfc3986.IPvFuture = 'v' + hexDigitOnly + '+\\.[' + unreserved + subDelims + ':]+';

	  /**
	   * scheme = ALPHA *( ALPHA / DIGIT / "+" / "-" / "." )
	   */
	  internals.rfc3986.scheme = alphaOnly + '[' + alpha + digit + '+-\\.]*';

	  /**
	   * userinfo = *( unreserved / pct-encoded / sub-delims / ":" )
	   */
	  var userinfo = '[' + unreserved + pctEncoded + subDelims + ':]*';

	  /**
	   * IP-literal = "[" ( IPv6address / IPvFuture  ) "]"
	   */
	  var IPLiteral = '\\[(?:' + internals.rfc3986.IPv6address + or + internals.rfc3986.IPvFuture + ')\\]';

	  /**
	   * reg-name = *( unreserved / pct-encoded / sub-delims )
	   */
	  var regName = '[' + unreserved + pctEncoded + subDelims + ']{0,255}';

	  /**
	   * host = IP-literal / IPv4address / reg-name
	   */
	  var host = '(?:' + IPLiteral + or + internals.rfc3986.IPv4address + or + regName + ')';

	  /**
	   * port = *DIGIT
	   */
	  var port = digitOnly + '*';

	  /**
	   * authority   = [ userinfo "@" ] host [ ":" port ]
	   */
	  var authority = '(?:' + userinfo + '@)?' + host + '(?::' + port + ')?';

	  /**
	   * segment       = *pchar
	   * segment-nz    = 1*pchar
	   * path          = path-abempty    ; begins with "/" or is empty
	   *               / path-absolute   ; begins with "/" but not "//"
	   *               / path-noscheme   ; begins with a non-colon segment
	   *               / path-rootless   ; begins with a segment
	   *               / path-empty      ; zero characters
	   * path-abempty  = *( "/" segment )
	   * path-absolute = "/" [ segment-nz *( "/" segment ) ]
	   * path-rootless = segment-nz *( "/" segment )
	   */
	  var segment = pcharOnly + '*';
	  var segmentNz = pcharOnly + '+';
	  var segmentNzNc = '[' + unreserved + pctEncoded + subDelims + '@' + ']+';
	  var pathEmpty = '';
	  var pathAbEmpty = '(?:\\/' + segment + ')*';
	  var pathAbsolute = '\\/(?:' + segmentNz + pathAbEmpty + ')?';
	  var pathRootless = segmentNz + pathAbEmpty;
	  var pathNoScheme = segmentNzNc + pathAbEmpty;

	  /**
	   * hier-part = "//" authority path
	   */
	  internals.rfc3986.hierPart = '(?:' + '(?:\\/\\/' + authority + pathAbEmpty + ')' + or + pathAbsolute + or + pathRootless + ')';

	  /**
	   * relative-part = "//" authority path-abempty
	   *                 / path-absolute
	   *                 / path-noscheme
	   *                 / path-empty
	   */
	  internals.rfc3986.relativeRef = '(?:' + '(?:\\/\\/' + authority + pathAbEmpty + ')' + or + pathAbsolute + or + pathNoScheme + or + pathEmpty + ')';

	  /**
	   * query = *( pchar / "/" / "?" )
	   */
	  internals.rfc3986.query = '[' + pchar + '\\/\\?]*(?=#|$)'; //Finish matching either at the fragment part or end of the line.

	  /**
	   * fragment = *( pchar / "/" / "?" )
	   */
	  internals.rfc3986.fragment = '[' + pchar + '\\/\\?]*';
	};

	internals.generate();

	module.exports = internals.rfc3986;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Load modules

	var RFC3986 = __webpack_require__(20);

	// Declare internals

	var internals = {
	    Ip: {
	        cidrs: {
	            required: '\\/(?:' + RFC3986.cidr + ')',
	            optional: '(?:\\/(?:' + RFC3986.cidr + '))?',
	            forbidden: ''
	        },
	        versions: {
	            ipv4: RFC3986.IPv4address,
	            ipv6: RFC3986.IPv6address,
	            ipvfuture: RFC3986.IPvFuture
	        }
	    }
	};

	internals.Ip.createIpRegex = function (versions, cidr) {

	    var regex = void 0;
	    for (var i = 0; i < versions.length; ++i) {
	        var version = versions[i];
	        if (!regex) {
	            regex = '^(?:' + internals.Ip.versions[version];
	        }
	        regex = regex + '|' + internals.Ip.versions[version];
	    }

	    return new RegExp(regex + ')' + internals.Ip.cidrs[cidr] + '$');
	};

	module.exports = internals.Ip;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	// Load modules

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var Dns = __webpack_require__(5);

	// Declare internals

	var internals = {
	    hasOwn: Object.prototype.hasOwnProperty,
	    indexOf: Array.prototype.indexOf,
	    defaultThreshold: 16,
	    maxIPv6Groups: 8,

	    categories: {
	        valid: 1,
	        dnsWarn: 7,
	        rfc5321: 15,
	        cfws: 31,
	        deprecated: 63,
	        rfc5322: 127,
	        error: 255
	    },

	    diagnoses: {

	        // Address is valid

	        valid: 0,

	        // Address is valid, but the DNS check failed

	        dnsWarnNoMXRecord: 5,
	        dnsWarnNoRecord: 6,

	        // Address is valid for SMTP but has unusual elements

	        rfc5321TLD: 9,
	        rfc5321TLDNumeric: 10,
	        rfc5321QuotedString: 11,
	        rfc5321AddressLiteral: 12,

	        // Address is valid for message, but must be modified for envelope

	        cfwsComment: 17,
	        cfwsFWS: 18,

	        // Address contains deprecated elements, but may still be valid in some contexts

	        deprecatedLocalPart: 33,
	        deprecatedFWS: 34,
	        deprecatedQTEXT: 35,
	        deprecatedQP: 36,
	        deprecatedComment: 37,
	        deprecatedCTEXT: 38,
	        deprecatedIPv6: 39,
	        deprecatedCFWSNearAt: 49,

	        // Address is only valid according to broad definition in RFC 5322, but is otherwise invalid

	        rfc5322Domain: 65,
	        rfc5322TooLong: 66,
	        rfc5322LocalTooLong: 67,
	        rfc5322DomainTooLong: 68,
	        rfc5322LabelTooLong: 69,
	        rfc5322DomainLiteral: 70,
	        rfc5322DomainLiteralOBSDText: 71,
	        rfc5322IPv6GroupCount: 72,
	        rfc5322IPv62x2xColon: 73,
	        rfc5322IPv6BadCharacter: 74,
	        rfc5322IPv6MaxGroups: 75,
	        rfc5322IPv6ColonStart: 76,
	        rfc5322IPv6ColonEnd: 77,

	        // Address is invalid for any purpose

	        errExpectingDTEXT: 129,
	        errNoLocalPart: 130,
	        errNoDomain: 131,
	        errConsecutiveDots: 132,
	        errATEXTAfterCFWS: 133,
	        errATEXTAfterQS: 134,
	        errATEXTAfterDomainLiteral: 135,
	        errExpectingQPair: 136,
	        errExpectingATEXT: 137,
	        errExpectingQTEXT: 138,
	        errExpectingCTEXT: 139,
	        errBackslashEnd: 140,
	        errDotStart: 141,
	        errDotEnd: 142,
	        errDomainHyphenStart: 143,
	        errDomainHyphenEnd: 144,
	        errUnclosedQuotedString: 145,
	        errUnclosedComment: 146,
	        errUnclosedDomainLiteral: 147,
	        errFWSCRLFx2: 148,
	        errFWSCRLFEnd: 149,
	        errCRNoLF: 150,
	        errUnknownTLD: 160,
	        errDomainTooShort: 161
	    },

	    components: {
	        localpart: 0,
	        domain: 1,
	        literal: 2,
	        contextComment: 3,
	        contextFWS: 4,
	        contextQuotedString: 5,
	        contextQuotedPair: 6
	    }
	};

	// $lab:coverage:off$
	internals.defer = typeof process !== 'undefined' && process && typeof process.nextTick === 'function' ? process.nextTick.bind(process) : function (callback) {

	    return setTimeout(callback, 0);
	};
	// $lab:coverage:on$


	internals.specials = function () {

	    var specials = '()<>[]:;@\\,."'; // US-ASCII visible characters not valid for atext (http://tools.ietf.org/html/rfc5322#section-3.2.3)
	    var lookup = new Array(0x100);
	    for (var i = 0xff; i >= 0; --i) {
	        lookup[i] = false;
	    }

	    for (var _i = 0; _i < specials.length; ++_i) {
	        lookup[specials.charCodeAt(_i)] = true;
	    }

	    return function (code) {

	        return lookup[code];
	    };
	}();

	internals.regex = {
	    ipV4: /\b(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
	    ipV6: /^[a-fA-F\d]{0,4}$/
	};

	internals.checkIpV6 = function (items) {

	    return items.every(function (value) {
	        return internals.regex.ipV6.test(value);
	    });
	};

	internals.validDomain = function (tldAtom, options) {

	    if (options.tldBlacklist) {
	        if (Array.isArray(options.tldBlacklist)) {
	            return internals.indexOf.call(options.tldBlacklist, tldAtom) === -1;
	        }

	        return !internals.hasOwn.call(options.tldBlacklist, tldAtom);
	    }

	    if (Array.isArray(options.tldWhitelist)) {
	        return internals.indexOf.call(options.tldWhitelist, tldAtom) !== -1;
	    }

	    return internals.hasOwn.call(options.tldWhitelist, tldAtom);
	};

	/**
	 * Check that an email address conforms to RFCs 5321, 5322 and others
	 *
	 * We distinguish clearly between a Mailbox as defined by RFC 5321 and an
	 * addr-spec as defined by RFC 5322. Depending on the context, either can be
	 * regarded as a valid email address. The RFC 5321 Mailbox specification is
	 * more restrictive (comments, white space and obsolete forms are not allowed).
	 *
	 * @param {string} email The email address to check. See README for specifics.
	 * @param {Object} options The (optional) options:
	 *   {boolean} checkDNS If true then will check DNS for MX records. If
	 *     true this call to isEmail _will_ be asynchronous.
	 *   {*} errorLevel Determines the boundary between valid and invalid
	 *     addresses.
	 *   {*} tldBlacklist The set of domains to consider invalid.
	 *   {*} tldWhitelist The set of domains to consider valid.
	 *   {*} minDomainAtoms The minimum number of domain atoms which must be present
	 *     for the address to be valid.
	 * @param {function(number|boolean)} callback The (optional) callback handler.
	 * @return {*}
	 */

	exports.validate = internals.validate = function (email, options, callback) {

	    options = options || {};

	    if (typeof options === 'function') {
	        callback = options;
	        options = {};
	    }

	    if (typeof callback !== 'function') {
	        if (options.checkDNS) {
	            throw new TypeError('expected callback function for checkDNS option');
	        }

	        callback = null;
	    }

	    var diagnose = void 0;
	    var threshold = void 0;

	    if (typeof options.errorLevel === 'number') {
	        diagnose = true;
	        threshold = options.errorLevel;
	    } else {
	        diagnose = !!options.errorLevel;
	        threshold = internals.diagnoses.valid;
	    }

	    if (options.tldWhitelist) {
	        if (typeof options.tldWhitelist === 'string') {
	            options.tldWhitelist = [options.tldWhitelist];
	        } else if (_typeof(options.tldWhitelist) !== 'object') {
	            throw new TypeError('expected array or object tldWhitelist');
	        }
	    }

	    if (options.tldBlacklist) {
	        if (typeof options.tldBlacklist === 'string') {
	            options.tldBlacklist = [options.tldBlacklist];
	        } else if (_typeof(options.tldBlacklist) !== 'object') {
	            throw new TypeError('expected array or object tldBlacklist');
	        }
	    }

	    if (options.minDomainAtoms && (options.minDomainAtoms !== (+options.minDomainAtoms | 0) || options.minDomainAtoms < 0)) {
	        throw new TypeError('expected positive integer minDomainAtoms');
	    }

	    var maxResult = internals.diagnoses.valid;
	    var updateResult = function updateResult(value) {

	        if (value > maxResult) {
	            maxResult = value;
	        }
	    };

	    var context = {
	        now: internals.components.localpart,
	        prev: internals.components.localpart,
	        stack: [internals.components.localpart]
	    };

	    var prevToken = '';

	    var parseData = {
	        local: '',
	        domain: ''
	    };
	    var atomData = {
	        locals: [''],
	        domains: ['']
	    };

	    var elementCount = 0;
	    var elementLength = 0;
	    var crlfCount = 0;
	    var charCode = void 0;

	    var hyphenFlag = false;
	    var assertEnd = false;

	    var emailLength = email.length;

	    var token = void 0; // Token is used outside the loop, must declare similarly
	    for (var i = 0; i < emailLength; ++i) {
	        token = email[i];

	        switch (context.now) {
	            // Local-part
	            case internals.components.localpart:
	                // http://tools.ietf.org/html/rfc5322#section-3.4.1
	                //   local-part      =   dot-atom / quoted-string / obs-local-part
	                //
	                //   dot-atom        =   [CFWS] dot-atom-text [CFWS]
	                //
	                //   dot-atom-text   =   1*atext *("." 1*atext)
	                //
	                //   quoted-string   =   [CFWS]
	                //                       DQUOTE *([FWS] qcontent) [FWS] DQUOTE
	                //                       [CFWS]
	                //
	                //   obs-local-part  =   word *("." word)
	                //
	                //   word            =   atom / quoted-string
	                //
	                //   atom            =   [CFWS] 1*atext [CFWS]
	                switch (token) {
	                    // Comment
	                    case '(':
	                        if (elementLength === 0) {
	                            // Comments are OK at the beginning of an element
	                            updateResult(elementCount === 0 ? internals.diagnoses.cfwsComment : internals.diagnoses.deprecatedComment);
	                        } else {
	                            updateResult(internals.diagnoses.cfwsComment);
	                            // Cannot start a comment in an element, should be end
	                            assertEnd = true;
	                        }

	                        context.stack.push(context.now);
	                        context.now = internals.components.contextComment;
	                        break;

	                    // Next dot-atom element
	                    case '.':
	                        if (elementLength === 0) {
	                            // Another dot, already?
	                            updateResult(elementCount === 0 ? internals.diagnoses.errDotStart : internals.diagnoses.errConsecutiveDots);
	                        } else {
	                            // The entire local-part can be a quoted string for RFC 5321; if one atom is quoted it's an RFC 5322 obsolete form
	                            if (assertEnd) {
	                                updateResult(internals.diagnoses.deprecatedLocalPart);
	                            }

	                            // CFWS & quoted strings are OK again now we're at the beginning of an element (although they are obsolete forms)
	                            assertEnd = false;
	                            elementLength = 0;
	                            ++elementCount;
	                            parseData.local += token;
	                            atomData.locals[elementCount] = '';
	                        }

	                        break;

	                    // Quoted string
	                    case '"':
	                        if (elementLength === 0) {
	                            // The entire local-part can be a quoted string for RFC 5321; if one atom is quoted it's an RFC 5322 obsolete form
	                            updateResult(elementCount === 0 ? internals.diagnoses.rfc5321QuotedString : internals.diagnoses.deprecatedLocalPart);

	                            parseData.local += token;
	                            atomData.locals[elementCount] += token;
	                            ++elementLength;

	                            // Quoted string must be the entire element
	                            assertEnd = true;
	                            context.stack.push(context.now);
	                            context.now = internals.components.contextQuotedString;
	                        } else {
	                            updateResult(internals.diagnoses.errExpectingATEXT);
	                        }

	                        break;

	                    // Folding white space
	                    case '\r':
	                        if (emailLength === ++i || email[i] !== '\n') {
	                            // Fatal error
	                            updateResult(internals.diagnoses.errCRNoLF);
	                            break;
	                        }

	                    // Fallthrough

	                    case ' ':
	                    case '\t':
	                        if (elementLength === 0) {
	                            updateResult(elementCount === 0 ? internals.diagnoses.cfwsFWS : internals.diagnoses.deprecatedFWS);
	                        } else {
	                            // We can't start FWS in the middle of an element, better be end
	                            assertEnd = true;
	                        }

	                        context.stack.push(context.now);
	                        context.now = internals.components.contextFWS;
	                        prevToken = token;
	                        break;

	                    case '@':
	                        // At this point we should have a valid local-part
	                        // $lab:coverage:off$
	                        if (context.stack.length !== 1) {
	                            throw new Error('unexpected item on context stack');
	                        }
	                        // $lab:coverage:on$

	                        if (parseData.local.length === 0) {
	                            // Fatal error
	                            updateResult(internals.diagnoses.errNoLocalPart);
	                        } else if (elementLength === 0) {
	                            // Fatal error
	                            updateResult(internals.diagnoses.errDotEnd);
	                        }
	                        // http://tools.ietf.org/html/rfc5321#section-4.5.3.1.1 the maximum total length of a user name or other local-part is 64
	                        //    octets
	                        else if (parseData.local.length > 64) {
	                                updateResult(internals.diagnoses.rfc5322LocalTooLong);
	                            }
	                            // http://tools.ietf.org/html/rfc5322#section-3.4.1 comments and folding white space SHOULD NOT be used around "@" in the
	                            //    addr-spec
	                            //
	                            // http://tools.ietf.org/html/rfc2119
	                            // 4. SHOULD NOT this phrase, or the phrase "NOT RECOMMENDED" mean that there may exist valid reasons in particular
	                            //    circumstances when the particular behavior is acceptable or even useful, but the full implications should be understood
	                            //    and the case carefully weighed before implementing any behavior described with this label.
	                            else if (context.prev === internals.components.contextComment || context.prev === internals.components.contextFWS) {
	                                    updateResult(internals.diagnoses.deprecatedCFWSNearAt);
	                                }

	                        // Clear everything down for the domain parsing
	                        context.now = internals.components.domain;
	                        context.stack[0] = internals.components.domain;
	                        elementCount = 0;
	                        elementLength = 0;
	                        assertEnd = false; // CFWS can only appear at the end of the element
	                        break;

	                    // ATEXT
	                    default:
	                        // http://tools.ietf.org/html/rfc5322#section-3.2.3
	                        //    atext = ALPHA / DIGIT / ; Printable US-ASCII
	                        //            "!" / "#" /     ;  characters not including
	                        //            "$" / "%" /     ;  specials.  Used for atoms.
	                        //            "&" / "'" /
	                        //            "*" / "+" /
	                        //            "-" / "/" /
	                        //            "=" / "?" /
	                        //            "^" / "_" /
	                        //            "`" / "{" /
	                        //            "|" / "}" /
	                        //            "~"
	                        if (assertEnd) {
	                            // We have encountered atext where it is no longer valid
	                            switch (context.prev) {
	                                case internals.components.contextComment:
	                                case internals.components.contextFWS:
	                                    updateResult(internals.diagnoses.errATEXTAfterCFWS);
	                                    break;

	                                case internals.components.contextQuotedString:
	                                    updateResult(internals.diagnoses.errATEXTAfterQS);
	                                    break;

	                                // $lab:coverage:off$
	                                default:
	                                    throw new Error('more atext found where none is allowed, but unrecognized prev context: ' + context.prev);
	                                // $lab:coverage:on$
	                            }
	                        } else {
	                            context.prev = context.now;
	                            charCode = token.charCodeAt(0);

	                            // Especially if charCode == 10
	                            if (charCode < 33 || charCode > 126 || internals.specials(charCode)) {

	                                // Fatal error
	                                updateResult(internals.diagnoses.errExpectingATEXT);
	                            }

	                            parseData.local += token;
	                            atomData.locals[elementCount] += token;
	                            ++elementLength;
	                        }
	                }

	                break;

	            case internals.components.domain:
	                // http://tools.ietf.org/html/rfc5322#section-3.4.1
	                //   domain          =   dot-atom / domain-literal / obs-domain
	                //
	                //   dot-atom        =   [CFWS] dot-atom-text [CFWS]
	                //
	                //   dot-atom-text   =   1*atext *("." 1*atext)
	                //
	                //   domain-literal  =   [CFWS] "[" *([FWS] dtext) [FWS] "]" [CFWS]
	                //
	                //   dtext           =   %d33-90 /          ; Printable US-ASCII
	                //                       %d94-126 /         ;  characters not including
	                //                       obs-dtext          ;  "[", "]", or "\"
	                //
	                //   obs-domain      =   atom *("." atom)
	                //
	                //   atom            =   [CFWS] 1*atext [CFWS]

	                // http://tools.ietf.org/html/rfc5321#section-4.1.2
	                //   Mailbox        = Local-part "@" ( Domain / address-literal )
	                //
	                //   Domain         = sub-domain *("." sub-domain)
	                //
	                //   address-literal  = "[" ( IPv4-address-literal /
	                //                    IPv6-address-literal /
	                //                    General-address-literal ) "]"
	                //                    ; See Section 4.1.3

	                // http://tools.ietf.org/html/rfc5322#section-3.4.1
	                //      Note: A liberal syntax for the domain portion of addr-spec is
	                //      given here.  However, the domain portion contains addressing
	                //      information specified by and used in other protocols (e.g.,
	                //      [RFC1034], [RFC1035], [RFC1123], [RFC5321]).  It is therefore
	                //      incumbent upon implementations to conform to the syntax of
	                //      addresses for the context in which they are used.
	                //
	                // is_email() author's note: it's not clear how to interpret this in
	                // he context of a general email address validator. The conclusion I
	                // have reached is this: "addressing information" must comply with
	                // RFC 5321 (and in turn RFC 1035), anything that is "semantically
	                // invisible" must comply only with RFC 5322.
	                switch (token) {
	                    // Comment
	                    case '(':
	                        if (elementLength === 0) {
	                            // Comments at the start of the domain are deprecated in the text, comments at the start of a subdomain are obs-domain
	                            // http://tools.ietf.org/html/rfc5322#section-3.4.1
	                            updateResult(elementCount === 0 ? internals.diagnoses.deprecatedCFWSNearAt : internals.diagnoses.deprecatedComment);
	                        } else {
	                            // We can't start a comment mid-element, better be at the end
	                            assertEnd = true;
	                            updateResult(internals.diagnoses.cfwsComment);
	                        }

	                        context.stack.push(context.now);
	                        context.now = internals.components.contextComment;
	                        break;

	                    // Next dot-atom element
	                    case '.':
	                        if (elementLength === 0) {
	                            // Another dot, already? Fatal error.
	                            updateResult(elementCount === 0 ? internals.diagnoses.errDotStart : internals.diagnoses.errConsecutiveDots);
	                        } else if (hyphenFlag) {
	                            // Previous subdomain ended in a hyphen. Fatal error.
	                            updateResult(internals.diagnoses.errDomainHyphenEnd);
	                        } else if (elementLength > 63) {
	                            // Nowhere in RFC 5321 does it say explicitly that the domain part of a Mailbox must be a valid domain according to the
	                            // DNS standards set out in RFC 1035, but this *is* implied in several places. For instance, wherever the idea of host
	                            // routing is discussed the RFC says that the domain must be looked up in the DNS. This would be nonsense unless the
	                            // domain was designed to be a valid DNS domain. Hence we must conclude that the RFC 1035 restriction on label length
	                            // also applies to RFC 5321 domains.
	                            //
	                            // http://tools.ietf.org/html/rfc1035#section-2.3.4
	                            // labels          63 octets or less

	                            updateResult(internals.diagnoses.rfc5322LabelTooLong);
	                        }

	                        // CFWS is OK again now we're at the beginning of an element (although
	                        // it may be obsolete CFWS)
	                        assertEnd = false;
	                        elementLength = 0;
	                        ++elementCount;
	                        atomData.domains[elementCount] = '';
	                        parseData.domain += token;

	                        break;

	                    // Domain literal
	                    case '[':
	                        if (parseData.domain.length === 0) {
	                            // Domain literal must be the only component
	                            assertEnd = true;
	                            ++elementLength;
	                            context.stack.push(context.now);
	                            context.now = internals.components.literal;
	                            parseData.domain += token;
	                            atomData.domains[elementCount] += token;
	                            parseData.literal = '';
	                        } else {
	                            // Fatal error
	                            updateResult(internals.diagnoses.errExpectingATEXT);
	                        }

	                        break;

	                    // Folding white space
	                    case '\r':
	                        if (emailLength === ++i || email[i] !== '\n') {
	                            // Fatal error
	                            updateResult(internals.diagnoses.errCRNoLF);
	                            break;
	                        }

	                    // Fallthrough

	                    case ' ':
	                    case '\t':
	                        if (elementLength === 0) {
	                            updateResult(elementCount === 0 ? internals.diagnoses.deprecatedCFWSNearAt : internals.diagnoses.deprecatedFWS);
	                        } else {
	                            // We can't start FWS in the middle of an element, so this better be the end
	                            updateResult(internals.diagnoses.cfwsFWS);
	                            assertEnd = true;
	                        }

	                        context.stack.push(context.now);
	                        context.now = internals.components.contextFWS;
	                        prevToken = token;
	                        break;

	                    // This must be ATEXT
	                    default:
	                        // RFC 5322 allows any atext...
	                        // http://tools.ietf.org/html/rfc5322#section-3.2.3
	                        //    atext = ALPHA / DIGIT / ; Printable US-ASCII
	                        //            "!" / "#" /     ;  characters not including
	                        //            "$" / "%" /     ;  specials.  Used for atoms.
	                        //            "&" / "'" /
	                        //            "*" / "+" /
	                        //            "-" / "/" /
	                        //            "=" / "?" /
	                        //            "^" / "_" /
	                        //            "`" / "{" /
	                        //            "|" / "}" /
	                        //            "~"

	                        // But RFC 5321 only allows letter-digit-hyphen to comply with DNS rules
	                        //   (RFCs 1034 & 1123)
	                        // http://tools.ietf.org/html/rfc5321#section-4.1.2
	                        //   sub-domain     = Let-dig [Ldh-str]
	                        //
	                        //   Let-dig        = ALPHA / DIGIT
	                        //
	                        //   Ldh-str        = *( ALPHA / DIGIT / "-" ) Let-dig
	                        //
	                        if (assertEnd) {
	                            // We have encountered ATEXT where it is no longer valid
	                            switch (context.prev) {
	                                case internals.components.contextComment:
	                                case internals.components.contextFWS:
	                                    updateResult(internals.diagnoses.errATEXTAfterCFWS);
	                                    break;

	                                case internals.components.literal:
	                                    updateResult(internals.diagnoses.errATEXTAfterDomainLiteral);
	                                    break;

	                                // $lab:coverage:off$
	                                default:
	                                    throw new Error('more atext found where none is allowed, but unrecognized prev context: ' + context.prev);
	                                // $lab:coverage:on$
	                            }
	                        }

	                        charCode = token.charCodeAt(0);
	                        // Assume this token isn't a hyphen unless we discover it is
	                        hyphenFlag = false;

	                        if (charCode < 33 || charCode > 126 || internals.specials(charCode)) {
	                            // Fatal error
	                            updateResult(internals.diagnoses.errExpectingATEXT);
	                        } else if (token === '-') {
	                            if (elementLength === 0) {
	                                // Hyphens cannot be at the beginning of a subdomain, fatal error
	                                updateResult(internals.diagnoses.errDomainHyphenStart);
	                            }

	                            hyphenFlag = true;
	                        }
	                        // Check if it's a neither a number nor a latin letter
	                        else if (charCode < 48 || charCode > 122 || charCode > 57 && charCode < 65 || charCode > 90 && charCode < 97) {
	                                // This is not an RFC 5321 subdomain, but still OK by RFC 5322
	                                updateResult(internals.diagnoses.rfc5322Domain);
	                            }

	                        parseData.domain += token;
	                        atomData.domains[elementCount] += token;
	                        ++elementLength;
	                }

	                break;

	            // Domain literal
	            case internals.components.literal:
	                // http://tools.ietf.org/html/rfc5322#section-3.4.1
	                //   domain-literal  =   [CFWS] "[" *([FWS] dtext) [FWS] "]" [CFWS]
	                //
	                //   dtext           =   %d33-90 /          ; Printable US-ASCII
	                //                       %d94-126 /         ;  characters not including
	                //                       obs-dtext          ;  "[", "]", or "\"
	                //
	                //   obs-dtext       =   obs-NO-WS-CTL / quoted-pair
	                switch (token) {
	                    // End of domain literal
	                    case ']':
	                        if (maxResult < internals.categories.deprecated) {
	                            // Could be a valid RFC 5321 address literal, so let's check

	                            // http://tools.ietf.org/html/rfc5321#section-4.1.2
	                            //   address-literal  = "[" ( IPv4-address-literal /
	                            //                    IPv6-address-literal /
	                            //                    General-address-literal ) "]"
	                            //                    ; See Section 4.1.3
	                            //
	                            // http://tools.ietf.org/html/rfc5321#section-4.1.3
	                            //   IPv4-address-literal  = Snum 3("."  Snum)
	                            //
	                            //   IPv6-address-literal  = "IPv6:" IPv6-addr
	                            //
	                            //   General-address-literal  = Standardized-tag ":" 1*dcontent
	                            //
	                            //   Standardized-tag  = Ldh-str
	                            //                     ; Standardized-tag MUST be specified in a
	                            //                     ; Standards-Track RFC and registered with IANA
	                            //
	                            //   dcontent      = %d33-90 / ; Printable US-ASCII
	                            //                 %d94-126 ; excl. "[", "\", "]"
	                            //
	                            //   Snum          = 1*3DIGIT
	                            //                 ; representing a decimal integer
	                            //                 ; value in the range 0 through 255
	                            //
	                            //   IPv6-addr     = IPv6-full / IPv6-comp / IPv6v4-full / IPv6v4-comp
	                            //
	                            //   IPv6-hex      = 1*4HEXDIG
	                            //
	                            //   IPv6-full     = IPv6-hex 7(":" IPv6-hex)
	                            //
	                            //   IPv6-comp     = [IPv6-hex *5(":" IPv6-hex)] "::"
	                            //                 [IPv6-hex *5(":" IPv6-hex)]
	                            //                 ; The "::" represents at least 2 16-bit groups of
	                            //                 ; zeros.  No more than 6 groups in addition to the
	                            //                 ; "::" may be present.
	                            //
	                            //   IPv6v4-full   = IPv6-hex 5(":" IPv6-hex) ":" IPv4-address-literal
	                            //
	                            //   IPv6v4-comp   = [IPv6-hex *3(":" IPv6-hex)] "::"
	                            //                 [IPv6-hex *3(":" IPv6-hex) ":"]
	                            //                 IPv4-address-literal
	                            //                 ; The "::" represents at least 2 16-bit groups of
	                            //                 ; zeros.  No more than 4 groups in addition to the
	                            //                 ; "::" and IPv4-address-literal may be present.

	                            var index = -1;
	                            var addressLiteral = parseData.literal;
	                            var matchesIP = internals.regex.ipV4.exec(addressLiteral);

	                            // Maybe extract IPv4 part from the end of the address-literal
	                            if (matchesIP) {
	                                index = matchesIP.index;
	                                if (index !== 0) {
	                                    // Convert IPv4 part to IPv6 format for futher testing
	                                    addressLiteral = addressLiteral.slice(0, index) + '0:0';
	                                }
	                            }

	                            if (index === 0) {
	                                // Nothing there except a valid IPv4 address, so...
	                                updateResult(internals.diagnoses.rfc5321AddressLiteral);
	                            } else if (addressLiteral.slice(0, 5).toLowerCase() !== 'ipv6:') {
	                                updateResult(internals.diagnoses.rfc5322DomainLiteral);
	                            } else {
	                                var match = addressLiteral.slice(5);
	                                var maxGroups = internals.maxIPv6Groups;
	                                var groups = match.split(':');
	                                index = match.indexOf('::');

	                                if (!~index) {
	                                    // Need exactly the right number of groups
	                                    if (groups.length !== maxGroups) {
	                                        updateResult(internals.diagnoses.rfc5322IPv6GroupCount);
	                                    }
	                                } else if (index !== match.lastIndexOf('::')) {
	                                    updateResult(internals.diagnoses.rfc5322IPv62x2xColon);
	                                } else {
	                                    if (index === 0 || index === match.length - 2) {
	                                        // RFC 4291 allows :: at the start or end of an address with 7 other groups in addition
	                                        ++maxGroups;
	                                    }

	                                    if (groups.length > maxGroups) {
	                                        updateResult(internals.diagnoses.rfc5322IPv6MaxGroups);
	                                    } else if (groups.length === maxGroups) {
	                                        // Eliding a single "::"
	                                        updateResult(internals.diagnoses.deprecatedIPv6);
	                                    }
	                                }

	                                // IPv6 testing strategy
	                                if (match[0] === ':' && match[1] !== ':') {
	                                    updateResult(internals.diagnoses.rfc5322IPv6ColonStart);
	                                } else if (match[match.length - 1] === ':' && match[match.length - 2] !== ':') {
	                                    updateResult(internals.diagnoses.rfc5322IPv6ColonEnd);
	                                } else if (internals.checkIpV6(groups)) {
	                                    updateResult(internals.diagnoses.rfc5321AddressLiteral);
	                                } else {
	                                    updateResult(internals.diagnoses.rfc5322IPv6BadCharacter);
	                                }
	                            }
	                        } else {
	                            updateResult(internals.diagnoses.rfc5322DomainLiteral);
	                        }

	                        parseData.domain += token;
	                        atomData.domains[elementCount] += token;
	                        ++elementLength;
	                        context.prev = context.now;
	                        context.now = context.stack.pop();
	                        break;

	                    case '\\':
	                        updateResult(internals.diagnoses.rfc5322DomainLiteralOBSDText);
	                        context.stack.push(context.now);
	                        context.now = internals.components.contextQuotedPair;
	                        break;

	                    // Folding white space
	                    case '\r':
	                        if (emailLength === ++i || email[i] !== '\n') {
	                            updateResult(internals.diagnoses.errCRNoLF);
	                            break;
	                        }

	                    // Fallthrough

	                    case ' ':
	                    case '\t':
	                        updateResult(internals.diagnoses.cfwsFWS);

	                        context.stack.push(context.now);
	                        context.now = internals.components.contextFWS;
	                        prevToken = token;
	                        break;

	                    // DTEXT
	                    default:
	                        // http://tools.ietf.org/html/rfc5322#section-3.4.1
	                        //   dtext         =   %d33-90 /  ; Printable US-ASCII
	                        //                     %d94-126 / ;  characters not including
	                        //                     obs-dtext  ;  "[", "]", or "\"
	                        //
	                        //   obs-dtext     =   obs-NO-WS-CTL / quoted-pair
	                        //
	                        //   obs-NO-WS-CTL =   %d1-8 /    ; US-ASCII control
	                        //                     %d11 /     ;  characters that do not
	                        //                     %d12 /     ;  include the carriage
	                        //                     %d14-31 /  ;  return, line feed, and
	                        //                     %d127      ;  white space characters
	                        charCode = token.charCodeAt(0);

	                        // '\r', '\n', ' ', and '\t' have already been parsed above
	                        if (charCode > 127 || charCode === 0 || token === '[') {
	                            // Fatal error
	                            updateResult(internals.diagnoses.errExpectingDTEXT);
	                            break;
	                        } else if (charCode < 33 || charCode === 127) {
	                            updateResult(internals.diagnoses.rfc5322DomainLiteralOBSDText);
	                        }

	                        parseData.literal += token;
	                        parseData.domain += token;
	                        atomData.domains[elementCount] += token;
	                        ++elementLength;
	                }

	                break;

	            // Quoted string
	            case internals.components.contextQuotedString:
	                // http://tools.ietf.org/html/rfc5322#section-3.2.4
	                //   quoted-string = [CFWS]
	                //                   DQUOTE *([FWS] qcontent) [FWS] DQUOTE
	                //                   [CFWS]
	                //
	                //   qcontent      = qtext / quoted-pair
	                switch (token) {
	                    // Quoted pair
	                    case '\\':
	                        context.stack.push(context.now);
	                        context.now = internals.components.contextQuotedPair;
	                        break;

	                    // Folding white space. Spaces are allowed as regular characters inside a quoted string - it's only FWS if we include '\t' or '\r\n'
	                    case '\r':
	                        if (emailLength === ++i || email[i] !== '\n') {
	                            // Fatal error
	                            updateResult(internals.diagnoses.errCRNoLF);
	                            break;
	                        }

	                    // Fallthrough

	                    case '\t':
	                        // http://tools.ietf.org/html/rfc5322#section-3.2.2
	                        //   Runs of FWS, comment, or CFWS that occur between lexical tokens in
	                        //   a structured header field are semantically interpreted as a single
	                        //   space character.

	                        // http://tools.ietf.org/html/rfc5322#section-3.2.4
	                        //   the CRLF in any FWS/CFWS that appears within the quoted-string [is]
	                        //   semantically "invisible" and therefore not part of the
	                        //   quoted-string

	                        parseData.local += ' ';
	                        atomData.locals[elementCount] += ' ';
	                        ++elementLength;

	                        updateResult(internals.diagnoses.cfwsFWS);
	                        context.stack.push(context.now);
	                        context.now = internals.components.contextFWS;
	                        prevToken = token;
	                        break;

	                    // End of quoted string
	                    case '"':
	                        parseData.local += token;
	                        atomData.locals[elementCount] += token;
	                        ++elementLength;
	                        context.prev = context.now;
	                        context.now = context.stack.pop();
	                        break;

	                    // QTEXT
	                    default:
	                        // http://tools.ietf.org/html/rfc5322#section-3.2.4
	                        //   qtext          =   %d33 /             ; Printable US-ASCII
	                        //                      %d35-91 /          ;  characters not including
	                        //                      %d93-126 /         ;  "\" or the quote character
	                        //                      obs-qtext
	                        //
	                        //   obs-qtext      =   obs-NO-WS-CTL
	                        //
	                        //   obs-NO-WS-CTL  =   %d1-8 /            ; US-ASCII control
	                        //                      %d11 /             ;  characters that do not
	                        //                      %d12 /             ;  include the carriage
	                        //                      %d14-31 /          ;  return, line feed, and
	                        //                      %d127              ;  white space characters
	                        charCode = token.charCodeAt(0);

	                        if (charCode > 127 || charCode === 0 || charCode === 10) {
	                            updateResult(internals.diagnoses.errExpectingQTEXT);
	                        } else if (charCode < 32 || charCode === 127) {
	                            updateResult(internals.diagnoses.deprecatedQTEXT);
	                        }

	                        parseData.local += token;
	                        atomData.locals[elementCount] += token;
	                        ++elementLength;
	                }

	                // http://tools.ietf.org/html/rfc5322#section-3.4.1
	                //   If the string can be represented as a dot-atom (that is, it contains
	                //   no characters other than atext characters or "." surrounded by atext
	                //   characters), then the dot-atom form SHOULD be used and the quoted-
	                //   string form SHOULD NOT be used.

	                break;
	            // Quoted pair
	            case internals.components.contextQuotedPair:
	                // http://tools.ietf.org/html/rfc5322#section-3.2.1
	                //   quoted-pair     =   ("\" (VCHAR / WSP)) / obs-qp
	                //
	                //   VCHAR           =  %d33-126   ; visible (printing) characters
	                //   WSP             =  SP / HTAB  ; white space
	                //
	                //   obs-qp          =   "\" (%d0 / obs-NO-WS-CTL / LF / CR)
	                //
	                //   obs-NO-WS-CTL   =   %d1-8 /   ; US-ASCII control
	                //                       %d11 /    ;  characters that do not
	                //                       %d12 /    ;  include the carriage
	                //                       %d14-31 / ;  return, line feed, and
	                //                       %d127     ;  white space characters
	                //
	                // i.e. obs-qp       =  "\" (%d0-8, %d10-31 / %d127)
	                charCode = token.charCodeAt(0);

	                if (charCode > 127) {
	                    // Fatal error
	                    updateResult(internals.diagnoses.errExpectingQPair);
	                } else if (charCode < 31 && charCode !== 9 || charCode === 127) {
	                    // ' ' and '\t' are allowed
	                    updateResult(internals.diagnoses.deprecatedQP);
	                }

	                // At this point we know where this qpair occurred so we could check to see if the character actually needed to be quoted at all.
	                // http://tools.ietf.org/html/rfc5321#section-4.1.2
	                //   the sending system SHOULD transmit the form that uses the minimum quoting possible.

	                context.prev = context.now;
	                // End of qpair
	                context.now = context.stack.pop();
	                token = '\\' + token;

	                switch (context.now) {
	                    case internals.components.contextComment:
	                        break;

	                    case internals.components.contextQuotedString:
	                        parseData.local += token;
	                        atomData.locals[elementCount] += token;

	                        // The maximum sizes specified by RFC 5321 are octet counts, so we must include the backslash
	                        elementLength += 2;
	                        break;

	                    case internals.components.literal:
	                        parseData.domain += token;
	                        atomData.domains[elementCount] += token;

	                        // The maximum sizes specified by RFC 5321 are octet counts, so we must include the backslash
	                        elementLength += 2;
	                        break;

	                    // $lab:coverage:off$
	                    default:
	                        throw new Error('quoted pair logic invoked in an invalid context: ' + context.now);
	                    // $lab:coverage:on$
	                }
	                break;

	            // Comment
	            case internals.components.contextComment:
	                // http://tools.ietf.org/html/rfc5322#section-3.2.2
	                //   comment  = "(" *([FWS] ccontent) [FWS] ")"
	                //
	                //   ccontent = ctext / quoted-pair / comment
	                switch (token) {
	                    // Nested comment
	                    case '(':
	                        // Nested comments are ok
	                        context.stack.push(context.now);
	                        context.now = internals.components.contextComment;
	                        break;

	                    // End of comment
	                    case ')':
	                        context.prev = context.now;
	                        context.now = context.stack.pop();
	                        break;

	                    // Quoted pair
	                    case '\\':
	                        context.stack.push(context.now);
	                        context.now = internals.components.contextQuotedPair;
	                        break;

	                    // Folding white space
	                    case '\r':
	                        if (emailLength === ++i || email[i] !== '\n') {
	                            // Fatal error
	                            updateResult(internals.diagnoses.errCRNoLF);
	                            break;
	                        }

	                    // Fallthrough

	                    case ' ':
	                    case '\t':
	                        updateResult(internals.diagnoses.cfwsFWS);

	                        context.stack.push(context.now);
	                        context.now = internals.components.contextFWS;
	                        prevToken = token;
	                        break;

	                    // CTEXT
	                    default:
	                        // http://tools.ietf.org/html/rfc5322#section-3.2.3
	                        //   ctext         = %d33-39 /  ; Printable US-ASCII
	                        //                   %d42-91 /  ;  characters not including
	                        //                   %d93-126 / ;  "(", ")", or "\"
	                        //                   obs-ctext
	                        //
	                        //   obs-ctext     = obs-NO-WS-CTL
	                        //
	                        //   obs-NO-WS-CTL = %d1-8 /    ; US-ASCII control
	                        //                   %d11 /     ;  characters that do not
	                        //                   %d12 /     ;  include the carriage
	                        //                   %d14-31 /  ;  return, line feed, and
	                        //                   %d127      ;  white space characters
	                        charCode = token.charCodeAt(0);

	                        if (charCode > 127 || charCode === 0 || charCode === 10) {
	                            // Fatal error
	                            updateResult(internals.diagnoses.errExpectingCTEXT);
	                            break;
	                        } else if (charCode < 32 || charCode === 127) {
	                            updateResult(internals.diagnoses.deprecatedCTEXT);
	                        }
	                }

	                break;

	            // Folding white space
	            case internals.components.contextFWS:
	                // http://tools.ietf.org/html/rfc5322#section-3.2.2
	                //   FWS     =   ([*WSP CRLF] 1*WSP) /  obs-FWS
	                //                                   ; Folding white space

	                // But note the erratum:
	                // http://www.rfc-editor.org/errata_search.php?rfc=5322&eid=1908:
	                //   In the obsolete syntax, any amount of folding white space MAY be
	                //   inserted where the obs-FWS rule is allowed.  This creates the
	                //   possibility of having two consecutive "folds" in a line, and
	                //   therefore the possibility that a line which makes up a folded header
	                //   field could be composed entirely of white space.
	                //
	                //   obs-FWS =   1*([CRLF] WSP)

	                if (prevToken === '\r') {
	                    if (token === '\r') {
	                        // Fatal error
	                        updateResult(internals.diagnoses.errFWSCRLFx2);
	                        break;
	                    }

	                    if (++crlfCount > 1) {
	                        // Multiple folds => obsolete FWS
	                        updateResult(internals.diagnoses.deprecatedFWS);
	                    } else {
	                        crlfCount = 1;
	                    }
	                }

	                switch (token) {
	                    case '\r':
	                        if (emailLength === ++i || email[i] !== '\n') {
	                            // Fatal error
	                            updateResult(internals.diagnoses.errCRNoLF);
	                        }

	                        break;

	                    case ' ':
	                    case '\t':
	                        break;

	                    default:
	                        if (prevToken === '\r') {
	                            // Fatal error
	                            updateResult(internals.diagnoses.errFWSCRLFEnd);
	                        }

	                        crlfCount = 0;

	                        // End of FWS
	                        context.prev = context.now;
	                        context.now = context.stack.pop();

	                        // Look at this token again in the parent context
	                        --i;
	                }

	                prevToken = token;
	                break;

	            // Unexpected context
	            // $lab:coverage:off$
	            default:
	                throw new Error('unknown context: ' + context.now);
	            // $lab:coverage:on$
	        } // Primary state machine

	        if (maxResult > internals.categories.rfc5322) {
	            // Fatal error, no point continuing
	            break;
	        }
	    } // Token loop

	    // Check for errors
	    if (maxResult < internals.categories.rfc5322) {
	        // Fatal errors
	        if (context.now === internals.components.contextQuotedString) {
	            updateResult(internals.diagnoses.errUnclosedQuotedString);
	        } else if (context.now === internals.components.contextQuotedPair) {
	            updateResult(internals.diagnoses.errBackslashEnd);
	        } else if (context.now === internals.components.contextComment) {
	            updateResult(internals.diagnoses.errUnclosedComment);
	        } else if (context.now === internals.components.literal) {
	            updateResult(internals.diagnoses.errUnclosedDomainLiteral);
	        } else if (token === '\r') {
	            updateResult(internals.diagnoses.errFWSCRLFEnd);
	        } else if (parseData.domain.length === 0) {
	            updateResult(internals.diagnoses.errNoDomain);
	        } else if (elementLength === 0) {
	            updateResult(internals.diagnoses.errDotEnd);
	        } else if (hyphenFlag) {
	            updateResult(internals.diagnoses.errDomainHyphenEnd);
	        }

	        // Other errors
	        else if (parseData.domain.length > 255) {
	                // http://tools.ietf.org/html/rfc5321#section-4.5.3.1.2
	                //   The maximum total length of a domain name or number is 255 octets.
	                updateResult(internals.diagnoses.rfc5322DomainTooLong);
	            } else if (parseData.local.length + parseData.domain.length + /* '@' */1 > 254) {
	                // http://tools.ietf.org/html/rfc5321#section-4.1.2
	                //   Forward-path   = Path
	                //
	                //   Path           = "<" [ A-d-l ":" ] Mailbox ">"
	                //
	                // http://tools.ietf.org/html/rfc5321#section-4.5.3.1.3
	                //   The maximum total length of a reverse-path or forward-path is 256 octets (including the punctuation and element separators).
	                //
	                // Thus, even without (obsolete) routing information, the Mailbox can only be 254 characters long. This is confirmed by this verified
	                // erratum to RFC 3696:
	                //
	                // http://www.rfc-editor.org/errata_search.php?rfc=3696&eid=1690
	                //   However, there is a restriction in RFC 2821 on the length of an address in MAIL and RCPT commands of 254 characters.  Since
	                //   addresses that do not fit in those fields are not normally useful, the upper limit on address lengths should normally be considered
	                //   to be 254.
	                updateResult(internals.diagnoses.rfc5322TooLong);
	            } else if (elementLength > 63) {
	                // http://tools.ietf.org/html/rfc1035#section-2.3.4
	                // labels   63 octets or less
	                updateResult(internals.diagnoses.rfc5322LabelTooLong);
	            } else if (options.minDomainAtoms && atomData.domains.length < options.minDomainAtoms) {
	                updateResult(internals.diagnoses.errDomainTooShort);
	            } else if (options.tldWhitelist || options.tldBlacklist) {
	                var tldAtom = atomData.domains[elementCount];

	                if (!internals.validDomain(tldAtom, options)) {
	                    updateResult(internals.diagnoses.errUnknownTLD);
	                }
	            }
	    } // Check for errors

	    var dnsPositive = false;
	    var finishImmediately = false;

	    var finish = function finish() {

	        if (!dnsPositive && maxResult < internals.categories.dnsWarn) {
	            // Per RFC 5321, domain atoms are limited to letter-digit-hyphen, so we only need to check code <= 57 to check for a digit
	            var code = atomData.domains[elementCount].charCodeAt(0);
	            if (code <= 57) {
	                updateResult(internals.diagnoses.rfc5321TLDNumeric);
	            } else if (elementCount === 0) {
	                updateResult(internals.diagnoses.rfc5321TLD);
	            }
	        }

	        if (maxResult < threshold) {
	            maxResult = internals.diagnoses.valid;
	        }

	        var finishResult = diagnose ? maxResult : maxResult < internals.defaultThreshold;

	        if (callback) {
	            if (finishImmediately) {
	                callback(finishResult);
	            } else {
	                internals.defer(callback.bind(null, finishResult));
	            }
	        }

	        return finishResult;
	    }; // Finish

	    if (options.checkDNS && maxResult < internals.categories.dnsWarn) {
	        (function () {
	            // http://tools.ietf.org/html/rfc5321#section-2.3.5
	            //   Names that can be resolved to MX RRs or address (i.e., A or AAAA) RRs (as discussed in Section 5) are permitted, as are CNAME RRs whose
	            //   targets can be resolved, in turn, to MX or address RRs.
	            //
	            // http://tools.ietf.org/html/rfc5321#section-5.1
	            //   The lookup first attempts to locate an MX record associated with the name.  If a CNAME record is found, the resulting name is processed
	            //   as if it were the initial name. ... If an empty list of MXs is returned, the address is treated as if it was associated with an implicit
	            //   MX RR, with a preference of 0, pointing to that host.
	            //
	            // isEmail() author's note: We will regard the existence of a CNAME to be sufficient evidence of the domain's existence. For performance
	            // reasons we will not repeat the DNS lookup for the CNAME's target, but we will raise a warning because we didn't immediately find an MX
	            // record.
	            if (elementCount === 0) {
	                // Checking TLD DNS only works if you explicitly check from the root
	                parseData.domain += '.';
	            }

	            var dnsDomain = parseData.domain;
	            Dns.resolveMx(dnsDomain, function (err, mxRecords) {

	                // If we have a fatal error, then we must assume that there are no records
	                if (err && err.code !== Dns.NODATA) {
	                    updateResult(internals.diagnoses.dnsWarnNoRecord);
	                    return finish();
	                }

	                if (mxRecords && mxRecords.length) {
	                    dnsPositive = true;
	                    return finish();
	                }

	                var count = 3;
	                var done = false;
	                updateResult(internals.diagnoses.dnsWarnNoMXRecord);

	                var handleRecords = function handleRecords(ignoreError, records) {

	                    if (done) {
	                        return;
	                    }

	                    --count;

	                    if (records && records.length) {
	                        done = true;
	                        return finish();
	                    }

	                    if (count === 0) {
	                        // No usable records for the domain can be found
	                        updateResult(internals.diagnoses.dnsWarnNoRecord);
	                        done = true;
	                        finish();
	                    }
	                };

	                Dns.resolveCname(dnsDomain, handleRecords);
	                Dns.resolve4(dnsDomain, handleRecords);
	                Dns.resolve6(dnsDomain, handleRecords);
	            });

	            finishImmediately = true;
	        })();
	    } else {
	        var result = finish();
	        finishImmediately = true;
	        return result;
	    } // CheckDNS
	};

	exports.diagnoses = internals.validate.diagnoses = function () {

	    var diag = {};
	    var keys = Object.keys(internals.diagnoses);
	    for (var i = 0; i < keys.length; ++i) {
	        var key = keys[i];
	        diag[key] = internals.diagnoses[key];
	    }

	    return diag;
	}();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Load modules

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var Any = __webpack_require__(11);
	var Ref = __webpack_require__(12);
	var Hoek = __webpack_require__(2);

	// Declare internals

	var internals = {
	    precisionRx: /(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/
	};

	internals.Number = function (_Any) {
	    _inherits(_class, _Any);

	    function _class() {
	        _classCallCheck(this, _class);

	        var _this = _possibleConstructorReturn(this, _Any.call(this));

	        _this._type = 'number';
	        _this._invalids.add(Infinity);
	        _this._invalids.add(-Infinity);
	        return _this;
	    }

	    _class.prototype._base = function _base(value, state, options) {

	        var result = {
	            errors: null,
	            value: value
	        };

	        if (typeof value === 'string' && options.convert) {

	            var number = parseFloat(value);
	            result.value = isNaN(number) || !isFinite(value) ? NaN : number;
	        }

	        var isNumber = typeof result.value === 'number' && !isNaN(result.value);

	        if (options.convert && 'precision' in this._flags && isNumber) {

	            // This is conceptually equivalent to using toFixed but it should be much faster
	            var precision = Math.pow(10, this._flags.precision);
	            result.value = Math.round(result.value * precision) / precision;
	        }

	        result.errors = isNumber ? null : this.createError('number.base', null, state, options);
	        return result;
	    };

	    _class.prototype.multiple = function multiple(base) {

	        var isRef = Ref.isRef(base);

	        if (!isRef) {
	            Hoek.assert(typeof base === 'number' && isFinite(base), 'multiple must be a number');
	            Hoek.assert(base > 0, 'multiple must be greater than 0');
	        }

	        return this._test('multiple', base, function (value, state, options) {

	            var divisor = isRef ? base(state.reference || state.parent, options) : base;

	            if (isRef && (typeof divisor !== 'number' || !isFinite(divisor))) {
	                return this.createError('number.ref', { ref: base.key }, state, options);
	            }

	            if (value % divisor === 0) {
	                return value;
	            }

	            return this.createError('number.multiple', { multiple: base, value: value }, state, options);
	        });
	    };

	    _class.prototype.integer = function integer() {

	        return this._test('integer', undefined, function (value, state, options) {

	            return Number.isSafeInteger(value) ? value : this.createError('number.integer', { value: value }, state, options);
	        });
	    };

	    _class.prototype.negative = function negative() {

	        return this._test('negative', undefined, function (value, state, options) {

	            if (value < 0) {
	                return value;
	            }

	            return this.createError('number.negative', { value: value }, state, options);
	        });
	    };

	    _class.prototype.positive = function positive() {

	        return this._test('positive', undefined, function (value, state, options) {

	            if (value > 0) {
	                return value;
	            }

	            return this.createError('number.positive', { value: value }, state, options);
	        });
	    };

	    _class.prototype.precision = function precision(limit) {

	        Hoek.assert(Number.isSafeInteger(limit), 'limit must be an integer');
	        Hoek.assert(!('precision' in this._flags), 'precision already set');

	        var obj = this._test('precision', limit, function (value, state, options) {

	            var places = value.toString().match(internals.precisionRx);
	            var decimals = Math.max((places[1] ? places[1].length : 0) - (places[2] ? parseInt(places[2], 10) : 0), 0);
	            if (decimals <= limit) {
	                return value;
	            }

	            return this.createError('number.precision', { limit: limit, value: value }, state, options);
	        });

	        obj._flags.precision = limit;
	        return obj;
	    };

	    return _class;
	}(Any);

	internals.compare = function (type, compare) {

	    return function (limit) {

	        var isRef = Ref.isRef(limit);
	        var isNumber = typeof limit === 'number' && !isNaN(limit);

	        Hoek.assert(isNumber || isRef, 'limit must be a number or reference');

	        return this._test(type, limit, function (value, state, options) {

	            var compareTo = void 0;
	            if (isRef) {
	                compareTo = limit(state.reference || state.parent, options);

	                if (!(typeof compareTo === 'number' && !isNaN(compareTo))) {
	                    return this.createError('number.ref', { ref: limit.key }, state, options);
	                }
	            } else {
	                compareTo = limit;
	            }

	            if (compare(value, compareTo)) {
	                return value;
	            }

	            return this.createError('number.' + type, { limit: compareTo, value: value }, state, options);
	        });
	    };
	};

	internals.Number.prototype.min = internals.compare('min', function (value, limit) {
	    return value >= limit;
	});
	internals.Number.prototype.max = internals.compare('max', function (value, limit) {
	    return value <= limit;
	});
	internals.Number.prototype.greater = internals.compare('greater', function (value, limit) {
	    return value > limit;
	});
	internals.Number.prototype.less = internals.compare('less', function (value, limit) {
	    return value < limit;
	});

	module.exports = new internals.Number();

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Load modules

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var Any = __webpack_require__(11);
	var Hoek = __webpack_require__(2);

	// Declare internals

	var internals = {
	    Set: __webpack_require__(15)
	};

	internals.Boolean = function (_Any) {
	    _inherits(_class, _Any);

	    function _class() {
	        _classCallCheck(this, _class);

	        var _this = _possibleConstructorReturn(this, _Any.call(this));

	        _this._type = 'boolean';
	        _this._flags.insensitive = true;
	        _this._inner.truthySet = new internals.Set();
	        _this._inner.falsySet = new internals.Set();
	        return _this;
	    }

	    _class.prototype._base = function _base(value, state, options) {

	        var result = {
	            value: value
	        };

	        if (typeof value === 'string' && options.convert) {

	            var normalized = this._flags.insensitive ? value.toLowerCase() : value;
	            result.value = normalized === 'true' ? true : normalized === 'false' ? false : value;
	        }

	        if (typeof result.value !== 'boolean') {
	            result.value = this._inner.truthySet.has(value, null, null, this._flags.insensitive) ? true : this._inner.falsySet.has(value, null, null, this._flags.insensitive) ? false : value;
	        }

	        result.errors = typeof result.value === 'boolean' ? null : this.createError('boolean.base', null, state, options);
	        return result;
	    };

	    _class.prototype.truthy = function truthy() {

	        var obj = this.clone();
	        var values = Hoek.flatten(Array.prototype.slice.call(arguments));
	        for (var i = 0; i < values.length; ++i) {
	            var value = values[i];

	            Hoek.assert(value !== undefined, 'Cannot call truthy with undefined');
	            obj._inner.truthySet.add(value);
	        }
	        return obj;
	    };

	    _class.prototype.falsy = function falsy() {

	        var obj = this.clone();
	        var values = Hoek.flatten(Array.prototype.slice.call(arguments));
	        for (var i = 0; i < values.length; ++i) {
	            var value = values[i];

	            Hoek.assert(value !== undefined, 'Cannot call falsy with undefined');
	            obj._inner.falsySet.add(value);
	        }
	        return obj;
	    };

	    _class.prototype.insensitive = function insensitive(enabled) {

	        var insensitive = enabled === undefined ? true : !!enabled;

	        if (this._flags.insensitive === insensitive) {
	            return this;
	        }

	        var obj = this.clone();
	        obj._flags.insensitive = insensitive;
	        return obj;
	    };

	    _class.prototype.describe = function describe() {

	        var description = Any.prototype.describe.call(this);
	        description.truthy = [true].concat(this._inner.truthySet.values());
	        description.falsy = [false].concat(this._inner.falsySet.values());
	        return description;
	    };

	    return _class;
	}(Any);

	module.exports = new internals.Boolean();

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Load modules

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var Hoek = __webpack_require__(2);
	var Any = __webpack_require__(11);
	var Cast = __webpack_require__(16);
	var Ref = __webpack_require__(12);

	// Declare internals

	var internals = {};

	internals.Alternatives = function (_Any) {
	    _inherits(_class, _Any);

	    function _class() {
	        _classCallCheck(this, _class);

	        var _this = _possibleConstructorReturn(this, _Any.call(this));

	        _this._type = 'alternatives';
	        _this._invalids.remove(null);
	        _this._inner.matches = [];
	        return _this;
	    }

	    _class.prototype._base = function _base(value, state, options) {

	        var errors = [];
	        var il = this._inner.matches.length;
	        var baseType = this._baseType;

	        for (var i = 0; i < il; ++i) {
	            var item = this._inner.matches[i];
	            var schema = item.schema;
	            if (!schema) {
	                var failed = item.is._validate(item.ref(state.reference || state.parent, options), null, options, state.parent).errors;

	                if (failed) {
	                    if (item.otherwise) {
	                        return item.otherwise._validate(value, state, options);
	                    }
	                } else if (item.then) {
	                    return item.then._validate(value, state, options);
	                }

	                if (i === il - 1 && baseType) {
	                    return baseType._validate(value, state, options);
	                }

	                continue;
	            }

	            var result = schema._validate(value, state, options);
	            if (!result.errors) {
	                // Found a valid match
	                return result;
	            }

	            errors = errors.concat(result.errors);
	        }

	        if (errors.length) {
	            return { errors: this.createError('alternatives.child', { reason: errors }, state, options) };
	        }

	        return { errors: this.createError('alternatives.base', null, state, options) };
	    };

	    _class.prototype.try = function _try() /* schemas */{

	        var schemas = Hoek.flatten(Array.prototype.slice.call(arguments));
	        Hoek.assert(schemas.length, 'Cannot add other alternatives without at least one schema');

	        var obj = this.clone();

	        for (var i = 0; i < schemas.length; ++i) {
	            var cast = Cast.schema(schemas[i]);
	            if (cast._refs.length) {
	                obj._refs = obj._refs.concat(cast._refs);
	            }
	            obj._inner.matches.push({ schema: cast });
	        }

	        return obj;
	    };

	    _class.prototype.when = function when(ref, options) {

	        Hoek.assert(Ref.isRef(ref) || typeof ref === 'string', 'Invalid reference:', ref);
	        Hoek.assert(options, 'Missing options');
	        Hoek.assert((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object', 'Invalid options');
	        Hoek.assert(options.hasOwnProperty('is'), 'Missing "is" directive');
	        Hoek.assert(options.then !== undefined || options.otherwise !== undefined, 'options must have at least one of "then" or "otherwise"');

	        var obj = this.clone();
	        var is = Cast.schema(options.is);

	        if (options.is === null || !(Ref.isRef(options.is) || options.is instanceof Any)) {

	            // Only apply required if this wasn't already a schema or a ref, we'll suppose people know what they're doing
	            is = is.required();
	        }

	        var item = {
	            ref: Cast.ref(ref),
	            is: is,
	            then: options.then !== undefined ? Cast.schema(options.then) : undefined,
	            otherwise: options.otherwise !== undefined ? Cast.schema(options.otherwise) : undefined
	        };

	        if (obj._baseType) {

	            item.then = item.then && obj._baseType.concat(item.then);
	            item.otherwise = item.otherwise && obj._baseType.concat(item.otherwise);
	        }

	        Ref.push(obj._refs, item.ref);
	        obj._refs = obj._refs.concat(item.is._refs);

	        if (item.then && item.then._refs) {
	            obj._refs = obj._refs.concat(item.then._refs);
	        }

	        if (item.otherwise && item.otherwise._refs) {
	            obj._refs = obj._refs.concat(item.otherwise._refs);
	        }

	        obj._inner.matches.push(item);

	        return obj;
	    };

	    _class.prototype.describe = function describe() {

	        var description = Any.prototype.describe.call(this);
	        var alternatives = [];
	        for (var i = 0; i < this._inner.matches.length; ++i) {
	            var item = this._inner.matches[i];
	            if (item.schema) {

	                // try()

	                alternatives.push(item.schema.describe());
	            } else {

	                // when()

	                var when = {
	                    ref: item.ref.toString(),
	                    is: item.is.describe()
	                };

	                if (item.then) {
	                    when.then = item.then.describe();
	                }

	                if (item.otherwise) {
	                    when.otherwise = item.otherwise.describe();
	                }

	                alternatives.push(when);
	            }
	        }

	        description.alternatives = alternatives;
	        return description;
	    };

	    return _class;
	}(Any);

	module.exports = new internals.Alternatives();

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Load modules

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var Hoek = __webpack_require__(2);
	var Topo = __webpack_require__(27);
	var Any = __webpack_require__(11);
	var Errors = __webpack_require__(13);
	var Cast = __webpack_require__(16);
	var Ref = __webpack_require__(12);

	// Declare internals

	var internals = {};

	internals.Object = function (_Any) {
	    _inherits(_class, _Any);

	    function _class() {
	        _classCallCheck(this, _class);

	        var _this = _possibleConstructorReturn(this, _Any.call(this));

	        _this._type = 'object';
	        _this._inner.children = null;
	        _this._inner.renames = [];
	        _this._inner.dependencies = [];
	        _this._inner.patterns = [];
	        return _this;
	    }

	    _class.prototype._base = function _base(value, state, options) {

	        var target = value;
	        var errors = [];
	        var finish = function finish() {

	            return {
	                value: target,
	                errors: errors.length ? errors : null
	            };
	        };

	        if (typeof value === 'string' && options.convert) {

	            value = internals.safeParse(value);
	        }

	        var type = this._flags.func ? 'function' : 'object';
	        if (!value || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== type || Array.isArray(value)) {

	            errors.push(this.createError(type + '.base', null, state, options));
	            return finish();
	        }

	        // Skip if there are no other rules to test

	        if (!this._inner.renames.length && !this._inner.dependencies.length && !this._inner.children && // null allows any keys
	        !this._inner.patterns.length) {

	            target = value;
	            return finish();
	        }

	        // Ensure target is a local copy (parsed) or shallow copy

	        if (target === value) {
	            if (type === 'object') {
	                target = Object.create(Object.getPrototypeOf(value));
	            } else {
	                target = function target() {

	                    return value.apply(this, arguments);
	                };

	                target.prototype = Hoek.clone(value.prototype);
	            }

	            var valueKeys = Object.keys(value);
	            for (var i = 0; i < valueKeys.length; ++i) {
	                target[valueKeys[i]] = value[valueKeys[i]];
	            }
	        } else {
	            target = value;
	        }

	        // Rename keys

	        var renamed = {};
	        for (var _i = 0; _i < this._inner.renames.length; ++_i) {
	            var rename = this._inner.renames[_i];

	            if (rename.options.ignoreUndefined && target[rename.from] === undefined) {
	                continue;
	            }

	            if (!rename.options.multiple && renamed[rename.to]) {

	                errors.push(this.createError('object.rename.multiple', { from: rename.from, to: rename.to }, state, options));
	                if (options.abortEarly) {
	                    return finish();
	                }
	            }

	            if (Object.prototype.hasOwnProperty.call(target, rename.to) && !rename.options.override && !renamed[rename.to]) {

	                errors.push(this.createError('object.rename.override', { from: rename.from, to: rename.to }, state, options));
	                if (options.abortEarly) {
	                    return finish();
	                }
	            }

	            if (target[rename.from] === undefined) {
	                delete target[rename.to];
	            } else {
	                target[rename.to] = target[rename.from];
	            }

	            renamed[rename.to] = true;

	            if (!rename.options.alias) {
	                delete target[rename.from];
	            }
	        }

	        // Validate schema

	        if (!this._inner.children && // null allows any keys
	        !this._inner.patterns.length && !this._inner.dependencies.length) {

	            return finish();
	        }

	        var unprocessed = Hoek.mapToObject(Object.keys(target));

	        if (this._inner.children) {
	            var stripProps = [];

	            for (var _i2 = 0; _i2 < this._inner.children.length; ++_i2) {
	                var child = this._inner.children[_i2];
	                var key = child.key;
	                var item = target[key];

	                delete unprocessed[key];

	                var localState = { key: key, path: (state.path || '') + (state.path && key ? '.' : '') + key, parent: target, reference: state.reference };
	                var result = child.schema._validate(item, localState, options);
	                if (result.errors) {
	                    errors.push(this.createError('object.child', { key: key, child: child.schema._getLabel(key), reason: result.errors }, localState, options));

	                    if (options.abortEarly) {
	                        return finish();
	                    }
	                } else {
	                    if (child.schema._flags.strip || result.value === undefined && result.value !== item) {
	                        stripProps.push(key);
	                        target[key] = result.finalValue;
	                    } else if (result.value !== undefined) {
	                        target[key] = result.value;
	                    }
	                }
	            }

	            for (var _i3 = 0; _i3 < stripProps.length; ++_i3) {
	                delete target[stripProps[_i3]];
	            }
	        }

	        // Unknown keys

	        var unprocessedKeys = Object.keys(unprocessed);
	        if (unprocessedKeys.length && this._inner.patterns.length) {

	            for (var _i4 = 0; _i4 < unprocessedKeys.length; ++_i4) {
	                var _key = unprocessedKeys[_i4];
	                var _localState = { key: _key, path: (state.path ? state.path + '.' : '') + _key, parent: target, reference: state.reference };
	                var _item = target[_key];

	                for (var j = 0; j < this._inner.patterns.length; ++j) {
	                    var pattern = this._inner.patterns[j];

	                    if (pattern.regex.test(_key)) {
	                        delete unprocessed[_key];

	                        var _result = pattern.rule._validate(_item, _localState, options);
	                        if (_result.errors) {
	                            errors.push(this.createError('object.child', { key: _key, child: pattern.rule._getLabel(_key), reason: _result.errors }, _localState, options));

	                            if (options.abortEarly) {
	                                return finish();
	                            }
	                        }

	                        if (_result.value !== undefined) {
	                            target[_key] = _result.value;
	                        }
	                    }
	                }
	            }

	            unprocessedKeys = Object.keys(unprocessed);
	        }

	        if ((this._inner.children || this._inner.patterns.length) && unprocessedKeys.length) {
	            if (options.stripUnknown && this._flags.allowUnknown !== true || options.skipFunctions) {

	                var stripUnknown = options.stripUnknown ? options.stripUnknown === true ? true : !!options.stripUnknown.objects : false;

	                for (var _i5 = 0; _i5 < unprocessedKeys.length; ++_i5) {
	                    var _key2 = unprocessedKeys[_i5];

	                    if (stripUnknown) {
	                        delete target[_key2];
	                        delete unprocessed[_key2];
	                    } else if (typeof target[_key2] === 'function') {
	                        delete unprocessed[_key2];
	                    }
	                }

	                unprocessedKeys = Object.keys(unprocessed);
	            }

	            if (unprocessedKeys.length && (this._flags.allowUnknown !== undefined ? !this._flags.allowUnknown : !options.allowUnknown)) {

	                for (var _i6 = 0; _i6 < unprocessedKeys.length; ++_i6) {
	                    var unprocessedKey = unprocessedKeys[_i6];
	                    errors.push(this.createError('object.allowUnknown', { child: unprocessedKey }, { key: unprocessedKey, path: state.path + (state.path ? '.' : '') + unprocessedKey }, options));
	                }
	            }
	        }

	        // Validate dependencies

	        for (var _i7 = 0; _i7 < this._inner.dependencies.length; ++_i7) {
	            var dep = this._inner.dependencies[_i7];
	            var err = internals[dep.type].call(this, dep.key !== null && target[dep.key], dep.peers, target, { key: dep.key, path: (state.path || '') + (dep.key ? '.' + dep.key : '') }, options);
	            if (err instanceof Errors.Err) {
	                errors.push(err);
	                if (options.abortEarly) {
	                    return finish();
	                }
	            }
	        }

	        return finish();
	    };

	    _class.prototype._func = function _func() {

	        var obj = this.clone();
	        obj._flags.func = true;
	        return obj;
	    };

	    _class.prototype.keys = function keys(schema) {

	        Hoek.assert(schema === null || schema === undefined || (typeof schema === 'undefined' ? 'undefined' : _typeof(schema)) === 'object', 'Object schema must be a valid object');
	        Hoek.assert(!schema || !(schema instanceof Any), 'Object schema cannot be a joi schema');

	        var obj = this.clone();

	        if (!schema) {
	            obj._inner.children = null;
	            return obj;
	        }

	        var children = Object.keys(schema);

	        if (!children.length) {
	            obj._inner.children = [];
	            return obj;
	        }

	        var topo = new Topo();
	        if (obj._inner.children) {
	            for (var i = 0; i < obj._inner.children.length; ++i) {
	                var child = obj._inner.children[i];

	                // Only add the key if we are not going to replace it later
	                if (children.indexOf(child.key) === -1) {
	                    topo.add(child, { after: child._refs, group: child.key });
	                }
	            }
	        }

	        for (var _i8 = 0; _i8 < children.length; ++_i8) {
	            var key = children[_i8];
	            var _child = schema[key];
	            try {
	                var cast = Cast.schema(_child);
	                topo.add({ key: key, schema: cast }, { after: cast._refs, group: key });
	            } catch (castErr) {
	                if (castErr.hasOwnProperty('path')) {
	                    castErr.path = key + '.' + castErr.path;
	                } else {
	                    castErr.path = key;
	                }
	                throw castErr;
	            }
	        }

	        obj._inner.children = topo.nodes;

	        return obj;
	    };

	    _class.prototype.unknown = function unknown(allow) {

	        var value = allow !== false;

	        if (this._flags.allowUnknown === value) {
	            return this;
	        }

	        var obj = this.clone();
	        obj._flags.allowUnknown = value;
	        return obj;
	    };

	    _class.prototype.length = function length(limit) {

	        Hoek.assert(Number.isSafeInteger(limit) && limit >= 0, 'limit must be a positive integer');

	        return this._test('length', limit, function (value, state, options) {

	            if (Object.keys(value).length === limit) {
	                return value;
	            }

	            return this.createError('object.length', { limit: limit }, state, options);
	        });
	    };

	    _class.prototype.arity = function arity(n) {

	        Hoek.assert(Number.isSafeInteger(n) && n >= 0, 'n must be a positive integer');

	        return this._test('arity', n, function (value, state, options) {

	            if (value.length === n) {
	                return value;
	            }

	            return this.createError('function.arity', { n: n }, state, options);
	        });
	    };

	    _class.prototype.minArity = function minArity(n) {

	        Hoek.assert(Number.isSafeInteger(n) && n > 0, 'n must be a strict positive integer');

	        return this._test('minArity', n, function (value, state, options) {

	            if (value.length >= n) {
	                return value;
	            }

	            return this.createError('function.minArity', { n: n }, state, options);
	        });
	    };

	    _class.prototype.maxArity = function maxArity(n) {

	        Hoek.assert(Number.isSafeInteger(n) && n >= 0, 'n must be a positive integer');

	        return this._test('maxArity', n, function (value, state, options) {

	            if (value.length <= n) {
	                return value;
	            }

	            return this.createError('function.maxArity', { n: n }, state, options);
	        });
	    };

	    _class.prototype.min = function min(limit) {

	        Hoek.assert(Number.isSafeInteger(limit) && limit >= 0, 'limit must be a positive integer');

	        return this._test('min', limit, function (value, state, options) {

	            if (Object.keys(value).length >= limit) {
	                return value;
	            }

	            return this.createError('object.min', { limit: limit }, state, options);
	        });
	    };

	    _class.prototype.max = function max(limit) {

	        Hoek.assert(Number.isSafeInteger(limit) && limit >= 0, 'limit must be a positive integer');

	        return this._test('max', limit, function (value, state, options) {

	            if (Object.keys(value).length <= limit) {
	                return value;
	            }

	            return this.createError('object.max', { limit: limit }, state, options);
	        });
	    };

	    _class.prototype.pattern = function pattern(_pattern, schema) {

	        Hoek.assert(_pattern instanceof RegExp, 'Invalid regular expression');
	        Hoek.assert(schema !== undefined, 'Invalid rule');

	        _pattern = new RegExp(_pattern.source, _pattern.ignoreCase ? 'i' : undefined); // Future version should break this and forbid unsupported regex flags

	        try {
	            schema = Cast.schema(schema);
	        } catch (castErr) {
	            if (castErr.hasOwnProperty('path')) {
	                castErr.message = castErr.message + '(' + castErr.path + ')';
	            }

	            throw castErr;
	        }

	        var obj = this.clone();
	        obj._inner.patterns.push({ regex: _pattern, rule: schema });
	        return obj;
	    };

	    _class.prototype.schema = function schema() {

	        return this._test('schema', null, function (value, state, options) {

	            if (value instanceof Any) {
	                return value;
	            }

	            return this.createError('object.schema', null, state, options);
	        });
	    };

	    _class.prototype.with = function _with(key, peers) {

	        return this._dependency('with', key, peers);
	    };

	    _class.prototype.without = function without(key, peers) {

	        return this._dependency('without', key, peers);
	    };

	    _class.prototype.xor = function xor() {

	        var peers = Hoek.flatten(Array.prototype.slice.call(arguments));
	        return this._dependency('xor', null, peers);
	    };

	    _class.prototype.or = function or() {

	        var peers = Hoek.flatten(Array.prototype.slice.call(arguments));
	        return this._dependency('or', null, peers);
	    };

	    _class.prototype.and = function and() {

	        var peers = Hoek.flatten(Array.prototype.slice.call(arguments));
	        return this._dependency('and', null, peers);
	    };

	    _class.prototype.nand = function nand() {

	        var peers = Hoek.flatten(Array.prototype.slice.call(arguments));
	        return this._dependency('nand', null, peers);
	    };

	    _class.prototype.requiredKeys = function requiredKeys(children) {

	        children = Hoek.flatten(Array.prototype.slice.call(arguments));
	        return this.applyFunctionToChildren(children, 'required');
	    };

	    _class.prototype.optionalKeys = function optionalKeys(children) {

	        children = Hoek.flatten(Array.prototype.slice.call(arguments));
	        return this.applyFunctionToChildren(children, 'optional');
	    };

	    _class.prototype.forbiddenKeys = function forbiddenKeys(children) {

	        children = Hoek.flatten(Array.prototype.slice.call(arguments));
	        return this.applyFunctionToChildren(children, 'forbidden');
	    };

	    _class.prototype.rename = function rename(from, to, options) {

	        Hoek.assert(typeof from === 'string', 'Rename missing the from argument');
	        Hoek.assert(typeof to === 'string', 'Rename missing the to argument');
	        Hoek.assert(to !== from, 'Cannot rename key to same name:', from);

	        for (var i = 0; i < this._inner.renames.length; ++i) {
	            Hoek.assert(this._inner.renames[i].from !== from, 'Cannot rename the same key multiple times');
	        }

	        var obj = this.clone();

	        obj._inner.renames.push({
	            from: from,
	            to: to,
	            options: Hoek.applyToDefaults(internals.renameDefaults, options || {})
	        });

	        return obj;
	    };

	    _class.prototype.applyFunctionToChildren = function applyFunctionToChildren(children, fn, args, root) {

	        children = [].concat(children);
	        Hoek.assert(children.length > 0, 'expected at least one children');

	        var groupedChildren = internals.groupChildren(children);
	        var obj = void 0;

	        if ('' in groupedChildren) {
	            obj = this[fn].apply(this, args);
	            delete groupedChildren[''];
	        } else {
	            obj = this.clone();
	        }

	        if (obj._inner.children) {
	            root = root ? root + '.' : '';

	            for (var i = 0; i < obj._inner.children.length; ++i) {
	                var child = obj._inner.children[i];
	                var group = groupedChildren[child.key];

	                if (group) {
	                    obj._inner.children[i] = {
	                        key: child.key,
	                        _refs: child._refs,
	                        schema: child.schema.applyFunctionToChildren(group, fn, args, root + child.key)
	                    };

	                    delete groupedChildren[child.key];
	                }
	            }
	        }

	        var remaining = Object.keys(groupedChildren);
	        Hoek.assert(remaining.length === 0, 'unknown key(s)', remaining.join(', '));

	        return obj;
	    };

	    _class.prototype._dependency = function _dependency(type, key, peers) {

	        peers = [].concat(peers);
	        for (var i = 0; i < peers.length; ++i) {
	            Hoek.assert(typeof peers[i] === 'string', type, 'peers must be a string or array of strings');
	        }

	        var obj = this.clone();
	        obj._inner.dependencies.push({ type: type, key: key, peers: peers });
	        return obj;
	    };

	    _class.prototype.describe = function describe(shallow) {

	        var description = Any.prototype.describe.call(this);

	        if (description.rules) {
	            for (var i = 0; i < description.rules.length; ++i) {
	                var rule = description.rules[i];
	                // Coverage off for future-proof descriptions, only object().assert() is use right now
	                if ( /* $lab:coverage:off$ */rule.arg && _typeof(rule.arg) === 'object' && rule.arg.schema && rule.arg.ref /* $lab:coverage:on$ */) {
	                        rule.arg = {
	                            schema: rule.arg.schema.describe(),
	                            ref: rule.arg.ref.toString()
	                        };
	                    }
	            }
	        }

	        if (this._inner.children && !shallow) {

	            description.children = {};
	            for (var _i9 = 0; _i9 < this._inner.children.length; ++_i9) {
	                var child = this._inner.children[_i9];
	                description.children[child.key] = child.schema.describe();
	            }
	        }

	        if (this._inner.dependencies.length) {
	            description.dependencies = Hoek.clone(this._inner.dependencies);
	        }

	        if (this._inner.patterns.length) {
	            description.patterns = [];

	            for (var _i10 = 0; _i10 < this._inner.patterns.length; ++_i10) {
	                var pattern = this._inner.patterns[_i10];
	                description.patterns.push({ regex: pattern.regex.toString(), rule: pattern.rule.describe() });
	            }
	        }

	        if (this._inner.renames.length > 0) {
	            description.renames = Hoek.clone(this._inner.renames);
	        }

	        return description;
	    };

	    _class.prototype.assert = function assert(ref, schema, message) {

	        ref = Cast.ref(ref);
	        Hoek.assert(ref.isContext || ref.depth > 1, 'Cannot use assertions for root level references - use direct key rules instead');
	        message = message || 'pass the assertion test';

	        try {
	            schema = Cast.schema(schema);
	        } catch (castErr) {
	            if (castErr.hasOwnProperty('path')) {
	                castErr.message = castErr.message + '(' + castErr.path + ')';
	            }

	            throw castErr;
	        }

	        var key = ref.path[ref.path.length - 1];
	        var path = ref.path.join('.');

	        return this._test('assert', { schema: schema, ref: ref }, function (value, state, options) {

	            var result = schema._validate(ref(value), null, options, value);
	            if (!result.errors) {
	                return value;
	            }

	            var localState = Hoek.merge({}, state);
	            localState.key = key;
	            localState.path = path;
	            return this.createError('object.assert', { ref: localState.path, message: message }, localState, options);
	        });
	    };

	    _class.prototype.type = function type(constructor, name) {

	        Hoek.assert(typeof constructor === 'function', 'type must be a constructor function');
	        var typeData = {
	            name: name || constructor.name,
	            ctor: constructor
	        };

	        return this._test('type', typeData, function (value, state, options) {

	            if (value instanceof constructor) {
	                return value;
	            }

	            return this.createError('object.type', { type: typeData.name }, state, options);
	        });
	    };

	    _class.prototype.ref = function ref() {

	        return this._test('ref', null, function (value, state, options) {

	            if (Ref.isRef(value)) {
	                return value;
	            }

	            return this.createError('function.ref', null, state, options);
	        });
	    };

	    return _class;
	}(Any);

	internals.safeParse = function (value) {

	    try {
	        return JSON.parse(value);
	    } catch (parseErr) {}

	    return value;
	};

	internals.renameDefaults = {
	    alias: false, // Keep old value in place
	    multiple: false, // Allow renaming multiple keys into the same target
	    override: false // Overrides an existing key
	};

	internals.groupChildren = function (children) {

	    children.sort();

	    var grouped = {};

	    for (var i = 0; i < children.length; ++i) {
	        var child = children[i];
	        Hoek.assert(typeof child === 'string', 'children must be strings');
	        var group = child.split('.')[0];
	        var childGroup = grouped[group] = grouped[group] || [];
	        childGroup.push(child.substring(group.length + 1));
	    }

	    return grouped;
	};

	internals.keysToLabels = function (schema, keys) {

	    var children = schema._inner.children;

	    if (!children) {
	        return keys;
	    }

	    var findLabel = function findLabel(key) {

	        var matchingChild = children.find(function (child) {
	            return child.key === key;
	        });
	        return matchingChild ? matchingChild.schema._getLabel(key) : key;
	    };

	    if (Array.isArray(keys)) {
	        return keys.map(findLabel);
	    }

	    return findLabel(keys);
	};

	internals.with = function (value, peers, parent, state, options) {

	    if (value === undefined) {
	        return value;
	    }

	    for (var i = 0; i < peers.length; ++i) {
	        var peer = peers[i];
	        if (!Object.prototype.hasOwnProperty.call(parent, peer) || parent[peer] === undefined) {

	            return this.createError('object.with', {
	                main: state.key,
	                mainWithLabel: internals.keysToLabels(this, state.key),
	                peer: peer,
	                peerWithLabel: internals.keysToLabels(this, peer)
	            }, state, options);
	        }
	    }

	    return value;
	};

	internals.without = function (value, peers, parent, state, options) {

	    if (value === undefined) {
	        return value;
	    }

	    for (var i = 0; i < peers.length; ++i) {
	        var peer = peers[i];
	        if (Object.prototype.hasOwnProperty.call(parent, peer) && parent[peer] !== undefined) {

	            return this.createError('object.without', {
	                main: state.key,
	                mainWithLabel: internals.keysToLabels(this, state.key),
	                peer: peer,
	                peerWithLabel: internals.keysToLabels(this, peer)
	            }, state, options);
	        }
	    }

	    return value;
	};

	internals.xor = function (value, peers, parent, state, options) {

	    var present = [];
	    for (var i = 0; i < peers.length; ++i) {
	        var peer = peers[i];
	        if (Object.prototype.hasOwnProperty.call(parent, peer) && parent[peer] !== undefined) {

	            present.push(peer);
	        }
	    }

	    if (present.length === 1) {
	        return value;
	    }

	    var context = { peers: peers, peersWithLabels: internals.keysToLabels(this, peers) };

	    if (present.length === 0) {
	        return this.createError('object.missing', context, state, options);
	    }

	    return this.createError('object.xor', context, state, options);
	};

	internals.or = function (value, peers, parent, state, options) {

	    for (var i = 0; i < peers.length; ++i) {
	        var peer = peers[i];
	        if (Object.prototype.hasOwnProperty.call(parent, peer) && parent[peer] !== undefined) {
	            return value;
	        }
	    }

	    return this.createError('object.missing', {
	        peers: peers,
	        peersWithLabels: internals.keysToLabels(this, peers)
	    }, state, options);
	};

	internals.and = function (value, peers, parent, state, options) {

	    var missing = [];
	    var present = [];
	    var count = peers.length;
	    for (var i = 0; i < count; ++i) {
	        var peer = peers[i];
	        if (!Object.prototype.hasOwnProperty.call(parent, peer) || parent[peer] === undefined) {

	            missing.push(peer);
	        } else {
	            present.push(peer);
	        }
	    }

	    var aon = missing.length === count || present.length === count;

	    if (!aon) {

	        return this.createError('object.and', {
	            present: present,
	            presentWithLabels: internals.keysToLabels(this, present),
	            missing: missing,
	            missingWithLabels: internals.keysToLabels(this, missing)
	        }, state, options);
	    }
	};

	internals.nand = function (value, peers, parent, state, options) {

	    var present = [];
	    for (var i = 0; i < peers.length; ++i) {
	        var peer = peers[i];
	        if (Object.prototype.hasOwnProperty.call(parent, peer) && parent[peer] !== undefined) {

	            present.push(peer);
	        }
	    }

	    var values = Hoek.clone(peers);
	    var main = values.splice(0, 1)[0];
	    var allPresent = present.length === peers.length;
	    return allPresent ? this.createError('object.nand', {
	        main: main,
	        mainWithLabel: internals.keysToLabels(this, main),
	        peers: values,
	        peersWithLabels: internals.keysToLabels(this, values)
	    }, state, options) : null;
	};

	module.exports = new internals.Object();

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Load modules

	var Hoek = __webpack_require__(2);

	// Declare internals

	var internals = {};

	exports = module.exports = internals.Topo = function () {

	    this._items = [];
	    this.nodes = [];
	};

	internals.Topo.prototype.add = function (nodes, options) {
	    var _this = this;

	    options = options || {};

	    // Validate rules

	    var before = [].concat(options.before || []);
	    var after = [].concat(options.after || []);
	    var group = options.group || '?';
	    var sort = options.sort || 0; // Used for merging only

	    Hoek.assert(before.indexOf(group) === -1, 'Item cannot come before itself:', group);
	    Hoek.assert(before.indexOf('?') === -1, 'Item cannot come before unassociated items');
	    Hoek.assert(after.indexOf(group) === -1, 'Item cannot come after itself:', group);
	    Hoek.assert(after.indexOf('?') === -1, 'Item cannot come after unassociated items');

	    [].concat(nodes).forEach(function (node, i) {

	        var item = {
	            seq: _this._items.length,
	            sort: sort,
	            before: before,
	            after: after,
	            group: group,
	            node: node
	        };

	        _this._items.push(item);
	    });

	    // Insert event

	    var error = this._sort();
	    Hoek.assert(!error, 'item', group !== '?' ? 'added into group ' + group : '', 'created a dependencies error');

	    return this.nodes;
	};

	internals.Topo.prototype.merge = function (others) {

	    others = [].concat(others);
	    for (var i = 0; i < others.length; ++i) {
	        var other = others[i];
	        if (other) {
	            for (var j = 0; j < other._items.length; ++j) {
	                var item = Hoek.shallow(other._items[j]);
	                this._items.push(item);
	            }
	        }
	    }

	    // Sort items

	    this._items.sort(internals.mergeSort);
	    for (var _i = 0; _i < this._items.length; ++_i) {
	        this._items[_i].seq = _i;
	    }

	    var error = this._sort();
	    Hoek.assert(!error, 'merge created a dependencies error');

	    return this.nodes;
	};

	internals.mergeSort = function (a, b) {

	    return a.sort === b.sort ? 0 : a.sort < b.sort ? -1 : 1;
	};

	internals.Topo.prototype._sort = function () {

	    // Construct graph

	    var graph = {};
	    var graphAfters = Object.create(null); // A prototype can bungle lookups w/ false positives
	    var groups = Object.create(null);

	    for (var i = 0; i < this._items.length; ++i) {
	        var item = this._items[i];
	        var seq = item.seq; // Unique across all items
	        var group = item.group;

	        // Determine Groups

	        groups[group] = groups[group] || [];
	        groups[group].push(seq);

	        // Build intermediary graph using 'before'

	        graph[seq] = item.before;

	        // Build second intermediary graph with 'after'

	        var after = item.after;
	        for (var j = 0; j < after.length; ++j) {
	            graphAfters[after[j]] = (graphAfters[after[j]] || []).concat(seq);
	        }
	    }

	    // Expand intermediary graph

	    var graphNodes = Object.keys(graph);
	    for (var _i2 = 0; _i2 < graphNodes.length; ++_i2) {
	        var node = graphNodes[_i2];
	        var expandedGroups = [];

	        var graphNodeItems = Object.keys(graph[node]);
	        for (var _j = 0; _j < graphNodeItems.length; ++_j) {
	            var _group = graph[node][graphNodeItems[_j]];
	            groups[_group] = groups[_group] || [];

	            for (var k = 0; k < groups[_group].length; ++k) {
	                expandedGroups.push(groups[_group][k]);
	            }
	        }
	        graph[node] = expandedGroups;
	    }

	    // Merge intermediary graph using graphAfters into final graph

	    var afterNodes = Object.keys(graphAfters);
	    for (var _i3 = 0; _i3 < afterNodes.length; ++_i3) {
	        var _group2 = afterNodes[_i3];

	        if (groups[_group2]) {
	            for (var _j2 = 0; _j2 < groups[_group2].length; ++_j2) {
	                var _node = groups[_group2][_j2];
	                graph[_node] = graph[_node].concat(graphAfters[_group2]);
	            }
	        }
	    }

	    // Compile ancestors

	    var children = void 0;
	    var ancestors = {};
	    graphNodes = Object.keys(graph);
	    for (var _i4 = 0; _i4 < graphNodes.length; ++_i4) {
	        var _node2 = graphNodes[_i4];
	        children = graph[_node2];

	        for (var _j3 = 0; _j3 < children.length; ++_j3) {
	            ancestors[children[_j3]] = (ancestors[children[_j3]] || []).concat(_node2);
	        }
	    }

	    // Topo sort

	    var visited = {};
	    var sorted = [];

	    for (var _i5 = 0; _i5 < this._items.length; ++_i5) {
	        var next = _i5;

	        if (ancestors[_i5]) {
	            next = null;
	            for (var _j4 = 0; _j4 < this._items.length; ++_j4) {
	                if (visited[_j4] === true) {
	                    continue;
	                }

	                if (!ancestors[_j4]) {
	                    ancestors[_j4] = [];
	                }

	                var shouldSeeCount = ancestors[_j4].length;
	                var seenCount = 0;
	                for (var _k = 0; _k < shouldSeeCount; ++_k) {
	                    if (sorted.indexOf(ancestors[_j4][_k]) >= 0) {
	                        ++seenCount;
	                    }
	                }

	                if (seenCount === shouldSeeCount) {
	                    next = _j4;
	                    break;
	                }
	            }
	        }

	        if (next !== null) {
	            next = next.toString(); // Normalize to string TODO: replace with seq
	            visited[next] = true;
	            sorted.push(next);
	        }
	    }

	    if (sorted.length !== this._items.length) {
	        return new Error('Invalid dependencies');
	    }

	    var seqIndex = {};
	    for (var _i6 = 0; _i6 < this._items.length; ++_i6) {
	        var _item = this._items[_i6];
	        seqIndex[_item.seq] = _item;
	    }

	    var sortedNodes = [];
	    this._items = sorted.map(function (value) {

	        var sortedItem = seqIndex[value];
	        sortedNodes.push(sortedItem.node);
	        return sortedItem;
	    });

	    this.nodes = sortedNodes;
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Load modules

	var Joi = __webpack_require__(1);

	// Declare internals

	var internals = {};

	exports.options = Joi.object({
	    abortEarly: Joi.boolean(),
	    convert: Joi.boolean(),
	    allowUnknown: Joi.boolean(),
	    skipFunctions: Joi.boolean(),
	    stripUnknown: [Joi.boolean(), Joi.object({ arrays: Joi.boolean(), objects: Joi.boolean() }).or('arrays', 'objects')],
	    language: Joi.object(),
	    presence: Joi.string().only('required', 'optional', 'forbidden', 'ignore'),
	    raw: Joi.boolean(),
	    context: Joi.object(),
	    strip: Joi.boolean(),
	    noDefaults: Joi.boolean()
	}).strict();

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Load modules

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var Any = __webpack_require__(11);
	var Hoek = __webpack_require__(2);

	// Declare internals

	var internals = {};

	internals.Lazy = function (_Any) {
	    _inherits(_class, _Any);

	    function _class() {
	        _classCallCheck(this, _class);

	        var _this = _possibleConstructorReturn(this, _Any.call(this));

	        _this._type = 'lazy';
	        return _this;
	    }

	    _class.prototype._base = function _base(value, state, options) {

	        var result = { value: value };
	        var lazy = this._flags.lazy;

	        if (!lazy) {
	            result.errors = this.createError('lazy.base', null, state, options);
	            return result;
	        }

	        var schema = lazy();

	        if (!(schema instanceof Any)) {
	            result.errors = this.createError('lazy.schema', null, state, options);
	            return result;
	        }

	        return schema._validate(value, state, options);
	    };

	    _class.prototype.set = function set(fn) {

	        Hoek.assert(typeof fn === 'function', 'You must provide a function as first argument');

	        var obj = this.clone();
	        obj._flags.lazy = fn;
	        return obj;
	    };

	    return _class;
	}(Any);

	module.exports = new internals.Lazy();

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Load modules

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var Any = __webpack_require__(11);
	var Cast = __webpack_require__(16);
	var Ref = __webpack_require__(12);
	var Hoek = __webpack_require__(2);

	// Declare internals

	var internals = {};

	internals.fastSplice = function (arr, i) {

	    var pos = i;
	    while (pos < arr.length) {
	        arr[pos++] = arr[pos];
	    }

	    --arr.length;
	};

	internals.Array = function (_Any) {
	    _inherits(_class, _Any);

	    function _class() {
	        _classCallCheck(this, _class);

	        var _this = _possibleConstructorReturn(this, _Any.call(this));

	        _this._type = 'array';
	        _this._inner.items = [];
	        _this._inner.ordereds = [];
	        _this._inner.inclusions = [];
	        _this._inner.exclusions = [];
	        _this._inner.requireds = [];
	        _this._flags.sparse = false;
	        return _this;
	    }

	    _class.prototype._base = function _base(value, state, options) {

	        var result = {
	            value: value
	        };

	        if (typeof value === 'string' && options.convert) {

	            internals.safeParse(value, result);
	        }

	        var isArray = Array.isArray(result.value);
	        var wasArray = isArray;
	        if (options.convert && this._flags.single && !isArray) {
	            result.value = [result.value];
	            isArray = true;
	        }

	        if (!isArray) {
	            result.errors = this.createError('array.base', null, state, options);
	            return result;
	        }

	        if (this._inner.inclusions.length || this._inner.exclusions.length || this._inner.requireds.length || this._inner.ordereds.length || !this._flags.sparse) {

	            // Clone the array so that we don't modify the original
	            if (wasArray) {
	                result.value = result.value.slice(0);
	            }

	            result.errors = this._checkItems.call(this, result.value, wasArray, state, options);

	            if (result.errors && wasArray && options.convert && this._flags.single) {

	                // Attempt a 2nd pass by putting the array inside one.
	                var previousErrors = result.errors;

	                result.value = [result.value];
	                result.errors = this._checkItems.call(this, result.value, wasArray, state, options);

	                if (result.errors) {

	                    // Restore previous errors and value since this didn't validate either.
	                    result.errors = previousErrors;
	                    result.value = result.value[0];
	                }
	            }
	        }

	        return result;
	    };

	    _class.prototype._checkItems = function _checkItems(items, wasArray, state, options) {

	        var errors = [];
	        var errored = void 0;

	        var requireds = this._inner.requireds.slice();
	        var ordereds = this._inner.ordereds.slice();
	        var inclusions = this._inner.inclusions.concat(requireds);

	        var il = items.length;
	        for (var i = 0; i < il; ++i) {
	            errored = false;
	            var item = items[i];
	            var isValid = false;
	            var key = wasArray ? i : state.key;
	            var path = wasArray ? (state.path ? state.path + '.' : '') + i : state.path;
	            var localState = { key: key, path: path, parent: state.parent, reference: state.reference };
	            var res = void 0;

	            // Sparse

	            if (!this._flags.sparse && item === undefined) {
	                errors.push(this.createError('array.sparse', null, { key: state.key, path: localState.path, pos: i }, options));

	                if (options.abortEarly) {
	                    return errors;
	                }

	                continue;
	            }

	            // Exclusions

	            for (var j = 0; j < this._inner.exclusions.length; ++j) {
	                res = this._inner.exclusions[j]._validate(item, localState, {}); // Not passing options to use defaults

	                if (!res.errors) {
	                    errors.push(this.createError(wasArray ? 'array.excludes' : 'array.excludesSingle', { pos: i, value: item }, { key: state.key, path: localState.path }, options));
	                    errored = true;

	                    if (options.abortEarly) {
	                        return errors;
	                    }

	                    break;
	                }
	            }

	            if (errored) {
	                continue;
	            }

	            // Ordered
	            if (this._inner.ordereds.length) {
	                if (ordereds.length > 0) {
	                    var ordered = ordereds.shift();
	                    res = ordered._validate(item, localState, options);
	                    if (!res.errors) {
	                        if (ordered._flags.strip) {
	                            internals.fastSplice(items, i);
	                            --i;
	                            --il;
	                        } else if (!this._flags.sparse && res.value === undefined) {
	                            errors.push(this.createError('array.sparse', null, { key: state.key, path: localState.path, pos: i }, options));

	                            if (options.abortEarly) {
	                                return errors;
	                            }

	                            continue;
	                        } else {
	                            items[i] = res.value;
	                        }
	                    } else {
	                        errors.push(this.createError('array.ordered', { pos: i, reason: res.errors, value: item }, { key: state.key, path: localState.path }, options));
	                        if (options.abortEarly) {
	                            return errors;
	                        }
	                    }
	                    continue;
	                } else if (!this._inner.items.length) {
	                    errors.push(this.createError('array.orderedLength', { pos: i, limit: this._inner.ordereds.length }, { key: state.key, path: localState.path }, options));
	                    if (options.abortEarly) {
	                        return errors;
	                    }
	                    continue;
	                }
	            }

	            // Requireds

	            var requiredChecks = [];
	            var jl = requireds.length;
	            for (var _j = 0; _j < jl; ++_j) {
	                res = requiredChecks[_j] = requireds[_j]._validate(item, localState, options);
	                if (!res.errors) {
	                    items[i] = res.value;
	                    isValid = true;
	                    internals.fastSplice(requireds, _j);
	                    --_j;
	                    --jl;

	                    if (!this._flags.sparse && res.value === undefined) {
	                        errors.push(this.createError('array.sparse', null, { key: state.key, path: localState.path, pos: i }, options));

	                        if (options.abortEarly) {
	                            return errors;
	                        }
	                    }

	                    break;
	                }
	            }

	            if (isValid) {
	                continue;
	            }

	            // Inclusions

	            var stripUnknown = options.stripUnknown ? options.stripUnknown === true ? true : !!options.stripUnknown.arrays : false;

	            jl = inclusions.length;
	            for (var _j2 = 0; _j2 < jl; ++_j2) {
	                var inclusion = inclusions[_j2];

	                // Avoid re-running requireds that already didn't match in the previous loop
	                var previousCheck = requireds.indexOf(inclusion);
	                if (previousCheck !== -1) {
	                    res = requiredChecks[previousCheck];
	                } else {
	                    res = inclusion._validate(item, localState, options);

	                    if (!res.errors) {
	                        if (inclusion._flags.strip) {
	                            internals.fastSplice(items, i);
	                            --i;
	                            --il;
	                        } else if (!this._flags.sparse && res.value === undefined) {
	                            errors.push(this.createError('array.sparse', null, { key: state.key, path: localState.path, pos: i }, options));
	                            errored = true;
	                        } else {
	                            items[i] = res.value;
	                        }
	                        isValid = true;
	                        break;
	                    }
	                }

	                // Return the actual error if only one inclusion defined
	                if (jl === 1) {
	                    if (stripUnknown) {
	                        internals.fastSplice(items, i);
	                        --i;
	                        --il;
	                        isValid = true;
	                        break;
	                    }

	                    errors.push(this.createError(wasArray ? 'array.includesOne' : 'array.includesOneSingle', { pos: i, reason: res.errors, value: item }, { key: state.key, path: localState.path }, options));
	                    errored = true;

	                    if (options.abortEarly) {
	                        return errors;
	                    }

	                    break;
	                }
	            }

	            if (errored) {
	                continue;
	            }

	            if (this._inner.inclusions.length && !isValid) {
	                if (stripUnknown) {
	                    internals.fastSplice(items, i);
	                    --i;
	                    --il;
	                    continue;
	                }

	                errors.push(this.createError(wasArray ? 'array.includes' : 'array.includesSingle', { pos: i, value: item }, { key: state.key, path: localState.path }, options));

	                if (options.abortEarly) {
	                    return errors;
	                }
	            }
	        }

	        if (requireds.length) {
	            this._fillMissedErrors.call(this, errors, requireds, state, options);
	        }

	        if (ordereds.length) {
	            this._fillOrderedErrors.call(this, errors, ordereds, state, options);
	        }

	        return errors.length ? errors : null;
	    };

	    _class.prototype.describe = function describe() {

	        var description = Any.prototype.describe.call(this);

	        if (this._inner.ordereds.length) {
	            description.orderedItems = [];

	            for (var i = 0; i < this._inner.ordereds.length; ++i) {
	                description.orderedItems.push(this._inner.ordereds[i].describe());
	            }
	        }

	        if (this._inner.items.length) {
	            description.items = [];

	            for (var _i = 0; _i < this._inner.items.length; ++_i) {
	                description.items.push(this._inner.items[_i].describe());
	            }
	        }

	        return description;
	    };

	    _class.prototype.items = function items() {

	        var obj = this.clone();

	        Hoek.flatten(Array.prototype.slice.call(arguments)).forEach(function (type, index) {

	            try {
	                type = Cast.schema(type);
	            } catch (castErr) {
	                if (castErr.hasOwnProperty('path')) {
	                    castErr.path = index + '.' + castErr.path;
	                } else {
	                    castErr.path = index;
	                }
	                castErr.message = castErr.message + '(' + castErr.path + ')';
	                throw castErr;
	            }

	            obj._inner.items.push(type);

	            if (type._flags.presence === 'required') {
	                obj._inner.requireds.push(type);
	            } else if (type._flags.presence === 'forbidden') {
	                obj._inner.exclusions.push(type.optional());
	            } else {
	                obj._inner.inclusions.push(type);
	            }
	        });

	        return obj;
	    };

	    _class.prototype.ordered = function ordered() {

	        var obj = this.clone();

	        Hoek.flatten(Array.prototype.slice.call(arguments)).forEach(function (type, index) {

	            try {
	                type = Cast.schema(type);
	            } catch (castErr) {
	                if (castErr.hasOwnProperty('path')) {
	                    castErr.path = index + '.' + castErr.path;
	                } else {
	                    castErr.path = index;
	                }
	                castErr.message = castErr.message + '(' + castErr.path + ')';
	                throw castErr;
	            }
	            obj._inner.ordereds.push(type);
	        });

	        return obj;
	    };

	    _class.prototype.min = function min(limit) {

	        var isRef = Ref.isRef(limit);

	        Hoek.assert(Number.isSafeInteger(limit) && limit >= 0 || isRef, 'limit must be a positive integer or reference');

	        return this._test('min', limit, function (value, state, options) {

	            var compareTo = void 0;
	            if (isRef) {
	                compareTo = limit(state.reference || state.parent, options);

	                if (!(Number.isSafeInteger(compareTo) && compareTo >= 0)) {
	                    return this.createError('array.ref', { ref: limit.key }, state, options);
	                }
	            } else {
	                compareTo = limit;
	            }

	            if (value.length >= compareTo) {
	                return value;
	            }

	            return this.createError('array.min', { limit: limit, value: value }, state, options);
	        });
	    };

	    _class.prototype.max = function max(limit) {

	        var isRef = Ref.isRef(limit);

	        Hoek.assert(Number.isSafeInteger(limit) && limit >= 0 || isRef, 'limit must be a positive integer or reference');

	        return this._test('max', limit, function (value, state, options) {

	            var compareTo = void 0;
	            if (isRef) {
	                compareTo = limit(state.reference || state.parent, options);

	                if (!(Number.isSafeInteger(compareTo) && compareTo >= 0)) {
	                    return this.createError('array.ref', { ref: limit.key }, state, options);
	                }
	            } else {
	                compareTo = limit;
	            }

	            if (value.length <= compareTo) {
	                return value;
	            }

	            return this.createError('array.max', { limit: limit, value: value }, state, options);
	        });
	    };

	    _class.prototype.length = function length(limit) {

	        var isRef = Ref.isRef(limit);

	        Hoek.assert(Number.isSafeInteger(limit) && limit >= 0 || isRef, 'limit must be a positive integer or reference');

	        return this._test('length', limit, function (value, state, options) {

	            var compareTo = void 0;
	            if (isRef) {
	                compareTo = limit(state.reference || state.parent, options);

	                if (!(Number.isSafeInteger(compareTo) && compareTo >= 0)) {
	                    return this.createError('array.ref', { ref: limit.key }, state, options);
	                }
	            } else {
	                compareTo = limit;
	            }

	            if (value.length === compareTo) {
	                return value;
	            }

	            return this.createError('array.length', { limit: limit, value: value }, state, options);
	        });
	    };

	    _class.prototype.unique = function unique(comparator) {

	        Hoek.assert(comparator === undefined || typeof comparator === 'function' || typeof comparator === 'string', 'comparator must be a function or a string');

	        var settings = {};

	        if (typeof comparator === 'string') {
	            settings.path = comparator;
	        } else if (typeof comparator === 'function') {
	            settings.comparator = comparator;
	        }

	        return this._test('unique', settings, function (value, state, options) {

	            var found = {
	                string: {},
	                number: {},
	                undefined: {},
	                boolean: {},
	                object: new Map(),
	                function: new Map(),
	                custom: new Map()
	            };

	            var compare = settings.comparator || Hoek.deepEqual;

	            for (var i = 0; i < value.length; ++i) {
	                var item = settings.path ? Hoek.reach(value[i], settings.path) : value[i];
	                var records = settings.comparator ? found.custom : found[typeof item === 'undefined' ? 'undefined' : _typeof(item)];

	                // All available types are supported, so it's not possible to reach 100% coverage without ignoring this line.
	                // I still want to keep the test for future js versions with new types (eg. Symbol).
	                if ( /* $lab:coverage:off$ */records /* $lab:coverage:on$ */) {
	                        if (records instanceof Map) {
	                            var entries = records.entries();
	                            var current = void 0;
	                            while (!(current = entries.next()).done) {
	                                if (compare(current.value[0], item)) {
	                                    var localState = {
	                                        key: state.key,
	                                        path: (state.path ? state.path + '.' : '') + i,
	                                        parent: state.parent,
	                                        reference: state.reference
	                                    };

	                                    var context = {
	                                        pos: i,
	                                        value: value[i],
	                                        dupePos: current.value[1],
	                                        dupeValue: value[current.value[1]]
	                                    };

	                                    if (settings.path) {
	                                        context.path = settings.path;
	                                    }

	                                    return this.createError('array.unique', context, localState, options);
	                                }
	                            }

	                            records.set(item, i);
	                        } else {
	                            if (records[item] !== undefined) {
	                                var _localState = {
	                                    key: state.key,
	                                    path: (state.path ? state.path + '.' : '') + i,
	                                    parent: state.parent,
	                                    reference: state.reference
	                                };

	                                var _context = {
	                                    pos: i,
	                                    value: value[i],
	                                    dupePos: records[item],
	                                    dupeValue: value[records[item]]
	                                };

	                                if (settings.path) {
	                                    _context.path = settings.path;
	                                }

	                                return this.createError('array.unique', _context, _localState, options);
	                            }

	                            records[item] = i;
	                        }
	                    }
	            }

	            return value;
	        });
	    };

	    _class.prototype.sparse = function sparse(enabled) {

	        var value = enabled === undefined ? true : !!enabled;

	        if (this._flags.sparse === value) {
	            return this;
	        }

	        var obj = this.clone();
	        obj._flags.sparse = value;
	        return obj;
	    };

	    _class.prototype.single = function single(enabled) {

	        var value = enabled === undefined ? true : !!enabled;

	        if (this._flags.single === value) {
	            return this;
	        }

	        var obj = this.clone();
	        obj._flags.single = value;
	        return obj;
	    };

	    _class.prototype._fillMissedErrors = function _fillMissedErrors(errors, requireds, state, options) {

	        var knownMisses = [];
	        var unknownMisses = 0;
	        for (var i = 0; i < requireds.length; ++i) {
	            var label = requireds[i]._getLabel();
	            if (label) {
	                knownMisses.push(label);
	            } else {
	                ++unknownMisses;
	            }
	        }

	        if (knownMisses.length) {
	            if (unknownMisses) {
	                errors.push(this.createError('array.includesRequiredBoth', { knownMisses: knownMisses, unknownMisses: unknownMisses }, { key: state.key, path: state.path }, options));
	            } else {
	                errors.push(this.createError('array.includesRequiredKnowns', { knownMisses: knownMisses }, { key: state.key, path: state.path }, options));
	            }
	        } else {
	            errors.push(this.createError('array.includesRequiredUnknowns', { unknownMisses: unknownMisses }, { key: state.key, path: state.path }, options));
	        }
	    };

	    _class.prototype._fillOrderedErrors = function _fillOrderedErrors(errors, ordereds, state, options) {

	        var requiredOrdereds = [];

	        for (var i = 0; i < ordereds.length; ++i) {
	            var presence = Hoek.reach(ordereds[i], '_flags.presence');
	            if (presence === 'required') {
	                requiredOrdereds.push(ordereds[i]);
	            }
	        }

	        if (requiredOrdereds.length) {
	            this._fillMissedErrors.call(this, errors, requiredOrdereds, state, options);
	        }
	    };

	    return _class;
	}(Any);

	internals.safeParse = function (value, result) {

	    try {
	        var converted = JSON.parse(value);
	        if (Array.isArray(converted)) {
	            result.value = converted;
	        }
	    } catch (e) {}
	};

	module.exports = new internals.Array();

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

	// Load modules

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var Any = __webpack_require__(11);
	var Hoek = __webpack_require__(2);

	// Declare internals

	var internals = {};

	internals.Binary = function (_Any) {
	    _inherits(_class, _Any);

	    function _class() {
	        _classCallCheck(this, _class);

	        var _this = _possibleConstructorReturn(this, _Any.call(this));

	        _this._type = 'binary';
	        return _this;
	    }

	    _class.prototype._base = function _base(value, state, options) {

	        var result = {
	            value: value
	        };

	        if (typeof value === 'string' && options.convert) {

	            try {
	                result.value = new Buffer(value, this._flags.encoding);
	            } catch (e) {}
	        }

	        result.errors = Buffer.isBuffer(result.value) ? null : this.createError('binary.base', null, state, options);
	        return result;
	    };

	    _class.prototype.encoding = function encoding(_encoding) {

	        Hoek.assert(Buffer.isEncoding(_encoding), 'Invalid encoding:', _encoding);

	        if (this._flags.encoding === _encoding) {
	            return this;
	        }

	        var obj = this.clone();
	        obj._flags.encoding = _encoding;
	        return obj;
	    };

	    _class.prototype.min = function min(limit) {

	        Hoek.assert(Number.isSafeInteger(limit) && limit >= 0, 'limit must be a positive integer');

	        return this._test('min', limit, function (value, state, options) {

	            if (value.length >= limit) {
	                return value;
	            }

	            return this.createError('binary.min', { limit: limit, value: value }, state, options);
	        });
	    };

	    _class.prototype.max = function max(limit) {

	        Hoek.assert(Number.isSafeInteger(limit) && limit >= 0, 'limit must be a positive integer');

	        return this._test('max', limit, function (value, state, options) {

	            if (value.length <= limit) {
	                return value;
	            }

	            return this.createError('binary.max', { limit: limit, value: value }, state, options);
	        });
	    };

	    _class.prototype.length = function length(limit) {

	        Hoek.assert(Number.isSafeInteger(limit) && limit >= 0, 'limit must be a positive integer');

	        return this._test('length', limit, function (value, state, options) {

	            if (value.length === limit) {
	                return value;
	            }

	            return this.createError('binary.length', { limit: limit, value: value }, state, options);
	        });
	    };

	    return _class;
	}(Any);

	module.exports = new internals.Binary();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3).Buffer))

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = {
		"_args": [
			[
				{
					"raw": "joi@10.6.0",
					"scope": null,
					"escapedName": "joi",
					"name": "joi",
					"rawSpec": "10.6.0",
					"spec": "10.6.0",
					"type": "version"
				},
				"/Users/jeff/projects/joi-browser"
			]
		],
		"_from": "joi@10.6.0",
		"_id": "joi@10.6.0",
		"_inCache": true,
		"_location": "/joi",
		"_nodeVersion": "6.11.0",
		"_npmOperationalInternal": {
			"host": "s3://npm-registry-packages",
			"tmp": "tmp/joi-10.6.0.tgz_1497548465053_0.7665833418723196"
		},
		"_npmUser": {
			"name": "marsup",
			"email": "nicolas@morel.io"
		},
		"_npmVersion": "5.0.3",
		"_phantomChildren": {},
		"_requested": {
			"raw": "joi@10.6.0",
			"scope": null,
			"escapedName": "joi",
			"name": "joi",
			"rawSpec": "10.6.0",
			"spec": "10.6.0",
			"type": "version"
		},
		"_requiredBy": [
			"#DEV:/"
		],
		"_resolved": "https://registry.npmjs.org/joi/-/joi-10.6.0.tgz",
		"_shasum": "52587f02d52b8b75cdb0c74f0b164a191a0e1fc2",
		"_shrinkwrap": null,
		"_spec": "joi@10.6.0",
		"_where": "/Users/jeff/projects/joi-browser",
		"bugs": {
			"url": "https://github.com/hapijs/joi/issues"
		},
		"dependencies": {
			"hoek": "4.x.x",
			"isemail": "2.x.x",
			"items": "2.x.x",
			"topo": "2.x.x"
		},
		"description": "Object schema validation",
		"devDependencies": {
			"code": "4.x.x",
			"hapitoc": "1.x.x",
			"lab": "13.x.x"
		},
		"directories": {},
		"dist": {
			"integrity": "sha512-hBF3LcqyAid+9X/pwg+eXjD2QBZI5eXnBFJYaAkH4SK3mp9QSRiiQnDYlmlz5pccMvnLcJRS4whhDOTCkmsAdQ==",
			"shasum": "52587f02d52b8b75cdb0c74f0b164a191a0e1fc2",
			"tarball": "https://registry.npmjs.org/joi/-/joi-10.6.0.tgz"
		},
		"engines": {
			"node": ">=4.0.0"
		},
		"gitHead": "069bb6c04063cba202544dacf9da3bbe21fa3074",
		"homepage": "https://github.com/hapijs/joi",
		"keywords": [
			"hapi",
			"schema",
			"validation"
		],
		"license": "BSD-3-Clause",
		"main": "lib/index.js",
		"maintainers": [
			{
				"name": "hueniverse",
				"email": "eran@hammer.io"
			},
			{
				"name": "marsup",
				"email": "nicolas@morel.io"
			},
			{
				"name": "nlf",
				"email": "quitlahok@gmail.com"
			},
			{
				"name": "wyatt",
				"email": "wpreul@gmail.com"
			}
		],
		"name": "joi",
		"optionalDependencies": {},
		"readme": "ERROR: No README data found!",
		"repository": {
			"type": "git",
			"url": "git://github.com/hapijs/joi.git"
		},
		"scripts": {
			"test": "lab -t 100 -a code -L",
			"test-cov-html": "lab -r html -o coverage.html -a code",
			"test-debug": "lab -a code",
			"toc": "hapitoc",
			"version": "npm run toc && git add API.md README.md"
		},
		"version": "10.6.0"
	};

/***/ }
/******/ ])
});
;

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const renderMapHost = (hostId) => {
  const mapHost = document.createElement('div');
  mapHost.id = hostId;

  const style = `
    width: 100vw;
    height: 100vh;
  `;

  mapHost.setAttribute('style', style);

  document.body.appendChild(mapHost);
};

/* harmony default export */ __webpack_exports__["a"] = (renderMapHost);


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(22);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "body {\r\n  margin: 0;\r\n}\r\n", ""]);

// exports


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map