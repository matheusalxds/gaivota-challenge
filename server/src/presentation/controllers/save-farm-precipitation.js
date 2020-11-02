module.exports = class FarmPrecipitationRouter {
	constructor({ updateFarmPrecipitation } = {}) {
		this.updateFarmPrecipitation = updateFarmPrecipitation;
	}

	async route(httpRequest) {
		try {
			const { body } = httpRequest;
			const farm = await this.updateFarmPrecipitation.add(body);
			return {
				statusCode: 200,
				body: farm
			};
		} catch (e) {
			return new Error(e);
		}
	}
};
