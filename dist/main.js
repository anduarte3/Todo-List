(()=>{"use strict";var n,r,e,t,o,a,i,c,s,u,l,p,d,f,v={426:(n,r,e)=>{e.d(r,{Z:()=>c});var t=e(81),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([n.id,"body {\r\n    margin: 0px;\r\n    padding: 0px;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n}\r\nheader {\r\n    background-color: darkblue;\r\n    padding: 30px;\r\n}\r\nh1 {\r\n    color: white;\r\n    text-align: center;\r\n}\r\n#container {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n.sidebar {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n    width: 200px;\r\n    position: fixed;\r\n    background-color: gray;\r\n    text-align: center;\r\n}\r\n.center {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    text-align: center;\r\n}\r\n.main {\r\n    margin-top: 20px;\r\n    text-align: center;\r\n}\r\n.inbox {\r\n    margin-top: 20px;\r\n}\r\n.today {\r\n    margin-top: 15px;\r\n}\r\n.upcoming {\r\n    margin-top: 15px;\r\n} ",""]);const c=i},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<n.length;u++){var l=[].concat(n[u]);t&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],u=t.base?s[0]+t.base:s[0],l=a[u]||0,p="".concat(u," ").concat(l);a[u]=l+1;var d=e(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)r[d].references++,r[d].updater(f);else{var v=o(f,t);t.byIndex=c,r.splice(c,0,{identifier:p,updater:v,references:1})}i.push(p)}return i}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=e(a[i]);r[c].references--}for(var s=t(n,o),u=0;u<a.length;u++){var l=e(a[u]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}a=s}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},m={};function h(n){var r=m[n];if(void 0!==r)return r.exports;var e=m[n]={id:n,exports:{}};return v[n](e,e.exports,h),e.exports}h.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return h.d(r,{a:r}),r},h.d=(n,r)=>{for(var e in r)h.o(r,e)&&!h.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},h.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),h.nc=void 0,n=h(379),r=h.n(n),e=h(795),t=h.n(e),o=h(569),a=h.n(o),i=h(565),c=h.n(i),s=h(216),u=h.n(s),l=h(589),p=h.n(l),d=h(426),(f={}).styleTagTransform=p(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=t(),f.insertStyleElement=u(),r()(d.Z,f),d.Z&&d.Z.locals&&d.Z.locals})();