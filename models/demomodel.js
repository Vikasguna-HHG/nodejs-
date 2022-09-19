const mongoose = require('mongoose');
const modelSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    }
})

const demo = mongoose.model('example',modelSchema);
module.exports = demo;