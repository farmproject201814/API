var express = require('express');
var router = express.Router();
var firebase = require('../../firebase');

/* ---------- แสดงตาราง  ----------------------- */
router.get('/menu2/show/import',(req, res)=>{
    firebase.db().ref('store/menu2/import').once('value',data=>{
        res.json(data.val());
    })
})
/* ---------- copy ตารางนำเข้าจากแจ้งเตือน ----------------------- */
router.post('/menu2/add/import',(req, res)=>{
    var data = req.body;
    data.forEach(element => {
        firebase.db().ref('store/menu2/import').push(element);
    });
})
module.exports = router;