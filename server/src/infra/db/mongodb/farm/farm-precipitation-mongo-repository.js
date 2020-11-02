const Model = require("../../../../domain/models/farm-precipitation");

module.exports = class FarmPrecipitationMongoRepository {
	async add(data) {
		const farmPrecipitation = new Model(data);
		await farmPrecipitation.save();
		return farmPrecipitation;
	}
};
