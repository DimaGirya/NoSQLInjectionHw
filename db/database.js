'use strict';
//------------Connect tomongodbonmLabvia Mongoose--------------
let flagIsConnection =  false;
let mongoose = require('mongoose');

let mongoUrl = 'mongodb://127.0.0.1:27017';

//The server optionauto_reconnectis defaulted to true
let options = {
    server: {
        auto_reconnect:true
    }
};
mongoose.Promise = global.Promise;
mongoose.connect(mongoUrl, options);
let db = mongoose.connection;// a global connection variable

// Event handlers for Mongoose
db.on('error', function (err) {
    console.error('Mongoose: Error: ' + err);
});
db.on('open', function(){
    flagIsConnection = true;
    console.info('Mongoose: Connection established');
});
db.on('disconnected', function(){
    flagIsConnection = false;
    console.info('Mongoose: Connection stopped,recconect');
    mongoose.connect(mongoUrl, options);
});
db.on('reconnected', function (){
    flagIsConnection = true;
    console.info('Mongoose reconnected!');
});

exports.isConnectedToDB = function () {
    return flagIsConnection
};