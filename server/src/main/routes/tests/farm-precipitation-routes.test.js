const request = require("supertest");

const app = require("../../config/app");

const mongo = require("../../../infra/helpers/mongo");
const Model = require("../../../domain/models/farm-precipitation");

describe("Farm Precipitation routes", () => {
	beforeAll(async () => {
		await mongo.connectToServer(process.env.MONGO_URL);
	});

	beforeEach(async () => {
		await Model.deleteMany();
	});

	afterAll(async () => {
		await mongo.disconnect();
	});

	test("POST /farm-precipitation", async () => {
		await request(app)
			.post("/v1/farm-precipitation")
			.send({ value: 1, farmId: "valid_farm_id" })
			.expect(200);
	});
});
