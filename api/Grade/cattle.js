var express = require('express');
var router = express.Router();
var firebase = require('../../firebase.js');

router.post('/add',(req, res)=>{
    var data = req.body;
    firebase.db().ref('BeefGrading/cattle').push(data).then(data=>{
        res.json('Sucess');
    }, err=>{
        res.json('Failed');
    })
})

router.delete('/remove/:key',(req, res)=>{
    var key = req.params.key;
    firebase.db().ref('BeefGrading/cattle/'+key).remove();
})

router.post('/addform',(req, res)=>{
    var data = req.body;
    firebase.db().ref('BeefGrading/cattle').push(data),ficbugs=>{
        if(ficbugs) {
            res.json({status: 'ERROR'});
        } else {
            res.json({status: 'OK'});
        }
    };
})

router.get('/show',(req, res)=>{
    firebase.db().ref('BeefGrading/cattle').once('value',data=>{
        res.json(data.val());
    });
});

router.post('/edit/:key',(req, res)=>{
    var key = req.params.key;
    var data = req.body;
    firebase.db().ref('BeefGrading/cattle/'+key).update(data,ficbug=>{
        if(ficbug) {
            res.json({status: 'ERROR'});
        } else {
            res.json({status: 'OK'});
        }
    });
})

router.get('/show/:key',(req, res)=>{
    var key = req.params.key;
    firebase.db().ref('BeefGrading/cattle/').orderByKey().equalTo(key).once('value',data=>{
        res.json(data.val());
    });
});



module.exports = router;
