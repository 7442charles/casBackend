const express = require('express')
const router = express.Router()


router.post('/timetable', (req, res)=>{
    res.send('timetable hit')
})

let timetable = {
    monday:{
        unit:'cooking skills',
        room: 'c2',
        lec:'ludava',
        time:'9:30'
    },
    tuesday:{
        unit:'pastry and baking',
        room: 'pastry kitchen',
        lec:'paul',
        time:'8:00'
    }
}


function logtimetable() {
    //console.log(timetable.tuesday.unit);
    
}
logtimetable()
module.exports = router