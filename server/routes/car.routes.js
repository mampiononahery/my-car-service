const express = require("express");
const carController = require('../controllers/car');

module.exports = app => {
	const router = express.Router();

	// create a new car
	 router.post("/", carController.create);

	// Retrieve all cars
	router.get("/", carController.findAll);

	 app.use("/api/cars", router);
}





