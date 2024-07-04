const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()

// establishing Conncetion with MongoDB
const basrUrl = process.env.MONGODB_URL;
const port = process.env.DB_PORT
const dbName = process.env.DB_NAME
// const connectingString=`${basrUrl}:${port}/${dbName}`
const connectingString='mongodb://127.0.0.1:27017/product'
mongoose.connect(connectingString, (err, result)=>{
if(err){
    console.log(err)
}
})

const db=mongoose.connection;

db.on("error", (err)=>{
    console.log(err)
})
db.on("disconnected", ()=>{
    console.log('Disconnected')
})
db.on("connected", ()=>{
    console.log("Database Connected")
})
