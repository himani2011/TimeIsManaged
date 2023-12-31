const mongoose = require('mongoose')

const empschema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    dob:{
        type:Date
    },
    address:{
        type:String
    },
    pno:{
        type:Number
    },
    apno:{
        type:Number
    },
    position:{
        type:String
    },
    avgHrs:{
        type:Number
    },
    jobType:{
        type:String
    },
    sunFrom:{
        type:Date
    },
    monFrom:{
        type:Date
    },
    tueFrom:{
        type:Date
    },
    wedFrom:{
        type:Date
    },
    thuFrom:{
        type:Date
    },
    friFrom:{
        type:Date
    },
    satFrom:{
        type:Date
    },
    sunTo:{
        type:Date
    },
    monTo:{
        type:Date
    },
    tueTo:{
        type:Date
    },
    wedTo:{
        type:Date
    },
    thuTo:{
        type:Date
    },
    friTo:{
        type:Date
    },
    satTo:{
        type:Date
    },
    additionalInfo:{
        type:String
    }
})

const ownerschema=new mongoose.Schema({
    email:{
        type:String
    },
    pwd:{
        type:String
    }
})

const Emp=mongoose.model('EMPLOYEE',empschema);
const Owner=mongoose.model('OWNER',ownerschema);

module.exports={Emp,Owner};