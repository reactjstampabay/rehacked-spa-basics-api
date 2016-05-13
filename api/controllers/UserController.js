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
    .then(profile => {
      return res.json(profile);
    })
    .catch(error => {
      error.message = error.message || 'Unable to register';
      return res.badRequest(error);
    });
}

function login(req, res) {
  UserService.authenticate(req.body)
    .then(profile => {
      return res.json(profile);
    })
    .catch(error => {
      error.message = error.message || 'Could not login, have you registered?';
      return res.badRequest(error);
    });
}
