const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const Schema = mongoose.Schema;

const carSchema = Schema({
  name: { type: String, required: true },
  description: String,
	mark: String,
	year: String,
	carburant: String,
	price: Number,
	image: String,
  comments: [
		{
			type: Schema.Types.ObjectId,
			ref: "Comment"
		}
	],
});

// custom object 
carSchema.method("toJSON", function() {
	const { __v, _id, ...object } = this.toObject();
	object.id = _id;
	return object;
});

// apply mongoose paginate 
carSchema.plugin(mongoosePaginate);

const carModel = mongoose.model('Car', carSchema);

module.exports = carModel;

