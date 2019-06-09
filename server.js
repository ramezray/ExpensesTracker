const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const expenses = require('./routes/api/expense')
const app = express();

app.use(bodyParser.json());

//let's config our DB
const db = require("./config/keys").mongoURI

//connect to Atlas
mongoose
.connect(db)
.then(()=> console.log("our db is connected...."))
.catch(error => console.log(error))

app.use('/api/expense', expenses)

const port = process.env.PORT || 8080;
//listen to our port
app.listen(port, ()=>console.log(`server is on port ${port}`));



