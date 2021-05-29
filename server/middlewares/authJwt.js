const jwt = require('jsonwebtoken');

const config = require('../config/auth.config');

const verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

	// verif and decode token 	
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }
    console.log("-----------", decoded);
    req.userId = decoded.id;
    next();
  });
};

const signUp = {
  verifyToken
};

module.exports = signUp;