var express = require('express');
var router = express.Router();
var firebase = require('../../firebase');

/* ----------- aging -------------------------------------------------------------------------- */
router.get('/menu1/show/aging',(req, res)=>{
    firebase.db().ref('store/menu1/aging').once('value',data=>{
        res.json(data.val());
    })
})
/* ------- copy ตารางบ่มจากแจ้งเตือน ------------------------------------------- */
router.post('/menu1/add/aging',(req, res)=>{
    var data = req.body;
    data.forEach(element => {
        firebase.db().ref('store/menu1/aging').push(element);
    });
})
// router.post('/menu1/add/aging',(req, res)=>{
//     var data = req.body;
//     firebase.db().ref('store/menu1/aging').push(data).then(data=>{
//         res.json('Sucess');
//     }, err=>{
//         res.json('Failed');
//     })
// })

/* ค้นหาระหว่างวันที่หนึ่งถึงวันที่หนึ่ง*/
router.get('/simulation/search/simulation/simulation-t1/:num/:start/:end',(req, res)=>{
    var start = req.params.start;
    var end = req.params.end;
    var num = req.params.num;
    firebase.db().ref('store/simulation/simulation-t1/'+num).orderByChild('date').startAt(start).endAt(end).once('value',data=>{
        res.json(data.val());
    })
})


/* ----------- history-order -------------------------------------------------------------------------- */
router.get('/menu1/show/history-order',(req, res)=>{
    firebase.db().ref('store/menu1/history-order').once('value',data=>{
        res.json(data.val());
    })
})
router.post('/menu1/add/history-order',(req, res)=>{
    var data = req.body;
    firebase.db().ref('store/menu1/history-order').push(data).then(data=>{
        res.json('Sucess');
    }, err=>{
        res.json('Failed');
    })
})

module.exports = router;