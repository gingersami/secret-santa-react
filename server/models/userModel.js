
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var ref = require('../models/eventModel')

const userSchema = new Schema({
    name:String,
    event: { type: Schema.Types.ObjectId, ref: 'ref' },
    email:String,
    prefs:[],
    statusGive:Boolean,
    statusGet:Boolean,
    pair: {
        name: String,
        email: String
    }
});

const User =  mongoose.model('user', userSchema);
module.exports={
    userSchema:userSchema,
    User:User
}