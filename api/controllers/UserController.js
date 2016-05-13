'use strict';

/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  /**
   * POST /user
   */
  create: create,

  /**
   * POST /user/login
   */
  login: login
};

function create(req, res) {
  UserService.register(req.body)
    .then((profile) => {
      return res.json(profile);
    })
    .catch((err) => {
      err.message = err.message || 'Unable to register';
      return res.badRequest(err);
    });
}

function login(req, res) {
  UserService.authenticate(req.body)
    .then((profile) => {
      return res.json(profile);
    })
    .catch((err) => {
      err.message = err.message || 'Could not login, have you registered?';
      return res.badRequest(err);
    });
}
