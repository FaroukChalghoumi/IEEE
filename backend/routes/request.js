const express = require('express')
//import RequestModel ( the schema of the object request): 

const {
    createReq , 
    getAllReq , 
    getOneRequest,
    deleteReq , 
    updateReq
} = require ('../Controllers/requestController')

const router= express.Router()

//get All requests 
router.get('/', getAllReq)

//show request
router.get('/:id' , getOneRequest)

//Add request
router.post('/',createReq )

//delete request
router.delete('/:id', deleteReq)

//update request
router.patch('/:id', updateReq)

module.exports = router