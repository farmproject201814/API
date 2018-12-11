var express = require('express');
var router = express.Router();
var firebase = require('../../firebase');

/* ----------- order-t1 -------------------------------------------------------------------------- */
// router.get('/menu3/show/order/order-t1',(req, res)=>{
//     firebase.db().ref('store/menu3/order/order-t1').once('value',data=>{
//         res.json(data.val());
//     })
// })

/* ----------- order-t2 -------------------------------------------------------------------------- */
router.get('/menu3/show/order/order-t2',(req, res)=>{
    firebase.db().ref('store/menu3/order/order-t2').once('value',data=>{
        res.json(data.val());
    })
})
router.post('/menu3/add/order/order-t2',(req, res)=>{
    var data = req.body;
    firebase.db().ref('store/menu3/order/order-t2').push(data).then(data=>{
        res.json('Sucess');
    }, err=>{
        res.json('Failed');
    })
})

/* ----------- order-t3 -------------------------------------------------------------------------- */
router.get('/menu3/show/order/order-t3',(req, res)=>{
    firebase.db().ref('store/menu3/order/order-t3').once('value',data=>{
        res.json(data.val());
    })
})
router.post('/menu3/add/order/order-t3',(req, res)=>{
    var data = req.body;
    firebase.db().ref('store/menu3/order/order-t3').push(data).then(data=>{
        res.json('Sucess');
    }, err=>{
        res.json('Failed');
    })
})

/* ----------- order-t4 -------------------------------------------------------------------------- */
router.get('/menu3/show/order/order-t4',(req, res)=>{
    firebase.db().ref('store/menu3/order/order-t4').once('value',data=>{
        res.json(data.val());
    })
})
router.post('/menu3/add/order/order-t4',(req, res)=>{
    var data = req.body;
    firebase.db().ref('store/menu3/order/order-t4').push(data).then(data=>{
        res.json('Sucess');
    }, err=>{
        res.json('Failed');
    })
})

/* ----------- order-t5 -------------------------------------------------------------------------- */
router.get('/menu3/show/order/order-t5',(req, res)=>{
    firebase.db().ref('store/menu3/order/order-t5').once('value',data=>{
        res.json(data.val());
    })
})
router.post('/menu3/add/order/order-t5',(req, res)=>{
    var data = req.body;
    firebase.db().ref('store/menu3/order/order-t5').push(data).then(data=>{
        res.json('Sucess');
    }, err=>{
        res.json('Failed');
    })
})

module.exports = router;