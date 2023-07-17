const express = require ('express')
let PORT = 4000;

//express app 
const app = express()

app.use((req,res,next) => {
    console.log(req.path,req.method)
    next()
})

app.get('/' , (req,res) => {
    res.json({msg: 'welcome to the app'})
})


//listen to port:
app.listen(PORT , () => {
    console.log('Listening to Port 4000')
})