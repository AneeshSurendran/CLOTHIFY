require('dotenv').config();
const mongoose=require('mongoose');

const mongooseUp=()=>{
    mongoose.set('strictQuery',false);
    mongoose.connect(process.env.DATABASE);
    mongoose.connection.once('open',()=>{
    console.log('connection is successfully established');
    });
}

module.exports={
    mongooseUp
}