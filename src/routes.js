const express = require('express')

const router = express.Router()

router.get('/', (req, resp, next) => {
    resp.json({
        message: 'Router está funcionando'
    })
})

module.exports = router