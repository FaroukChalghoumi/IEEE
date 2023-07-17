require ('dotenv').config()
const express = require ('express')
const mongoose = require('mongoose')
//let PORT = 4000; We can use .env file to store this variable PORT
const reqRoutes = require('./routes/request')

//express app 
const app = express()

app.use((req,res,next) => {
    console.log(req.path,req.method)
    next()
})

app.use('/api/request',reqRoutes)

app.get('/' , (req,res) => {
    res.json({msg: 'welcome to the app'})
})


//connection to DB : MongoDB 
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    //We want be listening to request until we are connected to DB 
    //listen to port 4000:
    app.listen(process.env.PORT , () => {
        console.log('Connected to IEEE cluster & Listening to Port', process.env.PORT)
    })
})
.catch((error) => {
    console.log(error)
})


//listen to port:
/*app.listen(process.env.PORT , () => {
    console.log('Listening to Port', process.env.PORT)
})*/