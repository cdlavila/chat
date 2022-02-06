const router = require('express').Router()
const messageRouter = require('../components/message/network')

router.use('/messages', messageRouter)

router.get('/', (req, res) => {
    res.send({ message: 'Welcome to the chat REST API' })
})

module.exports = router