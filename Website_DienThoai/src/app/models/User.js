const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Login = new Schema({
    name:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
});

module.exports = mongoose.model('User', Login, "User");
