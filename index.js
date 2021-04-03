// npm start to start
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const fetch = require('node-fetch');
require('dotenv/config');

const port = 3000;

app.get('/', (req,res)=>{
    res.send("Backend is here");
});

app.use(cors());

// connect to database
mongoose.connect(
    process.env.DB_CONNECTION, 
    {useNewUrlParser: true},
    ()=> console.log("connected to db"));

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`)
    })