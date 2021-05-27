const db = require("../models");

// available roles in db
const ROLES = db.ROLES;
const User = db.user;

/**
 * check duplicate username or email in db
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Username
  User.findOne({
    username: req.body.username
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (user) {
      res.status(400).send({ message: "Failed! Username is already existed" });
      return;
    }

    // Email
    User.findOne({
      email: req.body.email
    }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (user) {
        res.status(400).send({ message: "Failed! Email is already existed" });
        return;
      }

      next();
    });
  });
};

/**
 * check roles in avaible list 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
const checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: `Failed! Role ${req.body.roles[i]} does not exist!`
        });
        return;
      }
    }
  }

  next();
};

const signUp = {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted
};

module.exports = signUp;