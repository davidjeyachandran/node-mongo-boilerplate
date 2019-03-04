var ObjectID = require('mongodb').ObjectID;

const collectionName = 'gastos';

module.exports = (app, db) => {
    app.post('/gasto/add', (req, res) => {
        gasto = req.body;
        db.collection(collectionName).insertOne(gasto, (err, result) => {
            console.log('result: ', result);
            if (err) return res.send('error: ' + err);

            res.send(result.ops[0]);
            
        })       
    })

    app.get('/gasto', (req, res) => {
        db.collection(collectionName).find().toArray((err, results) => {
            if (err) return res.send('error: ' + err);
            console.log(results);
            res.json(results);

        })
    })

    app.get('/gasto/:id', (req, res) => {
        id = req.params.id;
        const details = {'_id': new ObjectID(id)};
        db.collection(collectionName).findOne(details, (err, item) => {
            if (err) return err;
            res.send(item)
        })

    })

    app.delete('/gasto/delete/:id', (req, res) => {
        id = req.params.id;
        const details = {'_id': new ObjectID(id)};
        db.collection(collectionName).deleteOne(details, (err, item) => {
            if (err) return err;
            res.send(item)
        })

    })
}
