import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from './store/index.js'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false
Vue.prototype.$appName = 'WHATCoin WHICHCoin'

// for later
// stop the default behaviour of the add to home screen prompt
// window.addEventListener('beforeinstallprompt', function(event) {
//   console.log('beforeinstallprompt fired')
//   event.preventDefault()
//   deferredPrompt = event
//   return false
// })

let deferredPrompt

if (!window.Promise) {
  window.Promise = Promise
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/service-worker.js')
    // .register('/sw.js', { scope: '/someDir'})
    .then(function() {
      console.log('serviceWorker Registered');
    })
}

if (deferredPrompt) {
  deferredPrompt.prompt()
  deferredPrompt.userChoice.then(function(choiceResult){
    console.log(choiceResult.outcome)

    if (choiceResult.outcome === 'dismissed') {
      console.log('User cancelled installation')
    } else {
      console.log('User added to home screen')
    }
  })
  deferredPrompt = null
}

Vue.use(VueAnalytics, {
  id: 'UA-19677147-2',
  router
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
