import Vue from 'vue'
const Rollbar = require('vue-rollbar')

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
