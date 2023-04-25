const express = require('express')
const router = express.Router()

router.get('/',(res,req)=>{
    res.send("Information Details")
})

module.exports = router