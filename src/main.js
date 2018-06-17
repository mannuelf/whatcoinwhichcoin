import Vue from 'vue'
import App from './App.vue'

require('../node_modules/normalize.css/normalize.css')
require('../node_modules/milligram/dist/milligram.min.css')
require('../node_modules/animate.css/animate.min.css')

Vue.config.productionTip = false
Vue.prototype.$appName = 'what-coin-which-coin'

new Vue({
  render: h => h(App)
}).$mount('#app')
