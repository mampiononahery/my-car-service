const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.user = require("./user");
db.role = require("./role");
db.car = require("./car");
db.comment = require("./comment");
// default role
db.ROLES = ["user", "admin"];
module.exports = db;