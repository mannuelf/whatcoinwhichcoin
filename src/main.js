import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.$appName = 'WHATCoinWHICHCoin'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
