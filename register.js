const express = require('express')
const router = express.Router()

router.get('/:id',(req,res)=>{
    res.send("User Entered value is " + req.params.id)
})

module.exports = router