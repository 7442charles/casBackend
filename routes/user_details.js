const express = require('express')
const router = express.Router()
const connection = require('./database')

router.get('/user_profile_details',(req, res)=>{
    let user_data = {
      user_name:'Charles Kinaro',
      course:'DHM',
      profile_picture:'assets/img/profile-img.jpg',
      //about:user_about,
      intake_year:'2019',
      phone_no:'+2547 1234 5678',
      adm_no:'CIH/DHM/1506M/2019',
      user_email: 'cking6951@gmail.com',
      new_notifications:'5',
      //new_messages: user_messages.length
    };
    res.json(user_data)
})







module.exports = router