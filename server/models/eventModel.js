const mongoose = require('mongoose');
const User = require('../models/userModel.js');
var Schema = mongoose.Schema;
const users = User.User





const  eventSchema = new Schema({
    name:String,
    users: [{ type: Schema.Types.ObjectId, ref: 'users' }],
    status:Boolean,
    num:Number
});

const Event = mongoose.model('event', eventSchema);

module.exports = Event;