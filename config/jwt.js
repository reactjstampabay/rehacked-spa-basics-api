'use strict';

module.exports.jwt = {
  SECRET: process.env.JWT_SECRET || 'set_a_better_key',
  TOKEN_EXPIRES: 43200, // 12 hours - https://www.npmjs.com/package/ms
  SALT_ROUNDS: 10
};
