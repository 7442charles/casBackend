const { json } = require('body-parser');
const express = require('express')
const router = express.Router();
const connection = require('./database')// Set up MySQL connection



router.get('/notification', (req, res)=>{
    sql = "SELECT ID,sender_ID, notification_title, Notification_body, date_posted FROM notifications ORDER BY ID DESC"
    connection.query(sql, (error, results) => {
        if (error) {
            throw error;
        } else {
            res.send(results)
        }
    })
})


module.exports = router;


