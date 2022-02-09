require('dotenv').config()

const express = require('express')
const app = express()
const server = require('http').Server(app)

const socket = require('./socket')
const cors = require('cors')
const database = require('./database')
const apiRouter = require('./api/network/routes')
const port = process.env.PORT || 3000

// To use JSON format in the request
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Allows all requests from any origin
app.use(cors())

// Establish connection with the database
database()

// Connect server to sockets
socket.connect(server)

// API main route
app.use('/api', apiRouter)

// Server main route
app.get('/', (req, res) => (
    res.status(200).json({ message: 'Welcome to the chat server' })
))

server.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})