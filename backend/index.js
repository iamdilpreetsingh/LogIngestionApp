require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const homeController = require('./src/controllers/home.js');
const searchController = require('./src/controllers/search.js');
const MongoDBConnection = require('./utils/MongoDBConnection.js');

const app = express();
MongoDBConnection();

app.use(cors());
app.use(bodyParser.json());

app.use('/', homeController);
app.use('/search', searchController);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('listening on port', PORT);
});