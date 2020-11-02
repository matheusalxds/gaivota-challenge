module.exports = class AddFarmUseCase {
	constructor({ farmPrecipitationRepository }) {
		this.farmPrecipitationRepository = farmPrecipitationRepository;
	}

	async add(farmData) {
		return await this.farmPrecipitationRepository.add(farmData);
	}
};
