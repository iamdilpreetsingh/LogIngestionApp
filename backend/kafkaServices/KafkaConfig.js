const { Kafka } = require('kafkajs');

module.exports = class KafkaConfig {
    constructor() {
        this.kafka = new Kafka({
            clientId: 'log-ingestor',
            brokers: ['localhost:9092']
        });

        this.producer = this.kafka.producer();
        this.consumer = this.kafka.consumer({ groupId: 'logs-backend' });
    }

    async produce(topic, message) {
        try {
            await this.producer.connect();
            await this.producer.send({
                topic: topic,
                messages: [{ value: message }]
            });
            await this.producer.disconnect();
        } catch (err) {
            console.log('ERROR', err);
        } finally {
            await this.producer.disconnect();
        }
    }

    async consume(topic, callback) {
        try {
            await this.consumer.connect();
            await this.consumer.subscribe({ topic: topic, fromBeginning: true });
            await this.consumer.run({
                eachBatchAutoResolve: true,
                eachBatch: async ({ batch, resolveOffset, heartbeat, isRunning, isStale }) => {
                    if (!isRunning() || isStale()) { return; }
                    const data = batch.messages.map(value => {
                        return JSON.parse(value.value.toString());
                    })
                    callback(data)
                    resolveOffset(batch.messages[batch.messages.length - 1].offset);
                    await heartbeat();
                }
            })
        } catch (err) { console.log('ERROR', err) }
        finally {
        }
    }
}