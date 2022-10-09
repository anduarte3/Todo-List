(()=>{"use strict";var n={426:(n,e,r)=>{r.d(e,{Z:()=>d});var t=r(81),o=r.n(t),i=r(645),a=r.n(i)()(o());a.push([n.id,"body {\r\n    margin: 0px;\r\n    padding: 0px;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n    overflow: hidden;\r\n}\r\nheader {\r\n    background-color: darkcyan;\r\n    height: 50px;\r\n    padding: 5px;\r\n}\r\nh1 {\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    opacity: 0.7;\r\n}\r\n.container {\r\n    display: flex;\r\n    flex-direction: row;\r\n    height: 100vh;\r\n}\r\n.sidebar {\r\n    background-color: lightblue;\r\n    width: 300px;\r\n    display: block;\r\n    justify-content: center;\r\n}\r\n.center {\r\n   display: block;\r\n   width: 100%;\r\n   background-image: url('https://img.freepik.com/free-photo/yellow-list-top-view_23-2148475388.jpg?w=2000');\r\n   background-repeat: no-repeat; \r\n   background-size: cover;\r\n}\r\n.main {\r\n    text-align: center;\r\n    margin-bottom: 30px;\r\n    font-size: 40px;\r\n}.menu-container {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.menu {\r\n    text-align: center;\r\n    /* display: none; */\r\n}\r\n.nav {\r\n    text-align: center;\r\n    margin-top: 40px;\r\n}\r\nbutton {\r\n    width: 100%;\r\n    height: 50px;\r\n    margin-top: 20px;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    border-radius: 1px;\r\n    background-color: white;\r\n    border: 1px solid white;\r\n    opacity: 0.7;\r\n}\r\n.new-button {\r\n    width: 200px;\r\n    height: 70px;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    background: wheat;\r\n    border-radius: 25px;\r\n    border: 25px solid wheat;\r\n    opacity: 0.7;\r\n    margin-top: 20px;\r\n}\r\nbutton:hover {\r\n    opacity: 1;\r\n} \r\n.new-button:hover {\r\n    opacity: 1;\r\n} \r\n\r\n/* popup stuff here */\r\n.popup-menu {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 150px;\r\n    width: 200px;\r\n    background-color: lightgoldenrodyellow;\r\n    opacity: 0.9;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    font-size: 15px;\r\n    margin-top: 150px;\r\n}\r\n.title-text {\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: left;\r\n    margin: 2px;\r\n}\r\n/* .description-text {\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: left;\r\n    margin: 5px;\r\n} */\r\n.priority-text {\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: left;\r\n    margin: 5px;\r\n}\r\ninput[type=text] {\r\n    margin-top: 5px;\r\n    border-radius: 5px;\r\n    border: none;\r\n    outline: none;\r\n    height: 20px;\r\n    width: 150px;\r\n}\r\n/* .description-text > input {\r\n    margin-top: 5px;\r\n    border-radius: 5px;\r\n    width: 200px;\r\n}\r\n.due-date {\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: left;\r\n    margin: 5px;\r\n} */\r\nselect {\r\n    margin-top: 5px;\r\n    border-radius: 5px;\r\n    border: none;\r\n    outline: none;\r\n    height: 20px;\r\n    width: 70px;\r\n}\r\ninput[type=text]:active {\r\n    border: none;\r\n    outline: none;\r\n}\r\ninput, textarea {\r\n    font-family:inherit;\r\n  }\r\n.popup-hide {\r\n    display: none;\r\n}\r\n.submit-style {\r\n    border-radius: 5px;\r\n    font-size: 15px;\r\n    height: 25px;\r\n    width: 55px;\r\n}\r\n.show-style {\r\n    display: flex;\r\n    flex-direction: column-reverse;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-top: 100px;\r\n}\r\n.todo-box {\r\n    display: flex;\r\n    align-items: center;\r\n    border-radius: 5px;\r\n    background-color: white;\r\n    width: 350px;\r\n    height: 10px;\r\n    text-align: left;\r\n    opacity: 0.8;\r\n    padding: 10px;\r\n    font-size: 20px;\r\n    margin-top: 5px;\r\n    float: left;\r\n    clear: left;\r\n}\r\n.todo-box:hover {\r\n    opacity: 1;\r\n}\r\n.red {\r\n    background-color: coral;\r\n}\r\n.yellow {\r\n    background-color: yellow;\r\n}\r\n.green {\r\n    background-color: greenyellow;\r\n}",""]);const d=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var d=0;d<this.length;d++){var l=this[d][0];null!=l&&(a[l]=!0)}for(var c=0;c<n.length;c++){var p=[].concat(n[c]);t&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),r&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=r):p[2]=r),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var i={},a=[],d=0;d<n.length;d++){var l=n[d],c=t.base?l[0]+t.base:l[0],p=i[c]||0,s="".concat(c," ").concat(p);i[c]=p+1;var u=r(s),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var x=o(f,t);t.byIndex=d,e.splice(d,0,{identifier:s,updater:x,references:1})}a.push(s)}return a}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var d=r(i[a]);e[d].references--}for(var l=t(n,o),c=0;c<i.length;c++){var p=r(i[c]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}i=l}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var i=e[t]={id:t,exports:{}};return n[t](i,i.exports,r),i.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),r.nc=void 0,(()=>{var n=r(379),e=r.n(n),t=r(795),o=r.n(t),i=r(569),a=r.n(i),d=r(565),l=r.n(d),c=r(216),p=r.n(c),s=r(589),u=r.n(s),f=r(426),x={};x.styleTagTransform=u(),x.setAttributes=l(),x.insert=a().bind(null,"head"),x.domAPI=o(),x.insertStyleElement=p(),e()(f.Z,x),f.Z&&f.Z.locals&&f.Z.locals;function m(){document.getElementById("popup-menu-show").style.display="none"}function g(){document.getElementById("new-todo").style.display="none",document.getElementById("popup-menu-show").style.display="flex"}function h(){document.getElementById("new-todo").style.display="block",m();let n=document.getElementById("input-title").value;const e=document.getElementById("priority-select");!function(n,e){let r=[],t={title:n,priority:e};r.push(t.title);for(let n=0;n<r.length;n++){const n=document.getElementById("show-todo"),e=document.createElement("div");e.classList.add("todo-box"),e.textContent=`${t.title}`,n.appendChild(e),"High"==t.priority?(e.classList.add("red"),e.appendChild(red)):"Medium"==t.priority?(e.classList.add("yellow"),e.appendChild(yellow)):(e.classList.add("green"),e.appendChild(green))}}(n,e.options[e.selectedIndex].text)}!function(){const n=document.getElementById("new-todo"),e=document.getElementById("submit-todo"),r=document.getElementById("urgent-todo"),t=document.getElementById("important-todo"),o=document.getElementById("casual-todo");n.addEventListener("click",g),e.addEventListener("click",h),r.addEventListener("click"),t.addEventListener("click"),o.addEventListener("click")}(),m()})()})();