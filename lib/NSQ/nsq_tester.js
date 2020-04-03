const nsq = require('nsqjs');
const nsqWrapper = require('./nsq_wrapper')
const Handler =

function handlerTest(message) {
    console.log("ini message");
    console.log(typeof(message.body.toString()))
    message.touch();
    message.finish();
}

function handlerTest2(message) {
    console.log("ini message 2");
    console.log("REQEUE")
    message.finish();
}

let Data = [
    {
        topic: "topic_1",
        channel: "channel_1",
        lookupd: '127.0.0.1:4161',
        MaxAttempt: 5,
        MaxInFlight: 1,
        Handler: handlerTest
    },
    {
        topic: "topic_2",
        channel: "channel_2",
        lookupd: '127.0.0.1:4161',
        MaxAttempt: 5,
        MaxInFlight: 1,
        Handler: handlerTest2
    }
]

let readerArray = [];

for (let i=0; i<Data.length; i++) {
    readerArray[i] = nsqWrapper.NSQ_Consumer(Data[i]);
    readerArray[i].Connect();
}
Promise.all(readerArray);

readerArray[0].waitMessage();
readerArray[1].waitMessage();


// readerArray[0].on('message', msg => {
//     console.log('ini topic 1');
//     msg.finish();
// })
//
// readerArray[1].on('message', msg => {
//     console.log('ini topic 2');
//     msg.finish();
// });

