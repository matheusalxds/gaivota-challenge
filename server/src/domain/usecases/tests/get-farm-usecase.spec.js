const GetFarmUseCase = require("../get-farm-usecase");

const makeFakeFarm = () => ({
	_id: "1313",
	latitude: 0.0,
	longitude: 0.0,
	total_area: 100.0,
	yield_estimation: 30.0,
	price: 300.0,
	name: "Farm A",
	__v: 0.0
});

const makeFarmRepository = () => {
	class FarmRepositoryStub {
		async get(id) {
			this.id = id;
			return new Promise(resolve => resolve(makeFakeFarm()));
		}
	}

	return new FarmRepositoryStub();
};

const makeSut = () => {
	const farmRepositoryStub = makeFarmRepository();
	const sut = new GetFarmUseCase({ farmRepository: farmRepositoryStub });

	return {
		sut,
		farmRepositoryStub
	};
};

describe("Get Farm UseCase", () => {
	test("should call FarmRepository with correct values", async () => {
		const { sut, farmRepositoryStub } = makeSut();

		const getSpy = jest.spyOn(farmRepositoryStub, "get");
		await sut.get("valid_id");
		expect(getSpy).toHaveBeenCalledWith("valid_id");
	});

	test("should throw if FarmRepository throws", async () => {
		const { sut, farmRepositoryStub } = makeSut();

		jest.spyOn(farmRepositoryStub, "get")
			.mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())));
		const promise = sut.get("valid_id");
		await expect(promise).rejects.toThrow();
	});

	test("should call FarmRepository with correct values", async () => {
		const { sut, farmRepositoryStub } = makeSut();
		const getSpy = jest.spyOn(farmRepositoryStub, "get");

		await sut.get("valid_id");
		expect(getSpy).toHaveBeenCalledWith("valid_id");
	});

	test("should return a farm on success", async () => {
		const { sut } = makeSut();
		const farm = await sut.get("valid_id");
		expect(farm).toEqual(makeFakeFarm());
	});
});
