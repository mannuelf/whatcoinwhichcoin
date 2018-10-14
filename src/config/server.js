const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.use(express.static('./dist'))
app.listen(port, () => console.log(`app started on port number: ${port}`))

