const Model = require("../../../../domain/models/farm-ndvi");

module.exports = class FarmNDVIMongoRepository {
	async add(data) {
		if (!data) return null;
		const farmNDVI = new Model(data);
		await farmNDVI.save();
		return farmNDVI;
	}
};
