const router = require('express').Router()
const messageRouter = require('../components/message/router')
const userRouter = require('../components/user/router')
const chatRouter = require('../components/chat/router')

router.use('/messages', messageRouter)
router.use('/users', userRouter)
router.use('/chats', chatRouter)

router.get('/', (req, res) => {
    res.send({ message: 'Welcome to the chat REST API' })
})

module.exports = router