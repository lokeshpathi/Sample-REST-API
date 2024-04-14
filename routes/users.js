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

Router.get('/:id',async (req,res)=>{
    try{
        const {id}=req.params;
        const user = await User.findById(id);
        if(user==null){
            return res.status(500).json({
                message:"cannot find the user"
            })
        }
        return res.status(200).json(user)
    }
    catch(e){
        res.status(404).json({msg:e.message})
    }
        

})

Router.post('/',async (req,res)=>{
      const user = new User({
        name:req.body.name,
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

Router.patch('/:id',async (req,res)=>{
    try{
        const {id}=req.params;
        var user = await User.findById(id);
        if(user==null){
            return res.status(500).json({
                message:"cannot find the user"
            })
        }
        if (req.body.name!=null){
             user.name=req.body.name;
        }
        if(req.body.age!=null){
            user.age=req.body.age;
        }
        await user.save();
        return res.status(200).json(user)
    }
    catch(e){
        res.status(404).json({msg:e.message})
    }

})

Router.delete('/:id',async (req,res)=>{
    try{
        const {id}=req.params;
        const user = await User.findById(id);
        if(user==null){
            return res.status(500).json({
                message:"cannot find the user"
            })
        }
        await user.deleteOne();
       res.status(200).json({msg:"user successfully removed"})
    }
    catch(e){
        res.status(404).json({msg:e.message})
    }
})

module.exports= Router;