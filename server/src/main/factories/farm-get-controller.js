const GetFarmUseCase = require("../../domain/usecases/get-farm-usecase");
const FarmRepository = require("../../infra/db/mongodb/farm/farm-mongo-repository");
const FarmGetController = require("../../presentation/controllers/get-farm");

module.exports = class FarmControllerFactory {
	static compose() {
		const farmRepository = new FarmRepository();
		const getFarm = new GetFarmUseCase({ farmRepository });
		return new FarmGetController({ getFarm });
	}
};
