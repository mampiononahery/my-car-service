const express = require("express");
const carController = require('../controllers/car');
const { authJwt } = require("../middlewares");

module.exports = app => {
	const router = express.Router();

	// create a new car
	 router.post("/", [authJwt.verifyToken], carController.create);

	// Retrieve all cars
	router.get("/", carController.findAll);

	 app.use("/api/cars", router);
}





