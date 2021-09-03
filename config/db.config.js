const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://IgorNovaes:12345678910@cluster0.ygnvo.mongodb.net/IgorNovaes?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
console.log(client, client.s.url)
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
module.exports = client;