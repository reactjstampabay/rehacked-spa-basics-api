'use strict';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
  authenticate: authenticate,
  encrypt: encrypt,
  register: register
};

/**
 * authenticates a user
 */
function authenticate(payload) {
  return new Promise(
    (resolve, reject) => {
      return User.findOne({email: payload.email})
        .then(ORMService.expectModel)
        .then(user => {
          return confirmPassword(payload.password, user);
        })
        .then(user => {
          return signToken(user);
        })
        .then(profile => {
          return resolve(profile);
        })
        .catch(error => {
          return reject(error);
        });
    });
}

/**
 * creates a user
 */
function register(payload) {
  return new Promise(
    (resolve, reject) => {
      return User.findOne({email: payload.email})
        .then(ORMService.expectNoModel)
        .then(() => {
          return User.create(payload);
        })
        .then(user => {
          return resolve(signToken(user));
        })
        .catch(error => {
          return reject(error);
        });
    });
}

function encrypt(user) {
  return new Promise(
    (resolve, reject) => {
      bcrypt.genSalt(sails.config.jwt.SALT_ROUNDS, (err, salt) => {
        bcrypt.hash(user.password, salt, (err, hashedPassword) => {
          if (err) {
            sails.log.error('Unable to hash password: ' + user.password);
            return reject(new Error('Incorrect username or password provided'));
          }
          user.password = hashedPassword;
          return resolve(user);
        });
      });
    }
  );
}

function confirmPassword(password, user) {
  return new Promise(
    (resolve, reject) => {
      bcrypt.compare(password, user.password, (err, valid) => {
        if (!valid) {
          sails.log.error('Incorrect password provided: ' + user.password);
          return reject(new Error('Incorrect username or password provided'));
        }
        return resolve(user);
      });
    });
}

function signToken(user) {
  return new Promise(
    (resolve) => {
      user.access_token = jwt.sign(user.toJWT(), sails.config.jwt.JWT_SECRET, {expiresIn: sails.config.jwt.TOKEN_EXPIRES});
      return resolve(user.toJSON());
    }
  );
}
