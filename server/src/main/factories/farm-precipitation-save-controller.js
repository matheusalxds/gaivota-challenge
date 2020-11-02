const UpdateFarmPrecipitationUseCase = require("../../domain/usecases/add-farm-precipitation-usecase");
const FarmPrecipitationRepository = require("../../infra/db/mongodb/farm/farm-precipitation-mongo-repository");
const FarmPrecipitationSaveController = require("../../presentation/controllers/save-farm-precipitation");

module.exports = class FarmControllerFactory {
	static compose() {
		const farmPrecipitationRepository = new FarmPrecipitationRepository();
		const updateFarmPrecipitation = new UpdateFarmPrecipitationUseCase({ farmPrecipitationRepository });
		return new FarmPrecipitationSaveController({ updateFarmPrecipitation });
	}
};
