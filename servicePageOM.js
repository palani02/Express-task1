const express = require('express')
const router = express.Router()

let works = [
    {
        // "id":1,
        "Name":"Cloud Service"
    },
    {
        // "id":2,
        "Name":"Sass Service"
    },
    {        
        // "id":3,
        "Name":"Saas Service"
    },
    {
        // "id":4,
        "Name":"HR Management Service"
    }
]
router.route('/:id')
.get((req,res)=>{
    res.send(`The Value User Entered ${req.params.id}`)
})

router.param('id',(req,res,next,id)=>{
    const getName = works[req.params.id]
    res.send(getName.Name)
    console.log(getName.Name)
    // next()
})

module.exports = router