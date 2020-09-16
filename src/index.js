const express = require('express')
const cors = require('cors')

const router = require('./routes')

const app = express()

app.use(cors())

app.use(router)

app.listen(process.env.PORT | 3333)