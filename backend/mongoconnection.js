const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Mayank15:ehhBE1BKPIJKpAMM@cluster0.segojsa.mongodb.net/?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to port number 3000');
});


module.exports = db;