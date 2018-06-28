import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Bitcoin from '@/views/Bitcoin.vue'
import BitcoinCash from '@/views/BitcoinCash.vue'
import Etherium from '@/views/Etherium.vue'
import LiteCoin from '@/views/LiteCoin.vue'
import Xrp from '@/views/Xrp.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/bitcoin',
      name: 'bitcoin',
      component: Bitcoin
    },
    {
      path: '/bitcoin-cash',
      name: 'bitcoin-cash',
      component: BitcoinCash
    },
    {
      path: '/etherium',
      name: 'etherium',
      component: Etherium
    },
    {
      path: '/lite-coin',
      name: 'litecoin',
      component: LiteCoin
    },
    {
      path: '/xrp',
      name: 'xrp',
      component: Xrp
    }
  ]
})
