'use strict';

var User = require('../models/user');

exports.register = function(req, res){
  User.register(req.body, function(err, user){
    if(user){
      res.status(200);
    }else{
      res.status(400);
    }
  });
};


exports.login = function(req, res){
  User.login(req.body, function(err, user){
    if(user){
    res.session.regenerate(fuction(){
      req.session.userId = user.Id;
      req.session.save(function(){
        res.status(200).end();
     });
   });
    }else{
      res.status(401);
    }
  });
};

