/*!
 * utils v1.0.0
 * (c) 2019 YolkPie
 * Released under the MIT License.
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).timeout={})}(this,(function(e){"use strict";function t(e){var t={}.toString.call(e);return/^\[object (\w+)\]$/.exec(t)[1]}function n(e){var t=document.cookie;if(!e)return t;var n=t.split("; "),r=!0,o=!1,i=void 0;try{for(var a,c=n[Symbol.iterator]();!(r=(a=c.next()).done);r=!0){var u=a.value,l=/^([^=]+)=([^=]+)$/.exec(u);if(l&&l[1]===e)return unescape(l[2])}}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return""}function r(e){return function(t,n){return n?e(n):t}}function o(e){if("number"!=typeof e&&"string"!=typeof e)throw new Error("参数类型错误");return e.toString().split(".")[1]?e.toString().split(".")[1].length:0}function i(e,t){var n,r;try{n=o(e),r=o(t)}catch(e){}var i=Math.max(n,r),a=Math.pow(10,i);return+((e*a+t*a)/a).toFixed(i)}function a(e,n){if(e.classList)return e.classList.contains(n);var r="String"===t(e)?document.querySelector(e):e;return!!r&&" ".concat(r.className," ").indexOf(" ".concat(n," "))>-1}var c,u,l,s=(c="dialog-open",l=0,{afterOpen:function(){l++,document.body.classList.contains(c)||(u=document.scrollingElement.scrollTop||document.body.scrollTop,document.body.classList.add(c),document.body.style.top=-u+"px")},beforeClose:function(){--l>0||document.body.classList.contains(c)&&(document.body.classList.remove(c),document.scrollingElement.scrollTop=u)}});function d(e,t){for(var n=0;0!==t;)n=e%t,e=t,t=n;return e}var f=document.addEventListener?function(e,t,n){e&&t&&n&&e.addEventListener(t,n,!1)}:function(e,t,n){e&&t&&n&&e.attachEvent("on"+t,n)},m=document.removeEventListener?function(e,t,n){e&&t&&e.removeEventListener(t,n,!1)}:function(e,t,n){e&&t&&e.detachEvent("on"+t,n)},v=window.sessionStorage,p=window.localStorage,g=["session","local"],h=g[0],y={set:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:h;try{return!(n in g)&&(n=h),y[n].set(e,t),y[n]}catch(e){return y[n]}},get:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h;try{return!(t in g)&&(t=h),y[t].get(e)}catch(e){return null}},clear:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;try{return!(e in g)&&(e=h),y[e].clear(),y[e]}catch(t){return y[e]}},remove:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h;try{return y[t].remove(e),y}catch(e){return y}},session:{set:function(e,t){try{return v.setItem(e,JSON.stringify(t)),y.session}catch(e){return y.session}},get:function(e){try{var t=v.getItem(e);return e&&JSON.parse(t)}catch(e){return null}},remove:function(e){try{return v.removeItem(e),y.session}catch(e){return y.session}},clear:function(){try{return v.clear(),y.session}catch(e){return y.session}}},local:{set:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:864e5;try{var o={now:+new Date,expire:n?r:0,data:t};return p.setItem(e,JSON.stringify(o)),y.local}catch(e){return y.local}},get:function(e){try{var t=p.getItem(e),n=null,r=null;if(t&&(n=JSON.parse(t)),n&&n.data)n.expire>0&&+new Date-1*n.now>n.expire?y.local.remove(e):r=n.data;else r=n;return r}catch(e){return null}},remove:function(e){try{return p.removeItem(e),y.local}catch(e){return y.local}},clear:function(){try{return p.clear(),y.local}catch(e){return y.local}}}},w=1;function b(e){var t=[];for(var n in e)t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t.join("&")}e.add=i,e.addClass=function(e,n){if(e&&n&&!a(e,n))if(e.classList)e.classList.add(n);else{var r="String"===t(e)?document.querySelector(e):e;if(!r)return;var o=r.className;r.className="".concat(o," ").concat(n)}},e.bottomVisible=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return Math.ceil(document.documentElement.clientHeight+window.scrollY)+e>=(document.documentElement.scrollHeight||document.documentElement.clientHeight)},e.cache=y,e.compose=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))},e.copy=function(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",t.style.top="-9999px",document.body.appendChild(t);var n=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);t.select(),document.execCommand("copy"),document.body.removeChild(t),n&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(n))},e.curry=function e(t){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.length,r=arguments.length,o=new Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];return n<=o.length?t.apply(void 0,o):e.bind.apply(e,[null,t,n].concat(o))},e.debounce=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,n=null;return function(){var r=arguments,o=this;n&&clearTimeout(n),n=setTimeout((function(){e.apply(o,r)}),t)}},e.deepCopy=function e(n){var r=t(n);if("Object"!==r&&"Array"!==r)return n;var o="Array"===r?[]:{};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(!n[i]||"Object"!==t(n[i])&&"Array"!==t(n[i])?o[i]=n[i]:o[i]=e(n[i]));return o},e.delCookie=function(e){if(e){var t=n(e),r=new Date,o=r.setTime(r.getTime()-864e5),i=";expires="+new Date(o).toGMTString();document.cookie=e+"="+escape(t)+i}},e.divide=function(e,t){var n,r,i=e.toString(),a=t.toString();try{n=o(i),r=o(a)}catch(e){}var c=r-n;return+(i.replace(".","")/a.replace(".","")*Math.pow(10,c))},e.elementIsVisibleInViewport=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.getBoundingClientRect(),r=n.top,o=n.left,i=n.bottom,a=n.right;return t?(r>0&&r<window.innerHeight||i>0&&i<window.innerHeight)&&(o>0&&o<window.innerWidth||a>0&&a<window.innerWidth):r>=0&&o>=0&&i<=window.innerHeight&&a<=window.innerWidth},e.formatDate=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD",n=new Date(e),o=n.getFullYear(),i=n.getMonth()+1,a=n.getDate(),c=n.getDay(),u=n.getHours(),l=n.getMinutes(),s=n.getSeconds(),d=["日","一","二","三","四","五","六"],f=function(e){var t=e>9?e+"":"0"+e;return r((function(n){return 2===n.length?t:e+""}))};return t.replace(/([Y]+)/g,r((function(e){return 4===e.length?o+"":(o+"").slice(2)}))).replace(/([W]+)/g,r((function(e){return 2===e.length?d[c]:c+""}))).replace(/([M]+)/g,f(i)).replace(/([D]+)/g,f(a)).replace(/([h]+)/g,f(u)).replace(/([m]+)/g,f(l)).replace(/([s]+)/g,f(s))},e.formatNum=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if("number"!=typeof e&&"string"!=typeof e||null==t)return e;var r=e.toString().split("."),o=r[1];o=o||"";var i=r[0].replace(/(?!^)(?=(\d{3})+$)/g,t).replace(/^/,n);return o?i+"."+o:i},e.gcd=d,e.getCookie=n,e.getDevice=function(){var e=navigator.userAgent.toLowerCase();return-1!==e.indexOf("iphone")?"iphone":-1!==e.indexOf("ipad")?"ipad":-1!==e.indexOf("android")?"android":""},e.getEnv=function(){var e=navigator.userAgent.toLowerCase();return/mobile|android/.test(e)?/micromessenger(\/[\d]+)*/.test(e)?"weixin":/qq\/(\/[\d]+)*/.test(e)||/qzone\//.test(e)?"qq":"h5":"pc"},e.getGbLen=function(e){for(var t=0,n=e||"",r=0;r<n.length;r++)n.charCodeAt(r)>127||94===n.charCodeAt(r)?t+=2:t++;return t},e.getHash=function(){var e=window.location.hash;if(!e)return"";var t=/#([^#]+)$/.exec(e);return t?t[1]:""},e.getKeyByVal=function(e,n){if("Object"!==t(n))return"";for(var r="",o=0,i=Object.keys(n);o<i.length;o++){var a=i[o];if(n[a]===e){r=a;break}}return r},e.getQuery=function(e){var t=window.location.search.slice(1);if(t||(t=window.location.href.split("?")[1]),!t)return"";var n=t.split("&").reduce((function(e,t){var n=t.split("=");return e[n[0]]=decodeURIComponent(n[1]),e}),{});return e?n[e]:n},e.getType=t,e.getValByVal=function(e,t,n){var r=Object.assign({},{key:"key",value:"value"},n);try{var o=!0,i=!1,a=void 0;try{for(var c,u=t[Symbol.iterator]();!(o=(c=u.next()).done);o=!0){var l=c.value;if(l[r.value]===e)return l[r.key]}}catch(e){i=!0,a=e}finally{try{o||null==u.return||u.return()}finally{if(i)throw a}}}catch(e){}},e.hasClass=a,e.isArrayLike=function(e){return null!=e&&"function"==typeof e[Symbol.iterator]},e.isIphoneX=function(){return!("undefined"==typeof window||!window)&&(/iphone/gi.test(window.navigator.userAgent)&&window.screen.height>=812)},e.isSupportWebp=function(){if(null!==y.local.get("support_webp"))return y.local.get("support_webp");var e=!![].map&&0===document.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp");return y.local.set("support_webp",e),e},e.jsonpAdapter=function(e){return new Promise((function(t,n){var r=document.createElement("script"),o=e.url;if(e.params){var i=b(e.params);i&&(o+=(o.indexOf("?")>=0?"&":"?")+i)}r.async=!0;var a="axiosJsonpCallback"+w++,c=window[a],u=!1;window[a]=function(e){(window[a]=c,u)||t({data:e,status:200})};var l={_:(new Date).getTime()};l[e.callbackParamName||"callback"]=a,o+=(o.indexOf("?")>=0?"&":"?")+b(l),r.onload=r.onreadystatechange=function(){r.readyState&&!/loaded|complete/.test(r.readyState)||(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),r=null)},r.onerror=function(e){r.onerror=null,r.parentNode&&r.parentNode.removeChild(r),n(e)},e.cancelToken&&e.cancelToken.promise.then((function(e){r&&(u=!0,n(e))})),r.src=o,document.head.appendChild(r)}))},e.listToHash=function(e,t){return e.reduce((function(e,n){var r=n[t];return void 0!==r&&(e[r]=n),e}),{})},e.listener=function(e,t,n){return e.addEventListener?(e.addEventListener(t,n,!1),{remove:function(){e.removeEventListener(t,n,!1)}}):e.attachEvent?(e.attachEvent("on"+t,n),{remove:function(){e.detachEvent("on"+t,n)}}):void 0},e.lockMaskScroll=s,e.mixParams=function(e,t){var n=Object.keys(e);return n.length?n.reduce((function(n,r){return n[t[r]||r]=e[r],n}),{}):e},e.multiply=function(e,t){var n,r,i=e.toString(),a=t.toString();try{n=o(i),r=o(a)}catch(e){}var c=n+r;return+(i.replace(".","")*a.replace(".","")/Math.pow(10,c))},e.objectToObjArray=function(e,n,r){return"Object"!==t(e)||"String"!==t(n)||"String"!==t(r)?(console.warn("参数格式错误！"),[]):Object.entries(e).map((function(e){var t={};return t[n]=e[0],t[r]=e[1],t}))},e.off=m,e.on=f,e.pick=function(e,n){if("Object"===t(e)||"Array"===t(n)){var r={};return n.forEach((function(t){Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t])})),r}},e.removeClass=function(e,n){if(e&&n&&a(e,n))if(e.classList)e.classList.remove(n);else{var r="String"===t(e)?document.querySelector(e):e;if(!r)return;var o=r.className.split(" ").filter((function(e){return e!==n}));r.className=o.join(" ")}},e.scm=function(e,t){return e*t/d(e,t)},e.scrollTo=function(e){var t=null;window.cancelAnimationFrame(t),t=window.requestAnimationFrame((function n(){var r,o=document.body.scrollTop||document.documentElement.scrollTop;o>e?o>0?(document.body.scrollTop=document.documentElement.scrollTop=o-Math.floor((o-e)/3),t=window.requestAnimationFrame(n),r=document.documentElement.scrollTop||document.body.scrollTop,Math.abs(r-o)<=2&&window.cancelAnimationFrame(t)):window.cancelAnimationFrame(t):o<e?(document.body.scrollTop=document.documentElement.scrollTop=o+Math.ceil((e-o)/3),t=window.requestAnimationFrame(n),function(e){Math.abs(e-o)<=2&&window.cancelAnimationFrame(t)}(document.documentElement.scrollTop||document.body.scrollTop)):window.cancelAnimationFrame(t)}))},e.scrollToTop=function e(){var t=document.documentElement.scrollTop||document.body.scrollTop;t>0?(window.requestAnimationFrame(e),window.scrollTo(0,t-t/8)):window.cancelAnimationFrame(e)},e.setCookie=function(e,n,r){if(e&&n){var o=r?function(e){var n=t(e),r=";expires=";if(["Date","Number"].includes(n))r+=new Date(e).toGMTString();else if("String"===n){var o=/^(d|h|m)(\d+)$/.exec(e);if(!o)return"";var i=new Date;switch(o[1]){case"d":i.setTime(i.getTime()+864e5*+o[2]);break;case"h":i.setTime(i.getTime()+36e5*+o[2]);break;default:i.setTime(i.getTime()+6e4*+o[2])}r+=i.toGMTString()}else r="";return r}(r):"";document.cookie=e+"="+escape(n)+o}},e.subGbString=function(e,t){var n=/[^\x00-\xff]/g;if(e.replace(n,"aa").length<=t)return e;for(var r=Math.floor(t/2),o=e.length;r<o;r++)if(e.substring(0,r).replace(n,"aa").length>=t)return e.substring(0,r)},e.subtract=function(e,t){return i(e,-t)},e.throttle=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,n=!0;return function(){var r=arguments,o=this;n&&(n=!1,setTimeout((function(){e.apply(o,r),n=!0}),t))}},e.toFixed=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if("number"!=typeof e&&"string"!=typeof e||t<0)return e;var r=e.toString().split("."),o=r[1];if((o?o.length:0)<=t)return e.toFixed(t);var i,a=r[0]+""+o.substr(0,t)+"."+o.substr(t);switch(n){case"ceil":i=Math.ceil(a)/Math.pow(10,t);break;case"floor":i=Math.floor(a)/Math.pow(10,t);break;case"round":i=+o[t]>=5?Math.ceil(a)/Math.pow(10,t):Math.floor(a)/Math.pow(10,t);break;default:i=e}return i.toString()},e.trimAll=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";try{var n=new RegExp(t+"*","g");return e.replace(n,"")}catch(e){}},e.trimLandR=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";try{var n=new RegExp("^"+t+"*|"+t+"*$","g");return e.replace(n,"")}catch(e){}},e.trimLeft=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";try{var n=new RegExp(t+"*");return e.replace(n,"")}catch(e){}},e.trimRight=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";try{var n=new RegExp(t+"*$");return e.replace(n,"")}catch(e){}},Object.defineProperty(e,"__esModule",{value:!0})}));