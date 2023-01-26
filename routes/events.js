const express = require("express")
const bodyParser = require("body-parser")
const router = express.Router()

router.use(bodyParser.urlencoded({extended:false}))
router.use(bodyParser.json())
router.get('/events', (req, res)=>{
    if(req.query.id==5){
        res.send(req.query.id + "Authorised")
    }else{
    res.send(req.query.id + "not authorised")
    }
})



module.exports = router