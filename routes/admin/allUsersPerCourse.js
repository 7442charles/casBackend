const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const connection = require('../database')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended:false}))

router.post('/allUsersPerCourse', (req, res)=>{
    course = req.body.course
    sql=`SELECT * FROM users WHERE admission_number LIKE '%${course}%'`
    connection.query(sql, (error, results) => {
        if (error) {
            res.json("Error occured! Try again later")
            throw error;
        } else {
            if (results.length<=0) {
                res.json('no students matching the course')
            } else {
                student_names = []
                /**extract names and feed to the student_name array */
                results.forEach(extract_student_name => {   
                    student_names.unshift(extract_student_name.name)
                });
                /**combine everything the number and names */
                const full_info = {
                    number_of_students: results.length,
                    names_of_students: student_names
                }
                res.json(full_info)/**send everything */
            }
        }
    })
    
})


module.exports = router