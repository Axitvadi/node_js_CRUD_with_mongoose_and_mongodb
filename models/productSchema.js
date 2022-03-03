"use strict";
const mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    productName:{
        type:String,
        trim:true
    },
    productCategory:{
        type:String,
        trim:true,
    },
    productPrice:{
        type:String,
    },
    productdescription:{
        type:String
    }
},
{
    timestamps:true
})

var product = mongoose.model('product',productSchema);
module.exports = product;