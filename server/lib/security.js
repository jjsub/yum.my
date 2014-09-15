'user strict';

var User = require('../models/user');

exports.authnticate = function(req, res, next){
  User.findById(req.session,userId, function(err, user){
    req.user = user;
    res.setHeader('X-Authenticated-User', user ? user.email : 'anoym')

    next();
    );}
};
