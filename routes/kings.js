const express = require("express");
const cors = require("cors");

let router = express.Router();

router.get("/heroes",(req,res)=>{
 let TFI = ["prabhas","Allu Arjun","NTR","Ram Charan","Mahesh Babu"];
 res.json(TFI);
})

module.exports = router;