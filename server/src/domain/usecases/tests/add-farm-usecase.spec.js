const AddFarmUseCase = require("../add-farm-usecase");

const makeFakeFarmData = () => ({
	latitude: 0.0,
	longitude: 0.0,
	total_area: 100.0,
	yield_estimation: 30.0,
	price: 300.0,
	name: "Farm A",
	__v: 0.0
});

const makeFakeFarm = () => ({
	_id: "1313",
	...makeFakeFarmData()
});

const makeFarmPrecipitationRepository = () => {
	class FarmRepositoryStub {
		async add(id) {
			this.id = id;
			return new Promise(resolve => resolve(makeFakeFarm()));
		}
	}

	return new FarmRepositoryStub();
};

const makeSut = () => {
	const farmRepositoryStub = makeFarmPrecipitationRepository();
	const sut = new AddFarmUseCase({ farmRepository: farmRepositoryStub });

	return {
		sut,
		farmRepositoryStub
	};
};

describe("Add Farm UseCase", () => {
	test("should call FarmRepository with correct values", async () => {
		const { sut, farmRepositoryStub } = makeSut();

		const getSpy = jest.spyOn(farmRepositoryStub, "add");
		await sut.add(makeFakeFarm());
		expect(getSpy).toHaveBeenCalledWith(makeFakeFarm());
	});

	test("should throw if FarmRepository throws", async () => {
		const { sut, farmRepositoryStub } = makeSut();

		jest.spyOn(farmRepositoryStub, "add")
			.mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())));
		const promise = sut.add(makeFakeFarm());
		await expect(promise).rejects.toThrow();
	});

	test("should call FarmRepository with correct values", async () => {
		const { sut, farmRepositoryStub } = makeSut();
		const getSpy = jest.spyOn(farmRepositoryStub, "add");

		await sut.add(makeFakeFarm());
		expect(getSpy).toHaveBeenCalledWith(makeFakeFarm());
	});

	test("should return a farm on success", async () => {
		const { sut } = makeSut();
		const farm = await sut.add("valid_id");
		expect(farm).toEqual(makeFakeFarm());
	});
});
