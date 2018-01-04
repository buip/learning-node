//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

const dbName = 'TodoApp';

MongoClient.connect('mongodb://localhost:27017/', (err, client) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MongoDB server');
    const db = client.db(dbName);

    // db.collection('Todos')
    // .find({
    //   _id: new ObjectID('5a4d9b4b2ff3a4510f2404f2')
    // })
    // .toArray()
    // .then((docs) => {
    //   console.log('Todos: ');
    //   console.log(JSON.stringify(docs, undefined, 2));
    // }, (error) => {
    //   console.log('Unable to fetch todos', error);
    // });

    // db.collection('Todos')
    // .find()
    // .count()
    // .then((count) => {
    //   console.log(`Todos: ${count}`);
    // }, (error) => {
    //   console.log('Unable to fetch todos', error);
    // });

    db.collection('Users')
      .find({name: 'Preston'})
      .toArray()
      .then((docs) => {
          console.log(JSON.stringify(docs, undefined, 2));
      }, (error) => {
        console.log(error);
      })

    // client.close();
  }
});
