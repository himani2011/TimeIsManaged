const express=require('express');
const dotenv=require('dotenv');
const app=express();

dotenv.config({path:'./config.env'});
require('./db/conn');

app.use(express.json());
app.use(require('./router/router'));
const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
})