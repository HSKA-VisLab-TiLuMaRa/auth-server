'use strict';
let request = require('request');

module.exports.findById = (id, done) => {
  request.get('http://localhost:8083/users/' + id).on('response', function(response) {
      // console.log(response.statusCode) // 200
      // console.log(response.headers['content-type']) // 'image/png'
      if (response.statusCode !== 200) {
        return done(new Error('User not found'));
      }
      response.setEncoding('utf8');
      response.on('data', function (data) {
        // console.log('data', data);
        if (data) {
          return done(null, JSON.parse(data));
        } else {
          return done(new Error('User not found'));
        }
      });
    }).on('error', function(err) {
      return done(new Error('User not found'));
    });
};

module.exports.findByUsername = (username, done) => {
  request.get('http://localhost:8083/usersByUsername/' + username).on('response', function(response) {
      // console.log(response.statusCode) // 200
      // console.log(response.headers['content-type']) // 'image/png'
      if (response.statusCode !== 200) {
        return done(new Error('User not found'));
      }
      response.setEncoding('utf8');
      response.on('data', function (data) {
        // console.log('data', data);
        if (data) {
          return done(null, JSON.parse(data));
        } else {
          return done(new Error('User not found'));
        }
      });
    }).on('error', function(err) {
      return done(new Error('User not found'));
    });
};
