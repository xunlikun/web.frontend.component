!function(n){var r={};function t(e){if(r[e])return r[e].exports;var u=r[e]={i:e,l:!1,exports:{}};return n[e].call(u.exports,u,u.exports,t),u.l=!0,u.exports}t.m=n,t.c=r,t.d=function(n,r,e){t.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:e})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,r){if(1&r&&(n=t(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(t.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var u in n)t.d(e,u,function(r){return n[r]}.bind(null,u));return e},t.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(r,"a",r),r},t.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},t.p="dist/",t(t.s=0)}([function(n,r,t){"use strict";function e(n,r){return function(n){if(Array.isArray(n))return n}(n)||function(n,r){var t=[],e=!0,u=!1,o=void 0;try{for(var i,c=n[Symbol.iterator]();!(e=(i=c.next()).done)&&(t.push(i.value),!r||t.length!==r);e=!0);}catch(n){u=!0,o=n}finally{try{e||null==c.return||c.return()}finally{if(u)throw o}}return t}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.r(r);var u=function(n,r){var t=e(r,2),u=t[0],o=t[1],i=n[u];if(i)return i[o]},o=function n(r,t,o){var i,c=e(o,2),f=c[0],a=c[1],l=function(n,r){var t=e(r,2),o=t[0],i=t[1];return{left:"1"===u(n,[o,i-1]),right:"1"===u(n,[o,i+1]),up:"1"===u(n,[o-1,i]),down:"1"===u(n,[o+1,i])}}(r,[f,a]),s=Object.keys(l).filter(function(n){return l[n]});return 0===s.length?function(n){return n.every(function(n){return-1===n.indexOf("1")})}(r)?t:null:s.some(function(u){var o,c=function(n){return n.reduce(function(n,r){return n.push(r),n},[])}(r),l=function(n){return n.reduce(function(n,r){return n.push(r),n},[])}(t);switch(u){case"left":o=[f,a-1];break;case"right":o=[f,a+1];break;case"up":o=[f-1,a];break;case"down":o=[f+1,a];break;default:throw new Error("未定义的移动方向：".concat(u))}return function(n,r,t){var u=e(r,2),o=u[0],i=u[1],c=n[o].split("");c[i]=t,n[o]=c.join("")}(c,o,"#"),l.push(o),null!=(i=n(c,l,o))})?i:null},i=function(n){var r=function(n){var r,t;if(!n.some(function(n,e){return r=e,-1!==(t=n.indexOf("*"))}))throw new Error("没找到入口点");return[r,t]}(n),t=o(n,[r],r);if(null==t)throw new Error("未找到可行的路径");return t};function c(n,r){return function(n){if(Array.isArray(n))return n}(n)||function(n,r){var t=[],e=!0,u=!1,o=void 0;try{for(var i,c=n[Symbol.iterator]();!(e=(i=c.next()).done)&&(t.push(i.value),!r||t.length!==r);e=!0);}catch(n){u=!0,o=n}finally{try{e||null==c.return||c.return()}finally{if(u)throw o}}return t}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var f=["11*10","11110","11111","10111","11101"],a=document.querySelector("#container");!function(n,r){n.innerHTML=function(n){return n.map(function(n){return"\n  <div>\n    ".concat(n.split("").map(function(n){return'<span data-state="'.concat(n,'"></span>')}).join(""),"\n  </div>\n")}).join("")}(r)}(a,f),function(n,r){(function n(r,t,e){if(0!==t.length){var u=c(t.shift(),2),o=u[0],i=u[1],f=r.children[o].children[i];f.setAttribute("style","background: red;"),f.innerHTML=e,setTimeout(function(){f.removeAttribute("style"),n(r,t,++e)},100)}})(n,r,0)}(a,i(f))}]);
//# sourceMappingURL=index.js.map