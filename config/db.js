"use strict";

let mongoose = require("mongoose");

require('../models/productSchema');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.URL);

let db = mongoose.connection;
db.on('error',console.error.bind(console,'connection failed !'));

db.once('open',()=>{
    console.log(`server successfully connected to database !`);
});
