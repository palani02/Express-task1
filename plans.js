const express = require('express')
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("Future Plans about the company")
})

module.exports = router