const mongoose = require('mongoose');
const { Schema } = mongoose;
const LogSchema = new Schema({
    level: { type: String },
    message: { type: String },
    resourceId: { type: String },
    timestamp: { type: Number },
    traceId: { type: String },
    spanId: { type: String },
    commit: { type: String },
    metadata: {
        type: {
            parentResourceId:
            {
                type: String
            }
        }
    }
});
LogSchema.index({
    level: 'text',
    traceId: 'text',
    spanId: 'text',
    commit: 'text',
    message: 'text',
    resourceId: 'text',
    "metadata.parentResourceId": 'text',
    timestamp: 1
});
const Log = mongoose.model('Log', LogSchema);
module.exports = Log;
