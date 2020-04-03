const nsq = require('nsqjs');


const w = new nsq.Writer('127.0.0.1', 4150);

w.connect();

w.on('ready', () => {
    w.publish('topic_2', JSON.stringify({
        message: "hello"
    }),  err => {
        if (err) { return console.error(err.message) }
        console.log('Message sent successfully')
        w.close()
    })
})

w.on('closed', () => {
    console.log('Writer closed')
})
