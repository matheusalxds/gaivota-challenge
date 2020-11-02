const UpdateFarmUseCase = require("../../domain/usecases/add-farm-ndvi-usecase");
const FarmNDVIRepository = require("../../infra/db/mongodb/farm/farm-ndvi-mongo-repository");
const FarmPrecipitationSaveController = require("../../presentation/controllers/save-farm-ndvi");

module.exports = class FarmControllerFactory {
	static compose() {
		const farmNDVIRepository = new FarmNDVIRepository();
		const updateFarmNDVI = new UpdateFarmUseCase({ farmNDVIRepository });
		return new FarmPrecipitationSaveController({ updateFarmNDVI });
	}
};
