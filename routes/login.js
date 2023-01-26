const express = require('express')
const router = express.Router()
const connection = require ('./database')
const bodyParser = require('body-parser');

/**setup body parser */
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


router.post('/login', (req, res)=>{
    console.log(req.body);
})

module.exports = router