var app = require('express')();
var body = require('body-parser');

app.use(body.json());
app.use(body.urlencoded({extended:false}));

var header = function(req, res ,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, ",
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
};

app.use('/api', header, require('./api/users.js'));

// ----------------------------------------------------------------------------------

app.use('/api/users', header, require('./api/users.js'));
app.use('/api/cattle', header, require('./api/Grade/cattle.js'));
app.use('/api/graded', header, require('./api/Grade/graded.js'));
app.use('/api/summed', header, require('./api/Grade/summed.js'));

// -ระบบคลังชิ้นเนื้อ---------------------------------------------------------------------------------
app.use('/api/store', header, require('./api/Store/menu1.js'));
app.use('/api/store', header, require('./api/Store/menu2.js'));
app.use('/api/store', header, require('./api/Store/menu3.js'));
app.use('/api/store', header, require('./api/Store/menu4.js'));
app.use('/api/store', header, require('./api/Store/menu5.js'));
app.use('/api/store', header, require('./api/Store/menu6.js'));
app.use('/api/store', header, require('./api/Store/menu7.js'));
app.use('/api/store', header, require('./api/Store/simulation.js'));
// ----------------------------------------------------------------------------------

app.use('*',(req, res)=>{
    res.json('hello');
})

app.listen(4000, ()=>{
    console.log('Starting port 4000..');
})

