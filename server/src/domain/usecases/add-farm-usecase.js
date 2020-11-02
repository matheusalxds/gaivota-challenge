module.exports = class AddFarmUseCase {
	constructor({ farmRepository }) {
		this.farmRepository = farmRepository;
	}

	async add(farmData) {
		return await this.farmRepository.add(farmData);
	}
};
