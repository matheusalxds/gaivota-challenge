module.exports = class FarmRouter {
	constructor({ getFarm = {} }) {
		this.getFarm = getFarm;
	}

	async route(httpRequest) {
		try {
			const { params } = httpRequest;
			const farm = await this.getFarm.get(params.id);
			return {
				statusCode: 200,
				body: farm
			};
		} catch (e) {
			return new Error(e);
		}
	}
};
