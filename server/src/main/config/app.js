const express = require("express");
const app = express();

const setupApp = require("./setup");
const setupRoutes = require("./routes");

setupApp(app);
setupRoutes(app);

app.get("/", (req, res) => {
	res.status(200).send("Gaivota Test");
});

module.exports = app;
