const express = require("express");
const carController = require('../controllers/car');
const { authJwt } = require("../middlewares");

module.exports = app => {
	const router = express.Router();

	//-----------------------------------------------------------------------------//
	//--------------------------- create car --------------------------------------//
	//---------------------------------------------------------------------------- //

	// admin only has the access to create a car
	 router.post("/", [authJwt.verifyToken, authJwt.isAdmin], carController.create);

	// Retrieve all cars
	router.get("/", carController.findAll);

	 app.use("/api/cars", router);
}





