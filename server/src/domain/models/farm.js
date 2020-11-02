const mongoose = require("mongoose");
const Random = require("meteor-random");

const schema = new mongoose.Schema({
	_id: { type: String, default: () => Random.id(), required: true },
	name: { type: String },
	latitude: { type: Number, default: 0 },
	longitude: { type: Number, default: 0 },
	culture: { type: String },
	variety: { type: String },
	total_area: { type: Number, default: 0 },
	yield_estimation: { type: Number, default: 0 },
	price: { type: Number, default: 0 }
});

module.exports = mongoose.model("Farm", schema);
