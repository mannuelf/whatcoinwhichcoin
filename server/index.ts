import express from 'express'
import cors from 'cors'
import consola from 'consola'
import { Builder, Nuxt } from 'nuxt'
import config from '../nuxt.config.js'
const app = express()

config.dev = !(process.env.NODE_ENV === 'production')

async function start(): object {
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '0.0.0.0',
    port = process.env.PORT || 3001
  } = nuxt.options.server

  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.use(nuxt.render, cors())

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
