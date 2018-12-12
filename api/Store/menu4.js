var express = require('express');
var router = express.Router();
var firebase = require('../../firebase');

router.get('/menu4/show/store-t1',(req, res)=>{
    firebase.db().ref('store/menu4/store-t1').once('value',data=>{
        res.json(data.val());
    })
})
router.post('/menu4/add/store-t1',(req, res)=>{
    var data = req.body;
    data.forEach(element => {
        firebase.db().ref('store/menu4/store-t1').push(element);
    });
})

/* update ค่า hidden ให้เป็น 1 */
router.get('/menu4/update-h1/store-t1/:key',(req, res)=>{
    var key = req.params.key;
    firebase.db().ref('store/menu4/store-t1/'+key).update({hidden:1},d=>{
        if(d){
            res.json({status: 'ERROR'});
        }
        else {
            res.json({status : 'OK'});
        }
    });
})
/* update ค่า hidden ให้เป็น 0 */
router.get('/menu4/update-h0/store-t1/:key',(req, res)=>{
    var key = req.params.key;
    firebase.db().ref('store/menu4/store-t1/'+key).update({hidden:0},d=>{
        if(d){
            res.json({status: 'ERROR'});
        }
        else {
            res.json({status: 'OK'});
        }
    });
})

/* copy ตารางเก็บเป็นประวัติการเบิกออก */
router.post('/menu3/history/order',(req, res)=>{
    var data = req.body;
    data.forEach(element => {
        firebase.db().ref('store/menu3/order').push(element);
    });
})

module.exports = router;