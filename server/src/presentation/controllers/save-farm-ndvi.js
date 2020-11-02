module.exports = class FarmNDVIRouter {
	constructor({ updateFarmNDVI } = {}) {
		this.updateFarmNDVI = updateFarmNDVI;
	}

	async route(httpRequest) {
		try {
			const { body } = httpRequest;
			const farm = await this.updateFarmNDVI.add(body);
			return {
				statusCode: 200,
				body: farm
			};
		} catch (e) {
			return new Error(e);
		}
	}
};
