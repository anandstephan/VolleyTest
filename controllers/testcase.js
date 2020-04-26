const express = require('express');
const db =require('../models/connection');
const router = express.Router();

router.post('/register',(req,res)=>{
    const user = {name:req.body.name,email:req.body.email,pass:req.body.pass,phone:req.body.phone};
    let sql = 'INSERT INTO users SET ?';
    db.query(sql,user,(err,result)=>{
        if(err) throw err;
        res.json({result:"User Added"})
    });
})

router.post('/login',(req,res)=>{
    console.log("hi"+req);
    let finalresult = {}; //{}
    let sql = `SELECT * FROM  users where email = '${req.body.email}' and pass= '${req.body.pass}'`;
    console.log(sql);
    let query = db.query(sql,(err,result)=>{
        if(err) throw err;
        finalresult.error = false //{error:false}
        finalresult.message="Login Successfully"; //{error:false,message:"Login Succesfully"}
        finalresult.user = result; //{error:false,message:"Login Succesfully",user:[]}
        console.log(finalresult);
        res.send(finalresult);
    });
})

module.exports = router