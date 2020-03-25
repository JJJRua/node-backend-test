const { sign }=require('jsonwebtoken');
const {JWT_SECRET} = require('../config');


// STATELESS 
module.exports.generateToken = function(user){
    return sign({user},JWT_SECRET,{expiresIn:'1h'});
}