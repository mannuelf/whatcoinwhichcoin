import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Bitcoin from './views/Bitcoin'

Vue.use(Router)

export default new Router({
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
    }
  ]
})
