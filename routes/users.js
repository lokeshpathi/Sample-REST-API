const express = require('express')
const Router= express.Router()
const User = require('../Models/userModel.js')

Router.get('/',async (req,res)=>{
         try{
            const users=await User.find();
            res.status(200).json(users)
         }
         catch(e){
            res.status(500).send(e)
         }
})

Router.get('/:id',(req,res)=>{
    const id = req.params.id;
    res.status(200).json({
        id:id,
        status:"success"
    })
})

Router.post('/',(req,res)=>{

})

Router.patch('/',(req,res)=>{

})

Router.delete('/:id',(req,res)=>{

})

module.exports= Router;