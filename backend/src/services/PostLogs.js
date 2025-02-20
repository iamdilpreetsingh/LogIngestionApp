const Log = require('../models/LogsSchema');

async function PostLogsServices(data) {
    try {
        const obj = await Log.collection.insertMany(data);
        console.log(obj);
    } catch (err) {
        console.log(err);
    }
}

module.exports = PostLogsServices;