const FarmSaveRoutesFactory = require("../factories/farm-save-controller");
const FarmGetRoutesFactory = require("../factories/farm-get-controller");

const { adapt } = require("../adapters/express-router-adapter");

module.exports = router => {
	router.post("/farm", adapt(FarmSaveRoutesFactory.compose()));
	router.get("/farm/:id", adapt(FarmGetRoutesFactory.compose()));
};
