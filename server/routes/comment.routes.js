const express = require("express");
const carController = require('../controllers/car');
const commentController = require('../controllers/comment');
const { authJwt } = require("../middlewares");

module.exports = app => {
	const router = express.Router();

	router.param('carId', carController.getCarById); 

	// create a new comment
	 router.post("/cars/:carId/comment", [authJwt.verifyToken], commentController.create);

	 app.use("/api", router);
}