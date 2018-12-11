var express = require('express');
var router = express.Router();
var firebase = require('../../firebase');

/* ----------- Store-t2 -------------------------------------------------------------------------- */
router.get('/menu4/show/store/store-t2',(req, res)=>{
    firebase.db().ref('store/menu4/store/store-t2').once('value',data=>{
        res.json(data.val());
    })
})
router.post('/menu4/add/store/store-t2',(req, res)=>{
    var data = req.body;
    firebase.db().ref('store/menu2/store/store-t2').push(data).then(data=>{
        res.json('Sucess');
    }, err=>{
        res.json('Failed');
    })
})

module.exports = router;