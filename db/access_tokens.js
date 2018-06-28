'use strict';

const tokens = {};

module.exports.find = (key, done) => {
  console.log("KEY", key);
  if (tokens[key]) return done(null, tokens[key]);
  return done(new Error('Token Not Found'));
};

module.exports.findByUserIdAndClientId = (userId, clientId, done) => {
  for (const token in tokens) {
    if (tokens[token].userId === userId && tokens[token].clientId === clientId) return done(null, token);
  }
  return done(new Error('Token Not Found'));
};

module.exports.save = (token, userId, clientId, done) => {
  console.log("TOKEN", token);
  tokens[token] = { userId, clientId };
  done();
};
