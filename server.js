const express=require("express");
const userRoute=require("./routes/users/userRoutes");

const app=express();

// middlewares


// users routes
app.use("/api/v1/users", userRoute);
// using thunder client for api testing
// POST/api/v1/users/register


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

// GET/api/v1/accounts
app.get('/api/v1/accounts',async(req,res)=>{
    try {
        res.json({msg:'Get Accounts route'})
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
const port=process.env.PORT || 9000;
app.listen(port,()=>{
    console.log(`Server is up and  running on port ${port}`);
});