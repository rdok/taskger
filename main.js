console.log('================================================================================')
const MongoClient = require('mongodb').MongoClient

const {DB_HOST, DB_PORT, DB_USER, DB_PASSWORD} = process.env;
const username = encodeURIComponent(DB_USER);
const password = encodeURIComponent(DB_PASSWORD);

const uri = `mongodb://${username}:${password}@${DB_HOST}:${DB_PORT}`
const databaseName = 'main'

const client = new MongoClient(uri, {
  useUnifiedTopology: true
})

client.connect(async (err, client) => {
  if(err) return console.error(err)

  const db = client.db(databaseName)
  await db.collection('users').insertOne({
    name: 'Riz',
  }).finally(() => {
    client.close();
  })
});
