const Express = require('express');

const Assignment = require('../Schema/assignmentSchema');

const assignmentRouter = Express.Router();

assignmentRouter.post('/',function(req,res){

    const assignment = new Assignment({
        name:req.body.name,
        publishDate:req.body.pDate,
        DueDate:req.body.dDate,
        allocatedMarks:req.body.marks,
        course:req.body.course,
        file:req.body.file,
        allocatedMarks:req.body.marks
    })

    assignment.save().then(data=>{
        res.status(200).send({message:"added successfully",data:data})
    }).catch(err=>{
        res.status(500).send({message:err})
    })
})

assignmentRouter.get('/:id',function(req,res){
    Assignment.findById(req.params.id).then(data=>{
        res.status(200).send({data:data})
    }).catch(err=>{
        res.status(500).send({message:err})
    })
})
assignmentRouter.put('/:id',function(req,res){
    Assignment.findById(req.params.id,function(err,assignment){
        if(err){
            res.status(500).send({message:err})
        }else{
            if(!assignment){
                res.status(404).send({message:"No data"})
            }else{
                console.log(req.body.filename)
                assignment.markSheet = req.body.filename

                assignment.save().then(data=>{

                    res.status(200).send({message:"added",data:data})
                }).catch(err=>{
                    res.status(500).send({message:err})
                })
            }
        }
    })
    
})


module.exports = assignmentRouter;