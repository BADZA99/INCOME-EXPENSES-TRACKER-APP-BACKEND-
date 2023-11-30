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

// POST/api/v1/accounts
app.post('/api/v1/accounts',async(req,res)=>{
    try {
        res.json({msg:'Create account route'})
    } catch (error) {
       res.json(error) ;
    }
})

// Get/api/v1/accounts/:id
app.get('/api/v1/accounts/:id',async(req,res)=>{
    try {
        res.json({msg:'Get single Account route'})
    } catch (error) {
       res.json(error) ;
    }
})

// delete/api/v1/accounts/:id
app.delete('/api/v1/accounts/:id',async(req,res)=>{
    try {
        res.json({msg:'delete Account route'})
    } catch (error) {
       res.json(error) ;
    }
})

// PUT/api/v1/accounts/:id
app.put('/api/v1/accounts/:id',async(req,res)=>{
    try {
        res.json({msg:'update Account route'})
    } catch (error) {
       res.json(error) ;
    }
})


// transaction route
// post /api/v1/transactions
app.post('/api/v1/transactions',async(req,res)=>{
    try {
        res.json({msg:'Create transaction route'})
    } catch (error) {
       res.json(error) ;
    }
})

// Get/api/v1/transactions
app.get('/api/v1/transactions',async(req,res)=>{
    try {
        res.json({msg:'Get transactions route'})
    } catch (error) {
       res.json(error) ;
    }
})

// Get/api/v1/transactions/:id
app.get('/api/v1/transactions/:id',async(req,res)=>{
    try {
        res.json({msg:'Get single transaction route'})
    } catch (error) {
       res.json(error) ;
    }
})

// delete/api/v1/transactions/:id
app.delete('/api/v1/transactions/:id',async(req,res)=>{
    try {
        res.json({msg:'delete transaction route'})
    } catch (error) {
       res.json(error) ;
    }
})

// PUT/api/v1/transactions/:id
app.put('/api/v1/transactions/:id',async(req,res)=>{
    try {
        res.json({msg:'update transaction route'})
    } catch (error) {
       res.json(error) ;
    }
})




// error handlers



// error handlers

// listen to server
const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Server is up and  running on port ${port}`);
});