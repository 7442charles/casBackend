const express = require('express')
const router = express.Router()
const connection = require('./database')

router.get('/messages', (req, res)=>{
    res.json(user_messages)
})
  
let user_about = "Professional custom Pc builder and seller. You see it you order it, we build it, we delivery it to your door step"
let user_messages = [
    {messageId:'1', sender_name:'mac', sender_image:'assets/img/messages-4.jpg',message_body:'come home',date_sent:'10/11/2022'},
    {messageId:'2', sender_name:'jane', sender_image:'assets/img/messages-3.jpg', message_body:'don.t come home', date_sent:'12/10/2022'},
    {messageId:'3', sender_name:'victor', sender_image:'assets/img/messages-2.jpg', message_body:'can i copy your home work', date_sent:'13/10/2022' },
    {messageId:'4', sender_name:'davis', sender_image:'assets/img/messages-1.jpg', message_body:'mom needs your now', date_sent:'14/10/2022' }
]

module.exports = router