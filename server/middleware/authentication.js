const {Owner}=require('../model/empSchema');
const jwt=require('jsonwebtoken');

const requireAuth=async (req,res,next)=>{
    try {
        const {authorization}=req.headers;
        if(!authorization){
            res.status(401).json({message:"Please login!"});
        }
        const token=authorization;

        const {_id}=jwt.verify(token,process.env.SECRET_KEY);

        req.owner=await Owner.findOne({_id});
        next();

    } catch (error) {
        res.status(401).json({message:error});
    }
}

module.exports=requireAuth;