require('dotenv').config()
const express = require('express')
const cors = require('cors')
const database = require('./database')
const apiRouter = require('./api/network/routes')
const port = process.env.PORT || 3000

// Initialize express
const app = express()

// To use JSON format in the request
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Allows all requests from any origin
app.use(cors())

// Establish connection with the database
database()

// API main route
app.use('/api', apiRouter)

// Server main route
app.get('/', (req, res) => (
    res.status(200).json({ message: 'Welcome to the chat server' })
))

app.listen(port, async () => {
    console.log(`Server listening at http://localhost:${port}`)
})