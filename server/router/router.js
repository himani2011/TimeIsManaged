const express=require('express');
const router=express.Router();
const {Emp,Owner}=require('../model/empSchema');
const jwt=require('jsonwebtoken');
require('../db/conn');
const requireAuth=require('../middleware/authentication');

const createToken = (_id)=>{
    return jwt.sign({_id},process.env.SECRET_KEY,{expiresIn:"1d"})
}

router.get('/',(req,res)=>{
    console.log("from server")
    res.send('from server');
})

router.post('/login',async (req,res)=>{
    try {
        const {email,pwd} = req.body;

        if(email.length === 0 || pwd.length ===0){
            res.status(401).json({message:"Please fill both the fields!"})
        }
        const owner=await Owner.findOne({email:email});

        if(owner){
            const token=createToken(owner._id)
            console.log(token)
            res.status(201).json({token})
        }else{
            res.status(401).json({message:"Invalid credentials! Please try again!"})
        }    
    } catch (error) {
        console.log(error)
    }
})


module.exports = router;