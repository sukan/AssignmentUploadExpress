require('./db');
const Express = require('express');
const BodyParser = require('body-parser')
const Cors = require('cors');
const SubmittedController = require('./Controllers/subAssController');
const AssignmentController = require('./Controllers/AssignmentController');
const app = Express();

const port = '4000';

app.use(Cors());

app.use(BodyParser.urlencoded({extended : true}));

app.use(BodyParser.json());

app.listen(port,'localhost',(err)=>{
    if(err){
        console.log(err);
        process.exit(-1);
    }

    console.log(`Successfully connected to port ${port}`)
});

app.use('/submission',SubmittedController);
app.use('/assignment',AssignmentController);