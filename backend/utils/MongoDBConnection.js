const mongoose = require('mongoose');

async function MongoDBConnection() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
    } catch (err) {
        console.log(err);
    }
    const connection = mongoose.connection;
    connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
    connection.once('open', () => { console.log("Connected to DB!") });
}

module.exports = MongoDBConnection;