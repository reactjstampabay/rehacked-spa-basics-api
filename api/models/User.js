/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'user',
  attributes: {
    email: {
      type: 'STRING',
      required: true
    },
    password: {
      type: 'STRING',
      required: true
    },

    /**
     * payload returned to client - delete any attributes we should exclude
     */
    toJSON: function() {
      delete this.password;
      return this;
    },

    /**
     * payload used to create JWT - delete any attributes we should exclude
     */
    toJWT: function() {
      var jwtPayload = Object.assign({}, this);
      delete jwtPayload.password;
      return jwtPayload;
    }
  },

  /**
   * invoked before a user is created
   */
  beforeCreate: function(values, callback) {
    UserService
      .encrypt(values)
      .then(() => {
        callback();
      })
      .catch(err => {
        sails.log.error(err);
      });
  }
};

