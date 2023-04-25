const express = require('express')
const router = express.Router()

let serviceAvaliables = [
    {
    "id":10,
    "Name":"Saas(Software as a Service)"
    },
    {
        "id":20,
        "Name":"HR Managements"
    },
    {
        "id":30,
        "Name":"Cloud Services"
    },
    {
        "id":40,
        "Name":"App Development"
    },
]

router.get('/:id',(req,res)=>{
    const serviceId = Number(req.params.id)
    // const serviceId = String(req.params.id)
    const gettService = serviceAvaliables.find((servicePage2)=>servicePage2.id===serviceId)
// console.log(gettService)
    if(!gettService)
    {
        res.sendStatus(500)
    }
    else{
        res.json(gettService)
    }
})

module.exports = router

