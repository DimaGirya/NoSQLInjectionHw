'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Task = new Schema({
    task: {type: String, required: true},
}, {collection: 'task'});

const userSchema = mongoose.model('task', Task);
module.exports = userSchema;

