import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from './store/index.js'

Vue.config.productionTip = false
Vue.prototype.$appName = 'WHATCoinWhichCoin'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    // .register('/sw.js', { scope: '/someDir'})
    .then(function() {
      console.log('serviceWorker Registered');
    })
}
