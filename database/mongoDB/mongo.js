const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mongoPractice', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then((err)=> {
    if (err)
        console.log(err)
})

module.exports = {
    mongoDB: mongoose
}