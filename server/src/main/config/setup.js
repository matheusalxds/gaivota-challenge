const body_parser = require("../middlewares/body-parser");
const cors = require("../middlewares/cors");

module.exports = (app)=> {
	app.use(cors());
	app.use(body_parser.json());
	app.use(body_parser.urlencoded({ extended: true }));
};
