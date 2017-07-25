import express from 'express';
const router = express.Router();

import data from "../src/testData"

router.get("/",(req,res) => {
    res.send({data:['hiii','byeee']});

});


router.get("/contests",(req,res)=>{
    res.send({contests:data.contests});
});


export default router;
