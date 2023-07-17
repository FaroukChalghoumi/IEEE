const express = require('express')
//import RequestModel ( the schema of the object request): 
const  Request = require('../models/requestModel')

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
router.post('/', async (req,res)=>{
    const {title,price,imagePath} = req.body
    try{
        const request = await Request.create({title,price,imagePath})
        res.status(200).json(request)
    }catch (error){
        res.status(400).json({error: error.message })
    }

    
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