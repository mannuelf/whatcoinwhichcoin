(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{190:function(t,n,e){"use strict";var r={name:"CoinPriceTicker",props:{name:{type:String,default:function(){return"BTC"}},fiat:{type:String,default:function(){return"$"}},price:{type:String,default:function(){return"0.00"}}}},c=e(3),component=Object(c.a)(r,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("a",{staticClass:"block__btn--std animated flipInX",attrs:{href:"#"}},[e("span",{staticClass:"block__btn--coin"},[t._v(t._s(t.name))]),t._v(" "),e("span",{staticClass:"block__btn--currency"},[t._v(t._s(t.fiat))]),t._v(" "),e("span",{staticClass:"block__btn--price"},[t._v(t._s(t.price))])])])},[],!1,null,null,null);n.a=component.exports},191:function(t,n,e){"use strict";var r=e(6),c=e(30),o={name:"Bitcoin",components:{CoinPriceTicker:e(190).a},data:function(){return{name:"BTC",fiat:"$"}},computed:Object(r.a)({},Object(c.b)({coin:function(t){return t.bitstamp.coin.btc},loading:function(t){return t.bitstamp.coin.loading},error:function(t){return t.bitstamp.coin.error}})),mounted:function(){}},l=e(3),component=Object(l.a)(o,function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"block animated fadeIn"},[n("CoinPriceTicker",{attrs:{fiat:this.fiat,name:this.name,price:this.coin.ask}})],1)},[],!1,null,null,null);n.a=component.exports},192:function(t,n,e){"use strict";var r=e(6),c=e(30),o={name:"BitcoinCash",components:{CoinPriceTicker:e(190).a},data:function(){return{name:"BCH",fiat:"$"}},computed:Object(r.a)({},Object(c.b)({coin:function(t){return t.bitstamp.coin.bch},loading:function(t){return t.bitstamp.coin.loading},error:function(t){return t.bitstamp.coin.error}})),mounted:function(){}},l=e(3),component=Object(l.a)(o,function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"block animated fadeIn"},[n("CoinPriceTicker",{attrs:{fiat:this.fiat,name:this.name,price:this.coin.ask}})],1)},[],!1,null,null,null);n.a=component.exports},193:function(t,n,e){"use strict";var r=e(6),c=e(30),o={name:"Etherium",components:{CoinPriceTicker:e(190).a},data:function(){return{name:"ETH",fiat:"$"}},computed:Object(r.a)({},Object(c.b)({coin:function(t){return t.bitstamp.coin.eth},loading:function(t){return t.bitstamp.coin.loading},error:function(t){return t.bitstamp.coin.error}})),mounted:function(){}},l=e(3),component=Object(l.a)(o,function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"block animated fadeIn"},[n("CoinPriceTicker",{attrs:{fiat:this.fiat,name:this.name,price:this.coin.ask}})],1)},[],!1,null,null,null);n.a=component.exports},194:function(t,n,e){"use strict";var r=e(6),c=e(30),o={name:"LiteCoin",components:{CoinPriceTicker:e(190).a},data:function(){return{name:"LTC",fiat:"$"}},computed:Object(r.a)({},Object(c.b)({coin:function(t){return t.bitstamp.coin.ltc},loading:function(t){return t.bitstamp.coin.loading},error:function(t){return t.bitstamp.coin.error}})),mounted:function(){}},l=e(3),component=Object(l.a)(o,function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"block animated fadeIn"},[n("CoinPriceTicker",{attrs:{fiat:this.fiat,name:this.name,price:this.coin.ask}})],1)},[],!1,null,null,null);n.a=component.exports},195:function(t,n,e){"use strict";var r=e(6),c=e(30),o={name:"XRP",components:{CoinPriceTicker:e(190).a},data:function(){return{name:"XRP",fiat:"$"}},computed:Object(r.a)({},Object(c.b)({coin:function(t){return t.bitstamp.coin.xrp},loading:function(t){return t.bitstamp.coin.loading},error:function(t){return t.bitstamp.coin.error}})),mounted:function(){}},l=e(3),component=Object(l.a)(o,function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"block animated fadeIn"},[n("CoinPriceTicker",{attrs:{fiat:this.fiat,name:this.name,price:this.coin.ask}})],1)},[],!1,null,null,null);n.a=component.exports},196:function(t,n,e){"use strict";e.r(n);e(18);var r=e(1),c=e(191),o=e(192),l=e(193),f=e(194),m=e(195),d={name:"Bitstamp",head:function(){return{bodyAttr:{class:"bitstamp"},title:this.$t("bitstamp.title"),meta:[{hid:"description",name:"description",content:this.$t("bitstamp.description")}]}},components:{"ticker-bitcoin-cash":o.a,"ticker-bitcoin":c.a,"ticker-etherium":l.a,"ticker-litecoin":f.a,"ticker-xrp":m.a},fetch:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(n){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.store,t.next=3,e.dispatch("bitstamp/GET_COINS");case 3:case"end":return t.stop()}},t,this)}));return function(n){return t.apply(this,arguments)}}()},h=e(3),component=Object(h.a)(d,function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"home"},[n("div",{attrs:{id:"nav"}},[n("ticker-bitcoin"),this._v(" "),n("ticker-bitcoin-cash"),this._v(" "),n("ticker-etherium"),this._v(" "),n("ticker-litecoin"),this._v(" "),n("ticker-xrp")],1)])},[],!1,null,null,null);n.default=component.exports}}]);