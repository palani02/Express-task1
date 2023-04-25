const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send("Get Method was displayed")
    console.log("Get")
})


module.exports = router