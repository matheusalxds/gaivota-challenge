module.exports = class FarmRouter {
	constructor({ addFarm } = {}) {
		this.addFarm = addFarm;
	}

	async route(httpRequest) {
		try {
			const { body } = httpRequest;
			const farm = await this.addFarm.add(body);
			return {
				statusCode: 200,
				body: farm
			};
		} catch (e) {
			return new Error(e);
		}
	}
};
