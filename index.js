const express  = require("express");
const cors = require("cors")
const mysql = require("mysql")
const bodyParser = require('body-parser');
const connection = require('./routes/database')
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


/**admin routes */
const postNotification = require('./routes/admin/PostNotification')
const postEvent = require('./routes/admin/postEvents')
const allUsers = require('./routes/admin/allUsers')
const postTimetable = require('./routes/admin/postTimetable')
const allUsersPerCourse = require('./routes/admin/allUsersPerCourse')

/*end admin routes */

// end user route files
const signup = require('./routes/signup');
const notification =require ('./routes/notification')
const message = require('./routes/message')
const user_details = require('./routes/user_details')
const login = require('./routes/login')
const gallery = require('./routes/gallery')
const events = require('./routes/events')
const timetable = require('./routes/timetable')


app.use('/api', allUsers)
app.use('/api', postNotification)
app.use('/api',postTimetable)
app.use('/api', postEvent)
app.use('/api', signup)
app.use('/api', notification)
app.use('/api', message)
app.use('/api', user_details)
app.use('/api', login)
app.use('/api', gallery)
app.use('/api', events)
app.use('/api', timetable)
app.use('/api', allUsersPerCourse)


app.listen(3000, ()=>{
  console.log('running on port 3000');
})