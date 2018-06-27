'use strict';

const tokens = {};

module.exports.find = (key, done) => {
  if (tokens[key.replace(/!/g, ".")]) return done(null, tokens[key.replace(/!/g, ".")]);
  return done(new Error('Token Not Found'));
};

module.exports.findByUserIdAndClientId = (userId, clientId, done) => {
  for (const token in tokens) {
    if (tokens[token].userId === userId && tokens[token].clientId === clientId) return done(null, token.replace(/!/g, "."));
  }
  return done(new Error('Token Not Found'));
};

module.exports.save = (token, userId, clientId, done) => {
  console.log('SAVING TOKEN: ' + token);
  tokens[token.replace(/./g, "!")] = { userId, clientId, token };
  done();
};
