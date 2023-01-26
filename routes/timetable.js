const express = require('express')
const router = express.Router()


router.get('/timetable', (req, res)=>{
    res.send('timetable hit')
})


module.exports = router