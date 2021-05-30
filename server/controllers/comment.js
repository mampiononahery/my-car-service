const db = require('../models');
const Car = db.car;
const Comment = db.comment;

/**
 * create comment 
 * @param {*} req 
 * @param {*} res 
 */
const create = async (req, res) => {
	try {
		const { text } = req.body;
		const carId = req.car.id;
		const userId = req.userId;
		const comment  = {
			text,
			user: userId
		}
		const newComment = await Comment.create(comment);

		if (newComment) {
			 const result = await Car.findByIdAndUpdate(carId, { $push: { comments: newComment._id } },{ new: true, useFindAndModify: false })
				.populate({
						path: "comments",
						options: { sort: { createdAt: -1 }},
						populate: { path: "user" }
					})
				.exec();
				res.send(result);
		}

	} catch(error) {
		res.status(500).send({
			message:
			error.message || "Some error occurred while creating comments.",
		});
	}
}

const remove = async (req, res) => {
  try {
    const car = req.car;
    // const user = req.user;
    const { commentId } = req.params;
    const result = await Car.findByIdAndUpdate(car._id, { $pull: { comments: { _id: commentId } } }, { new: true })
        .populate('comments.postedBy')
        .exec();

    res.status(200).json(result);
  } catch(error) {
    res.status(400).json(error);
  }
}

exports.create = create;
exports.remove = remove;