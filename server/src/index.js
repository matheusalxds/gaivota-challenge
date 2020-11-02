const mongo = require("./infra/helpers/mongo");
const PORT = process.env.PORT || 5000;

mongo.connectToServer().then(() => {
	const app = require("./main/config/app");

	app.listen(PORT, () => {
		console.warn("App is running at http://localhost:" + PORT);
	});
});

