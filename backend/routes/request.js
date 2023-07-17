const express = require('express')

const router= express.Router()

//get All requests 
router.get('/', (req,res)=>{
    res.json({msg: 'Get all my requests'})
})

//show request
router.get('/:id' , (req,res) => {
    res.json({msg: 'Get a single requests'})
})

//Add request
router.post('/', (req,res)=>{
    res.json({msg: 'Add a request'})
})

//delete request
router.post('/:id', (req,res) => {
    res.json({msg: 'Request deleted succefully'})
})

//update request
router.post('/:id', (req,res)=>{
    res.json({msg: 'Request Updated succefully'})
})

module.exports = router