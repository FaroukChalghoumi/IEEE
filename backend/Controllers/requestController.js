const  Request = require('../models/requestModel')
const mongoose = require('mongoose')

//getAll 
const getAllReq = async (req,res) => {
    const requests = await Request.find()

    res.status(200).json(requests)
}

//getOne Details 
const getOneRequest = async (req, res ) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "request not found!"})
    }

    const request = await Request.findById(id)
    
    if(!request)
        return res.status(404).json({error: "request not found!"})

    res.status(200).json(request)
}



//POST new 
const createReq = async (req,res)=>{
    const {title,price,imagePath} = req.body
    try{
        const request = await Request.create({title,price,imagePath})
        res.status(200).json(request)
    }catch (error){
        res.status(400).json({error: error.message })
    } 
}

//Delete 
const deleteReq = async (req,res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "request not found!"})
    }
    const request = await Request.findOneAndDelete({_id: id})
    
    if(!request)
        return res.status(404).json({error: "request not found!"})

    res.status(200).json(request)
}


//Update PATCH 
const updateReq = async (req,res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "request not found!"})
    }
    const request = await Request.findOneAndUpdate({_id: id},{
        ...req.body
    })

    if(!request)
        return res.status(404).json({error: "request not found!"})

    res.status(200).json(request)
}

module.exports  = {
    getAllReq,
    getOneRequest,
    createReq,
    updateReq,
    deleteReq
}