const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const router = require('./router/router.js')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
// router for express JS
router(app)


console.log("Start Server")
app.listen(8081)

