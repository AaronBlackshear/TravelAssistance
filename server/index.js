require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { json } = require('body-parser');
const port = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(json());

app.listen(() => console.log(`Magic happens on port ${port}`));