const express = require("express");
const nocache = require("nocache");
const adminRoute = require('./route/adminRoute');
const userRoute = require('./route/userRoute')
// const userForgetPass = require('./route/forgotPassword')
const mongo = require('./config/config');
const app = express();
const PORT = 7000;

app.set(mongo.mongooseUp());
app.set('view engine','ejs');
require('dotenv').config()

app.use(express.static(__dirname +'/public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(nocache());

app.use("/",userRoute);

// app.use("/forgot",userForgetPass);

app.use("/admin",adminRoute);

// app.all('*', (req, res) => {
//   res.render('error');
// });


app.listen(PORT , ()=>{
    console.log("server is running at "+ PORT)
});