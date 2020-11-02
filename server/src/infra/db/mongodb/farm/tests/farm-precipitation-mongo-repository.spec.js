const mongo = require("../../../../helpers/mongo");
const Model = require("../../../../../domain/models/farm-precipitation");

const FarmNDVIMongoRepository = require("../farm-ndvi-mongo-repository");

const makeFakeFarmNVDI = () => ({
	value: 1,
	farmId: 1
});

const makeSut = () => {
	return { sut: new FarmNDVIMongoRepository() };
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

	test("should return null if no data is provided", async () => {
		const { sut } = makeSut();

		const newFarmNVDI = await sut.add();
		expect(newFarmNVDI).toEqual(null);
	});

	test("should throw if Model throws", async () => {
		const { sut } = makeSut();
		const data = {
			value: 1
		};

		const promise = sut.add(data);
		await expect(promise).rejects.toThrow();
	});

	test("should return a farm on success", async () => {
		const { sut } = makeSut();
		const newFarmNVDI = await sut.add(makeFakeFarmNVDI());
		expect(newFarmNVDI.id).toBeTruthy();
	});
});
