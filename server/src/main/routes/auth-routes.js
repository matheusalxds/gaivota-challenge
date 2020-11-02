const jwt = require("jsonwebtoken");
const { JWT_PW } = process.env;

module.exports = router => {
	router.get("/auth", (req, res) => {
		let token = req.header("Authorization");
		token = token.split(" ")[1];
		const ok = jwt.verify(token, JWT_PW);
		res.status(200).send(ok);
	});
};
