(window.webpackJsonp=window.webpackJsonp||[]).push([[9,5],{198:function(n,t,e){"use strict";e.r(t);e(18);var r=e(1),o=e(6),c=e(30),l={name:"Luno",components:{},data:function(){return{exchange:""}},computed:Object(o.a)({},Object(c.b)({coins:function(n){return n.luno.list},error:function(n){return n.luno.error}})),fetch:function(){var n=Object(r.a)(regeneratorRuntime.mark(function n(t){var e;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.store,n.next=3,e.dispatch("luno/GET_ALL");case 3:case"end":return n.stop()}},n,this)}));return function(t){return n.apply(this,arguments)}}(),head:function(){return{bodyAttr:{class:"luno"},title:this.$t("luno.title"),meta:[{hid:"description",name:"description",content:this.$t("luno.description")}]}},mounted:function(){},methods:{setCurrency:function(){return{XBTIDR:"Indonesian Rupiah",XBTMYR:"Malaysian Ringgit",XBTNGN:"Nigerian Naira",XBTZAR:"ZAR",ETHXBT:"BTC",XBTEUR:"EURO"}},setExchange:function(){this.exchange="luno"}}},d=e(5),component=Object(d.a)(l,function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"home"},[e("div",{attrs:{id:"nav"}},n._l(n.coins.tickers,function(t){return e("section",{key:t.id,staticClass:"block__btn--std animated flipInX"},[e("span",{staticClass:"block__btn--coin"},[n._v(n._s(t.pair))]),n._v(" "),e("span",{staticClass:"block__btn--price"},[n._v(n._s(t.ask))])])}),0)])},[],!1,null,null,null);t.default=component.exports},204:function(n,t,e){"use strict";e.r(t);var r=e(198).default,o=e(5),component=Object(o.a)(r,void 0,void 0,!1,null,null,null);t.default=component.exports}}]);