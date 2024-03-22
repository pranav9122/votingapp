const mongoose=require('mongoose');

//define the mongoDB connection URL
const mongoURL='mongodb+srv://pavi:7050239792@cluster0.mh2lhra.mongodb.net/voting'
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
const db=mongoose.connection;
db.on('connected',()=>{
    console.log('Connected to MongoDB server');
})
db.on('error',(err)=>{
    console.log('MongoDB connection error',err);
})
db.on('disconnected',()=>{
    console.log('MongoDB disconnected');
})
// Export the database connection
module.exports=db;

