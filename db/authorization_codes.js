'use strict';

const codes = {};

module.exports.find = (key, done) => {
  if (codes[key]) return done(null, codes[key]);
  return done(new Error('Code Not Found'));
};

module.exports.save = (code, clientId, redirectUri, user, done) => {
  codes[code] = { clientId, redirectUri, userId: user.id, role: user.roleId };
  done();
};
