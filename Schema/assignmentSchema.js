const mongoose = require('mongoose')

const assignment = mongoose.Schema({


    DueDate:{
        type:Date,
        required:true
    },
    allocatedMarks:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    },
    file:{
        type:String
    },
    markSheet:{
        type:String
    }
})

module.exports = mongoose.model('Assignment',assignment);

