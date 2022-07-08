var express = require("express");
var mongoose = require('mongoose');
var serviceRouter = require('./routes/index');
var cors = require('cors');
var path = require('path');

mongoose.connect("mongodb+srv://superuser:Admin123@cluster0.s4d1dz3.mongodb.net/?retryWrites=true&w=majority", () => {
    console.log('db connected');
}, (err) => {
    console.log(err.message, 'err while connecting db');
})

var port = process.env.PORT || 3999;

var app = express();
app.use(express.json());
app.use(cors());
app.use('/', serviceRouter);
app.use(express.static(__dirname + '/client/build'));
app.get('/', (req, res) => {
    console.log('Service started', __dirname);
    res.sendFile(path.join('/client/build', 'index.html'));
})

app.listen(port, () => {
    console.log('listening on port: ' + port);
})