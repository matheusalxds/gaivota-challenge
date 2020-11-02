const mongoose = require("mongoose");
const Random = require("meteor-random");

const schema = new mongoose.Schema({
	_id: { type: String, default: () => Random.id(), required: true },
	value: { type: Number },
	farmId: { type: String, required: true },
	date: { Type: Date },
});

module.exports = mongoose.model("FarmPrecipitation", schema);
