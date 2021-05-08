console.log('================================================================================')
const MongoClient = require('mongodb').MongoClient

const {DB_HOST, DB_PORT} = process.env;
console.log(DB_HOST)
console.log(DB_PORT);

const connectionURL = `mongodb://${DB_HOST}:${DB_PORT}`
const databaseName = 'main'

const client = new MongoClient(connectionURL, {
  useUnifiedTopology: true
})

client.connect((err, client) => {
  if(err) return console.error(err)

  console.log('Successfull connected')

  client.close();
});
