import bodyParser from 'body-parser'
import express from 'express'
import userRouter from './routes/usersRoute.js'
import galleyItemRouter from './routes/galleryItemRoute.js'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'

const app= express()

app.use(bodyParser.json())

const connectionString="mongodb+srv://tharu:321@cluster0.vimxor6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

app.use((req,res,next)=>{
    const token = req.header("Authorization")?.replace("Bearer ","")
        if(token!=null){
            jwt.verify(token,"secret",
                (err,decoded)=>{
               if(decoded != null){
                req.user = decoded
                next()
               }else{
                next()
               }
            })
        }else{
            next()
        }
    
});


mongoose.connect(connectionString).then(
    ()=>{
        console.log("Connected to the database")
    }
).catch(
    ()=>{
        console.log("Conncetion failed")
    }
)

app.use("/api/users",userRouter)
app.use("/api/gallery",galleyItemRouter)

app.listen(5000,(req,res)=>{
 console.log("server is running on port 5000")
});