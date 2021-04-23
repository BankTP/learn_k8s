const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

const { Pool } = require("pg");
const pgClient = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});


pgClient.on("connect", (client) => {
  client
    .query("CREATE TABLE IF NOT EXISTS keep_numbers (number INT)")
    .catch((err) => console.error(err));
});


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/random_number', (req, res) => {
  res.send({
    num: parseInt(Math.random() * 100000)
  })
})

app.post('/save_number', (req, res) => {
  const num = req.body.num;
  pgClient.query("INSERT INTO keep_numbers(number) VALUES($1)", [num]);
  res.send({
    success:true,
    num
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})