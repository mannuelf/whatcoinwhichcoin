(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{191:function(n,e,t){var content=t(198);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(16).default)("103bfe56",content,!0,{sourceMap:!0})},197:function(n,e,t){"use strict";var o=t(191);t.n(o).a},198:function(n,e,t){(n.exports=t(15)(!0)).push([n.i,".block__btn--coin[data-v-70dc3de7] {\n  font-size: .6em;\n}\n.block__btn--currency[data-v-70dc3de7] {\n  font-size: .6em;\n}\n.block__btn--price[data-v-70dc3de7] {\n  font-size: 1em;\n}\n@media (min-width: 460px) {\n.block__btn--price[data-v-70dc3de7] {\n    font-size: 1.5em;\n}\n}\n","",{version:3,sources:["/Users/Adminnoroff/workspace/whatcoinwhichcoin/pages/_lang/luno/index.vue"],names:[],mappings:"AA0FE;EACE,eAAgB;AAAA;AAElB;EACE,eAAgB;AAAA;AAElB;EACE,cAAc;AAAA;AACd;AAFF;IAGI,gBAAgB;AAAA;AAAK",file:"index.vue?vue&type=style&index=0&id=70dc3de7&lang=sass&scoped=true&",sourcesContent:["// TBA\n$defaultFont: Avenir, Helvetica, Arial, sans-serif;\n$rajdHani: Rajdhani, sans-serif;\n$robotoMono: Roboto Mono, monospace;\n\n$fontThin: 100;\n$fontLight: 300;\n$fontRegular: 500;\n$fontBold: 700;\n\n$babyPowder: #FDFFF7;\n$blockBtnHover: #EDEDED;\n$brightCerulean: #1B98E0;\n$burntOrange: #FF5E5B;\n$charcoal: #373F51;\n$darkLiver: #50514F;\n$maize: #FFED65;\n$maximumBluePurple: #B4ADEA;\n$mediumAquamarine: #59FFA0;\n$richBlack: #001021;\n$white: #FFF;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.block {\n\n  &__btn--coin {\n    font-size: 0.6em; }\n\n  &__btn--currency {\n    font-size: 0.6em; }\n\n  &__btn--price {\n    font-size: 1em;\n    @media(min-width: 460px) {\n      font-size: 1.5em; } } }\n"],sourceRoot:""}])},201:function(n,e,t){"use strict";t.r(e);t(19);var o=t(1),r=t(3),c=t(13),d={name:"Luno",components:{},data:function(){return{}},computed:Object(r.a)({},Object(c.b)({exchange:function(n){return n.exchange},coins:function(n){return n.luno.list},error:function(n){return n.luno.error}})),fetch:function(){var n=Object(o.a)(regeneratorRuntime.mark(function n(e){var t;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.store,n.next=3,t.dispatch("luno/GET_ALL");case 3:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}(),head:function(){return{bodyAttr:{class:"luno"},title:this.$t("luno.title"),meta:[{hid:"description",name:"description",content:this.$t("luno.description")}]}},mounted:function(){},methods:{setCurrency:function(){return{XBTIDR:"Indonesian Rupiah",XBTMYR:"Malaysian Ringgit",XBTNGN:"Nigerian Naira",XBTZAR:"ZAR",ETHXBT:"BTC",XBTEUR:"EURO"}}}},l=(t(197),t(6)),component=Object(l.a)(d,function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"luno"},[t("div",{attrs:{id:"nav"}},n._l(n.coins.tickers,function(e){return t("section",{key:e.id,staticClass:"block__btn--std animated flipInX"},[t("span",{staticClass:"block__btn--coin"},[n._v(n._s(e.pair))]),n._v(" "),t("span",{staticClass:"block__btn--price"},[n._v(n._s(e.ask))])])}),0)])},[],!1,null,"70dc3de7",null);e.default=component.exports}}]);