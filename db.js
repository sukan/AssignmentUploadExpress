const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/af-project',err=>{
    if(err){
        console.log(err);
        process.exit(-1);
    }
    console.log("Connected to DB");
})