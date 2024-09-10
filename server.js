const express = require('express');
const bodyparser = require('body-parser');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/register.js');
const signin = require('./controllers/signin.js');
const profile = require('./controllers/profile.js');
const image = require('./controllers/image.js');

const db = knex({
  client: 'pg', // Ensure 'pg' is correct
  connection: {
    host: '127.0.0.1', // Localhost
    port: 5432, // Default PostgreSQL port
    user: 'rob', // Replace with your PostgreSQL username
    password: '', // Replace with your PostgreSQL password
    database: 'smart-brain', // The database you're trying to connect to
  },
});

const app = express();
app.use(bodyparser.json());
app.use(cors())

app.get('/', (req, res)=>{res.send('hey there hacker dudes!')})
app.post('/signin', (req, res) => { signin.handleSignin(req,res,db,bcrypt) })
app.post('/register', (req, res) => {register.handleRegister(req, res, db, bcrypt)})
app.get('/profile/:id', (req, res) => {profile.handleprofileget(req, res, db)})
app.put('/image', (req, res) => {image.handleImage(req, res, db)})


 

const listener = app.listen(process.env.PORT, function() {
  console.log('running on port ' + listener.address().port);
});




