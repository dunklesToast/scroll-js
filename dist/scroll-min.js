/** 
* scroll-js - v1.3.0.
* https://github.com/mkay581/scroll-js.git
* Copyright 2016 Mark Kennedy. Licensed MIT.
*/

!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.Scroll=t()}}(function(){var t;return function t(e,n,r){function o(u,s){if(!n[u]){if(!e[u]){var c="function"==typeof require&&require;if(!s&&c)return c(u,!0);if(i)return i(u,!0);var a=new Error("Cannot find module '"+u+"'");throw a.code="MODULE_NOT_FOUND",a}var f=n[u]={exports:{}};e[u][0].call(f.exports,function(t){var n=e[u][1][t];return o(n?n:t)},f,f.exports,t,e,n,r)}return n[u].exports}for(var i="function"==typeof require&&require,u=0;u<r.length;u++)o(r[u]);return o}({1:[function(e,n,r){(function(o,i){!function(e,o){"object"==typeof r&&"undefined"!=typeof n?n.exports=o():"function"==typeof t&&t.amd?t(o):e.ES6Promise=o()}(this,function(){"use strict";function t(t){return"function"==typeof t||"object"==typeof t&&null!==t}function n(t){return"function"==typeof t}function r(t){J=t}function u(t){V=t}function s(){return function(){return o.nextTick(h)}}function c(){return"undefined"!=typeof H?function(){H(h)}:l()}function a(){var t=0,e=new $(h),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function f(){var t=new MessageChannel;return t.port1.onmessage=h,function(){return t.port2.postMessage(0)}}function l(){var t=setTimeout;return function(){return t(h,1)}}function h(){for(var t=0;t<G;t+=2){var e=nt[t],n=nt[t+1];e(n),nt[t]=void 0,nt[t+1]=void 0}G=0}function d(){try{var t=e,n=t("vertx");return H=n.runOnLoop||n.runOnContext,c()}catch(t){return l()}}function p(t,e){var n=arguments,r=this,o=new this.constructor(y);void 0===o[ot]&&L(o);var i=r._state;return i?!function(){var t=n[i-1];V(function(){return P(i,o,t,r._result)})}():x(r,o,t,e),o}function v(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(y);return E(n,t),n}function y(){}function m(){return new TypeError("You cannot resolve a promise with itself")}function w(){return new TypeError("A promises callback cannot return that same promise.")}function _(t){try{return t.then}catch(t){return ct.error=t,ct}}function b(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}function g(t,e,n){V(function(t){var r=!1,o=b(n,e,function(n){r||(r=!0,e!==n?E(t,n):S(t,n))},function(e){r||(r=!0,j(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,j(t,o))},t)}function T(t,e){e._state===ut?S(t,e._result):e._state===st?j(t,e._result):x(e,void 0,function(e){return E(t,e)},function(e){return j(t,e)})}function A(t,e,r){e.constructor===t.constructor&&r===p&&e.constructor.resolve===v?T(t,e):r===ct?j(t,ct.error):void 0===r?S(t,e):n(r)?g(t,e,r):S(t,e)}function E(e,n){e===n?j(e,m()):t(n)?A(e,n,_(n)):S(e,n)}function O(t){t._onerror&&t._onerror(t._result),C(t)}function S(t,e){t._state===it&&(t._result=e,t._state=ut,0!==t._subscribers.length&&V(C,t))}function j(t,e){t._state===it&&(t._state=st,t._result=e,V(O,t))}function x(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+ut]=n,o[i+st]=r,0===i&&t._state&&V(C,t)}function C(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,u=0;u<e.length;u+=3)r=e[u],o=e[u+n],r?P(n,r,o,i):o(i);t._subscribers.length=0}}function k(){this.error=null}function M(t,e){try{return t(e)}catch(t){return at.error=t,at}}function P(t,e,r,o){var i=n(r),u=void 0,s=void 0,c=void 0,a=void 0;if(i){if(u=M(r,o),u===at?(a=!0,s=u.error,u=null):c=!0,e===u)return void j(e,w())}else u=o,c=!0;e._state!==it||(i&&c?E(e,u):a?j(e,s):t===ut?S(e,u):t===st&&j(e,u))}function Q(t,e){try{e(function(e){E(t,e)},function(e){j(t,e)})}catch(e){j(t,e)}}function I(){return ft++}function L(t){t[ot]=ft++,t._state=void 0,t._result=void 0,t._subscribers=[]}function q(t,e){this._instanceConstructor=t,this.promise=new t(y),this.promise[ot]||L(this.promise),z(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?S(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&S(this.promise,this._result))):j(this.promise,D())}function D(){return new Error("Array Methods must be provided an Array")}function F(t){return new q(this,t).promise}function U(t){var e=this;return new e(z(t)?function(n,r){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(n,r)}:function(t,e){return e(new TypeError("You must pass an array to race."))})}function Y(t){var e=this,n=new e(y);return j(n,t),n}function N(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function B(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function K(t){this[ot]=I(),this._result=this._state=void 0,this._subscribers=[],y!==t&&("function"!=typeof t&&N(),this instanceof K?Q(this,t):B())}function R(){var t=void 0;if("undefined"!=typeof i)t=i;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var n=null;try{n=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===n&&!e.cast)return}t.Promise=K}var W=void 0;W=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var z=W,G=0,H=void 0,J=void 0,V=function(t,e){nt[G]=t,nt[G+1]=e,G+=2,2===G&&(J?J(h):rt())},X="undefined"!=typeof window?window:void 0,Z=X||{},$=Z.MutationObserver||Z.WebKitMutationObserver,tt="undefined"==typeof self&&"undefined"!=typeof o&&"[object process]"==={}.toString.call(o),et="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,nt=new Array(1e3),rt=void 0;rt=tt?s():$?a():et?f():void 0===X&&"function"==typeof e?d():l();var ot=Math.random().toString(36).substring(16),it=void 0,ut=1,st=2,ct=new k,at=new k,ft=0;return q.prototype._enumerate=function(){for(var t=this.length,e=this._input,n=0;this._state===it&&n<t;n++)this._eachEntry(e[n],n)},q.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===v){var o=_(t);if(o===p&&t._state!==it)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===K){var i=new n(y);A(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},q.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===it&&(this._remaining--,t===st?j(r,n):this._result[e]=n),0===this._remaining&&S(r,this._result)},q.prototype._willSettleAt=function(t,e){var n=this;x(t,void 0,function(t){return n._settledAt(ut,e,t)},function(t){return n._settledAt(st,e,t)})},K.all=F,K.race=U,K.resolve=v,K.reject=Y,K._setScheduler=r,K._setAsap=u,K._asap=V,K.prototype={constructor:K,then:p,catch:function(t){return this.then(null,t)}},K.polyfill=R,K.Promise=K,K})}).call(this,e("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{_process:3}],2:[function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=t("es6-promise").Promise,u={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:-1+(4-2*t)*t},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}},s=function(t){var e="linear",n=u[t||e];return n||(console.warn("Scroll error: scroller does not support an easing option of "+t+'. Using "'+e+'" instead'),n=u[t]),n},c=function(){function t(e){r(this,t),e||console.error("Scroll error: element passed to Scroll constructor is "+e+"! Bailing..."),this.el=e}return o(t,[{key:"to",value:function(t,e,n){var r=this,o=this.el,u=o.scrollTop;o.scrollLeft;n=n||{},n.duration=n.duration||400;var c=function(t,e){var n=r.el;n[t]=e,n===r.document.body&&(r.document.documentElement[t]=e)},a=function t(e,n,r,o,i,u,s,a){window.requestAnimationFrame(function(){var f=Date.now(),l=Math.min(1,(f-i)/u);return n===r?a?a():null:(c(o,s(l)*(r-n)+n),void(l<1?t(e,e[o],r,o,i,u,s,a):a&&a()))})};return new i(function(t){a(o,u,e,"scrollTop",Date.now(),n.duration,s(n.easing),t)})}},{key:"toElement",value:function(t,e){var n,r=this.el,o=0,u=t?t.offsetTop:0;return t?r.contains(t)?(r===document.body&&(o=window.pageYOffset,u=t.getBoundingClientRect().top+o),this.to(0,u,e)):(n="Scroll.toElement() was passed an element that does not exist inside the scroll container",console.warn(n),i.reject(new Error(n))):(n="The element passed to Scroll.toElement() was undefined",console.error(n),i.reject(new Error(n)))}},{key:"destroy",value:function(){}},{key:"document",get:function(){return document}}]),t}();n.default=c,e.exports=n.default},{"es6-promise":1}],3:[function(t,e,n){function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(t){if(l===setTimeout)return setTimeout(t,0);if((l===r||!l)&&setTimeout)return l=setTimeout,setTimeout(t,0);try{return l(t,0)}catch(e){try{return l.call(null,t,0)}catch(e){return l.call(this,t,0)}}}function u(t){if(h===clearTimeout)return clearTimeout(t);if((h===o||!h)&&clearTimeout)return h=clearTimeout,clearTimeout(t);try{return h(t)}catch(e){try{return h.call(null,t)}catch(e){return h.call(this,t)}}}function s(){y&&p&&(y=!1,p.length?v=p.concat(v):m=-1,v.length&&c())}function c(){if(!y){var t=i(s);y=!0;for(var e=v.length;e;){for(p=v,v=[];++m<e;)p&&p[m].run();m=-1,e=v.length}p=null,y=!1,u(t)}}function a(t,e){this.fun=t,this.array=e}function f(){}var l,h,d=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:r}catch(t){l=r}try{h="function"==typeof clearTimeout?clearTimeout:o}catch(t){h=o}}();var p,v=[],y=!1,m=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];v.push(new a(t,e)),1!==v.length||y||i(c)},a.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=f,d.addListener=f,d.once=f,d.off=f,d.removeListener=f,d.removeAllListeners=f,d.emit=f,d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},{}]},{},[2])(2)});