const express = require('express');

const router = express.Router();


router.get('/', function (req, res) {
    res.send('Hello home from router ')
    console.log('hello about')
  })


router.post('/registration', function (req, res) {
    console.log(req.body)
    res.json({message:req.body})
})

// {
//     "name":"Gourab",
//     "email":"a@gmail.com",
//     "phone":1234567891,
//     "work":"web dev",
//     "password":"password",
//     "cpassword":"password"

// }
module.exports = router;