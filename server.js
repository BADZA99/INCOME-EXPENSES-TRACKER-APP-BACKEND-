const express=require("express");

const app=express();

// middlewares


// users routes

// POST/api/v1/users/register
app.post('/api/v1/users/register',async(req,res)=>{
    try {
        res.json({msg:'Register route'})
    } catch (error) {
       res.json(error) ;
    }
})

// POST/api/v1/users/login
app.post('/api/v1/users/login',async(req,res)=>{
    try {
        res.json({msg:'Login route'})
    } catch (error) {
       res.json(error); 
    }
})

// GET/api/v1/users/profile/:id
app.get('/api/v1/users/profile/:id',async(req,res)=>{
    try {
        res.json({msg:'Profile route'})
    } catch (error) {
       res.json(error); 
    }
})

// DELETE/api/v1/users/profile/:id
app.delete('/api/v1/users/profile/:id',async(req,res)=>{
    try {
        res.json({msg:'DELETE route'})
    } catch (error) {
       res.json(error); 
    }
})

// PUT/api/v1/users/:id
app.put('/api/v1/users/:id',async(req,res)=>{
    try {
        res.json({msg:'UPDATE route'})
    } catch (error) {
       res.json(error); 
    }
})

// account routes


// transaction route


// error handlers



// error handlers

// listen to server
const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Server is up and  running on port ${port}`);
});