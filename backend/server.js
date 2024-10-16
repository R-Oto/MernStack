const connect = require('./connect')
const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(cors())

app.listen(port, () => {
    connect.connectToServer()
    console.log(`Server started on port ${port}`)
})