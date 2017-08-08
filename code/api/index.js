import express from 'express';
import {MongoClient, ObjectId} from 'mongodb';
import assert from 'assert';
import config from '../config';

let mdb;

MongoClient.connect(config.mongodbUri, (err,db) => {
    assert.equal(null,err);
    mdb = db;

})



const router = express.Router();



router.get("/",(req,res) => {
    res.send({data:['hiii','byeee']});

});



router.get("/contests",(req,res)=>{
    let contests = {};
    mdb.collection('contests').find({}).project({id:1,categoryName:1,contestName:1}).each((err,contest) => {
        //could do .each or toArray()

        assert.equal(null,err);


        if(!contest){
            res.send({contests});
            return;
        }
        contests[contests.id] = contest;
    })
});

router.get("/contests/:contestId",(req,res) => {
    mdb.collection('contests').findOne({id:Number(req.params.contestsId)}).then(contest => {res.send(contest)}).catch(console.error);

});

export default router;
