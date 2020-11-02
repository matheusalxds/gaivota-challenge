const mongo = require("../../infra/helpers/mongo");
const jwt = require("jsonwebtoken");
const { JWT_PW } = process.env;

module.exports = router => {
	router.post("/login", async (req, res) => {
		const { email, password } = req.body;
		const db = mongo.getDb();
		const user = await db.collection("user").findOne({ email, password });
		const token = jwt.sign(user, JWT_PW);
		res.status(200).send({ userData: user, token });
	});
};
