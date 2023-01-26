const express = require("express");
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const router = express.Router();
const connection = require('./database')// Set up MySQL connection

// Set up middleware
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// Set up route for signup form submission
router.post('/signup', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;
  const phone_no = req.body.phone;

  // check if the email is already registered
  const sql = `SELECT COUNT(*) as count FROM users WHERE email = '${email}'`;
  connection.query(sql, function(error, results, ) {
    if (error) {
      console.error(error);
      return;
    }

    // if the email is not registered, insert a new row into the users table
    if (results[0].count === 0) {
      bcrypt.hash(password, 10, (err, hashpass) => {
        if (err) {
          // Handle error
          throw err
        }else{
          const insertSql = `INSERT INTO users (email, password, name, phone_number, role) VALUES ('${email}', '${hashpass}','${name}', '${phone_no}', 'student')`;
          connection.query(insertSql, function(error, results, ) {
          if (error) {

            console.error(error);
            return;
          }
          const success  = {
            message:`Successfully registered user with email: ${email}`,
            statusmsg:'success'
          }
          res.json(success);
          });
        }
      });
    } else {
      const fail = {
        message:`Email ${email} is already registered`,
        statusmsg:'fail'
      }
      res.json(fail);
    }
  });
});

module.exports = router;

