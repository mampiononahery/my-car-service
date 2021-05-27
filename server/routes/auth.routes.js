const { signUp } = require("../middlewares");
const authController = require("../controllers/auth");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/signup",
    [
      signUp.checkDuplicateUsernameOrEmail,
      signUp.checkRolesExisted
    ],
    authController.signup
  );

	app.post("/api/auth/signin", authController.signin);
};