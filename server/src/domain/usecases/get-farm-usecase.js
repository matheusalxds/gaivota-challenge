module.exports = class GetFarmUseCase {
	constructor({ farmRepository }) {
		this.farmRepository = farmRepository;
	}

	async get(farmData) {
		return await this.farmRepository.get(farmData);
	}
};
