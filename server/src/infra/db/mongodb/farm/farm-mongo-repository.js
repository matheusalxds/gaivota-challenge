const FarmModel = require("../../../../domain/models/farm");

module.exports = class FarmMongoRepository {
	async add(data) {
		if (!data) return null;
		const farm = new FarmModel(data);
		await farm.save();
		return farm;
	}

	async get(_id) {
		if (!_id) return null;
		return await FarmModel.findById(_id).lean();
	}
};
