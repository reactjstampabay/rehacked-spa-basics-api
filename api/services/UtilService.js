'use strict';

module.exports = {
  expectModel: expectModel,
  expectNoModel: expectNoModel
};

function expectModel(model) {
  return new Promise((resolve, reject) => {
    return model ? resolve(model) : reject(new Error());
  });
}

function expectNoModel(model) {
  return new Promise((resolve, reject) => {
    return model ? reject(new Error()) : resolve(model);
  });
}
