import express from "express"
import cors from "cors"
const app=express()
// const port=process.env.port||5000
const port=3000
app.use(express.json())
app.use(cors())
//the above things are middlewares
app.post('/calculate',(req,res)=>{
    const {expression}=req.body
    try{
        //evaluation is synchronous task so keep it synchrouonous
        //still added try and catch block to handle 
        const result=eval(expression)
        return res.json({result})
    }
    catch(error){
        res.status(404).json({error:'invalid expression'})
    }
})
app.listen(port,()=>{
    console.log(`the server is running at port ${port}`)
})