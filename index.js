// Require necessary modules and libraries
const express = require('express');
const mongoose = require('mongoose');

const app = express();
// Connect to mongoDB
mongoose.connect('mongodb://localhost/wordchain', {\n  useNewUrlParser: true,\n  useUnifiedTopology: true,\n}).catch(err => console.error('Failed to connect to DB', err));

// Set up application routes
const port = process.env.port || 3000;
app.listen(port, () => {\n  console.log(`Port { port } is listening...`)\n});
