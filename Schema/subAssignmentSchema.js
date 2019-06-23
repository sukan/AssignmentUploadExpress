const mongoose = require('mongoose')

const subAssign = mongoose.Schema({

    assignmentId:{
        type:String,
        required:true
    },
    studentId:{
        type:String,
        required:true
    },
    lastUpdated:{
        type:Date,
        required:true
    },
    filePath:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('SubmitedAssignment',subAssign);

