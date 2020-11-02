const options = { promiseLibrary: global.Promise, useNewUrlParser: true, useUnifiedTopology: true };
const mongoose = require("mongoose");
let client;

mongoose.Promise = global.Promise;
mongoose.set("debug", false);

module.exports = {
	connectToServer: async (url) => {
		client = await mongoose.connect(url || "mongodb://0.0.0.0:27017/gaivota-test", options);
		await client.connection.collection("users").deleteMany({ email: "admin@gaivota.ai" });
		await client.connection.collection("users").insertOne({
			name: "Admin",
			email: "admin@gaivota.ai",
			password: "admin"
		});
	},

	getDb: () => {
		return client;
	},

	disconnect: async () => {
		await client.disconnect();
	}
};
