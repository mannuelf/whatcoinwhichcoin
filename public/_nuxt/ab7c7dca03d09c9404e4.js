(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{190:function(n,t,e){"use strict";var r={name:"CoinPriceTicker",props:{name:{type:String,default:function(){return"BTC"}},fiat:{type:String,default:function(){return"$"}},price:{type:String,default:function(){return"0.00"}}}},o=e(3),component=Object(o.a)(r,function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("a",{staticClass:"block__btn--std animated flipInX",attrs:{href:"#"}},[e("span",{staticClass:"block__btn--coin"},[n._v(n._s(n.name))]),n._v(" "),e("span",{staticClass:"block__btn--currency"},[n._v(n._s(n.fiat))]),n._v(" "),e("span",{staticClass:"block__btn--price"},[n._v(n._s(n.price))])])])},[],!1,null,null,null);t.a=component.exports},191:function(n,t,e){"use strict";var r={name:"ErrorNotice",props:{errorMessage:{type:String,default:function(){return"Oops something bad happened, please reload the page."}}}},o=e(3),component=Object(o.a)(r,function(){var n=this.$createElement,t=this._self._c||n;return t("div",[t("p",[this._v(this._s(this.errorMessage))])])},[],!1,null,null,null);t.a=component.exports},192:function(n,t,e){"use strict";var r={name:"LoadingSpinner"},o=(e(194),e(3)),component=Object(o.a)(r,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var n=this.$createElement,t=this._self._c||n;return t("div",[t("div",{staticClass:"lds-ellipsis"},[t("div"),t("div"),t("div"),t("div")])])}],!1,null,"3b8e3da2",null);t.a=component.exports},193:function(n,t,e){var content=e(195);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(15).default)("5256a578",content,!0,{sourceMap:!0})},194:function(n,t,e){"use strict";var r=e(193);e.n(r).a},195:function(n,t,e){(n.exports=e(14)(!0)).push([n.i,".lds-ellipsis[data-v-3b8e3da2] {\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 64px;\n  margin: 0 40%;\n}\n.lds-ellipsis div[data-v-3b8e3da2] {\n  position: absolute;\n  top: 27px;\n  width: 11px;\n  height: 11px;\n  border-radius: 50%;\n  background: #1b98e0;\n  -webkit-animation-timing-function: cubic-bezier(0, 1, 1, 0);\n          animation-timing-function: cubic-bezier(0, 1, 1, 0);\n}\n.lds-ellipsis div[data-v-3b8e3da2]:nth-child(1) {\n  left: 6px;\n  -webkit-animation: lds-ellipsis1-data-v-3b8e3da2 .6s infinite;\n          animation: lds-ellipsis1-data-v-3b8e3da2 .6s infinite;\n}\n.lds-ellipsis div[data-v-3b8e3da2]:nth-child(2) {\n  left: 6px;\n  -webkit-animation: lds-ellipsis2-data-v-3b8e3da2 .6s infinite;\n          animation: lds-ellipsis2-data-v-3b8e3da2 .6s infinite;\n}\n.lds-ellipsis div[data-v-3b8e3da2]:nth-child(3) {\n  left: 26px;\n  -webkit-animation: lds-ellipsis2-data-v-3b8e3da2 .6s infinite;\n          animation: lds-ellipsis2-data-v-3b8e3da2 .6s infinite;\n}\n.lds-ellipsis div[data-v-3b8e3da2]:nth-child(4) {\n  left: 45px;\n  -webkit-animation: lds-ellipsis3-data-v-3b8e3da2 .6s infinite;\n          animation: lds-ellipsis3-data-v-3b8e3da2 .6s infinite;\n}\n@-webkit-keyframes lds-ellipsis1-data-v-3b8e3da2 {\n0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n}\n100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n}\n@keyframes lds-ellipsis1-data-v-3b8e3da2 {\n0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n}\n100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n}\n@-webkit-keyframes lds-ellipsis3-data-v-3b8e3da2 {\n0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n}\n}\n@keyframes lds-ellipsis3-data-v-3b8e3da2 {\n0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n}\n}\n@-webkit-keyframes lds-ellipsis2-data-v-3b8e3da2 {\n0% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n}\n100% {\n    -webkit-transform: translate(19px, 0);\n            transform: translate(19px, 0);\n}\n}\n@keyframes lds-ellipsis2-data-v-3b8e3da2 {\n0% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n}\n100% {\n    -webkit-transform: translate(19px, 0);\n            transform: translate(19px, 0);\n}\n}\n","",{version:3,sources:["/Users/Adminnoroff/workspace/whatcoinwhichcoin/components/LoadingSpinner.vue"],names:[],mappings:"AAwCA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,aAAa;AAAA;AAEf;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;EACnB,2DAAmD;UAAnD,mDAAmD;AAAA;AAErD;EACE,SAAS;EACT,6DAAsC;UAAtC,qDAAsC;AAAA;AAExC;EACE,SAAS;EACT,6DAAsC;UAAtC,qDAAsC;AAAA;AAExC;EACE,UAAU;EACV,6DAAsC;UAAtC,qDAAsC;AAAA;AAExC;EACE,UAAU;EACV,6DAAsC;UAAtC,qDAAsC;AAAA;AAExC;AACE;IACE,2BAAmB;YAAnB,mBAAmB;AAAA;AAErB;IACE,2BAAmB;YAAnB,mBAAmB;AAAA;AAAA;AALvB;AACE;IACE,2BAAmB;YAAnB,mBAAmB;AAAA;AAErB;IACE,2BAAmB;YAAnB,mBAAmB;AAAA;AAAA;AAGvB;AACE;IACE,2BAAmB;YAAnB,mBAAmB;AAAA;AAErB;IACE,2BAAmB;YAAnB,mBAAmB;AAAA;AAAA;AALvB;AACE;IACE,2BAAmB;YAAnB,mBAAmB;AAAA;AAErB;IACE,2BAAmB;YAAnB,mBAAmB;AAAA;AAAA;AAGvB;AACE;IACE,kCAA0B;YAA1B,0BAA0B;AAAA;AAE5B;IACE,qCAA6B;YAA7B,6BAA6B;AAAA;AAAA;AALjC;AACE;IACE,kCAA0B;YAA1B,0BAA0B;AAAA;AAE5B;IACE,qCAA6B;YAA7B,6BAA6B;AAAA;AAAA",file:"LoadingSpinner.vue?vue&type=style&index=0&id=3b8e3da2&lang=sass&scoped=true&",sourcesContent:["// TBA\n$defaultFont: Avenir, Helvetica, Arial, sans-serif;\n$rajdHani: Rajdhani, sans-serif;\n$robotoMono: Roboto Mono, monospace;\n\n$fontThin: 100;\n$fontLight: 300;\n$fontRegular: 500;\n$fontBold: 700;\n\n$babyPowder: #FDFFF7;\n$blockBtnHover: #EDEDED;\n$brightCerulean: #1B98E0;\n$burntOrange: #FF5E5B;\n$charcoal: #373F51;\n$darkLiver: #50514F;\n$maize: #FFED65;\n$maximumBluePurple: #B4ADEA;\n$mediumAquamarine: #59FFA0;\n$richBlack: #001021;\n$white: #FFF;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// Thank you to https://loading.io/css/ for this spinner\n.lds-ellipsis {\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 64px;\n  margin: 0 40%; }\n\n.lds-ellipsis div {\n  position: absolute;\n  top: 27px;\n  width: 11px;\n  height: 11px;\n  border-radius: 50%;\n  background: #1B98E0;\n  animation-timing-function: cubic-bezier(0, 1, 1, 0); }\n\n.lds-ellipsis div:nth-child(1) {\n  left: 6px;\n  animation: lds-ellipsis1 0.6s infinite; }\n\n.lds-ellipsis div:nth-child(2) {\n  left: 6px;\n  animation: lds-ellipsis2 0.6s infinite; }\n\n.lds-ellipsis div:nth-child(3) {\n  left: 26px;\n  animation: lds-ellipsis2 0.6s infinite; }\n\n.lds-ellipsis div:nth-child(4) {\n  left: 45px;\n  animation: lds-ellipsis3 0.6s infinite; }\n\n@keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0); }\n\n  100% {\n    transform: scale(1); } }\n\n\n@keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1); }\n\n  100% {\n    transform: scale(0); } }\n\n\n@keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0); }\n\n  100% {\n    transform: translate(19px, 0); } }\n"],sourceRoot:""}])},196:function(n,t,e){"use strict";var r=e(6),o=e(30),A=e(190),c=e(191),l=e(192),d={name:"Bitcoin",components:{CoinPriceTicker:A.a,ErrorNotice:c.a,LoadingSpinner:l.a},data:function(){return{name:"BTC",fiat:"$"}},computed:Object(r.a)({},Object(o.b)({coin:function(n){return n.bitstamp.coin.btc},loading:function(n){return n.bitstamp.coin.loading},error:function(n){return n.bitstamp.coin.error}})),mounted:function(){}},m=e(3),component=Object(m.a)(d,function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"block animated fadeIn"},[this.error?t("section",[t("ErrorNotice",{attrs:{error:"error"}})],1):t("section",[this.loading?t("div",[t("LoadingSpinner")],1):t("div",[t("CoinPriceTicker",{attrs:{fiat:this.fiat,name:this.name,price:this.coin.ask}})],1)])])},[],!1,null,null,null);t.a=component.exports},197:function(n,t,e){"use strict";var r=e(6),o=e(30),A=e(190),c=e(191),l=e(192),d={name:"BitcoinCash",components:{CoinPriceTicker:A.a,ErrorNotice:c.a,LoadingSpinner:l.a},data:function(){return{name:"BCH",fiat:"$"}},computed:Object(r.a)({},Object(o.b)({coin:function(n){return n.bitstamp.coin.bch},loading:function(n){return n.bitstamp.coin.loading},error:function(n){return n.bitstamp.coin.error}})),mounted:function(){}},m=e(3),component=Object(m.a)(d,function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"block animated fadeIn"},[this.error?t("section",[t("ErrorNotice",{attrs:{error:"error"}})],1):t("section",[this.loading?t("div",[t("LoadingSpinner")],1):t("div",[t("CoinPriceTicker",{attrs:{fiat:this.fiat,name:this.name,price:this.coin.ask}})],1)])])},[],!1,null,null,null);t.a=component.exports},198:function(n,t,e){"use strict";var r=e(6),o=e(30),A=e(190),c=e(191),l=e(192),d={name:"Etherium",components:{CoinPriceTicker:A.a,ErrorNotice:c.a,LoadingSpinner:l.a},data:function(){return{name:"ETH",fiat:"$"}},computed:Object(r.a)({},Object(o.b)({coin:function(n){return n.bitstamp.coin.eth},loading:function(n){return n.bitstamp.coin.loading},error:function(n){return n.bitstamp.coin.error}})),mounted:function(){}},m=e(3),component=Object(m.a)(d,function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"block animated fadeIn"},[this.error?t("section",[t("ErrorNotice",{attrs:{error:"error"}})],1):t("section",[this.loading?t("div",[t("LoadingSpinner")],1):t("div",[t("CoinPriceTicker",{attrs:{fiat:this.fiat,name:this.name,price:this.coin.ask}})],1)])])},[],!1,null,null,null);t.a=component.exports},199:function(n,t,e){"use strict";var r=e(6),o=e(30),A=e(190),c=e(191),l=e(192),d={name:"LiteCoin",components:{CoinPriceTicker:A.a,ErrorNotice:c.a,LoadingSpinner:l.a},data:function(){return{name:"LTC",fiat:"$"}},computed:Object(r.a)({},Object(o.b)({coin:function(n){return n.bitstamp.coin.ltc},loading:function(n){return n.bitstamp.coin.loading},error:function(n){return n.bitstamp.coin.error}})),mounted:function(){}},m=e(3),component=Object(m.a)(d,function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"block animated fadeIn"},[this.error?t("section",[t("ErrorNotice",{attrs:{error:"error"}})],1):t("section",[this.loading?t("div",[t("LoadingSpinner")],1):t("div",[t("CoinPriceTicker",{attrs:{fiat:this.fiat,name:this.name,price:this.coin.ask}})],1)])])},[],!1,null,null,null);t.a=component.exports},200:function(n,t,e){"use strict";var r=e(6),o=e(30),A=e(190),c=e(191),l=e(192),d={name:"XRP",components:{CoinPriceTicker:A.a,ErrorNotice:c.a,LoadingSpinner:l.a},data:function(){return{name:"XRP",fiat:"$"}},computed:Object(r.a)({},Object(o.b)({coin:function(n){return n.bitstamp.coin.xrp},loading:function(n){return n.bitstamp.coin.loading},error:function(n){return n.bitstamp.coin.error}})),mounted:function(){}},m=e(3),component=Object(m.a)(d,function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"block animated fadeIn"},[this.error?t("section",[t("ErrorNotice",{attrs:{error:"error"}})],1):t("section",[this.loading?t("div",[t("LoadingSpinner")],1):t("div",[t("CoinPriceTicker",{attrs:{fiat:this.fiat,name:this.name,price:this.coin.ask}})],1)])])},[],!1,null,null,null);t.a=component.exports},201:function(n,t,e){"use strict";e.r(t);e(18);var r=e(1),o=e(196),A=e(197),c=e(198),l=e(199),d=e(200),m={name:"Bitstamp",head:function(){return{bodyAttr:{class:"bitstamp"},title:this.$t("bitstamp.title"),meta:[{hid:"description",name:"description",content:this.$t("bitstamp.description")}]}},components:{"ticker-bitcoin-cash":A.a,"ticker-bitcoin":o.a,"ticker-etherium":c.a,"ticker-litecoin":l.a,"ticker-xrp":d.a},fetch:function(){var n=Object(r.a)(regeneratorRuntime.mark(function n(t){var e;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.store,n.next=3,e.dispatch("bitstamp/GET_BTC");case 3:case"end":return n.stop()}},n,this)}));return function(t){return n.apply(this,arguments)}}()},f=e(3),component=Object(f.a)(m,function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"home"},[t("div",{attrs:{id:"nav"}},[t("ticker-bitcoin"),this._v(" "),t("ticker-bitcoin-cash"),this._v(" "),t("ticker-etherium"),this._v(" "),t("ticker-litecoin"),this._v(" "),t("ticker-xrp")],1)])},[],!1,null,null,null);t.default=component.exports}}]);