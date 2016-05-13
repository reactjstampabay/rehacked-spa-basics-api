'use strict';

const jwt = require('jsonwebtoken');

module.exports = function isAuthenticated(req, res, next) {
  if (!req.headers.authorization) {
    return res.forbidden({error: 'You are not permitted to perform this action'});
  }
  var token = req.headers.authorization.replace('Bearer ', '');
  jwt.verify(token, sails.config.jwt.SECRET, function(err, decoded) {
    if (err) {
      sails.log.error('Unable to verify Bearer Token: ' + token);
      return res.forbidden({error: 'You are not permitted to perform this action'});
    }
    if (!decoded.id) {
      sails.log.error('We did not have a decoded JWT value to check against.');
      return res.forbidden({error: 'You are not permitted to perform this action'});
    }

    req.currentUser = decoded;
    return next();
  });
};
