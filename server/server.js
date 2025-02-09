import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongodb.js'


//App config
const PORT =process.env.PORT  || 4000
const app=express()
await connectDB()

//Initialise middleware
app.use(express.json())
app.use(cors())

//API routes
app.get('/',(req,res)=>res.send("API working"))

app.listen(PORT,()=> console.log("Server running on PORT"+PORT))