var express = require('express');
var router = express.Router();
var firebase = require('../firebase.js');

router.get('/show/user',(req, res)=>{
    firebase.db().ref('users').once('value',data=>{
        res.json(data.val());
    })
})

router.post('/sign-up',(req, res)=>{
    var data = req.body;
    firebase.db().ref('users').push(data).then(data=>{
        res.json('Sucess');
    }, err=>{
        res.json('Failed');
    })
})

router.post('/update/:key',(req, res)=>{
    var key = req.params.key;
    var data = req.body;
    firebase.db().ref('users/'+key).update(data);
})

router.get('/show/:email',(req, res)=>{
    var email = req.params.email;
    firebase.db().ref('users').orderByChild('email').equalTo(email).once('value',data=>{
        res.json(data.val());
    });
});

router.get('/showMembers',(req, res)=>{
    firebase.db().ref('users').once('value',data=>{
        res.json(data.val());
    });
});

module.exports = router;
