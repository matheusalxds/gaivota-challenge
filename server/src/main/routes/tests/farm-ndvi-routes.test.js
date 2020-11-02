const request = require("supertest");

const app = require("../../config/app");

const mongo = require("../../../infra/helpers/mongo");
const Model = require("../../../domain/models/farm-ndvi");

describe("Farm NVDI routes", () => {
	beforeAll(async () => {
		await mongo.connectToServer(process.env.MONGO_URL);
	});

	beforeEach(async () => {
		await Model.deleteMany();
	});

	afterAll(async () => {
		await mongo.disconnect();
	});

	test("POST /farm-ndvi", async () => {
		await request(app)
			.post("/v1/farm-ndvi")
			.send({ value: 1, farmId: "valid_farm_id" })
			.expect(200);
	});
});
