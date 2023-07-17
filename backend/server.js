const express = require ('express')
let PORT = 4000;

//express app 
const app = express()

//listen to port:
app.listen(PORT , () => {
    console.log('Listening to Port 4000')
})