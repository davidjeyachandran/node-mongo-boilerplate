var ObjectID = require('mongodb').ObjectID;

module.exports = (app, db) => {
    app.post('/save', (req, res) => {
        gasto = req.body;
        db.collection('gastos').insertOne(gasto, (err, result) => {
            console.log('result: ', result);
            if (err) return res.send('error: ' + err);

            res.send(result.ops[0]);
            
        })       
    })
}