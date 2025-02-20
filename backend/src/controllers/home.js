const { Router } = require('express');
const { TimeStringToMillis } = require('../../utils/momentUtils');
const PostLogsServices = require('../services/PostLogs');
const KafkaConfig = require('../../kafkaServices/KafkaConfig');
const app = Router();

app.get('', (req, res) => {
    res.status(200).json({ 'message': 'SUCCESS' });
});

app.post('', (req, res) => {
    const body = req.body;
    const transformBody = JSON.stringify({ ...body, timestamp: TimeStringToMillis(body.timestamp) });
    const Kafka = new KafkaConfig();
    Kafka
        .produce('logs', transformBody)
        .then((kafkaRes) => {
            Kafka.consume('logs', PostLogsServices);
            res.status(200).json({ message: 'success' });
        }).catch(err => {
            res.status(500).json({ message: 'failure' });
        });
})

module.exports = app;