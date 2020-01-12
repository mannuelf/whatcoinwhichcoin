/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{103:function(t,e,n){"use strict";var r={name:"NoSsr",functional:!0,props:{placeholder:String,placeholderTag:{type:String,default:"div"}},render:function(t,e){var n=e.parent,r=e.slots,o=e.props,l=r(),c=l.default;void 0===c&&(c=[]);var f=l.placeholder;return n._isMounted?c:(n.$once("hook:mounted",function(){n.$forceUpdate()}),o.placeholderTag&&(o.placeholder||f)?t(o.placeholderTag,{class:["no-ssr-placeholder"]},o.placeholder||f):c.length>0?c.map(function(){return t(!1)}):t(!1))}};t.exports=r},15:function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var content=function(t,e){var content=t[1]||"",n=t[3];if(!n)return content;if(e&&"function"==typeof btoa){var r=(l=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(l))))+" */"),o=n.sources.map(function(source){return"/*# sourceURL="+n.sourceRoot+source+" */"});return[content].concat(o).concat([r]).join("\n")}var l;return[content].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+content+"}":content}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(i=0;i<t.length;i++){var l=t[i];null!=l[0]&&r[l[0]]||(n&&!l[2]?l[2]=n:n&&(l[2]="("+l[2]+") and ("+n+")"),e.push(l))}},e}},16:function(t,e,n){"use strict";function r(t,e){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],l=o[0],c={id:t+":"+i,css:o[1],media:o[2],sourceMap:o[3]};r[l]?r[l].parts.push(c):n.push(r[l]={id:l,parts:[c]})}return n}n.r(e),n.d(e,"default",function(){return y});var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l={},head=o&&(document.head||document.getElementsByTagName("head")[0]),c=null,f=0,h=!1,m=function(){},v=null,d="data-vue-ssr-id",_="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function y(t,e,n,o){h=n,v=o||{};var c=r(t,e);return $(c),function(e){for(var n=[],i=0;i<c.length;i++){var o=c[i];(f=l[o.id]).refs--,n.push(f)}e?$(c=r(t,e)):c=[];for(i=0;i<n.length;i++){var f;if(0===(f=n[i]).refs){for(var h=0;h<f.parts.length;h++)f.parts[h]();delete l[f.id]}}}}function $(t){for(var i=0;i<t.length;i++){var e=t[i],n=l[e.id];if(n){n.refs++;for(var r=0;r<n.parts.length;r++)n.parts[r](e.parts[r]);for(;r<e.parts.length;r++)n.parts.push(k(e.parts[r]));n.parts.length>e.parts.length&&(n.parts.length=e.parts.length)}else{var o=[];for(r=0;r<e.parts.length;r++)o.push(k(e.parts[r]));l[e.id]={id:e.id,refs:1,parts:o}}}}function F(){var t=document.createElement("style");return t.type="text/css",head.appendChild(t),t}function k(t){var e,n,r=document.querySelector("style["+d+'~="'+t.id+'"]');if(r){if(h)return m;r.parentNode.removeChild(r)}if(_){var o=f++;r=c||(c=F()),e=D.bind(null,r,o,!1),n=D.bind(null,r,o,!0)}else r=F(),e=function(t,e){var n=e.css,r=e.media,o=e.sourceMap;r&&t.setAttribute("media",r);v.ssrId&&t.setAttribute(d,e.id);o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}var w,T=(w=[],function(t,e){return w[t]=e,w.filter(Boolean).join("\n")});function D(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=T(e,o);else{var l=document.createTextNode(o),c=t.childNodes;c[e]&&t.removeChild(c[e]),c.length?t.insertBefore(l,c[e]):t.appendChild(l)}}},73:function(t,e,n){"use strict";var r=["style","currency","currencyDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","localeMatcher","formatMatcher"];function o(t,e){"undefined"!=typeof console&&(console.warn("[vue-i18n] "+t),e&&console.warn(e.stack))}function l(t){return null!==t&&"object"==typeof t}var c=Object.prototype.toString,f="[object Object]";function h(t){return c.call(t)===f}function m(t){return null==t}function v(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];var n=null,r=null;return 1===t.length?l(t[0])||Array.isArray(t[0])?r=t[0]:"string"==typeof t[0]&&(n=t[0]):2===t.length&&("string"==typeof t[0]&&(n=t[0]),(l(t[1])||Array.isArray(t[1]))&&(r=t[1])),{locale:n,params:r}}function d(t){return JSON.parse(JSON.stringify(t))}var _=Object.prototype.hasOwnProperty;function y(t,e){return _.call(t,e)}function $(t){for(var e=arguments,output=Object(t),i=1;i<arguments.length;i++){var source=e[i];if(null!=source){var n=void 0;for(n in source)y(source,n)&&(l(source[n])?output[n]=$(output[n],source[n]):output[n]=source[n])}}return output}function F(a,b){if(a===b)return!0;var t=l(a),e=l(b);if(!t||!e)return!t&&!e&&String(a)===String(b);try{var n=Array.isArray(a),r=Array.isArray(b);if(n&&r)return a.length===b.length&&a.every(function(t,i){return F(t,b[i])});if(n||r)return!1;var o=Object.keys(a),c=Object.keys(b);return o.length===c.length&&o.every(function(t){return F(a[t],b[t])})}catch(t){return!1}}var k,w={beforeCreate:function(){var t=this.$options;if(t.i18n=t.i18n||(t.__i18n?{}:null),t.i18n)if(t.i18n instanceof ot){if(t.__i18n)try{var e={};t.__i18n.forEach(function(t){e=$(e,JSON.parse(t))}),Object.keys(e).forEach(function(n){t.i18n.mergeLocaleMessage(n,e[n])})}catch(t){0}this._i18n=t.i18n,this._i18nWatcher=this._i18n.watchI18nData(),this._i18n.subscribeDataChanging(this),this._subscribing=!0}else if(h(t.i18n)){if(this.$root&&this.$root.$i18n&&this.$root.$i18n instanceof ot&&(t.i18n.root=this.$root,t.i18n.formatter=this.$root.$i18n.formatter,t.i18n.fallbackLocale=this.$root.$i18n.fallbackLocale,t.i18n.silentTranslationWarn=this.$root.$i18n.silentTranslationWarn,t.i18n.silentFallbackWarn=this.$root.$i18n.silentFallbackWarn,t.i18n.pluralizationRules=this.$root.$i18n.pluralizationRules,t.i18n.preserveDirectiveContent=this.$root.$i18n.preserveDirectiveContent),t.__i18n)try{var n={};t.__i18n.forEach(function(t){n=$(n,JSON.parse(t))}),t.i18n.messages=n}catch(t){0}this._i18n=new ot(t.i18n),this._i18nWatcher=this._i18n.watchI18nData(),this._i18n.subscribeDataChanging(this),this._subscribing=!0,(void 0===t.i18n.sync||t.i18n.sync)&&(this._localeWatcher=this.$i18n.watchLocale())}else 0;else this.$root&&this.$root.$i18n&&this.$root.$i18n instanceof ot?(this._i18n=this.$root.$i18n,this._i18n.subscribeDataChanging(this),this._subscribing=!0):t.parent&&t.parent.$i18n&&t.parent.$i18n instanceof ot&&(this._i18n=t.parent.$i18n,this._i18n.subscribeDataChanging(this),this._subscribing=!0)},beforeDestroy:function(){if(this._i18n){var t=this;this.$nextTick(function(){t._subscribing&&(t._i18n.unsubscribeDataChanging(t),delete t._subscribing),t._i18nWatcher&&(t._i18nWatcher(),t._i18n.destroyVM(),delete t._i18nWatcher),t._localeWatcher&&(t._localeWatcher(),delete t._localeWatcher),t._i18n=null})}}},T={name:"i18n",functional:!0,props:{tag:{type:String,default:"span"},path:{type:String,required:!0},locale:{type:String},places:{type:[Array,Object]}},render:function(t,e){var n=e.props,data=e.data,r=e.children,o=e.parent.$i18n;if(r=(r||[]).filter(function(t){return t.tag||(t.text=t.text.trim())}),!o)return r;var path=n.path,l=n.locale,c={},f=n.places||{},h=(Array.isArray(f)?f.length:Object.keys(f).length,r.every(function(t){if(t.data&&t.data.attrs){var e=t.data.attrs.place;return void 0!==e&&""!==e}}));return Array.isArray(f)?f.forEach(function(t,i){c[i]=t}):Object.keys(f).forEach(function(t){c[t]=f[t]}),r.forEach(function(t,i){var e=h?""+t.data.attrs.place:""+i;c[e]=t}),t(n.tag,data,o.i(path,l,c))}},D={name:"i18n-n",functional:!0,props:{tag:{type:String,default:"span"},value:{type:Number,required:!0},format:{type:[String,Object]},locale:{type:String}},render:function(t,e){var n=e.props,o=e.parent,data=e.data,c=o.$i18n;if(!c)return null;var f=null,h=null;"string"==typeof n.format?f=n.format:l(n.format)&&(n.format.key&&(f=n.format.key),h=Object.keys(n.format).reduce(function(t,e){var o;return r.includes(e)?Object.assign({},t,((o={})[e]=n.format[e],o)):t},null));var m=n.locale||c.locale,v=c._ntp(n.value,m,f,h),d=v.map(function(t,e){var n,slot=data.scopedSlots&&data.scopedSlots[t.type];return slot?slot(((n={})[t.type]=t.value,n.index=e,n.parts=v,n)):t.value});return t(n.tag,{attrs:data.attrs,class:data.class,staticClass:data.staticClass},d)}};function x(t,e,n){O(t,n)&&M(t,e,n)}function C(t,e,n,r){if(O(t,n)){var o=n.context.$i18n;(function(t,e){var n=e.context;return t._locale===n.$i18n.locale})(t,n)&&F(e.value,e.oldValue)&&F(t._localeMessage,o.getLocaleMessage(o.locale))||M(t,e,n)}}function L(t,e,n,r){if(n.context){var l=n.context.$i18n||{};e.modifiers.preserve||l.preserveDirectiveContent||(t.textContent=""),t._vt=void 0,delete t._vt,t._locale=void 0,delete t._locale,t._localeMessage=void 0,delete t._localeMessage}else o("Vue instance does not exists in VNode context")}function O(t,e){var n=e.context;return n?!!n.$i18n||(o("VueI18n instance does not exists in Vue instance"),!1):(o("Vue instance does not exists in VNode context"),!1)}function M(t,e,n){var r,l,c=function(t){var path,e,n,r;"string"==typeof t?path=t:h(t)&&(path=t.path,e=t.locale,n=t.args,r=t.choice);return{path:path,locale:e,args:n,choice:r}}(e.value),path=c.path,f=c.locale,m=c.args,v=c.choice;if(path||f||m)if(path){var d=n.context;t._vt=t.textContent=v?(r=d.$i18n).tc.apply(r,[path,v].concat(N(f,m))):(l=d.$i18n).t.apply(l,[path].concat(N(f,m))),t._locale=d.$i18n.locale,t._localeMessage=d.$i18n.getLocaleMessage(d.$i18n.locale)}else o("`path` is required in v-t directive");else o("value type not supported")}function N(t,e){var n=[];return t&&n.push(t),e&&(Array.isArray(e)||h(e))&&n.push(e),n}function j(t){j.installed=!0;(k=t).version&&Number(k.version.split(".")[0]);(function(t){t.prototype.hasOwnProperty("$i18n")||Object.defineProperty(t.prototype,"$i18n",{get:function(){return this._i18n}}),t.prototype.$t=function(t){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];var r=this.$i18n;return r._t.apply(r,[t,r.locale,r._getMessages(),this].concat(e))},t.prototype.$tc=function(t,e){for(var n=[],r=arguments.length-2;r-- >0;)n[r]=arguments[r+2];var o=this.$i18n;return o._tc.apply(o,[t,o.locale,o._getMessages(),this,e].concat(n))},t.prototype.$te=function(t,e){var n=this.$i18n;return n._te(t,n.locale,n._getMessages(),e)},t.prototype.$d=function(t){for(var e,n=[],r=arguments.length-1;r-- >0;)n[r]=arguments[r+1];return(e=this.$i18n).d.apply(e,[t].concat(n))},t.prototype.$n=function(t){for(var e,n=[],r=arguments.length-1;r-- >0;)n[r]=arguments[r+1];return(e=this.$i18n).n.apply(e,[t].concat(n))}})(k),k.mixin(w),k.directive("t",{bind:x,update:C,unbind:L}),k.component(T.name,T),k.component(D.name,D),k.config.optionMergeStrategies.i18n=function(t,e){return void 0===e?t:e}}var S=function(){this._caches=Object.create(null)};S.prototype.interpolate=function(t,e){if(!e)return[t];var n=this._caches[t];return n||(n=function(t){var e=[],n=0,text="";for(;n<t.length;){var r=t[n++];if("{"===r){text&&e.push({type:"text",value:text}),text="";var sub="";for(r=t[n++];void 0!==r&&"}"!==r;)sub+=r,r=t[n++];var o="}"===r,l=W.test(sub)?"list":o&&A.test(sub)?"named":"unknown";e.push({value:sub,type:l})}else"%"===r?"{"!==t[n]&&(text+=r):text+=r}return text&&e.push({type:"text",value:text}),e}(t),this._caches[t]=n),function(t,e){var n=[],r=0,o=Array.isArray(e)?"list":l(e)?"named":"unknown";if("unknown"===o)return n;for(;r<t.length;){var c=t[r];switch(c.type){case"text":n.push(c.value);break;case"list":n.push(e[parseInt(c.value,10)]);break;case"named":"named"===o&&n.push(e[c.value]);break;case"unknown":0}r++}return n}(n,e)};var W=/^(?:\d)+/,A=/^(?:\w)+/;var R=0,I=1,E=2,V=3,U=0,P=4,z=5,J=6,B=7,G=8,H=[];H[U]={ws:[U],ident:[3,R],"[":[P],eof:[B]},H[1]={ws:[1],".":[2],"[":[P],eof:[B]},H[2]={ws:[2],ident:[3,R],0:[3,R],number:[3,R]},H[3]={ident:[3,R],0:[3,R],number:[3,R],ws:[1,I],".":[2,I],"[":[P,I],eof:[B,I]},H[P]={"'":[z,R],'"':[J,R],"[":[P,E],"]":[1,V],eof:G,else:[P,R]},H[z]={"'":[P,R],eof:G,else:[z,R]},H[J]={'"':[P,R],eof:G,else:[J,R]};var K=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function Q(t){if(null==t)return"eof";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"ident";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"ws"}return"ident"}function X(path){var t,a,e,n=path.trim();return("0"!==path.charAt(0)||!isNaN(path))&&(e=n,K.test(e)?(a=(t=n).charCodeAt(0))!==t.charCodeAt(t.length-1)||34!==a&&39!==a?t:t.slice(1,-1):"*"+n)}var Y=function(){this._cache=Object.create(null)};Y.prototype.parsePath=function(path){var t=this._cache[path];return t||(t=function(path){var t,e,n,r,o,l,c,f=[],h=-1,m=U,v=0,d=[];function _(){var t=path[h+1];if(m===z&&"'"===t||m===J&&'"'===t)return h++,n="\\"+t,d[R](),!0}for(d[I]=function(){void 0!==e&&(f.push(e),e=void 0)},d[R]=function(){void 0===e?e=n:e+=n},d[E]=function(){d[R](),v++},d[V]=function(){if(v>0)v--,m=P,d[R]();else{if(v=0,!1===(e=X(e)))return!1;d[I]()}};null!==m;)if("\\"!==(t=path[++h])||!_()){if(r=Q(t),(o=(c=H[m])[r]||c.else||G)===G)return;if(m=o[0],(l=d[o[1]])&&(n=void 0===(n=o[2])?t:n,!1===l()))return;if(m===B)return f}}(path))&&(this._cache[path]=t),t||[]},Y.prototype.getPathValue=function(t,path){if(!l(t))return null;var e=this.parsePath(path);if(0===e.length)return null;for(var n=e.length,r=t,i=0;i<n;){var o=r[e[i]];if(void 0===o)return null;r=o,i++}return r};var Z,tt=/(?:@(?:\.[a-z]+)?:(?:[\w\-_|.]+|\([\w\-_|.]+\)))/g,et=/^@(?:\.([a-z]+))?:/,nt=/[()]/g,it={upper:function(t){return t.toLocaleUpperCase()},lower:function(t){return t.toLocaleLowerCase()}},at=new S,ot=function(t){var e=this;void 0===t&&(t={}),!k&&"undefined"!=typeof window&&window.Vue&&j(window.Vue);var n=t.locale||"en-US",r=t.fallbackLocale||"en-US",o=t.messages||{},l=t.dateTimeFormats||{},c=t.numberFormats||{};this._vm=null,this._formatter=t.formatter||at,this._missing=t.missing||null,this._root=t.root||null,this._sync=void 0===t.sync||!!t.sync,this._fallbackRoot=void 0===t.fallbackRoot||!!t.fallbackRoot,this._silentTranslationWarn=void 0!==t.silentTranslationWarn&&!!t.silentTranslationWarn,this._silentFallbackWarn=void 0!==t.silentFallbackWarn&&!!t.silentFallbackWarn,this._dateTimeFormatters={},this._numberFormatters={},this._path=new Y,this._dataListeners=[],this._preserveDirectiveContent=void 0!==t.preserveDirectiveContent&&!!t.preserveDirectiveContent,this.pluralizationRules=t.pluralizationRules||{},this._exist=function(t,n){return!(!t||!n)&&(!m(e._path.getPathValue(t,n))||!!t[n])},this._initVM({locale:n,fallbackLocale:r,messages:o,dateTimeFormats:l,numberFormats:c})},st={vm:{configurable:!0},messages:{configurable:!0},dateTimeFormats:{configurable:!0},numberFormats:{configurable:!0},availableLocales:{configurable:!0},locale:{configurable:!0},fallbackLocale:{configurable:!0},missing:{configurable:!0},formatter:{configurable:!0},silentTranslationWarn:{configurable:!0},silentFallbackWarn:{configurable:!0},preserveDirectiveContent:{configurable:!0}};ot.prototype._initVM=function(data){var t=k.config.silent;k.config.silent=!0,this._vm=new k({data:data}),k.config.silent=t},ot.prototype.destroyVM=function(){this._vm.$destroy()},ot.prototype.subscribeDataChanging=function(t){this._dataListeners.push(t)},ot.prototype.unsubscribeDataChanging=function(t){!function(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)t.splice(n,1)}}(this._dataListeners,t)},ot.prototype.watchI18nData=function(){var t=this;return this._vm.$watch("$data",function(){for(var i=t._dataListeners.length;i--;)k.nextTick(function(){t._dataListeners[i]&&t._dataListeners[i].$forceUpdate()})},{deep:!0})},ot.prototype.watchLocale=function(){if(!this._sync||!this._root)return null;var t=this._vm;return this._root.$i18n.vm.$watch("locale",function(e){t.$set(t,"locale",e),t.$forceUpdate()},{immediate:!0})},st.vm.get=function(){return this._vm},st.messages.get=function(){return d(this._getMessages())},st.dateTimeFormats.get=function(){return d(this._getDateTimeFormats())},st.numberFormats.get=function(){return d(this._getNumberFormats())},st.availableLocales.get=function(){return Object.keys(this.messages).sort()},st.locale.get=function(){return this._vm.locale},st.locale.set=function(t){this._vm.$set(this._vm,"locale",t)},st.fallbackLocale.get=function(){return this._vm.fallbackLocale},st.fallbackLocale.set=function(t){this._vm.$set(this._vm,"fallbackLocale",t)},st.missing.get=function(){return this._missing},st.missing.set=function(t){this._missing=t},st.formatter.get=function(){return this._formatter},st.formatter.set=function(t){this._formatter=t},st.silentTranslationWarn.get=function(){return this._silentTranslationWarn},st.silentTranslationWarn.set=function(t){this._silentTranslationWarn=t},st.silentFallbackWarn.get=function(){return this._silentFallbackWarn},st.silentFallbackWarn.set=function(t){this._silentFallbackWarn=t},st.preserveDirectiveContent.get=function(){return this._preserveDirectiveContent},st.preserveDirectiveContent.set=function(t){this._preserveDirectiveContent=t},ot.prototype._getMessages=function(){return this._vm.messages},ot.prototype._getDateTimeFormats=function(){return this._vm.dateTimeFormats},ot.prototype._getNumberFormats=function(){return this._vm.numberFormats},ot.prototype._warnDefault=function(t,e,n,r,o){if(!m(n))return n;if(this._missing){var l=this._missing.apply(null,[t,e,r,o]);if("string"==typeof l)return l}else 0;return e},ot.prototype._isFallbackRoot=function(t){return!t&&!m(this._root)&&this._fallbackRoot},ot.prototype._isSilentFallback=function(t){return this._silentFallbackWarn&&(this._isFallbackRoot()||t!==this.fallbackLocale)},ot.prototype._interpolate=function(t,e,n,r,o,l,c){if(!e)return null;var f,v=this._path.getPathValue(e,n);if(Array.isArray(v)||h(v))return v;if(m(v)){if(!h(e))return null;if("string"!=typeof(f=e[n]))return null}else{if("string"!=typeof v)return null;f=v}return(f.indexOf("@:")>=0||f.indexOf("@.")>=0)&&(f=this._link(t,e,f,r,"raw",l,c)),this._render(f,o,l,n)},ot.prototype._link=function(t,e,n,r,o,l,c){var f=n,h=f.match(tt);for(var m in h)if(h.hasOwnProperty(m)){var link=h[m],v=link.match(et),d=v[0],_=v[1],y=link.replace(d,"").replace(nt,"");if(c.includes(y))return f;c.push(y);var $=this._interpolate(t,e,y,r,"raw"===o?"string":o,"raw"===o?void 0:l,c);if(this._isFallbackRoot($)){if(!this._root)throw Error("unexpected error");var F=this._root.$i18n;$=F._translate(F._getMessages(),F.locale,F.fallbackLocale,y,r,o,l)}$=this._warnDefault(t,y,$,r,Array.isArray(l)?l:[l]),it.hasOwnProperty(_)&&($=it[_]($)),c.pop(),f=$?f.replace(link,$):f}return f},ot.prototype._render=function(t,e,n,path){var r=this._formatter.interpolate(t,n,path);return r||(r=at.interpolate(t,n,path)),"string"===e?r.join(""):r},ot.prototype._translate=function(t,e,n,r,o,l,c){var f=this._interpolate(e,t[e],r,o,l,c,[r]);return m(f)&&m(f=this._interpolate(n,t[n],r,o,l,c,[r]))?null:f},ot.prototype._t=function(t,e,n,r){for(var o,l=[],c=arguments.length-4;c-- >0;)l[c]=arguments[c+4];if(!t)return"";var f=v.apply(void 0,l),h=f.locale||e,m=this._translate(n,h,this.fallbackLocale,t,r,"string",f.params);if(this._isFallbackRoot(m)){if(!this._root)throw Error("unexpected error");return(o=this._root).$t.apply(o,[t].concat(l))}return this._warnDefault(h,t,m,r,l)},ot.prototype.t=function(t){for(var e,n=[],r=arguments.length-1;r-- >0;)n[r]=arguments[r+1];return(e=this)._t.apply(e,[t,this.locale,this._getMessages(),null].concat(n))},ot.prototype._i=function(t,e,n,r,o){var l=this._translate(n,e,this.fallbackLocale,t,r,"raw",o);if(this._isFallbackRoot(l)){if(!this._root)throw Error("unexpected error");return this._root.$i18n.i(t,e,o)}return this._warnDefault(e,t,l,r,[o])},ot.prototype.i=function(t,e,n){return t?("string"!=typeof e&&(e=this.locale),this._i(t,e,this._getMessages(),null,n)):""},ot.prototype._tc=function(t,e,n,r,o){for(var l,c=[],f=arguments.length-5;f-- >0;)c[f]=arguments[f+5];if(!t)return"";void 0===o&&(o=1);var h={count:o,n:o},m=v.apply(void 0,c);return m.params=Object.assign(h,m.params),c=null===m.locale?[m.params]:[m.locale,m.params],this.fetchChoice((l=this)._t.apply(l,[t,e,n,r].concat(c)),o)},ot.prototype.fetchChoice=function(t,e){if(!t&&"string"!=typeof t)return null;var n=t.split("|");return n[e=this.getChoiceIndex(e,n.length)]?n[e].trim():t},ot.prototype.getChoiceIndex=function(t,e){var n,r;return this.locale in this.pluralizationRules?this.pluralizationRules[this.locale].apply(this,[t,e]):(n=t,r=e,n=Math.abs(n),2===r?n?n>1?1:0:1:n?Math.min(n,2):0)},ot.prototype.tc=function(t,e){for(var n,r=[],o=arguments.length-2;o-- >0;)r[o]=arguments[o+2];return(n=this)._tc.apply(n,[t,this.locale,this._getMessages(),null,e].concat(r))},ot.prototype._te=function(t,e,n){for(var r=[],o=arguments.length-3;o-- >0;)r[o]=arguments[o+3];var l=v.apply(void 0,r).locale||e;return this._exist(n[l],t)},ot.prototype.te=function(t,e){return this._te(t,this.locale,this._getMessages(),e)},ot.prototype.getLocaleMessage=function(t){return d(this._vm.messages[t]||{})},ot.prototype.setLocaleMessage=function(t,e){this._vm.$set(this._vm.messages,t,e)},ot.prototype.mergeLocaleMessage=function(t,e){this._vm.$set(this._vm.messages,t,$(this._vm.messages[t]||{},e))},ot.prototype.getDateTimeFormat=function(t){return d(this._vm.dateTimeFormats[t]||{})},ot.prototype.setDateTimeFormat=function(t,e){this._vm.$set(this._vm.dateTimeFormats,t,e)},ot.prototype.mergeDateTimeFormat=function(t,e){this._vm.$set(this._vm.dateTimeFormats,t,$(this._vm.dateTimeFormats[t]||{},e))},ot.prototype._localizeDateTime=function(t,e,n,r,o){var l=e,c=r[l];if((m(c)||m(c[o]))&&(c=r[l=n]),m(c)||m(c[o]))return null;var f=c[o],h=l+"__"+o,v=this._dateTimeFormatters[h];return v||(v=this._dateTimeFormatters[h]=new Intl.DateTimeFormat(l,f)),v.format(t)},ot.prototype._d=function(t,e,n){if(!n)return new Intl.DateTimeFormat(e).format(t);var r=this._localizeDateTime(t,e,this.fallbackLocale,this._getDateTimeFormats(),n);if(this._isFallbackRoot(r)){if(!this._root)throw Error("unexpected error");return this._root.$i18n.d(t,n,e)}return r||""},ot.prototype.d=function(t){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];var r=this.locale,o=null;return 1===e.length?"string"==typeof e[0]?o=e[0]:l(e[0])&&(e[0].locale&&(r=e[0].locale),e[0].key&&(o=e[0].key)):2===e.length&&("string"==typeof e[0]&&(o=e[0]),"string"==typeof e[1]&&(r=e[1])),this._d(t,r,o)},ot.prototype.getNumberFormat=function(t){return d(this._vm.numberFormats[t]||{})},ot.prototype.setNumberFormat=function(t,e){this._vm.$set(this._vm.numberFormats,t,e)},ot.prototype.mergeNumberFormat=function(t,e){this._vm.$set(this._vm.numberFormats,t,$(this._vm.numberFormats[t]||{},e))},ot.prototype._getNumberFormatter=function(t,e,n,r,o,l){var c=e,f=r[c];if((m(f)||m(f[o]))&&(f=r[c=n]),m(f)||m(f[o]))return null;var h,v=f[o];if(l)h=new Intl.NumberFormat(c,Object.assign({},v,l));else{var d=c+"__"+o;(h=this._numberFormatters[d])||(h=this._numberFormatters[d]=new Intl.NumberFormat(c,v))}return h},ot.prototype._n=function(t,e,n,r){if(!ot.availabilities.numberFormat)return"";if(!n)return(r?new Intl.NumberFormat(e,r):new Intl.NumberFormat(e)).format(t);var o=this._getNumberFormatter(t,e,this.fallbackLocale,this._getNumberFormats(),n,r),l=o&&o.format(t);if(this._isFallbackRoot(l)){if(!this._root)throw Error("unexpected error");return this._root.$i18n.n(t,Object.assign({},{key:n,locale:e},r))}return l||""},ot.prototype.n=function(t){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];var o=this.locale,c=null,f=null;return 1===e.length?"string"==typeof e[0]?c=e[0]:l(e[0])&&(e[0].locale&&(o=e[0].locale),e[0].key&&(c=e[0].key),f=Object.keys(e[0]).reduce(function(t,n){var o;return r.includes(n)?Object.assign({},t,((o={})[n]=e[0][n],o)):t},null)):2===e.length&&("string"==typeof e[0]&&(c=e[0]),"string"==typeof e[1]&&(o=e[1])),this._n(t,o,c,f)},ot.prototype._ntp=function(t,e,n,r){if(!ot.availabilities.numberFormat)return[];if(!n)return(r?new Intl.NumberFormat(e,r):new Intl.NumberFormat(e)).formatToParts(t);var o=this._getNumberFormatter(t,e,this.fallbackLocale,this._getNumberFormats(),n,r),l=o&&o.formatToParts(t);if(this._isFallbackRoot(l)){if(!this._root)throw Error("unexpected error");return this._root.$i18n._ntp(t,e,n,r)}return l||[]},Object.defineProperties(ot.prototype,st),Object.defineProperty(ot,"availabilities",{get:function(){if(!Z){var t="undefined"!=typeof Intl;Z={dateTimeFormat:t&&void 0!==Intl.DateTimeFormat,numberFormat:t&&void 0!==Intl.NumberFormat}}return Z}}),ot.install=j,ot.version="8.10.0",e.a=ot}}]);