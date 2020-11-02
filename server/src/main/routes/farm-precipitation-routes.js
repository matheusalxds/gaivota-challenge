const FarmPrecipitationRoutesFactory = require("../factories/farm-precipitation-save-controller");
const { adapt } = require("../adapters/express-router-adapter");

module.exports = router => {
	router.post("/farm-precipitation", adapt(FarmPrecipitationRoutesFactory.compose()));
};
