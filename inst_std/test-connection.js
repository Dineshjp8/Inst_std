const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

client.connect()
  .then(() => {
    console.log('Connected to the database successfully!');
    client.end();
  })
  .catch(err => {
    console.error('Failed to connect to the database:', err);
  });
