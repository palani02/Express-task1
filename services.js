const express = require('express')
const router = express.Router()

    //  if(req.params.id==100) res.send("Cloud Service")
    //  if(req.params.id==200) res.send("Saas Service")
    //  if(req.params.id==300) res.send("Data Maintainence Services")
    //  if(req.params.id==400) res.send("HR Management Services")

    let serviceAvailables = [
        {
            "id":1,
            "Name":"Cloud Service"
        },
        {
            
            "id":2,
            "Name":"Sass Service"
        },
        {
            
            "id":3,
            "Name":"Saas Service"
        },
        {
            "id":4,
            "Name":"HR Management Service"
        }
    ]
    router.get('/:id',(req,res)=>{
    const serviceId = Number(req.params.id)
    const getService = serviceAvailables.find((services)=>services.id===serviceId)

    if(!getService)
    {
        response.status(500).send("Service not found")
        // res.sendStatus(500)
        console.log(req.params.id)
    }
    else
    {
        res.json(getService)
    }
})





module.exports = router
