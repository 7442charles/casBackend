const express = require('express')
const connection = require('../database')
const router = express.Router()

router.post('/postNotification', (req, res)=>{
    affected_users = req.body.target
    sql= `SELECT * FROM users WHERE admission_number LIKE '%${affected_users}%'`
    affected_users_array =[] //array to hold affected users 
    connection.query(sql, (err, results)=>{
        if (!err) {
            results.forEach(affected_users => {
                affected_users_array.unshift(affected_users.id)
            });
            //insert the notification in notification table
            insertSql = `INSERT INTO notifications(sender_ID, notification_title, notification_body, recipients_IDs) VALUES (?,?,?,?)` 
            connection.query(insertSql, [req.body.sender_id, req.body.notification_title, req.body.notification_body, JSON.stringify(affected_users_array)], (err, results)=>{
                if (!err) {
                    res.json(results.insertId)
                    console.log(results.insertId);
                } else {
                    res.json("Error posting the notification")
                    throw err
                }
            })
        } else {
            throw err
        }
    })
})



module.exports = router