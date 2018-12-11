var express = require('express');
var router = express.Router();
var firebase = require('../../firebase');

/* --------------- [1] ------------------------------------------------------------------------- */
router.get('/simulation/show/simulation/simulation-t1/:num',(req, res)=>{
    var num = req.params.num;
    firebase.db().ref('store/simulation/simulation-t1/'+num).once('value',data=>{
        res.json(data.val());
    })
})
router.post('/simulation/add/simulation/simulation-t1/:num',(req, res)=>{
    var data = req.body;
    var num = req.params.num;
    firebase.db().ref('store/simulation/simulation-t1/'+num).push(data).then(data=>{
        res.json('Sucess');
    }, err=>{
        res.json('Failed');
    })
})
 /* update ตัวแปรเดียวพร้อมกันหลาย key */
router.post('/simulation/updateMulti/simulation/simulation-t1/:num',(req, res)=>{
    var num = req.params.num; 
    var key = req.body;
    key.forEach(element => {
        firebase.db().ref('store/simulation/simulation-t1/'+num+'/'+element).update({test:1, split:1, hidden:1});
    });  
})
router.post('/simulation/remove/simulation/simulation-t1/:num/:key',(req, res)=>{
    var num = req.params.num;
    var key = req.params.key;
    firebase.db().ref('store/simulation/simulation-t1/'+num+'/'+key).update({hidden:1});
})
router.get('/simulation/simulation-t1/allCount',(req, res)=>{
    firebase.db().ref('store/simulation/simulation-t1/').once('value',data=>{
        res.json({count: data.numChildren(),data})  
    });
})

/* --------------- [2] ------------------------------------------------------------------------- */
router.get('/simulation/show/simulation/simulation-t2/:num',(req, res)=>{
    var num = req.params.num;
    firebase.db().ref('store/simulation/simulation-t2/'+num).once('value',data=>{
        res.json(data.val());
    })
})
router.post('/simulation/add/simulation/simulation-t2/:num',(req, res)=>{
    var data = req.body;
    var num = req.params.num;
    firebase.db().ref('store/simulation/simulation-t2/'+num).push(data).then(data=>{
        res.json('Sucess');
    }, err=>{
        res.json('Failed');
    })
})
router.post('/simulation/updateMulti/simulation/simulation-t2/:num',(req, res)=>{
    var num = req.params.num; 
    var key = req.body;
    key.forEach(element => {
        firebase.db().ref('store/simulation/simulation-t2/'+num+'/'+element).update({test:1});
    });
})
router.get('/simulation/simulation-t2/allCount',(req, res)=>{
    firebase.db().ref('store/simulation/simulation-t2/').once('value',data=>{
        res.json({count: data.numChildren(),data})  
    });
})

// /* --------------- [2] ------------------------------------------------------------------------- */
// router.get('/simulation/show/simulation/simulation-t2',(req, res)=>{
//     firebase.db().ref('store/simulation/simulation-t2').once('value',data=>{
//         res.json(data.val());
//     })
// })
// router.post('/simulation/add/simulation/simulation-t2',(req, res)=>{
//     var data = req.body;
//     firebase.db().ref('store/simulation/simulation-t2').push(data).then(data=>{
//         res.json('Sucess');
//     }, err=>{
//         res.json('Failed');
//     })
// })
// router.post('/simulation/updateMulti/simulation/simulation-t2/',(req, res)=>{ 
//     var key = req.body;
//     key.forEach(element => {
//         firebase.db().ref('store/simulation/simulation-t2/'+element).update({test:1});
//     });
   
// })
// router.delete('/simulation/remove/simulation/simulation-t2/:key',(req, res)=>{
//     var key = req.params.key;
//     firebase.db().ref('store/simulation/simulation-t2/'+key).remove();
// })

// /* --------------- [3] ------------------------------------------------------------------------- */
// router.get('/simulation/show/simulation/simulation-t3',(req, res)=>{
//     firebase.db().ref('store/simulation/simulation-t3').once('value',data=>{
//         res.json(data.val());
//     })
// })
// router.post('/simulation/add/simulation/simulation-t3',(req, res)=>{
//     var data = req.body;
//     firebase.db().ref('store/simulation/simulation-t3').push(data).then(data=>{
//         res.json('Sucess');
//     }, err=>{
//         res.json('Failed');
//     })
// })
// router.post('/simulation/updateMulti/simulation/simulation-t3/',(req, res)=>{ 
//     var key = req.body;
//     key.forEach(element => {
//         firebase.db().ref('store/simulation/simulation-t3/'+element).update({test:1});
//     });
   
// })
// router.delete('/simulation/remove/simulation/simulation-t3/:key',(req, res)=>{
//     var key = req.params.key;
//     firebase.db().ref('store/simulation/simulation-t3/'+key).remove();
// })

// /* --------------- [4] ------------------------------------------------------------------------- */
// router.get('/simulation/show/simulation/simulation-t4',(req, res)=>{
//     firebase.db().ref('store/simulation/simulation-t4').once('value',data=>{
//         res.json(data.val());
//     })
// })
// router.post('/simulation/add/simulation/simulation-t4',(req, res)=>{
//     var data = req.body;
//     firebase.db().ref('store/simulation/simulation-t4').push(data).then(data=>{
//         res.json('Sucess');
//     }, err=>{
//         res.json('Failed');
//     })
// })
// router.post('/simulation/updateMulti/simulation/simulation-t4/',(req, res)=>{ 
//     var key = req.body;
//     key.forEach(element => {
//         firebase.db().ref('store/simulation/simulation-t4/'+element).update({test:1});
//     });
   
// })
// router.delete('/simulation/remove/simulation/simulation-t4/:key',(req, res)=>{
//     var key = req.params.key;
//     firebase.db().ref('store/simulation/simulation-t4/'+key).remove();
// })

module.exports = router;