const express = require("express")
const connection =require('../database')
const router = express.Router()

/**send number of all students to admin */
router.get('/allUsers', (req, res)=>{
    const sql = 'SELECT * FROM users'
    connection.query(sql, (err, results)=>{
        if (!err) {
            users_names = [] //to store users names
            /**extract user names */
            results.forEach(extract_user_name => {
                users_names.unshift(extract_user_name.name)
            });
            /**combine all users info(number and names) */
            all_info = {
                number_of_users:results.length,
                users_names
            }
            res.json(all_info) //send all user info
        } else {
            throw err
        }
    })
})

module.exports = router