var ObjectID = require('mongodb').ObjectID;

const collectionName = 'gastos';

module.exports = (app, db) => {
    app.post('/save', (req, res) => {
        gasto = req.body;
        db.collection(collectionName).insertOne(gasto, (err, result) => {
            console.log('result: ', result);
            if (err) return res.send('error: ' + err);

            res.send(result.ops[0]);
            
        })       
    })

    app.get('/gastos', (req, res) => {
        db.collection(collectionName).find().toArray((err, results) => {
            if (err) return res.send('error: ' + err);
            console.log(results);
            res.json(results);

        })
    })
}