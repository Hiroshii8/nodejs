const nsq = require('nsqjs');

function InitConsumer(NSQ_Data) {
    let NSQ = {
        topic: NSQ_Data.topic,
        channel: NSQ_Data.channel,
        lookupd: NSQ_Data.lookupd,
        MaxAttempt: NSQ_Data.MaxAttempt,
        MaxInFlight: NSQ_Data.MaxInFlight,
        Handler: NSQ_Data.Handler
    };

    const nsq_Consumer = new nsq.Reader(NSQ.topic, NSQ.channel, {
        lookupdHTTPAddresses: NSQ.lookupd,
        maxAttempts: NSQ.MaxAttempt,
        maxInFlight: NSQ.MaxInFlight
    })

    function Connect() {
        try {
            nsq_Consumer.connect();
        } catch (e) {
            console.log("NSQ Consumer Connect : " + e.message);
        }
    }
    function waitMessage() {
        console.log("Consumer for Topic " + NSQ.topic + " is ready !");
        nsq_facebookConsumer.on('message', msg => {
            NSQ.Handler(msg);
        })
    }
    return {
        Connect,
        waitMessage
    }
}

function InitPublisher() {
    let nsq_Publisher = new nsq.Writer('127.0.0.1', 4150);
    return {
        nsq_Publisher
    }
}

module.exports = {
    NSQ_Consumer: InitConsumer,
    NSQ_Publisher: InitPublisher,
}
