const mongoose = require('../connection');

const Schema = mongoose.Schema;
//in my sql database 
const UserSchema = new Schema ({
    username: {type: String,required: true,unique: true},
    email: {type: String, required: true,unique:true},
    password: {type: String, required: true},
    friends: {type: Array},//table 
    expensis: {type: Array}//table
})

const userModel = mongoose.model('user',UserSchema);

module.exports = userModel;