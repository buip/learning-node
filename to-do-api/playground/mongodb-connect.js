//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

const dbName = 'TodoApp';

MongoClient.connect('mongodb://localhost:27017/', (err, client) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MongoDB server');
    const db = client.db(dbName);
    // db.collection('Todos').insertOne({
    //   text: 'Something to do',
    //   completed: false
    // }, (err, result) => {
    //   if (err) {
    //     return console.log('Unable to insert todo', err);
    //   }
    //   console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
      name: 'Phuong',
      age: 20,
      location: 'Beloit'
    }, (err, result) => {
      if (err) {
        return console.log('Unable to insert todo', err);
      }
      console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    });

    client.close();
  }
});
