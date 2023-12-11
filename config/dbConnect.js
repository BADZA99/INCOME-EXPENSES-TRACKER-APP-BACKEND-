
const mongoose=require("mongoose");

// connect
const connectDB=async()=>{
    try{
        const conn = await mongoose.connect(
          "mongodb+srv://papa99:zorodubat77@income.gaiccy5.mongodb.net/"
        );
        console.log(`MongoDB connected successfully`);
    }catch(err){
        console.error(err);
        process.exit(1);
    }
};

connectDB();