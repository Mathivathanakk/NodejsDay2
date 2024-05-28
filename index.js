import express from "express";
import cors from "cors";
import empRouter from './Routers/employeeRouters.js'

const app=express();
const PORT=4000;



app.use(express.json())
app.use(cors())
app.use('/api',empRouter)



app.get('/',(req,res)=>{
    res.status(200).send("App is running successfully")
})

app.listen(PORT,()=>{
    console.log("App is listening to the Port",PORT)
})
