'use strict';
let express = require('express');
let app = express();
let port = process.env.PORT || 3000;
let controller = require('./controllers/controller');

app.set('port',port);
app.use(function (req,res,next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("cAccess-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/addTask',controller.addTask);
app.get('/getTask',controller.getTask);

app.listen(port, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});