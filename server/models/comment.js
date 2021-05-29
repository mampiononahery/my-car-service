const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = Schema({
	text: String,
	user: { type: Schema.Types.ObjectId, ref: 'User' },
	createdAt: { type: Date, default: Date.now },
	updateAt: Date
});

// custom object 
commentSchema.method("toJSON", function() {
	const { __v, _id, ...object } = this.toObject();
	object.id = _id;
	return object;
});

const commentModel = mongoose.model('Comment', commentSchema);

module.exports = commentModel;
