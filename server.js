const express = require('express')
const app = express()
require('dotenv').config()

app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is up on port number: ${PORT}`));