const db = require('../models');
const {	getPagination	} = require('../utils/utils');
const Car = db.car;

/**
 * create a new car 
 * @param {*} req 
 * @param {*} res 
 */
const create = async (req, res) => {
	try {

		// Validate request
		if (!req.body.name) {
			res.status(400).send({ message: "Name can't be empty!" });
			return;
		}
		// Create a Tutorial
		const car = new Car(req.body);
		const result = await car.save();
		res.send(result);
	} catch (error) {
		res.status(500).send({
			message:
			error.message || "Some error occurred while creating the car.",
		});
	}
}

/**
 * Retrieve all cars from the database
 * @param {*} req 
 * @param {*} res 
 */
const findAll = async (req, res) => {
  const { currentPage, itemsPerPage, title } = req.query;
  var condition = title
    ? { title: { $regex: new RegExp(title), $options: "i" } }
    : {};
  const { limit, offset } = getPagination(currentPage, itemsPerPage);

	try {
			const results =  await Car.paginate(condition, { offset, limit });
			return  res.send({
												totalItems: results.totalDocs,
												items: results.docs,
												totalPages: results.totalPages,
												currentPage: results.page - 1,
											}); 
	} catch	(error)	{
		res.status(500).send({
			message:
				err.message || "Some error occurred while retrieving cars.",
		});
	}
};

exports.create = create;
exports.findAll = findAll;