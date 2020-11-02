module.exports = class AddFarmUseCase {
	constructor({ farmNDVIRepository }) {
		this.farmNDVIRepository = farmNDVIRepository;
	}

	async add(farmData) {
		return await this.farmNDVIRepository.add(farmData);
	}
};
