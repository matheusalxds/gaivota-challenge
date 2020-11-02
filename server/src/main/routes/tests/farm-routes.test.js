const request = require("supertest");

const app = require("../../config/app");

const mongo = require("../../../infra/helpers/mongo");
const Model = require("../../../domain/models/farm");

describe("Farm routes", () => {
	beforeAll(async () => {
		await mongo.connectToServer(process.env.MONGO_URL);
	});

	beforeEach(async () => {
		await Model.deleteMany();
	});

	afterAll(async () => {
		await mongo.disconnect();
	});

	test("POST /farms", async () => {
		await request(app)
			.post("/v1/farm")
			.send({ "name": "Farm A" })
			.expect(200);
	});

	test("GET /farms/:id", async () => {
		const fakeFarm = await Model.create({ name: "valid_name" });

		const { body, status } = await request(app).get(`/v1/farm/${fakeFarm._id}`);

		expect(status).toBe(200);
		expect(body._id).toBeTruthy();
		expect(body.name).toBe(fakeFarm.name);
	});
});
