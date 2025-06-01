require('dotenv').config()

const express = require('express')
const app = express()

const connectDB = require('./config/db');

//Calling DB function for connection
connectDB();

//Middeleware functions
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is up on port number: ${PORT}`));