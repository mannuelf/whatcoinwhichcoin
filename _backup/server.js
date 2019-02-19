"use strict"
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const Rollbar = require('rollbar')

const rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_ACCESS_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true
})

// record a generic message and send it to Rollbar
rollbar.log("Hello world!");

express()
  .use(express.static(path.join(__dirname, 'dist')))
  .get('/', (req, res) => res.render(index))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
