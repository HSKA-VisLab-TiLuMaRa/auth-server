'use strict';

const passport = require('passport');

module.exports.info = [
  passport.authenticate('bearer', {
    session: false
  }),
  (request, response) => {
    // request.authInfo is set using the `info` argument supplied by
    // `BearerStrategy`. It is typically used to indicate scope of the token,
    // and used in access control checks. For illustrative purposes, this
    // example simply returns the scope in the response.
    // console.log("CLIENT INFO", request.user.roleId);
    let role;
    if (request.user.roleId === 1) {
      role = "ROLE_ADMIN";
    } else {
      role = "ROLE_USER"
    }
    response.json({
      client_id: request.user.id,
      authorities: role,
      // name: request.user.name,
      scope: request.authInfo.scope
    });
  }
];
