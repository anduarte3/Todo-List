(()=>{"use strict";var r,n,e,t,o,a,i,c,s,u,d,p,l,f,v={426:(r,n,e)=>{e.d(n,{Z:()=>c});var t=e(81),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([r.id,"body {\r\n    margin: 0px;\r\n    padding: 0px;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n    overflow: hidden;\r\n}\r\nheader {\r\n    background-color: darkblue;\r\n    padding: 30px;\r\n    grid-row-start: 1;\r\n    grid-row-end: 2; \r\n    grid-column-start: 2;\r\n    grid-column-end: 7;\r\n}\r\nh1 {\r\n    color: white;\r\n    text-align: center;\r\n}\r\n.container {\r\n    display: flex;\r\n    flex-direction: row;\r\n    height: 100vh;\r\n}\r\n.sidebar {\r\n    background-color: gray;\r\n    width: 200px;\r\n    text-align: center;\r\n}\r\n.center {\r\n   background-color: brown;\r\n   width: 100%;\r\n}\r\n.main {\r\n    margin-top: 30px;\r\n    text-align: center;\r\n    margin-bottom: 30px;\r\n    font-size: 40px;\r\n}\r\ndiv {\r\n    text-align: center;\r\n}\r\n.nav {\r\n    margin-top: 40px;\r\n}\r\n.today {\r\n    margin-top: 20px;\r\n}\r\n.inbox {\r\n    margin-top: 20px;\r\n}\r\n.upcoming {\r\n    margin-top: 20px;\r\n}",""]);const c=i},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",t=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),t&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),t&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,t,o,a){"string"==typeof r&&(r=[[null,r,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<r.length;u++){var d=[].concat(r[u]);t&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:r=>{r.exports=function(r){return r[1]}},379:r=>{var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var a={},i=[],c=0;c<r.length;c++){var s=r[c],u=t.base?s[0]+t.base:s[0],d=a[u]||0,p="".concat(u," ").concat(d);a[u]=d+1;var l=e(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)n[l].references++,n[l].updater(f);else{var v=o(f,t);t.byIndex=c,n.splice(c,0,{identifier:p,updater:v,references:1})}i.push(p)}return i}function o(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,o){var a=t(r=r||[],o=o||{});return function(r){r=r||[];for(var i=0;i<a.length;i++){var c=e(a[i]);n[c].references--}for(var s=t(r,o),u=0;u<a.length;u++){var d=e(a[u]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=s}}},569:r=>{var n={};r.exports=function(r,e){var t=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}},m={};function h(r){var n=m[r];if(void 0!==n)return n.exports;var e=m[r]={id:r,exports:{}};return v[r](e,e.exports,h),e.exports}h.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return h.d(n,{a:n}),n},h.d=(r,n)=>{for(var e in n)h.o(n,e)&&!h.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:n[e]})},h.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),h.nc=void 0,r=h(379),n=h.n(r),e=h(795),t=h.n(e),o=h(569),a=h.n(o),i=h(565),c=h.n(i),s=h(216),u=h.n(s),d=h(589),p=h.n(d),l=h(426),(f={}).styleTagTransform=p(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=t(),f.insertStyleElement=u(),n()(l.Z,f),l.Z&&l.Z.locals&&l.Z.locals})();