const express=require('express')
const app=express();
require('dotenv').config()
const mongoose=require('mongoose')

const notRoute=require('./routes/notlar')

app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
})

app.use(express.json())


mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("veri tabanına bağlandi");
    
    app.listen(process.env.PORT,()=>{
    console.log(process.env.PORT,' port dinleniyor');
})
}).catch(err=>{
    console.log(err)
})

app.use('/api/notlar',notRoute)