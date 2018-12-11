var express = require('express');
var router = express.Router();
var firebase = require('../../firebase');

// /* ----------- import-t1 -------------------------------------------------------------------------- */
// router.get('/menu2/show/import/import-t1',(req, res)=>{
//     firebase.db().ref('store/menu2/import/import-t1').once('value',data=>{
//         res.json(data.val());
//     })
// })

/* ----------- import-t2 -------------------------------------------------------------------------- */
router.get('/menu2/show/import/import-t2',(req, res)=>{
    firebase.db().ref('store/menu2/import/import-t2').once('value',data=>{
        res.json(data.val());
    })
})
router.post('/menu2/add/import/import-t2',(req, res)=>{
    var data = req.body;
    firebase.db().ref('store/menu2/import/import-t2').push(data).then(data=>{
        res.json('Sucess');
    }, err=>{
        res.json('Failed');
    })
})

/* ----------- import-t3 -------------------------------------------------------------------------- */
router.get('/menu2/show/import/import-t3',(req, res)=>{
    firebase.db().ref('store/menu2/import/import-t3').once('value',data=>{
        res.json(data.val());
    })
})
router.post('/menu2/add/import/import-t3',(req, res)=>{
    var data = req.body;
    firebase.db().ref('store/menu2/import/import-t3').push(data).then(data=>{
        res.json('Sucess');
    }, err=>{
        res.json('Failed');
    })
})

/* ----------- import-t4 -------------------------------------------------------------------------- */
router.get('/menu2/show/import/import-t4',(req, res)=>{
    firebase.db().ref('store/menu2/import/import-t4').once('value',data=>{
        res.json(data.val());
    })
})
router.post('/menu2/add/import/import-t4',(req, res)=>{
    var data = req.body;
    firebase.db().ref('store/menu2/import/import-t4').push(data).then(data=>{
        res.json('Sucess');
    }, err=>{
        res.json('Failed');
    })
})

/* ----------- import-t5 -------------------------------------------------------------------------- */
router.get('/menu2/show/import/import-t5',(req, res)=>{
    firebase.db().ref('store/menu2/import/import-t5').once('value',data=>{
        res.json(data.val());
    })
})
router.post('/menu2/add/import/import-t5',(req, res)=>{
    var data = req.body;
    firebase.db().ref('store/menu2/import/import-t5').push(data).then(data=>{
        res.json('Sucess');
    }, err=>{
        res.json('Failed');
    })
})

module.exports = router;