/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/in/in.json":
/*!************************!*\
  !*** ./src/in/in.json ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"openapi":"3.0.0","info":{"title":"Simple API overview","version":"2.0.0"},"paths":{"/":{"get":{"operationId":"listVersionsv2","summary":"List API versions","responses":{"200":{"description":"200 response","content":{"application/json":{"examples":{"foo":{"value":{"versions":[{"status":"CURRENT","updated":"2011-01-21T11:33:21Z","id":"v2.0","links":[{"href":"http://127.0.0.1:8774/v2/","rel":"self"}]},{"status":"EXPERIMENTAL","updated":"2013-07-23T11:33:21Z","id":"v3.0","links":[{"href":"http://127.0.0.1:8774/v3/","rel":"self"}]}]}}}}}},"300":{"description":"300 response","content":{"application/json":{"examples":{"foo":{"value":"{\\n \\"versions\\": [\\n       {\\n         \\"status\\": \\"CURRENT\\",\\n         \\"updated\\": \\"2011-01-21T11:33:21Z\\",\\n         \\"id\\": \\"v2.0\\",\\n         \\"links\\": [\\n             {\\n                 \\"href\\": \\"http://127.0.0.1:8774/v2/\\",\\n                 \\"rel\\": \\"self\\"\\n             }\\n         ]\\n     },\\n     {\\n         \\"status\\": \\"EXPERIMENTAL\\",\\n         \\"updated\\": \\"2013-07-23T11:33:21Z\\",\\n         \\"id\\": \\"v3.0\\",\\n         \\"links\\": [\\n             {\\n                 \\"href\\": \\"http://127.0.0.1:8774/v3/\\",\\n                 \\"rel\\": \\"self\\"\\n             }\\n         ]\\n     }\\n ]\\n}\\n"}}}}}}}},"/v2":{"get":{"operationId":"getVersionDetailsv2","summary":"Show API version details","responses":{"200":{"description":"200 response","content":{"application/json":{"examples":{"foo":{"value":{"version":{"status":"CURRENT","updated":"2011-01-21T11:33:21Z","media-types":[{"base":"application/xml","type":"application/vnd.openstack.compute+xml;version=2"},{"base":"application/json","type":"application/vnd.openstack.compute+json;version=2"}],"id":"v2.0","links":[{"href":"http://127.0.0.1:8774/v2/","rel":"self"},{"href":"http://docs.openstack.org/api/openstack-compute/2/os-compute-devguide-2.pdf","type":"application/pdf","rel":"describedby"},{"href":"http://docs.openstack.org/api/openstack-compute/2/wadl/os-compute-2.wadl","type":"application/vnd.sun.wadl+xml","rel":"describedby"},{"href":"http://docs.openstack.org/api/openstack-compute/2/wadl/os-compute-2.wadl","type":"application/vnd.sun.wadl+xml","rel":"describedby"}]}}}}}}},"203":{"description":"203 response","content":{"application/json":{"examples":{"foo":{"value":{"version":{"status":"CURRENT","updated":"2011-01-21T11:33:21Z","media-types":[{"base":"application/xml","type":"application/vnd.openstack.compute+xml;version=2"},{"base":"application/json","type":"application/vnd.openstack.compute+json;version=2"}],"id":"v2.0","links":[{"href":"http://23.253.228.211:8774/v2/","rel":"self"},{"href":"http://docs.openstack.org/api/openstack-compute/2/os-compute-devguide-2.pdf","type":"application/pdf","rel":"describedby"},{"href":"http://docs.openstack.org/api/openstack-compute/2/wadl/os-compute-2.wadl","type":"application/vnd.sun.wadl+xml","rel":"describedby"}]}}}}}}}}}}}}');

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
/******/ 			// no module.id needed
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
console.log("Start parsing json file");

var jsonFile = __webpack_require__(/*! ./in/in.json */ "./src/in/in.json");

console.log(jsonFile);
})();

/******/ })()
;
//# sourceMappingURL=main.bundle.js.map