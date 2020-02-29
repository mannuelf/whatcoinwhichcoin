import Vue from 'vue'
import Rollbar from 'vue-rollbar'
import Consola from 'consola'

Vue.use(Rollbar, {
  accessToken: process.env.ROLLBAR_ACCESS_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
  enabled: true,
  source_map_enabled: true,
  environment: 'production',
  payload: {
    client: {
      javascript: {
        code_version: '1.0'
      }
    }
  }
})

Vue.config.errorHandler = err => {
  Consola.info('Exception: ', err)
}
