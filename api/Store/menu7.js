var express = require('express');
var router = express.Router();
var firebase = require('../../firebase');

/* ------ ตั้งค่าห้อง ---------------------------------------- */
router.post('/menu7/all-setting/add/room/:key',(req, res)=>{
    var key = req.params.key;
    var data = req.body;
    firebase.db().ref('store/menu7/all-setting/room/'+key).update(data);
})
/* ------ แสดงห้อง ---------------------------------------- */
router.get('/menu7/all-setting/show/room',(req, res)=>{
    firebase.db().ref('store/menu7/all-setting/room').once('value',data=>{
        res.json(data.val());
    })
})


/* ------ ตั้งค่าชั้นเก็บ ---------------------------------------- */
router.post('/menu7/all-setting/add/class/:key',(req, res)=>{
    var key = req.params.key;
    var data = req.body;
    firebase.db().ref('store/menu7/all-setting/class/'+key).update(data);
})
/* ------ แสดงชั้นเก็บ ---------------------------------------- */
router.get('/menu7/all-setting/show/class',(req, res)=>{
    firebase.db().ref('store/menu7/all-setting/class').once('value',data=>{
        res.json(data.val());
    })
})


/* ------ ตั้งค่าตะกร้า ---------------------------------------- */
router.post('/menu7/all-setting/add/bucket/:key',(req, res)=>{
    var key = req.params.key;
    var data = req.body;
    firebase.db().ref('store/menu7/all-setting/bucket/'+key).update(data);
})
/* ------ แสดงตะกร้า ---------------------------------------- */
router.get('/menu7/all-setting/show/bucket',(req, res)=>{
    firebase.db().ref('store/menu7/all-setting/bucket').once('value',data=>{
        res.json(data.val());
    })
})


module.exports = router;