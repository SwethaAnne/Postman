var express = require("express");
var mongoose = require('mongoose');
var serviceRouter = require('./routes/index');
var cors = require('cors');

mongoose.connect("mongodb://localhost/testdb", () => {
    console.log('db connected');
}, (err) => {
    console.log(err.message, 'err while connecting db');
})

var app = express();
app.use(express.json());
app.use(cors());
app.use('/', serviceRouter);
app.get('/', (req, res) => {
    console.log('Service started');
    return res.status(200).json({
        success: true,
        message: "Welcome to post service"
    })
})
var port = 3999;

app.listen(port, () => {
    console.log('listening on port: ' + port);
})