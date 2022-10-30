//     File Name : db.js
//     Student Name : Rushi Rokad
//     Student Id : 301230471
//     Date : 28th Oct, 2022

// Do not expose your credentials in your code.
let atlasDB = "mongodb+srv://dbUser:midTerm301230471@cluster005.qyg7tr2.mongodb.net/RushiMidTerm";

// Database setup
let mongoose = require('mongoose');

module.exports = function(){

    mongoose.connect(atlasDB);
    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error:'));
    mongodb.once('open', ()=>{
        console.log('===> Connected to MongoDB.');
    })

    return mongodb;
}