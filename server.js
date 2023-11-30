const express=require("express");

const app=express();

// middlewares


// routes


// error handlers

// listen to server
const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Server is up and  running on port ${port}`);
});