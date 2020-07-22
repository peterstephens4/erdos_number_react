const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const authorRouter = require('./routes/author-router')

const app = express()
const apiPort = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Erdos Database Server!')
})

app.use('/api', authorRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
