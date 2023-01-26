const express = require('express')
const router = express.Router();
const connection = require('./database')


router.get('/gallery', (req, res)=>{
    res.json("gallery jackpot")
})


module.exports = router