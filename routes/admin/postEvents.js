const express = require("express")
const connection = require('../database')
const router = express.Router()


router.post('/postEvents', (req, res)=>{
    sql = `INSERT INTO events (sender_ID, event_title, event_body, event_date, event_image_URL) VALUES(?,?,?,?,?)`
    connection.query(sql,[req.body.sender_id, req.body.event_title, req.body.event_body, req.body.event_image,req.body.event_date], (err, results)=>{
        if (!err) {
            res.json("event updated successfully")
            console.log(results);
        } else {
            res.json("Error occured please try again later")
            throw err
        }
    })
    console.log(req.body);
})


module.exports = router