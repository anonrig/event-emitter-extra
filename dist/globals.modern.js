var EventEmitterExtra=function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,t,n){Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=19)}([function(e,t,n){function r(e){return null==e?void 0===e?a:u:(e=Object(e),c&&c in e?s(e):o(e))}var i=n(7),s=n(12),o=n(14),u="[object Null]",a="[object Undefined]",c=i?i.toStringTag:void 0;e.exports=r},function(e,t){function n(e){return null!=e&&"object"==typeof e}e.exports=n},function(e,t){var n=Array.isArray;e.exports=n},function(e,t,n){function r(e){if(!s(e))return!1;var t=i(e);return t==u||t==a||t==o||t==c}var i=n(0),s=n(16),o="[object AsyncFunction]",u="[object Function]",a="[object GeneratorFunction]",c="[object Proxy]";e.exports=r},function(e,t,n){function r(e){return"number"==typeof e||s(e)&&i(e)==o}var i=n(0),s=n(1),o="[object Number]";e.exports=r},function(e,t,n){var r=n(10),i=n(11),s=n(13),o=s&&s.isRegExp,u=o?i(o):r;e.exports=u},function(e,t,n){function r(e){return"string"==typeof e||!s(e)&&o(e)&&i(e)==u}var i=n(0),s=n(2),o=n(1),u="[object String]";e.exports=r},function(e,t,n){var r=n(15),i=r.Symbol;e.exports=i},function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(t,n(17))},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(6),o=n(5),u=n(3),a=n(4),c=function(){function e(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(r(this,e),s(t))this.eventName=t;else{if(!o(t))throw new Error("Event name to be listened should be string or regex");this.eventNameRegex=t}if(!u(n))throw new Error("Handler should be a function");if(!a(i)||parseInt(i,10)!=i)throw new Error("Execute limit should be integer");this.handler=n,this.execCount=0,this.execLimit=i}return i(e,[{key:"execute",value:function(e,t){var n=this.handler.apply(e,t);return this.execCount++,this.execLimit&&this.execCount>=this.execLimit&&this.onExpire(this),n}},{key:"testRegexWith",value:function(e){var t=this.eventNameRegex;return t.test(e)}},{key:"onExpire",value:function(){}}]),e}();e.exports=c},function(e,t,n){function r(e){return s(e)&&i(e)==o}var i=n(0),s=n(1),o="[object RegExp]";e.exports=r},function(e,t){function n(e){return function(t){return e(t)}}e.exports=n},function(e,t,n){function r(e){var t=o.call(e,a),n=e[a];try{e[a]=void 0;var r=!0}catch(e){}var i=u.call(e);return r&&(t?e[a]=n:delete e[a]),i}var i=n(7),s=Object.prototype,o=s.hasOwnProperty,u=s.toString,a=i?i.toStringTag:void 0;e.exports=r},function(e,t,n){(function(e){var r=n(8),i="object"==typeof t&&t&&!t.nodeType&&t,s=i&&"object"==typeof e&&e&&!e.nodeType&&e,o=s&&s.exports===i,u=o&&r.process,a=function(){try{return u&&u.binding("util")}catch(e){}}();e.exports=a}).call(t,n(18)(e))},function(e,t){function n(e){return i.call(e)}var r=Object.prototype,i=r.toString;e.exports=n},function(e,t,n){var r=n(8),i="object"==typeof self&&self&&self.Object===Object&&self,s=r||i||Function("return this")();e.exports=s},function(e,t){function n(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}e.exports=n},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,configurable:!1,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,configurable:!1,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){return"object"===("undefined"==typeof e?"undefined":o(e))&&"object"===("undefined"==typeof t?"undefined":o(t))&&e.toString()===t.toString()}function s(e,t){var n=[];return c(t)?n=e.filter(t):e.indexOf(t)>-1&&n.push(t),n.forEach(function(t){var n=e.indexOf(t);e.splice(n,1)}),n}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(2),c=n(3),f=n(4),l=n(5),h=n(6),v=n(9),p=function(){function e(){r(this,e),this.maxListeners_=e.defaultMaxListeners,this.maxRegexListeners_=e.defaultMaxRegexListeners,this.listeners_=[],this.regexListeners_=[],this.eventListeners_={}}return u(e,[{key:"addListener",value:function(e,t,n,r){var i=this;if(a(e)||a(t)){var s=a(e)?e:[e],o=a(t)?t:[t];return s.forEach(function(e){o.forEach(function(t){i.addListener(e,t,n)})}),this}var u=new v(e,t,n);if(u.eventName){if(this.eventListeners_[u.eventName]||(this.eventListeners_[u.eventName]=[]),this.eventListeners_[u.eventName].length>=this.maxListeners_)throw new Error("Max listener count reached for event: "+e);this.emit("newListener",e,t),r?this.eventListeners_[u.eventName].unshift(u):this.eventListeners_[u.eventName].push(u)}else if(u.eventNameRegex){if(this.regexListeners_.length>=this.maxRegexListeners_)throw new Error("Max regex listener count reached");this.emit("newListener",e,t),r?this.regexListeners_.unshift(u):this.regexListeners_.push(u)}return u.onExpire=this.removeListener_.bind(this),this.listeners_.push(u),this}},{key:"prependListener",value:function(e,t,n){return this.addListener(e,t,n,!0)}},{key:"prependOnceListener",value:function(e,t){return this.addListener(e,t,1,!0)}},{key:"prependManyListener",value:function(e,t,n){return this.addListener(e,n,t,!0)}},{key:"removeListener_",value:function(e){s(this.listeners_,e),e.eventName&&a(this.eventListeners_[e.eventName])?(s(this.eventListeners_[e.eventName],e),0==this.eventListeners_[e.eventName].length&&delete this.eventListeners_[e.eventName]):e.eventNameRegex&&s(this.regexListeners_,e),this.emit("removeListener",e.eventName||e.eventNameRegex,e.handler)}},{key:"removeAllListeners",value:function(e){var t=this;if(a(e))e.forEach(function(e){return t.removeAllListeners(e)});else if(h(e)&&a(this.eventListeners_[e])){var n=this.eventListeners_[e].slice();n.forEach(function(e){t.removeListener_(e)})}else if(l(e)){var r=e,s=this.regexListeners_.filter(function(e){return i(e.eventNameRegex,r)});s.forEach(function(e){return t.removeListener_(e)})}else void 0==e&&(this.removeAllListeners(this.eventNames()),this.removeAllListeners(this.regexes()));return this}},{key:"removeListener",value:function(e,t){var n=this;if(a(e)||a(t)){var r=a(e)?e:[e],s=a(t)?t:[t];r.forEach(function(e){s.forEach(function(t){n.removeListener(e,t)})})}else if(h(e)&&a(this.eventListeners_[e])){var o=this.eventListeners_[e].filter(function(e){return e.handler==t});o.forEach(function(e){return n.removeListener_(e)})}else{if(!l(e))throw new Error("Event name should be string or regex.");var u=e,c=this.regexListeners_.filter(function(e){return i(e.eventNameRegex,u)&&e.handler==t});c.forEach(function(e){return n.removeListener_(e)})}return this}},{key:"eventNames",value:function(){return Object.keys(this.eventListeners_)}},{key:"regexes",value:function(){return this.regexListeners_.map(function(e){return e.eventNameRegex})}},{key:"getMaxListeners",value:function(){return this.maxListeners_}},{key:"setMaxListeners",value:function(e){if(!f(e)||parseInt(e,10)!=e)throw new Error("n must be integer");return this.maxListeners_=e,this}},{key:"getMaxRegexListeners",value:function(){return this.maxRegexListeners_}},{key:"setMaxRegexListeners",value:function(e){if(!f(e)||parseInt(e,10)!=e)throw new Error("n must be integer");return this.maxRegexListeners_=e,this}},{key:"listenerCount",value:function(e){if(h(e))return this.eventListeners_[e]?this.eventListeners_[e].length:0;if(l(e))return this.regexListeners_.filter(function(t){return i(e,t.eventNameRegex)}).length;throw new Error("Event name should be string or regex.")}},{key:"listeners",value:function(e){if(h(e))return this.eventListeners_[e]?this.eventListeners_[e].map(function(e){return e.handler}):[];if(l(e))return this.regexListeners_.filter(function(t){return i(e,t.eventNameRegex)}).map(function(e){return e.handler});throw new Error("Event name should be string or regex.")}},{key:"on",value:function(e,t){return this.addListener(e,t)}},{key:"once",value:function(e,t){return this.addListener(e,t,1)}},{key:"many",value:function(e,t,n){return this.addListener(e,n,t)}},{key:"emit",value:function(e){for(var t=this,n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(a(e)){var s=[];return e.forEach(function(e){var n=t.emit.apply(t,[e].concat(r));s=s.concat(n)}),s}if(!h(e))throw new Error("Event name should be string");var o=[],u={name:e};if(this.eventListeners_[e]){var c=this.eventListeners_[e].slice().map(function(e){return e.execute(Object.assign({},e,{event:u}),r)});o=o.concat(c)}var f=this.regexListeners_.filter(function(t){return t.testRegexWith(e)}).map(function(e){return e.execute(Object.assign({},e,{event:u}),r)});return o=o.concat(f),o.length>0&&o}},{key:"emitAsync",value:function(){var e=this.emit.apply(this,arguments);return e?Promise.all(e):Promise.resolve()}}]),e}();p.defaultMaxListeners=10,p.defaultMaxRegexListeners=10,p.Listener=v,e.exports=p}]);
//# sourceMappingURL=globals.modern.js.map