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


})

Router.post('/',async (req,res)=>{
      const user = new User({
        age:Number(req.body.age)
      })
      try{
        const newUser = await user.save();
        res.status(201).json(newUser);
      }
      catch(error){
        res.status(500).json({message:error.message})
      }
})

Router.patch('/',(req,res)=>{

})

Router.delete('/:id',(req,res)=>{

})

module.exports= Router;