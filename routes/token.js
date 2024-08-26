 var express = require('express');
 var router = express.Router();

 router.get('/', async function (req, res, next) {

   res.render('token', { username: req.cookies['username'], title: 'Token' });
 });

 module.exports = router;

var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

const secretKey = process.env.TOKEN_SECRET;

router.get('/', async function (req, res, next) {
    const username = req.cookies['username'];

    const token = jwt.sign({ username: username }, secretKey , { expiresIn: '1h' });

  res.render('token', { username: req.cookies['username'], title: 'Token' });
    res.render('token', { username: username, token: token, title: 'Token' });
});

module.exports = router;