import express from 'express';
const router = express.Router();

import data from "../src/testData"

router.get("/",(req,res) => {
    res.send({data:['hiii','byeee']});

});

const contests = data.contests.reduce((obj,contest) => {
    obj[contest.id] = contest;
    return obj;
},{});


router.get("/contests",(req,res)=>{
    res.send({contests:contests});
});


export default router;
