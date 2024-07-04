const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv');
const productRuter = require('./routes/productRoutes');
const mongoose = require('mongoose');
dotenv.config()

const app = express()
const port = process.env.SERVER_PORT

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
    credentials: true
}))

app.use('/', productRuter)

const connectingString = 'mongodb://127.0.0.1:27017/product'
mongoose.connect(connectingString)
const db = mongoose.connection;

db.on("error", (err) => {
    console.log(err)
})
db.on("disconnected", () => {
    console.log('Disconnected')
})
db.on("connected", () => {
    console.log("Database Connected")
})

app.listen(port, () => {
    console.log('Server Started on port:', port)
})
