let schema = require('../db/taskSchema');

exports.addTask = function (req, res) {
    const task = req.query.task;
    const taskObject = new schema(
        {
            task: task,
        });
    const queryExePromise = taskObject.save();
    queryExePromise.then(doc => {
        res.status(200).send(doc);
    }).catch(err => {
        res.status(500).send(err);
    });
};

exports.getTask = function (req, res) {
    console.log( "this.task === '"+req.query.task+"'");
    const query = schema.find({
        $where: "this.task === '"+req.query.task+"'"
    });
    const queryExePromise = query.exec();
    queryExePromise.then(doc => {
        console.log(doc);
        res.status(200).send(doc);
    }).catch(err => {
        console.error(err);
        res.status(500).send(err);
    });
};

/*
 function() {
 while(1);
 }
 */