require('dotenv/config')

const path = require('path')

const express = require('express')
const cors = require('cors')

const router = require('./routes')

const app = express()

app.use(cors())

app.use('/uploads',express.static(path.resolve(__dirname, 'uploads')))

app.use(express.json())

app.use(router)

app.listen(process.env.PORT | 3333, () => {
    console.log(
        `Api rodando no endereco: ${ process.env.URL }...`
    )
})