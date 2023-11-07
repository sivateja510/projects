const express = require('express');
const cors=require('cors');
const monk=require('monk');
const server = express();
const PORT = 8090;
server.use(cors());
server.use(express.json());
const urll=('mongodb+srv://sivateja:sivateja@facultydairy.wqm3eo7.mongodb.net/data');
// const urll=('mongodb://localhost:27017/demo')
const db=monk(urll);
const entr=db.get('ques');
db.then(()=>{
    console.log("db connected");
})
server.get('/',(req,res)=>{
    res.status(200);
    res.send(" server is running ");
});

server.get('/entry',(req,res)=>
{
    entr.find({}).then((docs)=>
    {
        res.json(docs);
    });
})
const topic=db.get('DSA');
server.get('/DSA',(req,res)=>
{
    topic.find({}).then((docs)=>
    {
        res.json(docs);
    });
})

const algos=db.get('Algos');
server.get('/Algos',(req,res)=>
{
    algos.find({}).then((docs)=>
    {
        res.json(docs);
    });
})
const sqll=db.get('SQL');
server.get('/SQL',(req,res)=>
{
    sqll.find({}).then((docs)=>{
        res.json(docs);
    });
})

const nsqll=db.get('NoSql');
server.get('/NoSql',(req,res)=>
{
    nsqll.find({}).then((docs)=>{
        res.json(docs);
    });
})
const os=db.get('Operating-Systems');
server.get('/Operating-Systems',(req,res)=>
{
    os.find({}).then((docs)=>
    {
        res.json(docs);
    });
})

const practice=db.get('Practice');
server.get('/Practice',(req,res)=>
{
    practice.find({}).then((docs)=>
    {
        res.json(docs);
    });
})

const disc=db.get('Discussions');
server.get('/Discussions',(req,res)=>
{
    disc.find({}).then((docs)=>
    {
        res.json(docs);
    });
})

const osa=db.get('OsAlgos');
server.get('/OsAlgos',(req,res)=>
{
    osa.find({}).then((docs)=>
    {
        res.json(docs);
    });
})
server.post('/entry',(req,res)=>{
    const data=db.get('ques')
    // console.log(req.body.username);
    data.insert({username:req.body.username,Email:req.body.email,Password:req.body.password});
    // console.log(userData);
})
  
server.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running,and server is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);