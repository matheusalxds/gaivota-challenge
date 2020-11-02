const FarmNDVIRoutesFactory = require("../factories/farm-ndvi-save-controller");
const { adapt } = require("../adapters/express-router-adapter");

module.exports = router => {
	router.post("/farm-ndvi", adapt(FarmNDVIRoutesFactory.compose()));
};
