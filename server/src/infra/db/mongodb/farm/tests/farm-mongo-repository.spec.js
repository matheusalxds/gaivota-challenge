const mongo = require("../../../../helpers/mongo");
const Model = require("../../../../../domain/models/farm");

const FarmMongoRepository = require("../farm-mongo-repository");

const makeFakeFarm = () => ({
	latitude: 0.0,
	longitude: 0.0,
	total_area: 100.0,
	yield_estimation: 30.0,
	price: 300.0,
	name: "Farm A"
});

const makeSut = () => {
	return { sut: new FarmMongoRepository() };
};

describe("Farm Mongo", () => {
	beforeAll(async () => {
		await mongo.connectToServer(process.env.MONGO_URL);
	});

	beforeEach(async () => {
		await Model.deleteMany();
	});

	afterAll(async () => {
		await mongo.disconnect();
	});

	test("should return null if no id is provided", async () => {
		const { sut } = makeSut();
		const farm = await sut.get();
		expect(farm).toBeNull();
	});

	test("should return null if an invalid id is provided", async () => {
		const { sut } = makeSut();

		const farm = await sut.get("invalid_id");
		expect(farm).toBeNull();
	});

	test("should return data if a valid id is provided", async () => {
		const { sut } = makeSut();

		const fakeFarm = await Model.create(makeFakeFarm());
		const farm = await sut.get(fakeFarm._id);

		expect(farm).toEqual({
			name: fakeFarm.name,
			price: fakeFarm.price,
			total_area: fakeFarm.total_area,
			yield_estimation: fakeFarm.yield_estimation,
			latitude: fakeFarm.latitude,
			longitude: fakeFarm.longitude,
			_id: fakeFarm._id,
			__v: fakeFarm.__v
		});
	});

	test("should return null if no data is provided", async () => {
		const { sut } = makeSut();

		const newFarm = await sut.add();
		expect(newFarm).toEqual(null);
	});

	test("should return a farm on success", async () => {
		const { sut } = makeSut();
		const newFarm = await sut.add(makeFakeFarm());
		expect(newFarm.id).toBeTruthy();
	});
});
